import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SuggestionList from '../e-commerce/suggestions/SuggestionList';
import SuggestionSearch from '../e-commerce/suggestions/SuggestionSearch';
import SearchNotification from '../e-commerce/notifications/SearchNotification';
import CardNotification from '../e-commerce/notifications/CardNotification';
import BenefitGroupDivider from '../e-commerce/benefits/BenefitGroupDivider';

export default function DefaultTabs(props) {
  const { tabs } = props;

  const [value, setValue] = React.useState(tabs[0].tabValue);
  const [labelValue, setLabelValue] = React.useState(tabs[0].tabName);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setLabelValue(event.currentTarget.dataset.tag);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabs.map((tab) => (
              <Tab
                key={tab.tabName}
                data-tag={tab.tabName}
                id={tab.tabName}
                label={tab.tabName}
                value={tab.tabValue}
              />
            ))}
          </TabList>
        </Box>
        {/* const dataTabs = [{"tabsStatus":-1,"tabName":"Novi predlozi","tabValue":1},{"tabsStatus":0,"tabName":"Reseni predlozi","tabValue":2}] */}

        {value == '1' && labelValue == 'Novi predlozi' && (
          <Box
            sx={{
              overflow: 'auto',
              maxHeight: '600px',
              borderLeft: 1,
              borderRight: 1,
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <TabPanel value={value}>
              <SuggestionList />
            </TabPanel>
          </Box>
        )}
        {value == '2' && labelValue == 'Reseni predlozi' && (
          <Box sx={{ borderLeft: 1, borderRight: 1, borderBottom: 1, borderColor: 'divider' }}>
            <TabPanel value={value}>
              <SuggestionSearch />
            </TabPanel>
          </Box>
        )}
        {value == '1' && labelValue == 'SVA OBAVESTENJA' && (
          <Box sx={{ borderLeft: 1, borderRight: 1, borderBottom: 1, borderColor: 'divider' }}>
            <TabPanel value={value}>
              <SearchNotification modalForm="true" />
              <CardNotification sizeCard="40%" icon={false} bg="#dbdbdb" url="/prikaziSacuvanu" />
              <CardNotification sizeCard="40%" icon={false} url="/prikaziSacuvanu" />
              <BenefitGroupDivider groupName="Prosla obavestenja" />
              <CardNotification sizeCard="40%" icon={false} imgName='downloadHealth.png' url="/prikaziSacuvanu" />
              <CardNotification sizeCard="40%" icon={false} imgName='downloadHealth.png' url="/prikaziSacuvanu" />
            </TabPanel>
          </Box>
        )}
        {value == '2' && labelValue == 'NADOLAZECA OBAVESTENJA' && (
          <Box sx={{ borderLeft: 1, borderRight: 1, borderBottom: 1, borderColor: 'divider' }}>
            <TabPanel value={value}>
              <SearchNotification modalForm="true" />
              <CardNotification sizeCard="40%" icon={true} url="/prikaziNadolazecu" />
              <CardNotification sizeCard="40%" icon={true} url="/prikaziNadolazecu" />
              <CardNotification sizeCard="40%" icon={true} url="/prikaziNadolazecu" />
              <CardNotification sizeCard="40%" icon={true} url="/prikaziNadolazecu" />
            </TabPanel>
          </Box>
        )}
        {value == '3' && labelValue == 'ARHIVIRANA OBAVESTENJA' && (
          <Box sx={{ borderLeft: 1, borderRight: 1, borderBottom: 1, borderColor: 'divider' }}>
            <TabPanel value={value}>
              <SearchNotification modalForm="true" />
              <Box>
                <CardNotification sizeCard="40%" icon={false} url="/prikaziNadolazecu" />
                <CardNotification sizeCard="40%" icon={false} url="/prikaziNadolazecu" />
                <CardNotification sizeCard="40%" icon={false} url="/prikaziNadolazecu" />
              </Box>
            </TabPanel>
          </Box>
        )}
      </TabContext>
    </Box>
  );
}
