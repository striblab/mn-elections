/**
 * Main JS file for project.
 */

'use strict';

// Dependencies
import Navigo from 'navigo';
import utilsFn from './utils.js';
import api from './api.js';
import access from './accessibility.js';
import Page from './components/page.svelte.html';

// Setup utils function, handles pym and the what not
utilsFn({});

// Setup router
const router = new Navigo(null, true, '#!');

// Set up page
const page = new Page({
  target: document.querySelector('main'),
  data: {
    router: router
  }
});

// Get search data.  TODO, move to search component
api('results', 'all-search')
  .then(search => {
    page.set({ searchData: search });
  })
  .catch(handleError);

// Default/dashboard route
router.on(() => {
  page.set({ page: 'dashboard' });
});

// Contest route
router.on('contest/:id', params => {
  page.set({ page: 'contest', contestID: params.id });
});

// Set
router.on(/set\/(.*)/, params => {
  page.set({ page: 'set', setID: params });
});

// Search
router.on('search', () => {
  page.set({ page: 'search', searchQuery: '' });
});
router.on(/search\/(.*)/, params => {
  page.set({ page: 'search', searchQuery: params });
});

// General hooks
router.hooks({
  after: () => {
    page.set({
      lastRoute: router._lastRouteResolved
        ? router._lastRouteResolved.url
        : undefined
    });

    access().announce('Election result page has been changed.');
  }
});

// Load reouter
router.resolve();
page.set({ routerLoaded: true });

// General error handler
function handleError(e) {
  console.error(e);
}
