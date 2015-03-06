'use strict';

var isStringArray = require( './../lib' );

console.log( isStringArray( ['beep','boop'] ) );
// returns true

console.log( isStringArray( [ new String( 'beep' ) ] ) );
// returns false

console.log( isStringArray( [] ) );
// returns false

console.log( isStringArray( [1,2,3] ) );
// returns false
