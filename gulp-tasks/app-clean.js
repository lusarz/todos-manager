import del from 'del';

export default module.exports =  done => {
  return del.sync([
    'dist'
  ], done);
};
