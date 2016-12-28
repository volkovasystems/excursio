/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
			"komento": "komento",
			"protype": "protype",
			"zelf": "zelf"
		}
	@end-include
*/

const komento = require( "komento" );
const protype = require( "protype" );
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

	let expressionType = protype( expression );
	if( !expressionType.STRING && !expressionType.FUNCTION ){
		throw new Error( "invalid expression" );
	}

	if( expressionType.STRING ){
		return ( function evaluate( ){
			try{
				expression = komento( function procedure( ){
					`
						( function execute( ){
							var result = undefined;

							try{
								result = ( {{{ expression }}} );

							}catch( error ){
								throw new Error( "error executing expression, " + error );
							}

							return result;
						} )
						.bind( ( typeof global != "undefined" )? global :
							( typeof window != "undefined" )? window :
							JSON.parse( {{{ self }}} ) )( )
					`
				}, {
					"expression": expression || undefined,
					"self": JSON.stringify( self || { } )
				} );

				return eval( expression );

			}catch( error ){
				throw new Error( `error evaluating expression, ${ error }` );
			}

		} ).call( self );
	}

	if( expressionType.FUNCTION ){
		return excursio.bind( self )( komento( expression ) );
	}
};

module.exports = excursio;
