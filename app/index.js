/**
 * Main JS file for project.
 */

/* global _ */
'use strict';

// Dependencies
import Navigo from 'navigo';
import utilsFn from './utils.js';
import api from './api.js';
import Page from './components/page.svelte.html';

// Setup utils function, handles pym and the what not
utilsFn({ });

// Setup router
const router = new Navigo(null, true, '#!');

// Set up page
const page = new Page({
  target: document.querySelector('main')
});

// Get election mn-elections-api data
api('election', 'election').then((election) => {
  page.set({ election: election });
}).catch(handleError);

// Get dashboard data
api('results', 'sets-dashboard').then((contests) => {
  page.set({ dashboardContests: _.keyBy(contests, 'id') });
}).catch(handleError);

// Get dashboard data
api('results', 'all-search').then((search) => {
  page.set({ searchData: search });
}).catch(handleError);




// Default/dashboard route
router.on(() => {
  page.set({ page: 'dashboard' });
});

// Contest route
router.on('contest/:id', (params) => {
  page.set({ page: 'contest', contestID: params.id });
});

// Load reouter
router.resolve();
page.set({ routerLoaded: true });


// General error handler
function handleError(e) {
  console.error(e);
}
