import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './header.js';
import Home from './Home';

//using react create element and render
//  const element=React.createElement('h1',{},'Francis');
//  const element1=React.createElement('h2',{},'Maass');
// const element2=React.createElement('div',{},[element,element1]);
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(element2);

//using JXL create element and render
// const myelement=<h1>Hello World</h1>
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);

//using parent element JXL
// const myelement=<div>
//     <h1>Hello</h1>
//     <h2>World</h2>
//     <p>Welcome</p>
//     <ul>Back to you</ul><br></br>
//     <a>Home</a>
// </div>

//inside the element variable name
// const a='Francis';
// const element=<h1>{a}</h1>;


//apply condition based element
// const element=<h1>{false? 'yes': 'no'}</h1>
//  const root=ReactDOM.createRoot(document.getElementById('root'));
//  root.render(element);


//Class
// class Output{
//      getname() {
//         document.getElementById('root').innerHTML='Francis Maass';
//     }
//     getage(){
//         document.getElementById('root').innerText='Love'
//     }
// }
// var object=new output();
// object.getname();
// object.getage();
//root.render(<App/>)


//function component multiple
// function Header(){
//      return <div>Header</div>
// }
// function Banner(){
//     return <div>Banner</div>
//   }
//   function Footer(){
//     return <div>Footer</div>
//   }
//   function Home(){
//     return <div>Home
//         <Header/>
//         <Banner/>
//         <Footer/>
//     </div>
//   }


//css style applied at based variable name
// const styles={
//     color:'red',
//     textAlign:'center',
// }
// function Header(){
//          return <div style={styles}>Header</div>
// }



//Style applied direct function
// function Header(){
//     return <div style={{
//         color:'red',
//         textAlign:'center',
// }}
//  >   
//     Header</div>
// }

//class component react
// class Example{
// constructor(){
//   this.name="React";
// }
//  getinput() {
//   console.log(`${this.name}`);
// }
// }
// var obj=new Example();
// obj.getinput();

// class Example{
//   constructor(){
//     this.name="Francis";
//     this.age=24;
//   }
//   getbio(){
//     console.log(this.name,this.age);
//   }
// }
// var obj=new Example();
// obj.getbio();



//class component JS
// function Example(){
//   this.name="Francis";
//   this.age=24;

// Example().prototype.getinput()
//   console.log(this.name);
// }
// var obj=new Example();
// obj.getinput();


//Inheritance
// class Sample{
//   constructor(){
//     this.name="Francis";
//     this.age=24;
//   }
//   getname(){
//     console.log(this.name);
//   }
// }
// class child extends Sample{
//   constructor(){
//     super();
//     console.log(this.name,this.age);
//   }
// }
// var obj=new child();
// obj.getname();




//bind()
// var obj={
//   name:'Francis',
//   age:24,
//    a:function(){
// console.log(this.name);
//  }
// }
// var obj2={
//   name:'React',
//   age:24
// }
// var output=obj.a.bind(obj2)
// output();

//Hooks
{/* useState */}
// const Home=()=>{
//   const [name, setname]=useState('React');
//   const [age, setage]=useState( 25);
//   return <div>Function {name}{age} 
//   <button onClick={()=>setname('Francis')}>Update</button>
//   <button onClick={()=>setage( 30)}>Update2</button>
//   </div>
// }

//useEffect
// const Home=()=>{
//   const [name, setname]=useState('React');
//   const [age, setage]=useState( 25);
// //there are three lifecycle methods called componentdidmount,componentwillunmount, componentdidupdate
//   useEffect(()=>{
//     console.log('usseffect');
//   });
  

// //componentdidmount only call
// useEffect(()=>{
//   console.log('usseffect');
// },[]);

// //componentdidupdate only call
// useEffect(()=>{
//   console.log('usseffect');
// },[{name}]);

// //componentwillunmount only call
// useEffect(()=>{
//   return ()=>{
//   console.log('usseffect');
//   }
// });





//   return <div>Function {name}{age} 
//   <button onClick={()=>setname('Francis')}>Update</button>
//   <button onClick={()=>setage( 30)}>Update2</button>
//   </div>
// }





  const root=ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Home/>);
 
  
  
  