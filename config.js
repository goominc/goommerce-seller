const defaultConfig = {
  port: 3001,
  title: 'GOOMMERCE-SELLER',
  cloudfront: {
    domain: 'd1v1n6p63zq2b9.cloudfront.net',
  },
  bundle: {
    version: '',
  },
};

const environmentConfig = {
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(defaultConfig, environmentConfig);
