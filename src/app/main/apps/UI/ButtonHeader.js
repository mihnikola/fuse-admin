import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon';
import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function ButtonHeader({ title, url }) {
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyItems: 'center', marginTop: '15px' }}>
      <Button
        // className="flex"
        component={Link}
        to={url}
        variant="contained"
        color="secondary"
        startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}
      >
        {title}
      </Button>
    </Box>
  );
}

export default ButtonHeader;
