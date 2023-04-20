import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function BackRouting() {
  const theme = useTheme();
  return (
    <>
      <motion.div
        initial={{ x: 20, opacity: 0, y: 20 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
      >
        <Typography
          className="flex items-center sm:mb-12"
          component={Link}
          role="button"
          to="/apps/e-commerce/orders"
          color="inherit"
        >
          <FuseSvgIcon size={20}>
            {theme.direction === 'ltr'
              ? 'heroicons-outline:arrow-sm-left'
              : 'heroicons-outline:arrow-sm-right'}
          </FuseSvgIcon>
          Nazad{' '}
        </Typography>
      </motion.div>
    </>
  );
}

export default BackRouting;
