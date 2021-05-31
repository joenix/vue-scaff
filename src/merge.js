// Use Foreach
import foreach from 'foreach.js';

// Check Constructor of Target
function check(target, type = Object) {
  return [null, undefined].includes(target) ? false : target.constructor === type;
}

// Deep Function
function deep(origin, target) {
  // Force Stop
  if (!check(origin) || !check(target)) {
    return origin;
  }

  // Loop Target
  foreach(target, (value, key) => {
    // Check ? Complex : Single
    origin[key] = check(value) ? deep(origin[key] || {}, value) : value;
  });

  // Endless
  return origin;
}

// Export
export default (origin = {}, target = {}) => deep(origin, target);
