/**
 * directoryRoute.js
 *
 * This module is responsible for defining all the needed endpoints for communications with the front end server.
 */

import express from 'express';
import dialog from 'node-file-dialog';
import { organizeDirectory } from '../services/organizeService.js'; // Use the new organize service
import { logInfo, logError } from '../utils/logger.js'; // Custom logger for consistent logging

const router = express.Router();

/**
 * Endpoint to select a directory.
 * This endpoint uses the `node-file-dialog` package to allow users to select a directory.
 * The selected directory is returned as an array.
 */
router.get('/select-directory', async (req, res) => {
  logInfo('Endpoint /select-directory hit');

  try {
    const selectedDirectory = await dialog({
      type: 'directory', // Opens a system directory selection dialog
    });

    logInfo(`Selected Directory: ${selectedDirectory}`);

    if (!selectedDirectory) {
      logError('No directory was selected.');
      return res
        .status(400)
        .json({ error: 'No directory selected.' });
    }

    // Respond with the selected directory
    res.json({ directory: selectedDirectory });
  } catch (error) {
    logError(`Error selecting directory: ${error.message}`);
    res.status(500).json({ error: 'Failed to select directory.' });
  }
});

/**
 * Endpoint to organize a directory.
 * Accepts an input directory path (directoryPath) and an output directory path (outputDirectory) from the request body.
 * Organizes all audio files in the input directory and its subdirectories based on metadata.
 */
router.post('/organize-directory', async (req, res) => {
  const { inputDirectory, outputDirectory } = req.body;

  // Validate that both input and output directories are provided
  if (!inputDirectory || !outputDirectory) {
    logError('Both input and output directories are required.');
    return res
      .status(400)
      .json({ error: 'Input and output directories are required.' });
  }

  try {
    logInfo(`Processing directory: ${inputDirectory}`);
    logInfo(`Output directory: ${outputDirectory}`);

    // Call the organize service to process the directory
    const { organizedData, subdirectories } = await organizeDirectory(
      inputDirectory,
      outputDirectory
    );

    logInfo(`Successfully organized directory: ${inputDirectory}`);

    // Respond with organized data and subdirectories
    res.json({
      organizedData,
      subdirectories,
    });
  } catch (error) {
    logError(`Error organizing directory: ${error.message}`);
    res.status(500).json({ error: 'Failed to organize directory.' });
  }
});

export default router;
