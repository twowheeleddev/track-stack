import app from "./app.js";
import { logStartup, logInfo } from "./utils/logger.js";

const PORT = 8080;

app.listen(PORT, () => {
  logStartup(`Server is running on http://localhost:${PORT}`);
  logInfo("Ready to organize your iTunes library!");
});
