const { check, validationResult } = require('express-validator');

const validate = (method) => {
  switch (method) {
    case 'createUser': {
      return [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').not().isEmpty(),
        check('email', 'Invalid email').isEmail(),
        check('password', 'Password is required').not().isEmpty(),
        check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
      ];
    }

    case 'loginUser': {
      return [
        check('email', 'Email is required').not().isEmpty(),
        check('email', 'Invalid email').isEmail(),
        check('password', 'Password is required').not().isEmpty(),
      ];
    }

    default:
      return [];
  }
};

const validateInput = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validate, validateInput };