export default {
  // For Use
  install(Vue, modules) {
    // Get Key
    const keys = Object.keys(modules);

    // Extend Into Vue
    keys.forEach((key) => {
      // Bind On Vue
      Vue.prototype[`$${key}`] = modules[key];

      // Bind On Uni
      if (typeof uni) {
        uni[`$${key}`] = modules[key];
      }
    });
  },
};
