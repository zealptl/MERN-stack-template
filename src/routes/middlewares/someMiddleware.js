const Joi = require('@hapi/joi');
const SomeModel = require('../../models/something');

const validationSchema = Joi.object({
  // req.body properties
});

// validate req.body to make sure all props are valid
const validateData = async (req, res) => {
  try {
    const values = await validationSchema.validateAsync(req.body);
  } catch (error) {
    res.status('error code').json({ msg: 'Error occured' });
  }
};

const someMiddleware = async (req, res) => {
  // destructre validated properties
  const {} = await validateData(req, res);

  try {
    // middleware logic
  } catch (error) {
    res.status(500).json({ msg: 'Error occured' });
  }
};

module.exports = someMiddleware;
