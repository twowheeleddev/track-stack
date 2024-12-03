/**
 * directoryService.js
 *
 * This module is responsible for handling the traversing of directories and collecting any sub-directories that may be present in the selected directory.
 */

import { promises as fs } from 'fs';
import path from 'path';

export const traverseDirectory = async (directory, processFile) => {
  const filesAndDirs = await fs.readdir(directory, {
    withFileTypes: true,
  });
  const subdirectories = [];

  for (const item of filesAndDirs) {
    const itemPath = path.join(directory, item.name);

    if (item.isDirectory()) {
      subdirectories.push(itemPath);
      await traverseDirectory(itemPath, processFile); // Recursively traverse
    } else if (
      item.isFile() &&
      item.name.match(/\.(mp3|flac|wav|m4a|aac)$/i)
    ) {
      await processFile(itemPath); // Process individual files
    }
  }

  return subdirectories;
};
