import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Box from '@mui/material/Box';

export const CardPanel = ({ children }) => {
  return <Card className="w-full flex">{children}</Card>;
};

export const CardImage = ({ src, alt }) => {
  return (
    <div className="relative basis-192 h-160 border-1">
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        className="absolute w-full h-full object-cover"
      />
    </div>
  );
};

export const CardStat = ({ stat, label }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Typography variant="h2" component="p">
        {stat}
      </Typography>
      <Typography variant="body1" className="text-center text-gray-500">
        {label}
      </Typography>
    </div>
  );
};

export const CardIntro = ({ title, description }) => {
  return (
    <div>
      <Typography component="p" variant="subtitle1">
        {title}
      </Typography>
      <Typography className="text-gray-500">{description}</Typography>
    </div>
  );
};

export const CardControls = ({ onEdit, onDelete }) => {
  return (
    <div className="flex items-center">
      <IconButton onClick={onEdit}>
        <FuseSvgIcon size={28} color="action">
          material-outline:edit
        </FuseSvgIcon>
      </IconButton>
      <IconButton onClick={onDelete}>
        <FuseSvgIcon size={28} color="action">
          material-outline:delete
        </FuseSvgIcon>
      </IconButton>
    </div>
  );
};

export const CardInfo = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="body1" className="text-gray-500 text-center">
        {label}
      </Typography>
      {value && (
        <Typography variant="body2" className="font-600">
          {value}
        </Typography>
      )}
    </div>
  );
};

export const CardCell = ({ children, size, border, noPadding = false, alignment = 'center' }) => {
  const flexGrow = { flexGrow: size, flexBasis: size };
  const classes = clsx('flex items-center', {
    'border-r-1': border === 'right',
    'border-l-1': border === 'left',
    'justify-center': alignment === 'center',
    'justify-start': alignment === 'left',
    'justify-end': alignment === 'right',
    'px-20': !noPadding,
  });

  return (
    <Box sx={flexGrow} className={classes}>
      {children}
    </Box>
  );
};

CardCell.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  border: PropTypes.oneOf(['left', 'right']),
  noPadding: PropTypes.bool,
  alignment: PropTypes.oneOf(['left', 'right', 'center']),
};