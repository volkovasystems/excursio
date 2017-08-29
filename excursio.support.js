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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y3Vyc2lvLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY2xhem9mIiwicmVxdWlyZSIsImRlcGhlciIsImZhbHp5Iiwia29tZW50byIsIm1hZGhhdHRlciIsInByb3R5cGUiLCJybW9yIiwid2ljaGlzIiwiemVsZiIsImV4Y3Vyc2lvIiwiZXhwcmVzc2lvbiIsImRlcHRoIiwiU1RSSU5HIiwiRlVOQ1RJT04iLCJFcnJvciIsImFyZ3VtZW50cyIsIk5VTUJFUiIsInNlbGYiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJlcnJvciIsImV2YWwiLCJzdGFjayIsImNhbGwiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImlPQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNSSxZQUFZSixRQUFTLFdBQVQsQ0FBbEI7QUFDQSxJQUFNSyxVQUFVTCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNTSxPQUFPTixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1PLFNBQVNQLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVEsT0FBT1IsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTVMsV0FBVyxTQUFTQSxRQUFULENBQW1CQyxVQUFuQixFQUErQkMsS0FBL0IsRUFBc0M7QUFDdEQ7Ozs7Ozs7Ozs7OztBQVlBLEtBQUlULE1BQU9RLFVBQVAsS0FBdUIsQ0FBQ0wsUUFBU0ssVUFBVCxFQUFxQkUsU0FBU0MsUUFBOUIsQ0FBNUIsRUFBc0U7QUFDckUsUUFBTSxJQUFJQyxLQUFKLENBQVcsb0JBQVgsQ0FBTjtBQUNBOztBQUVESCxTQUFRVixPQUFRYyxTQUFSLEVBQW1CQyxNQUFuQixFQUEyQixDQUEzQixDQUFSOztBQUVBLEtBQUlDLE9BQU9ULEtBQU0sSUFBTixDQUFYOztBQUVBLEtBQUlILFFBQVNLLFVBQVQsRUFBcUJFLE1BQXJCLENBQUosRUFBbUM7QUFDbEMsU0FBUyxTQUFTTSxRQUFULEdBQW9CO0FBQzVCLE9BQUc7QUFDRixRQUFJQyxVQUFVLHlCQUFnQlosT0FBUUQsS0FBTVcsSUFBTixFQUFZTixLQUFaLENBQVIsRUFBNkIsRUFBN0IsQ0FBaEIsQ0FBZDs7QUFFQUQ7Ozs7O0FBS2lCQSxrQkFBY1UsU0FML0I7Ozs7Ozs7Ozs7QUFlOEJELFdBZjlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQSxRQUFJRSxRQUFRakIsVUFBV00sVUFBWCxDQUFaO0FBQ0EsUUFBSVgsT0FBUXNCLEtBQVIsRUFBZVAsS0FBZixDQUFKLEVBQTRCO0FBQzNCLFdBQU1PLEtBQU47QUFDQTs7QUFFRCxXQUFPQyxLQUFNWixVQUFOLENBQVA7O0FBRUEsSUE3Q0QsQ0E2Q0MsT0FBT1csS0FBUCxFQUFjO0FBQ2QsVUFBTSxJQUFJUCxLQUFKLG1DQUE0Q08sTUFBTUUsS0FBbEQsQ0FBTjtBQUNBOztBQUVELEdBbERNLENBa0RIQyxJQWxERyxDQWtER1AsSUFsREgsQ0FBUDtBQW1EQTs7QUFFRCxLQUFJWixRQUFTSyxVQUFULEVBQXFCRyxRQUFyQixDQUFKLEVBQXFDO0FBQ3BDLFNBQU9KLFNBQVNnQixJQUFULENBQWVSLElBQWYsRUFBdUJkLFFBQVNPLFVBQVQsQ0FBdkIsRUFBOENDLEtBQTlDLENBQVA7QUFDQTtBQUNELENBOUVEOztBQWdGQWUsT0FBT0MsT0FBUCxHQUFpQmxCLFFBQWpCIiwiZmlsZSI6ImV4Y3Vyc2lvLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImV4Y3Vyc2lvXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImV4Y3Vyc2lvL2V4Y3Vyc2lvLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImV4Y3Vyc2lvLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwiZXhjdXJzaW9cIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9leGN1cnNpby5naXRcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0RXhlY3V0ZSBhIGNvbW1lbnQgb3Igc3RyaW5nIGFzIGV4cHJlc3Npb24uXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcclxuXHRcdFx0XCJkZXBoZXJcIjogXCJkZXBoZXJcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwia29tZW50b1wiOiBcImtvbWVudG9cIixcclxuXHRcdFx0XCJtYWRoYXR0ZXJcIjogXCJtYWRoYXR0ZXJcIixcclxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxyXG5cdFx0XHRcInJtb3JcIjogXCJybW9yXCIsXHJcblx0XHRcdFwid2ljaGlzXCI6IFwid2ljaGlzXCIsXHJcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xyXG5jb25zdCBkZXBoZXIgPSByZXF1aXJlKCBcImRlcGhlclwiICk7XHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IGtvbWVudG8gPSByZXF1aXJlKCBcImtvbWVudG9cIiApO1xyXG5jb25zdCBtYWRoYXR0ZXIgPSByZXF1aXJlKCBcIm1hZGhhdHRlclwiICk7XHJcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xyXG5jb25zdCBybW9yID0gcmVxdWlyZSggXCJybW9yXCIgKTtcclxuY29uc3Qgd2ljaGlzID0gcmVxdWlyZSggXCJ3aWNoaXNcIiApO1xyXG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcclxuXHJcbmNvbnN0IGV4Y3Vyc2lvID0gZnVuY3Rpb24gZXhjdXJzaW8oIGV4cHJlc3Npb24sIGRlcHRoICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJleHByZXNzaW9uOnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwiZGVwdGhcIjogXCJudW1iZXJcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggZXhwcmVzc2lvbiApIHx8ICFwcm90eXBlKCBleHByZXNzaW9uLCBTVFJJTkcgKyBGVU5DVElPTiApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBleHByZXNzaW9uXCIgKTtcclxuXHR9XHJcblxyXG5cdGRlcHRoID0gZGVwaGVyKCBhcmd1bWVudHMsIE5VTUJFUiwgMSApO1xyXG5cclxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcclxuXHJcblx0aWYoIHByb3R5cGUoIGV4cHJlc3Npb24sIFNUUklORyApICl7XHJcblx0XHRyZXR1cm4gKCBmdW5jdGlvbiBldmFsdWF0ZSggKXtcclxuXHRcdFx0dHJ5e1xyXG5cdFx0XHRcdGxldCBjb250ZXh0ID0gSlNPTi5zdHJpbmdpZnkoIHdpY2hpcyggcm1vciggc2VsZiwgZGVwdGggKSwgeyB9ICkgKTtcclxuXHJcblx0XHRcdFx0ZXhwcmVzc2lvbiA9IGBcclxuXHRcdFx0XHRcdCggZnVuY3Rpb24gZXhlY3V0ZSggKXtcclxuXHRcdFx0XHRcdFx0dmFyIHJlc3VsdCA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdFx0XHRcdHRyeXtcclxuXHRcdFx0XHRcdFx0XHRyZXN1bHQgPSAoICR7IGV4cHJlc3Npb24gfHwgdW5kZWZpbmVkIH0gKTtcclxuXHJcblx0XHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZXJyb3IgZXhlY3V0aW5nIGV4cHJlc3Npb24sIFwiICsgZXJyb3Iuc3RhY2sgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHRcdH0gKVxyXG5cdFx0XHRcdFx0LmJpbmQoICggZnVuY3Rpb24gY29udGV4dCggKXtcclxuXHRcdFx0XHRcdFx0dHJ5e1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzZWxmID0gSlNPTi5wYXJzZSggJyR7IGNvbnRleHQgfScgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYoIE9iamVjdC5rZXlzKCBzZWxmICkubGVuZ3RoID09IDAgKXtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgZ2xvYmFsICE9IFwidW5kZWZpbmVkXCIgKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGdsb2JhbDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiggdHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiICl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB3aW5kb3c7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZjtcclxuXHJcblx0XHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZXJyb3IgcmVzb2x2aW5nIGV4cHJlc3Npb24gY29udGV4dCwgXCIgKyBlcnJvci5zdGFjayApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9ICkoICkgKSggKVxyXG5cdFx0XHRcdGA7XHJcblxyXG5cdFx0XHRcdGxldCBlcnJvciA9IG1hZGhhdHRlciggZXhwcmVzc2lvbiApO1xyXG5cdFx0XHRcdGlmKCBjbGF6b2YoIGVycm9yLCBFcnJvciApICl7XHJcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBldmFsKCBleHByZXNzaW9uICk7XHJcblxyXG5cdFx0XHR9Y2F0Y2goIGVycm9yICl7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgZXJyb3IgZXZhbHVhdGluZyBleHByZXNzaW9uLCAkeyBlcnJvci5zdGFjayB9YCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSApLmNhbGwoIHNlbGYgKTtcclxuXHR9XHJcblxyXG5cdGlmKCBwcm90eXBlKCBleHByZXNzaW9uLCBGVU5DVElPTiApICl7XHJcblx0XHRyZXR1cm4gZXhjdXJzaW8uYmluZCggc2VsZiApKCBrb21lbnRvKCBleHByZXNzaW9uICksIGRlcHRoICk7XHJcblx0fVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBleGN1cnNpbztcclxuIl19
//# sourceMappingURL=excursio.support.js.map
