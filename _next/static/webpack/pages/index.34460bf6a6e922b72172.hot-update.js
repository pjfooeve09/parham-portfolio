/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: 'Recipe Finder',\n  description: \"This App allows users to browse through popular and vegetarian recipes. In addition, they can search for a recipe and open a list of recipes based on the recipe category. Instructions and ingredients will be displayed to the user for each recipe.\",\n  image: 'images/recipe3.jpg',\n  tags: ['React'],\n  source: 'https://github.com/pjfooeve09/delicious-recipe',\n  visit: 'https://www.youtube.com/watch?v=wUVeY8Rnl84&ab_channel=papar24',\n  id: 1\n}, // {\n//   title: 'To Do List',\n//   description: \"This app allows users to create a todo list. Users can create a new todo list and then create, view, modify, and delete items in their list. Additionally, users can filter items by the list name. This app is written with a Rails API backend and Javascript frontend.\",\n//   image: 'images/todolist.jpg',\n//   tags: ['Ruby on Rails (backend)', 'JavaScript (frontend)'],\n//   source: 'https://github.com/pjfooeve09/todolist-frontend',\n//   visit: 'https://www.youtube.com/watch?v=ZlrfOMCA_sU&ab_channel=ParhamJavadi',\n//   id: 2,\n// },\n{\n  title: 'Superhero World',\n  description: 'This MVC Rails app allows users to create an account and login (as well as login with Facebook). This app allows the user to perform all the CRUD actions on a team with superheroes. The page \"Team With the Most Superheroes\" contains the team with the most superheroes that belong to the user who originally created the team.',\n  image: 'images/superhero.jpg',\n  tags: ['Ruby on Rails'],\n  source: 'https://github.com/pjfooeve09/superhero_world',\n  visit: 'https://www.youtube.com/watch?v=PUwQas-QoHI&ab_channel=papar24',\n  id: 3\n}, {\n  title: 'Sinatra Hospital Maker',\n  description: \"This MVC Sinatra application allows users to create signup and login to their account. Once logged in, the user can create a hospital based on hospital's name and hospital's country and can also view a list of all the hospitals created. Once a hospital is added, it can only be edited and deleted by the user who originally added the hospital.\",\n  image: 'images/sinatrahospital.jpg',\n  tags: ['Sinatra (Ruby)'],\n  source: 'https://github.com/pjfooeve09/sinatra-hospital-maker',\n  visit: 'https://www.youtube.com/watch?v=FxAuq6qN0nI&t=121s&ab_channel=ParhamJavadi',\n  id: 5\n}, {\n  title: 'Task Tracker',\n  description: \"This Vue.js app allows users to create, view, edit, and delete a task. It is similar to the To Do List app, but contains additional features such as a reminder.\",\n  image: 'images/tasktracker.jpg',\n  tags: ['Vue.js', 'HTML', 'CSS'],\n  source: 'https://github.com/pjfooeve09/task-tracker',\n  visit: '',\n  id: 4\n}];\nvar TimeLineData = [{\n  year: 2016,\n  text: 'Started my journey as a new developer.'\n}, {\n  year: 2017,\n  text: 'Worked intensively on ROMs & Kernels.'\n}, {\n  year: 2018,\n  text: 'Learned Android app development.'\n}, {\n  year: 2019,\n  text: 'Finished Diploma in Computer Engineering.'\n}, {\n  year: 2020,\n  text: 'Got a scholarship from the Delhi government.'\n}, {\n  year: 2021,\n  text: 'Still trying to figure out this weird year.'\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUV0QjtBQUNFQyxPQUFLLEVBQUUsZUFEVDtBQUVFQyxhQUFXLEVBQUUsd1BBRmY7QUFHRUMsT0FBSyxFQUFFLG9CQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsZ0RBTFY7QUFNRUMsT0FBSyxFQUFFLGdFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRnNCLEVBV3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VOLE9BQUssRUFBRSxpQkFEVDtBQUVFQyxhQUFXLEVBQUUsc1VBRmY7QUFHRUMsT0FBSyxFQUFFLHNCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLGVBQUQsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsK0NBTFY7QUFNRUMsT0FBSyxFQUFFLGdFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBcEJzQixFQTZCdEI7QUFDRU4sT0FBSyxFQUFFLHdCQURUO0FBRUVDLGFBQVcsRUFBRSx5VkFGZjtBQUdFQyxPQUFLLEVBQUUsNEJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsZ0JBQUQsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsc0RBTFY7QUFNRUMsT0FBSyxFQUFFLDRFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBN0JzQixFQXNDdEI7QUFDRU4sT0FBSyxFQUFFLGNBRFQ7QUFFRUMsYUFBVyxFQUFFLGtLQUZmO0FBR0VDLE9BQUssRUFBRSx3QkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixLQUFuQixDQUpSO0FBS0VDLFFBQU0sRUFBRSw0Q0FMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXRDc0IsQ0FBakI7QUFpREEsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FMMEIsRUFNMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTjBCLENBQXJCIiwiZmlsZSI6Ii4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG5cbiAge1xuICAgIHRpdGxlOiAnUmVjaXBlIEZpbmRlcicsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBBcHAgYWxsb3dzIHVzZXJzIHRvIGJyb3dzZSB0aHJvdWdoIHBvcHVsYXIgYW5kIHZlZ2V0YXJpYW4gcmVjaXBlcy4gSW4gYWRkaXRpb24sIHRoZXkgY2FuIHNlYXJjaCBmb3IgYSByZWNpcGUgYW5kIG9wZW4gYSBsaXN0IG9mIHJlY2lwZXMgYmFzZWQgb24gdGhlIHJlY2lwZSBjYXRlZ29yeS4gSW5zdHJ1Y3Rpb25zIGFuZCBpbmdyZWRpZW50cyB3aWxsIGJlIGRpc3BsYXllZCB0byB0aGUgdXNlciBmb3IgZWFjaCByZWNpcGUuXCIsXG4gICAgaW1hZ2U6ICdpbWFnZXMvcmVjaXBlMy5qcGcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vcGpmb29ldmUwOS9kZWxpY2lvdXMtcmVjaXBlJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9d1VWZVk4Um5sODQmYWJfY2hhbm5lbD1wYXBhcjI0JyxcbiAgICBpZDogMSxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiAnVG8gRG8gTGlzdCcsXG4gIC8vICAgZGVzY3JpcHRpb246IFwiVGhpcyBhcHAgYWxsb3dzIHVzZXJzIHRvIGNyZWF0ZSBhIHRvZG8gbGlzdC4gVXNlcnMgY2FuIGNyZWF0ZSBhIG5ldyB0b2RvIGxpc3QgYW5kIHRoZW4gY3JlYXRlLCB2aWV3LCBtb2RpZnksIGFuZCBkZWxldGUgaXRlbXMgaW4gdGhlaXIgbGlzdC4gQWRkaXRpb25hbGx5LCB1c2VycyBjYW4gZmlsdGVyIGl0ZW1zIGJ5IHRoZSBsaXN0IG5hbWUuIFRoaXMgYXBwIGlzIHdyaXR0ZW4gd2l0aCBhIFJhaWxzIEFQSSBiYWNrZW5kIGFuZCBKYXZhc2NyaXB0IGZyb250ZW5kLlwiLFxuICAvLyAgIGltYWdlOiAnaW1hZ2VzL3RvZG9saXN0LmpwZycsXG4gIC8vICAgdGFnczogWydSdWJ5IG9uIFJhaWxzIChiYWNrZW5kKScsICdKYXZhU2NyaXB0IChmcm9udGVuZCknXSxcbiAgLy8gICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vcGpmb29ldmUwOS90b2RvbGlzdC1mcm9udGVuZCcsXG4gIC8vICAgdmlzaXQ6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVpscmZPTUNBX3NVJmFiX2NoYW5uZWw9UGFyaGFtSmF2YWRpJyxcbiAgLy8gICBpZDogMixcbiAgLy8gfSxcbiAge1xuICAgIHRpdGxlOiAnU3VwZXJoZXJvIFdvcmxkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgTVZDIFJhaWxzIGFwcCBhbGxvd3MgdXNlcnMgdG8gY3JlYXRlIGFuIGFjY291bnQgYW5kIGxvZ2luIChhcyB3ZWxsIGFzIGxvZ2luIHdpdGggRmFjZWJvb2spLiBUaGlzIGFwcCBhbGxvd3MgdGhlIHVzZXIgdG8gcGVyZm9ybSBhbGwgdGhlIENSVUQgYWN0aW9ucyBvbiBhIHRlYW0gd2l0aCBzdXBlcmhlcm9lcy4gVGhlIHBhZ2UgXCJUZWFtIFdpdGggdGhlIE1vc3QgU3VwZXJoZXJvZXNcIiBjb250YWlucyB0aGUgdGVhbSB3aXRoIHRoZSBtb3N0IHN1cGVyaGVyb2VzIHRoYXQgYmVsb25nIHRvIHRoZSB1c2VyIHdobyBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhlIHRlYW0uJyxcbiAgICBpbWFnZTogJ2ltYWdlcy9zdXBlcmhlcm8uanBnJyxcbiAgICB0YWdzOiBbJ1J1Ynkgb24gUmFpbHMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vcGpmb29ldmUwOS9zdXBlcmhlcm9fd29ybGQnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1QVXdRYXMtUW9ISSZhYl9jaGFubmVsPXBhcGFyMjQnLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTaW5hdHJhIEhvc3BpdGFsIE1ha2VyJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIE1WQyBTaW5hdHJhIGFwcGxpY2F0aW9uIGFsbG93cyB1c2VycyB0byBjcmVhdGUgc2lnbnVwIGFuZCBsb2dpbiB0byB0aGVpciBhY2NvdW50LiBPbmNlIGxvZ2dlZCBpbiwgdGhlIHVzZXIgY2FuIGNyZWF0ZSBhIGhvc3BpdGFsIGJhc2VkIG9uIGhvc3BpdGFsJ3MgbmFtZSBhbmQgaG9zcGl0YWwncyBjb3VudHJ5IGFuZCBjYW4gYWxzbyB2aWV3IGEgbGlzdCBvZiBhbGwgdGhlIGhvc3BpdGFscyBjcmVhdGVkLiBPbmNlIGEgaG9zcGl0YWwgaXMgYWRkZWQsIGl0IGNhbiBvbmx5IGJlIGVkaXRlZCBhbmQgZGVsZXRlZCBieSB0aGUgdXNlciB3aG8gb3JpZ2luYWxseSBhZGRlZCB0aGUgaG9zcGl0YWwuXCIsXG4gICAgaW1hZ2U6ICdpbWFnZXMvc2luYXRyYWhvc3BpdGFsLmpwZycsXG4gICAgdGFnczogWydTaW5hdHJhIChSdWJ5KSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wamZvb2V2ZTA5L3NpbmF0cmEtaG9zcGl0YWwtbWFrZXInLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1GeEF1cTZxTjBuSSZ0PTEyMXMmYWJfY2hhbm5lbD1QYXJoYW1KYXZhZGknLFxuICAgIGlkOiA1LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUYXNrIFRyYWNrZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgVnVlLmpzIGFwcCBhbGxvd3MgdXNlcnMgdG8gY3JlYXRlLCB2aWV3LCBlZGl0LCBhbmQgZGVsZXRlIGEgdGFzay4gSXQgaXMgc2ltaWxhciB0byB0aGUgVG8gRG8gTGlzdCBhcHAsIGJ1dCBjb250YWlucyBhZGRpdGlvbmFsIGZlYXR1cmVzIHN1Y2ggYXMgYSByZW1pbmRlci5cIixcbiAgICBpbWFnZTogJ2ltYWdlcy90YXNrdHJhY2tlci5qcGcnLFxuICAgIHRhZ3M6IFsnVnVlLmpzJywgJ0hUTUwnLCAnQ1NTJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3BqZm9vZXZlMDkvdGFzay10cmFja2VyJyxcbiAgICB2aXNpdDogJycsXG4gICAgaWQ6IDQsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTYsIHRleHQ6ICdTdGFydGVkIG15IGpvdXJuZXkgYXMgYSBuZXcgZGV2ZWxvcGVyLicsIH0sXG4gIHsgeWVhcjogMjAxNywgdGV4dDogJ1dvcmtlZCBpbnRlbnNpdmVseSBvbiBST01zICYgS2VybmVscy4nLCB9LFxuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdMZWFybmVkIEFuZHJvaWQgYXBwIGRldmVsb3BtZW50LicsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0ZpbmlzaGVkIERpcGxvbWEgaW4gQ29tcHV0ZXIgRW5naW5lZXJpbmcuJywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnR290IGEgc2Nob2xhcnNoaXAgZnJvbSB0aGUgRGVsaGkgZ292ZXJubWVudC4nLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdTdGlsbCB0cnlpbmcgdG8gZmlndXJlIG91dCB0aGlzIHdlaXJkIHllYXIuJywgfSxcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});