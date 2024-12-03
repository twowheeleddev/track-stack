/**
 * fileService.js
 *
 * This module is responsible for handling the processing of individual files, extracting metadata, and organizing the data.
 */

import path from 'path';
import { parseFile } from 'music-metadata';

export const processFile = async (
  filePath,
  organizedData,
  outputDirectory
) => {
  try {
    const metadata = await parseFile(filePath);
    const artist = metadata.common.artist || 'Unknown Artist';
    const album = metadata.common.album || 'Unknown Album';

    if (!organizedData[artist]) {
      organizedData[artist] = {};
    }

    if (!organizedData[artist][album]) {
      organizedData[artist][album] = [];
    }

    const albumDir = path.join(outputDirectory, artist, album);
    await fs.mkdir(albumDir, { recursive: true });

    const newFilePath = path.join(albumDir, path.basename(filePath));
    await fs.rename(filePath, newFilePath); // Move file to organized location

    organizedData[artist][album].push({
      title: metadata.common.title || path.basename(filePath),
      filePath: newFilePath,
    });
  } catch (error) {
    console.error(
      `Error processing file ${filePath}: ${error.message}`
    );
  }
};
