const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://pokedex:pokedex@ds119820.mlab.com:19820/pokedex',
  port: process.env.PORT || 8000,
};

export default config;
