import React from 'react';
import ReactDOM from 'react-dom';
import Example from './page/Example'
import Example2 from './page/Example2'
import UseEffectDemo from './page/UseEffectDemo'
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