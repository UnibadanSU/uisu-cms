module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dd7e9682ea66d8229e01198d0f26e91c'),
  },
});
