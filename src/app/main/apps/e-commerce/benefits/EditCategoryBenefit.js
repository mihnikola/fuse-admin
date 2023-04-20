import { Button, Box, Container } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon';
import BackButton from '../../UI/BackButton';
import Heading from '../../UI/Heading';
import Filter from '../../UI/Filter';
import BenefitCompanyCard from './BenefitCompanyCard';
import Wrapper from '../../UI/Wrapper';
import BackRouting from '../../UI/BackRouting';
import { Link } from 'react-router-dom';

function EditCategoryBenefit() {
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
  return (
    <Wrapper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '60%',
          padding: 5,
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          {/* <BackRouting /> */}
          <BackButton url="/kategorijeBenefita" />
        </Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Button
            // className="flex flex-1"
            component={Link}
            to="/noviBenefit"
            variant="contained"
            color="secondary"
            startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}
          >
            Novi Benefit
          </Button>
        </Box>
      </Box>
      <Box sx={{ marginLeft: 5 }}>
        <Heading title="Zdravlje" />
      </Box>
      <Box>
        <Filter placeholder="Pretrazi obavestenja" title="FILTER" />
      </Box>
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '80%',
          gap: '20px',
          margin: 0,
        }}
      >
        {companiesData.map((data) => (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <BenefitCompanyCard sizeContent="800px" companies={data.companies} />
          </Box>
        ))}
      </Container>
    </Wrapper>
  );
}

export default EditCategoryBenefit;
