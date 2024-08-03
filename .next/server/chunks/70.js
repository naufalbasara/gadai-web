"use strict";
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 1070:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(924);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(119);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_3__]);
_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ButtonVariant = (/* unused pure expression or super */ null && ([
    "primary",
    "outline",
    "ghost",
    "light",
    "dark"
]));
const ButtonSize = (/* unused pure expression or super */ null && ([
    "sm",
    "base"
]));
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children, className, disabled: buttonDisabled, isLoading, variant = "primary", size = "base", isDarkBg = false, leftIcon: LeftIcon, rightIcon: RightIcon, classNames, ...rest }, ref)=>{
    const disabled = isLoading || buttonDisabled;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        ref: ref,
        type: "button",
        disabled: disabled,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("inline-flex items-center rounded font-medium", "focus-visible:ring-primary-500 focus:outline-none focus-visible:ring", "shadow-sm", "transition-colors duration-75", //#region  //*=========== Size ===========
        [
            size === "base" && [
                "px-3 py-1.5",
                "text-sm md:text-base"
            ],
            size === "sm" && [
                "px-2 py-1",
                "text-xs md:text-sm"
            ]
        ], //#endregion  //*======== Size ===========
        //#region  //*=========== Variants ===========
        [
            variant === "primary" && [
                "bg-primary-500 text-white",
                "border-primary-600 border",
                "hover:bg-primary-600 hover:text-white",
                "active:bg-primary-700",
                "disabled:bg-primary-700"
            ],
            variant === "outline" && [
                "text-primary-500",
                "border-primary-500 border",
                "hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100",
                isDarkBg && "hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800"
            ],
            variant === "ghost" && [
                "text-primary-500",
                "shadow-none",
                "hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100",
                isDarkBg && "hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800"
            ],
            variant === "light" && [
                "bg-white text-gray-700",
                "border border-gray-300",
                "hover:text-dark hover:bg-gray-100",
                "active:bg-white/80 disabled:bg-gray-200"
            ],
            variant === "dark" && [
                "bg-gray-900 text-white",
                "border border-gray-600",
                "hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700"
            ]
        ], //#endregion  //*======== Variants ===========
        "disabled:cursor-not-allowed", isLoading && "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait", className),
        ...rest,
        children: [
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", {
                    "text-white": [
                        "primary",
                        "dark"
                    ].includes(variant),
                    "text-black": [
                        "light"
                    ].includes(variant),
                    "text-primary-500": [
                        "outline",
                        "ghost"
                    ].includes(variant)
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_2__.ImSpinner2, {
                    className: "animate-spin"
                })
            }),
            LeftIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)([
                    size === "base" && "mr-1",
                    size === "sm" && "mr-1.5"
                ]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LeftIcon, {
                    size: "1em",
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)([
                        size === "base" && "md:text-md text-md",
                        size === "sm" && "md:text-md text-sm"
                    ], classNames?.leftIcon)
                })
            }),
            children,
            RightIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)([
                    size === "base" && "ml-1",
                    size === "sm" && "ml-1.5"
                ]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RightIcon, {
                    size: "1em",
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)([
                        size === "base" && "text-md md:text-md",
                        size === "sm" && "md:text-md text-sm"
                    ], classNames?.rightIcon)
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;