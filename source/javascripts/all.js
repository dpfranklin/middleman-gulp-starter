// This is where it all goes :)

require("expose?$!jquery");

var _    = require("lodash");
var team = require('_test.js');
var uniqt   = _.uniq(team);
var take3t  = _.take(uniqt, 3)

console.log('full team list:  ' + team);
console.log('Lodash removed redundancies:  ' + uniqt);
console.log('Lodash took 3:  ' + take3t);
console.log( "Exposed jQuery version: " + $.fn.jquery );

$(function() {
  var jqtest = $("p.doc a").attr('href');
  console.log( 'Exposed jQuery found link url upon document ready: ' +jqtest );
});
