import del from 'del';

let task = () => {
  return del.sync([
    'frontend/app/.tmp'
  ]);
};

module.exports = task;
export default task;
