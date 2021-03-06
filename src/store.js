// Use Catcher
import catcher from './catcher';

// Use Efficient
import efficient from './efficient';

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

// Catch Modules
const modules = catcher(context, (depend, key) => {
  // Slice and Replace `./name/store.js` to `name-store`
  const name = key.slice(2, -3).replace(/\/store/g, '').replace('/', '-');

  // Get Package by Running
  const pkg = depend({ ...$utils, $apis, $http, $ext });

  // Get Parts
  const { states, mutation, action } = efficient;

  // Reset State
  pkg.state = states(pkg.state);

  // Reset Mutations
  pkg.mutations = mutation(pkg.mutations);

  // Reset Actions
  pkg.actions = action(pkg.actions);

  // Set Namespaced
  pkg.namespaced = true;

  // Return
  return { name, pkg }
});

// Set Store
export default new Vuex.Store({
  modules,
});
