"use strict";

const assert = require( "assert" );
const excursio = require( "./excursio.js" );

assert.equal( excursio.bind( { "hello": "world" } )( "1+1" ), 2 );

console.log( "ok" );
