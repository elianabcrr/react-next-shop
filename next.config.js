/** @type {import('next').NextConfig} */
// integracion de pwa
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
// modulo que exporta la integracion del pwa y oconfiguracion personalizada
module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/]
  },
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'a.rgbimg.com', 'encrypted-tbn0.gstatic.com', 'www.elnuevofenix.mx']
  },
});