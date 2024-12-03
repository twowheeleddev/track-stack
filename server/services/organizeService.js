/**
 * organizeService.js
 *
 * This module is responsible for combining directory traversal and file processing.
 */

import { traverseDirectory } from './directoryService.js';
import { processFile } from './fileService.js';

export const organizeDirectory = async (
  inputDirectory,
  outputDirectory
) => {
  const organizedData = {};

  const processFileWrapper = async filePath =>
    processFile(filePath, organizedData, outputDirectory);

  console.log(`Organizing directory: ${inputDirectory}`);
  const subdirectories = await traverseDirectory(
    inputDirectory,
    processFileWrapper
  );

  return {
    organizedData,
    subdirectories,
  };
};
