import React from 'react'
import './App.css';
class Person extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Person:{ 
        fullName:"Saidi Akrem",
        bio:"I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.", 
        imgSrc:"https://mastersofscale.com/wp-content/uploads/sites/2/2017/05/mark_zuckerberg-768x768.jpg",
         profession:"Full stack devlopper"},
         shows:true,
         mountingTime:0, 

      };
    }
     componentDidMount()
     {
        setInterval(()=>{
            this.setState({mountingTime:this.state.mountingTime+=1})
        },1000)
     }
    change=()=>{
        this.setState({shows:!this.state.shows})
        this.setState({mountingTime:0})
    }

    render() {
      return (
        <div>
            {this.state.shows?<> <h1>Hi it's me {this.state.Person.fullName}</h1>
          <img src={this.state.Person.imgSrc} width='250px'></img> 
          <h2>I'm :{this.state.Person.profession}</h2>
          <h3>Something About me: {this.state.Person.bio}</h3>
          <p>Time: {this.state.mountingTime}</p>
          </>:
          <p>Please Clic ON to show person !</p>
            }
         <button onClick={this.change}>ON/OFF</button> 
        </div>
      );
    }
  }
  export default Person