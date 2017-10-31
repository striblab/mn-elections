/**
 * Function to help with accesibility.
 */

/* global window, document, _ */
'use strict';

// Announce
let annouce = _.throttle((message = '') => {
  if (!message) {
    return;
  }

  // Annouce
  let a = document.getElementById('election-app-anouncer');
  a.textContent = message;

  // Set tab

  // Remove annouce
  let wordsPerMillseconds = 130 / 60 * 1000;
  _.delay(() => {
    a.textContent = '';
  }, Math.max(3000, message.split(' ').length * wordsPerMillseconds));
}, 1000);

// Export
// Can't seem to get this to work
//export { annouce };
export default () => {
  return {
    announce: annouce
  };
};
