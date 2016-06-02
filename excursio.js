"use strict";

/*:
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
			"global": true,
			"class": true
		}
	@end-module-configuration

	@module-documentation:
		
	@end-module-documentation

	@include:
		{
			"komento": "komento"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var komento = require( "komento" );
}

if( typeof window != "undefined" &&
	!( "komento" in window ) )
{
	throw new Error( "komento is not defined" );
}

var excursio = function excursio( expression ){
	if( typeof expression == "string" ){
		return ( function( ){
			return eval( komento( function procedure( ){
				/*!
					( function( ){
						{{expression}}

						var _result = this;
						if( typeof result != "undefined" ){
							result = _result;
						}

						return _result;
					} ).bind( this )( )
				*/
			}, { "expression": expression } ) );
		} ).bind( this )( );

	}else if( typeof expression == "function" ){
		return excursio.bind( this )( komento( expression ) );

	}else{
		throw new Error( "invalid expression" );
	}
};

if( typeof module != "undefined" ){
	module.exports = excursio;
}