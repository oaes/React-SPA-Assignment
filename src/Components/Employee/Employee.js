import React, { useEffect } from 'react';
import './Employee.css';
import {useState} from 'react';

const Employee = () => {

    function Users(){
        const [users, setUsers] = useState([]);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(data => setUsers(data))
        },[])
    }
    

    return (
        <div className="employee-container">
            <div className="images">

    <h3>users list: {Users.length}
    </h3>
            </div>
            </div>
           
    
    );
};







export default Employee;