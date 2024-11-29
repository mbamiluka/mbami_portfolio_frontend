import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Tag from '../atoms/Tag';
import API_ENDPOINTS from '../../config/api';

const AddProject = () => {
    const [skills, setSkills] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [msg, setMsg] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [expRoles, setExpRoles] = useState([]);
    const [selectedExpRoles, setSelectedExpRoles] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState(null);

    let token = localStorage.getItem('token');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [skillsResponse, categoriesResponse, expResponse, expRoleResp] = await Promise.all([
                    fetch(API_ENDPOINTS.SKILL, { method: 'GET', Authorization: `Bearer ${token}` }),
                    fetch(API_ENDPOINTS.SKILL_CATEGORY, { method: 'GET' }),
                    fetch(API_ENDPOINTS.EXPERIENCE, { method: 'GET' }),
                    fetch(API_ENDPOINTS.EXP_ROLE, { method: 'GET' })
                ]);

                const skillsData = await skillsResponse.json();
                const categoriesData = await categoriesResponse.json();
                const expData = await expResponse.json();
                const expRoleData = await expRoleResp.json();

                setSkills(skillsData)
                setCategories(Object.values(categoriesData));
                setExperiences(Object.values(expData));
                setExpRoles(expRoleData);
                setIsLoaded(true);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [token]);

    /* useEffect(() => {
        console.log('Selected Skills:', selectedSkills);
    }, [selectedSkills]);

    useEffect(() => {
        console.log('Selected Categories:', selectedCategories);
    }, [selectedCategories]); */

    useEffect(() => {
        console.log('Selected ExpRole:', selectedExpRoles);
    }, [selectedExpRoles]);

    const handleSkillChange = (selectedOptions) => {
        setSelectedSkills(selectedOptions.map(option => option.value.id));
    }

    const handleCategoryChange = (selectedOptions) => {
        const selected = selectedOptions.map((option) => option.value.id);
        setSelectedCategories(selected);
    }

    const handleExperienceChange = (selectedOption) => {
        setSelectedExperience(selectedOption.value);
    }

    const handleExpRoleChange = (selectedOption) => {
        setSelectedExpRoles(selectedOption.map(option => ({id: option.value.id}) ));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const description = formData.get('description');
        const start = formData.get('start');
        const end = formData.get('end');
        const demo = formData.get('demoUrl');
        const sourceCode = formData.get('sourceCodeUrl');
        const image = formData.get('image');
        const type = formData.get('type');
        const status = formData.get('status');
        const token = localStorage.getItem('token');

        fetch(API_ENDPOINTS.PROJECT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                description,
                start,
                end,
                demo,
                sourceCode,
                image: formData.get('image') ? URL.createObjectURL(formData.get('image')) : null,
                type,
                status,
                skillIds: selectedSkills,
                categoryIds: selectedCategories,
                projectExperience: selectedExperience,
                projectExpRoles: selectedExpRoles
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to add project');
                }
                return response.json();
            }
            )
            .then(() => {
                setMsg('Project added successfully');
                e.target.reset();
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div>
            <h3>Add Project</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Project Name:</label>
                    <input type="text" required name="name" />
                </div>
                <div>
                    <label>Project Description:</label>
                    <textarea name="description"/>
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
                    <label>Demo Url:</label>
                    <input type="text" name="demoUrl"/>
                </div>
                <div>
                    <label>Source Code Url:</label>
                    <input type="text" name="sourceCodeUrl"/>
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" name="image"/>
                </div>
                <div>
                    <label>Type:</label>
                    <select name="type">
                        <option value="personal">Personal</option>
                        <option value="corporate">Corporate</option>
                        <option value="academic">Academic</option>
                        <option value="openSrc">Open Source</option>
                    </select>
                </div>
                <div>
                    <label>Status:</label>
                    <select name="status">
                        <option value="ongoing">ongoing</option>
                        <option value="completed">completed</option>
                    </select>
                </div>
                <label>Project Skills:</label>
                <div>
                    <Select
                        isMulti
                        onChange={handleSkillChange}
                        options={skills.map(skill => ({ value: skill, label: skill.name }))}
                        placeholder="Select skills..."
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
                    <Select
                        isMulti
                        onChange={handleCategoryChange}
                        options={categories.map(category => ({ value: category, label: category.name }))}
                        placeholder="Select categories..."
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
                    <Select
                        onChange={handleExperienceChange}
                        options={experiences.map(exp => ({ value: exp, label: exp.institution }))}
                        placeholder="Associated with..."
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
                    <Select
                        isMulti
                        onChange={handleExpRoleChange}
                        options={expRoles.map(role => ({ value: role, label: role.name }))}
                        placeholder="Roles..."
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
                <div><button type="submit">Add</button></div>
            </form>
            <div>
                {msg && <p>{msg}</p>}
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default AddProject;