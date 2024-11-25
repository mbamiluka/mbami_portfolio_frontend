import React, { useState, useEffect } from "react";

const AddSkillCategory = () => {
    const apiUrl = process.env.REACT_APP_MBAMI_PORTFOLIO_BACKEND_URL_DEVELOPMENT

    const [msg, setMsg] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setMsg('');
        }, 2000);
    }, [msg]);

    useEffect(() => {
        console.log('apiUrl:', apiUrl);
    }
    , []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const categName = formData.get('name');
        const data = {
            name: categName
        };
        fetch(`${apiUrl}/api/v1/skillCategory`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setMsg('Skill Category added successfully');
            })
            .catch((error) => {
                console.error('Error Adding Category:', error);
                setMsg('Error adding Category');
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Category:</label>
                    <input type="text" required name="name"/>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
                <div>
                    <span>{msg}</span>
                </div>
            </form>
        </div>
    );
}

export default AddSkillCategory;

//todo: When new skill category is added, the list of skill categories should be updated in the AddSkill component.
/**
 * 1. Add a prop to AddSkillCategory component to pass a function that updates the skill categories.
 * 2. Call the function in AddSkillCategory component after adding a new skill category.
 * 3. Update the AddSkill component to pass a function that updates the skill categories to AddSkillCategory component.
 * 4. Update the AddSkill component to update the skill categories when the function is called.
 * 5. Test the implementation by adding a new skill category and checking if the list of skill categories is updated in the Add
 *   Skill component.
 * 6. If the implementation is successful, commit the changes to the repository
 * 
 */