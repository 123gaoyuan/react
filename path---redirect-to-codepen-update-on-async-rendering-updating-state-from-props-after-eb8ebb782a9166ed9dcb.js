webpackJsonp([0xe96befbfdae7],{1004:function(n,t){n.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"// After\\nclass ExampleComponent extends React.Component {\\n  // Initialize state in constructor,\\n  // Or with a property initializer.\\n  // highlight-range{1-4}\\n  state = {\\n    isScrollingDown: false,\\n    lastRow: null,\\n  };\\n\\n  // highlight-range{1-8}\\n  static getDerivedStateFromProps(nextProps, prevState) {\\n    if (nextProps.currentRow !== prevState.lastRow) {\\n      return {\\n        isScrollingDown:\\n          nextProps.currentRow > prevState.lastRow,\\n        lastRow: nextProps.currentRow,\\n      };\\n    }\\n\\n    // Return null to indicate no change to state.\\n    return null;\\n  }\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-update-on-async-rendering-updating-state-from-props-after-eb8ebb782a9166ed9dcb.js.map