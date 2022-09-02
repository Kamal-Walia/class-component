const ShowUser = (props) => {
    return(
        <div>
        First Name:<input value={props.firstName} type="text" onChange={props.updateFirstName} />
        <br />
        Last Name:<input value={props.lastName} type="text" onChange={props.updateLastName}/>

        {
          props.users.map(item => {
            return <h2 className='myName'>Hello {`${item.fName} ${item.lName}`}</h2>
          })
        }
        </div>
    )
}

export default ShowUser