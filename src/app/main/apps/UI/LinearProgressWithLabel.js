import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function LinearWithValueLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35, display: 'flex' }}>
        <Typography variant="body2" color="text.secondary">
          {props.counterMember}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`(${Math.round(props.value)}%)`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearWithValueLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
  counterMember: PropTypes.number.isRequired,
};

