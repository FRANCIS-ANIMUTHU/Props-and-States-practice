                      //Props
                      //Functional component
// import React from 'react'
import Header from './header'

// //use string
// function Home() {
//     const a="Francis"
//   return (
//     <div>Home
//       <Header name={a}/>
//     </div>
//   )
// }

// export default Home

//Using object
// import React from 'react'

// function Home() {
//     var object={
//         name:'Francis',
//         age:24
//     }
//   return (
//     <div>Home
//         <Header obj={object}/>
//     </div>
//   )
// }

// export default Home

//Event Emiter
// import React from 'react'

// function Home() {
//    const get=(da)=>{
//     console.log('Parent component',da);
//    }
//   return (
//     <div>Home
//      <Header name={get}/>
//     </div>
//   )
// }

// export default Home
 
                      //State
 import React, { Component } from 'react'

export class Home extends Component {
    constructor(){
        super();
        this.state={
            name:'Francis',
            age:24
        }
    }
//  change(){
//         {this.setState()}
//         console.log(this.state);
//     }
  render() {
    console.log(this.state);
    return (
       
      <div>Home
        <button onClick={()=>this.setState({name:'React',age:21})}>Update</button>
      </div>
    )
  }
}

export default Home

