import { useEffect, useRef } from "react";

function OutputPanel({ output }) {
  const outputRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-scroll and focus when output changes
  useEffect(() => {
    if (output !== null && containerRef.current) {
      containerRef.current.focus();
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [output]);

  // Ctrl+A to select all output text
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "a") {
      e.preventDefault();
      if (outputRef.current) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(outputRef.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  return (
    <div className="h-full bg-base-100 flex flex-col">
      <div className="px-4 py-2 bg-base-200 border-b border-base-300 font-semibold text-sm">
        Output
      </div>
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="flex-1 overflow-auto p-4 outline-none"
      >
        <div ref={outputRef}>
          {output === null ? (
            <p className="text-base-content/50 text-sm">Click "Run Code" to see the output here...</p>
          ) : output.success ? (
            <pre className="text-sm font-mono text-success whitespace-pre-wrap">{output.output}</pre>
          ) : (
            <div>
              {output.output && (
                <pre className="text-sm font-mono text-base-content whitespace-pre-wrap mb-2">
                  {output.output}
                </pre>
              )}
              <pre className="text-sm font-mono text-error whitespace-pre-wrap">{output.error}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OutputPanel;
