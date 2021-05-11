import React  from 'react';
import './App.css';
import myWonderfulImage from "./myImage.jpg";
class App extends React.Component  {
  constructor(props){
    super(props)
this.state = {
  fullname:"Marwa Amri",
  Profession:"An electrical Engineer and a Fullstack Js Developer.",
  bio:"I'm an electrical Engineer with two years of experience.I love to code because it is usable art,so I follow now an intensive training that will allow me to launch a career as a Full Stack JS developer and master the technologies. ",
  imgSrc:<img  style={{width:200 ,height:200 ,borderRadius:100 }} src={myWonderfulImage} alt ='myImage'/>,
  show: false,
  time:0,
};
}
componentDidMount() {
  setInterval(() => {
    this.setState((prevState) => ({
    time: prevState.time + 1,
    }));
  }, 500);
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
       {this.state.show && (
         <>
     <h1 style={{color:"brown" }}> {this.state.fullname}</h1>
     <h3 style={{color:"rgb(39, 6, 70)" ,}}> {this.state.Profession}</h3>
     <div> {this.state.imgSrc}</div>       
     <p  style={{textAlign:"center" }}>{this.state.bio}</p>
     </>
    )}
     <button onClick={this.handleClick}> show profile</button>
     <p style={{color:"blue"}}>The last component was mounted since: {this.state.time} seconds</p>
 
  </div>  
  );
  }     
}
export default App;
