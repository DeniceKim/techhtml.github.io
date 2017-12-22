webpackJsonp([0xa62eae39b787],{736:function(a,t){a.exports={data:{markdownRemark:{html:'<p>In the past, React used to ignore unknown DOM attributes. If you wrote JSX with an attribute that React doesn’t recognize, React would just skip it. For example, this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// Your code:</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">mycustomattribute</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>something<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>would render an empty div to the DOM with React 15:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// React 15 output:</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>In React 16, we are making a change. Now, any unknown attributes will end up in the DOM:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// React 16 output:</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">mycustomattribute</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>something<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h2 id="why-are-we-changing-this"><a href="#why-are-we-changing-this" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why Are We Changing This?</h2>\n<p>React has always provided a JavaScript-centric API to the DOM. Since React components often take both custom and DOM-related props, it makes sense for React to use the <code>camelCase</code> convention just like the DOM APIs:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>This has not changed. However, the way we enforced it in the past forced us to maintain a whitelist of all valid React DOM attributes in the bundle:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// ...</span>\nsummary<span class="token punctuation">:</span> <span class="token string">\'summary\'</span><span class="token punctuation">,</span>\ntabIndex<span class="token punctuation">:</span> <span class="token string">\'tabindex\'</span>\ntarget<span class="token punctuation">:</span> <span class="token string">\'target\'</span><span class="token punctuation">,</span>\ntitle<span class="token punctuation">:</span> <span class="token string">\'title\'</span><span class="token punctuation">,</span>\n<span class="token comment">// ...</span>\n</code></pre>\n      </div>\n<p>This had two downsides:</p>\n<ul>\n<li>\n<p>You could not <a href="https://github.com/facebook/react/issues/140">pass a custom attribute</a>. This is useful for supplying browser-specific non-standard attributes, trying new DOM APIs, and integrating with opinionated third-party libraries.</p>\n</li>\n<li>\n<p>The attribute list kept growing over time, but most React canonical attribute names are already valid in the DOM. Removing most of the whitelist helped us reduce the bundle size a little bit.</p>\n</li>\n</ul>\n<p>With the new approach, both of these problems are solved. With React 16, you can now pass custom attributes to all HTML and SVG elements, and React doesn’t have to include the whole attribute whitelist in the production version.</p>\n<p><strong>Note that you should still use the canonical React naming for known attributes:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// Yes, please</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token comment">// Warning: Invalid DOM property `tabindex`. Did you mean `tabIndex`?</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>In other words, the way you use DOM components in React hasn’t changed, but now you have some new capabilities.</p>\n<h2 id="should-i-keep-data-in-custom-attributes"><a href="#should-i-keep-data-in-custom-attributes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Should I Keep Data in Custom Attributes?</h2>\n<p>No. We don’t encourage you to keep data in DOM attributes. Even if you have to, <code>data-</code> attributes are probably a better approach, but in most cases data should be kept in React component state or external stores.</p>\n<p>However, the new feature is handy if you need to use a non-standard or a new DOM attribute, or if you need to integrate with a third-party library that relies on such attributes.</p>\n<h2 id="data-and-aria-attributes"><a href="#data-and-aria-attributes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Data and ARIA Attributes</h2>\n<p>Just like before, React lets you pass <code>data-</code> and <code>aria-</code> attributes freely:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-foo</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>42<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Close<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onClose<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>This has not changed.</p>\n<p><a href="/docs/accessibility.html">Accessibility</a> is very important, so even though React 16 passes any attributes through, it still validates that <code>aria-</code> props have correct names in development mode, just like React 15 did.</p>\n<h2 id="migration-path"><a href="#migration-path" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Migration Path</h2>\n<p>We have included <a href="/warnings/unknown-prop.html">a warning about unknown attributes</a> since <a href="https://github.com/facebook/react/releases/tag/v15.2.0">React 15.2.0</a> which came out more than a year ago. The vast majority of third-party libraries have already updated their code. If your app doesn’t produce warnings with React 15.2.0 or higher, this change should not require modifications in your application code.</p>\n<p>If you still accidentally forward non-DOM props to DOM components, with React 16 you will start seeing those attributes in the DOM, for example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">myData</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>[Object object]<span class="token punctuation">\'</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>This is somewhat safe (the browser will just ignore them) but we recommend to fix these cases when you see them. One potential hazard is if you pass an object that implements a custom <code>toString()</code> or <code>valueOf()</code> method that throws. Another possible issue is that legacy HTML attributes like <code>align</code> and <code>valign</code> will now be passed to the DOM. They used to be stripped out because React didn’t support them.</p>\n<p>To avoid these problems, we suggest to fix the warnings you see in React 15 before upgrading to React 16.</p>\n<h2 id="changes-in-detail"><a href="#changes-in-detail" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changes in Detail</h2>\n<p>We’ve made a few other changes to make the behavior more predictable and help ensure you’re not making mistakes. We don’t anticipate that these changes are likely to break real-world applications.</p>\n<p><strong>These changes only affect DOM components like <code>&#x3C;div></code>, not your own components.</strong>  </p>\n<p>Below is a detailed list of them.</p>\n<ul>\n<li>\n<p><strong>Unknown attributes with string, number, and object values:</strong>  </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">mycustomattribute</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">mycustomattribute</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">42</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">mycustomattribute</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>myObject<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>React 15: Warns and ignores them.<br>\nReact 16: Converts values to strings and passes them through.</p>\n<p><em>Note: attributes starting with <code>on</code> are not passed through as an exception because this could become a potential security hole.</em></p>\n</li>\n<li>\n<p><strong>Known attributes with a different canonical React name:</strong>  </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hi<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>React 15: Warns and ignores them.<br>\nReact 16: Warns but converts values to strings and passes them through.</p>\n<p><em>Note: always use the canonical React naming for all supported attributes.</em></p>\n</li>\n<li>\n<p><strong>Non-boolean attributes with boolean values:</strong>  </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>React 15: Converts booleans to strings and passes them through.<br>\nReact 16: Warns and ignores them.</p>\n</li>\n<li>\n<p><strong>Non-event attributes with function values:</strong>  </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>React 15: Converts functions to strings and passes them through.<br>\nReact 16: Warns and ignores them.</p>\n</li>\n<li>\n<p><strong>Attributes with Symbol values:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>React 15: Crashes.<br>\nReact 16: Warns and ignores them.</p>\n</li>\n<li>\n<p><strong>Attributes with <code>NaN</code> values:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabIndex</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>React 15: Converts <code>NaN</code>s to strings and passes them through.<br>\nReact 16: Converts <code>NaN</code>s to strings and passes them through with a warning.</p>\n</li>\n</ul>\n<p>While testing this release, we have also <a href="https://github.com/facebook/react/blob/master/fixtures/attribute-behavior/AttributeTableSnapshot.md">created an automatically generated table</a> for all known attributes to track potential regressions.</p>\n<h2 id="try-it"><a href="#try-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Try It!</h2>\n<p>You can try the change in <a href="https://codepen.io/gaearon/pen/gxNVdP?editors=0010">this CodePen</a>.<br>\nIt uses React 16 RC, and you can <a href="https://github.com/facebook/react/issues/10294">help us by testing the RC in your project!</a></p>\n<h2 id="thanks"><a href="#thanks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thanks</h2>\n<p>This effort was largely driven by <a href="https://github.com/nhunzaker">Nathan Hunzaker</a> who has been a <a href="https://github.com/facebook/react/pulls?q=is:pr+author:nhunzaker+is:closed">prolific outside contributor to React</a>.</p>\n<p>You can find his work on this issue in several PRs over the course of last year: <a href="https://github.com/facebook/react/pull/6459">#6459</a>, <a href="https://github.com/facebook/react/pull/7311">#7311</a>, <a href="https://github.com/facebook/react/pull/10229">#10229</a>, <a href="https://github.com/facebook/react/pull/10397">#10397</a>, <a href="https://github.com/facebook/react/pull/10385">#10385</a>, and <a href="https://github.com/facebook/react/pull/10470">#10470</a>.</p>\n<p>Major changes in a popular project can take a lot of time and research. Nathan demonstrated perseverance and commitment to getting this change through, and we are very thankful to him for this and other efforts.</p>\n<p>We would also like to thank <a href="https://github.com/aweary">Brandon Dail</a> and <a href="https://github.com/jquense">Jason Quense</a> for their invaluable help maintaining React this year.</p>\n<h2 id="future-work"><a href="#future-work" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Future Work</h2>\n<p>We are not changing how <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements">custom elements</a> work in React 16, but there are <a href="https://github.com/facebook/react/issues/7249">existing discussions</a> about setting properties instead of attributes, and we might revisit this in React 17. Feel free to chime in if you’d like to help!</p>',excerpt:"In the past, React used to ignore unknown DOM attributes. If you wrote JSX with an attribute that React doesn’t recognize, React would just skip it. For example, this: would render an empty div to the DOM with React 15: In React 16, we are making a change. Now, any unknown attributes will end up in the DOM: Why Are We Changing This? React has always provided a JavaScript-centric API to the DOM. Since React components often take both custom and DOM-related props, it makes sense for React to use…",frontmatter:{title:"DOM Attributes in React 16",next:null,prev:null,author:[{frontmatter:{name:"Dan Abramov",url:"https://twitter.com/dan_abramov"}}]},fields:{date:"September 07, 2017",path:"blog/2017-09-08-dom-attributes-in-react-16.md",slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}}]}},pathContext:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}}});
//# sourceMappingURL=path---blog-2017-09-08-dom-attributes-in-react-16-html-c32ae252f9d6101c0bc7.js.map