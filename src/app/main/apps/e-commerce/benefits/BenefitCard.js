import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function BenefitCard({ title, offerNumber, sizeContent, imgName }) {
  // console.log("BenefitCard", sizeContent);
  return (
    // <Card sx={{ boxShadow: '20px', width: sizeContent, display: 'flex', gap: '10px', justifyContent: 'space-between' , minWidth: '300px'}}>
    <Card
      sx={{
        boxShadow: '20px',
        width: sizeContent,
        display: 'flex',
        gap: '10px',
        minWidth: '300px',
      }}
    >
      {/* izmeniKategorijuBenefit */}
      <BenefitCardAvatar categoryImg={imgName} />
      <BenefitCardContent offerNumber={offerNumber} title={title} flexGrowSize="2" />
      <BenefitCardOptions url="/izmeniKategoriju2" />
    </Card>
  );
}

export function BenefitCardAvatar({ categoryImg }) {
  return (
    // <Stack direction="row" paddingLeft="10%" justifyContent="center" alignItems="center">
    //   {/* <FolderIcon /> */}
    // </Stack>
    <Box
      sx={{
        display: 'flex',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: '20px',
        marginLeft: '20px'
        // justify: 'flex-start',
      }}
    >
      {/* <img src="assets/images/avatars/downloadEl.png" alt="dasdasd" height="40px" width="40px" /> */}
      <img src={`assets/images/avatars/${categoryImg}`} alt="dasdasd" height="40px" width="40px" />
    </Box>
  );
}
// export function BenefitCardContent({ title, offerNumber, flexGrowSize }) {
export function BenefitCardContent({ title, offerNumber, flexGrowSize }) {
  return (
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        flexGrow: flexGrowSize,
      }}
    >
      <Link to="/izmeniKategorijuBenefit" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <Typography variant="h6" sx={{ color: 'black' }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {offerNumber}
        </Typography>
      </Link>
    </CardContent>
  );
}

export function BenefitCardOptions({ url }) {
  return (
    <CardActions>
      <IconButton component={Link} to={url}>
        <EditIcon />
      </IconButton>
      <IconButton component={Link} to={url}>
        <DeleteIcon />
      </IconButton>
    </CardActions>
  );
}
export default BenefitCard;
