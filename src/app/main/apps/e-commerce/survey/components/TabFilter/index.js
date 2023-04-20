import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TabFilter = ({ active, items, onChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={active} onChange={onChange} aria-label="Survey status tab filter">
        {items.map(({ label, value }) => (
          <Tab key={value} label={label} value={value} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabFilter;