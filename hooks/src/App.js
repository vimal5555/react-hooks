import React from 'react';
import './App.css';
import Home from './views/Pages/Home';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Another from './views/Pages/Another';

function App() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center", alignItems: "center" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Hooks" value="1" />
              <Tab label="Another" value="2" />



            </TabList>
          </Box>
          <TabPanel value="1"><Home /></TabPanel>
          <TabPanel value="2"><Another /></TabPanel>




        </TabContext>
      </Box>
    </div>
  );
}

export default App;
