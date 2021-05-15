// Use Catcher
import catcher from './catcher';

// Get Context from Utils File
const context = require.context('@/utils/', true, /\.js$/);

// Catch Modules
const modules = catcher(context, (pkg, key) => {
  // Slice and Replace `./pre-name.js` to `preName`
  const name = key.slice(2, -3).replace(/-[A-Z]/g, (w) => w.toLowerCase());

  // Return
  return { name, pkg };
});

// Set Utils
export default modules;
