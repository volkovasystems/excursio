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
			"calcify": "calcify",
			"falzy": "falzy",
			"komento": "komento",
			"protype": "protype",
			"wichevr": "wichevr",
			"zelf": "zelf"
		}
	@end-include
*/

const calcify = require( "calcify" );
const falzy = require( "falzy" );
const komento = require( "komento" );
const protype = require( "protype" );
const wichevr = require( "wichevr" );
const zelf = require( "zelf" );

const excursio = function excursio( expression ){
	/*;
		@meta-configuration:
			{
				"expression:required": [
					"string",
					"function"
				]
			}
		@end-meta-configuration
	*/

	let self = zelf( this );

	if( falzy( expression ) || !protype( expression, STRING + FUNCTION ) ){
		throw new Error( "invalid expression" );
	}

	if( protype( expression, STRING ) ){
		return ( function evaluate( ){
			try{
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
					.bind( ( typeof global != "undefined" )? global :
						( typeof window != "undefined" )? window :
						JSON.parse( ${ calcify( wichevr( self, { } ) ) } ) )( )
				`;

				return eval( expression );

			}catch( error ){
				throw new Error( `error evaluating expression, ${ error.stack }` );
			}

		} ).call( self );
	}

	if( protype( expression, FUNCTION ) ){
		return excursio.bind( self )( komento( expression ) );
	}
};

module.exports = excursio;
