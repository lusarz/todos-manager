import nodemon from 'nodemon';

export default module.exports = () => {
  return nodemon({
    script: 'server.js',
    ext: 'js html scss'
  });
};
