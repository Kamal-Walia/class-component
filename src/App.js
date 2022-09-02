import './App.css';
import React from 'react'
import MyName from './components/MyName';
import Body from './components/Body';
import NewComp from './components/NewComp'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fname: '',
      prevFName: '',
      prevLName:'lname',
      lname: '',
      isMyNameVisible: false,
      height: 100,
      width:100,
      users:[]
    }
  }

  updateFirstName = (event) => {
    this.setState({fname: event.target.value});
  }

  updateLastName = (event) => {
    console.log('KW101', event)
    this.setState({lname: event.target.value});
  }

  handleOnClick  = () => {
    const updatedUsers = this.state.users;
    updatedUsers.push({fName:this.state.fname, lName:this.state.lname})
    this.setState({users:updatedUsers, fname:'', lname:'' })

    // this.setState({isMyNameVisible:true, prevFName: this.state.fname, prevLName: this.state.lname, height:200, width:200}, () => {
    //   this.setState({fname:'', lname:''})
    // })
    // alert(this.state.fname)
  }


  render() {
    return (
      <>
      <div>
        
        {/* <div style={{height:this.state.height, width:this.state.width, border:1, backgroundColor:'blue'}}>

        </div> */}
        
        <NewComp firstName={this.state.fname} lastName={this.state.lname} users={this.state.users} updateFirstName={this.updateFirstName} updateLastName={this.updateLastName}/>
        <button onClick={this.handleOnClick} > Okay </button>
        {/* <MyName firstName={this.state.prevFName} lastName={this.state.prevLName} users={this.state.users}/> */}
        {/* <Body key='body'/> */}
      </div>
      </>
    )
  }
}

export default App;