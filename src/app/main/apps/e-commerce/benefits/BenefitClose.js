import { Box, Container } from '@mui/material';

import BenefitHeader from './BenefitHeader';
// import { useSelector } from 'react-redux';

import BenefitCard from './BenefitCard';
import BenefitHeaderOpen from './BenefitHeaderOpen';
import Wrapper from '../../UI/Wrapper';

const benefits = [
  { title: 'Elektronika', offerNumber: '10 ponuda', imgName: 'downloadEl.png' },
  { title: 'Zdravlje', offerNumber: '10 ponuda', imgName: 'downloadHealth.png' },
  { title: 'Sport', offerNumber: '5 ponuda',  imgName: 'downloadSport.png' },
  { title: 'Pokucstvo', offerNumber: '55 ponuda', imgName: 'downloadHealth.png' },
  { title: 'Garderoba', offerNumber: '7 ponuda', imgName: 'downloadHealth.png' },
];
const breakpoints = {
  margin: 2,
  flex: { xs: '100%', sm: 'calc(50% - 300px)', md: 'calc(33% - 50px)', lg: 'calc(33% - 80px)' },
};
function BenefitClose() {
  // const benefitData = useSelector((state) => state.benefit.benefits);

  return (
    <Wrapper>
      <BenefitHeader />
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {benefits.map((data) => (
          <Box sx={breakpoints}>
            <BenefitCard title={data.title} offerNumber={data.offerNumber} imgName={data.imgName} />
          </Box>
        ))}
      </Container>
    </Wrapper>
  );
}

export default BenefitClose;
