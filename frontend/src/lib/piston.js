// Piston API - self hosted public instance
const PISTON_API = "https://emkc.org/api/v2/piston";

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
};

export async function executeCode(language, code) {
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return { success: false, error: `Unsupported language: ${language}` };
    }

    // Try primary API
    let response = await fetch(`${PISTON_API}/execute`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: languageConfig.language,
        version: languageConfig.version,
        files: [{ name: `main.${getFileExtension(language)}`, content: code }],
      }),
    });

    // Fallback to alternative public Piston instance
    if (!response.ok) {
      response = await fetch("https://piston-api.ariansjdi.repl.co/api/v2/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: languageConfig.language,
          version: "*",
          files: [{ name: `main.${getFileExtension(language)}`, content: code }],
        }),
      });
    }

    if (!response.ok) {
      return { success: false, error: "Code execution service unavailable. Please try again." };
    }

    const data = await response.json();
    const output = data.run?.output || "";
    const stderr = data.run?.stderr || "";

    if (stderr) return { success: false, output, error: stderr };
    return { success: true, output: output || "No output" };

  } catch (error) {
    return { success: false, error: `Failed to execute code: ${error.message}` };
  }
}

function getFileExtension(language) {
  return { javascript: "js", python: "py", java: "java" }[language] || "txt";
}
