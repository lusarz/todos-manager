import del from 'del';

export default module.exports = () => {
  return del.sync([
    'frontend/dist'
  ]);
};
