var fs = require( 'fs' );
var parser = require( '../lib/parser' );
var data = require( './data/testData' );

var template = fs.readFileSync( __dirname + '/data/testTemplate', 'utf8' );

var starTime = Date.now();

console.log( parser( template, data ) );

console.log( Date.now() - starTime );