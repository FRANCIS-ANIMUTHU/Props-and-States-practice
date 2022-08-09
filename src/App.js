//import React from 'react'

// import React, { Component } from 'react'
// //state modified
// export class App extends Component {
//     constructor(){
//         super();
//         this.state={
//             name:'Francis',
//         };
//     }
//   render() {
//     console.log(this);

//     return (
//       <div>App</div>
//     )
//   }
//  }
// export default App;

// import React, { Component } from 'react';
//import Home from './Home';

// export class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       name:'Francis',
//       age:24
//     }

//   }

//state value updated and state modified

//   changename=()=>{
//  // console.log(this);
//     this.setState({name:'React',age:23});
//     console.log(this.state);
//       }
//    render() {
//     console.log(this);
//     return (
//       <div>{this.state.name}{this.state.age} <Home name={this.state.name} age={this.state.age}/>
//       <button onClick={this.changename}>Change name</button>
//       </div>

//     )
//   }

//import React from "react";
//import "./Sample.scss";

// function App() {
//   return (
//     <>
//       <div className="container">
//         <div className="navi">
//           {<img src="./logo192.png"></img>}
//           <a href="">Home</a>
//           <a href="">About</a>
//           <a href="">Contact</a>
//           <a href="">Portfolio</a>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="left">
//           <h1>Vegetables</h1>
//           {<img src="./vegitables.jpg" width={"400px"} height={"400px"}></img>}
//         </div>
//         <div className="right">
//           <h1>Fruits</h1>
//           {<img src="./fruits.jpg" width={"400px"} height={"400px"}></img>}
//         </div>
//       </div>
//       <div className="about">
//         <h2>About</h2>
//         <p>
//           Create a Professional CV in Minutes. Step-by-Step CV Creation Online!
//           Perfect CV in Minute. Get a Resume in 15 Minutes. Simple To Use,
//           Create Your Resume with Proven, View Gallery. Browse Blog. Leave Us A
//           Message.
//         </p>
//       </div>
//     </>
//   );
//}

//export default App;

//access the "this" in normal function

// render() {

//     return (
//       <div>{this.state.name}{this.state.age} <Home name={this.state.name} age={this.state.age}/>
//       <button onClick={this.changename.bind(this)}>Change name</button>
//       </div>

//     )
//   }
//}

//export default App;


//lifecycle methods
// import React, { Component } from 'react'

// export class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       name:'React'
//     }
//   }
//   change=()=>{
//     this.setState({name:'JS'})
//   }
//   render() {
//     return (
//       <div>
//         {this.state.name};
//         <button onClick={()=>this.change()}>Change Value</button>
//       </div>
//     )
//   }
// componentDidMount(){
//   console.log('Print componentDidmount');
// }
// componentWillUnmount(){
// console.log('Print componentWillUnmount');
// }
// componentWillMount(){
//   console.log('Print componentWillMount');
// }
// componentDidUpdate(){
//   console.log('Print componentDidUpdate');
// }

// }

// export default App


