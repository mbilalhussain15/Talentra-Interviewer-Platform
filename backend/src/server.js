import app from "./app.js";
import { ENV } from "./lib/env.js";

app.listen(ENV.PORT || 3000, () => {
  console.log("Server is running on port:", ENV.PORT || 3000);
});
