const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/onos",
    createProxyMiddleware({
      target: "http://192.168.8.101:8181",
      changeOrigin: true,
      //   pathRewrite: {
      //     "^/onos": "", // Remove the '/onos' prefix when forwarding the request
      //   },
    })
  );
};
