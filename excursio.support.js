"use strict";var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
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
                                                                                                                                                                                                                                 			"clazof": "clazof",
                                                                                                                                                                                                                                 			"depher": "depher",
                                                                                                                                                                                                                                 			"falzy": "falzy",
                                                                                                                                                                                                                                 			"komento": "komento",
                                                                                                                                                                                                                                 			"madhatter": "madhatter",
                                                                                                                                                                                                                                 			"protype": "protype",
                                                                                                                                                                                                                                 			"rmor": "rmor",
                                                                                                                                                                                                                                 			"wichis": "wichis",
                                                                                                                                                                                                                                 			"zelf": "zelf"
                                                                                                                                                                                                                                 		}
                                                                                                                                                                                                                                 	@end-include
                                                                                                                                                                                                                                 */

var clazof = require("clazof");
var depher = require("depher");
var falzy = require("falzy");
var komento = require("komento");
var madhatter = require("madhatter");
var protype = require("protype");
var rmor = require("rmor");
var wichis = require("wichis");
var zelf = require("zelf");

var excursio = function excursio(expression, depth) {
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

	if (falzy(expression) || !protype(expression, STRING + FUNCTION)) {
		throw new Error("invalid expression");
	}

	depth = depher(arguments, NUMBER, 1);

	var self = zelf(this);

	if (protype(expression, STRING)) {
		return function evaluate() {
			try {
				var context = (0, _stringify2.default)(wichis(rmor(self, depth), {}));

				expression = "\n\t\t\t\t\t( function execute( ){\n\t\t\t\t\t\tvar result = undefined;\n\n\t\t\t\t\t\ttry{\n\t\t\t\t\t\t\tresult = ( " + (




				expression || undefined) + " );\n\n\t\t\t\t\t\t}catch( error ){\n\t\t\t\t\t\t\tthrow new Error( \"error executing expression, \" + error.stack );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn result;\n\t\t\t\t\t} )\n\t\t\t\t\t.bind( ( function context( ){\n\t\t\t\t\t\ttry{\n\t\t\t\t\t\t\tvar self = JSON.parse( '" +









				context + "' );\n\n\t\t\t\t\t\t\tif( Object.keys( self ).length == 0 ){\n\t\t\t\t\t\t\t\tif( typeof global != \"undefined\" ){\n\t\t\t\t\t\t\t\t\treturn global;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tif( typeof window != \"undefined\" ){\n\t\t\t\t\t\t\t\t\treturn window;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\treturn self;\n\n\t\t\t\t\t\t}catch( error ){\n\t\t\t\t\t\t\tthrow new Error( \"error resolving expression context, \" + error.stack );\n\t\t\t\t\t\t}\n\t\t\t\t\t} )( ) )( )\n\t\t\t\t";



















				var error = madhatter(expression);
				if (clazof(error, Error)) {
					throw error;
				}

				return eval(expression);

			} catch (error) {
				throw new Error("error evaluating expression, " + error.stack);
			}

		}.call(self);
	}

	if (protype(expression, FUNCTION)) {
		return excursio.bind(self)(komento(expression), depth);
	}
};

module.exports = excursio;

//# sourceMappingURL=excursio.support.js.map