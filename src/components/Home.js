import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const handleDelete = user =>{

        console.log('user = ', user);

        const agree = window.confirm(`Are you sure want to delete ${user.name}`);
        //console.log(agree);

        if(agree){
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }


        console.log('deleting data with id=',user._id);
    }
    return (
        <div>
            <h1>Total users: {users.length}</h1>


            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name}, {user.email} <button onClick={() => handleDelete(user)}>X</button>
                    </p>)
                }
            </div>

        </div>
        
    );
};

export default Home;