import React from 'react'
const UserOutput =(props) =>{
    const out = {
        border: '2px solid '
    };
    return(<div className="UserOutput" >
        <p >username : {props.userName}</p>
        <p></p>
    </div>)
}
export default UserOutput;