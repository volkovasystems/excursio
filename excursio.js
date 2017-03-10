/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "excursio",
			"path": "excursio/excursio.js",
			"file": "excursio.js",
			"module": "excursio",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/excursio.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Execute a comment or string as expression.
	@end-module-documentation

	@include:
		{
			"depher": "depher",
			"falzy": "falzy",
			"komento": "komento",
			"protype": "protype",
			"rmor": "rmor",
			"wichis": "wichis",
			"zelf": "zelf"
		}
	@end-include
*/

const depher = require( "depher" );
const falzy = require( "falzy" );
const komento = require( "komento" );
const protype = require( "protype" );
const rmor = require( "rmor" );
const wichis = require( "wichis" );
const zelf = require( "zelf" );

const excursio = function excursio( expression, depth ){
	/*;
		@meta-configuration:
			{
				"expression:required": [
					"string",
					"function"
				],
				"depth": "number"
			}
		@end-meta-configuration
	*/

	if( falzy( expression ) || !protype( expression, STRING + FUNCTION ) ){
		throw new Error( "invalid expression" );
	}

	depth = depher( arguments, NUMBER, 1 );

	let self = zelf( this );

	if( protype( expression, STRING ) ){
		return ( function evaluate( ){
			try{
				let context = JSON.stringify( wichis( rmor( self, depth ), { } ) );

				expression = `
					( function execute( ){
						var result = undefined;

						try{
							result = ( ${ expression || undefined } );

						}catch( error ){
							throw new Error( "error executing expression, " + error.stack );
						}

						return result;
					} )
					.bind( ( function context( ){
						try{
							var self = JSON.parse( '${ context }' );

							if( Object.keys( self ).length == 0 ){
								if( typeof global != "undefined" ){
									return global;
								}

								if( typeof window != "undefined" ){
									return window;
								}
							}

							return self;

						}catch( error ){
							throw new Error( "error resolving expression context, " + error.stack );
						}
					} )( ) )( )
				`;

				return eval( expression );

			}catch( error ){
				throw new Error( `error evaluating expression, ${ error.stack }` );
			}

		} ).call( self );
	}

	if( protype( expression, FUNCTION ) ){
		return excursio.bind( self )( komento( expression ), depth );
	}
};

module.exports = excursio;
