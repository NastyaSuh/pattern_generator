/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generate-session.ts":
/*!*********************************!*\
  !*** ./src/generate-session.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateSessionId: () => (/* binding */ generateSessionId)
/* harmony export */ });
function generateSessionId() {
    let user = figma.currentUser;
    let session_id;
    if (user) {
        session_id = user.sessionId;
    }
    return session_id;
}


/***/ }),

/***/ "./src/load-data-to-JSON.ts":
/*!**********************************!*\
  !*** ./src/load-data-to-JSON.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadDataToJSON: () => (/* binding */ loadDataToJSON)
/* harmony export */ });
/* harmony import */ var _generate_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-session */ "./src/generate-session.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function loadDataToJSON(prompt, background_colour, flag_erase_background, flag_make_pattern) {
    return __awaiter(this, void 0, void 0, function* () {
        let jsonData;
        let sessionId = yield figma.clientStorage.getAsync("sessionId");
        if (!sessionId) {
            sessionId = (0,_generate_session__WEBPACK_IMPORTED_MODULE_0__.generateSessionId)();
            figma.clientStorage.setAsync("sessionId", sessionId);
        }
        let images = yield figma.clientStorage.getAsync("imageItems");
        let image;
        if (images) {
            image = {
                id: images.length + 1,
                input: prompt,
                bg_сolor: background_colour,
                is_transparent: flag_erase_background,
                is_pattern: flag_make_pattern
            };
            images.push(image);
            figma.clientStorage.setAsync("imageItems", images);
        }
        else {
            images = [];
            image = {
                id: 1,
                input: prompt,
                bg_сolor: background_colour,
                is_transparent: flag_erase_background,
                is_pattern: flag_make_pattern
            };
            images.push(image);
            figma.clientStorage.setAsync("imageItems", images);
        }
        jsonData = {
            user_id: sessionId.toString(),
            image_id: image.id.toString(),
            input: prompt,
            bg_сolor: background_colour,
            is_transparent: flag_erase_background,
            is_pattern: flag_make_pattern
        };
        // console.log(await figma.clientStorage.getAsync("imageItems")); — показ всех сгенерированных изображений
        return JSON.stringify(jsonData);
    });
}


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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_data_to_JSON__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-data-to-JSON */ "./src/load-data-to-JSON.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

