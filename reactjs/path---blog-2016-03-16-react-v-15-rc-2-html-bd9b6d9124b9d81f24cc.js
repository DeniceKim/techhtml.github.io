webpackJsonp([0xd51f97faa969],{722:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Today we’re releasing a second release candidate for version 15. Primarily this is to address 2 issues, but we also picked up a few small changes from new contributors, including some improvements to some of our new warnings.</p>\n<p>The most pressing change that was made is to fix a bug in our new code that removes <code>&#x3C;span></code>s, as discussed in the original RC1 post. Specifically we have some code that takes a different path in IE11 and Edge due to the speed of some DOM operations. There was a bug in this code which didn’t break out of the optimization for <code>DocumentFragment</code>s, resulting in text not appearing at all. Thanks to the several people who <a href="https://github.com/facebook/react/issues/6246">reported this</a>.</p>\n<p>The other change is to our SVG code. In RC1 we had made the decision to pass through all attributes directly. This led to <a href="https://github.com/facebook/react/issues/6211">some confusion with <code>class</code> vs <code>className</code></a> and ultimately led us to reconsider our position on the approach. Passing through all attributes meant that we would have two different patterns for using React where things like hyphenated attributes would work for SVG but not HTML. In the future, we <em>might</em> change our approach to the problem for HTML as well but in the meantime, maintaining consistency is important. So we reverted the changes that allowed the attributes to be passed through and instead expanded the SVG property list to include all attributes that are in the spec. We believe we have everything now but definitely <a href="https://github.com/facebook/react/issues/1657#issuecomment-197031403">let us know</a> if we missed anything. It was and still is our intent to support the full range of SVG tags and attributes in this release.</p>\n<p>Thanks again to everybody who has tried the RC1 and reported issues. It has been extremely important and we wouldn’t be able to do this without your help!</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>We recommend using React from <code>npm</code> and using a tool like browserify or webpack to build your code into a single bundle. To install the two packages:</p>\n<ul>\n<li><code>npm install --save react@15.0.0-rc.2 react-dom@15.0.0-rc.2</code></li>\n</ul>\n<p>Remember that by default, React runs extra checks and provides helpful warnings in development mode. When deploying your app, set the <code>NODE_ENV</code> environment variable to <code>production</code> to use the production build of React which does not include the development warnings and runs significantly faster.</p>\n<p>If you can’t use <code>npm</code> yet, we provide pre-built browser builds for your convenience, which are also available in the <code>react</code> package on bower.</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-15.0.0-rc.2.js">https://fb.me/react-15.0.0-rc.2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-15.0.0-rc.2.min.js">https://fb.me/react-15.0.0-rc.2.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-15.0.0-rc.2.js">https://fb.me/react-with-addons-15.0.0-rc.2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-15.0.0-rc.2.min.js">https://fb.me/react-with-addons-15.0.0-rc.2.min.js</a>  </li>\n<li><strong>React DOM</strong> (include React in the page before React DOM)<br>\nDev build with warnings: <a href="https://fb.me/react-dom-15.0.0-rc.2.js">https://fb.me/react-dom-15.0.0-rc.2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-dom-15.0.0-rc.2.min.js">https://fb.me/react-dom-15.0.0-rc.2.min.js</a>  </li>\n</ul>',excerpt:"Today we’re releasing a second release candidate for version 15. Primarily this is to address 2 issues, but we also picked up a few small changes from new contributors, including some improvements to some of our new warnings. The most pressing change that was made is to fix a bug in our new code that removes  <span> s, as discussed in the original RC1 post. Specifically we have some code that takes a different path in IE11 and Edge due to the speed of some DOM operations. There was a bug in this…",frontmatter:{title:"React v15.0 Release Candidate 2",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"March 15, 2016",path:"blog/2016-03-16-react-v15-rc2.md",slug:"/blog/2016/03/16/react-v15-rc2.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}}]}},pathContext:{slug:"/blog/2016/03/16/react-v15-rc2.html"}}}});
//# sourceMappingURL=path---blog-2016-03-16-react-v-15-rc-2-html-bd9b6d9124b9d81f24cc.js.map