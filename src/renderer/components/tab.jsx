import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './tab.css'
import { Icon } from '@material-ui/core';
import logo from '../assets/logo.png';
import SvgIcon from '@material-ui/core/SvgIcon';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

const useTabStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minWidth:"20%"
  },
}));


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export function MyTab() {
  const classes = useStyles();
  const tabclasses = useTabStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="TabsContainer">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label={<HomeIcon color="primary" />} className="Tab" style={{backgroundColor:'#242526',color:'#ffffff'}}/>
          <Tab label="Learn" {...a11yProps(1)} className="Tab" style={{backgroundColor:'#242526',color:'#ffffff'}}/>
          <Tab label="Teach" {...a11yProps(2)} className="Tab" style={{backgroundColor:'#242526',color:'#ffffff'}}/>
          <Tab label="XR" {...a11yProps(3)} className="Tab" style={{backgroundColor:'#242526',color:'#ffffff'}}/>
          <Tab label="2,343" {...a11yProps(4)} className="Tab" style={{backgroundColor:'#242526',color:'#ffffff'}}/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Icon3
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Learn
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Teach
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          XR
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          2343
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default MyTab
