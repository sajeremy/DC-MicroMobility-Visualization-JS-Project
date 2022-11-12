/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_bikeAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/bikeAPI */ \"./src/scripts/bikeAPI.js\");\n\n// import {map, addTiles} from './scripts/map'\n\n(0,_scripts_bikeAPI__WEBPACK_IMPORTED_MODULE_0__.getCapitalBike)();\n(0,_scripts_bikeAPI__WEBPACK_IMPORTED_MODULE_0__.getHelbizScooter)();\n// map;\n// addTiles;\n\n// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"main\");\n//     new Example(main);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0U7QUFDbEU7O0FBRUFBLGdFQUFjLEVBQUU7QUFDaEJDLGtFQUFnQixFQUFFO0FBQ2xCO0FBQ0E7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldENhcGl0YWxCaWtlLCBnZXRIZWxiaXpTY29vdGVyfSBmcm9tICcuL3NjcmlwdHMvYmlrZUFQSSdcbi8vIGltcG9ydCB7bWFwLCBhZGRUaWxlc30gZnJvbSAnLi9zY3JpcHRzL21hcCdcblxuZ2V0Q2FwaXRhbEJpa2UoKTtcbmdldEhlbGJpelNjb290ZXIoKTtcbi8vIG1hcDtcbi8vIGFkZFRpbGVzO1xuXG5cbi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbi8vICAgICBuZXcgRXhhbXBsZShtYWluKTtcbi8vIH0pO1xuXG5cblxuIl0sIm5hbWVzIjpbImdldENhcGl0YWxCaWtlIiwiZ2V0SGVsYml6U2Nvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/bikeAPI.js":
/*!********************************!*\
  !*** ./src/scripts/bikeAPI.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCapitalBike\": function() { return /* binding */ getCapitalBike; },\n/* harmony export */   \"getHelbizScooter\": function() { return /* binding */ getHelbizScooter; }\n/* harmony export */ });\nconst capitalBikeURL = \"https://gbfs.capitalbikeshare.com/gbfs/en/free_bike_status.json\";\nconst helbizScooterURL = \"https://admin-api-prod.helbizscooters.com//reporting/washington/gbfs/free_bike_status.json\";\nlet capitalData;\nlet helbizData;\nasync function getCapitalBike() {\n  const response = await fetch(capitalBikeURL);\n  capitalData = await response.json();\n  console.log(\"This is Capital Bike Data\");\n  console.log(capitalData);\n  let node;\n  let textnode;\n  for (let i = 0; i < 10; i++) {\n    node = document.createElement(\"li\");\n    textnode = document.createTextNode(`This is an ${capitalData.data.bikes[i].type} \n        with latitude: ${capitalData.data.bikes[i].lat} \n        and longitude: ${capitalData.data.bikes[i].lon}`);\n    node.appendChild(textnode);\n    document.getElementById(\"capitalBike\").appendChild(node);\n  }\n}\nasync function getHelbizScooter() {\n  const response = await fetch(helbizScooterURL);\n  helbizData = await response.json();\n  console.log(\"This is Helbiz Scooter Data\");\n  console.log(helbizData);\n  let node;\n  let textnode;\n  for (let i = 0; i < 10; i++) {\n    node = document.createElement(\"li\");\n    textnode = document.createTextNode(`This is a ${helbizData.data.bikes[i].vehicle_type} \n        with latitude: ${helbizData.data.bikes[i].lat} \n        and longitude: ${helbizData.data.bikes[i].lon}`);\n    node.appendChild(textnode);\n    document.getElementById(\"helbizScooter\").appendChild(node);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iaWtlQVBJLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsY0FBYyxHQUFHLGlFQUFpRTtBQUN4RixNQUFNQyxnQkFBZ0IsR0FBRyw0RkFBNEY7QUFFckgsSUFBSUMsV0FBVztBQUNmLElBQUlDLFVBQVU7QUFFUCxlQUFlQyxjQUFjLEdBQUc7RUFDbkMsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ04sY0FBYyxDQUFDO0VBQzVDRSxXQUFXLEdBQUcsTUFBTUcsUUFBUSxDQUFDRSxJQUFJLEVBQUU7RUFFbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO0VBQ3hDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsV0FBVyxDQUFDO0VBRXhCLElBQUlRLElBQUk7RUFDUixJQUFJQyxRQUFRO0VBRVosS0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUUsRUFBRTtJQUN2QkYsSUFBSSxHQUFHRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDbkNILFFBQVEsR0FBR0UsUUFBUSxDQUFDRSxjQUFjLENBQ2pDLGNBQWFiLFdBQVcsQ0FBQ2MsSUFBSSxDQUFDQyxLQUFLLENBQUNMLENBQUMsQ0FBQyxDQUFDTSxJQUFLO0FBQ3JELHlCQUF5QmhCLFdBQVcsQ0FBQ2MsSUFBSSxDQUFDQyxLQUFLLENBQUNMLENBQUMsQ0FBQyxDQUFDTyxHQUFJO0FBQ3ZELHlCQUF5QmpCLFdBQVcsQ0FBQ2MsSUFBSSxDQUFDQyxLQUFLLENBQUNMLENBQUMsQ0FBQyxDQUFDUSxHQUFJLEVBQUMsQ0FBQztJQUNqRFYsSUFBSSxDQUFDVyxXQUFXLENBQUNWLFFBQVEsQ0FBQztJQUMxQkUsUUFBUSxDQUFDUyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUNELFdBQVcsQ0FBQ1gsSUFBSSxDQUFDO0VBQzVEO0FBRUo7QUFFTyxlQUFlYSxnQkFBZ0IsR0FBRztFQUNyQyxNQUFNbEIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsZ0JBQWdCLENBQUM7RUFDOUNFLFVBQVUsR0FBRyxNQUFNRSxRQUFRLENBQUNFLElBQUksRUFBRTtFQUVsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7RUFDMUNELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixVQUFVLENBQUM7RUFFdkIsSUFBSU8sSUFBSTtFQUNSLElBQUlDLFFBQVE7RUFFWixLQUFLLElBQUlDLENBQUMsR0FBQyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsRUFBRSxFQUFFO0lBQ3ZCRixJQUFJLEdBQUdHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztJQUNuQ0gsUUFBUSxHQUFHRSxRQUFRLENBQUNFLGNBQWMsQ0FDakMsYUFBWVosVUFBVSxDQUFDYSxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsQ0FBQyxDQUFDLENBQUNZLFlBQWE7QUFDM0QseUJBQXlCckIsVUFBVSxDQUFDYSxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsQ0FBQyxDQUFDLENBQUNPLEdBQUk7QUFDdEQseUJBQXlCaEIsVUFBVSxDQUFDYSxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsQ0FBQyxDQUFDLENBQUNRLEdBQUksRUFBQyxDQUFDO0lBQ2hEVixJQUFJLENBQUNXLFdBQVcsQ0FBQ1YsUUFBUSxDQUFDO0lBQzFCRSxRQUFRLENBQUNTLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0QsV0FBVyxDQUFDWCxJQUFJLENBQUM7RUFDOUQ7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2Jpa2VBUEkuanM/NDIyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXBpdGFsQmlrZVVSTCA9IFwiaHR0cHM6Ly9nYmZzLmNhcGl0YWxiaWtlc2hhcmUuY29tL2diZnMvZW4vZnJlZV9iaWtlX3N0YXR1cy5qc29uXCIgXG5jb25zdCBoZWxiaXpTY29vdGVyVVJMID0gXCJodHRwczovL2FkbWluLWFwaS1wcm9kLmhlbGJpenNjb290ZXJzLmNvbS8vcmVwb3J0aW5nL3dhc2hpbmd0b24vZ2Jmcy9mcmVlX2Jpa2Vfc3RhdHVzLmpzb25cIlxuXG5sZXQgY2FwaXRhbERhdGE7XG5sZXQgaGVsYml6RGF0YTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcGl0YWxCaWtlKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY2FwaXRhbEJpa2VVUkwpO1xuICAgIGNhcGl0YWxEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coXCJUaGlzIGlzIENhcGl0YWwgQmlrZSBEYXRhXCIpO1xuICAgIGNvbnNvbGUubG9nKGNhcGl0YWxEYXRhKTtcblxuICAgIGxldCBub2RlO1xuICAgIGxldCB0ZXh0bm9kZTtcblxuICAgIGZvciAobGV0IGk9MDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGV4dG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgYFRoaXMgaXMgYW4gJHtjYXBpdGFsRGF0YS5kYXRhLmJpa2VzW2ldLnR5cGV9IFxuICAgICAgICB3aXRoIGxhdGl0dWRlOiAke2NhcGl0YWxEYXRhLmRhdGEuYmlrZXNbaV0ubGF0fSBcbiAgICAgICAgYW5kIGxvbmdpdHVkZTogJHtjYXBpdGFsRGF0YS5kYXRhLmJpa2VzW2ldLmxvbn1gKTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0ZXh0bm9kZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FwaXRhbEJpa2VcIikuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgICAgIFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGVsYml6U2Nvb3RlcigpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGhlbGJpelNjb290ZXJVUkwpO1xuICAgIGhlbGJpekRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgSGVsYml6IFNjb290ZXIgRGF0YVwiKTtcbiAgICBjb25zb2xlLmxvZyhoZWxiaXpEYXRhKTtcblxuICAgIGxldCBub2RlO1xuICAgIGxldCB0ZXh0bm9kZTtcblxuICAgIGZvciAobGV0IGk9MDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGV4dG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgYFRoaXMgaXMgYSAke2hlbGJpekRhdGEuZGF0YS5iaWtlc1tpXS52ZWhpY2xlX3R5cGV9IFxuICAgICAgICB3aXRoIGxhdGl0dWRlOiAke2hlbGJpekRhdGEuZGF0YS5iaWtlc1tpXS5sYXR9IFxuICAgICAgICBhbmQgbG9uZ2l0dWRlOiAke2hlbGJpekRhdGEuZGF0YS5iaWtlc1tpXS5sb259YCk7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGV4dG5vZGUpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbGJpelNjb290ZXJcIikuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgXG59XG5cbiJdLCJuYW1lcyI6WyJjYXBpdGFsQmlrZVVSTCIsImhlbGJpelNjb290ZXJVUkwiLCJjYXBpdGFsRGF0YSIsImhlbGJpekRhdGEiLCJnZXRDYXBpdGFsQmlrZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJ0ZXh0bm9kZSIsImkiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImRhdGEiLCJiaWtlcyIsInR5cGUiLCJsYXQiLCJsb24iLCJhcHBlbmRDaGlsZCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0SGVsYml6U2Nvb3RlciIsInZlaGljbGVfdHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/bikeAPI.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;