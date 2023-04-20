import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DemoSidebarContentHome from './DemoSidebarContentHome';


export default function DefaultTabs(props) {
  const [value, setValue] = React.useState('1');
  console.log("props",props.tabs);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="NEDELJA" value="1" sx={{paddingLeft: 0, paddingRight: 0, paddingBottom: 0, minWidth: 0, width: '33.3%'}}/>
            <Tab label="MESEC" value="2" sx={{paddingLeft: 0, paddingRight: 0, paddingBottom: 0, minWidth: 0, width: '33.3%'}}/>
            <Tab label="GODINA" value="3" sx={{paddingLeft: 0, paddingRight: 0, paddingBottom: 0, minWidth: 0, width: '33.3%'}}/>
          </TabList>
        </Box>
        <Box>
          <TabPanel value="1" sx={{padding: 0}}><DemoSidebarContentHome /></TabPanel>
        </Box>
        <Box>
          <TabPanel value="2"></TabPanel>
        </Box>
        <Box>
          <TabPanel value="3"></TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}