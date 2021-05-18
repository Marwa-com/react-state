import React  from 'react';
import './App.css';
import myWonderfulImage from "./myImage.jpg";
import Profile from './Profile';
class App extends React.Component  {
  constructor(props){
    super(props)
this.state = {
  fullName:"Marwa Amri",
 profession:"An electrical Engineer and a Fullstack Js Developer.",
  bio:"I'm an electrical Engineer with two years of experience.I love to code because it is usable art,so I follow now an intensive training that will allow me to launch a career as a Full Stack JS developer and master the technologies. ",
  imgSrc:<img  style={{width:200 ,height:200 ,borderRadius:100 }} src={myWonderfulImage} alt ='myImage'/>,
  show: false,
  time:0,
};
}

handleClick = () => {
  this.setState({
    ...this.state,
    show: !this.state.show
  });
};
render() {  
  return (
  <div className="app">
    <button onClick={this.handleClick}> {this.state.show? 'hide profile' : ' show profile '} </button>
       {this.state.show &&  <Profile fullName={this.state.fullName} profession={this.state.profession} bio={this.state.bio}  imgSrc={this.state.imgSrc}/>
}
  </div>  
  );
  }    
}

export default App;
