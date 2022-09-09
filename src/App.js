import './App.css';
import React from 'react'
import MyName from './components/MyName';
import Body from './components/Body';
import NewComp from './components/NewComp'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      prevFName: '',
      prevLName: 'lname',
      lname: '',
      isMyNameVisible: false,
      height: 100,
      width: 100,
      users: [],
      editIndex:null
    }
  }

  updateFirstName = (event) => {
    this.setState({ fname: event.target.value });
  }

  updateLastName = (event) => {
    this.setState({ lname: event.target.value });
  }

  handleOnClick = () => {
    const updatedUsers = this.state.users;
    updatedUsers.push({ fName: this.state.fname, lName: this.state.lname })
    this.setState({ users: updatedUsers, fname: '', lname: '' })

    // this.setState({isMyNameVisible:true, prevFName: this.state.fname, prevLName: this.state.lname, height:200, width:200}, () => {
    //   this.setState({fname:'', lname:''})
    // })
    // alert(this.state.fname)
  }

  updateFirstNameOfList = (event, index) => {
    const updatedUsers = this.state.users;
    let currentUser = updatedUsers[index]
    currentUser = {fName: event.target.value, lName: currentUser.Lname}
    updatedUsers[index] = currentUser;
    this.setState({ user: updatedUsers });
  }
  updateLastNameOfList = (event, index) => {
    const updatedUsers = this.state.users;
    let currentUser = updatedUsers[index]
    currentUser = {fName: currentUser.fName, lName: event.target.value}
    updatedUsers[index] = currentUser;
    this.setState({ user: updatedUsers });
  }

  handleEdit = (index) => {
    // const updatedUsers = this.state.users;
    // let currentUser = updatedUsers[index]
    // // navigate(`editStudent/${currentUser.fName}/${currentUser.lName}`)
    // // this.setState({fname:currentUser.fName, lname:currentUser.lName })
    // currentUser = {fName: this.state.fname, lName: this.state.lname}
    // updatedUsers[index] = currentUser;

    this.setState({editIndex:index})
  }

  handleEditSave = (index) => {
    const updatedUsers = this.state.users;
    let currentUser = updatedUsers[index]
    currentUser = {fName: this.state.fname, lName: this.state.lname}
    updatedUsers[index] = currentUser;
    this.setState({users:updatedUsers})

  }


  render() {
    return (
      <>
        <div>

          {/* <div style={{height:this.state.height, width:this.state.width, border:1, backgroundColor:'blue'}}>

        </div> */}

          <NewComp firstName={this.state.fname}
            lastName={this.state.lname}
            users={this.state.users}
            updateFirstName={this.updateFirstName}
            updateLastName={this.updateLastName}
            handleEdit={this.handleEdit}
            handleEditSave={this.handleEditSave}
            updateFirstNameOfList={this.updateFirstNameOfList}
            updateLastNameOfList={this.updateLastNameOfList}
            editIndex={this.state.editIndex}
          />
          <button onClick={this.handleOnClick} > Okay </button>
          {/* <MyName firstName={this.state.prevFName} lastName={this.state.prevLName} users={this.state.users}/> */}
          {/* <Body users={this.state.users} /> */}
        </div>
      </>
    )
  }
}

export default App;