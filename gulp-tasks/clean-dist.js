import del from 'del';

export default done => {
  return del.sync([
    'dist'
  ], done);
};
