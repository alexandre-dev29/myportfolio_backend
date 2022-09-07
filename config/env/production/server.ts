export default ({ env }) => ({
  host: "localhost",
  port: `${process.env.PORT || 8081}`,
  proxy: { enabled: false },
  app: {
    keys: env.array("APP_KEYS"),
  },
});
