const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
// هذه الخطوة جداا مهمة لانه البروكيس لايعمل بالطريقة المشروحة بالفديو
