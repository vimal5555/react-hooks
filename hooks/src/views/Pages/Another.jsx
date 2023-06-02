import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import First from "../ReduxComponents/first";

export default function Another() {
  
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center", alignItems: "center" }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Redux ToolKit" value="1" />
              </TabList>
            </Box>
            <TabPanel value="1"><First /></TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  )
}
