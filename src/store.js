// Import Vue and Vuex
import Vue from 'vue';
import Vuex from 'vuex';

// Import Utils
import $utils from './utils';

// Import Apis
import $apis from './apis';

// Import Http
import $http from './http';

// Import Ext
import $ext from './ext';

// Use Vuex
Vue.use(Vuex);

// Get Context from Every Pages
const context = require.context('@/pages/', true, /store\.js$/);
const modules = {};

// Loop Context
context.keys().forEach((key) => {
  // Slice and Replace `./name/store.js` to `name-store`
  const name = key.slice(2, -3).replace(/\/store/g, '').replace('/', '-');

  // Get Package
  const pkg = context(key).default({ ...$utils, $apis, $http, $ext });

  // Set Namespaced
  pkg.namespaced = true;

  // Insert PKG into Modules
  modules[name] = {
    ...pkg,
  };
});

// Set Store
export default new Vuex.Store({
  modules,
});
