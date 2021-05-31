// Use Foreach
import foreach from 'foreach.js';

// Use Merge
import merge from './merge';

// Set Each
function each(data, callback) {
  return Object.keys(data).map(key => callback(data[key], key));
}

// Set Catcher
async function catcher(handler, root, params) {
  let result = {};

  try {
    result = await handler(root, params);
  } catch (error) {
    result = error;
  }

  return result;
}

/**
 * States
 * ======== ======== ========
 */
function states(settings = {}) {
  return {
    error: false,
    ...settings,
  };
}

/**
 * Actions
 * ======== ======== ========
 */
function action(settings = {}) {
  // Set Json
  const json = {};

  // Loop Settings
  each(settings, (action, name) => {
    // Set Action into Json
    json[name] = async (root, params) => {
      // Get Await Result
      const result = await catcher(action, root, params);
      // Debugger
      if (result && result.errMsg) {
        console.log(result.errMsg);
      }
      // Update State when on Error
      root.commit('STATE_UPDATE', result);
      // Return for Logic
      return result;
    };
  });

  // Export Actions
  return json;
}

/**
 * Mutations
 * ======== ======== ========
 */
function mutation(settings = {}) {
  // Set Json
  const json = {
    STATE_UPDATE(state, data) {
      return merge(state, data, true);
    },
  };

  // Loop Settings
  each(settings, (mutation, name) => {
    // Set Mutation into Json
    json[name] = (state, data) => mutation(state, data);
  });

  // Export Mutations
  return json;
}

// Export
export default { states, mutation, action };
