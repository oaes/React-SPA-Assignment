import React from 'react';
import './Counter.css';
import Friend from '../Friend/Friend';

const Counter = (props) => {

   const counter = props.counter;

//    console.log(counter);
   let totalSalary=0;

   for(let i=0; i<counter.length; i++){
       const person = counter[i];
       totalSalary = totalSalary + Number(person.salary);
   }
        
    return (
        <div>
            <div className="container">
            
                <h2>TotalCount:</h2>
                <p>Total Colleagues : {counter.length}</p>
                <p>Total Salary  : Help Needed</p>

                {
                    counter.map(person=> <Friend person={person}></Friend>)
                }
            </div>
        </div>
    );
};

export default Counter;