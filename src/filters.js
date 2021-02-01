// Get Context from Every Pages
const context = require.context('@/filters/', true, /\.js$/);
const modules = {};

export default {
  // For Use
  install(Vue) {
    // Loop Context
    context.keys().forEach((key) => {
      // Slice and Replace `./name/store.js` to `name-store`
      const name = key.slice(2, -3).replace(/-[A-Z]/g, (w) => w.toLowerCase());

      // Get Package
      const pkg = context(key);

      // Register Filter into Vue
      Vue.filter(name, pkg.default || pkg);
    });
  },
};
