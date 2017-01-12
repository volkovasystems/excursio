"use strict";

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y3Vyc2lvLmpzIl0sIm5hbWVzIjpbImtvbWVudG8iLCJyZXF1aXJlIiwicHJvdHlwZSIsInplbGYiLCJleGN1cnNpbyIsImV4cHJlc3Npb24iLCJzZWxmIiwiZXhwcmVzc2lvblR5cGUiLCJTVFJJTkciLCJGVU5DVElPTiIsIkVycm9yIiwiZXZhbHVhdGUiLCJwcm9jZWR1cmUiLCJ1bmRlZmluZWQiLCJldmFsIiwiZXJyb3IiLCJjYWxsIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLFVBQVVELFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLFdBQVcsU0FBU0EsUUFBVCxDQUFtQkMsVUFBbkIsRUFBK0I7QUFDL0M7Ozs7Ozs7Ozs7O0FBV0EsS0FBSUMsT0FBT0gsS0FBTSxJQUFOLENBQVg7O0FBRUEsS0FBSUksaUJBQWlCTCxRQUFTRyxVQUFULENBQXJCO0FBQ0EsS0FBSSxDQUFDRSxlQUFlQyxNQUFoQixJQUEwQixDQUFDRCxlQUFlRSxRQUE5QyxFQUF3RDtBQUN2RCxRQUFNLElBQUlDLEtBQUosQ0FBVyxvQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUgsZUFBZUMsTUFBbkIsRUFBMkI7QUFDMUIsU0FBUyxTQUFTRyxRQUFULEdBQW9CO0FBQzVCLE9BQUc7QUFDRk4saUJBQWFMLFFBQVMsU0FBU1ksU0FBVCxHQUFxQjtBQUMxQztBQWlCQSxLQWxCWSxFQWtCVjtBQUNGLG1CQUFjUCxjQUFjUSxTQUQxQjtBQUVGLGFBQVEseUJBQWdCUCxRQUFRLEVBQXhCO0FBRk4sS0FsQlUsQ0FBYjs7QUF1QkEsV0FBT1EsS0FBTVQsVUFBTixDQUFQO0FBRUEsSUExQkQsQ0EwQkMsT0FBT1UsS0FBUCxFQUFjO0FBQ2QsVUFBTSxJQUFJTCxLQUFKLG1DQUE0Q0ssS0FBNUMsQ0FBTjtBQUNBO0FBRUQsR0EvQk0sQ0ErQkhDLElBL0JHLENBK0JHVixJQS9CSCxDQUFQO0FBZ0NBOztBQUVELEtBQUlDLGVBQWVFLFFBQW5CLEVBQTZCO0FBQzVCLFNBQU9MLFNBQVNhLElBQVQsQ0FBZVgsSUFBZixFQUF1Qk4sUUFBU0ssVUFBVCxDQUF2QixDQUFQO0FBQ0E7QUFDRCxDQXpERDs7QUEyREFhLE9BQU9DLE9BQVAsR0FBaUJmLFFBQWpCIiwiZmlsZSI6ImV4Y3Vyc2lvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImV4Y3Vyc2lvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJleGN1cnNpby9leGN1cnNpby5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZXhjdXJzaW8uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZXhjdXJzaW9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9leGN1cnNpby5naXRcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RXhlY3V0ZSBhIGNvbW1lbnQgb3Igc3RyaW5nIGFzIGV4cHJlc3Npb24uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImtvbWVudG9cIjogXCJrb21lbnRvXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3Qga29tZW50byA9IHJlcXVpcmUoIFwia29tZW50b1wiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBleGN1cnNpbyA9IGZ1bmN0aW9uIGV4Y3Vyc2lvKCBleHByZXNzaW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZXhwcmVzc2lvbjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IGV4cHJlc3Npb25UeXBlID0gcHJvdHlwZSggZXhwcmVzc2lvbiApO1xuXHRpZiggIWV4cHJlc3Npb25UeXBlLlNUUklORyAmJiAhZXhwcmVzc2lvblR5cGUuRlVOQ1RJT04gKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBleHByZXNzaW9uXCIgKTtcblx0fVxuXG5cdGlmKCBleHByZXNzaW9uVHlwZS5TVFJJTkcgKXtcblx0XHRyZXR1cm4gKCBmdW5jdGlvbiBldmFsdWF0ZSggKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0ZXhwcmVzc2lvbiA9IGtvbWVudG8oIGZ1bmN0aW9uIHByb2NlZHVyZSggKXtcblx0XHRcdFx0XHRgXG5cdFx0XHRcdFx0XHQoIGZ1bmN0aW9uIGV4ZWN1dGUoICl7XG5cdFx0XHRcdFx0XHRcdHZhciByZXN1bHQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9ICgge3t7IGV4cHJlc3Npb24gfX19ICk7XG5cblx0XHRcdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJlcnJvciBleGVjdXRpbmcgZXhwcmVzc2lvbiwgXCIgKyBlcnJvciApO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0XHRcdH0gKVxuXHRcdFx0XHRcdFx0LmJpbmQoICggdHlwZW9mIGdsb2JhbCAhPSBcInVuZGVmaW5lZFwiICk/IGdsb2JhbCA6XG5cdFx0XHRcdFx0XHRcdCggdHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiICk/IHdpbmRvdyA6XG5cdFx0XHRcdFx0XHRcdEpTT04ucGFyc2UoIHt7eyBzZWxmIH19fSApICkoIClcblx0XHRcdFx0XHRgXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcImV4cHJlc3Npb25cIjogZXhwcmVzc2lvbiB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdFx0XCJzZWxmXCI6IEpTT04uc3RyaW5naWZ5KCBzZWxmIHx8IHsgfSApXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRyZXR1cm4gZXZhbCggZXhwcmVzc2lvbiApO1xuXG5cdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGVycm9yIGV2YWx1YXRpbmcgZXhwcmVzc2lvbiwgJHsgZXJyb3IgfWAgKTtcblx0XHRcdH1cblxuXHRcdH0gKS5jYWxsKCBzZWxmICk7XG5cdH1cblxuXHRpZiggZXhwcmVzc2lvblR5cGUuRlVOQ1RJT04gKXtcblx0XHRyZXR1cm4gZXhjdXJzaW8uYmluZCggc2VsZiApKCBrb21lbnRvKCBleHByZXNzaW9uICkgKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleGN1cnNpbztcbiJdfQ==
