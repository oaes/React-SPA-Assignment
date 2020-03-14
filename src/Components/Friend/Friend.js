import React from 'react';
import './Friend.css'
const Friend = (props) => {

    const {name,img, Salary} = props.person;
    return (
        <div className="right-side">
            <div className="image">
                    <img src={img} alt=""/>
                
            </div>
            <div className="name">
                <h3>{name}</h3>
                <p>Salary: {Salary}</p>
            </div>
            
        </div>
    );
};

export default Friend;