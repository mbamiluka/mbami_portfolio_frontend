import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select';
import axios from 'axios';

const ContentEditor = () => {
    const [content, setContent] = useState(''); // Keep track of editor content
    const quillRef = useRef(null);
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/project');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }; fetchProjects();
    }, []);

    useEffect(() => {
        console.log(selectedProject);
        console.log(content);
    }, [selectedProject, content]);

    // Function to handle image uploads
    const handleImageUpload = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/images/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data.url; // Cloudinary URL for the image
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    };

    // Custom handler for inserting uploaded image
    const imageHandler = useCallback(() => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            const url = await handleImageUpload(file);

            if (url) {
                const quill = quillRef.current.getEditor(); // Get the editor instance
                const range = quill.getSelection(); // Get the current cursor position
                quill.insertEmbed(range.index, 'image', url); // Insert the image at the cursor
                quill.setSelection(range.index + 1); // Move cursor after the image
            }
        };
    }, []);

    // Function to handle form submission
    const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedProject) {
        alert('Please select a project');
        return;
    }
    try {
        const response = await axios.post('http://localhost:8080/api/v1/contents', {
            name: event.target.name.value,
            contentType: 'text/html',
            content,
            projectId: selectedProject.value,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Content saved:', response.data);
    } catch (error) {
        console.error('Error saving content:', error);
    }
};

    // Quill modules with the custom image handler
    const modules = {
        toolbar: {
            container: [
                [{ header: '1' }, { header: '2' }, { font: [] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ align: [] }],
                ['link', 'image'],
                ['clean'],
            ],
            handlers: {
                image: imageHandler,
            },
        },
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Content Name" name='name'/>
                <ReactQuill
                    value={content} // Bind editor content to state
                    onChange={setContent} // Update state when editor content changes
                    modules={modules} // Apply the custom toolbar modules
                    ref={quillRef} // Set the editor ref
                    theme="snow" // Use the "snow" theme
                />
                <Select
                    options={projects.map((project) => ({ value: project.id, label: project.name }))}
                    value={selectedProject}
                    onChange={setSelectedProject}
                    placeholder="Select a project"
                    styles={{
                        control: (styles) => ({
                            ...styles,
                            width: '200px',
                        }),
                        menuPortalTarget: (base) => ({ ...base, zIndex: 999 }),
                    }}
                    menuPortalTarget={document.body}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContentEditor;