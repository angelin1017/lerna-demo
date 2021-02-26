const esModule = require('es-module').default;
const commonJS = require('commonjs');
let formateTime = require('npm-publish-module1-fs/index');
const time = formateTime(new Date())
console.log('fengsi', time)

(function() {
  console.log('This is core function.');
  console.log(esModule());
  console.log(commonJS());
})();
