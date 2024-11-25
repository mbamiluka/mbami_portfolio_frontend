import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const AddAchievement = () => {
    const [expRoles, setExpRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState(null);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/expRole', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setExpRoles(data);
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        console.log(selectedRole);
    }, [selectedRole]);

    const handleRoleChange = (selectedRole) => {
        setSelectedRole({id:selectedRole.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            achievementTitle: formData.get('title'),
            startDate: formData.get('start'),
            endDate: formData.get('end'),
            achievementDescr: formData.get('description'),
            achievementFullDescr: formData.get('longDescription'),
            achievementUrl: formData.get('url'),
            image: formData.get('image') ? URL.createObjectURL(formData.get('image')) : null,
            achievementExpRole: selectedRole,
        };

        fetch('http://localhost:8080/api/v1/achievement', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            setMsg(data.msg);
            console.log(data);
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
                    <input type="file" name='image'/>
                </div>
                <Select
                    options={expRoles.map(role => ({ value: role.id, label: role.name + ' at ' + role.roleExperience.institution }))}
                    onChange={handleRoleChange}
                    styles={{
                        control: (styles) => ({
                            ...styles,
                            marginBottom: '3rem',
                        }),
                        menuPortalTarget: base => ({ ...base, zIndex: 99
                        })
                    }}
                    menuPortalTarget={document.body}
                />
                <button type="submit">Add</button>
            </form>
            <p>{msg}</p>
        </div>
    );
}

export default AddAchievement;
