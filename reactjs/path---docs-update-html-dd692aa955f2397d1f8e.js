webpackJsonp([0x770e8dfe767c],{832:function(n,a){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note:</p>\n<p><code>update</code> is a legacy add-on. Use <a href="https://github.com/kolodny/immutability-helper"><code>immutability-helper</code></a> instead.</p>\n</blockquote>\n<p><strong>Importing</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> update <span class="token keyword">from</span> <span class="token string">\'react-addons-update\'</span><span class="token punctuation">;</span> <span class="token comment">// ES6</span>\n<span class="token keyword">var</span> update <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-addons-update\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ES5 with npm</span>\n</code></pre>\n      </div>\n<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p>React lets you use whatever style of data management you want, including mutation. However, if you can use immutable data in performance-critical parts of your application it’s easy to implement a fast <a href="/docs/react-component.html#shouldcomponentupdate"><code>shouldComponentUpdate()</code></a> method to significantly speed up your app.</p>\n<p>Dealing with immutable data in JavaScript is more difficult than in languages designed for it, like <a href="http://clojure.org/">Clojure</a>. However, we’ve provided a simple immutability helper, <code>update()</code>, that makes dealing with this type of data much easier, <em>without</em> fundamentally changing how your data is represented. You can also take a look at Facebook’s <a href="https://facebook.github.io/immutable-js/docs/">Immutable-js</a> and the <a href="/docs/advanced-performance.html">Advanced Performance</a> section for more detail on Immutable-js.</p>\n<h3 id="the-main-idea"><a href="#the-main-idea" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Main Idea</h3>\n<p>If you mutate data like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>myData<span class="token punctuation">.</span>x<span class="token punctuation">.</span>y<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n<span class="token comment">// or...</span>\nmyData<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You have no way of determining which data has changed since the previous copy has been overwritten. Instead, you need to create a new copy of <code>myData</code> and change only the parts of it that need to be changed. Then you can compare the old copy of <code>myData</code> with the new one in <code>shouldComponentUpdate()</code> using triple-equals:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> newData <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>myData<span class="token punctuation">)</span><span class="token punctuation">;</span>\nnewData<span class="token punctuation">.</span>x<span class="token punctuation">.</span>y<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\nnewData<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Unfortunately, deep copies are expensive, and sometimes impossible. You can alleviate this by only copying objects that need to be changed and by reusing the objects that haven’t changed. Unfortunately, in today’s JavaScript this can be cumbersome:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> newData <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span>myData<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  x<span class="token punctuation">:</span> <span class="token function">extend</span><span class="token punctuation">(</span>myData<span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    y<span class="token punctuation">:</span> <span class="token function">extend</span><span class="token punctuation">(</span>myData<span class="token punctuation">.</span>x<span class="token punctuation">.</span>y<span class="token punctuation">,</span> <span class="token punctuation">{</span>z<span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  a<span class="token punctuation">:</span> <span class="token function">extend</span><span class="token punctuation">(</span>myData<span class="token punctuation">.</span>a<span class="token punctuation">,</span> <span class="token punctuation">{</span>b<span class="token punctuation">:</span> myData<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>While this is fairly performant (since it only makes a shallow copy of <code>log n</code> objects and reuses the rest), it’s a big pain to write. Look at all the repetition! This is not only annoying, but also provides a large surface area for bugs.</p>\n<h2 id="update"><a href="#update" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>update()</code></h2>\n<p><code>update()</code> provides simple syntactic sugar around this pattern to make writing this code easier. This code becomes:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> update <span class="token keyword">from</span> <span class="token string">\'react-addons-update\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> newData <span class="token operator">=</span> <span class="token function">update</span><span class="token punctuation">(</span>myData<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  x<span class="token punctuation">:</span> <span class="token punctuation">{</span>y<span class="token punctuation">:</span> <span class="token punctuation">{</span>z<span class="token punctuation">:</span> <span class="token punctuation">{</span>$<span class="token keyword">set</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  a<span class="token punctuation">:</span> <span class="token punctuation">{</span>b<span class="token punctuation">:</span> <span class="token punctuation">{</span>$push<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>While the syntax takes a little getting used to (though it’s inspired by <a href="http://docs.mongodb.org/manual/core/crud-introduction/#query">MongoDB’s query language</a>) there’s no redundancy, it’s statically analyzable and it’s not much more typing than the mutative version.</p>\n<p>The <code>$</code>-prefixed keys are called <em>commands</em>. The data structure they are “mutating” is called the <em>target</em>.</p>\n<h2 id="available-commands"><a href="#available-commands" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Available Commands</h2>\n<ul>\n<li><code>{$push: array}</code> <code>push()</code> all the items in <code>array</code> on the target.</li>\n<li><code>{$unshift: array}</code> <code>unshift()</code> all the items in <code>array</code> on the target.</li>\n<li><code>{$splice: array of arrays}</code> for each item in <code>arrays</code> call <code>splice()</code> on the target with the parameters provided by the item.</li>\n<li><code>{$set: any}</code> replace the target entirely.</li>\n<li><code>{$merge: object}</code> merge the keys of <code>object</code> with the target.</li>\n<li><code>{$apply: function}</code> passes in the current value to the function and updates it with the new returned value.</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<h3 id="simple-push"><a href="#simple-push" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Simple push</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> initialArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> newArray <span class="token operator">=</span> <span class="token function">update</span><span class="token punctuation">(</span>initialArray<span class="token punctuation">,</span> <span class="token punctuation">{</span>$push<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => [1, 2, 3, 4]</span>\n</code></pre>\n      </div>\n<p><code>initialArray</code> is still <code>[1, 2, 3]</code>.</p>\n<h3 id="nested-collections"><a href="#nested-collections" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nested collections</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> collection <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> newCollection <span class="token operator">=</span> <span class="token function">update</span><span class="token punctuation">(</span>collection<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token punctuation">{</span>$splice<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// => [1, 2, {a: [12, 13, 14, 15]}]</span>\n</code></pre>\n      </div>\n<p>This accesses <code>collection</code>’s index <code>2</code>, key <code>a</code>, and does a splice of one item starting from index <code>1</code> (to remove <code>17</code>) while inserting <code>13</code> and <code>14</code>.</p>\n<h3 id="updating-a-value-based-on-its-current-one"><a href="#updating-a-value-based-on-its-current-one" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Updating a value based on its current one</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> newObj <span class="token operator">=</span> <span class="token function">update</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>b<span class="token punctuation">:</span> <span class="token punctuation">{</span>$apply<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// => {a: 5, b: 6}</span>\n<span class="token comment">// This is equivalent, but gets verbose for deeply nested collections:</span>\n<span class="token keyword">const</span> newObj2 <span class="token operator">=</span> <span class="token function">update</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>b<span class="token punctuation">:</span> <span class="token punctuation">{</span>$<span class="token keyword">set</span><span class="token punctuation">:</span> obj<span class="token punctuation">.</span>b <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3 id="shallow-merge"><a href="#shallow-merge" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>(Shallow) Merge</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> newObj <span class="token operator">=</span> <span class="token function">update</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>$merge<span class="token punctuation">:</span> <span class="token punctuation">{</span>b<span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span> c<span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => {a: 5, b: 6, c: 7}</span>\n</code></pre>\n      </div>',frontmatter:{title:"Immutability Helpers",next:null,prev:null},fields:{path:"docs/addons-update.md",slug:"docs/update.html"}}},pathContext:{slug:"docs/update.html"}}}});
//# sourceMappingURL=path---docs-update-html-dd692aa955f2397d1f8e.js.map