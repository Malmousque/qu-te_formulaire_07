
import React from 'react';
const url = "";
const config={ };



class Formulaire extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            poster: "",
            comment : "",

        }
        this.submitForm = this.submitForm.bind(this);
       this.onChange = this.onChange.bind(this);
       this.sendCard = this.sendCard.bind(this);
    }
   


    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    submitForm = (e) => {
        e.preventDefault();
    }

    //url = " http://92.175.11.66:3001/api/quests/movies/";
    //config = {
     //   method: "POST",
      //  body: JSON.stringify(this.state),
      //  headers:{
       //     "Content-Type": "application/json",
     //} };
    
    
    sendCard () {
    fetch("http://92.175.11.66:3001/api/quests/movies/", {
        method: 'POST',
        body : JSON.stringify(this.state),
        headers:{
            "Content-Type": "application/json",
     } })
     
    .then(res => res.json())
    .then(res => {
        
        if(res.error) {
            alert(res.error)
        }else{
            alert('Contribtion successfully sent')
        }
    }).catch(e => {
        console.error(e);
        alert('ERROR !!!');

    } )
  console.log(this.body);
  console.log(fetch);
    
  
    }
    




    render(){
        
        console.log(url);
        console.log(config);
        
        return(
        
            
            <div>
            <form onSubmit={this.submitForm}/>
            <fieldset>
            <legend>Film favori</legend>
            <div className= "film title">
            <label>Film name</label>
            <input
            type="text"
            id= "name"
            name= "name"
            onChange={this.onChange}
            value={this.state.name}/>
            

            
            </div>
            
            <div className= "Poster">
            <label>Poster's URL</label>
            <input
            type="poster"
            id="Poster"
            name="poster"
            onChange={this.onChange}
            value= {this.state.poster}/>
            </div>

            <div className="commit">
            <label>My comment</label>
            <textarea rows="20" cols="50"
            type="textarea"
            id="comment"
            name="comment"
            onChange={this.onChange}
            value={this.state.comment}/>
            
            </div>
            
            <button onClick={this.sendCard}>Send</button>
            </fieldset>

            
            
            </div>
        )
        
    } 
}



export default Formulaire;
