/**
 * logger.js
 *
 * This module is responsible for logging messages to the console.
 * it uses colorette to spice up the console. colorette is very easy to implement from all the packages I have tried it was the easiest. Thumbs up colorette!
 */

import { bold, green, yellow, red, cyan } from 'colorette';

export const logInfo = message =>
  console.log(`${green(bold('[INFO]'))} ${message}`);
export const logWarning = message =>
  console.log(`${yellow(bold('[WARNING]'))} ${message}`);
export const logError = message =>
  console.log(`${red(bold('[ERROR]'))} ${message}`);
export const logStartup = message =>
  console.log(`${cyan(bold('[STARTUP]'))} ${message}`);
