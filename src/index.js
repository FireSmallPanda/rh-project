import React from 'react';
import ReactDOM from 'react-dom';
import Example from './page/Example'
import Example2 from './page/Example2'
import UseEffectDemo from './page/UseEffectDemo'
import UseContextDemo from './page/useContextDemo'
import UseReducerDemo from './page/UseReducerDemo'
import UseRedux from './page/useRedux/useRedux.js'
import UseMemoDemo from './page/useMemoDemo.js'
import UseRefDemo from './page/useRefDemo.js'

import UseCallbackDemo from './page/useCallbackDemo.js'

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
ReactDOM.render(
  <Example />,
  document.getElementById('hook1')
);
// useState
ReactDOM.render(
  <Example2 />,
  document.getElementById('hook2')
);
// UseEffect Demo
ReactDOM.render(
  <UseEffectDemo />,
  document.getElementById('hook3')
);
// useContext Demo
ReactDOM.render(
  <UseContextDemo />,
  document.getElementById('hook4')
);
// useReducerDemo
ReactDOM.render(
  <UseReducerDemo />,
  document.getElementById('hook5')
);
// useRedux
ReactDOM.render(
  <UseRedux />,
  document.getElementById('hook6')
);
// UseMemoDemo
ReactDOM.render(
  <UseMemoDemo />,
  document.getElementById('hook7')
);
// UseRef
ReactDOM.render(
  <UseRefDemo />,
  document.getElementById('hook8')
);
// UseRef
ReactDOM.render(
  <UseCallbackDemo />,
  document.getElementById('hook9')
);