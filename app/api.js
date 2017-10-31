/**
 * API function
 * https://github.com/striblab/mn-elections-api
 */

'use strict';

// Dependencies
// eslint-disable-next-line
import fetch from 'whatwg-fetch';

// Top level config
//let apiBase = 'https://s3.amazonaws.com/stribtest-bucket/test-elections-nutt';
//let apiBase = 'http://localhost:8080';
let apiBase = 'http://static.startribune.com/elections/mn-elections-api/v1';
let electionID = '20171107';

// Main function
function api(type, set) {
  // Make a minute query string, to help ensure cache busting, though
  // headers should be set correctly
  let now = new Date();
  let cacheTime = [
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes()
  ].join('');
  let url = [apiBase, electionID, type, set + '.json?time=' + cacheTime].join(
    '/'
  );

  return new Promise((resolve, reject) => {
    window
      .fetch(url)
      .then(response => {
        if (response.status < 300) {
          return response;
        }
        else {
          var error = new Error(response.statusText);
          error.response = response;
          reject(error);
        }
      })
      .then(response => {
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });
}

// Export
export default api;
