module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f4f566531a515b013290bac7dedc3e23'),
  },
});
