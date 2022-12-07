const yup = require('yup');

const validationSchema = yup.object({
  name: yup.string().trim().required(),
  email: yup.string().trim().email().required(),
  gender: yup.boolean(),
  password: yup.string().required(),
});

module.exports = async (req, res, next) => {
  try {
    const validatedBody = await validationSchema.validate(req.body);
    console.log(validatedBody);
    next();
  } catch (err) {
    res.status(400).end('error: ' + err.message);
  }
};
