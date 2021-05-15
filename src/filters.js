// Use Catcher
import catcher from './catcher';

// Get Context from Every Pages
const context = require.context('@/filters/', true, /\.js$/);

// Export
export default {
  // For Use
  install(Vue) {
    // Loop Context
    catcher(context, (pkg, key) => {
      // Slice and Replace `./pre-name.js` to `preName`
      const name = key.slice(2, -3).replace(/-[A-Z]/g, (w) => w.toLowerCase());

      // Register Filter into Vue
      Vue.filter(name, pkg);

      // Return
      return { name, pkg }
    });
  },
};
