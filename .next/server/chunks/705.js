"use strict";
exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



// !STARTERCONF Change these default meta
const defaultMeta = {
    title: "BPKB Auto Jakarta",
    siteName: "BPKB Auto Jakarta",
    description: "Solusi BPKB Usaha",
    /** Without additional '/' on the end, e.g. https://theodorusclarence.com */ url: "https://tsnext-tw.thcl.dev",
    type: "website",
    robots: "follow, index",
    /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */ image: "https://tsnext-tw.thcl.dev/images/large-og.png"
};
function Seo(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const meta = {
        ...defaultMeta,
        ...props
    };
    meta["title"] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;
    // Use siteName if there is templateTitle
    // but show full title if there is none
    // !STARTERCONF Follow config for opengraph, by deploying one on https://github.com/theodorusclarence/og
    // ? Uncomment code below if you want to use default open graph
    // meta['image'] = openGraph({
    //   description: meta.description,
    //   siteName: props.templateTitle ? meta.siteName : meta.title,
    //   templateTitle: props.templateTitle,
    // });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: meta.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "robots",
                content: meta.robots
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                content: meta.description,
                name: "description"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: `${meta.url}${router.asPath}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: `${meta.url}${router.asPath}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: meta.type
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: meta.siteName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: meta.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: meta.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "image",
                property: "og:image",
                content: meta.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: meta.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: meta.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: meta.image
            }),
            meta.date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "article:published_time",
                        content: meta.date
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "publish_date",
                        property: "og:publish_date",
                        content: meta.date
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        property: "article:author",
                        content: "Theodorus Clarence"
                    })
                ]
            }),
            favicons.map((linkProps)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    ...linkProps
                }, linkProps.href)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#ffffff"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-config",
                content: "/favicon/browserconfig.xml"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "theme-color",
                content: "#ffffff"
            })
        ]
    });
}
// !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
// ! then replace the whole /public/favicon folder and favicon.ico
const favicons = [
    {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png"
    },
    {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png"
    },
    {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png"
    },
    {
        rel: "manifest",
        href: "/favicon/site.webmanifest"
    },
    {
        rel: "mask-icon",
        href: "/favicon/safari-pinned-tab.svg",
        color: "#00e887"
    },
    {
        rel: "shortcut icon",
        href: "/favicon/favicon.ico"
    }
];


/***/ }),

/***/ 6652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@material-tailwind/react"
var react_ = __webpack_require__(4715);
;// CONCATENATED MODULE: ./src/components/layout/Footer.tsx


const SITEMAP = [
    {
        title: "Company",
        links: [
            "About Us",
            "Careers",
            "Our Team",
            "Projects"
        ]
    },
    {
        title: "Help Center",
        links: [
            "Discord",
            "Twitter",
            "GitHub",
            "Contact Us"
        ]
    },
    {
        title: "Resources",
        links: [
            "Blog",
            "Newsletter",
            "Free Products",
            "Affiliate Program"
        ]
    },
    {
        title: "Products",
        links: [
            "Templates",
            "UI Kits",
            "Icons",
            "Mockups"
        ]
    }
];
const currentYear = new Date().getFullYear();
function Footer() {
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "relative bg-[#23549a] text-white bottom-0 w-full",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mx-auto w-full max-w-7xl px-8",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4",
                    children: SITEMAP.map(({ title, links }, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(react_.Typography, {
                                    variant: "small",
                                    color: "blue-gray",
                                    className: "mb-4 font-bold uppercase opacity-50",
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                    className: "space-y-1",
                                    children: links.map((link, key)=>/*#__PURE__*/ jsx_runtime.jsx(react_.Typography, {
                                            as: "li",
                                            color: "blue-gray",
                                            className: "font-normal",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#",
                                                className: "inline-block py-1 pr-2 transition-transform hover:scale-105",
                                                children: link
                                            })
                                        }, key))
                                })
                            ]
                        }, key))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.Typography, {
                            variant: "small",
                            className: "mb-4 text-center font-normal text-blue-gray-900 md:mb-0",
                            children: [
                                "\xa9 ",
                                currentYear,
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "/",
                                    children: "Solusi BPKB Usaha"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex gap-4 text-blue-gray-900 sm:justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(react_.Typography, {
                                    as: "a",
                                    href: "#",
                                    className: "opacity-80 transition-opacity hover:opacity-100",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                        className: "h-5 w-5",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            "fill-rule": "evenodd",
                                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                                            "clip-rule": "evenodd"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(react_.Typography, {
                                    as: "a",
                                    href: "#",
                                    className: "opacity-80 transition-opacity hover:opacity-100",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                        className: "h-5 w-5",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            "fill-rule": "evenodd",
                                            d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                            "clip-rule": "evenodd"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(react_.Typography, {
                                    as: "a",
                                    href: "#",
                                    className: "opacity-80 transition-opacity hover:opacity-100",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                        className: "h-5 w-5",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(react_.Typography, {
                                    as: "a",
                                    href: "#",
                                    className: "opacity-80 transition-opacity hover:opacity-100",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                        className: "h-5 w-5",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            "fill-rule": "evenodd",
                                            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                            "clip-rule": "evenodd"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(react_.Typography, {
                                    as: "a",
                                    href: "#",
                                    className: "opacity-80 transition-opacity hover:opacity-100",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                        className: "h-5 w-5",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            "fill-rule": "evenodd",
                                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
                                            "clip-rule": "evenodd"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/layout/Header.tsx



function Header() {
    const [openNav, setOpenNav] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        window.addEventListener("resize", ()=>window.innerWidth >= 960 && setOpenNav(false));
    }, []);
    const links = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/produk",
            label: "Produk & Layanan"
        },
        {
            href: "/about",
            label: "About Us"
        },
        {
            href: "/privacy",
            label: "Privacy Policy"
        }
    ];
    const navList = /*#__PURE__*/ jsx_runtime.jsx("ul", {
        className: "mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",
        children: links.map((link, index)=>/*#__PURE__*/ jsx_runtime.jsx(react_.Typography, {
                as: "li",
                variant: "small",
                color: "blue-gray",
                className: "p-1 font-normal",
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    href: link.href,
                    className: "flex items-center text-white hover:text-blue-400",
                    children: link.label
                })
            }, index))
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.Navbar, {
        className: "fixed bg-[#23549a] top-0 m-0 z-10 h-max max-w-full text-black rounded-none px-4 py-2 lg:px-8 lg:py-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between text-blue-gray-900",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(react_.Typography, {
                        as: "a",
                        href: "#",
                        className: "mr-4 cursor-pointer py-1.5 font-medium text-2xl text-white",
                        children: "SOLUSI BPKB USAHA"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mr-4 hidden lg:block",
                                children: navList
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(react_.IconButton, {
                                variant: "text",
                                className: "ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden",
                                ripple: false,
                                onClick: ()=>setOpenNav(!openNav),
                                children: openNav ? /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    className: "h-6 w-6",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M6 18L18 6M6 6l12 12"
                                    })
                                }) : /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-6 w-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(react_.MobileNav, {
                open: openNav,
                children: navList
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/layout/Layout.tsx




function Layout({ children }) {
    // Put Header or Footer Here
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: "m-0 ",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;