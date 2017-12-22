webpackJsonp([0xe3ae7d1678bd],{783:function(n,e){n.exports={data:{markdownRemark:{html:'<p>This reference guide documents the <code>SyntheticEvent</code> wrapper that forms part of React’s Event System. See the <a href="/docs/handling-events.html">Handling Events</a> guide to learn more.</p>\n<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p>Your event handlers will be passed instances of <code>SyntheticEvent</code>, a cross-browser wrapper around the browser’s native event. It has the same interface as the browser’s native event, including <code>stopPropagation()</code> and <code>preventDefault()</code>, except the events work identically across all browsers.</p>\n<p>If you find that you need the underlying browser event for some reason, simply use the <code>nativeEvent</code> attribute to get it. Every <code>SyntheticEvent</code> object has the following attributes:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>boolean bubbles\nboolean cancelable\nDOMEventTarget currentTarget\nboolean defaultPrevented\nnumber eventPhase\nboolean isTrusted\nDOMEvent nativeEvent\n<span class="token keyword">void</span> <span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nboolean <span class="token function">isDefaultPrevented</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">void</span> <span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nboolean <span class="token function">isPropagationStopped</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nDOMEventTarget target\nnumber timeStamp\nstring type\n</code></pre>\n      </div>\n<blockquote>\n<p>Note:</p>\n<p>As of v0.14, returning <code>false</code> from an event handler will no longer stop event propagation. Instead, <code>e.stopPropagation()</code> or <code>e.preventDefault()</code> should be triggered manually, as appropriate.</p>\n</blockquote>\n<h3 id="event-pooling"><a href="#event-pooling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Event Pooling</h3>\n<p>The <code>SyntheticEvent</code> is pooled. This means that the <code>SyntheticEvent</code> object will be reused and all properties will be nullified after the event callback has been invoked.\nThis is for performance reasons.\nAs such, you cannot access the event in an asynchronous way.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">onClick</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => nullified object.</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => "click"</span>\n  <span class="token keyword">const</span> eventType <span class="token operator">=</span> event<span class="token punctuation">.</span>type<span class="token punctuation">;</span> <span class="token comment">// => "click"</span>\n\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => null</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventType<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => "click"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// Won\'t work. this.state.clickEvent will only contain null values.</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>clickEvent<span class="token punctuation">:</span> event<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// You can still export event properties.</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>eventType<span class="token punctuation">:</span> event<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Note:</p>\n<p>If you want to access the event properties in an asynchronous way, you should call <code>event.persist()</code> on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code.</p>\n</blockquote>\n<h2 id="supported-events"><a href="#supported-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Supported Events</h2>\n<p>React normalizes events so that they have consistent properties across different browsers.</p>\n<p>The event handlers below are triggered by an event in the bubbling phase. To register an event handler for the capture phase, append <code>Capture</code> to the event name; for example, instead of using <code>onClick</code>, you would use <code>onClickCapture</code> to handle the click event in the capture phase.</p>\n<ul>\n<li><a href="#clipboard-events">Clipboard Events</a></li>\n<li><a href="#composition-events">Composition Events</a></li>\n<li><a href="#keyboard-events">Keyboard Events</a></li>\n<li><a href="#focus-events">Focus Events</a></li>\n<li><a href="#form-events">Form Events</a></li>\n<li><a href="#mouse-events">Mouse Events</a></li>\n<li><a href="#selection-events">Selection Events</a></li>\n<li><a href="#touch-events">Touch Events</a></li>\n<li><a href="#ui-events">UI Events</a></li>\n<li><a href="#wheel-events">Wheel Events</a></li>\n<li><a href="#media-events">Media Events</a></li>\n<li><a href="#image-events">Image Events</a></li>\n<li><a href="#animation-events">Animation Events</a></li>\n<li><a href="#transition-events">Transition Events</a></li>\n<li><a href="#other-events">Other Events</a></li>\n</ul>\n<hr>\n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reference</h2>\n<h3 id="clipboard-events"><a href="#clipboard-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Clipboard Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onCopy onCut onPaste</code></pre>\n      </div>\n<p>Properties:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>DOMDataTransfer clipboardData\n</code></pre>\n      </div>\n<hr>\n<h3 id="composition-events"><a href="#composition-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Composition Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onCompositionEnd onCompositionStart onCompositionUpdate</code></pre>\n      </div>\n<p>Properties:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>string data\n</code></pre>\n      </div>\n<hr>\n<h3 id="keyboard-events"><a href="#keyboard-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Keyboard Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onKeyDown onKeyPress onKeyUp</code></pre>\n      </div>\n<p>Properties:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>boolean altKey\nnumber charCode\nboolean ctrlKey\nboolean <span class="token function">getModifierState</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\nstring key\nnumber keyCode\nstring locale\nnumber location\nboolean metaKey\nboolean repeat\nboolean shiftKey\nnumber which\n</code></pre>\n      </div>\n<p>The <code>key</code> property can take any of the values documented in the <a href="https://www.w3.org/TR/uievents-key/#named-key-attribute-values">DOM Level 3 Events spec</a>.</p>\n<hr>\n<h3 id="focus-events"><a href="#focus-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Focus Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onFocus onBlur</code></pre>\n      </div>\n<p>These focus events work on all elements in the React DOM, not just form elements.</p>\n<p>Properties:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>DOMEventTarget relatedTarget\n</code></pre>\n      </div>\n<hr>\n<h3 id="form-events"><a href="#form-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Form Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onChange onInput onInvalid onSubmit</code></pre>\n      </div>\n<p>For more information about the onChange event, see <a href="/docs/forms.html">Forms</a>.</p>\n<hr>\n<h3 id="mouse-events"><a href="#mouse-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mouse Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit\nonDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave\nonMouseMove onMouseOut onMouseOver onMouseUp</code></pre>\n      </div>\n<p>The <code>onMouseEnter</code> and <code>onMouseLeave</code> events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase.</p>\n<p>Properties:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>boolean altKey\nnumber button\nnumber buttons\nnumber clientX\nnumber clientY\nboolean ctrlKey\nboolean <span class="token function">getModifierState</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\nboolean metaKey\nnumber pageX\nnumber pageY\nDOMEventTarget relatedTarget\nnumber screenX\nnumber screenY\nboolean shiftKey\n</code></pre>\n      </div>\n<hr>\n<h3 id="selection-events"><a href="#selection-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Selection Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onSelect</code></pre>\n      </div>\n<hr>\n<h3 id="touch-events"><a href="#touch-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Touch Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onTouchCancel onTouchEnd onTouchMove onTouchStart</code></pre>\n      </div>\n<p>Properties:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>boolean altKey\nDOMTouchList changedTouches\nboolean ctrlKey\nboolean <span class="token function">getModifierState</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\nboolean metaKey\nboolean shiftKey\nDOMTouchList targetTouches\nDOMTouchList touches\n</code></pre>\n      </div>\n<hr>\n<h3 id="ui-events"><a href="#ui-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>UI Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onScroll</code></pre>\n      </div>\n<p>Properties:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>number detail\nDOMAbstractView view\n</code></pre>\n      </div>\n<hr>\n<h3 id="wheel-events"><a href="#wheel-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Wheel Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onWheel</code></pre>\n      </div>\n<p>Properties:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>number deltaMode\nnumber deltaX\nnumber deltaY\nnumber deltaZ\n</code></pre>\n      </div>\n<hr>\n<h3 id="media-events"><a href="#media-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Media Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted\nonEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay\nonPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend\nonTimeUpdate onVolumeChange onWaiting</code></pre>\n      </div>\n<hr>\n<h3 id="image-events"><a href="#image-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Image Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onLoad onError</code></pre>\n      </div>\n<hr>\n<h3 id="animation-events"><a href="#animation-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Animation Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onAnimationStart onAnimationEnd onAnimationIteration</code></pre>\n      </div>\n<p>Properties:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>string animationName\nstring pseudoElement\nfloat elapsedTime\n</code></pre>\n      </div>\n<hr>\n<h3 id="transition-events"><a href="#transition-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Transition Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onTransitionEnd</code></pre>\n      </div>\n<p>Properties:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>string propertyName\nstring pseudoElement\nfloat elapsedTime\n</code></pre>\n      </div>\n<hr>\n<h3 id="other-events"><a href="#other-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Other Events</h3>\n<p>Event names:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>onToggle</code></pre>\n      </div>',frontmatter:{title:"SyntheticEvent",next:null,prev:null},fields:{path:"docs/reference-events.md",slug:"docs/events.html"}}},pathContext:{slug:"docs/events.html"}}}});
//# sourceMappingURL=path---docs-events-html-4602073abfe69c3eeef4.js.map