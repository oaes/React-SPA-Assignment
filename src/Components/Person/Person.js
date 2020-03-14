import React from 'react';
import './Person.css';


const Person = (props) => {

    const {name,img,Salary,phone,email,address} = props.person;
    

    return (
        <div className="main-container">
            <div className="image-container">
                <img src={img} alt={name}/>
            </div>
            <div className="margin">
                <h2>Name: {name}</h2>
                <h4>Salary: {Salary}</h4>
                <button className="button-style"
                    onClick={()=>props.handleAddPerson(props.person)}
                > 
                  + Add Me</button>
            </div>
            <div className="margin margin-right">
                <p><strong>Phone No: <small>{phone}</small></strong></p>
                <p><strong>Email: <small>{email}</small></strong></p>
                <p><strong>Address</strong></p>
                <p><small>{address.city+", "+ address.zipcode}</small></p>                
            </div>
        </div>
    );
};

export default Person;
