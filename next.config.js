require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'template.hasthemes.com', 
      'www.ecommerce-admin.com',
      'dummyimage.com'
    ]
  },
  env: {
    SHIPPING_TOKEN: process.env.SHIPPING_TOKEN,
    BACKEND_URL: process.env.BACKEND_URL
  }
};

module.exports = nextConfig
