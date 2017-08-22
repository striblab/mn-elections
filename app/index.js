/**
 * Main JS file for project.
 */

/* global _ */
'use strict';

// Dependencies
import utilsFn from './utils.js';
import api from './api.js';
import Dashboard from './components/dashboard.svelte.html';

// Setup utils function, handles pym and the what not
utilsFn({ });

// Set up dashboard
const d = new Dashboard({
  target: document.querySelector('main')
});
window.thing = d;

// Get election mn-elections-api data
api('election', 'election').then((meta) => {
  d.set(meta);
}).catch(handleError);

// Get dashboard data
api('results', 'sets-dashboard').then((contests) => {
  d.set({
    contests: _.keyBy(contests, 'id')
  });
}).catch(handleError);


// General error handler
function handleError(e) {
  console.error(e);
}
