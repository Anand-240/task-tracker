// JWT removed. Routes are now unprotected.
export const protect = (req, res, next) => {
  next();
};