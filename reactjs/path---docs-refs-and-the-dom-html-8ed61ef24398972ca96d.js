webpackJsonp([87547260598082],{820:function(n,s){n.exports={data:{markdownRemark:{html:'<p>In the typical React dataflow, <a href="/docs/components-and-props.html">props</a> are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.</p>\n<h3 id="when-to-use-refs"><a href="#when-to-use-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>When to Use Refs</h3>\n<p>There are a few good use cases for refs:</p>\n<ul>\n<li>Managing focus, text selection, or media playback.</li>\n<li>Triggering imperative animations.</li>\n<li>Integrating with third-party DOM libraries.</li>\n</ul>\n<p>Avoid using refs for anything that can be done declaratively.</p>\n<p>For example, instead of exposing <code>open()</code> and <code>close()</code> methods on a <code>Dialog</code> component, pass an <code>isOpen</code> prop to it.</p>\n<h3 id="dont-overuse-refs"><a href="#dont-overuse-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Don’t Overuse Refs</h3>\n<p>Your first inclination may be to use refs to “make things happen” in your app. If this is the case, take a moment and think more critically about where state should be owned in the component hierarchy. Often, it becomes clear that the proper place to “own” that state is at a higher level in the hierarchy. See the <a href="/docs/lifting-state-up.html">Lifting State Up</a> guide for examples of this.</p>\n<h3 id="adding-a-ref-to-a-dom-element"><a href="#adding-a-ref-to-a-dom-element" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding a Ref to a DOM Element</h3>\n<p>React supports a special attribute that you can attach to any component. The <code>ref</code> attribute takes a callback function, and the callback will be executed immediately after the component is mounted or unmounted.</p>\n<p>When the <code>ref</code> attribute is used on an HTML element, the <code>ref</code> callback receives the underlying DOM element as its argument. For example, this code uses the <code>ref</code> callback to store a reference to a DOM node:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">CustomTextInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>focusTextInput <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>focusTextInput<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">focusTextInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token comment">// Explicitly focus the text input using the raw DOM API</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Use the `ref` callback to store a reference to the text input DOM</span>\n    <span class="token comment">// element in an instance field (for example, this.textInput).</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>input\n          type<span class="token operator">=</span><span class="token string">"text"</span>\n<span class="gatsby-highlight-code-line">          ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> input<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n</span>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n          <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Focus the text input<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>focusTextInput<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>React will call the <code>ref</code> callback with the DOM element when the component mounts, and call it with <code>null</code> when it unmounts. <code>ref</code> callbacks are invoked before <code>componentDidMount</code> or <code>componentDidUpdate</code> lifecycle hooks.</p>\n<p>Using the <code>ref</code> callback just to set a property on the class is a common pattern for accessing DOM elements. The preferred way is to set the property in the <code>ref</code> callback like in the above example. There is even a shorter way to write it: <code>ref={input => this.textInput = input}</code>. </p>\n<h3 id="adding-a-ref-to-a-class-component"><a href="#adding-a-ref-to-a-class-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding a Ref to a Class Component</h3>\n<p>When the <code>ref</code> attribute is used on a custom component declared as a class, the <code>ref</code> callback receives the mounted instance of the component as its argument. For example, if we wanted to wrap the <code>CustomTextInput</code> above to simulate it being clicked immediately after mounting:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">AutoFocusTextInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">.</span><span class="token function">focusTextInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>CustomTextInput\n<span class="gatsby-highlight-code-line">        ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> input<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n</span>    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Note that this only works if <code>CustomTextInput</code> is declared as a class:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="gatsby-highlight-code-line"><span class="token keyword">class</span> <span class="token class-name">CustomTextInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n</span>  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="refs-and-functional-components"><a href="#refs-and-functional-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Refs and Functional Components</h3>\n<p><strong>You may not use the <code>ref</code> attribute on functional components</strong> because they don’t have instances:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="gatsby-highlight-code-line"><span class="token keyword">function</span> <span class="token function">MyFunctionalComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span>  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token comment">// This will *not* work!</span>\n</span>    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>MyFunctionalComponent\n        ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> input<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>You should convert the component to a class if you need a ref to it, just like you do when you need lifecycle methods or state.</p>\n<p>You can, however, <strong>use the <code>ref</code> attribute inside a functional component</strong> as long as you refer to a DOM element or a class component:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">CustomTextInput</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token comment">// textInput must be declared here so the ref callback can refer to it</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token keyword">let</span> textInput <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</span>\n  <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    textInput<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span>input\n        type<span class="token operator">=</span><span class="token string">"text"</span>\n<span class="gatsby-highlight-code-line">        ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> textInput <span class="token operator">=</span> input<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n</span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n        <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Focus the text input<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="exposing-dom-refs-to-parent-components"><a href="#exposing-dom-refs-to-parent-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Exposing DOM Refs to Parent Components</h3>\n<p>In rare cases, you might want to have access to a child’s DOM node from a parent component. This is generally not recommended because it breaks component encapsulation, but it can occasionally be useful for triggering focus or measuring the size or position of a child DOM node.</p>\n<p>While you could <a href="#adding-a-ref-to-a-class-component">add a ref to the child component</a>, this is not an ideal solution, as you would only get a component instance rather than a DOM node. Additionally, this wouldn’t work with functional components.</p>\n<p>Instead, in such cases we recommend exposing a special prop on the child. The child would take a function prop with an arbitrary name (e.g. <code>inputRef</code>) and attach it to the DOM node as a <code>ref</code> attribute. This lets the parent pass its ref callback to the child’s DOM node through the component in the middle.</p>\n<p>This works both for classes and for functional components.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">CustomTextInput</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>inputRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomTextInput</span>\n<span class="gatsby-highlight-code-line">        <span class="token attr-name">inputRef</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>el <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputElement <span class="token operator">=</span> el<span class="token punctuation">}</span></span>\n</span>      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In the example above, <code>Parent</code> passes its ref callback as an <code>inputRef</code> prop to the <code>CustomTextInput</code>, and the <code>CustomTextInput</code> passes the same function as a special <code>ref</code> attribute to the <code>&#x3C;input></code>. As a result, <code>this.inputElement</code> in <code>Parent</code> will be set to the DOM node corresponding to the <code>&#x3C;input></code> element in the <code>CustomTextInput</code>.</p>\n<p>Note that the name of the <code>inputRef</code> prop in the above example has no special meaning, as it is a regular component prop. However, using the <code>ref</code> attribute on the <code>&#x3C;input></code> itself is important, as it tells React to attach a ref to its DOM node.</p>\n<p>This works even though <code>CustomTextInput</code> is a functional component. Unlike the special <code>ref</code> attribute which can <a href="#refs-and-functional-components">only be specified for DOM elements and for class components</a>, there are no restrictions on regular component props like <code>inputRef</code>.</p>\n<p>Another benefit of this pattern is that it works several components deep. For example, imagine <code>Parent</code> didn’t need that DOM node, but a component that rendered <code>Parent</code> (let’s call it <code>Grandparent</code>) needed access to it. Then we could let the <code>Grandparent</code> specify the <code>inputRef</code> prop to the <code>Parent</code>, and let <code>Parent</code> “forward” it to the <code>CustomTextInput</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">CustomTextInput</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>inputRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      My input<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomTextInput</span> <span class="token attr-name">inputRef</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>inputRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token keyword">class</span> <span class="token class-name">Grandparent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Parent</span>\n<span class="gatsby-highlight-code-line">        <span class="token attr-name">inputRef</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>el <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputElement <span class="token operator">=</span> el<span class="token punctuation">}</span></span>\n</span>      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Here, the ref callback is first specified by <code>Grandparent</code>. It is passed to the <code>Parent</code> as a regular prop called <code>inputRef</code>, and the <code>Parent</code> passes it to the <code>CustomTextInput</code> as a prop too. Finally, the <code>CustomTextInput</code> reads the <code>inputRef</code> prop and attaches the passed function as a <code>ref</code> attribute to the <code>&#x3C;input></code>. As a result, <code>this.inputElement</code> in <code>Grandparent</code> will be set to the DOM node corresponding to the <code>&#x3C;input></code> element in the <code>CustomTextInput</code>.</p>\n<p>All things considered, we advise against exposing DOM nodes whenever possible, but this can be a useful escape hatch. Note that this approach requires you to add some code to the child component. If you have absolutely no control over the child component implementation, your last option is to use <a href="/docs/react-dom.html#finddomnode"><code>findDOMNode()</code></a>, but it is discouraged.</p>\n<h3 id="legacy-api-string-refs"><a href="#legacy-api-string-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Legacy API: String Refs</h3>\n<p>If you worked with React before, you might be familiar with an older API where the <code>ref</code> attribute is a string, like <code>"textInput"</code>, and the DOM node is accessed as <code>this.refs.textInput</code>. We advise against it because string refs have <a href="https://github.com/facebook/react/pull/8333#issuecomment-271648615">some issues</a>, are considered legacy, and <strong>are likely to be removed in one of the future releases</strong>. If you’re currently using <code>this.refs.textInput</code> to access refs, we recommend the callback pattern instead.</p>\n<h3 id="caveats"><a href="#caveats" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Caveats</h3>\n<p>If the <code>ref</code> callback is defined as an inline function, it will get called twice during updates, first with <code>null</code> and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one. You can avoid this by defining the <code>ref</code> callback as a bound method on the class, but note that it shouldn’t matter in most cases.</p>',frontmatter:{title:"Refs and the DOM",next:null,prev:null},fields:{path:"docs/refs-and-the-dom.md",
slug:"docs/refs-and-the-dom.html"}}},pathContext:{slug:"docs/refs-and-the-dom.html"}}}});
//# sourceMappingURL=path---docs-refs-and-the-dom-html-8ed61ef24398972ca96d.js.map