import nodemon from 'nodemon';

export default () => {
  return nodemon({
    script: 'server.js',
    ext: 'js html scss'
  });
};
