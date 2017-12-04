import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// function formaterName(user) {
//     return user.firstName + ''+ user.lastName;
// }
//
// const user = {
//     firstName : 'harper',
//     lastName : 'per'
// };
// const es = [
//   <h1>111</h1>, <h1>22222</h1>
// ];
// const elemet = (
//     <h1>
//         {es}
//     </h1>
// );

//这种方式不可以定义组件
let hellomes = function (props) {
    return <h1>hello {props.name}</h1>
}
//定义组件
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
ReactDOM.render(<Welcome name='john'></Welcome>,document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
