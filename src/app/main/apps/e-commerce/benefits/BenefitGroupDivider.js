import React from 'react';
import Divider from '@mui/material/Divider';
import { Box, Chip, Typography } from '@mui/material';

function BenefitGroupDivider(props) {
  return (
    <Box sx={{ paddingTop: '2%' }}>
      <Divider variant="h2" textAlign="left" color="red">
        {props.groupName}
      </Divider>
    </Box>
  );
}

export default BenefitGroupDivider;
