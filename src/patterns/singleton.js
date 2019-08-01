const Singleton = (() => {
  let instance;

  const createInstance = name => {
    return {
      text: `Hello ${name}!`
    };
  };

  return {
    getInstance: name => {
      if (!instance) {
        instance = createInstance(name);
      }
      return instance;
    }
  };
})();

export default Singleton;
