import { Box, Container } from '@mui/material';
import BenefitHeaderOpen from './BenefitHeaderOpen';
import BenefitGroupDivider from './BenefitGroupDivider';
import BenefitCompanyCard from './BenefitCompanyCard';
import Wrapper from '../../UI/Wrapper';
// import { useSelector } from 'react-redux'
const companiesData = [
  {
    groupId: '2131',
    groupName: 'Strucnjaci',
    companies: [
      {
        name: 'Magnohrom',
        discount: '20% popusta',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        name: 'Fabrika vagona',
        discount: '40%-60% popusta',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        name: 'Rudnik Trepca',
        discount: '60%-60% popusta',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        name: 'Gvozdjar Kraljevo',
        discount: '70%-20% popusta',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    groupId: '2322',
    groupName: 'Umetnici',
    companies: [
      {
        name: 'Zorka Color',
        discount: '20% popusta',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        name: 'Sreta Steta',
        discount: '40%-60% popusta',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
];
function BenefitOpen() {
  // const companiesData = useSelector((state) => state.benefit.companies);
  return (
    <Wrapper>
      <BenefitHeaderOpen />
      {/* <Container sx={{ display: 'flex', flexWrap: 'wrap',  gap: '20px', margin: 0, marginTop: 5 }}> */}
      <Container>
        {companiesData.map((data) => (
          <Box sx={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <BenefitGroupDivider groupName={data.groupName} groupId={data.groupId} />
            <BenefitCompanyCard companies={data.companies} />
          </Box>
        ))}
      </Container>
    </Wrapper>
  );
}

export default BenefitOpen;
