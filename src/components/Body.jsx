import React from 'react';

class Body extends React.PureComponent {
    constructor(){
        super();
        console.log('constructor')
      }

      componentDidMount(){
        console.log('componentDidMount')
      }

      componentDidUpdate() {
        console.log('componentDidUpdate')
      }

      componentWillUnmount(){
        console.log('componentWillUnmount')
      }


    render(){
        return (
            <div style={{display:'flex'}}> Body
             </div>
           
        )
    }
}


export default Body;