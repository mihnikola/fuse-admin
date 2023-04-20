import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { BenefitCardAvatar, BenefitCardOptions } from '../benefits/BenefitCard';

function CardNotification({ sizeCard, icon, folder, bg, url, imgName }) {
  return (
    <Card
      sx={{
        boxShadow: '30px grey',
        width: sizeCard,
        display: 'flex',
        gap: '10px',
        minWidth: '300px',
        margin: '10px',
        backgroundColor: bg,
      }}
    >
      {/* izmeniKategorijuBenefit
    <BenefitCardAvatar /> */}
      {/* <BenefitCategoryCardContent offerNumber={offerNumber} title={title} flexGrowSize="2" /> */}
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '200px',
          justifyContent: 'start',
          flexGrow: 2,
        }}
      >
        <Link to={url} style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <Typography variant="h12">23/08/2022</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary">
            Ovde ide naslov obavestenja moze biti duzi
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Consequat et reprehenderit nisi amet ex ullamco. Consequat et reprehenderit nisi amet ex
            ullamco.
          </Typography>
        </Link>
      </CardContent>
      {icon && <BenefitCardOptions url="/izmeniObavestenje" />}
      {imgName && <BenefitCardAvatar categoryImg ={imgName} />}
    </Card>
  );
}

export default CardNotification;
