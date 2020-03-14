import React from 'react';
import './Person.css';


const Person = (props) => {

    const {name,img,username,Salary,phone,email,address} = props.person;

    return (
        <div className="main-container">
            <div className="image-container">
                <img src={img} alt={name}/>
            </div>
            <div className="margin">
                <h2>{name}</h2>
                <h4>{username}</h4>
                <h4> {Salary}</h4>
                <button className="button-style"
                    onClick={()=>props.handleAddPerson(props.person)}
                > 
                  + Add Me</button>
            </div>
            <div className="margin margin-right">
                <p><small>{phone}</small></p>
                <p><small>{email}</small></p>
                <p><strong>Address</strong></p>
                <p><small>{address.street+", "+ address.suite}</small></p>
                <p><small>{address.city+", "+ address.zipcode}</small></p>                
            </div>
        </div>
    );
};

export default Person;
