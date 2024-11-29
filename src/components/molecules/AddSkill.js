import React from "react";
import Select from 'react-select';
import API_ENDPOINTS from "../../config/api";

const AddSkill = () => {
    const [error, setError] = React.useState('');
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [msg, setMsg] = React.useState('');
    const [skillCategories, setSkillCategories] = React.useState([]);
    const [selectedCategories, setSelectedCategories] = React.useState([]);

    React.useEffect(() => {
        fetch(API_ENDPOINTS.SKILL_CATEGORY, {
            method: 'GET',
        })
            .then((response) => {
                if (!response.ok) {
                    setError(response.statusText);
                    throw new Error('Failed to fetch skill categories');
                }
                return response.json();
            })
            .then((data) => {
                setSkillCategories(Object.values(data));
                setIsLoaded(true);
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    , []);

    const handleSkillCategoryChange = (selectedOption) => {
        const selected = selectedOption.map((option) => option);
        setSelectedCategories(selected);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const skill = formData.get('skill');
        const start = formData.get('start');
        const end = formData.get('end');
        const token = localStorage.getItem('token');

        fetch(API_ENDPOINTS.SKILL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ name:skill,
                mmStartDate:start, 
                mmEndDate:end,
                skillCategories:selectedCategories
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    setError(response.statusText);
                    throw new Error('Failed to add skill');
                }
                return response.json();
            })
            .then(() => {
                setIsLoaded(true);
                e.target.reset();
                setMsg('Skill added successfully');

                // Clear the message after 3 seconds with a fade-out effect
                setTimeout(() => {
                    setMsg('');
                    setError('');
                }, 3000);
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    return (
        <div>
            <h3>Add Skill</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Skill:</label>
                    <input type="text" name="skill" required/>
                </div>
                <div>
                    <label>Start:</label>
                    <input type="date" name="start"/>
                </div>
                <div>
                    <label>End:</label>
                    <input type="date" name="end"/>
                </div>
                <div>
                    <label>Skill Category:</label>
                    <Select
                        isMulti
                        options={skillCategories.map((category) => ({ value: category.id, label: category.name }))}
                        onChange={(selectedOption) => {handleSkillCategoryChange(selectedOption)}}
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
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
                <div>
                    <button type="reset">Reset</button>
                </div>
            </form>
            {msg && <p>{msg}</p>}
            {error && <p>{error}</p>}
        </div>
    );
}

export default AddSkill;