import del from 'del';

export default () => {
  return del.sync([
    'frontend/app/.tmp'
  ]);
};
