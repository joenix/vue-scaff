export default (context, callback) => {
  // Set Modules
  const modules = {};

  // Loop Context
  context.keys().forEach((key) => {
    // Get Depend
    const depend = context(key);

    // Get Key-Value
    const { name, pkg } = callback(depend.default || depend, key);

    // Set Package into Modules
    modules[name] = pkg;
  });

  // Return
  return modules;
};
