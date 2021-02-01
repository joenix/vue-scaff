// Get Context from Utils File
const context = require.context('@/utils/', true, /\.js$/);
const modules = {};

// Loop Context
context.keys().forEach((key) => {
  // Slice and Replace `./name/store.js` to `name-store`
  const name = key.slice(2, -3).replace(/-[A-Z]/g, (w) => w.toLowerCase());

  // Get Package
  const pkg = context(key);

  // Insert PKG into Modules
  modules[name] = pkg.default || pkg;
});

// Set Utils
export default modules;
