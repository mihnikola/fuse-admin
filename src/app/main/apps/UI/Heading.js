import React from 'react';
import { Box, Typography } from '@mui/material';

function Heading(props) {
  return (
    <Box sx={{ display: 'flex', width: props.widthHeading }}>
      <Typography className="flex text-24 font-extrabold tracking-tight mt-10">
        {props.title}
      </Typography>
    </Box>
  );
}

export default Heading;
