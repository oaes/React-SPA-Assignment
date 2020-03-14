import React from 'react';
import './Friend'
const Friend = (props) => {

    const {name,img, Salary,username} = props.person;
    return (
        <div className="right-side">
            <div className="image">
                    <img src={img} alt=""/>
                
            </div>
            <div className="name">
                <h3>{name}</h3>
                <p><small>{username}</small></p>
                <p><small>{Salary}</small></p>
            </div>
            
        </div>
    );
};

export default Friend;