import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BenefitCardAvatar, BenefitCardOptions } from './BenefitCard';

function BenefitCompanyCard({ companies }) {
  return (
    <>
      {companies.map((company) => (
        <Card sx={{ boxShadow: '20px', display: 'flex', gap: '10px', minWidth: '300' }}>
          <BenefitCardAvatar />
          <BenefitCategoryCardContent
            discount={company.discount}
            name={company.name}
            text={company.text}
            flexGrowSize="2"
          />
          <BenefitCardOptions url="/izmeniBenefit/2" />
        </Card>
      ))}
    </>
  );
}
export function BenefitCategoryCardContent({ name, discount, text, flexGrowSize }) {
  return (
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: '200px',
        justifyContent: 'start',
        flexGrow: flexGrowSize,
      }}
    >
      <Link to="/pregledKompanije" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <Typography variant="h6">{name}</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {discount}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {text}
        </Typography>
      </Link>
    </CardContent>
  );
}

export default BenefitCompanyCard;
