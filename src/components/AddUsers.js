import { queryAllByAttribute } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

const AddUsers = () => {

    const [user, setUser] = useState({});

    const handleAddUser = event =>{
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data => {
           // console.log(data);
            if(data.acknowledged){
                alert('User added successfully');
                event.target.reset();
            }
        })

    }

    const handelInputBlur = event =>{
        const value = event.target.value;
        //console.log('value=',value);
        const field = event.target.name;
        //console.log('fild=',field);
        //console.log(value, field);
        const newUser = {...user}
        //console.log('newUser=', newUser);
        newUser[field] = value; 
        setUser(newUser); 
        //console.log('user=', user);
    }


    return (
        <div>
            <h2>Please add a new user</h2>
            <form onSubmit={handleAddUser}>
                <input onBlur={handelInputBlur} type="text" name='name' placeholder='Name' required/>
                <br />
                <input onBlur={handelInputBlur} type="text" name='address' placeholder='Address' required/>
                <br />
                <input onBlur={handelInputBlur} type="email" name="email" id="" placeholder='Email' required />
                <br />
                <button type="submit">Add user</button>
            </form>
        </div>
    );
};

export default AddUsers;