import { Box, Container, Button } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Heading from '../../UI/Heading';
import ButtonHeader from '../../UI/ButtonHeader';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { benefitActions } from './../store/benefitSlice';

function BenefitHeaderOpen() {
  // const dispatch = useDispatch();
  // const closeHandler = () => {
  //   console.log('object');
  //   // dispatch(benefitActions.close());
  // };
  return (
    <Container
      sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '2%' }}
    >
      <Heading title="Kategorije benefita" />
      <Box sx={{ display: 'flex', gap: 1 }}>
        <ButtonHeader title="Nova kategorija" url="/kategorijeBenefita"/>
        <ButtonHeader title="Novi benefit" url="/kategorijeBenefita"/>
        {/* <Button component={Link} to="benefiti" onClick={closeHandler}> */}
        <Button component={Link} to="/kategorijeBenefita">
          <MenuOpenIcon />
        </Button>
      </Box>
    </Container>
  );
}

export default BenefitHeaderOpen;
