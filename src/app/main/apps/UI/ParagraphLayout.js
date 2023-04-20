import { Box } from '@mui/material';

function ParagraphLayout(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'flex-column',
        alignTtems: 'center',
        justifyContent: 'flex-start',
        margin: 2,
      }}
    >
      {props.children}
    </Box>
  );
}

export default ParagraphLayout;
