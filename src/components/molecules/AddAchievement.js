import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const AddAchievement = () => {
    const [expRoles, setExpRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState(null);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api/expRoles'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        }
        .then(response => response.json())
        .then(data => {
            setExpRoles(data);
        })
        .catch(err => {
            console.log(err);
        });
    } , []);

    const handleRoleChange = (selectedRole) => {
        setSelectedRole(selectedRole);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/v1/achievements', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                title: e.target.title.value,
                start: e.target.start.value,
                end: e.target.end.value,
                description: e.target.description.value,
                longDescription: e.target.longDescription.value,
                url: e.target.url.value,
                image: e.target.image.value,
                expRoleId: selectedRole.value,
            }),
        })
        .then(response => response.json())
        .then(data => {
            setMsg(data.msg);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Achievement Title" name='title'/>
                </div>
                <div>
                    <input type="date" placeholder="Start" name='start'/>
                </div>
                <div>
                    <input type="date" placeholder="End" name='end'/>
                </div>
                <div>
                    <input type="text" placeholder="Short Description" name='description'/>
                </div>
                <div>
                    <input type="text" placeholder="Long Description" name='longDescription'/>
                </div>
                <div>
                    <input type="text" placeholder="url" name='url'/>
                </div>
                <div>
                    <input type="text" placeholder="Image" name='image'/>
                </div>
                <Select
                    options={expRoles.map(role => ({ value: role.id, label: role.name }))}
                    onChange={handleRoleChange}
                />
                <button type="submit">Add</button>
            </form>
            <p>{msg}</p>
        </div>
    );
}

export default AddAchievement;
