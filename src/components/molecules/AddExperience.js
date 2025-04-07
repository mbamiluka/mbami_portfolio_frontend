import React, {useEffect, useState} from "react";
import Select from 'react-select';
import API_ENDPOINTS from "../../config/api";

const AddExperience = () => {
    const [msg, setMsg] = useState('');
    const [expTypes, setExpTypes] = useState([]);
    const [selectedExpType, setSelectedExpType] = useState(null);

    useEffect(() => {
        fetch(API_ENDPOINTS.EXP_TYPE, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            },
        })
        .then(response => response.json())
        .then(data => {
            setExpTypes(data);
        }
        )
        .catch(err => {
            console.log(err);
        });
    }, []);

    const handleExpTypeChange = (selectedExpType) => {
        setSelectedExpType({
            id: selectedExpType.id
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            institution: formData.get('name'),
            startDate: formData.get('start'),
            endDate: formData.get('end'),
            expType: selectedExpType
        };
        fetch(API_ENDPOINTS.EXPERIENCE, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(setMsg('Experience added successfully'))
    }

    return (
        <div>
            <h3>Add Experience</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder="Institution name..." required />
                <input type='date' name='start' />
                <input type='date' name='end' />
                
                <Select
                    options={expTypes}
                    onChange={handleExpTypeChange}
                    placeholder="Experience Type..."
                    getOptionLabel={(option) => option.name}
                    styles={{
                        control: (styles) => ({
                            ...styles,
                            marginBottom: '3rem',
                        }),
                    }}
                    menuPortalTarget={document.body}
                />
                <button type="submit">Add</button>
            </form>
            <p>{msg}</p>
        </div>
    );

}

export default AddExperience;