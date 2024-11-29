import React from "react";
import API_ENDPOINTS from "../../config/api";

const AddExpType = () => {
    const apiUrl = "http://localhost:8080";
    //exp types: work, academic, volunteer, personal
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const data = {
            name: name
        };
        fetch(`${API_ENDPOINTS.EXP_TYPE}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Experience Type added successfully');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error adding Experience Type');
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Experience Type:</label>
                    <input type="text" required name="name"/>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddExpType;