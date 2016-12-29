import del from 'del';

let task = () => {
  return del.sync([
    'frontend/app/scripts/templates.js',
    'frontend/app/styles/*.css'
  ]);
};

module.exports = task;
export default task;
