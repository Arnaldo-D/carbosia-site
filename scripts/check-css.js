const fs = require('fs');
const css = fs.readFileSync(process.argv[2], 'utf8');
const classes = ['.gap-4', '.prose', '.max-w-4xl'];
const missing = classes.filter(c => !css.includes(c));
if (missing.length) {
  console.error('Missing classes:', missing.join(', '));
  process.exit(1);
}
console.log('All classes present');
