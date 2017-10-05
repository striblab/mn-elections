/**
 * API function
 * https://github.com/striblab/mn-elections-api
 */

// Dependencies
// eslint-disable-next-line
import fetch from 'whatwg-fetch';

// Top level config
let apiBase = 'https://s3.amazonaws.com/stribtest-bucket/test-elections-nutt';
//let apiBase = 'http://localhost:8080';
let electionID = '20171107';

// Main function
function api(type, set) {
  let url = [apiBase, electionID, type, set + '.json'].join('/');

  return new Promise((resolve, reject) => {
    window
      .fetch(url)
      .then(response => {
        if (response.status < 300) {
          return response;
        } else {
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
