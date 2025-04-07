import React, { useState, useEffect } from "react";

const CloudinaryImg = ({ publicId }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/images/${publicId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        // Assume your backend response contains the Cloudinary URL in data.url
        setUrl(data.url);
      } catch (err) {
        console.error(err);
      }
    };

    if (publicId) {
      fetchImageUrl();
    }
  }, [publicId]);

  return (
    <div>
      <p>Cloudinary URL: {url}</p>
      {url && <img src={url} alt="Cloudinary" />}
    </div>
  );
};

export default CloudinaryImg;

