webpackJsonp([0xf03234397700],{942:function(e,n){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"// highlight-next-line\\nconst ThemeContext = React.createContext(\'light\');\\n\\nclass ThemeProvider extends React.Component {\\n  state = {theme: \'light\'};\\n\\n  render() {\\n    // highlight-range{2-4}\\n    return (\\n      <ThemeContext.Provider value={this.state.theme}>\\n        {this.props.children}\\n      </ThemeContext.Provider>\\n    );\\n  }\\n}\\n\\nclass ThemedButton extends React.Component {\\n  render() {\\n    // highlight-range{2-4}\\n    return (\\n      <ThemeContext.Consumer>\\n        {theme => <Button theme={theme} />}\\n      </ThemeContext.Consumer>\\n    );\\n  }\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-16-3-release-blog-post-context-example-1430bba73d30e1c1853e.js.map