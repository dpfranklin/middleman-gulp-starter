// This is where it all goes :)

require('_lib.js');

var _    = require("lodash");
var team = require('_test.js');
var ut   = _.uniq(team);
var rut  = _.take(ut, 3)

console.log('full team list:  ' + team);
console.log('Lodash removed redundancies:  ' + ut);
console.log('Lodash took 3:  ' + rut);
console.log( "Exposed jQuery version: " + $.fn.jquery );

$(function() {
  var jqtest = $("p.doc a").attr('href');
  console.log( 'Exposed jQuery found link url upon document ready: ' +jqtest );
});
