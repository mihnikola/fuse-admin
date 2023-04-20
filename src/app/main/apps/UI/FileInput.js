import { Box, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const FileInput = ({ label, image }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(image);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      <div
        className="border-dashed border-2 border-blue-gray-900 w-full p-10"
        htmlFor="select-image"
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'column' }}
          variant="contained"
          color="primary"
          component="span"
        >
          <IconButton>
            <FileUploadOutlinedIcon />
          </IconButton>
          <Box sx={{ textAlign: 'center' }}>{label}</Box>
        </Box>
      </div>
      {/* {imageUrl && selectedImage && (
        <Box mt={5} textAlign="center">
          <img src={imageUrl} alt={selectedImage.name} height="100px" />
        </Box>
      )} */}
      {imageUrl && (
        <Box mt={5} textAlign="center">
          <img src={imageUrl} alt="sdasd" height="500px" />
        </Box>
      )}
    </>
  );
};

export default FileInput;
