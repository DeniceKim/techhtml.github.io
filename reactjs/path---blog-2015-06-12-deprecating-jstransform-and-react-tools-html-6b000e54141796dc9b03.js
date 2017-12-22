webpackJsonp([0xc088c44e88b3],{700:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Today we’re announcing the deprecation of react-tools and JSTransform.</p>\n<p>As many people have noticed already, React and React Native have both switched their respective build systems to make use of <a href="http://babeljs.io/">Babel</a>. This replaced <a href="https://github.com/facebook/jstransform">JSTransform</a>, the source transformation tool that we wrote at Facebook. JSTransform has been really good for us over the past several years, however as the JavaScript language continues to evolve, the architecture we used has begun to show its age. We’ve faced maintenance issues and lagged behind implementing new language features. Last year, Babel (previously 6to5) exploded onto the scene, implementing new features at an amazing pace. Since then it has evolved a solid plugin API, and implemented some of our non-standard language features (JSX and Flow type annotations).</p>\n<p>react-tools has always been a very thin wrapper around JSTransform. It has served as a great tool for the community to get up and running, but at this point we’re ready to <a href="https://www.youtube.com/watch?v=moSFlvxnbgk">let it go</a>. We won’t ship a new version for v0.14.</p>\n<h2 id="migrating-to-babel"><a href="#migrating-to-babel" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Migrating to Babel</h2>\n<p>Many people in the React and broader JavaScript community have already adopted Babel. It has <a href="http://babeljs.io/docs/setup/">integrations with a number of tools</a>. Depending on your tool, you’ll want to read up on the instructions.</p>\n<p>We’ve been working with the Babel team as we started making use of it and we’re confident that it will be the right tool to use with React.</p>\n<h2 id="other-deprecations"><a href="#other-deprecations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Other Deprecations</h2>\n<h3 id="esprima-fb"><a href="#esprima-fb" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>esprima-fb</h3>\n<p>As a result of no longer maintaining JSTransform, we no longer have a need to maintain our Esprima fork (<a href="https://github.com/facebook/esprima/">esprima-fb</a>). The upstream Esprima and other esprima-based forks, like Espree, have been doing an excellent job of supporting new language features recently. If you have a need of an esprima-based parser, we encourage you to look into using one of those.</p>\n<p>Alternatively, if you need to parse JSX, take a look at <a href="https://github.com/marijnh/acorn">acorn</a> parser in combination with <a href="https://github.com/RReverser/acorn-jsx">acorn-jsx</a> plugin which is used inside of Babel and thus always supports the latest syntax.</p>\n<h3 id="jsxtransformer"><a href="#jsxtransformer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSXTransformer</h3>\n<p>JSXTransformer is another tool we built specifically for consuming JSX in the browser. It was always intended as a quick way to prototype code before setting up a build process. It would look for <code>&#x3C;script></code> tags with <code>type="text/jsx"</code> and then transform and run. This ran the same code that react-tools ran on the server. Babel ships with <a href="https://babeljs.io/docs/usage/browser/">a nearly identical tool</a>, which has already been integrated into <a href="https://jsbin.com/">JS Bin</a>.</p>\n<p>We’ll be deprecating JSXTransformer, however the current version will still be available from various CDNs and Bower.</p>',excerpt:"Today we’re announcing the deprecation of react-tools and JSTransform. As many people have noticed already, React and React Native have both switched their respective build systems to make use of  Babel . This replaced  JSTransform , the source transformation tool that we wrote at Facebook. JSTransform has been really good for us over the past several years, however as the JavaScript language continues to evolve, the architecture we used has begun to show its age. We’ve faced maintenance issues…",frontmatter:{title:"Deprecating JSTransform and react-tools",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"June 11, 2015",path:"blog/2015-06-12-deprecating-jstransform-and-react-tools.md",slug:"/blog/2015/06/12/deprecating-jstransform-and-react-tools.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}}]}},pathContext:{slug:"/blog/2015/06/12/deprecating-jstransform-and-react-tools.html"}}}});
//# sourceMappingURL=path---blog-2015-06-12-deprecating-jstransform-and-react-tools-html-6b000e54141796dc9b03.js.map