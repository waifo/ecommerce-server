export const createReadQuery = callback => {
  return async () => {
    try {
      const input = callback();
      const result = await input.query;
      return result;
    } catch (error) {
      console.log("Error", error);
    }
  };
};
export const createWriteQuery = callback => {
  return async () => {
    try {
      const input = callback();
      const result = await input.query;
      if (typeof result.run === "function")
        throw new Error("Error in write query");
      return result;
    } catch (error) {
      console.log("Error", error);
    }
  };
};
