import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// -------
import First from "../Components/hooksComponents/first";
import Second from "../Components/hooksComponents/ContextTut/second";
import Third from "../Components/hooksComponents/third";
import Fourth from "../Components/hooksComponents/fourth";
import Fifth from '../Components/hooksComponents/fifth';
import Sixth from '../Components/hooksComponents/sixth';
import Seventh from '../Components/hooksComponents/seventh';
import Eight from '../Components/hooksComponents/Callback/eight';
import CustomHook from '../Components/customHook';
import CustomHooks1 from '../Components/customHooks1';
import DeBounce from '../Components/deBounce';
import Chat from '../Components/Chat/Chat';

// -------
export default function Home() {
     const [value, setValue] = React.useState('1');

     const handleChange = (event, newValue) => {
          setValue(newValue);
     };
     return (
          <div>
               <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                         <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center", alignItems: "center" }}>
                              <TabList onChange={handleChange} aria-label="lab API tabs example">
                                   <Tab label="State" value="1" />
                                   <Tab label="Use Context" value="2" />
                                   <Tab label="Use Effect" value="3" />
                                   <Tab label="Use Reducer" value="4" />
                                   <Tab label="Use Ref" value="5" />
                                   <Tab label="Use Layout Effect" value="6" />
                                   <Tab label="Use Memo" value="7" />
                                   <Tab label="Use Call Back" value="8" />
                                   <Tab label="Custom Hook" value="9" />
                                   <Tab label="Custom Hook 1" value="10" />
                                   <Tab label="Debounce" value="11" />
                                   <Tab label="Chat" value="12" />
                              </TabList>
                         </Box>
                         <TabPanel value="1"><First /></TabPanel>
                         <TabPanel value="2"><Second /></TabPanel>
                         <TabPanel value="3"><Third /></TabPanel>
                         <TabPanel value="4"><Fourth /></TabPanel>
                         <TabPanel value="5"><Fifth /></TabPanel>
                         <TabPanel value="6"><Sixth /></TabPanel>
                         <TabPanel value="7"><Seventh /></TabPanel>
                         <TabPanel value="8"><Eight /></TabPanel>
                         <TabPanel value="9"><CustomHook /></TabPanel>
                         <TabPanel value="10"><CustomHooks1 /></TabPanel>
                         <TabPanel value="11"><DeBounce /></TabPanel>
                         <TabPanel value="12"><Chat /></TabPanel>
                    </TabContext>
               </Box>
          </div>
     )
}
