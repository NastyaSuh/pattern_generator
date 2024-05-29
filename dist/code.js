/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-frame.ts":
/*!*****************************!*\
  !*** ./src/create-frame.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFrame: () => (/* binding */ createFrame)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function createFrame(imageURL) {
    figma.createImageAsync(imageURL)
        .then((image) => __awaiter(this, void 0, void 0, function* () {
        const node = figma.createFrame();
        const { width, height } = yield image.getSizeAsync();
        node.resize(width, height);
        node.fills = [
            {
                type: "IMAGE",
                imageHash: image.hash,
                scaleMode: "FILL"
            }
        ];
    }));
}


/***/ }),

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

/***/ "./src/handle-user-data.ts":
/*!*********************************!*\
  !*** ./src/handle-user-data.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
/* harmony import */ var _create_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-frame */ "./src/create-frame.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function postData(data, apiURL) {
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    };
    fetch(apiURL, requestOptions)
        .then(response => {
        if (!response) {
            throw new Error("Network response is bad");
        }
        return response.json;
    })
        .then(data => { console.log(data); })
        .catch(console.error);
}
function getData(apiURL) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiKey = '7f498a4fafmshdfae50e4a2d7462p14feaejsnad1dc5e57c69';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7f498a4fafmshdfae50e4a2d7462p14feaejsnad1dc5e57c69',
                'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
            }
        };
        try {
            const response = yield fetch(apiURL, options);
            const result = yield response.text();
            const obj = JSON.parse(result);
            (0,_create_frame__WEBPACK_IMPORTED_MODULE_0__.createFrame)(obj.images[0]);
            // console.log(obj.images[0]);
        }
        catch (error) {
            console.error(error);
        }
    });
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
        jsonData = {
            user_id: sessionId.toString(),
            input: prompt,
            bg_сolor: background_colour,
            is_transparent: flag_erase_background,
            is_pattern: flag_make_pattern
        };
        // console.log(await figma.clientStorage.getAsync("imageItems")); — показ всех сгенерированных изображений
        return JSON.stringify(jsonData);
    });
}
function loadDataToStorage(prompt, background_colour, flag_erase_background, flag_make_pattern, image_id) {
    return __awaiter(this, void 0, void 0, function* () {
        let images = yield figma.clientStorage.getAsync("imageItems");
        let image;
        images = [];
        image = {
            id: image_id,
            input: prompt,
            bg_сolor: background_colour,
            is_transparent: flag_erase_background,
            is_pattern: flag_make_pattern
        };
        images.push(image);
        figma.clientStorage.setAsync("imageItems", images);
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
/* harmony import */ var _handle_user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle-user-data */ "./src/handle-user-data.ts");
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
    const apiURL = "https://any-anime.p.rapidapi.com/v1/anime/gif/1";
    // postData(jsonData, apiURL);
    (0,_handle_user_data__WEBPACK_IMPORTED_MODULE_1__.getData)(apiURL);
    // console.log(jsonData);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUN2Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDNkM7QUFDdEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ3VEO0FBQ2hEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7VUM1Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDcUQ7QUFDUjtBQUM3QztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0VBQWM7QUFDdkM7QUFDQTtBQUNBLElBQUksMERBQU87QUFDWDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXR0ZXJuX2dlbmVyYXRvci8uL3NyYy9jcmVhdGUtZnJhbWUudHMiLCJ3ZWJwYWNrOi8vcGF0dGVybl9nZW5lcmF0b3IvLi9zcmMvZ2VuZXJhdGUtc2Vzc2lvbi50cyIsIndlYnBhY2s6Ly9wYXR0ZXJuX2dlbmVyYXRvci8uL3NyYy9oYW5kbGUtdXNlci1kYXRhLnRzIiwid2VicGFjazovL3BhdHRlcm5fZ2VuZXJhdG9yLy4vc3JjL2xvYWQtZGF0YS10by1KU09OLnRzIiwid2VicGFjazovL3BhdHRlcm5fZ2VuZXJhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhdHRlcm5fZ2VuZXJhdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYXR0ZXJuX2dlbmVyYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BhdHRlcm5fZ2VuZXJhdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGF0dGVybl9nZW5lcmF0b3IvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGcmFtZShpbWFnZVVSTCkge1xuICAgIGZpZ21hLmNyZWF0ZUltYWdlQXN5bmMoaW1hZ2VVUkwpXG4gICAgICAgIC50aGVuKChpbWFnZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBub2RlID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB5aWVsZCBpbWFnZS5nZXRTaXplQXN5bmMoKTtcbiAgICAgICAgbm9kZS5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIG5vZGUuZmlsbHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJJTUFHRVwiLFxuICAgICAgICAgICAgICAgIGltYWdlSGFzaDogaW1hZ2UuaGFzaCxcbiAgICAgICAgICAgICAgICBzY2FsZU1vZGU6IFwiRklMTFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfSkpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU2Vzc2lvbklkKCkge1xuICAgIGxldCB1c2VyID0gZmlnbWEuY3VycmVudFVzZXI7XG4gICAgbGV0IHNlc3Npb25faWQ7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbl9pZCA9IHVzZXIuc2Vzc2lvbklkO1xuICAgIH1cbiAgICByZXR1cm4gc2Vzc2lvbl9pZDtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgY3JlYXRlRnJhbWUgfSBmcm9tIFwiLi9jcmVhdGUtZnJhbWVcIjtcbmV4cG9ydCBmdW5jdGlvbiBwb3N0RGF0YShkYXRhLCBhcGlVUkwpIHtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBkYXRhXG4gICAgfTtcbiAgICBmZXRjaChhcGlVUkwsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2UgaXMgYmFkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uO1xuICAgIH0pXG4gICAgICAgIC50aGVuKGRhdGEgPT4geyBjb25zb2xlLmxvZyhkYXRhKTsgfSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoYXBpVVJMKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gJzdmNDk4YTRmYWZtc2hkZmFlNTBlNGEyZDc0NjJwMTRmZWFlanNuYWQxZGM1ZTU3YzY5JztcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ1gtUmFwaWRBUEktS2V5JzogJzdmNDk4YTRmYWZtc2hkZmFlNTBlNGEyZDc0NjJwMTRmZWFlanNuYWQxZGM1ZTU3YzY5JyxcbiAgICAgICAgICAgICAgICAnWC1SYXBpZEFQSS1Ib3N0JzogJ2FueS1hbmltZS5wLnJhcGlkYXBpLmNvbSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYXBpVVJMLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UocmVzdWx0KTtcbiAgICAgICAgICAgIGNyZWF0ZUZyYW1lKG9iai5pbWFnZXNbMF0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqLmltYWdlc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZW5lcmF0ZVNlc3Npb25JZCB9IGZyb20gJy4vZ2VuZXJhdGUtc2Vzc2lvbic7XG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFUb0pTT04ocHJvbXB0LCBiYWNrZ3JvdW5kX2NvbG91ciwgZmxhZ19lcmFzZV9iYWNrZ3JvdW5kLCBmbGFnX21ha2VfcGF0dGVybikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBqc29uRGF0YTtcbiAgICAgICAgbGV0IHNlc3Npb25JZCA9IHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJzZXNzaW9uSWRcIik7XG4gICAgICAgIGlmICghc2Vzc2lvbklkKSB7XG4gICAgICAgICAgICBzZXNzaW9uSWQgPSBnZW5lcmF0ZVNlc3Npb25JZCgpO1xuICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhcInNlc3Npb25JZFwiLCBzZXNzaW9uSWQpO1xuICAgICAgICB9XG4gICAgICAgIGpzb25EYXRhID0ge1xuICAgICAgICAgICAgdXNlcl9pZDogc2Vzc2lvbklkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBpbnB1dDogcHJvbXB0LFxuICAgICAgICAgICAgYmdf0YFvbG9yOiBiYWNrZ3JvdW5kX2NvbG91cixcbiAgICAgICAgICAgIGlzX3RyYW5zcGFyZW50OiBmbGFnX2VyYXNlX2JhY2tncm91bmQsXG4gICAgICAgICAgICBpc19wYXR0ZXJuOiBmbGFnX21ha2VfcGF0dGVyblxuICAgICAgICB9O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhd2FpdCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwiaW1hZ2VJdGVtc1wiKSk7IOKAlCDQv9C+0LrQsNC3INCy0YHQtdGFINGB0LPQtdC90LXRgNC40YDQvtCy0LDQvdC90YvRhSDQuNC30L7QsdGA0LDQttC10L3QuNC5XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uRGF0YSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBsb2FkRGF0YVRvU3RvcmFnZShwcm9tcHQsIGJhY2tncm91bmRfY29sb3VyLCBmbGFnX2VyYXNlX2JhY2tncm91bmQsIGZsYWdfbWFrZV9wYXR0ZXJuLCBpbWFnZV9pZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBpbWFnZXMgPSB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwiaW1hZ2VJdGVtc1wiKTtcbiAgICAgICAgbGV0IGltYWdlO1xuICAgICAgICBpbWFnZXMgPSBbXTtcbiAgICAgICAgaW1hZ2UgPSB7XG4gICAgICAgICAgICBpZDogaW1hZ2VfaWQsXG4gICAgICAgICAgICBpbnB1dDogcHJvbXB0LFxuICAgICAgICAgICAgYmdf0YFvbG9yOiBiYWNrZ3JvdW5kX2NvbG91cixcbiAgICAgICAgICAgIGlzX3RyYW5zcGFyZW50OiBmbGFnX2VyYXNlX2JhY2tncm91bmQsXG4gICAgICAgICAgICBpc19wYXR0ZXJuOiBmbGFnX21ha2VfcGF0dGVyblxuICAgICAgICB9O1xuICAgICAgICBpbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoXCJpbWFnZUl0ZW1zXCIsIGltYWdlcyk7XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgbG9hZERhdGFUb0pTT04gfSBmcm9tIFwiLi9sb2FkLWRhdGEtdG8tSlNPTlwiO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuL2hhbmRsZS11c2VyLWRhdGFcIjtcbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS51aS5yZXNpemUoNDQzLCAzMjApO1xuZmlnbWEudWkub25tZXNzYWdlID0gKHBsdWdpbk1lc3NhZ2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBqc29uRGF0YSA9IHlpZWxkIGxvYWREYXRhVG9KU09OKHBsdWdpbk1lc3NhZ2UucHJvbXB0LCBwbHVnaW5NZXNzYWdlLmJnQ29sb3VySXRlbSwgcGx1Z2luTWVzc2FnZS5lcmFzZUJnRmxhZywgcGx1Z2luTWVzc2FnZS5tYWtlUGF0dGVybkZsYWcpO1xuICAgIGNvbnN0IGFwaVVSTCA9IFwiaHR0cHM6Ly9hbnktYW5pbWUucC5yYXBpZGFwaS5jb20vdjEvYW5pbWUvZ2lmLzFcIjtcbiAgICAvLyBwb3N0RGF0YShqc29uRGF0YSwgYXBpVVJMKTtcbiAgICBnZXREYXRhKGFwaVVSTCk7XG4gICAgLy8gY29uc29sZS5sb2coanNvbkRhdGEpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=