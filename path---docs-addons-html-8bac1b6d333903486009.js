webpackJsonp([0xca6b36c2b23b],{850:function(e,a){e.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note:</p>\n<p><code class="gatsby-code-text">React.addons</code> entry point is deprecated as of React v15.5. The add-ons have moved to separate modules, and some of them have been deprecated.</p>\n</blockquote>\n<p>The React add-ons are a collection of useful utility modules for building React apps. <strong>These should be considered experimental</strong> and tend to change more often than the core.</p>\n<ul>\n<li><a href="create-fragment.html"><code class="gatsby-code-text">createFragment</code></a>, to create a set of externally-keyed children.</li>\n</ul>\n<p>The add-ons below are in the development (unminified) version of React only:</p>\n<ul>\n<li><a href="perf.html"><code class="gatsby-code-text">Perf</code></a>, a performance profiling tool for finding optimization opportunities.</li>\n<li><a href="test-utils.html"><code class="gatsby-code-text">ReactTestUtils</code></a>, simple helpers for writing test cases.</li>\n</ul>\n<h3 id="legacy-add-ons"><a href="#legacy-add-ons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Legacy Add-ons</h3>\n<p>The add-ons below are considered legacy and their use is discouraged. They will keep working in observable future, but there is no further development.</p>\n<ul>\n<li><a href="pure-render-mixin.html"><code class="gatsby-code-text">PureRenderMixin</code></a>. Use <a href="/docs/react-api.html#reactpurecomponent"><code class="gatsby-code-text">React.PureComponent</code></a> instead.</li>\n<li><a href="shallow-compare.html"><code class="gatsby-code-text">shallowCompare</code></a>, a helper function that performs a shallow comparison for props and state in a component to decide if a component should update. We recommend using <a href="/docs/react-api.html#reactpurecomponent"><code class="gatsby-code-text">React.PureComponent</code></a> instead.</li>\n<li><a href="update.html"><code class="gatsby-code-text">update</code></a>. Use <a href="https://github.com/kolodny/immutability-helper"><code class="gatsby-code-text">kolodny/immutability-helper</code></a> instead.</li>\n<li><a href="dom-factories.html"><code class="gatsby-code-text">ReactDOMFactories</code></a>, pre-configured DOM factories to make React easier to use without JSX.</li>\n</ul>\n<h3 id="deprecated-add-ons"><a href="#deprecated-add-ons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deprecated Add-ons</h3>\n<ul>\n<li><a href="two-way-binding-helpers.html"><code class="gatsby-code-text">LinkedStateMixin</code></a> has been deprecated.</li>\n<li><a href="animation.html"><code class="gatsby-code-text">TransitionGroup</code> and <code class="gatsby-code-text">CSSTransitionGroup</code></a> have been deprecated in favor of <a href="https://github.com/reactjs/react-transition-group/tree/v1-stable">their drop-in replacements</a>.</li>\n</ul>\n<h2 id="using-react-with-add-ons"><a href="#using-react-with-add-ons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using React with Add-ons</h2>\n<p>You can install the add-ons individually from npm (e.g. <code class="gatsby-code-text">npm install react-addons-create-fragment</code>) and import them:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> createFragment <span class="token keyword">from</span> <span class="token string">\'react-addons-create-fragment\'</span><span class="token punctuation">;</span> <span class="token comment">// ES6</span>\n<span class="token keyword">var</span> createFragment <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-addons-create-fragment\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ES5 with npm</span>\n</code></pre>\n      </div>\n<p>When using a CDN, you can use <code class="gatsby-code-text">react-with-addons.js</code> instead of <code class="gatsby-code-text">react.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react@15/dist/react-with-addons.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>The add-ons will be available via the <code class="gatsby-code-text">React.addons</code> global (e.g. <code class="gatsby-code-text">React.addons.TestUtils</code>).</p>',frontmatter:{title:"Add-Ons",next:null,prev:null},fields:{path:"docs/addons.md",slug:"docs/addons.html"}}},pathContext:{slug:"docs/addons.html"}}}});
//# sourceMappingURL=path---docs-addons-html-8bac1b6d333903486009.js.map