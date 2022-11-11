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

eval("// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"main\");\n//     new Example(main);\n// });\n\nconst capitalBike_url = \"https://gbfs.capitalbikeshare.com/gbfs/en/free_bike_status.json\";\nconst birdScooter_url = \"https://cors-anywhere.herokuapp.com/https://gbfs.bird.co/dc\";\n\n// const requestOptions = {\n//     headers: {    \n//         'Accept': 'application/json',\n//         'Content-Type': 'application/json',\n//         'Access-Control-Allow-Origin': '*' }\n// }\n\nlet capitalData;\nlet birdData;\nasync function getCapitalBike() {\n  const response = await fetch(capitalBike_url);\n  capitalData = await response.json();\n  const firstBike = capitalData.data.bikes[0];\n  // debugger\n  console.log(firstBike.lat);\n  console.log(firstBike.lon);\n  console.log(firstBike.type);\n  return capitalData;\n}\n\n// async function getBirdScooter() {\n\n//     const response = await fetch(birdScooter_url);\n//     birdData = await response.json();\n//     // const {latitude, longitude} = birdData;\n\n//     console.log(birdData);\n//     // return birdData;\n// }\n\n// debugger\ngetCapitalBike();\n// debugger\n// getBirdScooter();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJjYXBpdGFsQmlrZV91cmwiLCJiaXJkU2Nvb3Rlcl91cmwiLCJjYXBpdGFsRGF0YSIsImJpcmREYXRhIiwiZ2V0Q2FwaXRhbEJpa2UiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImZpcnN0QmlrZSIsImRhdGEiLCJiaWtlcyIsImNvbnNvbGUiLCJsb2ciLCJsYXQiLCJsb24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4vLyAgICAgbmV3IEV4YW1wbGUobWFpbik7XG4vLyB9KTtcblxuXG5cbmNvbnN0IGNhcGl0YWxCaWtlX3VybCA9IFwiaHR0cHM6Ly9nYmZzLmNhcGl0YWxiaWtlc2hhcmUuY29tL2diZnMvZW4vZnJlZV9iaWtlX3N0YXR1cy5qc29uXCIgXG5jb25zdCBiaXJkU2Nvb3Rlcl91cmwgPSBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vZ2Jmcy5iaXJkLmNvL2RjXCIgXG5cbi8vIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuLy8gICAgIGhlYWRlcnM6IHsgICAgXG4vLyAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicgfVxuLy8gfVxuXG5sZXQgY2FwaXRhbERhdGE7XG5sZXQgYmlyZERhdGE7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENhcGl0YWxCaWtlKCkge1xuICAgIFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY2FwaXRhbEJpa2VfdXJsKTtcbiAgICBjYXBpdGFsRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBmaXJzdEJpa2UgPSBjYXBpdGFsRGF0YS5kYXRhLmJpa2VzWzBdO1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgY29uc29sZS5sb2coZmlyc3RCaWtlLmxhdCk7XG4gICAgY29uc29sZS5sb2coZmlyc3RCaWtlLmxvbik7XG4gICAgY29uc29sZS5sb2coZmlyc3RCaWtlLnR5cGUpO1xuICAgIHJldHVybiBjYXBpdGFsRGF0YTtcblxufVxuXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRCaXJkU2Nvb3RlcigpIHtcbiAgIFxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYmlyZFNjb290ZXJfdXJsKTtcbi8vICAgICBiaXJkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICAvLyBjb25zdCB7bGF0aXR1ZGUsIGxvbmdpdHVkZX0gPSBiaXJkRGF0YTtcblxuLy8gICAgIGNvbnNvbGUubG9nKGJpcmREYXRhKTtcbi8vICAgICAvLyByZXR1cm4gYmlyZERhdGE7XG4vLyB9XG5cbi8vIGRlYnVnZ2VyXG5nZXRDYXBpdGFsQmlrZSgpO1xuLy8gZGVidWdnZXJcbi8vIGdldEJpcmRTY29vdGVyKCk7XG5cblxuIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxNQUFNQSxlQUFlLEdBQUcsaUVBQWlFO0FBQ3pGLE1BQU1DLGVBQWUsR0FBRyw2REFBNkQ7O0FBRXJGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQyxXQUFXO0FBQ2YsSUFBSUMsUUFBUTtBQUVaLGVBQWVDLGNBQWMsR0FBRztFQUU1QixNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDTixlQUFlLENBQUM7RUFDN0NFLFdBQVcsR0FBRyxNQUFNRyxRQUFRLENBQUNFLElBQUksRUFBRTtFQUNuQyxNQUFNQyxTQUFTLEdBQUdOLFdBQVcsQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQzNDO0VBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixTQUFTLENBQUNLLEdBQUcsQ0FBQztFQUMxQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNKLFNBQVMsQ0FBQ00sR0FBRyxDQUFDO0VBQzFCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osU0FBUyxDQUFDTyxJQUFJLENBQUM7RUFDM0IsT0FBT2IsV0FBVztBQUV0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0FFLGNBQWMsRUFBRTtBQUNoQjtBQUNBIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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