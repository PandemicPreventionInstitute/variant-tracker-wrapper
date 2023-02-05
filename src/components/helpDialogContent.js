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
import VariantFitness from '../assets/variant_fitness.png';
import Cases from '../assets/cases.png';
import Prevalence from '../assets/prevalence.png';
import VariantRisk from '../assets/variant_risk.png';
import FitnessTable from '../assets/fitness_table.png';

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
          <Tab label="Variant Risk Assessment" {...a11yProps(1)} />
          <Tab label="Variant Fitness Table" {...a11yProps(2)} />
          <Tab label="Variant Prevalence" {...a11yProps(3)} />
          <Tab label="Inferred Cases" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <h1 className={styles.mainText}>How to Read the Variant Fitness Chart</h1>
            <img src={VariantFitness} className={styles.image} alt='Explanation of weekly variant fitness advantage, using visuals displaying how the number of infections of a variant could change over time.'/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <h1 className={styles.mainText}>How to Read the Variant Risk Assessment</h1>
            <img src={VariantRisk} className={styles.image} alt='Explanation of how to interpret the bubble chart meant to assess the risk posed by a novel variant.'/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <h1 className={styles.mainText}>How to Read and Use the Variant Fitness Table</h1>
            <img src={FitnessTable} className={styles.image} alt='Explanation of how to use the variant fitness table.'/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
            <h1 className={styles.mainText}>How to Read and Use the Variant Prevalence</h1>
            <img src={Prevalence} className={styles.image} alt='Explanation of how to interpret the variant prevalence chart.'/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
            <h1 className={styles.mainText}>How to Read and Use the Inferred Cases</h1>
            <img src={Cases} className={styles.image} alt='Explanation of how to interpret the inferred cases with a variant chart.'/>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
