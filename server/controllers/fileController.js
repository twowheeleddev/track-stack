import { organizeDirectory } from "../services/fileService-deprecated.js";
import { logInfo, logError } from "../utils/logger.js";

// export const organizeFilesController = async (req, res) => {
//   try {
//     logInfo("Received file organization request.");
//     const organizedData = await organizeFiles(req.files);
//     res.json(organizedData);
//   } catch (error) {
//     logError(`Error organizing files: ${error.message}`);
//     res.status(500).json({ error: "Error organizing files" });
//   }
// };

export const organizeDirectoryController = async (req, res) => {
  const { directoryPath } = req.body;

  if (!directoryPath) {
    logError("Directory path is missing in the request.");
    return res.status(400).json({ error: "Directory path is required" });
  }

  try {
    logInfo(`Organizing directory: ${directoryPath}`);
    const organizedData = await organizeDirectory(directoryPath);
    res.json(organizedData);
  } catch (error) {
    logError(`Error organizing directory: ${error.message}`);
    res.status(500).json({ error: "Error organizing directory" });
  }
};
