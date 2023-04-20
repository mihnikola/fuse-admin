import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function BackButton({ url }) {
  const theme = useTheme();
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
    >
      <Typography
        className="flex items-center sm:mb-1"
        component={Link}
        role="button"
        to={url}
        color="inherit"
      >
        <FuseSvgIcon size={20}>
          {theme.direction === 'ltr'
            ? 'heroicons-outline:arrow-sm-left'
            : 'heroicons-outline:arrow-sm-right'}
        </FuseSvgIcon>
        <span className="flex mx-4 font-medium">Nazad</span>
      </Typography>
    </motion.div>
  );
}

export default BackButton;
