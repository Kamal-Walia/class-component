const ShowUser = (props) => {
    return(
        <div>
        First Name:<input value={props.firstName} type="text" onChange={props.updateFirstName} />
        <br />
        Last Name:<input value={props.lastName} type="text" onChange={props.updateLastName}/>

        {
          props.users.map((item,index) => {
            return (
              <div key={`KW-${index}`}>
                <input type="text" disabled={props.editIndex != index} value={item.fName} onChange={(e) => props.updateFirstNameOfList(e, index)} />
                <input type="text" disabled={props.editIndex != index} value={item.lName} onChange={(e) => props.updateLastNameOfList(e, index)} />
               {/* <h2 className='myName'>Hello {`${item.fName} ${item.lName}`}</h2> */}
              <input type="button" onClick={() => props.handleEdit(index)}  value="Edit"/>
              {/* <input type="button" onClick={() => props.handleEditSave(index)} value="save" /> */}
            </div>
            )
          })
        }
        </div>
    )
}

export default ShowUser