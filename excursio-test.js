"use strict";

const excursio = require( "./excursio.js" );

console.log( excursio.bind( { "hello": "world" } )( "1+1" ) );
