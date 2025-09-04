const fs = require('fs');
const yaml = require('yaml');

function loadResume() {
  const file = fs.readFileSync('./resume/resume.yaml', 'utf8');
  return yaml.parse(file);
}

module.exports = loadResume;
