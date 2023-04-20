import { Box } from '@mui/material';
import ButtonHeader from '../../UI/ButtonHeader';
import DefaultTabs from '../../UI/DefaultTabs';
import Heading from '../../UI/Heading';

function HeaderNotification() {
  const dataTabs = [
    { tabsStatus: -1, tabName: 'SVA OBAVESTENJA', tabValue: '1' },
    { tabsStatus: 0, tabName: 'NADOLAZECA OBAVESTENJA', tabValue: '2' },
    { tabsStatus: 1, tabName: 'ARHIVIRANA OBAVESTENJA', tabValue: '3' },
  ];

  return (
    <div className="flex flex-col m-20">
      <Box sx={{ display: 'flex', marginBottom: '20px' }}>
        <Heading title="Obavestenja" widthHeading="50%" />
        <ButtonHeader title="Dodaj novo" url="/novoObavestenje" />
      </Box>
      <div className="flex">
        <DefaultTabs tabs={dataTabs} />
      </div>
    </div>
  );
}

export default HeaderNotification;
