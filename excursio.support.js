"use strict";

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
			"komento": "komento",
			"protype": "protype",
			"zelf": "zelf"
		}
	@end-include
*/

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var komento = require("komento");
var protype = require("protype");
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

	var expressionType = protype(expression);
	if (!expressionType.STRING && !expressionType.FUNCTION) {
		throw new Error("invalid expression");
	}

	if (expressionType.STRING) {
		return function evaluate() {
			try {
				expression = komento(function procedure() {
					"\n\t\t\t\t\t\t( function execute( ){\n\t\t\t\t\t\t\tvar result = undefined;\n\n\t\t\t\t\t\t\ttry{\n\t\t\t\t\t\t\t\tresult = ( {{{ expression }}} );\n\n\t\t\t\t\t\t\t}catch( error ){\n\t\t\t\t\t\t\t\tthrow new Error( \"error executing expression, \" + error );\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\treturn result;\n\t\t\t\t\t\t} )\n\t\t\t\t\t\t.bind( ( typeof global != \"undefined\" )? global :\n\t\t\t\t\t\t\t( typeof window != \"undefined\" )? window :\n\t\t\t\t\t\t\tJSON.parse( {{{ self }}} ) )( )\n\t\t\t\t\t";
				}, {
					"expression": expression || undefined,
					"self": (0, _stringify2.default)(self || {})
				});

				return eval(expression);
			} catch (error) {
				throw new Error("error evaluating expression, " + error);
			}
		}.call(self);
	}

	if (expressionType.FUNCTION) {
		return excursio.bind(self)(komento(expression));
	}
};

