export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a7a13a18852cd9b0e7b442bc911f7f5e'),
  },
});
