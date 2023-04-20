import { Box, Button } from '@mui/material';
import ModalForm from './ModalForm';
import { Link } from 'react-router-dom';

function ButtonForm({ btnName, onConfirm, url }) {
  // const openHandler = (e) => {
  //   e.preventDefault();
  //   console.log("majketi");
  //   // <ModalForm headerMessage="SVAKA CAST" bodyMessage="BRAV" />;
  // };
  const btnPrimary = {
    width: '100%',
    height: '20px',
    color: 'white',
    backgroundColor: 'blue',
    padding: '50',
    '&:hover': { backgroundColor: 'black' },
  };
  return (
    <Box sx={{ paddingLeft: 1, paddingTop: 1 }}>
      <Button variant="contained" component={Link} to={url} sx={btnPrimary}>
        {btnName}
      </Button>
    </Box>
  );
}

export default ButtonForm;
