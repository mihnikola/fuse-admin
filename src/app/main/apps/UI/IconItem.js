import { Box, Typography } from '@mui/material';

function IconItem({ sizeWidth, name }) {
  return (
    <Box
      sx={{
        padding: 2,
        width: sizeWidth,
        height: '10%',
        backgroundColor: '#94a9b8',
      }}
    >
      <Typography
        className="bg-slate-500 text-10 sm:text-15 font-semibold"
        variant="body2"
        gutterBottom
      >
        {name}
      </Typography>
    </Box>
  );
}

export default IconItem;
