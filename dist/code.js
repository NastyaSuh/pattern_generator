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
        // let imagesArray = [];
        // let image_id = imagesArray.length + 1;
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
            id: sessionId.toString() + "+" + image.id.toString(),
            input: prompt,
            bg_сolor: background_colour,
            is_transparent: flag_erase_background,
            is_pattern: flag_make_pattern
        };
        console.log(yield figma.clientStorage.getAsync("imageItems"));
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
    console.log(jsonData);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDdUQ7QUFDaEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7OztVQ3ZEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ3FEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrRUFBYztBQUN2QztBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXR0ZXJuX2dlbmVyYXRvci8uL3NyYy9nZW5lcmF0ZS1zZXNzaW9uLnRzIiwid2VicGFjazovL3BhdHRlcm5fZ2VuZXJhdG9yLy4vc3JjL2xvYWQtZGF0YS10by1KU09OLnRzIiwid2VicGFjazovL3BhdHRlcm5fZ2VuZXJhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhdHRlcm5fZ2VuZXJhdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYXR0ZXJuX2dlbmVyYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BhdHRlcm5fZ2VuZXJhdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGF0dGVybl9nZW5lcmF0b3IvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTZXNzaW9uSWQoKSB7XG4gICAgbGV0IHVzZXIgPSBmaWdtYS5jdXJyZW50VXNlcjtcbiAgICBsZXQgc2Vzc2lvbl9pZDtcbiAgICBpZiAodXNlcikge1xuICAgICAgICBzZXNzaW9uX2lkID0gdXNlci5zZXNzaW9uSWQ7XG4gICAgfVxuICAgIHJldHVybiBzZXNzaW9uX2lkO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZW5lcmF0ZVNlc3Npb25JZCB9IGZyb20gJy4vZ2VuZXJhdGUtc2Vzc2lvbic7XG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFUb0pTT04ocHJvbXB0LCBiYWNrZ3JvdW5kX2NvbG91ciwgZmxhZ19lcmFzZV9iYWNrZ3JvdW5kLCBmbGFnX21ha2VfcGF0dGVybikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIGxldCBpbWFnZXNBcnJheSA9IFtdO1xuICAgICAgICAvLyBsZXQgaW1hZ2VfaWQgPSBpbWFnZXNBcnJheS5sZW5ndGggKyAxO1xuICAgICAgICBsZXQganNvbkRhdGE7XG4gICAgICAgIGxldCBzZXNzaW9uSWQgPSB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwic2Vzc2lvbklkXCIpO1xuICAgICAgICBpZiAoIXNlc3Npb25JZCkge1xuICAgICAgICAgICAgc2Vzc2lvbklkID0gZ2VuZXJhdGVTZXNzaW9uSWQoKTtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoXCJzZXNzaW9uSWRcIiwgc2Vzc2lvbklkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW1hZ2VzID0geWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhcImltYWdlSXRlbXNcIik7XG4gICAgICAgIGxldCBpbWFnZTtcbiAgICAgICAgaWYgKGltYWdlcykge1xuICAgICAgICAgICAgaW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGltYWdlcy5sZW5ndGggKyAxLFxuICAgICAgICAgICAgICAgIGlucHV0OiBwcm9tcHQsXG4gICAgICAgICAgICAgICAgYmdf0YFvbG9yOiBiYWNrZ3JvdW5kX2NvbG91cixcbiAgICAgICAgICAgICAgICBpc190cmFuc3BhcmVudDogZmxhZ19lcmFzZV9iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgIGlzX3BhdHRlcm46IGZsYWdfbWFrZV9wYXR0ZXJuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhcImltYWdlSXRlbXNcIiwgaW1hZ2VzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGltYWdlcyA9IFtdO1xuICAgICAgICAgICAgaW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgaW5wdXQ6IHByb21wdCxcbiAgICAgICAgICAgICAgICBiZ1/RgW9sb3I6IGJhY2tncm91bmRfY29sb3VyLFxuICAgICAgICAgICAgICAgIGlzX3RyYW5zcGFyZW50OiBmbGFnX2VyYXNlX2JhY2tncm91bmQsXG4gICAgICAgICAgICAgICAgaXNfcGF0dGVybjogZmxhZ19tYWtlX3BhdHRlcm5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwiaW1hZ2VJdGVtc1wiLCBpbWFnZXMpO1xuICAgICAgICB9XG4gICAgICAgIGpzb25EYXRhID0ge1xuICAgICAgICAgICAgaWQ6IHNlc3Npb25JZC50b1N0cmluZygpICsgXCIrXCIgKyBpbWFnZS5pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgaW5wdXQ6IHByb21wdCxcbiAgICAgICAgICAgIGJnX9GBb2xvcjogYmFja2dyb3VuZF9jb2xvdXIsXG4gICAgICAgICAgICBpc190cmFuc3BhcmVudDogZmxhZ19lcmFzZV9iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgaXNfcGF0dGVybjogZmxhZ19tYWtlX3BhdHRlcm5cbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coeWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhcImltYWdlSXRlbXNcIikpO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpO1xuICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGxvYWREYXRhVG9KU09OIH0gZnJvbSBcIi4vbG9hZC1kYXRhLXRvLUpTT05cIjtcbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS51aS5yZXNpemUoNDQzLCAzMjApO1xuZmlnbWEudWkub25tZXNzYWdlID0gKHBsdWdpbk1lc3NhZ2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBqc29uRGF0YSA9IHlpZWxkIGxvYWREYXRhVG9KU09OKHBsdWdpbk1lc3NhZ2UucHJvbXB0LCBwbHVnaW5NZXNzYWdlLmJnQ29sb3VySXRlbSwgcGx1Z2luTWVzc2FnZS5lcmFzZUJnRmxhZywgcGx1Z2luTWVzc2FnZS5tYWtlUGF0dGVybkZsYWcpO1xuICAgIGNvbnNvbGUubG9nKGpzb25EYXRhKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9