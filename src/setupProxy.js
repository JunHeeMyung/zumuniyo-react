const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware(
            ['/main',
            '/member',
            '/advertisement',
            '/coupon',
            '/favorites',
            '/location',
            '/menucategory',
            '/menu',
            '/noticeborad',
            '/order',
            '/ordergroup',
            '/review',
            '/reviewrecommend',
            '/shop',], 
        {
            target: 'http://localhost:7777',
            changeOrigin: true
        })
    );
};