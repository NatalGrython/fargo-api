const validation = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).json({
      message: "Validation error",
    });
  }
};

module.exports = { validation };
