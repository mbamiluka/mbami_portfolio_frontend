import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import API_ENDPOINTS from '../../config/api';

const AddExpRole = () => {
    const [experiences, setExperiences] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetch(API_ENDPOINTS.EXPERIENCE)
        .then(response => response.json())
        .then(data => setExperiences(data));
    }, []);


    const handleExperienceChange = (selectedExperience) => {
        setSelectedExperience({
            id:selectedExperience.id});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            startDate: formData.get('start'),
            endDate: formData.get('end'),
            roleExperience: selectedExperience
        };
        fetch(API_ENDPOINTS.EXP_ROLE, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(setMsg('Role added successfully'))
    }
    return (
        <div>
        <h3>Add Experience Role</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="Role" />
            <input type="date" name='start' placeholder="Start Date" />
            <input type="date" name='end' placeholder="End Date" />
            <Select
                options={experiences}
                onChange={handleExperienceChange}
                placeholder="Select Experience"
                getOptionLabel={(option) => option.institution}
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
            <button>Add Role</button>
            <p>{msg}</p>
        </form>
        </div>
    );
    }

export default AddExpRole;