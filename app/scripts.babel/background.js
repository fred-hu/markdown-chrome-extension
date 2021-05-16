'use strict';
import { injectCustomJs } from './tools/index.js';
chrome.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion);
});
console.log(injectCustomJs)
console.log('\'Allo \'Allo! Event Page');
