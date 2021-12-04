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
function t(t,e,r,i){var n,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(o<3?n(s):o>3?n(e,r,s):n(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s
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
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,r=null)=>{for(;e!==r;){const r=e.nextSibling;t.removeChild(e),e=r}},i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,o=new RegExp(`${i}|${n}`);class s{constructor(t,e){this.parts=[],this.element=e;const r=[],n=[],s=document.createTreeWalker(e.content,133,null,!1);let c=0,h=-1,u=0;const{strings:p,values:{length:m}}=t;for(;u<m;){const t=s.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:r}=e;let i=0;for(let t=0;t<r;t++)a(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=p[u],r=d.exec(e)[2],i=r.toLowerCase()+"$lit$",n=t.getAttribute(i);t.removeAttribute(i);const s=n.split(o);this.parts.push({type:"attribute",index:h,name:r,strings:s}),u+=s.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,n=e.split(o),s=n.length-1;for(let e=0;e<s;e++){let r,o=n[e];if(""===o)r=l();else{const t=d.exec(o);null!==t&&a(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),r=document.createTextNode(o)}i.insertBefore(r,t),this.parts.push({type:"node",index:++h})}""===n[s]?(i.insertBefore(l(),t),r.push(t)):t.data=n[s],u+=s}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&h!==c||(h++,e.insertBefore(l(),t)),c=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(r.push(t),h--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),u++}}else s.currentNode=n.pop()}for(const t of r)t.parentNode.removeChild(t)}}const a=(t,e)=>{const r=t.length-e.length;return r>=0&&t.slice(r)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:r},parts:i}=t,n=document.createTreeWalker(r,133,null,!1);let o=p(i),s=i[o],a=-1,c=0;const l=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-c,o=p(i,o),s=i[o]}l.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const r=document.createTreeWalker(t,133,null,!1);for(;r.nextNode();)e++;return e},p=(t,e=-1)=>{for(let r=e+1;r<t.length;r++){const e=t[r];if(c(e))return r}return-1};
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
const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),f={},v={};
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
class _{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(const r of this.__parts)void 0!==r&&r.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,s=0,a=0,l=n.nextNode();for(;s<i.length;)if(o=i[s],c(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(r.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=r.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${i} `;class w{constructor(t,e,r,i){this.strings=t,this.values=e,this.type=r,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let o=0;o<t;o++){const t=this.strings[o],s=t.lastIndexOf("\x3c!--");r=(s>-1||r)&&-1===t.indexOf("--\x3e",s+1);const a=d.exec(t);e+=null===a?t+(r?b:n):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==y&&(e=y.createHTML(e)),t.innerHTML=e,t}}
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
 */const S=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class C{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let t=0;t<r.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new $(this)}_getValue(){const t=this.strings,e=t.length-1,r=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=r[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let i="";for(let n=0;n<e;n++){i+=t[n];const e=r[n];if(void 0!==e){const t=e.value;if(S(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||S(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class P{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===v?(this.value=v,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,r="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const r=new _(e,t.processor,this.options),i=r._clone();r.update(t.values),this.__commitNode(i),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let r,i=0;for(const n of t)r=e[i],void 0===r&&(r=new P(this.options),e.push(r),0===i?r.appendIntoPart(this):r.insertAfterPart(e[i-1])),r.setValue(n),r.commit(),i++;i<e.length&&(e.length=i,this.clear(r&&r.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class N extends C{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends ${}let E=!1;(()=>{try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class k{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,r=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function O(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const n=t.strings.join(i);return r=e.keyString.get(n),void 0===r&&(r=new s(t,t.getTemplateElement()),e.keyString.set(n,r)),e.stringsArray.set(t.strings,r),r}const V=new Map,D=new WeakMap;
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
 */const H=new
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
class{handleAttributeExpressions(t,e,r,i){const n=e[0];if("."===n){return new N(t,e.slice(1),r).parts}if("@"===n)return[new k(t,e.slice(1),i.eventContext)];if("?"===n)return[new T(t,e.slice(1),r)];return new C(t,e,r).parts}handleTextExpression(t){return new P(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const R=(t,...e)=>new w(t,e,"html",H)
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
 */,U=(t,e)=>`${t}--${e}`;let Y=!0;void 0===window.ShadyCSS?Y=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Y=!1);const j=t=>e=>{const r=U(e.type,t);let n=V.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(r,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(i);if(o=n.keyString.get(a),void 0===o){const r=e.getTemplateElement();Y&&window.ShadyCSS.prepareTemplateDom(r,t),o=new s(e,r),n.keyString.set(a,o)}return n.stringsArray.set(e.strings,o),o},q=["html","svg"],L=new Set,z=(t,e,r)=>{L.add(t);const i=r?r.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const s=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{q.forEach(e=>{const r=V.get(U(e,t));void 0!==r&&r.keyString.forEach(t=>{const{element:{content:e}}=t,r=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{r.add(t)}),h(t,r)})})})(t);const a=i.content;r?function(t,e,r=null){const{element:{content:i},parts:n}=t;if(null==r)return void i.appendChild(e);const o=document.createTreeWalker(i,133,null,!1);let s=p(n),a=0,c=-1;for(;o.nextNode();){c++;for(o.currentNode===r&&(a=u(e),r.parentNode.insertBefore(e,r));-1!==s&&n[s].index===c;){if(a>0){for(;-1!==s;)n[s].index+=a,s=p(n,s);return}s=p(n,s)}}}(r,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(r){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),h(r,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const B={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},I=(t,e)=>e!==t&&(e==e||t==t),F={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:I};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const i=this._attributeNameForProperty(r,e);void 0!==i&&(this._attributeToPropertyMap.set(i,r),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=F){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdateInternal(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||F}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=I){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,i=e.converter||B,n="function"==typeof i?i:i.fromAttribute;return n?n(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,i=e.converter;return(i&&i.toAttribute||B.toAttribute)(t,r)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=F){const i=this.constructor,n=i._attributeNameForProperty(t,r);if(void 0!==n){const t=i._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const r=this.constructor,i=r._attributeToPropertyMap.get(t);if(void 0!==i){const t=r.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=r._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,r){let i=!0;if(void 0!==t){const n=this.constructor;r=r||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}W.finalized=!0;
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
const J=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),Z=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function X(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):Z(t,e)}function G(t){return X({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class tt{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const r=e.reduce((e,r,i)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+t[i+1],t[0]);return new tt(r,Q)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const rt={};class it extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,r)=>t.reduceRight((t,r)=>Array.isArray(r)?e(r,t):(t.add(r),t),r),r=e(t,new Set),i=[];r.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),Q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==rt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return rt}}it.finalized=!0,it.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,o=D.has(e),s=Y&&11===e.nodeType&&!!e.host,a=s&&!L.has(n),c=a?document.createDocumentFragment():e;if(((t,e,i)=>{let n=D.get(e);void 0===n&&(r(e,e.firstChild),D.set(e,n=new P(Object.assign({templateFactory:O},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:j(n)},i)),a){const t=D.get(c);D.delete(c);const i=t.value instanceof _?t.value.template:void 0;z(n,c,i),r(e,e.firstChild),e.appendChild(c),D.set(e,t)}!o&&s&&window.ShadyCSS.styleElement(e.host)},it.shadowRootOptions={mode:"open"};var nt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ot="[^\\s]+",st=/\[([^]*?)\]/gm;function at(t,e){for(var r=[],i=0,n=t.length;i<n;i++)r.push(t[i].substr(0,e));return r}var ct=function(t){return function(e,r){var i=r[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return i>-1?i:null}};function lt(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var i=0,n=e;i<n.length;i++){var o=n[i];for(var s in o)t[s]=o[s]}return t}var dt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ht=["January","February","March","April","May","June","July","August","September","October","November","December"],ut=at(ht,3),pt={dayNamesShort:at(dt,3),dayNames:dt,monthNamesShort:ut,monthNames:ht,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},mt=lt({},pt),gt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},ft={D:function(t){return String(t.getDate())},DD:function(t){return gt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return gt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return gt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return gt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return gt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return gt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return gt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return gt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return gt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return gt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return gt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+gt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+gt(Math.floor(Math.abs(e)/60),2)+":"+gt(Math.abs(e)%60,2)}},vt=function(t){return+t-1},_t=[null,"[1-9]\\d?"],yt=[null,ot],bt=["isPm",ot,function(t,e){var r=t.toLowerCase();return r===e.amPm[0]?0:r===e.amPm[1]?1:null}],wt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var r=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?r:-r}return 0}],St=(ct("monthNamesShort"),ct("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var xt,Ct,$t,Pt=function(t,e,r){if(void 0===e&&(e=St.default),void 0===r&&(r={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var i=[];e=(e=St[e]||e).replace(st,(function(t,e){return i.push(e),"@@@"}));var n=lt(lt({},mt),r);return(e=e.replace(nt,(function(e){return ft[e](t,n)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();($t=xt||(xt={})).language="language",$t.system="system",$t.comma_decimal="comma_decimal",$t.decimal_comma="decimal_comma",$t.space_comma="space_comma",$t.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ct||(Ct={}));var Tt=function(t,e,r,i){i=i||{},r=null==r?{}:r;var n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=r,t.dispatchEvent(n),n};const Nt={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let Mt=class extends it{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}get _tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.tap_action)||{action:"more-info"}}get _hold_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.hold_action)||{action:"none"}}get _double_tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.double_tap_action)||{action:"none"}}render(){if(!this.hass||!this._helpers)return R``;this._helpers.importMoreInfoControl("climate");const t=Object.keys(this.hass.states).filter(t=>"sun"===t.substr(0,t.indexOf(".")));return R`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Nt.required.icon}></ha-icon>
            <div class="title">${Nt.required.name}</div>
          </div>
          <div class="secondary">${Nt.required.secondary}</div>
        </div>
        ${Nt.required.show?R`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map(t=>R`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Nt.actions.icon}></ha-icon>
            <div class="title">${Nt.actions.name}</div>
          </div>
          <div class="secondary">${Nt.actions.secondary}</div>
        </div>
        ${Nt.actions.show?R`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Nt.actions.options.tap.icon}></ha-icon>
                    <div class="title">${Nt.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${Nt.actions.options.tap.secondary}</div>
                </div>
                ${Nt.actions.options.tap.show?R`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Nt.actions.options.hold.icon}></ha-icon>
                    <div class="title">${Nt.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${Nt.actions.options.hold.secondary}</div>
                </div>
                ${Nt.actions.options.hold.show?R`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Nt.actions.options.double_tap.icon}></ha-icon>
                    <div class="title">${Nt.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${Nt.actions.options.double_tap.secondary}</div>
                </div>
                ${Nt.actions.options.double_tap.show?R`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Nt.appearance.icon}></ha-icon>
            <div class="title">${Nt.appearance.name}</div>
          </div>
          <div class="secondary">${Nt.appearance.secondary}</div>
        </div>
        ${Nt.appearance.show?R`
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
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleAction(t){this._toggleThing(t,Nt.actions.options)}_toggleOption(t){this._toggleThing(t,Nt)}_toggleThing(t,e){const r=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=r,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),Tt(this,"config-changed",{config:this._config}))}static get styles(){return et`
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
    `}};t([X({attribute:!1})],Mt.prototype,"hass",void 0),t([G()],Mt.prototype,"_config",void 0),t([G()],Mt.prototype,"_toggle",void 0),t([G()],Mt.prototype,"_helpers",void 0),Mt=t([J("thermostat-bar-card-editor")],Mt);const Et=et`

  #states > * {
    margin-bottom: 8px;
  }

  #states > :last-child {
    margin-bottom: 0px;
  }

  .fixed-width {
    width: 35px;
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
`;var kt={version:"Version",show_warning:"Show Warning",show_error:"Show Error"},At={invalid_configuration:"Invalid configuration",no_entities:"No entities passed",entity_not_exist:"Entity does not exist"},Ot={common:kt,validation:At},Vt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Dt={common:Vt};const Ht={en:Object.freeze({__proto__:null,common:kt,validation:At,default:Ot}),nb:Object.freeze({__proto__:null,common:Vt,default:Dt})};function Rt(t,e="",r=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce((t,e)=>t[e],Ht[i])}catch(e){n=t.split(".").reduce((t,e)=>t[e],Ht.en)}return void 0===n&&(n=t.split(".").reduce((t,e)=>t[e],Ht.en)),""!==e&&""!==r&&(n=n.replace(e,r)),n}const Ut="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Yt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Ut?"100px":"50px",height:Ut?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const r=t=>{let e,r;this.held=!1,t.touches?(e=t.touches[0].pageX,r=t.touches[0].pageY):(e=t.pageX,r=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,r),this.held=!0},this.holdTime)},i=r=>{r.preventDefault(),["touchend","touchcancel"].includes(r.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?Tt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===r.type&&r.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Tt(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Tt(t,"action",{action:"double_tap"})):Tt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",r,{passive:!0}),t.addEventListener("touchend",i),t.addEventListener("touchcancel",i),t.addEventListener("mousedown",r,{passive:!0}),t.addEventListener("click",i),t.addEventListener("keyup",t=>{13===t.keyCode&&i(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-thermostat-bar-card",Yt);const jt=(t,e)=>{const r=(()=>{const t=document.body;if(t.querySelector("action-handler-thermostat-bar-card"))return t.querySelector("action-handler-thermostat-bar-card");const e=document.createElement("action-handler-thermostat-bar-card");return t.appendChild(e),e})();r&&r.bind(t,e)},qt=(t=>(...e)=>{const r=t(...e);return m.set(r,!0),r})((t={})=>e=>{jt(e.committer.element,t)});console.info(`%c  THERMOSTAT-BAR-CARD \n%c  ${Rt("common.version")} 0.0.1    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"thermostat-bar-card",name:"Thermostat Bar Card",description:"A custom Lovelace card to monitor and control your thermostats"});let Lt=class extends it{static async getConfigElement(){return document.createElement("thermostat-bar-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(Rt("validation.invalid_configuration"));if(t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),!t.entities)throw new Error(Rt("validation.no_entities"));this.config=t}shouldUpdate(t){return function(t,e,r){if(!e)return!1;if(r.has("config"))return!0;if(!e.entities)return!1;const i=r.get("hass");return!!i&&e.entities.flatMap(t=>Object.values(t)).map(e=>t.states[e]).filter(t=>void 0!==t).some(t=>t!==i.states[t.entity_id])}(this.hass,this.config,t)}render(){return R`
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
    `}_createBars(){return this.config.entities?this.config.entities.map(t=>this._createBar(t)):[]}_createBar(t){const e=this.hass.states[t.entity_id],r=t.icon,i=e.attributes.unit_of_measurement||"°C",n=e.attributes.temperature,o=e.attributes.current_temperature,s="off"!==e.state,a="heating"===e.attributes.hvac_action,c=this.calculatePercentage(o),l=this.calculatePercentage(n),d="off"===e.state?"var(--light-primary-color)":"var(--primary-color)",h="heat"===e.state,u=this.isWindowOpen(t.window_sensor),p=o<n?c:l,m=o<n?l:c,g=`${o} ${i}`,f=`${Math.round(n)} ${i}`;return R`
      <thermostat-bar-card-row>
          <thermostat-bar-card-icon>
            <ha-icon icon="${r}"></ha-icon>
          </thermostat-bar-card-icon>

        <thermostat-bar-card-bar>
          <thermostat-bar-card-backgroundbar
            style="--bar-color: ${d}"
          ></thermostat-bar-card-backgroundbar>
          <thermostat-bar-card-currentbar
            style="--bar-percent: ${c}%; --bar-color: ${d}"
          ></thermostat-bar-card-currentbar>
          ${s?R`
            <thermostat-bar-card-targetbar
              style="--bar-percent: ${p}%; --bar-target-percent: ${m}%; --bar-color: ${d}"
            ></thermostat-bar-card-targetbar>
            <thermostat-bar-card-markerbar
              style="--bar-target-percent: ${l}%; left: calc(${l}% - 1px); --bar-color: ${d}"
            ></thermostat-bar-card-markerbar>`:""}
          <thermostat-bar-card-textcontent
            @action=${()=>this.toggleHvacMode(e)}
            .actionHandler=${qt()}
          >
            <thermostat-bar-card-icon-indicator
              style="--icon-color: ${d}"
            >
              ${a?R`<ha-icon icon="mdi:fire"></ha-icon> `:""}
              ${h?R`<ha-icon icon="mdi:thermometer-alert"></ha-icon> `:""}
              ${u?R`<ha-icon icon="mdi:window-open-variant"></ha-icon> `:""}
            </thermostat-bar-card-icon-indicator>
            <thermostat-bar-card-text>
              ${g}
            </thermostat-bar-card-text>
          </thermostat-bar-card-textcontent>
        </thermostat-bar-card-bar>

        <thermostat-bar-card-control>
          <thermostat-bar-card-control-icon
            @action=${()=>this.decreaseTemperature(e)}
            .actionHandler=${qt()}
          >
            <thermostat-bar-card-flip>
              <ha-icon icon="mdi:thermometer-minus"></ha-icon>
            </thermostat-bar-card-flip>
          </thermostat-bar-card-control-icon>
          <thermostat-bar-card-control-icon
            class="fixed-width"
            @action=${()=>this.toggleHvacMode(e)}
            .actionHandler=${qt()}
          >
            ${s?R`${f}`:R`<ha-icon icon="mdi:power"></ha-icon>`}
          </thermostat-bar-card-control-icon>
          <thermostat-bar-card-control-icon
            @action=${()=>this.increaseTemperature(e)}
            .actionHandler=${qt()}
          >
            <ha-icon icon="mdi:thermometer-plus"></ha-icon>
          </thermostat-bar-card-control-icon>
        </thermostat-bar-card-control>
      </thermostat-bar-card-row>
      `}isWindowOpen(t){var e;return!!t&&"on"===(null===(e=this.hass.states[t])||void 0===e?void 0:e.state)}increaseTemperature(t){this.changeTemperatureBy(t,1)}decreaseTemperature(t){this.changeTemperatureBy(t,-1)}changeTemperatureBy(t,e){const r={entity_id:t.entity_id,temperature:t.attributes.temperature+e};this.hass.callService("climate","set_temperature",r)}calculatePercentage(t){const e=this.config.min_temperature||15;return 100*(t-e)/((this.config.max_temperature||25)-e)}toggleHvacMode(t){const e="auto"===t.state?"off":"auto",r={entity_id:t.entity_id,hvac_mode:e};this.hass.callService("climate","set_hvac_mode",r)}static get styles(){return Et}};t([X({attribute:!1})],Lt.prototype,"hass",void 0),t([(t=>G(t))()],Lt.prototype,"config",void 0),Lt=t([J("thermostat-bar-card")],Lt);export{Lt as ThermostatBarCard};
