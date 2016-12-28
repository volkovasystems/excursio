"use strict";

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y3Vyc2lvLmpzIl0sIm5hbWVzIjpbImtvbWVudG8iLCJyZXF1aXJlIiwicHJvdHlwZSIsInplbGYiLCJleGN1cnNpbyIsImV4cHJlc3Npb24iLCJzZWxmIiwiZXhwcmVzc2lvblR5cGUiLCJTVFJJTkciLCJGVU5DVElPTiIsIkVycm9yIiwiZXZhbHVhdGUiLCJwcm9jZWR1cmUiLCJ1bmRlZmluZWQiLCJldmFsIiwiZXJyb3IiLCJjYWxsIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLFVBQVVELFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLFdBQVcsU0FBU0EsUUFBVCxDQUFtQkMsVUFBbkIsRUFBK0I7QUFDL0M7Ozs7Ozs7Ozs7O0FBV0EsS0FBSUMsT0FBT0gsS0FBTSxJQUFOLENBQVg7O0FBRUEsS0FBSUksaUJBQWlCTCxRQUFTRyxVQUFULENBQXJCO0FBQ0EsS0FBSSxDQUFDRSxlQUFlQyxNQUFoQixJQUEwQixDQUFDRCxlQUFlRSxRQUE5QyxFQUF3RDtBQUN2RCxRQUFNLElBQUlDLEtBQUosQ0FBVyxvQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUgsZUFBZUMsTUFBbkIsRUFBMkI7QUFDMUIsU0FBUyxTQUFTRyxRQUFULEdBQW9CO0FBQzVCLE9BQUc7QUFDRk4saUJBQWFMLFFBQVMsU0FBU1ksU0FBVCxHQUFxQjtBQUMxQztBQWlCQSxLQWxCWSxFQWtCVjtBQUNGLG1CQUFjUCxjQUFjUSxTQUQxQjtBQUVGLGFBQVEseUJBQWdCUCxRQUFRLEVBQXhCO0FBRk4sS0FsQlUsQ0FBYjs7QUF1QkEsV0FBT1EsS0FBTVQsVUFBTixDQUFQO0FBRUEsSUExQkQsQ0EwQkMsT0FBT1UsS0FBUCxFQUFjO0FBQ2QsVUFBTSxJQUFJTCxLQUFKLG1DQUE0Q0ssS0FBNUMsQ0FBTjtBQUNBO0FBRUQsR0EvQk0sQ0ErQkhDLElBL0JHLENBK0JHVixJQS9CSCxDQUFQO0FBZ0NBOztBQUVELEtBQUlDLGVBQWVFLFFBQW5CLEVBQTZCO0FBQzVCLFNBQU9MLFNBQVNhLElBQVQsQ0FBZVgsSUFBZixFQUF1Qk4sUUFBU0ssVUFBVCxDQUF2QixDQUFQO0FBQ0E7QUFDRCxDQXpERDs7QUEyREFhLE9BQU9DLE9BQVAsR0FBaUJmLFFBQWpCIiwiZmlsZSI6ImV4Y3Vyc2lvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTYgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImV4Y3Vyc2lvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJleGN1cnNpby9leGN1cnNpby5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZXhjdXJzaW8uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZXhjdXJzaW9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2V4Y3Vyc2lvLmdpdFwiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRFeGVjdXRlIGEgY29tbWVudCBvciBzdHJpbmcgYXMgZXhwcmVzc2lvbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwia29tZW50b1wiOiBcImtvbWVudG9cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBrb21lbnRvID0gcmVxdWlyZSggXCJrb21lbnRvXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IGV4Y3Vyc2lvID0gZnVuY3Rpb24gZXhjdXJzaW8oIGV4cHJlc3Npb24gKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJleHByZXNzaW9uOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRsZXQgZXhwcmVzc2lvblR5cGUgPSBwcm90eXBlKCBleHByZXNzaW9uICk7XG5cdGlmKCAhZXhwcmVzc2lvblR5cGUuU1RSSU5HICYmICFleHByZXNzaW9uVHlwZS5GVU5DVElPTiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGV4cHJlc3Npb25cIiApO1xuXHR9XG5cblx0aWYoIGV4cHJlc3Npb25UeXBlLlNUUklORyApe1xuXHRcdHJldHVybiAoIGZ1bmN0aW9uIGV2YWx1YXRlKCApe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRleHByZXNzaW9uID0ga29tZW50byggZnVuY3Rpb24gcHJvY2VkdXJlKCApe1xuXHRcdFx0XHRcdGBcblx0XHRcdFx0XHRcdCggZnVuY3Rpb24gZXhlY3V0ZSggKXtcblx0XHRcdFx0XHRcdFx0dmFyIHJlc3VsdCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gKCB7e3sgZXhwcmVzc2lvbiB9fX0gKTtcblxuXHRcdFx0XHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImVycm9yIGV4ZWN1dGluZyBleHByZXNzaW9uLCBcIiArIGVycm9yICk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0XHQuYmluZCggKCB0eXBlb2YgZ2xvYmFsICE9IFwidW5kZWZpbmVkXCIgKT8gZ2xvYmFsIDpcblx0XHRcdFx0XHRcdFx0KCB0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgKT8gd2luZG93IDpcblx0XHRcdFx0XHRcdFx0SlNPTi5wYXJzZSgge3t7IHNlbGYgfX19ICkgKSggKVxuXHRcdFx0XHRcdGBcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFwiZXhwcmVzc2lvblwiOiBleHByZXNzaW9uIHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0XHRcInNlbGZcIjogSlNPTi5zdHJpbmdpZnkoIHNlbGYgfHwgeyB9IClcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdHJldHVybiBldmFsKCBleHByZXNzaW9uICk7XG5cblx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgZXJyb3IgZXZhbHVhdGluZyBleHByZXNzaW9uLCAkeyBlcnJvciB9YCApO1xuXHRcdFx0fVxuXG5cdFx0fSApLmNhbGwoIHNlbGYgKTtcblx0fVxuXG5cdGlmKCBleHByZXNzaW9uVHlwZS5GVU5DVElPTiApe1xuXHRcdHJldHVybiBleGN1cnNpby5iaW5kKCBzZWxmICkoIGtvbWVudG8oIGV4cHJlc3Npb24gKSApO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4Y3Vyc2lvO1xuIl19
