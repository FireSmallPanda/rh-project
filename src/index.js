import React from 'react';
import ReactDOM from 'react-dom';
import Example from './page/Example'
import Example2 from './page/Example2'
import UseEffectDemo from './page/UseEffectDemo'
import UseContextDemo from './page/useContextDemo'
import useReducerDemo from './page/useReducerDemo'
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
  <useReducerDemo />,
  document.getElementById('hook4')
);