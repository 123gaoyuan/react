webpackJsonp([8129464394175],{947:function(n,e){n.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"import React from \'react\';\\nimport ReactDOM from \'react-dom\';\\n\\nconst CIRCLE_SIZE = 85;\\n\\nclass DragBox extends React.Component {\\n  state = {\\n    hasCapture: false,\\n    circleLeft: 80,\\n    circleTop: 80,\\n  };\\n  isDragging = false;\\n  previousLeft = 0;\\n  previousTop = 0;\\n\\n  onDown = event => {\\n    this.isDragging = true;\\n    event.target.setPointerCapture(event.pointerId);\\n\\n    // We store the initial coordinates to be able to calculate the changes\\n    // later on.\\n    this.extractPositionDelta(event);\\n  };\\n\\n  onMove = event => {\\n    if (!this.isDragging) {\\n      return;\\n    }\\n    const {left, top} = this.extractPositionDelta(event);\\n\\n    this.setState(({circleLeft, circleTop}) => ({\\n      circleLeft: circleLeft + left,\\n      circleTop: circleTop + top,\\n    }));\\n  };\\n\\n  onUp = event => (this.isDragging = false);\\n  onGotCapture = event => this.setState({hasCapture: true});\\n  onLostCapture = event =>\\n    this.setState({hasCapture: false});\\n\\n  extractPositionDelta = event => {\\n    const left = event.pageX;\\n    const top = event.pageY;\\n    const delta = {\\n      left: left - this.previousLeft,\\n      top: top - this.previousTop,\\n    };\\n    this.previousLeft = left;\\n    this.previousTop = top;\\n    return delta;\\n  };\\n\\n  render() {\\n    const {hasCapture, circleLeft, circleTop} = this.state;\\n\\n    const boxStyle = {\\n      border: \'1px solid #d9d9d9\',\\n      margin: \'10px 0 20px\',\\n      minHeight: 400,\\n      width: \'100%\',\\n      position: \'relative\',\\n    };\\n\\n    const circleStyle = {\\n      width: CIRCLE_SIZE,\\n      height: CIRCLE_SIZE,\\n      borderRadius: CIRCLE_SIZE / 2,\\n      position: \'absolute\',\\n      left: circleLeft,\\n      top: circleTop,\\n      backgroundColor: hasCapture ? \'blue\' : \'green\',\\n      touchAction: \'none\',\\n    };\\n\\n    return (\\n      <div style={boxStyle}>\\n        <div\\n          style={circleStyle}\\n          onPointerDown={this.onDown}\\n          onPointerMove={this.onMove}\\n          onPointerUp={this.onUp}\\n          onPointerCancel={this.onUp}\\n          onGotPointerCapture={this.onGotCapture}\\n          onLostPointerCapture={this.onLostCapture}\\n        />\\n      </div>\\n    );\\n  }\\n}\\n\\nReactDOM.render(\\n  <DragBox />,\\n  document.getElementById(\'root\')\\n);\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-16-4-release-blog-post-pointer-events-example-1c6c3aaecba24517195f.js.map