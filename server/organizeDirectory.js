import { promises as fs } from "fs";
import path from "path";
import { parseFile } from "music-metadata";
import { bold, green, red } from "colorette";

export const organizeDirectory = async (directoryPath) => {
  const organizedData = {};

  async function processFile(filePath) {
    try {
      const metadata = await parseFile(filePath);
      const artist = metadata.common.artist || "Unknown Artist";
      const album = metadata.common.album || "Unknown Album";

      if (!organizedData[artist]) {
        organizedData[artist] = {};
      }

      if (!organizedData[artist][album]) {
        organizedData[artist][album] = [];
      }

      organizedData[artist][album].push({
        title: metadata.common.title || path.basename(filePath),
        filePath,
      });
    } catch (error) {
      console.error(bold(red(`Error processing file ${filePath}: ${error.message}`)));
    }
  }

  async function traverseDirectory(directory) {
    const filesAndDirs = await fs.readdir(directory, { withFileTypes: true });
    const subdirectories = [];

    for (const item of filesAndDirs) {
      const itemPath = path.join(directory, item.name);

      if (item.isDirectory()) {
        subdirectories.push(itemPath);
        await traverseDirectory(itemPath); // Recursive call
      } else if (item.isFile() && item.name.match(/\.(mp3|flac|wav|m4a|aac)$/i)) {
        await processFile(itemPath);
      }
    }

    return subdirectories; // Return the list of subdirectories
  }

  console.log(bold(green(`Organizing directory: ${directoryPath}`)));
  const subdirectories = await traverseDirectory(directoryPath);

  return {
    organizedData,
    subdirectories,
  };
};
