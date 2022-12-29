import React, { useState} from 'react';
import './index';


const Display = (props,theme) =>{
    return(
      <div className='dispcomp'>
        <h2 className='heading'>{props.heading}</h2>
        <p className='date' >{props.date}</p>
        <p className='content' >{props.content}</p>
      </div>
    );
  };

function App() {
  
  const [theme, setTheme] = useState('light');
    
  return (
    <div className='App' style={{backgroundColor:theme === "light"?"#FFFFFF":"#282c35"}}>
      <div className='main'>
        <div className='top'>
          <h1 className='title' style={{color:theme === "light"?"#000000":"#FFFFFF"}}>Overreacted</h1>
          <button className='toggle-button' onClick={()=>{
            setTheme((prev)=>{
              if(prev==="light"){
                return "dark"
              }else{
                return "light"
              }
            })
          }} style={{color:theme === "light"?"#FFFFFF":"#000000", backgroundColor:theme ==="light"?"#d7336a":"#f8aac1"}}>Toggle</button>
        </div>
        <div className='components' style={{color:theme === "light"?"#000000":"#FFFFFF"}}>
          <Display heading="The WET Codbase" date="Sunday 4th, 2020 11 min read" content="Come waste your time With me." theme="prev"></Display>
          <Display heading="Goodbye, Clean Code" date="Friday 22nd, 2019 5 min read" content="Let clean code guide you. Then let it go."></Display>
          <Display heading="My Decade In Review" date="Saturday 11th, 2018 S min read" content="A personal reflection."></Display>
        </div>
      </div>
    </div>
  );
}

export default App;