module.exports = excursio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y3Vyc2lvLmpzIl0sIm5hbWVzIjpbImtvbWVudG8iLCJyZXF1aXJlIiwicHJvdHlwZSIsInplbGYiLCJleGN1cnNpbyIsImV4cHJlc3Npb24iLCJzZWxmIiwiZXhwcmVzc2lvblR5cGUiLCJTVFJJTkciLCJGVU5DVElPTiIsIkVycm9yIiwiZXZhbHVhdGUiLCJwcm9jZWR1cmUiLCJ1bmRlZmluZWQiLCJldmFsIiwiZXJyb3IiLCJjYWxsIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSxJQUFNQSxVQUFVQyxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRSxPQUFPRixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNRyxXQUFXLFNBQVNBLFFBQVQsQ0FBbUJDLFVBQW5CLEVBQStCO0FBQy9DOzs7Ozs7Ozs7OztBQVdBLEtBQUlDLE9BQU9ILEtBQU0sSUFBTixDQUFYOztBQUVBLEtBQUlJLGlCQUFpQkwsUUFBU0csVUFBVCxDQUFyQjtBQUNBLEtBQUksQ0FBQ0UsZUFBZUMsTUFBaEIsSUFBMEIsQ0FBQ0QsZUFBZUUsUUFBOUMsRUFBd0Q7QUFDdkQsUUFBTSxJQUFJQyxLQUFKLENBQVcsb0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlILGVBQWVDLE1BQW5CLEVBQTJCO0FBQzFCLFNBQVMsU0FBU0csUUFBVCxHQUFvQjtBQUM1QixPQUFHO0FBQ0ZOLGlCQUFhTCxRQUFTLFNBQVNZLFNBQVQsR0FBcUI7QUFDMUM7QUFpQkEsS0FsQlksRUFrQlY7QUFDRixtQkFBY1AsY0FBY1EsU0FEMUI7QUFFRixhQUFRLHlCQUFnQlAsUUFBUSxFQUF4QjtBQUZOLEtBbEJVLENBQWI7O0FBdUJBLFdBQU9RLEtBQU1ULFVBQU4sQ0FBUDtBQUVBLElBMUJELENBMEJDLE9BQU9VLEtBQVAsRUFBYztBQUNkLFVBQU0sSUFBSUwsS0FBSixtQ0FBNENLLEtBQTVDLENBQU47QUFDQTtBQUVELEdBL0JNLENBK0JIQyxJQS9CRyxDQStCR1YsSUEvQkgsQ0FBUDtBQWdDQTs7QUFFRCxLQUFJQyxlQUFlRSxRQUFuQixFQUE2QjtBQUM1QixTQUFPTCxTQUFTYSxJQUFULENBQWVYLElBQWYsRUFBdUJOLFFBQVNLLFVBQVQsQ0FBdkIsQ0FBUDtBQUNBO0FBQ0QsQ0F6REQ7O0FBMkRBYSxPQUFPQyxPQUFQLEdBQWlCZixRQUFqQiIsImZpbGUiOiJleGN1cnNpby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZXhjdXJzaW9cIixcblx0XHRcdFwicGF0aFwiOiBcImV4Y3Vyc2lvL2V4Y3Vyc2lvLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJleGN1cnNpby5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJleGN1cnNpb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2V4Y3Vyc2lvLmdpdFwiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRFeGVjdXRlIGEgY29tbWVudCBvciBzdHJpbmcgYXMgZXhwcmVzc2lvbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwia29tZW50b1wiOiBcImtvbWVudG9cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBrb21lbnRvID0gcmVxdWlyZSggXCJrb21lbnRvXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IGV4Y3Vyc2lvID0gZnVuY3Rpb24gZXhjdXJzaW8oIGV4cHJlc3Npb24gKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJleHByZXNzaW9uOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRsZXQgZXhwcmVzc2lvblR5cGUgPSBwcm90eXBlKCBleHByZXNzaW9uICk7XG5cdGlmKCAhZXhwcmVzc2lvblR5cGUuU1RSSU5HICYmICFleHByZXNzaW9uVHlwZS5GVU5DVElPTiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGV4cHJlc3Npb25cIiApO1xuXHR9XG5cblx0aWYoIGV4cHJlc3Npb25UeXBlLlNUUklORyApe1xuXHRcdHJldHVybiAoIGZ1bmN0aW9uIGV2YWx1YXRlKCApe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRleHByZXNzaW9uID0ga29tZW50byggZnVuY3Rpb24gcHJvY2VkdXJlKCApe1xuXHRcdFx0XHRcdGBcblx0XHRcdFx0XHRcdCggZnVuY3Rpb24gZXhlY3V0ZSggKXtcblx0XHRcdFx0XHRcdFx0dmFyIHJlc3VsdCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gKCB7e3sgZXhwcmVzc2lvbiB9fX0gKTtcblxuXHRcdFx0XHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImVycm9yIGV4ZWN1dGluZyBleHByZXNzaW9uLCBcIiArIGVycm9yICk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0XHQuYmluZCggKCB0eXBlb2YgZ2xvYmFsICE9IFwidW5kZWZpbmVkXCIgKT8gZ2xvYmFsIDpcblx0XHRcdFx0XHRcdFx0KCB0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgKT8gd2luZG93IDpcblx0XHRcdFx0XHRcdFx0SlNPTi5wYXJzZSgge3t7IHNlbGYgfX19ICkgKSggKVxuXHRcdFx0XHRcdGBcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFwiZXhwcmVzc2lvblwiOiBleHByZXNzaW9uIHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0XHRcInNlbGZcIjogSlNPTi5zdHJpbmdpZnkoIHNlbGYgfHwgeyB9IClcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdHJldHVybiBldmFsKCBleHByZXNzaW9uICk7XG5cblx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgZXJyb3IgZXZhbHVhdGluZyBleHByZXNzaW9uLCAkeyBlcnJvciB9YCApO1xuXHRcdFx0fVxuXG5cdFx0fSApLmNhbGwoIHNlbGYgKTtcblx0fVxuXG5cdGlmKCBleHByZXNzaW9uVHlwZS5GVU5DVElPTiApe1xuXHRcdHJldHVybiBleGN1cnNpby5iaW5kKCBzZWxmICkoIGtvbWVudG8oIGV4cHJlc3Npb24gKSApO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4Y3Vyc2lvO1xuIl19
