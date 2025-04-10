!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("spbQRCode", [], factory) : "object" == typeof exports ? exports.spbQRCode = factory() : root.spbQRCode = factory();
}("undefined" != typeof self ? self : this, (function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.r = function(exports) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
        };
        __webpack_require__.t = function(value, mode) {
            1 & mode && (value = __webpack_require__(value));
            if (8 & mode) return value;
            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: !0,
                value: value
            });
            if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return {}.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 2);
    }([ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(1);
    }, function(module, exports, __webpack_require__) {
        "undefined" != typeof self && self, module.exports = function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
                if (installedModules[moduleId]) return installedModules[moduleId].exports;
                var module = installedModules[moduleId] = {
                    i: moduleId,
                    l: !1,
                    exports: {}
                };
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                module.l = !0;
                return module.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports, name, getter) {
                __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                    enumerable: !0,
                    get: getter
                });
            };
            __webpack_require__.r = function(exports) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                });
            };
            __webpack_require__.t = function(value, mode) {
                1 & mode && (value = __webpack_require__(value));
                if (8 & mode) return value;
                if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                var ns = Object.create(null);
                __webpack_require__.r(ns);
                Object.defineProperty(ns, "default", {
                    enumerable: !0,
                    value: value
                });
                if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                    return value[key];
                }.bind(null, key));
                return ns;
            };
            __webpack_require__.n = function(module) {
                var getter = module && module.__esModule ? function() {
                    return module.default;
                } : function() {
                    return module;
                };
                __webpack_require__.d(getter, "a", getter);
                return getter;
            };
            __webpack_require__.o = function(object, property) {
                return {}.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = 0);
        }([ function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "ElementNode", (function() {
                return node_ElementNode;
            }));
            __webpack_require__.d(__webpack_exports__, "FragmentNode", (function() {
                return node_FragmentNode;
            }));
            __webpack_require__.d(__webpack_exports__, "TextNode", (function() {
                return node_TextNode;
            }));
            __webpack_require__.d(__webpack_exports__, "ComponentNode", (function() {
                return node_ComponentNode;
            }));
            __webpack_require__.d(__webpack_exports__, "node", (function() {
                return node_node;
            }));
            __webpack_require__.d(__webpack_exports__, "Fragment", (function() {
                return Fragment;
            }));
            __webpack_require__.d(__webpack_exports__, "text", (function() {
                return text_text;
            }));
            __webpack_require__.d(__webpack_exports__, "dom", (function() {
                return dom;
            }));
            __webpack_require__.d(__webpack_exports__, "react", (function() {
                return react;
            }));
            __webpack_require__.d(__webpack_exports__, "html", (function() {
                return html;
            }));
            __webpack_require__.d(__webpack_exports__, "preact", (function() {
                return preact;
            }));
            __webpack_require__.d(__webpack_exports__, "regex", (function() {
                return regex;
            }));
            __webpack_require__.d(__webpack_exports__, "NODE_TYPE", (function() {
                return NODE_TYPE;
            }));
            __webpack_require__.d(__webpack_exports__, "Style", (function() {
                return Style;
            }));
            __webpack_require__.d(__webpack_exports__, "Regex", (function() {
                return Regex;
            }));
            __webpack_require__.d(__webpack_exports__, "RegexText", (function() {
                return RegexText;
            }));
            __webpack_require__.d(__webpack_exports__, "RegexWord", (function() {
                return RegexWord;
            }));
            __webpack_require__.d(__webpack_exports__, "RegexCharacters", (function() {
                return RegexCharacters;
            }));
            __webpack_require__.d(__webpack_exports__, "RegexGroup", (function() {
                return RegexGroup;
            }));
            __webpack_require__.d(__webpack_exports__, "RegexUnion", (function() {
                return RegexUnion;
            }));
            var NODE_TYPE = {
                ELEMENT: "element",
                TEXT: "text",
                COMPONENT: "component",
                FRAGMENT: "fragment"
            };
            function _renderChildren(children, renderer) {
                var result = [];
                for (var _i2 = 0; _i2 < children.length; _i2++) {
                    var renderedChild = children[_i2].render(renderer);
                    if (renderedChild) if (Array.isArray(renderedChild)) for (var _i4 = 0; _i4 < renderedChild.length; _i4++) {
                        var subchild = renderedChild[_i4];
                        subchild && result.push(subchild);
                    } else result.push(renderedChild);
                }
                return result;
            }
            var node_ElementNode = function() {
                function ElementNode(name, props, children) {
                    this.type = NODE_TYPE.ELEMENT;
                    this.name = void 0;
                    this.props = void 0;
                    this.children = void 0;
                    this.onRender = void 0;
                    this.name = name;
                    this.props = props || {};
                    this.children = children;
                    var onRender = this.props.onRender;
                    if ("function" == typeof onRender) {
                        this.onRender = onRender;
                        delete props.onRender;
                    }
                }
                var _proto = ElementNode.prototype;
                _proto.render = function(renderer) {
                    var el = renderer(this);
                    this.onRender && this.onRender(el);
                    return el;
                };
                _proto.renderChildren = function(renderer) {
                    return _renderChildren(this.children, renderer);
                };
                return ElementNode;
            }();
            var node_FragmentNode = function() {
                function FragmentNode(children) {
                    this.type = NODE_TYPE.FRAGMENT;
                    this.children = void 0;
                    this.children = children;
                }
                FragmentNode.prototype.render = function(renderer) {
                    return _renderChildren(this.children, renderer);
                };
                return FragmentNode;
            }();
            var node_TextNode = function() {
                function TextNode(text) {
                    this.type = NODE_TYPE.TEXT;
                    this.text = void 0;
                    this.text = text;
                }
                TextNode.prototype.render = function(renderer) {
                    return renderer(this);
                };
                return TextNode;
            }();
            var node_ComponentNode = function() {
                function ComponentNode(component, props, children) {
                    this.type = NODE_TYPE.COMPONENT;
                    this.component = void 0;
                    this.props = void 0;
                    this.children = void 0;
                    this.component = component;
                    this.props = props || {};
                    this.children = children;
                    this.props.children = children;
                }
                var _proto4 = ComponentNode.prototype;
                _proto4.renderComponent = function(renderer) {
                    var child = function(child) {
                        var children = normalizeChildren(Array.isArray(child) ? child : [ child ]);
                        return 1 === children.length ? children[0] : children.length > 1 ? new node_FragmentNode(children) : void 0;
                    }(this.component(this.props, this.children));
                    if (child) return child.render(renderer);
                };
                _proto4.render = function(renderer) {
                    return renderer(this);
                };
                _proto4.renderChildren = function(renderer) {
                    return _renderChildren(this.children, renderer);
                };
                return ComponentNode;
            }();
            function normalizeChildren(children) {
                var result = [];
                for (var _i6 = 0; _i6 < children.length; _i6++) {
                    var child = children[_i6];
                    if (child) if ("string" == typeof child || "number" == typeof child) result.push(new node_TextNode(child.toString())); else {
                        if ("boolean" == typeof child) continue;
                        if (Array.isArray(child)) for (var _i8 = 0, _normalizeChildren2 = normalizeChildren(child); _i8 < _normalizeChildren2.length; _i8++) result.push(_normalizeChildren2[_i8]); else {
                            if (!child || child.type !== NODE_TYPE.ELEMENT && child.type !== NODE_TYPE.TEXT && child.type !== NODE_TYPE.COMPONENT) throw new TypeError("Unrecognized node type: " + typeof child);
                            result.push(child);
                        }
                    }
                }
                return result;
            }
            var node_node = function(element, props) {
                for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) children[_key - 2] = arguments[_key];
                children = normalizeChildren(children);
                if ("string" == typeof element) return new node_ElementNode(element, props, children);
                if ("function" == typeof element) return new node_ComponentNode(element, props, children);
                throw new TypeError("Expected jsx element to be a string or a function");
            };
            var Fragment = function(props, children) {
                return children;
            };
            function text_text() {
                return function textRenderer(node) {
                    if (node.type === NODE_TYPE.COMPONENT) return [].concat(node.renderComponent(textRenderer)).join("");
                    if (node.type === NODE_TYPE.ELEMENT) throw new Error("Text renderer does not support basic elements");
                    if (node.type === NODE_TYPE.TEXT) return node.text;
                    throw new TypeError("Unhandleable node: " + node.type);
                };
            }
            function isDefined(val) {
                return null != val;
            }
            var _ELEMENT_DEFAULT_XML_, _ATTRIBUTE_DEFAULT_XM, _ADD_CHILDREN;
            var ELEMENT_DEFAULT_XML_NAMESPACE = ((_ELEMENT_DEFAULT_XML_ = {}).svg = "http://www.w3.org/2000/svg", 
            _ELEMENT_DEFAULT_XML_);
            var ATTRIBUTE_DEFAULT_XML_NAMESPACE = ((_ATTRIBUTE_DEFAULT_XM = {})["xlink:href"] = "http://www.w3.org/1999/xlink", 
            _ATTRIBUTE_DEFAULT_XM);
            function createTextElement(doc, node) {
                return doc.createTextNode(node.text);
            }
            function addProps(el, node) {
                var props = node.props;
                for (var _i4 = 0, _Object$keys2 = Object.keys(props); _i4 < _Object$keys2.length; _i4++) {
                    var prop = _Object$keys2[_i4];
                    var val = props[prop];
                    if (null != val && "el" !== prop && "innerHTML" !== prop) if (prop.match(/^on[A-Z][a-z]/) && "function" == typeof val) el.addEventListener(prop.slice(2).toLowerCase(), val); else if ("string" == typeof val || "number" == typeof val) {
                        var xmlNamespace = ATTRIBUTE_DEFAULT_XML_NAMESPACE[prop];
                        xmlNamespace ? el.setAttributeNS(xmlNamespace, prop, val.toString()) : el.setAttribute(prop, val.toString());
                    } else "boolean" == typeof val && !0 === val && el.setAttribute(prop, "");
                }
                "iframe" !== el.tagName.toLowerCase() || props.id || el.setAttribute("id", "jsx-iframe-" + "xxxxxxxxxx".replace(/./g, (function() {
                    return "0123456789abcdef".charAt(Math.floor(Math.random() * "0123456789abcdef".length));
                })));
            }
            var ADD_CHILDREN = ((_ADD_CHILDREN = {}).iframe = function(el, node) {
                var firstChild = node.children[0];
                if (1 !== node.children.length || !firstChild || firstChild.type !== NODE_TYPE.ELEMENT || "html" !== firstChild.name) throw new Error("Expected only single html element node as child of iframe element");
                el.addEventListener("load", (function() {
                    var win = el.contentWindow;
                    if (!win) throw new Error("Expected frame to have contentWindow");
                    var doc = win.document;
                    var docElement = doc.documentElement;
                    for (;docElement.children && docElement.children.length; ) docElement.removeChild(docElement.children[0]);
                    var child = firstChild.render(dom({
                        doc: doc
                    }));
                    for (;child.children.length; ) docElement.appendChild(child.children[0]);
                }));
            }, _ADD_CHILDREN.script = function(el, node) {
                var firstChild = node.children[0];
                if (1 !== node.children.length || !firstChild || firstChild.type !== NODE_TYPE.TEXT) throw new Error("Expected only single text node as child of script element");
                el.text = firstChild.text;
            }, _ADD_CHILDREN.default = function(el, node, renderer) {
                for (var _i6 = 0, _node$renderChildren2 = node.renderChildren(renderer); _i6 < _node$renderChildren2.length; _i6++) el.appendChild(_node$renderChildren2[_i6]);
            }, _ADD_CHILDREN);
            function addChildren(el, node, doc, renderer) {
                if (node.props.hasOwnProperty("innerHTML")) {
                    if (node.children.length) throw new Error("Expected no children to be passed when innerHTML prop is set");
                    var html = node.props.innerHTML;
                    if ("string" != typeof html) throw new TypeError("innerHTML prop must be string");
                    if ("script" === node.name) el.text = html; else {
                        el.innerHTML = html;
                        !function(el, doc) {
                            void 0 === doc && (doc = window.document);
                            for (var _i2 = 0, _el$querySelectorAll2 = el.querySelectorAll("script"); _i2 < _el$querySelectorAll2.length; _i2++) {
                                var script = _el$querySelectorAll2[_i2];
                                var parentNode = script.parentNode;
                                if (parentNode) {
                                    var newScript = doc.createElement("script");
                                    newScript.text = script.textContent;
                                    parentNode.replaceChild(newScript, script);
                                }
                            }
                        }(el, doc);
                    }
                } else (ADD_CHILDREN[node.name] || ADD_CHILDREN.default)(el, node, renderer);
            }
            function dom(opts) {
                void 0 === opts && (opts = {});
                var _opts$doc = opts.doc, doc = void 0 === _opts$doc ? document : _opts$doc;
                return function domRenderer(node) {
                    if (node.type === NODE_TYPE.COMPONENT) return node.renderComponent(domRenderer);
                    if (node.type === NODE_TYPE.TEXT) return createTextElement(doc, node);
                    if (node.type === NODE_TYPE.ELEMENT) {
                        var xmlNamespace = ELEMENT_DEFAULT_XML_NAMESPACE[node.name.toLowerCase()];
                        if (xmlNamespace) return function xmlNamespaceDomRenderer(node, xmlNamespace) {
                            if (node.type === NODE_TYPE.COMPONENT) return node.renderComponent((function(childNode) {
                                return xmlNamespaceDomRenderer(childNode, xmlNamespace);
                            }));
                            if (node.type === NODE_TYPE.TEXT) return createTextElement(doc, node);
                            if (node.type === NODE_TYPE.ELEMENT) {
                                var el = function(doc, node, xmlNamespace) {
                                    return doc.createElementNS(xmlNamespace, node.name);
                                }(doc, node, xmlNamespace);
                                addProps(el, node);
                                addChildren(el, node, doc, (function(childNode) {
                                    return xmlNamespaceDomRenderer(childNode, xmlNamespace);
                                }));
                                return el;
                            }
                            throw new TypeError("Unhandleable node");
                        }(node, xmlNamespace);
                        var el = function(doc, node) {
                            return node.props.el ? node.props.el : doc.createElement(node.name);
                        }(doc, node);
                        addProps(el, node);
                        addChildren(el, node, doc, domRenderer);
                        return el;
                    }
                    throw new TypeError("Unhandleable node");
                };
            }
            function _extends() {
                return (_extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }).apply(this, arguments);
            }
            function _objectWithoutPropertiesLoose(source, excluded) {
                if (null == source) return {};
                var target = {};
                var sourceKeys = Object.keys(source);
                var key, i;
                for (i = 0; i < sourceKeys.length; i++) excluded.indexOf(key = sourceKeys[i]) >= 0 || (target[key] = source[key]);
                return target;
            }
            var _excluded = [ "innerHTML", "class" ];
            function react(_temp) {
                var React = (void 0 === _temp ? {} : _temp).React;
                if (!React) throw new Error("Must pass React library to react renderer");
                return function reactRenderer(node) {
                    if (node.type === NODE_TYPE.COMPONENT) return React.createElement.apply(React, [ function() {
                        return node.renderComponent(reactRenderer) || null;
                    }, node.props ].concat(node.renderChildren(reactRenderer)));
                    if (node.type === NODE_TYPE.ELEMENT) return React.createElement.apply(React, [ node.name, (props = node.props, 
                    innerHTML = props.innerHTML, _extends({
                        dangerouslySetInnerHTML: innerHTML ? {
                            __html: innerHTML
                        } : null,
                        className: props.class
                    }, _objectWithoutPropertiesLoose(props, _excluded))) ].concat(node.renderChildren(reactRenderer)));
                    var props, innerHTML;
                    if (node.type === NODE_TYPE.TEXT) return node.text;
                    throw new TypeError("Unhandleable node");
                };
            }
            var SELF_CLOSING_TAGS = {
                br: !0
            };
            function htmlEncode(text) {
                return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;");
            }
            function html() {
                return function htmlRenderer(node) {
                    if (node.type === NODE_TYPE.COMPONENT) return [].concat(node.renderComponent(htmlRenderer)).join("");
                    if (node.type === NODE_TYPE.ELEMENT) {
                        var renderedProps = (props = node.props, (keys = Object.keys(props).filter((function(key) {
                            var val = props[key];
                            return "innerHTML" !== key && ("string" == typeof val || "number" == typeof val || !0 === val);
                        }))).length ? " " + keys.map((function(key) {
                            var val = props[key];
                            if (!0 === val) return "" + htmlEncode(key);
                            if ("string" != typeof val && "number" != typeof val) throw new TypeError("Unexpected prop type: " + typeof val);
                            return "" === val ? htmlEncode(key) : htmlEncode(key) + '="' + htmlEncode(val.toString()) + '"';
                        })).join(" ") : "");
                        if (SELF_CLOSING_TAGS[node.name]) return "<" + node.name + renderedProps + " />";
                        var renderedChildren = "string" == typeof node.props.innerHTML ? node.props.innerHTML : node.renderChildren(htmlRenderer).join("");
                        return "<" + node.name + renderedProps + ">" + renderedChildren + "</" + node.name + ">";
                    }
                    var props, keys;
                    if (node.type === NODE_TYPE.TEXT) return htmlEncode(node.text);
                    throw new TypeError("Unhandleable node: " + node.type);
                };
            }
            var preact_excluded = [ "innerHTML" ];
            function preact(_temp) {
                var Preact = (void 0 === _temp ? {} : _temp).Preact;
                if (!Preact) throw new Error("Must pass Preact library to react renderer");
                return function reactRenderer(node) {
                    if (node.type === NODE_TYPE.COMPONENT) return Preact.h.apply(Preact, [ function() {
                        return node.renderComponent(reactRenderer) || null;
                    }, node.props ].concat(node.renderChildren(reactRenderer)));
                    if (node.type === NODE_TYPE.ELEMENT) return Preact.h.apply(Preact, [ node.name, (props = node.props, 
                    innerHTML = props.innerHTML, _extends({
                        dangerouslySetInnerHTML: innerHTML ? {
                            __html: innerHTML
                        } : null
                    }, _objectWithoutPropertiesLoose(props, preact_excluded))) ].concat(node.renderChildren(reactRenderer)));
                    var props, innerHTML;
                    if (node.type === NODE_TYPE.TEXT) return node.text;
                    throw new TypeError("Unhandleable node");
                };
            }
            function regex() {
                var regexRenderer = text_text();
                return function(nodeInstance) {
                    return new RegExp(regexRenderer(nodeInstance));
                };
            }
            regex.node = function(el, props) {
                for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) children[_key - 2] = arguments[_key];
                var nodeInstance = node_node.apply(void 0, [ el, props ].concat(children));
                return el.renderer ? nodeInstance.render(el.renderer()) : nodeInstance;
            };
            function Style(_ref) {
                var css = _ref.css, nonce = _ref.nonce, children = _ref.children;
                return node_node(Fragment, null, node_node("style", {
                    innerHTML: "string" == typeof css ? css : css._getCss(),
                    nonce: nonce
                }), children);
            }
            var escapeRegex = function(text) {
                return text.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
            };
            var regex_validateAndEscapeChildren = function(name, children) {
                return (children = function(name, children) {
                    if (!children) throw new Error("Must pass children to " + name);
                    return children;
                }(name, children)).map((function(child) {
                    return child.type === NODE_TYPE.TEXT ? new node_TextNode(escapeRegex(child.text)) : child;
                }));
            };
            function Regex(_ref, children) {
                var _ref$exact = _ref.exact, exact = void 0 === _ref$exact || _ref$exact;
                children = regex_validateAndEscapeChildren("RegexGroup", children);
                return exact ? [ "^" ].concat(children, [ "$" ]) : children;
            }
            Regex.renderer = regex;
            function RegexText(props, children) {
                return regex_validateAndEscapeChildren("RegexText", children);
            }
            function RegexWord(props, children) {
                !function(name, children) {
                    if (children && children.length) throw new Error("Must not pass children to RegexWord");
                }(0, children);
                return "\\w+";
            }
            function RegexCharacters(props, children) {
                return [ "[" ].concat(regex_validateAndEscapeChildren("RegexText", children), [ "]" ]);
            }
            function RegexGroup(_ref2, children) {
                var repeat = _ref2.repeat, repeatMin = _ref2.repeatMin, repeatMax = _ref2.repeatMax, name = _ref2.name, _ref2$optional = _ref2.optional, optional = void 0 !== _ref2$optional && _ref2$optional, _ref2$capture = _ref2.capture, capture = void 0 === _ref2$capture || _ref2$capture, _ref2$union = _ref2.union, union = void 0 !== _ref2$union && _ref2$union;
                children = regex_validateAndEscapeChildren("RegexGroup", children);
                if (isDefined(repeat) && (isDefined(repeatMin) || isDefined(repeatMax))) throw new Error("repeat can not be used with repeatMin or repeatMax");
                if (name && !capture) throw new Error("Named groups must be captured");
                if (union) {
                    var _result = [];
                    for (var _i2 = 0, _children2 = children; _i2 < _children2.length; _i2++) {
                        _result.push(_children2[_i2]);
                        _result.push(new node_TextNode("|"));
                    }
                    _result.pop();
                    children = _result;
                }
                var result = [];
                result.push(capture ? "(" : "(?:");
                name && result.push("?<" + escapeRegex(name) + ">");
                result.push.apply(result, children);
                result.push(")");
                isDefined(repeat) && ("number" == typeof repeat ? result.push("{" + repeat + "}") : !0 === repeat && result.push("+"));
                (isDefined(repeatMin) || isDefined(repeatMax)) && result.push("{" + (repeatMin || "") + "," + (repeatMax || "") + "}");
                optional && result.push("?");
                return result;
            }
            function RegexUnion(props, children) {
                var result = [];
                for (var _i4 = 0, _children4 = children = regex_validateAndEscapeChildren("RegexGroup", children); _i4 < _children4.length; _i4++) {
                    result.push(_children4[_i4]);
                    result.push("|");
                }
                result.pop();
                return result;
            }
        } ]);
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "renderQRCode", (function() {
            return renderQRCode;
        }));
        function _extends() {
            return (_extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        var n, l, preact_module_u, preact_module_t, preact_module_o, f = {}, e = [], c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
        function s(n, l) {
            for (var u in l) n[u] = l[u];
            return n;
        }
        function preact_module_a(n) {
            var l = n.parentNode;
            l && l.removeChild(n);
        }
        function h(l, u, i) {
            var t, o, r, f = {};
            for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
            if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), 
            "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
            return v(l, f, t, o, null);
        }
        function v(n, i, t, o, r) {
            var f = {
                type: n,
                props: i,
                key: t,
                ref: o,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: null == r ? ++preact_module_u : r
            };
            return null == r && null != l.vnode && l.vnode(f), f;
        }
        function p(n) {
            return n.children;
        }
        function d(n, l) {
            this.props = n, this.context = l;
        }
        function _(n, l) {
            if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;
            for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
            return "function" == typeof n.type ? _(n) : null;
        }
        function k(n) {
            var l, u;
            if (null != (n = n.__) && null != n.__c) {
                for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
                    n.__e = n.__c.base = u.__e;
                    break;
                }
                return k(n);
            }
        }
        function b(n) {
            (!n.__d && (n.__d = !0) && preact_module_t.push(n) && !g.__r++ || preact_module_o !== l.debounceRendering) && ((preact_module_o = l.debounceRendering) || setTimeout)(g);
        }
        function g() {
            for (var n; g.__r = preact_module_t.length; ) n = preact_module_t.sort((function(n, l) {
                return n.__v.__b - l.__v.__b;
            })), preact_module_t = [], n.some((function(n) {
                var l, u, i, t, o, r;
                n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s({}, t)).__v = t.__v + 1, 
                j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [ o ] : null, u, null == o ? _(t) : o, t.__h), 
                z(u, t), t.__e != o && k(t)));
            }));
        }
        function w(n, l, u, i, t, o, r, c, s, a) {
            var h, y, d, k, b, g, w, x = i && i.__k || e, C = x.length;
            for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(p, {
                children: k
            }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, k.ref ? k.ref : null, k.__v) : k)) {
                if (k.__ = u, k.__b = u.__b + 1, null === (d = x[h]) || d && k.key == d.key && k.type === d.type) x[h] = void 0; else for (y = 0; y < C; y++) {
                    if ((d = x[y]) && k.key == d.key && k.type === d.type) {
                        x[y] = void 0;
                        break;
                    }
                    d = null;
                }
                j(n, k, d = d || f, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), 
                d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), 
                "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m(k, s, n) : s = A(n, k, d, x, b, s), 
                "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _(d));
            }
            for (u.__e = g, h = C; h--; ) null != x[h] && N(x[h], x[h]);
            if (w) for (h = 0; h < w.length; h++) M(w[h], w[++h], w[++h]);
        }
        function m(n, l, u) {
            for (var i, t = n.__k, o = 0; t && o < t.length; o++) (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m(i, l, u) : A(u, i, i, t, i.__e, l));
            return l;
        }
        function A(n, l, u, i, t, o) {
            var r, f, e;
            if (void 0 !== l.__d) r = l.__d, l.__d = void 0; else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), 
            r = null; else {
                for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 1) if (f == t) break n;
                n.insertBefore(t, o), r = o;
            }
            return void 0 !== r ? r : t.nextSibling;
        }
        function $(n, l, u) {
            "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
        }
        function H(n, l, u, i, t) {
            var o;
            n: if ("style" === l) if ("string" == typeof u) n.style.cssText = u; else {
                if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
                if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
            } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), 
            l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), 
            n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o); else if ("dangerouslySetInnerHTML" !== l) {
                if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s"); else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
                    n[l] = null == u ? "" : u;
                    break n;
                } catch (n) {}
                "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
            }
        }
        function I(n) {
            this.l[n.type + !1](l.event ? l.event(n) : n);
        }
        function T(n) {
            this.l[n.type + !0](l.event ? l.event(n) : n);
        }
        function j(n, u, i, t, o, r, f, e, c) {
            var a, h, v, y, _, k, b, g, m, x, A, C, $, H, I, T = u.type;
            if (void 0 !== u.constructor) return null;
            null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [ e ]), (a = l.__b) && a(u);
            try {
                n: if ("function" == typeof T) {
                    if (g = u.props, m = (a = T.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, 
                    i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in T && T.prototype.render ? u.__c = h = new T(g, x) : (u.__c = h = new d(g, x), 
                    h.constructor = T, h.render = O), m && m.sub(h), h.props = g, h.state || (h.state = {}), 
                    h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), 
                    null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), 
                    s(h.__s, T.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), 
                    null != h.componentDidMount && h.__h.push(h.componentDidMount); else {
                        if (null == T.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), 
                        !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
                            for (h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, 
                            u.__k = i.__k, u.__k.forEach((function(n) {
                                n && (n.__ = u);
                            })), A = 0; A < h._sb.length; A++) h.__h.push(h._sb[A]);
                            h._sb = [], h.__h.length && f.push(h);
                            break n;
                        }
                        null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push((function() {
                            h.componentDidUpdate(y, _, k);
                        }));
                    }
                    if (h.context = x, h.props = g, h.__v = u, h.__P = n, C = l.__r, $ = 0, "prototype" in T && T.prototype.render) {
                        for (h.state = h.__s, h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), 
                        H = 0; H < h._sb.length; H++) h.__h.push(h._sb[H]);
                        h._sb = [];
                    } else do {
                        h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
                    } while (h.__d && ++$ < 25);
                    h.state = h.__s, null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), 
                    v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), 
                    I = null != a && a.type === p && null == a.key ? a.props.children : a, w(n, Array.isArray(I) ? I : [ I ], u, i, t, o, r, f, e, c), 
                    h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), 
                    h.__e = !1;
                } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, o, r, f, c);
                (a = l.diffed) && a(u);
            } catch (n) {
                u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), 
                l.__e(n, u, i);
            }
        }
        function z(n, u) {
            l.__c && l.__c(u, n), n.some((function(u) {
                try {
                    n = u.__h, u.__h = [], n.some((function(n) {
                        n.call(u);
                    }));
                } catch (n) {
                    l.__e(n, u.__v);
                }
            }));
        }
        function L(l, u, i, t, o, r, e, c) {
            var s, h, v, y = i.props, p = u.props, d = u.type, k = 0;
            if ("svg" === d && (o = !0), null != r) for (;k < r.length; k++) if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
                l = s, r[k] = null;
                break;
            }
            if (null == l) {
                if (null === d) return document.createTextNode(p);
                l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), 
                r = null, c = !1;
            }
            if (null === d) y === p || c && l.data === p || (l.data = p); else {
                if (r = r && n.call(l.childNodes), h = (y = i.props || f).dangerouslySetInnerHTML, 
                v = p.dangerouslySetInnerHTML, !c) {
                    if (null != r) for (y = {}, k = 0; k < l.attributes.length; k++) y[l.attributes[k].name] = l.attributes[k].value;
                    (v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
                }
                if (function(n, l, u, i, t) {
                    var o;
                    for (o in u) "children" === o || "key" === o || o in l || H(n, o, null, u[o], i);
                    for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H(n, o, l[o], u[o], i);
                }(l, p, y, o, c), v) u.__k = []; else if (k = u.props.children, w(l, Array.isArray(k) ? k : [ k ], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _(i, 0), c), 
                null != r) for (k = r.length; k--; ) null != r[k] && preact_module_a(r[k]);
                c || ("value" in p && void 0 !== (k = p.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== y.value) && H(l, "value", k, y.value, !1), 
                "checked" in p && void 0 !== (k = p.checked) && k !== l.checked && H(l, "checked", k, y.checked, !1));
            }
            return l;
        }
        function M(n, u, i) {
            try {
                "function" == typeof n ? n(u) : n.current = u;
            } catch (n) {
                l.__e(n, i);
            }
        }
        function N(n, u, i) {
            var t, o;
            if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), 
            null != (t = n.__c)) {
                if (t.componentWillUnmount) try {
                    t.componentWillUnmount();
                } catch (n) {
                    l.__e(n, u);
                }
                t.base = t.__P = null, n.__c = void 0;
            }
            if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N(t[o], u, i || "function" != typeof n.type);
            i || null == n.__e || preact_module_a(n.__e), n.__ = n.__e = n.__d = void 0;
        }
        function O(n, l, u) {
            return this.constructor(n, u);
        }
        n = e.slice, l = {
            __e: function(n, l, u, i) {
                for (var t, o, r; l = l.__; ) if ((t = l.__c) && !t.__) try {
                    if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), 
                    r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), 
                    r) return t.__E = t;
                } catch (l) {
                    n = l;
                }
                throw n;
            }
        }, preact_module_u = 0, d.prototype.setState = function(n, l) {
            var u;
            u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), 
            "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this._sb.push(l), 
            b(this));
        }, d.prototype.forceUpdate = function(n) {
            this.__v && (this.__e = !0, n && this.__h.push(n), b(this));
        }, d.prototype.render = p, preact_module_t = [], g.__r = 0;
        var hooks_module_t, hooks_module_r, hooks_module_u, hooks_module_i, hooks_module_o = 0, hooks_module_f = [], hooks_module_c = [], hooks_module_e = l.__b, hooks_module_a = l.__r, hooks_module_v = l.diffed, hooks_module_l = l.__c, hooks_module_m = l.unmount;
        function hooks_module_d(t, u) {
            l.__h && l.__h(hooks_module_r, t, hooks_module_o || u), hooks_module_o = 0;
            var i = hooks_module_r.__H || (hooks_module_r.__H = {
                __: [],
                __h: []
            });
            return t >= i.__.length && i.__.push({
                __V: hooks_module_c
            }), i.__[t];
        }
        function hooks_module_p(n) {
            return hooks_module_o = 1, function(n, u, i) {
                var o = hooks_module_d(hooks_module_t++, 2);
                if (o.t = n, !o.__c && (o.__ = [ hooks_module_B(void 0, u), function(n) {
                    var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
                    t !== r && (o.__N = [ r, o.__[1] ], o.__c.setState({}));
                } ], o.__c = hooks_module_r, !hooks_module_r.u)) {
                    hooks_module_r.u = !0;
                    var f = hooks_module_r.shouldComponentUpdate;
                    hooks_module_r.shouldComponentUpdate = function(n, t, r) {
                        if (!o.__c.__H) return !0;
                        var u = o.__c.__H.__.filter((function(n) {
                            return n.__c;
                        }));
                        if (u.every((function(n) {
                            return !n.__N;
                        }))) return !f || f.call(this, n, t, r);
                        var i = !1;
                        return u.forEach((function(n) {
                            if (n.__N) {
                                var t = n.__[0];
                                n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                            }
                        })), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
                    };
                }
                return o.__N || o.__;
            }(hooks_module_B, n);
        }
        function hooks_module_b() {
            for (var t; t = hooks_module_f.shift(); ) if (t.__P && t.__H) try {
                t.__H.__h.forEach(hooks_module_k), t.__H.__h.forEach(hooks_module_w), t.__H.__h = [];
            } catch (r) {
                t.__H.__h = [], l.__e(r, t.__v);
            }
        }
        l.__b = function(n) {
            hooks_module_r = null, hooks_module_e && hooks_module_e(n);
        }, l.__r = function(n) {
            hooks_module_a && hooks_module_a(n), hooks_module_t = 0;
            var i = (hooks_module_r = n.__c).__H;
            i && (hooks_module_u === hooks_module_r ? (i.__h = [], hooks_module_r.__h = [], 
            i.__.forEach((function(n) {
                n.__N && (n.__ = n.__N), n.__V = hooks_module_c, n.__N = n.i = void 0;
            }))) : (i.__h.forEach(hooks_module_k), i.__h.forEach(hooks_module_w), i.__h = [])), 
            hooks_module_u = hooks_module_r;
        }, l.diffed = function(t) {
            hooks_module_v && hooks_module_v(t);
            var o = t.__c;
            o && o.__H && (o.__H.__h.length && (1 !== hooks_module_f.push(o) && hooks_module_i === l.requestAnimationFrame || ((hooks_module_i = l.requestAnimationFrame) || hooks_module_j)(hooks_module_b)), 
            o.__H.__.forEach((function(n) {
                n.i && (n.__H = n.i), n.__V !== hooks_module_c && (n.__ = n.__V), n.i = void 0, 
                n.__V = hooks_module_c;
            }))), hooks_module_u = hooks_module_r = null;
        }, l.__c = function(t, r) {
            r.some((function(t) {
                try {
                    t.__h.forEach(hooks_module_k), t.__h = t.__h.filter((function(n) {
                        return !n.__ || hooks_module_w(n);
                    }));
                } catch (u) {
                    r.some((function(n) {
                        n.__h && (n.__h = []);
                    })), r = [], l.__e(u, t.__v);
                }
            })), hooks_module_l && hooks_module_l(t, r);
        }, l.unmount = function(t) {
            hooks_module_m && hooks_module_m(t);
            var r, u = t.__c;
            u && u.__H && (u.__H.__.forEach((function(n) {
                try {
                    hooks_module_k(n);
                } catch (n) {
                    r = n;
                }
            })), u.__H = void 0, r && l.__e(r, u.__v));
        };
        var hooks_module_g = "function" == typeof requestAnimationFrame;
        function hooks_module_j(n) {
            var t, r = function() {
                clearTimeout(u), hooks_module_g && cancelAnimationFrame(t), setTimeout(n);
            }, u = setTimeout(r, 100);
            hooks_module_g && (t = requestAnimationFrame(r));
        }
        function hooks_module_k(n) {
            var t = hooks_module_r, u = n.__c;
            "function" == typeof u && (n.__c = void 0, u()), hooks_module_r = t;
        }
        function hooks_module_w(n) {
            var t = hooks_module_r;
            n.__c = n.__(), hooks_module_r = t;
        }
        function hooks_module_B(n, t) {
            return "function" == typeof t ? t(n) : t;
        }
        function utils_isPromise(item) {
            try {
                if (!item) return !1;
                if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                if ("undefined" != typeof window && "function" == typeof window.Window && item instanceof window.Window) return !1;
                if ("undefined" != typeof window && "function" == typeof window.constructor && item instanceof window.constructor) return !1;
                var _toString = {}.toString;
                if (_toString) {
                    var name = _toString.call(item);
                    if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                }
                if ("function" == typeof item.then) return !0;
            } catch (err) {
                return !1;
            }
            return !1;
        }
        var dispatchedErrors = [];
        var possiblyUnhandledPromiseHandlers = [];
        var activeCount = 0;
        var flushPromise;
        function flushActive() {
            if (!activeCount && flushPromise) {
                var promise = flushPromise;
                flushPromise = null;
                promise.resolve();
            }
        }
        function startActive() {
            activeCount += 1;
        }
        function endActive() {
            activeCount -= 1;
            flushActive();
        }
        var promise_ZalgoPromise = function() {
            function ZalgoPromise(handler) {
                var _this = this;
                this.resolved = void 0;
                this.rejected = void 0;
                this.errorHandled = void 0;
                this.value = void 0;
                this.error = void 0;
                this.handlers = void 0;
                this.dispatching = void 0;
                this.stack = void 0;
                this.resolved = !1;
                this.rejected = !1;
                this.errorHandled = !1;
                this.handlers = [];
                if (handler) {
                    var _result;
                    var _error;
                    var resolved = !1;
                    var rejected = !1;
                    var isAsync = !1;
                    startActive();
                    try {
                        handler((function(res) {
                            if (isAsync) _this.resolve(res); else {
                                resolved = !0;
                                _result = res;
                            }
                        }), (function(err) {
                            if (isAsync) _this.reject(err); else {
                                rejected = !0;
                                _error = err;
                            }
                        }));
                    } catch (err) {
                        endActive();
                        this.reject(err);
                        return;
                    }
                    endActive();
                    isAsync = !0;
                    resolved ? this.resolve(_result) : rejected && this.reject(_error);
                }
            }
            var _proto = ZalgoPromise.prototype;
            _proto.resolve = function(result) {
                if (this.resolved || this.rejected) return this;
                if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
                this.resolved = !0;
                this.value = result;
                this.dispatch();
                return this;
            };
            _proto.reject = function(error) {
                var _this2 = this;
                if (this.resolved || this.rejected) return this;
                if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
                if (!error) {
                    var _err = error && "function" == typeof error.toString ? error.toString() : {}.toString.call(error);
                    error = new Error("Expected reject to be called with Error, got " + _err);
                }
                this.rejected = !0;
                this.error = error;
                this.errorHandled || setTimeout((function() {
                    _this2.errorHandled || function(err, promise) {
                        if (-1 === dispatchedErrors.indexOf(err)) {
                            dispatchedErrors.push(err);
                            setTimeout((function() {
                                throw err;
                            }), 1);
                            for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err, promise);
                        }
                    }(error, _this2);
                }), 1);
                this.dispatch();
                return this;
            };
            _proto.asyncReject = function(error) {
                this.errorHandled = !0;
                this.reject(error);
                return this;
            };
            _proto.dispatch = function() {
                var resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                if (!this.dispatching && (resolved || rejected)) {
                    this.dispatching = !0;
                    startActive();
                    var chain = function(firstPromise, secondPromise) {
                        return firstPromise.then((function(res) {
                            secondPromise.resolve(res);
                        }), (function(err) {
                            secondPromise.reject(err);
                        }));
                    };
                    for (var i = 0; i < handlers.length; i++) {
                        var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise;
                        var _result2 = void 0;
                        if (resolved) try {
                            _result2 = onSuccess ? onSuccess(this.value) : this.value;
                        } catch (err) {
                            promise.reject(err);
                            continue;
                        } else if (rejected) {
                            if (!onError) {
                                promise.reject(this.error);
                                continue;
                            }
                            try {
                                _result2 = onError(this.error);
                            } catch (err) {
                                promise.reject(err);
                                continue;
                            }
                        }
                        if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
                            var promiseResult = _result2;
                            promiseResult.resolved ? promise.resolve(promiseResult.value) : promise.reject(promiseResult.error);
                            promiseResult.errorHandled = !0;
                        } else utils_isPromise(_result2) ? _result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected) ? _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error) : chain(_result2, promise) : promise.resolve(_result2);
                    }
                    handlers.length = 0;
                    this.dispatching = !1;
                    endActive();
                }
            };
            _proto.then = function(onSuccess, onError) {
                if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                var promise = new ZalgoPromise;
                this.handlers.push({
                    promise: promise,
                    onSuccess: onSuccess,
                    onError: onError
                });
                this.errorHandled = !0;
                this.dispatch();
                return promise;
            };
            _proto.catch = function(onError) {
                return this.then(void 0, onError);
            };
            _proto.finally = function(onFinally) {
                if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
                return this.then((function(result) {
                    return ZalgoPromise.try(onFinally).then((function() {
                        return result;
                    }));
                }), (function(err) {
                    return ZalgoPromise.try(onFinally).then((function() {
                        throw err;
                    }));
                }));
            };
            _proto.timeout = function(time, err) {
                var _this3 = this;
                if (this.resolved || this.rejected) return this;
                var timeout = setTimeout((function() {
                    _this3.resolved || _this3.rejected || _this3.reject(err || new Error("Promise timed out after " + time + "ms"));
                }), time);
                return this.then((function(result) {
                    clearTimeout(timeout);
                    return result;
                }));
            };
            _proto.toPromise = function() {
                if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                return Promise.resolve(this);
            };
            _proto.lazy = function() {
                this.errorHandled = !0;
                return this;
            };
            ZalgoPromise.resolve = function(value) {
                return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise((function(resolve, reject) {
                    return value.then(resolve, reject);
                })) : (new ZalgoPromise).resolve(value);
            };
            ZalgoPromise.reject = function(error) {
                return (new ZalgoPromise).reject(error);
            };
            ZalgoPromise.asyncReject = function(error) {
                return (new ZalgoPromise).asyncReject(error);
            };
            ZalgoPromise.all = function(promises) {
                var promise = new ZalgoPromise;
                var count = promises.length;
                var results = [].slice();
                if (!count) {
                    promise.resolve(results);
                    return promise;
                }
                var chain = function(i, firstPromise, secondPromise) {
                    return firstPromise.then((function(res) {
                        results[i] = res;
                        0 == (count -= 1) && promise.resolve(results);
                    }), (function(err) {
                        secondPromise.reject(err);
                    }));
                };
                for (var i = 0; i < promises.length; i++) {
                    var prom = promises[i];
                    if (prom instanceof ZalgoPromise) {
                        if (prom.resolved) {
                            results[i] = prom.value;
                            count -= 1;
                            continue;
                        }
                    } else if (!utils_isPromise(prom)) {
                        results[i] = prom;
                        count -= 1;
                        continue;
                    }
                    chain(i, ZalgoPromise.resolve(prom), promise);
                }
                0 === count && promise.resolve(results);
                return promise;
            };
            ZalgoPromise.hash = function(promises) {
                var result = {};
                var awaitPromises = [];
                var _loop = function(key) {
                    if (promises.hasOwnProperty(key)) {
                        var value = promises[key];
                        utils_isPromise(value) ? awaitPromises.push(value.then((function(res) {
                            result[key] = res;
                        }))) : result[key] = value;
                    }
                };
                for (var key in promises) _loop(key);
                return ZalgoPromise.all(awaitPromises).then((function() {
                    return result;
                }));
            };
            ZalgoPromise.map = function(items, method) {
                return ZalgoPromise.all(items.map(method));
            };
            ZalgoPromise.onPossiblyUnhandledException = function(handler) {
                return function(handler) {
                    possiblyUnhandledPromiseHandlers.push(handler);
                    return {
                        cancel: function() {
                            possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                        }
                    };
                }(handler);
            };
            ZalgoPromise.try = function(method, context, args) {
                if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
                var result;
                startActive();
                try {
                    result = method.apply(context, args || []);
                } catch (err) {
                    endActive();
                    return ZalgoPromise.reject(err);
                }
                endActive();
                return ZalgoPromise.resolve(result);
            };
            ZalgoPromise.delay = function(_delay) {
                return new ZalgoPromise((function(resolve) {
                    setTimeout(resolve, _delay);
                }));
            };
            ZalgoPromise.isPromise = function(value) {
                return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
            };
            ZalgoPromise.flush = function() {
                return function(Zalgo) {
                    var promise = flushPromise = flushPromise || new Zalgo;
                    flushActive();
                    return promise;
                }(ZalgoPromise);
            };
            return ZalgoPromise;
        }();
        function getUserAgent() {
            return window.navigator.mockUserAgent || window.navigator.userAgent;
        }
        function _setPrototypeOf(o, p) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
                o.__proto__ = p;
                return o;
            })(o, p);
        }
        function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype);
            subClass.prototype.constructor = subClass;
            _setPrototypeOf(subClass, superClass);
        }
        var IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
        function getActualProtocol(win) {
            void 0 === win && (win = window);
            return win.location.protocol;
        }
        function getProtocol(win) {
            void 0 === win && (win = window);
            if (win.mockDomain) {
                var protocol = win.mockDomain.split("//")[0];
                if (protocol) return protocol;
            }
            return getActualProtocol(win);
        }
        function isAboutProtocol(win) {
            void 0 === win && (win = window);
            return "about:" === getProtocol(win);
        }
        function canReadFromWindow(win) {
            try {
                return !0;
            } catch (err) {}
            return !1;
        }
        function getActualDomain(win) {
            void 0 === win && (win = window);
            var location = win.location;
            if (!location) throw new Error("Can not read window location");
            var protocol = getActualProtocol(win);
            if (!protocol) throw new Error("Can not read window protocol");
            if ("file:" === protocol) return "file://";
            if ("about:" === protocol) {
                var parent = function(win) {
                    void 0 === win && (win = window);
                    if (win) try {
                        if (win.parent && win.parent !== win) return win.parent;
                    } catch (err) {}
                }(win);
                return parent && canReadFromWindow() ? getActualDomain(parent) : "about://";
            }
            var host = location.host;
            if (!host) throw new Error("Can not read window host");
            return protocol + "//" + host;
        }
        function getDomain(win) {
            void 0 === win && (win = window);
            var domain = getActualDomain(win);
            return domain && win.mockDomain && 0 === win.mockDomain.indexOf("mock:") ? win.mockDomain : domain;
        }
        function isSameDomain(win) {
            if (!function(win) {
                try {
                    if (win === window) return !0;
                } catch (err) {}
                try {
                    var desc = Object.getOwnPropertyDescriptor(win, "location");
                    if (desc && !1 === desc.enumerable) return !1;
                } catch (err) {}
                try {
                    if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                } catch (err) {}
                try {
                    if (function(win) {
                        void 0 === win && (win = window);
                        return "mock:" === getProtocol(win);
                    }(win) && canReadFromWindow()) return !0;
                } catch (err) {}
                try {
                    if (getActualDomain(win) === getActualDomain(window)) return !0;
                } catch (err) {}
                return !1;
            }(win)) return !1;
            try {
                if (win === window) return !0;
                if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                if (getDomain(window) === getDomain(win)) return !0;
            } catch (err) {}
            return !1;
        }
        function assertSameDomain(win) {
            if (!isSameDomain(win)) throw new Error("Expected window to be same domain");
            return win;
        }
        var iframeWindows = [];
        var iframeFrames = [];
        function isWindowClosed(win, allowMock) {
            void 0 === allowMock && (allowMock = !0);
            try {
                if (win === window) return !1;
            } catch (err) {
                return !0;
            }
            try {
                if (!win) return !0;
            } catch (err) {
                return !0;
            }
            try {
                if (win.closed) return !0;
            } catch (err) {
                return !err || err.message !== IE_WIN_ACCESS_ERROR;
            }
            if (allowMock && isSameDomain(win)) try {
                if (win.mockclosed) return !0;
            } catch (err) {}
            try {
                if (!win.parent || !win.top) return !0;
            } catch (err) {}
            var iframeIndex = function(collection, item) {
                for (var i = 0; i < collection.length; i++) try {
                    if (collection[i] === item) return i;
                } catch (err) {}
                return -1;
            }(iframeWindows, win);
            if (-1 !== iframeIndex) {
                var frame = iframeFrames[iframeIndex];
                if (frame && function(frame) {
                    if (!frame.contentWindow) return !0;
                    if (!frame.parentNode) return !0;
                    var doc = frame.ownerDocument;
                    if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
                        var parent = frame;
                        for (;parent.parentNode && parent.parentNode !== parent; ) parent = parent.parentNode;
                        if (!parent.host || !doc.documentElement.contains(parent.host)) return !0;
                    }
                    return !1;
                }(frame)) return !0;
            }
            return !1;
        }
        function isWindow(obj) {
            try {
                if (obj === window) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if ("[object Window]" === {}.toString.call(obj)) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (window.Window && obj instanceof window.Window) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.self === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.parent === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.top === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && "__unlikely_value__" === obj.__cross_domain_utils_window_check__) return !1;
            } catch (err) {
                return !0;
            }
            try {
                if ("postMessage" in obj && "self" in obj && "location" in obj) return !0;
            } catch (err) {}
            return !1;
        }
        function util_safeIndexOf(collection, item) {
            for (var i = 0; i < collection.length; i++) try {
                if (collection[i] === item) return i;
            } catch (err) {}
            return -1;
        }
        var weakmap_CrossDomainSafeWeakMap = function() {
            function CrossDomainSafeWeakMap() {
                this.name = void 0;
                this.weakmap = void 0;
                this.keys = void 0;
                this.values = void 0;
                this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__";
                if (function() {
                    if ("undefined" == typeof WeakMap) return !1;
                    if (void 0 === Object.freeze) return !1;
                    try {
                        var testWeakMap = new WeakMap;
                        var testKey = {};
                        Object.freeze(testKey);
                        testWeakMap.set(testKey, "__testvalue__");
                        return "__testvalue__" === testWeakMap.get(testKey);
                    } catch (err) {
                        return !1;
                    }
                }()) try {
                    this.weakmap = new WeakMap;
                } catch (err) {}
                this.keys = [];
                this.values = [];
            }
            var _proto = CrossDomainSafeWeakMap.prototype;
            _proto._cleanupClosedWindows = function() {
                var weakmap = this.weakmap;
                var keys = this.keys;
                for (var i = 0; i < keys.length; i++) {
                    var value = keys[i];
                    if (isWindow(value) && isWindowClosed(value)) {
                        if (weakmap) try {
                            weakmap.delete(value);
                        } catch (err) {}
                        keys.splice(i, 1);
                        this.values.splice(i, 1);
                        i -= 1;
                    }
                }
            };
            _proto.isSafeToReadWrite = function(key) {
                return !isWindow(key);
            };
            _proto.set = function(key, value) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    weakmap.set(key, value);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var name = this.name;
                    var entry = key[name];
                    entry && entry[0] === key ? entry[1] = value : Object.defineProperty(key, name, {
                        value: [ key, value ],
                        writable: !0
                    });
                    return;
                } catch (err) {}
                this._cleanupClosedWindows();
                var keys = this.keys;
                var values = this.values;
                var index = util_safeIndexOf(keys, key);
                if (-1 === index) {
                    keys.push(key);
                    values.push(value);
                } else values[index] = value;
            };
            _proto.get = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    if (weakmap.has(key)) return weakmap.get(key);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    return entry && entry[0] === key ? entry[1] : void 0;
                } catch (err) {}
                this._cleanupClosedWindows();
                var index = util_safeIndexOf(this.keys, key);
                if (-1 !== index) return this.values[index];
            };
            _proto.delete = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    weakmap.delete(key);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    entry && entry[0] === key && (entry[0] = entry[1] = void 0);
                } catch (err) {}
                this._cleanupClosedWindows();
                var keys = this.keys;
                var index = util_safeIndexOf(keys, key);
                if (-1 !== index) {
                    keys.splice(index, 1);
                    this.values.splice(index, 1);
                }
            };
            _proto.has = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    if (weakmap.has(key)) return !0;
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    return !(!entry || entry[0] !== key);
                } catch (err) {}
                this._cleanupClosedWindows();
                return -1 !== util_safeIndexOf(this.keys, key);
            };
            _proto.getOrSet = function(key, getter) {
                if (this.has(key)) return this.get(key);
                var value = getter();
                this.set(key, value);
                return value;
            };
            return CrossDomainSafeWeakMap;
        }();
        function _getPrototypeOf(o) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
        }
        function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                return !0;
            } catch (e) {
                return !1;
            }
        }
        function construct_construct(Parent, args, Class) {
            return (construct_construct = _isNativeReflectConstruct() ? Reflect.construct : function(Parent, args, Class) {
                var a = [ null ];
                a.push.apply(a, args);
                var instance = new (Function.bind.apply(Parent, a));
                Class && _setPrototypeOf(instance, Class.prototype);
                return instance;
            }).apply(null, arguments);
        }
        function wrapNativeSuper_wrapNativeSuper(Class) {
            var _cache = "function" == typeof Map ? new Map : void 0;
            return (wrapNativeSuper_wrapNativeSuper = function(Class) {
                if (null === Class || !(fn = Class, -1 !== Function.toString.call(fn).indexOf("[native code]"))) return Class;
                var fn;
                if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== _cache) {
                    if (_cache.has(Class)) return _cache.get(Class);
                    _cache.set(Class, Wrapper);
                }
                function Wrapper() {
                    return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
                }
                Wrapper.prototype = Object.create(Class.prototype, {
                    constructor: {
                        value: Wrapper,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                return _setPrototypeOf(Wrapper, Class);
            })(Class);
        }
        function getFunctionName(fn) {
            return fn.name || fn.__name__ || fn.displayName || "anonymous";
        }
        function setFunctionName(fn, name) {
            try {
                delete fn.name;
                fn.name = name;
            } catch (err) {}
            fn.__name__ = fn.displayName = name;
            return fn;
        }
        function base64encode(str) {
            if ("function" == typeof btoa) return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function(m, p1) {
                return String.fromCharCode(parseInt(p1, 16));
            }))).replace(/[=]/g, "");
            if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64").replace(/[=]/g, "");
            throw new Error("Can not find window.btoa or Buffer");
        }
        function uniqueID() {
            var chars = "0123456789abcdef";
            return "uid_" + "xxxxxxxxxx".replace(/./g, (function() {
                return chars.charAt(Math.floor(Math.random() * chars.length));
            })) + "_" + base64encode((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        }
        var objectIDs;
        function serializeArgs(args) {
            try {
                return JSON.stringify([].slice.call(args), (function(subkey, val) {
                    return "function" == typeof val ? "memoize[" + function(obj) {
                        objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap;
                        if (null == obj || "object" != typeof obj && "function" != typeof obj) throw new Error("Invalid object");
                        var uid = objectIDs.get(obj);
                        if (!uid) {
                            uid = typeof obj + ":" + uniqueID();
                            objectIDs.set(obj, uid);
                        }
                        return uid;
                    }(val) + "]" : function(element) {
                        var passed = !1;
                        try {
                            (element instanceof window.Element || null !== element && "object" == typeof element && 1 === element.nodeType && "object" == typeof element.style && "object" == typeof element.ownerDocument) && (passed = !0);
                        } catch (_) {}
                        return passed;
                    }(val) ? {} : val;
                }));
            } catch (err) {
                throw new Error("Arguments not serializable -- can not be used to memoize");
            }
        }
        function getEmptyObject() {
            return {};
        }
        var memoizeGlobalIndex = 0;
        var memoizeGlobalIndexValidFrom = 0;
        function memoize(method, options) {
            void 0 === options && (options = {});
            var _options$thisNamespac = options.thisNamespace, thisNamespace = void 0 !== _options$thisNamespac && _options$thisNamespac, cacheTime = options.time;
            var simpleCache;
            var thisCache;
            var memoizeIndex = memoizeGlobalIndex;
            memoizeGlobalIndex += 1;
            var memoizedFunction = function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (memoizeIndex < memoizeGlobalIndexValidFrom) {
                    simpleCache = null;
                    thisCache = null;
                    memoizeIndex = memoizeGlobalIndex;
                    memoizeGlobalIndex += 1;
                }
                var cache;
                cache = thisNamespace ? (thisCache = thisCache || new weakmap_CrossDomainSafeWeakMap).getOrSet(this, getEmptyObject) : simpleCache = simpleCache || {};
                var cacheKey;
                try {
                    cacheKey = serializeArgs(args);
                } catch (_unused) {
                    return method.apply(this, arguments);
                }
                var cacheResult = cache[cacheKey];
                if (cacheResult && cacheTime && Date.now() - cacheResult.time < cacheTime) {
                    delete cache[cacheKey];
                    cacheResult = null;
                }
                if (cacheResult) return cacheResult.value;
                var time = Date.now();
                var value = method.apply(this, arguments);
                cache[cacheKey] = {
                    time: time,
                    value: value
                };
                return value;
            };
            memoizedFunction.reset = function() {
                simpleCache = null;
                thisCache = null;
            };
            return setFunctionName(memoizedFunction, (options.name || getFunctionName(method)) + "::memoized");
        }
        memoize.clear = function() {
            memoizeGlobalIndexValidFrom = memoizeGlobalIndex;
        };
        function inlineMemoize(method, logic, args) {
            void 0 === args && (args = []);
            var cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {};
            var key = serializeArgs(args);
            return cache.hasOwnProperty(key) ? cache[key] : cache[key] = logic.apply(void 0, args);
        }
        function src_util_noop() {}
        function stringifyError(err, level) {
            void 0 === level && (level = 1);
            if (level >= 3) return "stringifyError stack overflow";
            try {
                if (!err) return "<unknown error: " + {}.toString.call(err) + ">";
                if ("string" == typeof err) return err;
                if (err instanceof Error) {
                    var stack = err && err.stack;
                    var message = err && err.message;
                    if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
                    if (stack) return stack;
                    if (message) return message;
                }
                return err && err.toString && "function" == typeof err.toString ? err.toString() : {}.toString.call(err);
            } catch (newErr) {
                return "Error while stringifying error: " + stringifyError(newErr, level + 1);
            }
        }
        memoize((function(obj) {
            if (Object.values) return Object.values(obj);
            var result = [];
            for (var key in obj) obj.hasOwnProperty(key) && result.push(obj[key]);
            return result;
        }));
        function svgToBase64(svg) {
            return "data:image/svg+xml;base64," + base64encode(svg);
        }
        function objFilter(obj, filter) {
            void 0 === filter && (filter = Boolean);
            var result = {};
            for (var key in obj) obj.hasOwnProperty(key) && filter(obj[key], key) && (result[key] = obj[key]);
            return result;
        }
        function arrayFrom(item) {
            return [].slice.call(item);
        }
        var util_ExtendableError = function(_Error) {
            _inheritsLoose(ExtendableError, _Error);
            function ExtendableError(message) {
                var _this6;
                (_this6 = _Error.call(this, message) || this).name = _this6.constructor.name;
                "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(function(self) {
                    if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }(_this6), _this6.constructor) : _this6.stack = new Error(message).stack;
                return _this6;
            }
            return ExtendableError;
        }(wrapNativeSuper_wrapNativeSuper(Error));
        function isDocumentReady() {
            return Boolean(document.body) && "complete" === document.readyState;
        }
        function isDocumentInteractive() {
            return Boolean(document.body) && "interactive" === document.readyState;
        }
        var waitForDocumentReady = memoize((function() {
            return new promise_ZalgoPromise((function(resolve) {
                if (isDocumentReady() || isDocumentInteractive()) return resolve();
                var interval = setInterval((function() {
                    if (isDocumentReady() || isDocumentInteractive()) {
                        clearInterval(interval);
                        return resolve();
                    }
                }), 10);
            }));
        }));
        function getPerformance() {
            return inlineMemoize(getPerformance, (function() {
                var performance = window.performance;
                if (performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1e3 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0) return performance;
            }));
        }
        function dom_isBrowser() {
            return "undefined" != typeof window && void 0 !== window.location;
        }
        var dom_PopupOpenError = function(_ExtendableError) {
            _inheritsLoose(PopupOpenError, _ExtendableError);
            function PopupOpenError() {
                return _ExtendableError.apply(this, arguments) || this;
            }
            return PopupOpenError;
        }(util_ExtendableError);
        var currentScript = "undefined" != typeof document ? document.currentScript : null;
        var getCurrentScript = memoize((function() {
            if (currentScript) return currentScript;
            if (currentScript = function() {
                try {
                    var stack = function() {
                        try {
                            throw new Error("_");
                        } catch (err) {
                            return err.stack || "";
                        }
                    }();
                    var stackDetails = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(stack);
                    var scriptLocation = stackDetails && stackDetails[1];
                    if (!scriptLocation) return;
                    for (var _i22 = 0, _Array$prototype$slic2 = [].slice.call(document.getElementsByTagName("script")).reverse(); _i22 < _Array$prototype$slic2.length; _i22++) {
                        var script = _Array$prototype$slic2[_i22];
                        if (script.src && script.src === scriptLocation) return script;
                    }
                } catch (err) {}
            }()) return currentScript;
            throw new Error("Can not determine current script");
        }));
        var currentUID = uniqueID();
        memoize((function() {
            var script;
            try {
                script = getCurrentScript();
            } catch (err) {
                return currentUID;
            }
            var uid = script.getAttribute("data-uid");
            if (uid && "string" == typeof uid) return uid;
            if ((uid = script.getAttribute("data-uid-auto")) && "string" == typeof uid) return uid;
            if (script.src) {
                var hashedString = function(str) {
                    var hash = "";
                    for (var i = 0; i < str.length; i++) {
                        var total = str[i].charCodeAt(0) * i;
                        str[i + 1] && (total += str[i + 1].charCodeAt(0) * (i - 1));
                        hash += String.fromCharCode(97 + Math.abs(total) % 26);
                    }
                    return hash;
                }(JSON.stringify({
                    src: script.src,
                    dataset: script.dataset
                }));
                uid = "uid_" + hashedString.slice(hashedString.length - 30);
            } else uid = uniqueID();
            script.setAttribute("data-uid-auto", uid);
            return uid;
        }));
        var http_headerBuilders = [];
        function request(_ref) {
            var url = _ref.url, _ref$method = _ref.method, method = void 0 === _ref$method ? "get" : _ref$method, _ref$headers = _ref.headers, headers = void 0 === _ref$headers ? {} : _ref$headers, json = _ref.json, data = _ref.data, body = _ref.body, _ref$win = _ref.win, win = void 0 === _ref$win ? window : _ref$win, _ref$timeout = _ref.timeout, timeout = void 0 === _ref$timeout ? 0 : _ref$timeout;
            return new promise_ZalgoPromise((function(resolve, reject) {
                if (json && data || json && body || data && json) throw new Error("Only options.json or options.data or options.body should be passed");
                var normalizedHeaders = {};
                for (var _i4 = 0, _Object$keys2 = Object.keys(headers); _i4 < _Object$keys2.length; _i4++) {
                    var _key2 = _Object$keys2[_i4];
                    normalizedHeaders[_key2.toLowerCase()] = headers[_key2];
                }
                json ? normalizedHeaders["content-type"] = normalizedHeaders["content-type"] || "application/json" : (data || body) && (normalizedHeaders["content-type"] = normalizedHeaders["content-type"] || "application/x-www-form-urlencoded; charset=utf-8");
                normalizedHeaders.accept = normalizedHeaders.accept || "application/json";
                for (var _i6 = 0; _i6 < http_headerBuilders.length; _i6++) {
                    var builtHeaders = (0, http_headerBuilders[_i6])();
                    for (var _i8 = 0, _Object$keys4 = Object.keys(builtHeaders); _i8 < _Object$keys4.length; _i8++) {
                        var _key3 = _Object$keys4[_i8];
                        normalizedHeaders[_key3.toLowerCase()] = builtHeaders[_key3];
                    }
                }
                var xhr = new win.XMLHttpRequest;
                xhr.addEventListener("load", (function() {
                    var responseHeaders = function(rawHeaders) {
                        void 0 === rawHeaders && (rawHeaders = "");
                        var result = {};
                        for (var _i2 = 0, _rawHeaders$trim$spli2 = rawHeaders.trim().split("\n"); _i2 < _rawHeaders$trim$spli2.length; _i2++) {
                            var _line$split = _rawHeaders$trim$spli2[_i2].split(":"), _key = _line$split[0], values = _line$split.slice(1);
                            result[_key.toLowerCase()] = values.join(":").trim();
                        }
                        return result;
                    }(this.getAllResponseHeaders());
                    if (!this.status) return reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: no response status code."));
                    var contentType = responseHeaders["content-type"];
                    var isJSON = contentType && (0 === contentType.indexOf("application/json") || 0 === contentType.indexOf("text/json"));
                    var responseBody = this.responseText;
                    try {
                        responseBody = JSON.parse(responseBody);
                    } catch (err) {
                        if (isJSON) return reject(new Error("Invalid json: " + this.responseText + "."));
                    }
                    return resolve({
                        status: this.status,
                        headers: responseHeaders,
                        body: responseBody
                    });
                }), !1);
                xhr.addEventListener("error", (function(evt) {
                    reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: " + evt.toString() + "."));
                }), !1);
                xhr.open(method, url, !0);
                for (var _key4 in normalizedHeaders) normalizedHeaders.hasOwnProperty(_key4) && xhr.setRequestHeader(_key4, normalizedHeaders[_key4]);
                json ? body = JSON.stringify(json) : data && (body = Object.keys(data).map((function(key) {
                    return encodeURIComponent(key) + "=" + (data ? encodeURIComponent(data[key]) : "");
                })).join("&"));
                xhr.timeout = timeout;
                xhr.ontimeout = function() {
                    reject(new Error("Request to " + method.toLowerCase() + " " + url + " has timed out"));
                };
                xhr.send(body);
            }));
        }
        var AUTO_FLUSH_LEVEL = [ "warn", "error" ];
        var LOG_LEVEL_PRIORITY = [ "error", "warn", "info", "debug" ];
        var sendBeacon = function(_ref2) {
            var _ref2$win = _ref2.win, win = void 0 === _ref2$win ? window : _ref2$win, url = _ref2.url, data = _ref2.data, _ref2$useBlob = _ref2.useBlob, useBlob = void 0 === _ref2$useBlob || _ref2$useBlob;
            try {
                var json = JSON.stringify(data);
                if (!win.navigator.sendBeacon) throw new Error("No sendBeacon available");
                if (useBlob) {
                    var blob = new Blob([ json ], {
                        type: "application/json"
                    });
                    return win.navigator.sendBeacon(url, blob);
                }
                return win.navigator.sendBeacon(url, json);
            } catch (e) {
                return !1;
            }
        };
        var extendIfDefined = function(target, source) {
            for (var key in source) source.hasOwnProperty(key) && (target[key] = source[key]);
        };
        function getHTTPTransport(httpWin) {
            void 0 === httpWin && (httpWin = window);
            var win = isSameDomain(httpWin) ? assertSameDomain(httpWin) : window;
            return function(_ref) {
                var url = _ref.url, method = _ref.method, headers = _ref.headers, json = _ref.json, _ref$enableSendBeacon = _ref.enableSendBeacon, enableSendBeacon = void 0 !== _ref$enableSendBeacon && _ref$enableSendBeacon;
                return promise_ZalgoPromise.try((function() {
                    var beaconResult = !1;
                    (function(_ref) {
                        var headers = _ref.headers, enableSendBeacon = _ref.enableSendBeacon;
                        var hasHeaders = headers && Object.keys(headers).length;
                        return !!(window && window.navigator.sendBeacon && !hasHeaders && enableSendBeacon && window.Blob);
                    })({
                        headers: headers,
                        enableSendBeacon: enableSendBeacon
                    }) && (beaconResult = function(url) {
                        return "https://api2.amplitude.com/2/httpapi" === url;
                    }(url) ? sendBeacon({
                        win: win,
                        url: url,
                        data: json,
                        useBlob: !1
                    }) : sendBeacon({
                        win: win,
                        url: url,
                        data: json,
                        useBlob: !0
                    }));
                    return beaconResult || request({
                        win: win,
                        url: url,
                        method: method,
                        headers: headers,
                        json: json
                    });
                })).then(src_util_noop);
            };
        }
        var _FUNDING_SKIP_LOGIN, _AMPLITUDE_API_KEY;
        (_FUNDING_SKIP_LOGIN = {}).paypal = "paypal", _FUNDING_SKIP_LOGIN.paylater = "paypal", 
        _FUNDING_SKIP_LOGIN.credit = "paypal";
        var AMPLITUDE_API_KEY = ((_AMPLITUDE_API_KEY = {}).test = "a23fb4dfae56daf7c3212303b53a8527", 
        _AMPLITUDE_API_KEY.local = "a23fb4dfae56daf7c3212303b53a8527", _AMPLITUDE_API_KEY.stage = "a23fb4dfae56daf7c3212303b53a8527", 
        _AMPLITUDE_API_KEY.sandbox = "a23fb4dfae56daf7c3212303b53a8527", _AMPLITUDE_API_KEY.production = "ce423f79daba95faeb0694186170605c", 
        _AMPLITUDE_API_KEY);
        function getLogger() {
            return inlineMemoize(getLogger, (function() {
                return function(_ref) {
                    var url = _ref.url, prefix = _ref.prefix, _ref$logLevel = _ref.logLevel, logLevel = void 0 === _ref$logLevel ? "warn" : _ref$logLevel, _ref$transport = _ref.transport, transport = void 0 === _ref$transport ? getHTTPTransport() : _ref$transport, amplitudeApiKey = _ref.amplitudeApiKey, _ref$flushInterval = _ref.flushInterval, flushInterval = void 0 === _ref$flushInterval ? 6e4 : _ref$flushInterval, _ref$enableSendBeacon = _ref.enableSendBeacon, enableSendBeacon = void 0 !== _ref$enableSendBeacon && _ref$enableSendBeacon;
                    var events = [];
                    var tracking = [];
                    var payloadBuilders = [];
                    var metaBuilders = [];
                    var trackingBuilders = [];
                    var headerBuilders = [];
                    function print(level, event, payload) {
                        if (dom_isBrowser() && window.console && window.console.log && !(LOG_LEVEL_PRIORITY.indexOf(level) > LOG_LEVEL_PRIORITY.indexOf(logLevel))) {
                            var args = [ event ];
                            args.push(payload);
                            (payload.error || payload.warning) && args.push("\n\n", payload.error || payload.warning);
                            try {
                                window.console[level] && window.console[level].apply ? window.console[level].apply(window.console, args) : window.console.log && window.console.log.apply && window.console.log.apply(window.console, args);
                            } catch (err) {}
                        }
                    }
                    function immediateFlush() {
                        return promise_ZalgoPromise.try((function() {
                            if (dom_isBrowser() && "file:" !== window.location.protocol && (events.length || tracking.length)) {
                                var meta = {};
                                for (var _i2 = 0; _i2 < metaBuilders.length; _i2++) extendIfDefined(meta, (0, metaBuilders[_i2])(meta));
                                var headers = {};
                                for (var _i4 = 0; _i4 < headerBuilders.length; _i4++) extendIfDefined(headers, (0, 
                                headerBuilders[_i4])(headers));
                                var res;
                                url && (res = transport({
                                    method: "POST",
                                    url: url,
                                    headers: headers,
                                    json: {
                                        events: events,
                                        meta: meta,
                                        tracking: tracking
                                    },
                                    enableSendBeacon: enableSendBeacon
                                }).catch(src_util_noop));
                                amplitudeApiKey && transport({
                                    method: "POST",
                                    url: "https://api2.amplitude.com/2/httpapi",
                                    headers: {},
                                    json: {
                                        api_key: amplitudeApiKey,
                                        events: tracking.map((function(payload) {
                                            return _extends({
                                                event_type: payload.transition_name || "event",
                                                event_properties: payload
                                            }, payload);
                                        }))
                                    },
                                    enableSendBeacon: enableSendBeacon
                                }).catch(src_util_noop);
                                events = [];
                                tracking = [];
                                return promise_ZalgoPromise.resolve(res).then(src_util_noop);
                            }
                        }));
                    }
                    var flush = function(method, delay) {
                        void 0 === delay && (delay = 50);
                        var promise;
                        var timeout;
                        return setFunctionName((function() {
                            timeout && clearTimeout(timeout);
                            var localPromise = promise = promise || new promise_ZalgoPromise;
                            timeout = setTimeout((function() {
                                promise = null;
                                timeout = null;
                                promise_ZalgoPromise.try(method).then((function(result) {
                                    localPromise.resolve(result);
                                }), (function(err) {
                                    localPromise.reject(err);
                                }));
                            }), delay);
                            return localPromise;
                        }), getFunctionName(method) + "::promiseDebounced");
                    }(immediateFlush);
                    function log(level, event, payload) {
                        void 0 === payload && (payload = {});
                        if (!dom_isBrowser()) return logger;
                        prefix && (event = prefix + "_" + event);
                        var logPayload = _extends({}, objFilter(payload), {
                            timestamp: Date.now().toString()
                        });
                        for (var _i6 = 0; _i6 < payloadBuilders.length; _i6++) extendIfDefined(logPayload, (0, 
                        payloadBuilders[_i6])(logPayload));
                        !function(level, event, payload) {
                            events.push({
                                level: level,
                                event: event,
                                payload: payload
                            });
                            -1 !== AUTO_FLUSH_LEVEL.indexOf(level) && flush();
                        }(level, event, logPayload);
                        print(level, event, logPayload);
                        return logger;
                    }
                    function addBuilder(builders, builder) {
                        builders.push(builder);
                        return logger;
                    }
                    dom_isBrowser() && (method = flush, time = flushInterval, function loop() {
                        setTimeout((function() {
                            method();
                            loop();
                        }), time);
                    }());
                    var method, time;
                    if ("object" == typeof window) {
                        window.addEventListener("beforeunload", (function() {
                            immediateFlush();
                        }));
                        window.addEventListener("unload", (function() {
                            immediateFlush();
                        }));
                        window.addEventListener("pagehide", (function() {
                            immediateFlush();
                        }));
                    }
                    var logger = {
                        debug: function(event, payload) {
                            return log("debug", event, payload);
                        },
                        info: function(event, payload) {
                            return log("info", event, payload);
                        },
                        warn: function(event, payload) {
                            return log("warn", event, payload);
                        },
                        error: function(event, payload) {
                            return log("error", event, payload);
                        },
                        track: function(payload) {
                            void 0 === payload && (payload = {});
                            if (!dom_isBrowser()) return logger;
                            var trackingPayload = objFilter(payload);
                            for (var _i8 = 0; _i8 < trackingBuilders.length; _i8++) extendIfDefined(trackingPayload, (0, 
                            trackingBuilders[_i8])(trackingPayload));
                            print("debug", "track", trackingPayload);
                            tracking.push(trackingPayload);
                            return logger;
                        },
                        flush: flush,
                        immediateFlush: immediateFlush,
                        addPayloadBuilder: function(builder) {
                            return addBuilder(payloadBuilders, builder);
                        },
                        addMetaBuilder: function(builder) {
                            return addBuilder(metaBuilders, builder);
                        },
                        addTrackingBuilder: function(builder) {
                            return addBuilder(trackingBuilders, builder);
                        },
                        addHeaderBuilder: function(builder) {
                            return addBuilder(headerBuilders, builder);
                        },
                        setTransport: function(newTransport) {
                            transport = newTransport;
                            return logger;
                        },
                        configure: function(opts) {
                            opts.url && (url = opts.url);
                            opts.prefix && (prefix = opts.prefix);
                            opts.logLevel && (logLevel = opts.logLevel);
                            opts.transport && (transport = opts.transport);
                            opts.amplitudeApiKey && (amplitudeApiKey = opts.amplitudeApiKey);
                            opts.flushInterval && (flushInterval = opts.flushInterval);
                            opts.enableSendBeacon && (enableSendBeacon = opts.enableSendBeacon);
                            return logger;
                        }
                    };
                    return logger;
                }({
                    url: "/xoplatform/logger/api/logger",
                    enableSendBeacon: !0
                });
            }));
        }
        function util_getBody() {
            var body = document.body;
            if (!body) throw new Error("Document body not found");
            return body;
        }
        function loadScript(url) {
            return new promise_ZalgoPromise((function(resolve, reject) {
                var container = document.body || document.head;
                if (!container) return reject(new Error("Can not find container for script: " + url));
                var script = document.createElement("script");
                script.setAttribute("src", url);
                script.addEventListener("load", (function() {
                    return resolve(script);
                }));
                script.addEventListener("error", (function(err) {
                    return reject(err);
                }));
                container.appendChild(script);
            }));
        }
        function getNonce() {
            var nonce = "";
            document.body && (nonce = document.body.getAttribute("data-nonce") || "");
            return nonce;
        }
        function _renderChildren(children, renderer) {
            var result = [];
            for (var _i2 = 0; _i2 < children.length; _i2++) {
                var renderedChild = children[_i2].render(renderer);
                if (renderedChild) if (Array.isArray(renderedChild)) for (var _i4 = 0; _i4 < renderedChild.length; _i4++) {
                    var subchild = renderedChild[_i4];
                    subchild && result.push(subchild);
                } else result.push(renderedChild);
            }
            return result;
        }
        var node_ElementNode = function() {
            function ElementNode(name, props, children) {
                this.type = "element";
                this.name = void 0;
                this.props = void 0;
                this.children = void 0;
                this.onRender = void 0;
                this.name = name;
                this.props = props || {};
                this.children = children;
                var onRender = this.props.onRender;
                if ("function" == typeof onRender) {
                    this.onRender = onRender;
                    delete props.onRender;
                }
            }
            var _proto = ElementNode.prototype;
            _proto.render = function(renderer) {
                var el = renderer(this);
                this.onRender && this.onRender(el);
                return el;
            };
            _proto.renderChildren = function(renderer) {
                return _renderChildren(this.children, renderer);
            };
            return ElementNode;
        }();
        var node_FragmentNode = function() {
            function FragmentNode(children) {
                this.type = "fragment";
                this.children = void 0;
                this.children = children;
            }
            FragmentNode.prototype.render = function(renderer) {
                return _renderChildren(this.children, renderer);
            };
            return FragmentNode;
        }();
        var node_TextNode = function() {
            function TextNode(text) {
                this.type = "text";
                this.text = void 0;
                this.text = text;
            }
            TextNode.prototype.render = function(renderer) {
                return renderer(this);
            };
            return TextNode;
        }();
        var node_ComponentNode = function() {
            function ComponentNode(component, props, children) {
                this.type = "component";
                this.component = void 0;
                this.props = void 0;
                this.children = void 0;
                this.component = component;
                this.props = props || {};
                this.children = children;
                this.props.children = children;
            }
            var _proto4 = ComponentNode.prototype;
            _proto4.renderComponent = function(renderer) {
                var child = function(child) {
                    var children = normalizeChildren(Array.isArray(child) ? child : [ child ]);
                    return 1 === children.length ? children[0] : children.length > 1 ? new node_FragmentNode(children) : void 0;
                }(this.component(this.props, this.children));
                if (child) return child.render(renderer);
            };
            _proto4.render = function(renderer) {
                return renderer(this);
            };
            _proto4.renderChildren = function(renderer) {
                return _renderChildren(this.children, renderer);
            };
            return ComponentNode;
        }();
        function normalizeChildren(children) {
            var result = [];
            for (var _i6 = 0; _i6 < children.length; _i6++) {
                var child = children[_i6];
                if (child) if ("string" == typeof child || "number" == typeof child) result.push(new node_TextNode(child.toString())); else {
                    if ("boolean" == typeof child) continue;
                    if (Array.isArray(child)) for (var _i8 = 0, _normalizeChildren2 = normalizeChildren(child); _i8 < _normalizeChildren2.length; _i8++) result.push(_normalizeChildren2[_i8]); else {
                        if (!child || "element" !== child.type && "text" !== child.type && "component" !== child.type) throw new TypeError("Unrecognized node type: " + typeof child);
                        result.push(child);
                    }
                }
            }
            return result;
        }
        var node_node = function(element, props) {
            for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) children[_key - 2] = arguments[_key];
            children = normalizeChildren(children);
            if ("string" == typeof element) return new node_ElementNode(element, props, children);
            if ("function" == typeof element) return new node_ComponentNode(element, props, children);
            throw new TypeError("Expected jsx element to be a string or a function");
        };
        var _ELEMENT_DEFAULT_XML_, _ATTRIBUTE_DEFAULT_XM, _ADD_CHILDREN;
        var ELEMENT_DEFAULT_XML_NAMESPACE = ((_ELEMENT_DEFAULT_XML_ = {}).svg = "http://www.w3.org/2000/svg", 
        _ELEMENT_DEFAULT_XML_);
        var ATTRIBUTE_DEFAULT_XML_NAMESPACE = ((_ATTRIBUTE_DEFAULT_XM = {})["xlink:href"] = "http://www.w3.org/1999/xlink", 
        _ATTRIBUTE_DEFAULT_XM);
        function createTextElement(doc, node) {
            return doc.createTextNode(node.text);
        }
        function addProps(el, node) {
            var props = node.props;
            for (var _i4 = 0, _Object$keys2 = Object.keys(props); _i4 < _Object$keys2.length; _i4++) {
                var prop = _Object$keys2[_i4];
                var val = props[prop];
                if (null != val && "el" !== prop && "innerHTML" !== prop) if (prop.match(/^on[A-Z][a-z]/) && "function" == typeof val) el.addEventListener(prop.slice(2).toLowerCase(), val); else if ("string" == typeof val || "number" == typeof val) {
                    var xmlNamespace = ATTRIBUTE_DEFAULT_XML_NAMESPACE[prop];
                    xmlNamespace ? el.setAttributeNS(xmlNamespace, prop, val.toString()) : el.setAttribute(prop, val.toString());
                } else "boolean" == typeof val && !0 === val && el.setAttribute(prop, "");
            }
            "iframe" !== el.tagName.toLowerCase() || props.id || el.setAttribute("id", "jsx-iframe-" + "xxxxxxxxxx".replace(/./g, (function() {
                return "0123456789abcdef".charAt(Math.floor(Math.random() * "0123456789abcdef".length));
            })));
        }
        var ADD_CHILDREN = ((_ADD_CHILDREN = {}).iframe = function(el, node) {
            var firstChild = node.children[0];
            if (1 !== node.children.length || !firstChild || "element" !== firstChild.type || "html" !== firstChild.name) throw new Error("Expected only single html element node as child of iframe element");
            el.addEventListener("load", (function() {
                var win = el.contentWindow;
                if (!win) throw new Error("Expected frame to have contentWindow");
                var doc = win.document;
                var docElement = doc.documentElement;
                for (;docElement.children && docElement.children.length; ) docElement.removeChild(docElement.children[0]);
                var child = firstChild.render(dom({
                    doc: doc
                }));
                for (;child.children.length; ) docElement.appendChild(child.children[0]);
            }));
        }, _ADD_CHILDREN.script = function(el, node) {
            var firstChild = node.children[0];
            if (1 !== node.children.length || !firstChild || "text" !== firstChild.type) throw new Error("Expected only single text node as child of script element");
            el.text = firstChild.text;
        }, _ADD_CHILDREN.default = function(el, node, renderer) {
            for (var _i6 = 0, _node$renderChildren2 = node.renderChildren(renderer); _i6 < _node$renderChildren2.length; _i6++) el.appendChild(_node$renderChildren2[_i6]);
        }, _ADD_CHILDREN);
        function addChildren(el, node, doc, renderer) {
            if (node.props.hasOwnProperty("innerHTML")) {
                if (node.children.length) throw new Error("Expected no children to be passed when innerHTML prop is set");
                var html = node.props.innerHTML;
                if ("string" != typeof html) throw new TypeError("innerHTML prop must be string");
                if ("script" === node.name) el.text = html; else {
                    el.innerHTML = html;
                    !function(el, doc) {
                        void 0 === doc && (doc = window.document);
                        for (var _i2 = 0, _el$querySelectorAll2 = el.querySelectorAll("script"); _i2 < _el$querySelectorAll2.length; _i2++) {
                            var script = _el$querySelectorAll2[_i2];
                            var parentNode = script.parentNode;
                            if (parentNode) {
                                var newScript = doc.createElement("script");
                                newScript.text = script.textContent;
                                parentNode.replaceChild(newScript, script);
                            }
                        }
                    }(el, doc);
                }
            } else (ADD_CHILDREN[node.name] || ADD_CHILDREN.default)(el, node, renderer);
        }
        function dom(opts) {
            void 0 === opts && (opts = {});
            var _opts$doc = opts.doc, doc = void 0 === _opts$doc ? document : _opts$doc;
            return function domRenderer(node) {
                if ("component" === node.type) return node.renderComponent(domRenderer);
                if ("text" === node.type) return createTextElement(doc, node);
                if ("element" === node.type) {
                    var xmlNamespace = ELEMENT_DEFAULT_XML_NAMESPACE[node.name.toLowerCase()];
                    if (xmlNamespace) return function xmlNamespaceDomRenderer(node, xmlNamespace) {
                        if ("component" === node.type) return node.renderComponent((function(childNode) {
                            return xmlNamespaceDomRenderer(childNode, xmlNamespace);
                        }));
                        if ("text" === node.type) return createTextElement(doc, node);
                        if ("element" === node.type) {
                            var el = function(doc, node, xmlNamespace) {
                                return doc.createElementNS(xmlNamespace, node.name);
                            }(doc, node, xmlNamespace);
                            addProps(el, node);
                            addChildren(el, node, doc, (function(childNode) {
                                return xmlNamespaceDomRenderer(childNode, xmlNamespace);
                            }));
                            return el;
                        }
                        throw new TypeError("Unhandleable node");
                    }(node, xmlNamespace);
                    var el = function(doc, node) {
                        return node.props.el ? node.props.el : doc.createElement(node.name);
                    }(doc, node);
                    addProps(el, node);
                    addChildren(el, node, doc, domRenderer);
                    return el;
                }
                throw new TypeError("Unhandleable node");
            };
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var target = {};
            var sourceKeys = Object.keys(source);
            var key, i;
            for (i = 0; i < sourceKeys.length; i++) excluded.indexOf(key = sourceKeys[i]) >= 0 || (target[key] = source[key]);
            return target;
        }
        var SELF_CLOSING_TAGS = {
            br: !0
        };
        function html_htmlEncode(text) {
            return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;");
        }
        function Spinner(_ref) {
            return node_node("div", {
                class: "preloader spinner"
            }, node_node("style", {
                nonce: _ref.nonce,
                innerHTML: "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n"
            }), node_node("div", {
                class: "spinWrap"
            }, node_node("p", {
                class: "spinnerImage"
            }), node_node("p", {
                class: "loader"
            })));
        }
        function SpinnerPage(_ref2, children) {
            var nonce = _ref2.nonce;
            return node_node("html", null, node_node("head", null, node_node("title", null, "PayPal"), node_node("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            })), node_node("body", null, node_node(Spinner, {
                nonce: nonce
            }), children));
        }
        function callGraphQL(_ref5) {
            var name = _ref5.name, _ref5$variables = _ref5.variables, _ref5$headers = _ref5.headers, _ref5$returnErrorObje = _ref5.returnErrorObject, returnErrorObject = void 0 !== _ref5$returnErrorObje && _ref5$returnErrorObje;
            return request({
                url: "/graphql?" + name,
                method: "POST",
                json: {
                    query: _ref5.query,
                    variables: void 0 === _ref5$variables ? {} : _ref5$variables
                },
                headers: _extends({
                    "x-app-name": "smart-payment-buttons"
                }, void 0 === _ref5$headers ? {} : _ref5$headers)
            }).then((function(_ref6) {
                var status = _ref6.status, body = _ref6.body;
                var errors = body.errors || [];
                if (errors.length) {
                    var message = errors[0].message || JSON.stringify(errors[0]);
                    getLogger().warn("graphql_" + name + "_error", {
                        err: message
                    });
                    if (returnErrorObject) throw errors[0];
                    throw new Error(message);
                }
                if (200 !== status) {
                    getLogger().warn("graphql_" + name + "_status_" + status + "_error");
                    throw new Error("/graphql returned status " + status + "\n\n" + JSON.stringify(body));
                }
                return body.data;
            }));
        }
        memoize((function(orderID) {
            var _headers21;
            return callGraphQL({
                name: "GetCheckoutDetails",
                query: "\n        query GetCheckoutDetails($orderID: String!) {\n            checkoutSession(token: $orderID) {\n                cart {\n                    billingType\n                    intent\n                    paymentId\n                    billingToken\n                    amounts {\n                        total {\n                            currencyValue\n                            currencyCode\n                            currencyFormatSymbolISOCurrency\n                        }\n                    }\n                    supplementary {\n                        initiationIntent\n                    }\n                    category\n                }\n                flags {\n                    isChangeShippingAddressAllowed\n                }\n                payees {\n                    merchantId\n                    email {\n                        stringValue\n                    }\n                }\n            }\n        }\n        ",
                variables: {
                    orderID: orderID
                },
                headers: (_headers21 = {}, _headers21["paypal-client-context"] = orderID, _headers21)
            });
        }));
        memoize((function(config) {
            return promise_ZalgoPromise.try((function() {
                if (!window.firebase || !window.firebase.auth || !window.firebase.database) return loadScript("https://www.paypalobjects.com/checkout/js/lib/firebase-app.js").then((function() {
                    return promise_ZalgoPromise.all([ loadScript("https://www.paypalobjects.com/checkout/js/lib/firebase-auth.js"), loadScript("https://www.paypalobjects.com/checkout/js/lib/firebase-database.js") ]);
                }));
            })).then((function() {
                var firebase = window.firebase;
                if (!firebase) throw new Error("Firebase failed to load");
                firebase.initializeApp(config);
                return firebase;
            }));
        }));
        var _FRAUDNET_URL;
        var FRAUDNET_URL = ((_FRAUDNET_URL = {}).local = "https://www.stage2d0107.stage.paypal.com/FDRegression/fb.js", 
        _FRAUDNET_URL.stage = "https://www.stage2d0107.stage.paypal.com/FDRegression/fb.js", 
        _FRAUDNET_URL.sandbox = "https://c.paypal.com/da/r/fb.js", _FRAUDNET_URL.production = "https://c.paypal.com/da/r/fb.js", 
        _FRAUDNET_URL.test = "https://c.paypal.com/da/r/fb.js", _FRAUDNET_URL);
        memoize((function(_ref) {
            var env = _ref.env, clientMetadataID = _ref.clientMetadataID, cspNonce = _ref.cspNonce, _ref$timeout = _ref.timeout, timeout = void 0 === _ref$timeout ? 1e3 : _ref$timeout;
            return new promise_ZalgoPromise((function(resolve) {
                var config = {
                    f: clientMetadataID,
                    s: "SMART_PAYMENT_BUTTONS",
                    u: window.xprops.buttonLocation,
                    cb1: "fnCallback"
                };
                "sandbox" === env && (config.sandbox = !0);
                var configScript = document.createElement("script");
                configScript.setAttribute("nonce", cspNonce || "");
                configScript.setAttribute("type", "application/json");
                configScript.setAttribute("id", "fconfig");
                configScript.setAttribute("fncls", "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99");
                configScript.textContent = JSON.stringify(config);
                var fraudnetScript = document.createElement("script");
                fraudnetScript.setAttribute("nonce", cspNonce || "");
                fraudnetScript.setAttribute("src", FRAUDNET_URL[env]);
                fraudnetScript.addEventListener("error", (function() {
                    return resolve();
                }));
                window.fnCallback = resolve;
                setTimeout(resolve, timeout);
                var body = util_getBody();
                body.appendChild(configScript);
                body.appendChild(fraudnetScript);
            }));
        }));
        memoize((function(_ref) {
            var _headers;
            var _ref$amount = _ref.amount, _ref$vetted = _ref.vetted, _ref$allowBillingPaym = _ref.allowBillingPayments;
            return callGraphQL({
                name: "GetSmartWallet",
                query: "\n            query GetSmartWallet(\n                $clientID: String!\n                $merchantID: [String!]\n                $currency: String\n                $amount: String\n                $userIDToken: String\n                $vetted: Boolean\n                $paymentMethodToken: String\n                $branded: Boolean,\n                $allowBillingPayments: Boolean\n            ) {\n                smartWallet(\n                    clientId: $clientID\n                    merchantId: $merchantID\n                    currency: $currency\n                    amount: $amount\n                    userIdToken: $userIDToken\n                    vetted: $vetted\n                    paymentMethodNonce: $paymentMethodToken\n                    branded: $branded,\n                    allowBillingPayments: $allowBillingPayments\n                ) {\n                    paypal {\n                        instruments {\n                            type\n                            label\n                            logoUrl\n                            instrumentID\n                            tokenID\n                            vendor\n                            oneClick\n                            accessToken\n                        }\n                    }\n                    credit {\n                        instruments {\n                            type\n                            label\n                            logoUrl\n                            instrumentID\n                            tokenID\n                            vendor\n                            oneClick\n                            accessToken\n                        }\n                    }\n                    card {\n                        instruments {\n                            type\n                            label\n                            logoUrl\n                            instrumentID\n                            tokenID\n                            vendor\n                            oneClick\n                        }\n                    }\n                    venmo {\n                        instruments {\n                            type\n                            label\n                            logoUrl\n                            instrumentID\n                            tokenID\n                            oneClick\n                        }\n                    }\n                }\n            }\n        ",
                variables: {
                    clientID: _ref.clientID,
                    merchantID: _ref.merchantID,
                    currency: _ref.currency,
                    amount: void 0 === _ref$amount ? "0.00" : _ref$amount,
                    userIDToken: _ref.userIDToken,
                    vetted: void 0 === _ref$vetted || _ref$vetted,
                    paymentMethodToken: _ref.paymentMethodToken,
                    branded: _ref.branded,
                    allowBillingPayments: void 0 === _ref$allowBillingPaym || _ref$allowBillingPaym
                },
                headers: (_headers = {}, _headers["paypal-client-metadata-id"] = _ref.clientMetadataID, 
                _headers)
            }).then((function(_ref2) {
                return _ref2.smartWallet;
            }));
        }));
        var jsx_pragmatic = __webpack_require__(0);
        var components_excluded = [ "svg" ], _excluded2 = [ "render", "name", "logoColor" ];
        function SVG(props) {
            var svg = props.svg, otherProps = _objectWithoutPropertiesLoose(props, components_excluded);
            if (!svg) throw new TypeError("Expected svg prop");
            if ("string" != typeof (svg = svg.render((function htmlRenderer(node) {
                if ("component" === node.type) return [].concat(node.renderComponent(htmlRenderer)).join("");
                if ("element" === node.type) {
                    var renderedProps = (props = node.props, (keys = Object.keys(props).filter((function(key) {
                        var val = props[key];
                        return "innerHTML" !== key && ("string" == typeof val || "number" == typeof val || !0 === val);
                    }))).length ? " " + keys.map((function(key) {
                        var val = props[key];
                        if (!0 === val) return "" + html_htmlEncode(key);
                        if ("string" != typeof val && "number" != typeof val) throw new TypeError("Unexpected prop type: " + typeof val);
                        return "" === val ? html_htmlEncode(key) : html_htmlEncode(key) + '="' + html_htmlEncode(val.toString()) + '"';
                    })).join(" ") : "");
                    if (SELF_CLOSING_TAGS[node.name]) return "<" + node.name + renderedProps + " />";
                    var renderedChildren = "string" == typeof node.props.innerHTML ? node.props.innerHTML : node.renderChildren(htmlRenderer).join("");
                    return "<" + node.name + renderedProps + ">" + renderedChildren + "</" + node.name + ">";
                }
                var props, keys;
                if ("text" === node.type) return html_htmlEncode(node.text);
                throw new TypeError("Unhandleable node: " + node.type);
            })))) throw new TypeError("Expected svg prop to be a string or jsx node");
            var svgProps = _extends({
                src: svgToBase64(svg)
            }, otherProps);
            return node_node("img", svgProps);
        }
        function SVGLogo(_ref) {
            var render = _ref.render, name = _ref.name, logoColor = _ref.logoColor, props = _objectWithoutPropertiesLoose(_ref, _excluded2);
            return node_node(SVG, _extends({}, props, {
                svg: render(),
                alt: "",
                class: "paypal-logo paypal-logo-" + name + " " + (logoColor ? "paypal-logo-color-" + logoColor : "")
            }));
        }
        var _LOGO_COLORS;
        (_LOGO_COLORS = {}).default = {
            primary: "#ffffff",
            secondary: "#ffffff"
        }, _LOGO_COLORS.white = {
            primary: "#ffffff",
            secondary: "#ffffff"
        }, _LOGO_COLORS.black = {
            primary: "#000000",
            secondary: "#000000"
        };
        var logo_LOGO_COLORS;
        (logo_LOGO_COLORS = {}).default = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
            tertiary: "#FFFFFF",
            quaternary: "#FFFFFF"
        }, logo_LOGO_COLORS.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
            tertiary: "#FFFFFF",
            quaternary: "#FFFFFF"
        }, logo_LOGO_COLORS.black = {
            primary: "#1E3764",
            secondary: "#005AB9",
            tertiary: "#FBA900",
            quaternary: "#FFD800"
        };
        var glyph_logo_LOGO_COLORS;
        (glyph_logo_LOGO_COLORS = {}).default = {
            primary: "#333030"
        }, glyph_logo_LOGO_COLORS.white = {
            primary: "#ffffff"
        }, glyph_logo_LOGO_COLORS.black = {
            primary: "#333030"
        };
        var card_glyph_logo_LOGO_COLORS;
        (card_glyph_logo_LOGO_COLORS = {}).default = {
            primary: "#333030"
        }, card_glyph_logo_LOGO_COLORS.white = {
            primary: "#ffffff"
        }, card_glyph_logo_LOGO_COLORS.black = {
            primary: "#333030"
        };
        var credit_logo_LOGO_COLORS;
        (credit_logo_LOGO_COLORS = {}).default = {
            primary: "#003087"
        }, credit_logo_LOGO_COLORS.blue = {
            primary: "#003087"
        }, credit_logo_LOGO_COLORS.white = {
            primary: "#ffffff"
        }, credit_logo_LOGO_COLORS.black = {
            primary: "#333030"
        };
        var eps_logo_LOGO_COLORS;
        (eps_logo_LOGO_COLORS = {}).default = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, eps_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, eps_logo_LOGO_COLORS.black = {
            primary: "#C8036F",
            secondary: "#71706F"
        };
        var giropay_logo_LOGO_COLORS;
        (giropay_logo_LOGO_COLORS = {}).default = {
            primary: "#FFFFFF",
            secondary: "#003A7D",
            tertiary: "#ED1C24",
            quaternary: "#FFFFFF",
            quinary: "#FFFFFF"
        }, giropay_logo_LOGO_COLORS.white = {
            primary: "#000000",
            secondary: "#FFFFFF",
            tertiary: "#FFFFFF",
            quaternary: "#000000",
            quinary: "#FFFFFF"
        }, giropay_logo_LOGO_COLORS.black = {
            primary: "#FFFFFF",
            secondary: "#003A7D",
            tertiary: "#ED1C24",
            quaternary: "#FFFFFF",
            quinary: "#003A7D"
        };
        var ideal_logo_LOGO_COLORS;
        (ideal_logo_LOGO_COLORS = {}).default = {
            primary: "#FFFFFF",
            secondary: "#CC0066"
        }, ideal_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF",
            secondary: "#CC0066"
        }, ideal_logo_LOGO_COLORS.black = {
            primary: "#FFFFFF",
            secondary: "#CC0066"
        };
        var mybank_logo_LOGO_COLORS;
        (mybank_logo_LOGO_COLORS = {}).default = {
            primary: "#00C0EE",
            secondary: "#FFFFFF"
        }, mybank_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, mybank_logo_LOGO_COLORS.black = {
            primary: "#00C0EE",
            secondary: "#1A4B67"
        };
        var p24_logo_LOGO_COLORS;
        (p24_logo_LOGO_COLORS = {}).default = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, p24_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, p24_logo_LOGO_COLORS.black = {
            primary: "#B3B1B1",
            secondary: "#D03238"
        };
        var _PAYPAL_LOGO_COLORS, _PP_LOGO_COLORS;
        (_PAYPAL_LOGO_COLORS = {}).default = {
            primary: "#003087",
            secondary: "#009cde"
        }, _PAYPAL_LOGO_COLORS.blue = {
            primary: "#003087",
            secondary: "#009cde"
        }, _PAYPAL_LOGO_COLORS.white = {
            primary: "#ffffff",
            secondary: "#ffffff"
        }, _PAYPAL_LOGO_COLORS.black = {
            primary: "#333030",
            secondary: "#636363"
        }, _PAYPAL_LOGO_COLORS.monochrome = {
            primary: "#000000",
            secondary: "#000000"
        };
        (_PP_LOGO_COLORS = {}).default = {
            primary: "#009cde",
            secondary: "#012169",
            tertiary: "#003087"
        }, _PP_LOGO_COLORS.blue = {
            primary: "#009cde",
            secondary: "#012169",
            tertiary: "#003087"
        }, _PP_LOGO_COLORS.white = {
            primary: "#ffffff",
            primaryOpacity: "0.7",
            secondary: "#ffffff",
            secondaryOpacity: "0.7",
            tertiary: "#ffffff"
        }, _PP_LOGO_COLORS.black = {
            primary: "#808080",
            secondary: "#000000",
            tertiary: "#1a1a1a"
        };
        var sepa_logo_LOGO_COLORS;
        (sepa_logo_LOGO_COLORS = {}).default = {
            main: "#005DA0",
            card: "#AEB1BC"
        }, sepa_logo_LOGO_COLORS.white = {
            main: "#FFFFFF",
            card: "#FFFFFF"
        }, sepa_logo_LOGO_COLORS.black = {
            main: "#333030",
            card: "#333030"
        };
        var sofort_logo_LOGO_COLORS;
        (sofort_logo_LOGO_COLORS = {}).default = {
            primary: "#EDEDED",
            secondary: "#393A41"
        }, sofort_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF",
            secondary: "#000000"
        }, sofort_logo_LOGO_COLORS.black = {
            primary: "#393A41",
            secondary: "#EDEDED"
        };
        var venmo_logo_excluded = [ "logoColor" ];
        var venmo_logo_LOGO_COLORS;
        var logos_venmo_logo_LOGO_COLORS = ((venmo_logo_LOGO_COLORS = {}).default = {
            primary: "#3D93CE"
        }, venmo_logo_LOGO_COLORS.blue = {
            primary: "#3D93CE"
        }, venmo_logo_LOGO_COLORS.white = {
            primary: "#ffffff"
        }, venmo_logo_LOGO_COLORS.black = {
            primary: "#333030"
        }, venmo_logo_LOGO_COLORS);
        var itau_logo_LOGO_COLORS;
        (itau_logo_LOGO_COLORS = {}).default = {
            primary: "#ffffff"
        }, itau_logo_LOGO_COLORS.blue = {
            primary: "#003087"
        }, itau_logo_LOGO_COLORS.white = {
            primary: "#ffffff"
        }, itau_logo_LOGO_COLORS.black = {
            primary: "#333030"
        };
        var wechatpay_logo_LOGO_COLORS;
        (wechatpay_logo_LOGO_COLORS = {}).default = {
            primary: "#1AAD19",
            secondary: "#FFFFFF"
        }, wechatpay_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, wechatpay_logo_LOGO_COLORS.black = {
            primary: "#1AAD19",
            secondary: "#4D4D4D"
        };
        var zimpler_logo_LOGO_COLORS;
        (zimpler_logo_LOGO_COLORS = {}).default = {
            primary: "#00A599"
        }, zimpler_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF"
        }, zimpler_logo_LOGO_COLORS.black = {
            primary: "#00A599"
        };
        var payu_logo_LOGO_COLORS;
        (payu_logo_LOGO_COLORS = {}).default = {
            primary: "#A6C307"
        }, payu_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF"
        }, payu_logo_LOGO_COLORS.black = {
            primary: "#2C2E2F"
        };
        var verkkopankki_logo_LOGO_COLORS;
        (verkkopankki_logo_LOGO_COLORS = {}).default = {
            primary: "#2D59A1",
            secondary: "#1F3364",
            tertiary: "#FFFFFF",
            quaternary: "#CACCC8",
            quinary: "#FFFFFF",
            senary: "#FFFFFF"
        }, verkkopankki_logo_LOGO_COLORS.white = {
            primary: "#000000",
            secondary: "#000000",
            tertiary: "#FFFFFF",
            quaternary: "#FFFFFF",
            quinary: "#FFFFFF",
            senary: "#FFFFFF"
        }, verkkopankki_logo_LOGO_COLORS.black = {
            primary: "#2D59A1",
            secondary: "#1F3364",
            tertiary: "#FFFFFF",
            quaternary: "#CACCC8",
            quinary: "#1B4482",
            senary: "#4E4E4E"
        };
        var blik_logo_LOGO_COLORS;
        (blik_logo_LOGO_COLORS = {}).default = {
            primary: "#FF0000",
            secondary: "#E83E49",
            tertiary: "#FF00FF",
            quaternary: "#000000",
            senary: "#FFFFFF"
        }, blik_logo_LOGO_COLORS.white = {
            primary: "#000000",
            secondary: "#000000",
            tertiary: "#000000",
            quaternary: "#000000",
            senary: "#FFFFFF"
        }, blik_logo_LOGO_COLORS.black = {
            primary: "#FF0000",
            secondary: "#E83E49",
            tertiary: "#FF00FF",
            quaternary: "#4D4D4F",
            senary: "#FFFFFF"
        };
        var trustly_logo_LOGO_COLORS;
        (trustly_logo_LOGO_COLORS = {}).default = {
            primary: "#0EE06E"
        }, trustly_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF"
        }, trustly_logo_LOGO_COLORS.black = {
            primary: "#000000"
        };
        var oxxo_logo_LOGO_COLORS;
        (oxxo_logo_LOGO_COLORS = {}).default = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, oxxo_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, oxxo_logo_LOGO_COLORS.black = {
            primary: "#E39E39",
            secondary: "#D8232A"
        };
        var boleto_logo_LOGO_COLORS;
        (boleto_logo_LOGO_COLORS = {}).default = {
            primary: "#FFFFFF"
        }, boleto_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF"
        }, boleto_logo_LOGO_COLORS.black = {
            primary: "#000000"
        };
        var maxima_logo_LOGO_COLORS;
        (maxima_logo_LOGO_COLORS = {}).default = {
            primary: "#004A91",
            secondary: "#ED1921"
        }, maxima_logo_LOGO_COLORS.white = {
            primary: "#004A91",
            secondary: "#ED1921"
        }, maxima_logo_LOGO_COLORS.black = {
            primary: "#004A91",
            secondary: "#ED1921"
        };
        var mercadopago_logo_LOGO_COLORS;
        (mercadopago_logo_LOGO_COLORS = {}).default = {
            primary: "#009EE3",
            secondary: "#FFFFFF",
            tertiary: "#009EE3",
            quaternary: "#FFFFFF"
        }, mercadopago_logo_LOGO_COLORS.white = {
            primary: "#000000",
            secondary: "#FFFFFF",
            tertiary: "#000000",
            quaternary: "#FFFFFF"
        }, mercadopago_logo_LOGO_COLORS.black = {
            primary: "#FFFFFF",
            secondary: "#2D3277",
            tertiary: "#009EE3",
            quaternary: "#009EE3"
        };
        var multibanco_logo_LOGO_COLORS;
        (multibanco_logo_LOGO_COLORS = {}).default = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, multibanco_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, multibanco_logo_LOGO_COLORS.black = {
            primary: "#1866AB",
            secondary: "#373535"
        };
        var satispay_logo_LOGO_COLORS;
        (satispay_logo_LOGO_COLORS = {}).default = {
            primary: "#FFFFFF"
        }, satispay_logo_LOGO_COLORS.white = {
            primary: "#FFFFFF"
        }, satispay_logo_LOGO_COLORS.black = {
            primary: "#2C2E2F"
        };
        function ErrorMessage(_ref) {
            var resetFunc = _ref.resetFunc;
            return h("div", {
                id: "error-view"
            }, h("div", {
                className: "error-message"
            }, _ref.message || "An issue has occurred"), h("button", {
                className: "reset-button",
                type: "button",
                onClick: resetFunc
            }, "Try scanning again"));
        }
        function QRCodeElement(_ref2) {
            return h("img", {
                id: "qr-code",
                src: "data:image/svg+xml;base64," + btoa(_ref2.svgString),
                alt: "QR Code"
            });
        }
        function Logo() {
            return (_ref = {
                logoColor: "default"
            }, _ref$logoColor = _ref.logoColor, logoColor = void 0 === _ref$logoColor ? "default" : _ref$logoColor, 
            props = _objectWithoutPropertiesLoose(_ref, venmo_logo_excluded), primary = function(name, logoColorMap, logoColor) {
                var colors;
                logoColor && (colors = logoColorMap[logoColor]);
                colors || (colors = logoColorMap.default);
                if (!colors) throw new Error("No " + (logoColor || "default") + " logo available for sofort");
                return colors;
            }(0, logos_venmo_logo_LOGO_COLORS, logoColor).primary, node_node(SVGLogo, _extends({}, props, {
                name: "venmo",
                logoColor: logoColor,
                render: function() {
                    return node_node("svg", {
                        width: "101",
                        height: "32",
                        viewBox: "0 0 101 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "xMinYMin meet"
                    }, node_node("g", {
                        id: "Page-1",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                    }, node_node("g", {
                        id: "Blue",
                        fill: primary
                    }, node_node("g", {
                        id: "Logo",
                        transform: "translate(0.000000, 6.000000)"
                    }, node_node("path", {
                        d: "M16.6660484,0.18 C17.3466626,1.3390991 17.6535069,2.53297297 17.6535069,4.04108108 C17.6535069,8.85117117 13.671346,15.0998198 10.439346,19.4875676 L3.05725952,19.4875676 L0.0966314879,1.23315315 L6.56045675,0.60036036 L8.12578201,13.5895495 C9.58835986,11.1326126 11.3932543,7.27153153 11.3932543,4.6390991 C11.3932543,3.1981982 11.1538599,2.21675676 10.7797405,1.40864865 L16.6660484,0.18 Z M24.9071592,11.6938739 C24.9071592,13.8367568 26.062718,14.6774775 27.5946678,14.6774775 C29.2629152,14.6774775 30.860218,14.2571171 32.9363097,13.1691892 L32.154346,18.6445045 C30.6915934,19.3814414 28.4119291,19.8731532 26.1991903,19.8731532 C20.5863512,19.8731532 18.5775346,16.3632432 18.5775346,11.9753153 C18.5775346,6.28810811 21.8451817,0.249369369 28.5819516,0.249369369 C32.2909931,0.249369369 34.3649879,2.39207207 34.3649879,5.37567568 C34.3653374,10.1855856 28.3783789,11.6590991 24.9071592,11.6938739 Z M25.0434567,8.2181982 C26.2329152,8.2181982 29.2274429,7.65711712 29.2274429,5.90216216 C29.2274429,5.05945946 28.6495761,4.6390991 27.9686125,4.6390991 C26.7772318,4.6390991 25.2138287,6.11225225 25.0434567,8.2181982 Z M53.0187093,4.4636036 C53.0187093,5.16558559 52.9154377,6.18378378 52.8126903,6.84918919 L50.8730709,19.4873874 L44.5790934,19.4873874 L46.3483408,7.90216216 C46.381891,7.58792793 46.4849879,6.95531532 46.4849879,6.60432432 C46.4849879,5.76162162 45.9743962,5.55135135 45.3605329,5.55135135 C44.5451938,5.55135135 43.7279325,5.93711712 43.1836159,6.21873874 L41.1768962,19.4875676 L34.8474464,19.4875676 L37.7390519,0.565945946 L43.2171661,0.565945946 L43.2865381,2.07621622 C44.5789187,1.19873874 46.2807163,0.24972973 48.6952803,0.24972973 C51.8942543,0.249369369 53.0187093,1.93495495 53.0187093,4.4636036 Z M71.7037093,2.32072072 C73.5063322,0.988108108 75.2084792,0.249369369 77.5554187,0.249369369 C80.7872439,0.249369369 81.9113495,1.93495495 81.9113495,4.4636036 C81.9113495,5.16558559 81.8084273,6.18378378 81.7056799,6.84918919 L79.7683322,19.4873874 L73.4726073,19.4873874 L75.2755796,7.6572973 C75.3087803,7.34108108 75.3785017,6.95531532 75.3785017,6.71063063 C75.3785017,5.7618018 74.8677353,5.55135135 74.2540467,5.55135135 C73.4722578,5.55135135 72.6908183,5.90234234 72.1106799,6.21873874 L70.1043097,19.4875676 L63.8101574,19.4875676 L65.6131298,7.65747748 C65.6463304,7.34126126 65.713955,6.9554955 65.713955,6.71081081 C65.713955,5.76198198 65.2030138,5.55153153 64.5914221,5.55153153 C63.7743356,5.55153153 62.9588218,5.9372973 62.4145052,6.21891892 L60.4062128,19.4877477 L54.0788599,19.4877477 L56.9701159,0.566126126 L62.3813045,0.566126126 L62.551327,2.14576577 C63.8101574,1.1990991 65.5105571,0.25009009 67.7900467,0.25009009 C69.7637405,0.249369369 71.0559464,1.12702703 71.7037093,2.32072072 Z M83.55059,11.7998198 C83.55059,5.83279279 86.6120433,0.249369369 93.6558322,0.249369369 C98.9633997,0.249369369 100.903543,3.47981982 100.903543,7.93873874 C100.903543,13.8365766 97.8751159,19.9443243 90.6614792,19.9443243 C85.3196626,19.9443243 83.55059,16.3281081 83.55059,11.7998198 Z M94.4374464,7.83279279 C94.4374464,6.28810811 94.0628028,5.23495495 92.9409689,5.23495495 C90.4570329,5.23495495 89.9469654,9.76306306 89.9469654,12.0794595 C89.9469654,13.8367568 90.4238322,14.9243243 91.5453166,14.9243243 C93.8931298,14.9243243 94.4374464,10.149009 94.4374464,7.83279279 Z"
                    })))));
                }
            }))).render(Object(jsx_pragmatic.preact)({
                Preact: {
                    h: h
                }
            }));
            var _ref, _ref$logoColor, logoColor, props, primary;
        }
        function InstructionIcon(_ref3) {
            var _ref3$stylingClass = _ref3.stylingClass;
            return h("svg", {
                className: void 0 === _ref3$stylingClass ? "instruction-icon" : _ref3$stylingClass,
                width: "68",
                height: "47",
                viewBox: "0 0 68 47",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("rect", {
                x: "11.5",
                y: "6.90039",
                width: "20.7",
                height: "29.9",
                fill: "white"
            }), h("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M30.82 2.2998H12.88C10.8475 2.2998 9.19995 3.98283 9.19995 6.05894V42.2407C9.19995 44.3168 10.8475 45.9998 12.88 45.9998H30.82C32.8524 45.9998 34.5 44.3168 34.5 42.2407V6.05894C34.5 3.98283 32.8524 2.2998 30.82 2.2998ZM21.8499 42.6635C20.8337 42.6635 20.0099 41.822 20.0099 40.784C20.0099 39.7459 20.8337 38.9044 21.8499 38.9044C22.8661 38.9044 23.6899 39.7459 23.6899 40.784C23.6899 41.822 22.8661 42.6635 21.8499 42.6635ZM11.9599 36.414H31.7399V7.32767H11.9599V36.414Z",
                fill: "#888C94"
            }), h("path", {
                d: "M25.7367 12.4121C26.107 13.0217 26.274 13.6495 26.274 14.4425C26.274 16.9719 24.1071 20.2578 22.3483 22.5651H18.3314L16.7205 12.966L20.2378 12.6333L21.0894 19.4636C21.8853 18.1716 22.8674 16.1412 22.8674 14.757C22.8674 13.9992 22.7371 13.4832 22.5335 13.0582L25.7367 12.4121Z",
                fill: "#008CFF"
            }), h("circle", {
                cx: "14.5",
                cy: "33.5",
                r: "1.25",
                fill: "white",
                stroke: "#0074DE",
                "stroke-width": "0.5"
            }), h("circle", {
                cx: "18.5",
                cy: "33.5",
                r: "1.25",
                fill: "white",
                stroke: "#0074DE",
                "stroke-width": "0.5"
            }), h("rect", {
                x: "21",
                y: "32",
                width: "9",
                height: "3",
                rx: "1.5",
                fill: "#0074DE"
            }), h("circle", {
                cx: "49",
                cy: "26",
                r: "18",
                fill: "white",
                stroke: "#2F3033",
                "stroke-width": "2"
            }), h("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M56.7188 16.5H51.9688C50.985 16.5 50.1875 17.2975 50.1875 18.2812V23.0312C50.1875 24.015 50.985 24.8125 51.9688 24.8125H56.7188C57.7025 24.8125 58.5 24.015 58.5 23.0312V18.2812C58.5 17.2975 57.7025 16.5 56.7188 16.5ZM51.375 18.2812C51.375 17.9533 51.6408 17.6875 51.9688 17.6875H56.7188C57.0467 17.6875 57.3125 17.9533 57.3125 18.2812V23.0312C57.3125 23.3592 57.0467 23.625 56.7188 23.625H51.9688C51.6408 23.625 51.375 23.3592 51.375 23.0312V18.2812ZM41.875 19.5083C41.875 19.1585 42.1585 18.875 42.5083 18.875H44.8042C45.154 18.875 45.4375 19.1585 45.4375 19.5083V21.8042C45.4375 22.154 45.154 22.4375 44.8042 22.4375H42.5083C42.1585 22.4375 41.875 22.154 41.875 21.8042V19.5083ZM52.5625 19.5083C52.5625 19.1585 52.846 18.875 53.1958 18.875H55.4917C55.8415 18.875 56.125 19.1585 56.125 19.5083V21.8042C56.125 22.154 55.8415 22.4375 55.4917 22.4375H53.1958C52.846 22.4375 52.5625 22.154 52.5625 21.8042V19.5083ZM50.8208 27.1875C50.471 27.1875 50.1875 27.471 50.1875 27.8208V28.9292C50.1875 29.279 50.471 29.5625 50.8208 29.5625H51.9292C52.279 29.5625 52.5625 29.279 52.5625 28.9292V27.8208C52.5625 27.471 52.279 27.1875 51.9292 27.1875H50.8208ZM50.1875 33.7583C50.1875 33.4085 50.471 33.125 50.8208 33.125H51.9292C52.279 33.125 52.5625 33.4085 52.5625 33.7583V34.8667C52.5625 35.2165 52.279 35.5 51.9292 35.5H50.8208C50.471 35.5 50.1875 35.2165 50.1875 34.8667V33.7583ZM56.7583 27.1875C56.4085 27.1875 56.125 27.471 56.125 27.8208V28.9292C56.125 29.279 56.4085 29.5625 56.7583 29.5625H57.8667C58.2165 29.5625 58.5 29.279 58.5 28.9292V27.8208C58.5 27.471 58.2165 27.1875 57.8667 27.1875H56.7583ZM56.125 33.7583C56.125 33.4085 56.4085 33.125 56.7583 33.125H57.8667C58.2165 33.125 58.5 33.4085 58.5 33.7583V34.8667C58.5 35.2165 58.2165 35.5 57.8667 35.5H56.7583C56.4085 35.5 56.125 35.2165 56.125 34.8667V33.7583ZM53.7895 30.1562C53.4398 30.1562 53.1562 30.4398 53.1562 30.7895V31.898C53.1562 32.2477 53.4398 32.5312 53.7895 32.5312H54.898C55.2477 32.5312 55.5312 32.2477 55.5312 31.898V30.7895C55.5312 30.4398 55.2477 30.1562 54.898 30.1562H53.7895ZM41.875 30.1958C41.875 29.846 42.1585 29.5625 42.5083 29.5625H44.8042C45.154 29.5625 45.4375 29.846 45.4375 30.1958V32.4917C45.4375 32.8415 45.154 33.125 44.8042 33.125H42.5083C42.1585 33.125 41.875 32.8415 41.875 32.4917V30.1958ZM41.2812 27.1875H46.0312C47.015 27.1875 47.8125 27.985 47.8125 28.9688V33.7188C47.8125 34.7025 47.015 35.5 46.0312 35.5H41.2812C40.2975 35.5 39.5 34.7025 39.5 33.7188V28.9688C39.5 27.985 40.2975 27.1875 41.2812 27.1875ZM41.2812 28.375C40.9533 28.375 40.6875 28.6408 40.6875 28.9688V33.7188C40.6875 34.0467 40.9533 34.3125 41.2812 34.3125H46.0312C46.3592 34.3125 46.625 34.0467 46.625 33.7188V28.9688C46.625 28.6408 46.3592 28.375 46.0312 28.375H41.2812ZM41.2812 16.5H46.0312C47.015 16.5 47.8125 17.2975 47.8125 18.2812V23.0312C47.8125 24.015 47.015 24.8125 46.0312 24.8125H41.2812C40.2975 24.8125 39.5 24.015 39.5 23.0312V18.2812C39.5 17.2975 40.2975 16.5 41.2812 16.5ZM41.2812 17.6875C40.9533 17.6875 40.6875 17.9533 40.6875 18.2812V23.0312C40.6875 23.3592 40.9533 23.625 41.2812 23.625H46.0312C46.3592 23.625 46.625 23.3592 46.625 23.0312V18.2812C46.625 17.9533 46.3592 17.6875 46.0312 17.6875H41.2812Z",
                fill: "#008CFF"
            }), h("path", {
                d: "M36 13.0004L15 33",
                stroke: "#2F3033"
            }), h("path", {
                d: "M43.4999 43.4991L14.4999 32.9995",
                stroke: "#2F3033"
            }));
        }
        function VenmoMark() {
            return h("svg", {
                id: "venmo-mark",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 48 48"
            }, h("path", {
                d: "M42.3 2L28.5 4.8c.8 1.9 1.4 4.1 1.4 7.4 0 6-4.2 14.8-7.7 20.4L18.5 3 3.3 4.5l7 41.5h17.4c7.7-10 17-24.3 17-35.2 0-3.4-.8-6.1-2.4-8.8z",
                fill: "#fff"
            }));
        }
        function AuthMark() {
            return h("svg", {
                id: "success-mark",
                width: "59",
                height: "59",
                viewBox: "0 0 59 59",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("rect", {
                x: "1",
                y: "1",
                width: "57",
                height: "57",
                rx: "28.5",
                fill: "#148572",
                stroke: "#888C94"
            }), h("g", {
                "clip-path": "url(#clip0)"
            }, h("path", {
                d: "M24.0068 40.8397C22.921 39.7538 22.921 37.9933 24.0068 36.9075L39.2933 21.621C40.3791 20.5352 42.1396 20.5352 43.2255 21.621C44.3113 22.7069 44.3113 24.4674 43.2255 25.5532L27.939 40.8397C26.8532 41.9255 25.0927 41.9255 24.0068 40.8397Z",
                fill: "white"
            }), h("path", {
                d: "M27.9763 40.8397C26.8905 41.9255 25.13 41.9255 24.0441 40.8397L17.1628 33.9583C16.0769 32.8725 16.0769 31.112 17.1628 30.0261C18.2486 28.9403 20.0091 28.9403 21.095 30.0261L27.9763 36.9075C29.0622 37.9933 29.0622 39.7538 27.9763 40.8397Z",
                fill: "white"
            })), h("defs", null, h("clipPath", {
                id: "clip0"
            }, h("rect", {
                width: "27.8049",
                height: "27.8049",
                fill: "white",
                transform: "translate(16.2927 16.293)"
            }))));
        }
        var debugging_nextStateMap = new Map([ [ "qr_default", "qr_scanned" ], [ "qr_error", "qr_default" ], [ "qr_authorized", "qr_error" ], [ "qr_scanned", "qr_authorized" ] ]);
        function setupNativeQRLogger() {
            var _window$xprops = window.xprops, env = _window$xprops.env, sessionID = _window$xprops.sessionID, buttonSessionID = _window$xprops.buttonSessionID, sdkCorrelationID = _window$xprops.sdkCorrelationID, clientID = _window$xprops.clientID, _window$xprops$fundin = _window$xprops.fundingSource, fundingSource = void 0 === _window$xprops$fundin ? "venmo" : _window$xprops$fundin, locale = _window$xprops.locale, orderID = _window$xprops.orderID;
            var parent = (0, _window$xprops.getParent)();
            var sdkVersion = function() {
                if (!window.paypal) throw new Error("paypal not found");
                return window.paypal;
            }().version;
            var buyerCountry = locale.country;
            var logger = getLogger();
            logger.configure({
                transport: parent && getHTTPTransport(parent)
            });
            !function(_ref2) {
                var env = _ref2.env, sessionID = _ref2.sessionID, clientID = _ref2.clientID, sdkCorrelationID = _ref2.sdkCorrelationID, buyerCountry = _ref2.buyerCountry, locale = _ref2.locale, sdkVersion = _ref2.sdkVersion, fundingSource = _ref2.fundingSource;
                var logger = getLogger();
                logger.addPayloadBuilder((function() {
                    return {
                        referer: window.location.host,
                        sdkCorrelationID: sdkCorrelationID,
                        sessionID: sessionID,
                        clientID: clientID,
                        env: env
                    };
                }));
                logger.addTrackingBuilder((function() {
                    var _ref3;
                    var lang = locale.lang, country = locale.country;
                    return (_ref3 = {}).feed_name = "payments_sdk", _ref3.serverside_data_source = "checkout", 
                    _ref3.client_id = clientID, _ref3.page_session_id = sessionID, _ref3.referer_url = window.location.host, 
                    _ref3.buyer_cntry = buyerCountry, _ref3.locale = lang + "_" + country, _ref3.integration_identifier = clientID, 
                    _ref3.sdk_environment = function(ua) {
                        void 0 === ua && (ua = getUserAgent());
                        return /iPhone|iPod|iPad/.test(ua);
                    }() ? "iOS" : function(ua) {
                        void 0 === ua && (ua = getUserAgent());
                        return /Android/.test(ua);
                    }() ? "android" : null, _ref3.sdk_name = "payments_sdk", _ref3.sdk_version = sdkVersion, 
                    _ref3.user_agent = window.navigator && window.navigator.userAgent, _ref3.context_correlation_id = sdkCorrelationID, 
                    _ref3.t = Date.now().toString(), _ref3.selected_payment_method = fundingSource, 
                    _ref3;
                }));
                promise_ZalgoPromise.onPossiblyUnhandledException((function(err) {
                    var _logger$track;
                    logger.track(((_logger$track = {}).ext_error_code = "payments_sdk_error", _logger$track.ext_error_desc = function(err) {
                        var defaultMessage = "<unknown error: " + {}.toString.call(err) + ">";
                        return err ? err instanceof Error ? err.message || defaultMessage : "string" == typeof err.message && err.message || defaultMessage : defaultMessage;
                    }(err), _logger$track));
                    logger.error("unhandled_error", {
                        err: stringifyError(err)
                    });
                    logger.flush().catch(src_util_noop);
                }));
            }({
                env: env,
                sessionID: sessionID,
                clientID: clientID,
                sdkCorrelationID: sdkCorrelationID,
                locale: locale,
                sdkVersion: sdkVersion,
                buyerCountry: buyerCountry,
                fundingSource: fundingSource
            });
            !function(_ref) {
                var env = _ref.env;
                getLogger().configure({
                    amplitudeApiKey: AMPLITUDE_API_KEY[env]
                });
            }({
                env: env
            });
            logger.addPayloadBuilder((function() {
                var _ref;
                return (_ref = {
                    buttonSessionID: buttonSessionID
                }).user_id = buttonSessionID, _ref;
            }));
            logger.addTrackingBuilder((function() {
                var _ref2;
                return (_ref2 = {}).state_name = "smart_button", _ref2.context_type = "EC-Token", 
                _ref2.context_id = orderID, _ref2.button_session_id = buttonSessionID, _ref2.button_version = "5.0.120", 
                _ref2.user_id = buttonSessionID, _ref2;
            }));
            (function() {
                if (window.document.documentMode) try {
                    var status = window.status;
                    window.status = "testIntranetMode";
                    if ("testIntranetMode" === window.status) {
                        window.status = status;
                        return !0;
                    }
                    return !1;
                } catch (err) {
                    return !1;
                }
                return !1;
            })() && logger.warn("button_child_intranet_mode");
            promise_ZalgoPromise.hash({
                pageRenderTime: waitForDocumentReady().then((function() {
                    var performance = getPerformance();
                    if (performance) {
                        var timing = performance.timing;
                        return timing.connectEnd && timing.domInteractive ? timing.domInteractive - timing.connectEnd : void 0;
                    }
                }))
            }).then((function(_ref3) {
                var _logger$track;
                var pageRenderTime = _ref3.pageRenderTime;
                logger.track(((_logger$track = {}).transition_name = "qr_load", _logger$track.merchant_selected_funding_source = fundingSource, 
                _logger$track.page_load_time = pageRenderTime ? pageRenderTime.toString() : "", 
                _logger$track));
                logger.flush();
            }));
            return logger;
        }
        var radioSvg = h("svg", {
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, h("rect", {
            x: "0.25",
            y: "0.25",
            width: "39.5",
            height: "39.5",
            rx: "19.75",
            stroke: "#888C94",
            "stroke-width": "0.5"
        }));
        var checkedRadioSvg = h("svg", {
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, h("circle", {
            cx: "20",
            cy: "20",
            r: "12",
            fill: "#148572"
        }), h("rect", {
            x: "0.25",
            y: "0.25",
            width: "39.5",
            height: "39.5",
            rx: "19.75",
            stroke: "#148572",
            "stroke-width": "0.5"
        }));
        function Survey(_ref) {
            var survey = _ref.survey, onCloseClick = _ref.onCloseClick;
            var onChange = function(event) {
                event.target.blur();
                survey.setReason(event.target.value);
            };
            var answersElements = [ {
                text: "Having trouble scanning the QR code",
                reason: "having_trouble_scanning_the_qr_code"
            }, {
                text: "Don’t have the Venmo app on my mobile device",
                reason: "dont_have_the_venmo_app_on_my_mobile_device"
            }, {
                text: "I prefer to pay another way",
                reason: "prefer_to_pay_another_way"
            }, {
                text: "I prefer not to say",
                reason: "prefer_not_to_say"
            } ].map((function(answer) {
                return h("div", {
                    class: "answer"
                }, h("input", {
                    type: "radio",
                    id: answer.reason,
                    value: answer.reason,
                    checked: answer.reason === survey.reason,
                    onChange: onChange
                }), h("label", {
                    for: answer.reason
                }, answer.reason === survey.reason ? checkedRadioSvg : radioSvg, answer.text));
            }));
            return h("div", {
                id: "survey"
            }, h("h1", null, "We’re sorry to see you leave!"), h("p", {
                class: "message"
            }, "Please let us know why. Your feedback is important to us."), h("div", {
                class: "answers"
            }, answersElements), h("button", {
                type: "button",
                class: "continue-button",
                onClick: survey.disable
            }, "Continue payment"), h("button", {
                type: "button",
                class: "leave-button",
                onClick: onCloseClick
            }, "Leave"));
        }
        var qrcard_logger;
        function QRCard(_ref) {
            var svgString = _ref.svgString;
            var _useXProps = function() {
                var _useState = hooks_module_p(window.xprops), xprops = _useState[0], setXProps = _useState[1];
                u = function() {
                    return xprops.onProps((function(newProps) {
                        setXProps(_extends({}, newProps));
                    }));
                }, i = [], o = hooks_module_d(hooks_module_t++, 3), !l.__s && function(n, t) {
                    return !n || n.length !== t.length || t.some((function(t, r) {
                        return t !== n[r];
                    }));
                }(o.__H, i) && (o.__ = u, o.i = i, hooks_module_r.__H.__h.push(o));
                var u, i, o;
                return _extends({}, xprops, {
                    setState: function(newState) {
                        setXProps(_extends({}, xprops, {
                            state: newState
                        }));
                    }
                });
            }(), state = _useXProps.state, errorText = _useXProps.errorText, setState = _useXProps.setState, close = _useXProps.close, cancel = _useXProps.onCancel;
            var survey = function() {
                var _useState = hooks_module_p({
                    isEnabled: !1,
                    reason: "prefer_not_to_say"
                }), state = _useState[0], setState = _useState[1];
                return _extends({}, state, {
                    enable: function() {
                        return setState(_extends({}, state, {
                            isEnabled: !0
                        }));
                    },
                    disable: function() {
                        return setState(_extends({}, state, {
                            isEnabled: !1
                        }));
                    },
                    setReason: function(reason) {
                        return setState(_extends({}, state, {
                            reason: reason
                        }));
                    }
                });
            }();
            var handleClick = function(selectedFundingSource) {
                window.xprops.hide();
                var win = function(_ref) {
                    var _ref$closeOnUnload = _ref.closeOnUnload;
                    var win = assertSameDomain(function(url, options) {
                        var _options$closeOnUnloa = (options = options || {}).closeOnUnload, closeOnUnload = void 0 === _options$closeOnUnloa ? 1 : _options$closeOnUnloa, _options$name = options.name, name = void 0 === _options$name ? "" : _options$name, width = options.width, height = options.height;
                        var top = 0;
                        var left = 0;
                        width && (window.outerWidth ? left = Math.round((window.outerWidth - width) / 2) + window.screenX : window.screen.width && (left = Math.round((window.screen.width - width) / 2)));
                        height && (window.outerHeight ? top = Math.round((window.outerHeight - height) / 2) + window.screenY : window.screen.height && (top = Math.round((window.screen.height - height) / 2)));
                        delete options.closeOnUnload;
                        delete options.name;
                        width && height && (options = _extends({
                            top: top,
                            left: left,
                            width: width,
                            height: height,
                            status: 1,
                            toolbar: 0,
                            menubar: 0,
                            resizable: 1,
                            scrollbars: 1
                        }, options));
                        var params = Object.keys(options).map((function(key) {
                            if (null != options[key]) return key + "=" + ("string" == typeof (item = options[key]) ? item : item && item.toString && "function" == typeof item.toString ? item.toString() : {}.toString.call(item));
                            var item;
                        })).filter(Boolean).join(",");
                        var win;
                        try {
                            win = window.open("", name, params);
                        } catch (err) {
                            throw new dom_PopupOpenError("Can not open popup window - " + (err.stack || err.message));
                        }
                        if (isWindowClosed(win)) {
                            var err;
                            throw new dom_PopupOpenError("Can not open popup window - blocked");
                        }
                        closeOnUnload && window.addEventListener("unload", (function() {
                            return win.close();
                        }));
                        return win;
                    }(0, {
                        width: _ref.width,
                        height: _ref.height,
                        closeOnUnload: void 0 === _ref$closeOnUnload ? 1 : _ref$closeOnUnload
                    }));
                    var doc = win.document;
                    !function(win, el) {
                        var tag = el.tagName.toLowerCase();
                        if ("html" !== tag) throw new Error("Expected element to be html, got " + tag);
                        var documentElement = win.document.documentElement;
                        for (var _i6 = 0, _arrayFrom2 = arrayFrom(documentElement.children); _i6 < _arrayFrom2.length; _i6++) documentElement.removeChild(_arrayFrom2[_i6]);
                        for (var _i8 = 0, _arrayFrom4 = arrayFrom(el.children); _i8 < _arrayFrom4.length; _i8++) documentElement.appendChild(_arrayFrom4[_i8]);
                    }(win, node_node(SpinnerPage, {
                        nonce: getNonce()
                    }).render(dom({
                        doc: doc
                    })));
                    return win;
                }({
                    width: 500,
                    height: 590,
                    closeOnUnload: 0
                });
                window.xprops.onEscapePath(win, selectedFundingSource).then((function() {
                    close();
                }));
            };
            var onCloseClick = function() {
                if ("qr_default" !== state) cancel(); else if (survey.isEnabled) {
                    var _logger$info$track;
                    qrcard_logger.info("VenmoDesktopPay_qrcode_survey").track((_logger$info$track = {}, 
                    _logger$info$track.state_name = "smart_button", _logger$info$track.context_type = "EC-Token", 
                    _logger$info$track.context_id = window.xprops.orderID, _logger$info$track.transition_name = "desktop_exit_survey_selection_submitted", 
                    _logger$info$track.desktop_exit_survey_reason = survey.reason, _logger$info$track)).flush();
                    cancel();
                }
                return cancel();
            };
            var errorMessage = h(ErrorMessage, {
                message: errorText,
                resetFunc: function() {
                    return setState("qr_default");
                }
            });
            var frontView = h("div", {
                id: "front-view",
                className: "card"
            }, h("p", {
                id: "fee-disclaimer"
            }, "No fees no matter how you pay"), h("div", {
                id: "instructions"
            }, h(InstructionIcon, {
                stylingClass: "instruction-icon"
            }), h("span", null, "To pay, scan the QR code with your Venmo app")), h(QRCodeElement, {
                svgString: svgString
            }), h(Logo, null));
            var surveyElement = h(Survey, {
                survey: survey,
                onCloseClick: onCloseClick
            });
            var content = survey.isEnabled && "qr_default" === state ? surveyElement : frontView;
            var escapePathFooter = !survey.isEnabled && "qr_default" === state && h("p", {
                className: "escape-path"
            }, "Don't have the app? Pay with ", h("span", {
                className: "escape-path__link",
                onClick: function() {
                    return handleClick("paypal");
                }
            }, "PayPal"), " or ", h("span", {
                className: "escape-path__link",
                onClick: function() {
                    return handleClick("card");
                }
            }, "Credit/Debit card"));
            return h(p, null, h("style", {
                nonce: window.xprops.cspNonce
            }, " ", '\n    * {\n        box-sizing: border-box;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        text-transform: none;\n    }\n    html, body {\n        display: flex;\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        align-items: center;\n        justify-content: center;\n    }\n    body {\n        flex-direction: column;\n    }\n    #error-view {\n        width: 100%;\n        height: 100%;\n        padding: 1.5em;\n        justify-content: center;\n    }\n    #error-view .error-message,\n    #error-view .reset-button {\n        color: #FFFFFF;\n        text-align: center;\n        line-height: 16px;\n    }\n    #error-view .error-message {\n        margin-bottom: 2em;\n        word-break: break-word;\n    }\n    #error-view .reset-button {\n        cursor: pointer;\n        border: 0;\n        border-radius: 24px;\n        padding: 12px;\n        background: #3D93CE;\n        line-height: 24px;\n        font-weight: 700;\n        width: 300px;\n    }\n    .card,\n    #error-view {\n        display: inline-flex;\n        align-items: center;\n        flex-direction: column;\n    }\n    .card {\n        border-radius: 8px;\n        min-width: 280px;\n        min-height: 320px;\n        backface-visibility: hidden;\n        -webkit-backface-visibility: hidden;\n        transition: transform 1s;\n        transform-style: preserve-3d;\n    }\n    .card * {\n        box-sizing: content-box;\n    }\n    #view-boxes {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 100%;\n        width: 100%;\n    }\n    #view-boxes.qr_scanned #front-view,\n    #view-boxes.qr_authorized #front-view {\n        transform: rotateY(180deg);\n        position: absolute;\n    }\n    #view-boxes #back-view {width: 320px;}\n    #view-boxes.qr_scanned #back-view,\n    #view-boxes.qr_authorized #back-view {\n        transform: rotateY(0deg);\n        position: relative;\n    }\n    #view-boxes #back-view #success-mark,\n    #view-boxes #back-view .success-message {\n        opacity: 0;\n    }\n    #view-boxes.qr_authorized #back-view #success-mark,\n    #view-boxes.qr_authorized #back-view .success-message {\n        opacity: 1;\n    }\n    #view-boxes.qr_authorized #back-view #success-mark {\n        transform: rotate(720deg);\n    }\n    #view-boxes.qr_authorized #back-view .auth-message {\n        opacity: 0;\n    }\n    #front-view {\n        background-color: white;\n        border: 1px solid #888C94;\n        z-index: 2;\n        transform: rotateY(0deg);\n        justify-content: flex-end;\n        width: 462px;\n    }\n    #front-view > svg,\n    #front-view > img {\n        padding: 16px 16px 0px;\n    }\n    #front-view > img + img {\n        padding-top: 12px;\n        padding-bottom: 32px;\n    }\n    #qr-code {\n        min-width: 160px;\n        min-height: 160px;\n        width: calc(100% - 32px);\n        max-width: 325px;\n    }\n    #instructions {\n        background-color: #FFFF;\n        border-top-left-radius: 8px;\n        border-top-right-radius: 8px;\n        box-sizing: border-box;\n        margin-top: 16px;\n        display: flex;\n        align-items: center;\n        font-size: 14px;\n        line-height: 16px;\n        max-width: 250px;\n        width: 100%;\n    }\n    .instruction-icon {\n        min-width: 68px;\n        min-height: 46px;\n        margin-right: 16px;\n    }\n    #fee-disclaimer{\n        margin: 0;\n        padding-top: 32px;\n        padding-left: 16px;\n        padding-right: 16px;\n        font-size: 20px;\n        color: #2F3033;\n    }\n    #back-view {\n        position: absolute;\n        transform: rotateY(-180deg);\n        background-color: #3D93CE;\n        justify-content: center;\n        font-size: 18px;\n        line-height: 16px;\n        text-align: center;\n        color: #FFFFFF;\n    }\n    #back-view .auth-message,\n    #back-view .success-message {\n        position: absolute;\n        bottom: -30px;\n        white-space: nowrap;\n        transition: opacity 500ms;\n    }\n    #back-view .mark {\n        position: relative ;\n    }\n    #venmo-mark{\n        width: 50%;\n    }\n    #success-mark {\n        position: absolute;\n        left: 50%;\n        bottom: -10%;\n        transition: transform 500ms, opacity 500ms;\n        transition-delay: 350ms;\n    }\n    #close {\n        position: absolute;\n        right: 16px;\n        top: 16px;\n        width: 16px;\n        height: 16px;\n        opacity: 0.6;\n        z-index: 10;\n    }\n    #close:hover {\n        opacity: 1;\n    }\n    #close:before, #close:after {\n        position: absolute;\n        left: 8px;\n        content: \' \';\n        height: 20px;\n        width: 2px;\n        background-color: #FFF;\n    }\n    #close:before {\n        transform: rotate(45deg);\n    }\n    #close:after {\n        transform: rotate(-45deg);\n    }\n    #survey {\n        background: #FFFFFF;\n        height: 542px;\n        width: 500px;\n        border-radius: 8px;\n    }\n    #survey h1 {\n        width: 423px;\n        font-weight: 500;\n        font-size: 24px;\n        line-height: 32px;\n        text-align: center;\n        margin: auto;\n        margin-top: 30px;\n    }\n    #survey button {\n        display: block;\n        margin: auto;\n        border: none;\n        font-family: sans-serif;\n        cursor: pointer;\n        font-weight: bold;\n    }\n    #survey button.continue-button {\n        margin-top: 40px;\n        min-height: 48px;\n        width:  335px;\n        background: #0074DE;\n        height: 24px;\n        font-size: 18px;\n        line-height: 24px;\n        text-align: center;\n        color: #FFFFFF;\n        border-radius: 24px;\n        display: block;\n    }\n    #survey button.leave-button {\n        margin-top: 10px;\n        height: 48px;\n        width:  335px;\n        color: #0074DE;\n        background: none;\n        font-size: 18px;\n        line-height: 24px;\n        text-align: center;\n        display: block;\n    }\n    #survey .message {\n        width: 333px;\n        font-family: sans-serif;\n        font-size: 16px;\n        line-height: 20px;\n        text-align: center;\n        margin: auto;\n        margin-top: 8px;\n    }\n\n    #survey .answers {\n        width: 400px;\n        font-size: 16px;\n        line-height: 20px;\n        margin: auto;\n        cursor: pointer;\n    }\n    #survey .answers .answer {\n        margin-top: 28px;\n        display: flex;\n        align-items: center;\n    }\n    #survey label {\n        font-family: sans-serif;\n        font-size: 16px;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n    }\n    #survey .answers svg{\n        margin-right: 8px;\n        min-width: 40px;\n    }\n    #survey .answers input{\n        display: none;\n    }\n    #survey .answers input:focus::after {\n        content: "";\n        min-width: 44px;\n        height: 44px;\n        position: absolute;\n        top: -2px;\n        left: -2px;\n        border: solid 1px black;\n        border-radius: 50%;\n    }\n    .escape-path {\n        background-color: white;\n        color: #2F3033;\n        width: 100%;\n        text-align: center;\n        padding: 1rem;\n        margin: 0;\n        border-bottom-left-radius: 16px;\n        border-bottom-right-radius: 16px;\n    }\n    .escape-path__link {\n        font-weight: 600;\n        color: #008CFF;\n    }\n    .escape-path__link:hover {\n        cursor: pointer;\n    }\n    ', " "), h("a", {
                href: "#",
                id: "close",
                "aria-label": "close",
                role: "button",
                onClick: onCloseClick
            }), h("div", {
                id: "view-boxes",
                className: state
            }, "qr_error" === state ? errorMessage : content, h("div", {
                className: "card",
                id: "back-view"
            }, h("span", {
                className: "mark"
            }, h(VenmoMark, null), h(AuthMark, null)), h("div", {
                className: "auth-message"
            }, "Go to your Venmo app and authorize"), h("div", {
                className: "success-message"
            }, "Venmo account authorized")), window.xprops.debug && h("button", {
                type: "button",
                style: {
                    position: "absolute",
                    bottom: "8px",
                    padding: "4px",
                    right: "8px"
                },
                onClick: function() {
                    return setState(debugging_nextStateMap.get(state));
                }
            }, "Next State")), escapePathFooter);
        }
        function renderQRCode(_ref2) {
            var svgString = _ref2.svgString;
            qrcard_logger = setupNativeQRLogger();
            !function(u, i, t) {
                var r, e;
                l.__ && l.__(u, i), r = !1 ? null : i.__k, e = [], j(i, u = i.__k = h(p, null, [ u ]), r || f, f, void 0 !== i.ownerSVGElement, r ? null : i.firstChild ? n.call(i.childNodes) : null, e, r ? r.__e : i.firstChild, !1), 
                z(e, u);
            }(h(QRCard, {
                svgString: svgString
            }), util_getBody());
        }
    } ]);
}));