"use strict"; /*;
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

var calcify = require("calcify");
var falzy = require("falzy");
var komento = require("komento");
var protype = require("protype");
var wichevr = require("wichevr");
var zelf = require("zelf");

var excursio = function excursio(expression) {
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

	var self = zelf(this);

	if (falzy(expression) || !protype(expression, STRING + FUNCTION)) {
		throw new Error("invalid expression");
	}

	if (protype(expression, STRING)) {
		return function evaluate() {
			try {
				expression = "\n\t\t\t\t\t( function execute( ){\n\t\t\t\t\t\tvar result = undefined;\n\n\t\t\t\t\t\ttry{\n\t\t\t\t\t\t\tresult = ( " + (




				expression || undefined) + " );\n\n\t\t\t\t\t\t}catch( error ){\n\t\t\t\t\t\t\tthrow new Error( \"error executing expression, \" + error.stack );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn result;\n\t\t\t\t\t} )\n\t\t\t\t\t.bind( ( typeof global != \"undefined\" )? global :\n\t\t\t\t\t\t( typeof window != \"undefined\" )? window :\n\t\t\t\t\t\tJSON.parse( " +









				calcify(wichevr(self, {})) + " ) )( )\n\t\t\t\t";


				return eval(expression);

			} catch (error) {
				throw new Error("error evaluating expression, " + error.stack);
			}

		}.call(self);
	}

	if (protype(expression, FUNCTION)) {
		return excursio.bind(self)(komento(expression));
	}
};

module.exports = excursio;

//# sourceMappingURL=excursio.support.js.map