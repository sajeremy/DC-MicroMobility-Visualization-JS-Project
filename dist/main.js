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

eval("// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"main\");\n//     new Example(main);\n// });\n\n// import test from \"./scripts/map\"\n\nconst capitalBikeURL = \"https://gbfs.capitalbikeshare.com/gbfs/en/free_bike_status.json\";\nconst helbizScooterURL = \"https://admin-api-prod.helbizscooters.com//reporting/washington/gbfs/free_bike_status.json\";\n// const birdScooterURL = \"https://gbfs.bird.co/dc\" \n// const limeScooterURL = \"https://data.lime.bike/api/partners/v1/gbfs/washington_dc/free_bike_status.json\"\n// const lyftScooterURL = \"https://s3.amazonaws.com/lyft-lastmile-production-iad/lbs/dca/free_bike_status.json\"\n\nlet capitalData;\nlet helbizData;\n// let birdData;\n// let limeData;\n// let lyftData;\n\nasync function getCapitalBike() {\n  const response = await fetch(capitalBikeURL);\n  capitalData = await response.json();\n  // const firstBike = capitalData.data.bikes[0];\n  console.log(\"This is Capital Bike Data\");\n  console.log(capitalData);\n}\nasync function getHelbizScooter() {\n  const response = await fetch(helbizScooterURL);\n  helbizData = await response.json();\n  // const firstBike = capitalData.data.bikes[0];\n  console.log(\"This is Helbiz Scooter Data\");\n  console.log(helbizData);\n}\n// async function getBirdScooter() {\n//     const response = await fetch(birdScooterURL);\n//     birdData = await response.json();\n//     // const firstBike = capitalData.data.bikes[0];\n//     console.log(\"This is Bird Scooter Data\");\n//     console.log(birdData);\n// }\n// async function getLimeScooter() {\n//     const response = await fetch(limeScooterURL);\n//     limeData = await response.json();\n//     // const firstBike = capitalData.data.bikes[0];\n//     console.log(\"This is Lime Scooter Data\");\n//     console.log(limeData);\n// }\n// async function getLyftScooter() {\n//     const response = await fetch(lyftScooterURL);\n//     lyftData = await response.json();\n//     // const firstBike = capitalData.data.bikes[0];\n//     console.log(\"This is Lyft Scooter Data\");\n//     console.log(lyftData);\n// }\n\ngetCapitalBike();\ngetHelbizScooter();\n// getBirdScooter();\n// getLimeScooter();\n// getLyftScooter();\n\n// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"main\");\n//     new Example(main);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJjYXBpdGFsQmlrZVVSTCIsImhlbGJpelNjb290ZXJVUkwiLCJjYXBpdGFsRGF0YSIsImhlbGJpekRhdGEiLCJnZXRDYXBpdGFsQmlrZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsImdldEhlbGJpelNjb290ZXIiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbi8vICAgICBuZXcgRXhhbXBsZShtYWluKTtcbi8vIH0pO1xuXG5cbi8vIGltcG9ydCB0ZXN0IGZyb20gXCIuL3NjcmlwdHMvbWFwXCJcblxuY29uc3QgY2FwaXRhbEJpa2VVUkwgPSBcImh0dHBzOi8vZ2Jmcy5jYXBpdGFsYmlrZXNoYXJlLmNvbS9nYmZzL2VuL2ZyZWVfYmlrZV9zdGF0dXMuanNvblwiIFxuY29uc3QgaGVsYml6U2Nvb3RlclVSTCA9IFwiaHR0cHM6Ly9hZG1pbi1hcGktcHJvZC5oZWxiaXpzY29vdGVycy5jb20vL3JlcG9ydGluZy93YXNoaW5ndG9uL2diZnMvZnJlZV9iaWtlX3N0YXR1cy5qc29uXCJcbi8vIGNvbnN0IGJpcmRTY29vdGVyVVJMID0gXCJodHRwczovL2diZnMuYmlyZC5jby9kY1wiIFxuLy8gY29uc3QgbGltZVNjb290ZXJVUkwgPSBcImh0dHBzOi8vZGF0YS5saW1lLmJpa2UvYXBpL3BhcnRuZXJzL3YxL2diZnMvd2FzaGluZ3Rvbl9kYy9mcmVlX2Jpa2Vfc3RhdHVzLmpzb25cIlxuLy8gY29uc3QgbHlmdFNjb290ZXJVUkwgPSBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9seWZ0LWxhc3RtaWxlLXByb2R1Y3Rpb24taWFkL2xicy9kY2EvZnJlZV9iaWtlX3N0YXR1cy5qc29uXCJcblxuXG5sZXQgY2FwaXRhbERhdGE7XG5sZXQgaGVsYml6RGF0YTtcbi8vIGxldCBiaXJkRGF0YTtcbi8vIGxldCBsaW1lRGF0YTtcbi8vIGxldCBseWZ0RGF0YTtcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRDYXBpdGFsQmlrZSgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNhcGl0YWxCaWtlVVJMKTtcbiAgICBjYXBpdGFsRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyBjb25zdCBmaXJzdEJpa2UgPSBjYXBpdGFsRGF0YS5kYXRhLmJpa2VzWzBdO1xuICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyBDYXBpdGFsIEJpa2UgRGF0YVwiKTtcbiAgICBjb25zb2xlLmxvZyhjYXBpdGFsRGF0YSk7XG59XG5hc3luYyBmdW5jdGlvbiBnZXRIZWxiaXpTY29vdGVyKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaGVsYml6U2Nvb3RlclVSTCk7XG4gICAgaGVsYml6RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyBjb25zdCBmaXJzdEJpa2UgPSBjYXBpdGFsRGF0YS5kYXRhLmJpa2VzWzBdO1xuICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyBIZWxiaXogU2Nvb3RlciBEYXRhXCIpO1xuICAgIGNvbnNvbGUubG9nKGhlbGJpekRhdGEpO1xufVxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0QmlyZFNjb290ZXIoKSB7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiaXJkU2Nvb3RlclVSTCk7XG4vLyAgICAgYmlyZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgLy8gY29uc3QgZmlyc3RCaWtlID0gY2FwaXRhbERhdGEuZGF0YS5iaWtlc1swXTtcbi8vICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgQmlyZCBTY29vdGVyIERhdGFcIik7XG4vLyAgICAgY29uc29sZS5sb2coYmlyZERhdGEpO1xuLy8gfVxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0TGltZVNjb290ZXIoKSB7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaW1lU2Nvb3RlclVSTCk7XG4vLyAgICAgbGltZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgLy8gY29uc3QgZmlyc3RCaWtlID0gY2FwaXRhbERhdGEuZGF0YS5iaWtlc1swXTtcbi8vICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgTGltZSBTY29vdGVyIERhdGFcIik7XG4vLyAgICAgY29uc29sZS5sb2cobGltZURhdGEpO1xuLy8gfVxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0THlmdFNjb290ZXIoKSB7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChseWZ0U2Nvb3RlclVSTCk7XG4vLyAgICAgbHlmdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgLy8gY29uc3QgZmlyc3RCaWtlID0gY2FwaXRhbERhdGEuZGF0YS5iaWtlc1swXTtcbi8vICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgTHlmdCBTY29vdGVyIERhdGFcIik7XG4vLyAgICAgY29uc29sZS5sb2cobHlmdERhdGEpO1xuLy8gfVxuXG5cbmdldENhcGl0YWxCaWtlKCk7XG5nZXRIZWxiaXpTY29vdGVyKCk7XG4vLyBnZXRCaXJkU2Nvb3RlcigpO1xuLy8gZ2V0TGltZVNjb290ZXIoKTtcbi8vIGdldEx5ZnRTY29vdGVyKCk7XG5cblxuXG4vLyBpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4vLyAgICAgbmV3IEV4YW1wbGUobWFpbik7XG4vLyB9KTtcblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxpRUFBaUU7QUFDeEYsTUFBTUMsZ0JBQWdCLEdBQUcsNEZBQTRGO0FBQ3JIO0FBQ0E7QUFDQTs7QUFHQSxJQUFJQyxXQUFXO0FBQ2YsSUFBSUMsVUFBVTtBQUNkO0FBQ0E7QUFDQTs7QUFHQSxlQUFlQyxjQUFjLEdBQUc7RUFDNUIsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ04sY0FBYyxDQUFDO0VBQzVDRSxXQUFXLEdBQUcsTUFBTUcsUUFBUSxDQUFDRSxJQUFJLEVBQUU7RUFDbkM7RUFDQUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7RUFDeENELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxXQUFXLENBQUM7QUFDNUI7QUFDQSxlQUFlUSxnQkFBZ0IsR0FBRztFQUM5QixNQUFNTCxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDTCxnQkFBZ0IsQ0FBQztFQUM5Q0UsVUFBVSxHQUFHLE1BQU1FLFFBQVEsQ0FBQ0UsSUFBSSxFQUFFO0VBQ2xDO0VBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDO0VBQzFDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sVUFBVSxDQUFDO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBQyxjQUFjLEVBQUU7QUFDaEJNLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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