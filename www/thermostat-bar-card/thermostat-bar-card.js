/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,r){var o,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,i,n):o(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},r=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${r}--\x3e`,s=new RegExp(`${r}|${o}`);class n{constructor(t,e){this.parts=[],this.element=e;const i=[],o=[],n=document.createTreeWalker(e.content,133,null,!1);let c=0,h=-1,p=0;const{strings:u,values:{length:m}}=t;for(;p<m;){const t=n.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let r=0;for(let t=0;t<i;t++)a(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=u[p],i=d.exec(e)[2],r=i.toLowerCase()+"$lit$",o=t.getAttribute(r);t.removeAttribute(r);const n=o.split(s);this.parts.push({type:"attribute",index:h,name:i,strings:n}),p+=n.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,o=e.split(s),n=o.length-1;for(let e=0;e<n;e++){let i,s=o[e];if(""===s)i=l();else{const t=d.exec(s);null!==t&&a(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(s)}r.insertBefore(i,t),this.parts.push({type:"node",index:++h})}""===o[n]?(r.insertBefore(l(),t),i.push(t)):t.data=o[n],p+=n}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&h!==c||(h++,e.insertBefore(l(),t)),c=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(i.push(t),h--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),p++}}else n.currentNode=o.pop()}for(const t of i)t.parentNode.removeChild(t)}}const a=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:i},parts:r}=t,o=document.createTreeWalker(i,133,null,!1);let s=u(r),n=r[s],a=-1,c=0;const l=[];let d=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==n&&n.index===a;)n.index=null!==d?-1:n.index-c,s=u(r,s),n=r[s]}l.forEach(t=>t.parentNode.removeChild(t))}const p=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},u=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(c(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),f={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],r=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let s,n=0,a=0,l=o.nextNode();for(;n<r.length;)if(s=r[n],c(s)){for(;a<s.index;)a++,"TEMPLATE"===l.nodeName&&(i.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=i.pop(),l=o.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));n++}else this.__parts.push(void 0),n++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${r} `;class w{constructor(t,e,i,r){this.strings=t,this.values=e,this.type=i,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let s=0;s<t;s++){const t=this.strings[s],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const a=d.exec(t);e+=null===a?t+(i?b:o):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+r}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==y&&(e=y.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class C{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new $(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let r="";for(let o=0;o<e;o++){r+=t[o];const e=i[o];if(void 0!==e){const t=e.value;if(S(t)||!x(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||S(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class T{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),r=i._clone();i.update(t.values),this.__commitNode(r),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,r=0;for(const o of t)i=e[r],void 0===i&&(i=new T(this.options),e.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(e[r-1])),i.setValue(o),i.commit(),r++;r<e.length&&(e.length=r,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class E extends C{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends ${}let N=!1;(()=>{try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class A{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=O(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function V(t){let e=R.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},R.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(r);return i=e.keyString.get(o),void 0===i&&(i=new n(t,t.getTemplateElement()),e.keyString.set(o,i)),e.stringsArray.set(t.strings,i),i}const R=new Map,U=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const M=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,r){const o=e[0];if("."===o){return new E(t,e.slice(1),i).parts}if("@"===o)return[new A(t,e.slice(1),r.eventContext)];if("?"===o)return[new P(t,e.slice(1),i)];return new C(t,e,i).parts}handleTextExpression(t){return new T(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const j=(t,...e)=>new w(t,e,"html",M)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,q=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const L=t=>e=>{const i=q(e.type,t);let o=R.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},R.set(i,o));let s=o.stringsArray.get(e.strings);if(void 0!==s)return s;const a=e.strings.join(r);if(s=o.keyString.get(a),void 0===s){const i=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(i,t),s=new n(e,i),o.keyString.set(a,s)}return o.stringsArray.set(e.strings,s),s},z=["html","svg"],B=new Set,I=(t,e,i)=>{B.add(t);const r=i?i.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:s}=o;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(r,t);const n=document.createElement("style");for(let t=0;t<s;t++){const e=o[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}(t=>{z.forEach(e=>{const i=R.get(q(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),h(t,i)})})})(t);const a=r.content;i?function(t,e,i=null){const{element:{content:r},parts:o}=t;if(null==i)return void r.appendChild(e);const s=document.createTreeWalker(r,133,null,!1);let n=u(o),a=0,c=-1;for(;s.nextNode();){c++;for(s.currentNode===i&&(a=p(e),i.parentNode.insertBefore(e,i));-1!==n&&o[n].index===c;){if(a>0){for(;-1!==n;)o[n].index+=a,n=u(o,n);return}n=u(o,n)}}}(i,n,a.firstChild):a.insertBefore(n,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(n,a.firstChild);const t=new Set;t.add(n),h(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const D={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},F=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:F};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const r=this._attributeNameForProperty(i,e);void 0!==r&&(this._attributeToPropertyMap.set(r,i),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const o=this[t];this[e]=r,this.requestUpdateInternal(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=F){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,r=e.converter||D,o="function"==typeof r?r:r.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,r=e.converter;return(r&&r.toAttribute||D.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=W){const r=this.constructor,o=r._attributeNameForProperty(t,i);if(void 0!==o){const t=r._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(t);if(void 0!==r){const t=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let r=!0;if(void 0!==t){const o=this.constructor;i=i||o.getPropertyOptions(t),o._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const X=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),Y=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function G(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Y(t,e)}function K(t){return G({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol();
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class tt{constructor(t,e){if(e!==Z)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const i=e.reduce((e,i,r)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1],t[0]);return new tt(i,Z)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const it={};class rt extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),r=[];i.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),Z)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==it&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return it}}var ot,st,nt;rt.finalized=!0,rt.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const o=r.scopeName,s=U.has(e),n=H&&11===e.nodeType&&!!e.host,a=n&&!B.has(o),c=a?document.createDocumentFragment():e;if(((t,e,r)=>{let o=U.get(e);void 0===o&&(i(e,e.firstChild),U.set(e,o=new T(Object.assign({templateFactory:V},r))),o.appendInto(e)),o.setValue(t),o.commit()})(t,c,Object.assign({templateFactory:L(o)},r)),a){const t=U.get(c);U.delete(c);const r=t.value instanceof v?t.value.template:void 0;I(o,c,r),i(e,e.firstChild),e.appendChild(c),U.set(e,t)}!s&&n&&window.ShadyCSS.styleElement(e.host)},rt.shadowRootOptions={mode:"open"},(nt=ot||(ot={})).language="language",nt.system="system",nt.comma_decimal="comma_decimal",nt.decimal_comma="decimal_comma",nt.space_comma="space_comma",nt.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(st||(st={}));var at=function(t,e,i,r){r=r||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return o.detail=i,t.dispatchEvent(o),o};const ct={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let lt=class extends rt{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}get _tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.tap_action)||{action:"more-info"}}get _hold_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.hold_action)||{action:"none"}}get _double_tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.double_tap_action)||{action:"none"}}render(){if(!this.hass||!this._helpers)return j``;this._helpers.importMoreInfoControl("climate");const t=Object.keys(this.hass.states).filter(t=>"sun"===t.substr(0,t.indexOf(".")));return j`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+ct.required.icon}></ha-icon>
            <div class="title">${ct.required.name}</div>
          </div>
          <div class="secondary">${ct.required.secondary}</div>
        </div>
        ${ct.required.show?j`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map(t=>j`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+ct.actions.icon}></ha-icon>
            <div class="title">${ct.actions.name}</div>
          </div>
          <div class="secondary">${ct.actions.secondary}</div>
        </div>
        ${ct.actions.show?j`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+ct.actions.options.tap.icon}></ha-icon>
                    <div class="title">${ct.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${ct.actions.options.tap.secondary}</div>
                </div>
                ${ct.actions.options.tap.show?j`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+ct.actions.options.hold.icon}></ha-icon>
                    <div class="title">${ct.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${ct.actions.options.hold.secondary}</div>
                </div>
                ${ct.actions.options.hold.show?j`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+ct.actions.options.double_tap.icon}></ha-icon>
                    <div class="title">${ct.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${ct.actions.options.double_tap.secondary}</div>
                </div>
                ${ct.actions.options.double_tap.show?j`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+ct.appearance.icon}></ha-icon>
            <div class="title">${ct.appearance.name}</div>
          </div>
          <div class="secondary">${ct.appearance.secondary}</div>
        </div>
        ${ct.appearance.show?j`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
                <ha-formfield .label=${"Toggle warning "+(this._show_warning?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_warning}
                    .configValue=${"show_warning"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${"Toggle error "+(this._show_error?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_error}
                    .configValue=${"show_error"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
              </div>
            `:""}
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleAction(t){this._toggleThing(t,ct.actions.options)}_toggleOption(t){this._toggleThing(t,ct)}_toggleThing(t,e){const i=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=i,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),at(this,"config-changed",{config:this._config}))}static get styles(){return et`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};t([G({attribute:!1})],lt.prototype,"hass",void 0),t([K()],lt.prototype,"_config",void 0),t([K()],lt.prototype,"_toggle",void 0),t([K()],lt.prototype,"_helpers",void 0),lt=t([X("thermostat-bar-card-editor")],lt);const dt=et`

  #states > * {
    margin-bottom: 8px;
  }

  #states > :last-child {
    margin-bottom: 0px;
  }

  .fixed-width {
    width: 36px;
  }

  thermostat-bar-card-row {
    display: flex;
    flex-grow: 1;
    height: 40px;
  }

  thermostat-bar-card-row > * {
    margin-left: 6px;
    margin-right: 6px;
  }

  thermostat-bar-card-row > :first-child {
    margin-left: 0px;
    margin-right: 6px;
  }
  thermostat-bar-card-row > :last-child {
    margin-left: 6px;
    margin-right: 0px;
  }

  thermostat-bar-card-icon {
    color: var(--icon-color, var(--paper-item-icon-color));
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    position: relative;
  }

  thermostat-bar-card-control {
    display: flex;
  }

  thermostat-bar-card-control-icon {
    cursor: pointer;
    color: var(--paper-item-icon-color);
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    position: relative;
  }

  thermostat-bar-card-control-icon + thermostat-bar-card-control-icon {
    margin-left: 10px;
  }

  thermostat-bar-card-bar {
    cursor: pointer;
    flex-grow: 1;
    position: relative;
  }

  thermostat-bar-card-currentbar {
    background: linear-gradient(
      to right,
      var(--bar-color) var(--bar-percent),
      #0000 var(--bar-percent),
      #0000 var(--bar-percent)
    );
  }
  thermostat-bar-card-targetbar {
    background: linear-gradient(
      to right,
      #0000 var(--bar-percent),
      var(--bar-color) var(--bar-percent),
      var(--bar-color) var(--bar-target-percent),
      #0000 var(--bar-target-percent)
    );
    display: var(--target-display);
    filter: brightness(0.66);
    opacity: 0.33;
  }
  thermostat-bar-card-markerbar {
    background: var(--bar-color);
    filter: brightness(0.75);
    opacity: 50%;
    position: absolute;
    height: 100%;
    width: 2px;
  }

  thermostat-bar-card-backgroundbar {
    background: var(--bar-color);
    filter: brightness(0.5);
    opacity: 0.25;
  }

  thermostat-bar-card-currentbar,
  thermostat-bar-card-backgroundbar,
  thermostat-bar-card-targetbar,
  thermostat-bar-card-textcontent {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: var(--ha-card-border-radius);
  }

  thermostat-bar-card-textcontent {
    align-items: center;
    color: var(--primary-text-color);
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
  }

  thermostat-bar-card-text {
    margin: 12px;
    margin-left: auto;
    opacity: 0.7;
  }

  thermostat-bar-card-icon-indicator {
    display: flex;
    color: var(--icon-color);
    filter: brightness(0.8);
    margin-left: 12px;
  }

  thermostat-bar-card-flip {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;var ht={version:"Version",show_warning:"Show Warning",show_error:"Show Error"},pt={invalid_configuration:"Invalid configuration",no_entities:"No entities passed",entity_not_exist:"Entity does not exist"},ut={common:ht,validation:pt},mt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},gt={common:mt};const ft={en:Object.freeze({__proto__:null,common:ht,validation:pt,default:ut}),nb:Object.freeze({__proto__:null,common:mt,default:gt})};function _t(t,e="",i=""){const r=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],ft[r])}catch(e){o=t.split(".").reduce((t,e)=>t[e],ft.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],ft.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}const vt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class yt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:vt?"100px":"50px",height:vt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime)},r=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?at(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,at(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,at(t,"action",{action:"double_tap"})):at(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",r),t.addEventListener("touchcancel",r),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",r),t.addEventListener("keyup",t=>{13===t.keyCode&&r(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-thermostat-bar-card",yt);const bt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-thermostat-bar-card"))return t.querySelector("action-handler-thermostat-bar-card");const e=document.createElement("action-handler-thermostat-bar-card");return t.appendChild(e),e})();i&&i.bind(t,e)},wt=(St=(t={})=>e=>{bt(e.committer.element,t)},(...t)=>{const e=St(...t);return m.set(e,!0),e});var St;console.info(`%c  THERMOSTAT-BAR-CARD \n%c  ${_t("common.version")} 0.0.1    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"thermostat-bar-card",name:"Thermostat Bar Card",description:"A custom Lovelace card to monitor and control your thermostats"});let xt=class extends rt{static async getConfigElement(){return document.createElement("thermostat-bar-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(_t("validation.invalid_configuration"));if(t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),!t.entities)throw new Error(_t("validation.no_entities"));this.config=t}shouldUpdate(t){return function(t,e,i){if(!e)return!1;if(i.has("config"))return!0;if(!e.entities)return!1;const r=i.get("hass");return!!r&&e.entities.flatMap(t=>Object.values(t)).map(e=>t.states[e]).filter(t=>void 0!==t).some(t=>t!==r.states[t.entity_id])}(this.hass,this.config,t)}render(){return j`
      <ha-card
        .header=${this.config.title}
        tabindex="0"
        .label=${"Thermostat Bar Card: "+(this.config.entities||"No Entity Defined")}
      >
        <div
            id="states"
            class="card-content"
        >
          ${this._createBars()}
        </div>
      </ha-card>
    `}_createBars(){return this.config.entities?this.config.entities.map(t=>this._createBar(t)):[]}_createBar(t){const e=this.hass.states[t.entity_id],i=t.icon,r=e.attributes.unit_of_measurement||"°C",o=e.attributes.temperature||0,s=e.attributes.current_temperature||0,n="heat"===e.state||"auto"===e.state,a="unavailable"===e.state,c="heating"===e.attributes.hvac_action,l=this.calculatePercentage(s),d=this.calculatePercentage(o),h="off"===e.state?"var(--light-primary-color)":"var(--primary-color)",p="heat"===e.state,u=this.isWindowOpen(t.window_sensor),m=s<o?l:d,g=s<o?d:l,f=n&&d>0&&d<100,_=`${this.currentTempAsText(s)} ${r}`,v=this.currentTempAsText(o)+" °";return j`
      <thermostat-bar-card-row>
          <thermostat-bar-card-icon>
            <ha-icon icon="${i}"></ha-icon>
          </thermostat-bar-card-icon>

        <thermostat-bar-card-bar>
          <thermostat-bar-card-backgroundbar
            style="--bar-color: ${h}"
          ></thermostat-bar-card-backgroundbar>
          <thermostat-bar-card-currentbar
            style="--bar-percent: ${l}%; --bar-color: ${h}"
          ></thermostat-bar-card-currentbar>
          ${n?j`
            <thermostat-bar-card-targetbar
              style="--bar-percent: ${m}%; --bar-target-percent: ${g}%; --bar-color: ${h}"
            ></thermostat-bar-card-targetbar>`:""}
          ${f?j`
            <thermostat-bar-card-markerbar
              style="--bar-target-percent: ${d}%; left: calc(${d}% - 1px); --bar-color: ${h}"
            ></thermostat-bar-card-markerbar>`:""}
          <thermostat-bar-card-textcontent
            @action=${()=>this.toggleHvacMode(e)}
            .actionHandler=${wt()}
          >
            <thermostat-bar-card-icon-indicator
              style="--icon-color: ${h}"
            >
              ${c?j`<ha-icon icon="mdi:fire"></ha-icon> `:""}
              ${p?j`<ha-icon icon="mdi:thermometer-alert"></ha-icon> `:""}
              ${u?j`<ha-icon icon="mdi:window-open-variant"></ha-icon> `:""}
            </thermostat-bar-card-icon-indicator>
            <thermostat-bar-card-text>
              ${_}
            </thermostat-bar-card-text>
          </thermostat-bar-card-textcontent>
        </thermostat-bar-card-bar>

        <thermostat-bar-card-control>
          <thermostat-bar-card-control-icon
            @action=${()=>this.decreaseTemperature(e)}
            .actionHandler=${wt()}
          >
            <thermostat-bar-card-flip>
              <ha-icon icon="mdi:thermometer-minus"></ha-icon>
            </thermostat-bar-card-flip>
          </thermostat-bar-card-control-icon>
          <thermostat-bar-card-control-icon
            class="fixed-width"
            @action=${()=>this.toggleHvacMode(e)}
            .actionHandler=${wt()}
          >
            ${n||a?j`${v}`:j`<ha-icon icon="mdi:power"></ha-icon>`}
          </thermostat-bar-card-control-icon>
          <thermostat-bar-card-control-icon
            @action=${()=>this.increaseTemperature(e)}
            .actionHandler=${wt()}
          >
            <ha-icon icon="mdi:thermometer-plus"></ha-icon>
          </thermostat-bar-card-control-icon>
        </thermostat-bar-card-control>
      </thermostat-bar-card-row>
      `}currentTempAsText(t){return 0==t?"-":t.toFixed(1)}isWindowOpen(t){var e;return!!t&&"on"===(null===(e=this.hass.states[t])||void 0===e?void 0:e.state)}increaseTemperature(t){this.changeTemperatureBy(t,.5)}decreaseTemperature(t){this.changeTemperatureBy(t,-.5)}changeTemperatureBy(t,e){const i={entity_id:t.entity_id,temperature:t.attributes.temperature+e};this.hass.callService("climate","set_temperature",i)}calculatePercentage(t){const e=this.config.min_temperature||15;return 100*(t-e)/((this.config.max_temperature||25)-e)}toggleHvacMode(t){const e="auto"===t.state?"off":"auto",i={entity_id:t.entity_id,hvac_mode:e};this.hass.callService("climate","set_hvac_mode",i)}static get styles(){return dt}};t([G({attribute:!1})],xt.prototype,"hass",void 0),t([(t=>K(t))()],xt.prototype,"config",void 0),xt=t([X("thermostat-bar-card")],xt);export{xt as ThermostatBarCard};