figma.showUI(__html__);
figma.ui.resize(443, 320);
figma.ui.onmessage = (pluginMessage) => __awaiter(void 0, void 0, void 0, function* () {
    let jsonData = yield (0,_load_data_to_JSON__WEBPACK_IMPORTED_MODULE_0__.loadDataToJSON)(pluginMessage.prompt, pluginMessage.bgColourItem, pluginMessage.eraseBgFlag, pluginMessage.makePatternFlag);
    const apiURL = "http://127.0.0.1:8000/generate";
    // postData(jsonData, apiURL);
    console.log(jsonData);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDdUQ7QUFDaEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRUFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBLEtBQUs7QUFDTDs7Ozs7OztVQ3REQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ3FEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrRUFBYztBQUN2QztBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF0dGVybl9nZW5lcmF0b3IvLi9zcmMvZ2VuZXJhdGUtc2Vzc2lvbi50cyIsIndlYnBhY2s6Ly9wYXR0ZXJuX2dlbmVyYXRvci8uL3NyYy9sb2FkLWRhdGEtdG8tSlNPTi50cyIsIndlYnBhY2s6Ly9wYXR0ZXJuX2dlbmVyYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYXR0ZXJuX2dlbmVyYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGF0dGVybl9nZW5lcmF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYXR0ZXJuX2dlbmVyYXRvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhdHRlcm5fZ2VuZXJhdG9yLy4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU2Vzc2lvbklkKCkge1xuICAgIGxldCB1c2VyID0gZmlnbWEuY3VycmVudFVzZXI7XG4gICAgbGV0IHNlc3Npb25faWQ7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbl9pZCA9IHVzZXIuc2Vzc2lvbklkO1xuICAgIH1cbiAgICByZXR1cm4gc2Vzc2lvbl9pZDtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2VuZXJhdGVTZXNzaW9uSWQgfSBmcm9tICcuL2dlbmVyYXRlLXNlc3Npb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhVG9KU09OKHByb21wdCwgYmFja2dyb3VuZF9jb2xvdXIsIGZsYWdfZXJhc2VfYmFja2dyb3VuZCwgZmxhZ19tYWtlX3BhdHRlcm4pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQganNvbkRhdGE7XG4gICAgICAgIGxldCBzZXNzaW9uSWQgPSB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwic2Vzc2lvbklkXCIpO1xuICAgICAgICBpZiAoIXNlc3Npb25JZCkge1xuICAgICAgICAgICAgc2Vzc2lvbklkID0gZ2VuZXJhdGVTZXNzaW9uSWQoKTtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoXCJzZXNzaW9uSWRcIiwgc2Vzc2lvbklkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW1hZ2VzID0geWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhcImltYWdlSXRlbXNcIik7XG4gICAgICAgIGxldCBpbWFnZTtcbiAgICAgICAgaWYgKGltYWdlcykge1xuICAgICAgICAgICAgaW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGltYWdlcy5sZW5ndGggKyAxLFxuICAgICAgICAgICAgICAgIGlucHV0OiBwcm9tcHQsXG4gICAgICAgICAgICAgICAgYmdf0YFvbG9yOiBiYWNrZ3JvdW5kX2NvbG91cixcbiAgICAgICAgICAgICAgICBpc190cmFuc3BhcmVudDogZmxhZ19lcmFzZV9iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgIGlzX3BhdHRlcm46IGZsYWdfbWFrZV9wYXR0ZXJuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhcImltYWdlSXRlbXNcIiwgaW1hZ2VzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGltYWdlcyA9IFtdO1xuICAgICAgICAgICAgaW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgaW5wdXQ6IHByb21wdCxcbiAgICAgICAgICAgICAgICBiZ1/RgW9sb3I6IGJhY2tncm91bmRfY29sb3VyLFxuICAgICAgICAgICAgICAgIGlzX3RyYW5zcGFyZW50OiBmbGFnX2VyYXNlX2JhY2tncm91bmQsXG4gICAgICAgICAgICAgICAgaXNfcGF0dGVybjogZmxhZ19tYWtlX3BhdHRlcm5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwiaW1hZ2VJdGVtc1wiLCBpbWFnZXMpO1xuICAgICAgICB9XG4gICAgICAgIGpzb25EYXRhID0ge1xuICAgICAgICAgICAgdXNlcl9pZDogc2Vzc2lvbklkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBpbWFnZV9pZDogaW1hZ2UuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGlucHV0OiBwcm9tcHQsXG4gICAgICAgICAgICBiZ1/RgW9sb3I6IGJhY2tncm91bmRfY29sb3VyLFxuICAgICAgICAgICAgaXNfdHJhbnNwYXJlbnQ6IGZsYWdfZXJhc2VfYmFja2dyb3VuZCxcbiAgICAgICAgICAgIGlzX3BhdHRlcm46IGZsYWdfbWFrZV9wYXR0ZXJuXG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF3YWl0IGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJpbWFnZUl0ZW1zXCIpKTsg4oCUINC/0L7QutCw0Lcg0LLRgdC10YUg0YHQs9C10L3QtdGA0LjRgNC+0LLQsNC90L3Ri9GFINC40LfQvtCx0YDQsNC20LXQvdC40LlcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKTtcbiAgICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBsb2FkRGF0YVRvSlNPTiB9IGZyb20gXCIuL2xvYWQtZGF0YS10by1KU09OXCI7XG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEudWkucmVzaXplKDQ0MywgMzIwKTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChwbHVnaW5NZXNzYWdlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQganNvbkRhdGEgPSB5aWVsZCBsb2FkRGF0YVRvSlNPTihwbHVnaW5NZXNzYWdlLnByb21wdCwgcGx1Z2luTWVzc2FnZS5iZ0NvbG91ckl0ZW0sIHBsdWdpbk1lc3NhZ2UuZXJhc2VCZ0ZsYWcsIHBsdWdpbk1lc3NhZ2UubWFrZVBhdHRlcm5GbGFnKTtcbiAgICBjb25zdCBhcGlVUkwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9nZW5lcmF0ZVwiO1xuICAgIC8vIHBvc3REYXRhKGpzb25EYXRhLCBhcGlVUkwpO1xuICAgIGNvbnNvbGUubG9nKGpzb25EYXRhKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9