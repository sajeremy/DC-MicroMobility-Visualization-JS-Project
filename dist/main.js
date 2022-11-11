/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"main\");\n//     new Example(main);\n// });\n\nconst capitalBike_url = \"https://gbfs.capitalbikeshare.com/gbfs/en/free_bike_status.json\";\nconst birdScooter_url = \"https://gbfs.bird.co/dc\";\nasync function getCapitalBike() {\n  let capitalData;\n  const response = await fetch(capitalBike_url);\n  capitalData = await response.json();\n  const {\n    latitude,\n    longitude\n  } = capitalData;\n  console.log(capitalData);\n}\nasync function getBirdScooter() {\n  let birdData;\n  const response = await fetch(birdScooter_url);\n  birdData = await response.json();\n  // const {latitude, longitude} = data;\n\n  console.log(birdData);\n  // return birdData;\n}\n\n// debugger\ngetCapitalBike();\n// debugger\ngetBirdScooter();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJjYXBpdGFsQmlrZV91cmwiLCJiaXJkU2Nvb3Rlcl91cmwiLCJnZXRDYXBpdGFsQmlrZSIsImNhcGl0YWxEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRCaXJkU2Nvb3RlciIsImJpcmREYXRhIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4vLyAgICAgbmV3IEV4YW1wbGUobWFpbik7XG4vLyB9KTtcblxuXG5jb25zdCBjYXBpdGFsQmlrZV91cmwgPSBcImh0dHBzOi8vZ2Jmcy5jYXBpdGFsYmlrZXNoYXJlLmNvbS9nYmZzL2VuL2ZyZWVfYmlrZV9zdGF0dXMuanNvblwiIFxuY29uc3QgYmlyZFNjb290ZXJfdXJsID0gXCJodHRwczovL2diZnMuYmlyZC5jby9kY1wiIFxuXG5hc3luYyBmdW5jdGlvbiBnZXRDYXBpdGFsQmlrZSgpIHtcbiAgICBsZXQgY2FwaXRhbERhdGE7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjYXBpdGFsQmlrZV91cmwpO1xuICAgIGNhcGl0YWxEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IHtsYXRpdHVkZSwgbG9uZ2l0dWRlfSA9IGNhcGl0YWxEYXRhO1xuXG4gICAgY29uc29sZS5sb2coY2FwaXRhbERhdGEpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRCaXJkU2Nvb3RlcigpIHtcbiAgICBsZXQgYmlyZERhdGE7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiaXJkU2Nvb3Rlcl91cmwpO1xuICAgIGJpcmREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIC8vIGNvbnN0IHtsYXRpdHVkZSwgbG9uZ2l0dWRlfSA9IGRhdGE7XG5cbiAgICBjb25zb2xlLmxvZyhiaXJkRGF0YSk7XG4gICAgLy8gcmV0dXJuIGJpcmREYXRhO1xufVxuXG4vLyBkZWJ1Z2dlclxuZ2V0Q2FwaXRhbEJpa2UoKTtcbi8vIGRlYnVnZ2VyXG5nZXRCaXJkU2Nvb3RlcigpO1xuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsZUFBZSxHQUFHLGlFQUFpRTtBQUN6RixNQUFNQyxlQUFlLEdBQUcseUJBQXlCO0FBRWpELGVBQWVDLGNBQWMsR0FBRztFQUM1QixJQUFJQyxXQUFXO0VBQ2YsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsZUFBZSxDQUFDO0VBQzdDRyxXQUFXLEdBQUcsTUFBTUMsUUFBUSxDQUFDRSxJQUFJLEVBQUU7RUFDbkMsTUFBTTtJQUFDQyxRQUFRO0lBQUVDO0VBQVMsQ0FBQyxHQUFHTCxXQUFXO0VBRXpDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsV0FBVyxDQUFDO0FBQzVCO0FBRUEsZUFBZVEsY0FBYyxHQUFHO0VBQzVCLElBQUlDLFFBQVE7RUFDWixNQUFNUixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSixlQUFlLENBQUM7RUFDN0NXLFFBQVEsR0FBRyxNQUFNUixRQUFRLENBQUNFLElBQUksRUFBRTtFQUNoQzs7RUFFQUcsT0FBTyxDQUFDQyxHQUFHLENBQUNFLFFBQVEsQ0FBQztFQUNyQjtBQUNKOztBQUVBO0FBQ0FWLGNBQWMsRUFBRTtBQUNoQjtBQUNBUyxjQUFjLEVBQUUifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;