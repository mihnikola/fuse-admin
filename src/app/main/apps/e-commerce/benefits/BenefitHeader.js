import { Button, Container, IconButton, Typography } from '@mui/material';

import { motion } from 'framer-motion';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import Heading from '../../UI/Heading';
import ButtonHeader from '../../UI/ButtonHeader';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { benefitActions } from '../store/benefitSlice';
function BenefitHeader() {
  // const dispatch = useDispatch();
  const openHandler = () => {
    // dispatch(benefitActions.open());
  };
  return (
    <Container
      sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '2%' }}
    >
      <Heading title="Kategorije benefita" />
      <Box sx={{ display: 'flex', gap: 1 }}>
        <ButtonHeader title="Nova kategorija" component={Link} url="/novaKategorija" />
        {/* <ButtonHeader title="Novi benefit" component={Link} url="/noviBenefit" /> */}
        {/* <Button onClick={openHandler}> */}
        <Button component={Link} to="/unknownBenefits">
          <MenuIcon />
        </Button>
      </Box>
    </Container>
  );
}

export default BenefitHeader;
