
import React from 'react';
import './App.css';
import users from "./users.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ironhackersList: users,
      search:"",
      student:true,
      teacher: true,
      campus: ''
      } 
    }


handleTyping = event => {
  const target = event.target; 
  const value = target.type === "checkbox" ? target.checked :target.value;
  const name = target.name;
  console.log(name , value)


  this.setState({
    [name]: value

  
  })
  }

//  
    render()  {

      // [ ]
      const options = [...new Set(users.map(eachuser => eachuser.campus))].map(eachcampus =>{
        return <option value= {eachcampus} key={eachcampus}> {eachcampus}</option>
      })

      const filteredUsers = users.filter( eachuser => {
        return this.state[eachuser.role]
        && `${eachuser.firstName} ${eachuser.lastName}`.toLowerCase().includes(this.state.search.toLowerCase())
         && ((eachuser.campus === this.state.campus) || !this.state.campus)
      })
      
      console.log("filtered", filteredUsers)

    const displayironhackers = filteredUsers.map((eachironhacker, index) => {
       
    return (
     
      <tr className="p2"  key={index} >
      <td >
        <h3 className="p2" >{eachironhacker.firstName} </h3>
      </td>
      <td>
      <h3 className="p2">{eachironhacker.lastName} </h3>
      </td>
      <td>
      <h3 className="p2">{eachironhacker.campus} </h3>
      </td>
      <td>
      <h3 className="p2">{eachironhacker.role} </h3>
      </td>
     
      </tr>
          )
            })


     return (
      <div className= "App-header">
       <h1>Iron Books</h1>
     
      <form >
        <label htmlFor="search"></label>
        <input className="input"  
         type="text" 
           name= "search"
           id="search"
           value=  {this.state.search}
           onChange= {this.handleTyping} 
         />
         <label htmlFor="">
          Student
          <input 
          name= "student"
           type="checkbox"
           checked=  {this.state.student}
           onChange= {this.handleTyping}
        />
         </label>

        <label htmlFor="">
          Teacher
          <input 
          name= "teacher"
           type="checkbox"
           checked=  {this.state.teacher}
           onChange= {this.handleTyping}
        />
        
         </label>
         <select className="selectWidth"name="campus" value ={this.state.campus} 
          onChange={this.handleTyping} >
         <option value="All"> </option>
         {options}
         </select>   
      </form>


      <table >
      <tr>
        <th  className="p">Firstname</th>
        <th  className="p">Lastname</th>
        <th  className="p">Campus</th>
        <th  className="p">role</th>
        <th  className="p">Links</th>
      </tr>
      <tbody >
      {displayironhackers}
      </tbody>
      </table>
      </div> 
       )

          }
        }

export default App

