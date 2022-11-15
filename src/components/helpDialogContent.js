import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import styles from '../css/helpDialog.module.css';
import BubbleChart from '../assets/bubble_chart.png';
import FitnessTable from '../assets/fitness_table.png';
import VariantFitness from '../assets/variant_fitness.png';
import VariantProportions from '../assets/variant_proportions.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function HelpDialogContent() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: 800,
        position: 'relative',
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Variant Fitness" {...a11yProps(0)} />
          <Tab label="Global Overview" {...a11yProps(1)} />
          <Tab label="Country Selector" {...a11yProps(2)} />
          <Tab label="State Selector" {...a11yProps(3)} />
          <Tab label="Key Countries" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <h1 className={styles.mainText}>How to Read the Fitness Charts</h1>
            {/* <img src={BubbleChart} className={styles.image} alt='Bubble chart'/>
            <img src={FitnessTable} className={styles.image} alt='Fitness table'/> */}
            <img src={VariantFitness} className={styles.image} alt='Variant fitness explanations'/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <h1 className={styles.mainText}>How to Use the Global Map</h1>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <h1 className={styles.mainText}>How to Use the Country Selector</h1>
            <img src={VariantProportions} className={styles.image} alt='Variant proportions explanations'/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
            <h1 className={styles.mainText}>How to Use the State Selector</h1>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
            <h1 className={styles.mainText}>How to Read the Key Countries</h1>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
