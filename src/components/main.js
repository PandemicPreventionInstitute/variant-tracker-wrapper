import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Onboarding from './onboarding';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import TableChartIcon from '@mui/icons-material/TableChart';
import LanguageIcon from '@mui/icons-material/Language';
import FlagIcon from '@mui/icons-material/Flag';
import Fitness from './fitnessHelp';
import {Routes, Route} from 'react-router-dom';
import NavButtons from './navButtons';
import { Backdrop } from '@mui/material';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import OnboardingSteps from './onboardingSteps';
import { TableBarRounded } from '@mui/icons-material';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import Button from '@mui/material/Button';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  
}));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
//   backgroundColor: '#235351'
// }));

const OnboardingPopper = styled(Popper)(({ theme }) => ({
  zIndex: 1110, 
  width: 'auto', 
  maxWidth: '350px', 
  padding: '10px 0px',
  // left: '20px !important',
  // top: '10px !important',
  '&[data-popper-placement*="right"] .MuiPopper-arrow': {
      left: 0,
      marginLeft: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
          borderWidth: '1em 1em 1em 0',
          borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
      },
  },
  '&[data-popper-placement*="left"] .MuiPopper-arrow': {
      right: 0,
      marginRight: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
          borderWidth: '1em 0 1em 1em',
          borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
      },
  },
  '&[data-popper-placement*="bottom"] .MuiPopper-arrow': {
    top: 0,
    left: 0,
    marginTop: '0.38em',
    width: '3em',
    height: '1em',
    '&::before': {
      borderWidth: '0 1em 1em 1em',
      borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
    }
  }
}));

const OnboardingBox = styled(Box)(() => ({
  p: 1,  
  boxShadow: '0 0 10px rgba(0,0,0,0.2)', 
  borderRadius: '16px', 
  padding: '0px 30px 0px 10px',
  backgroundColor: 'white'
}));

const Arrow = styled('div')({
  position: 'absolute',
  fontSize: 7,
  width: '3em',
  height: '3em',
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    borderStyle: 'solid',
  },
});

export default function MiniDrawer() {
  const theme = useTheme();

  const gridNavbarRef = React.useRef();
  const gridHelpButtonRef = React.useRef();
  const onboardingButtonRef = React.useRef();
  const dataDownloadRef = React.useRef();

  // const [open, setOpen] = React.useState(false);
  const [fitnessClicked, setFitnessClicked] = React.useState(false);

  const [onboardingUserOpen, setOnboardingUserOpen] = React.useState(true);

  const [helpButtonPopperOpen, setHelpButtonPopperOpen] = React.useState(false);
  const [onboardingButtonPopperOpen, setOnboardingButtonPopperOpen] = React.useState(false);
  const [navbarPopperOpen, setNavbarPopperOpen] = React.useState(false);
  const [dataDownloadPopperOpen, setDataDownloadPopperOpen] = React.useState(false);

  const [arrowRef1, setArrowRef1] = React.useState(null);
  const [arrowRef2, setArrowRef2] = React.useState(null);
  const [arrowRef3, setArrowRef3] = React.useState(null);
  const [arrowRef4, setArrowRef4] = React.useState(null);

  const [helpButtonAnchorEl, setHelpButtonAnchorEl] = React.useState(null);
  const [navbarAnchorEl, setNavbarAnchorEl] = React.useState(null);
  const [onboardingButtonAnchorEl, setOnboardingButtonAnchorEl] = React.useState(null);
  const [dataDownloadAnchorEl, setDataDownloadAnchorEl] = React.useState(null);
  
  const handleOnboardingUserOpen = () => {
    setOnboardingUserOpen(true);
  }

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const handleFitnessChange = () => {
    setFitnessClicked(!fitnessClicked);
  };

  const handleHelpButtonPopperClose = () => {
    setHelpButtonPopperOpen(false);
  }

  const handleNavbarPopperClose = () => {
    setNavbarPopperOpen(false);
  }

  const handleOnboardingButtonPopperClose = () => {
      setOnboardingButtonPopperOpen(false);
  }

  const handleDataDownloadPopperClose = () => {
    setDataDownloadPopperOpen(false);
}

  const handleTutorialStep1 = () => {
    setHelpButtonAnchorEl(gridHelpButtonRef.current);
    setHelpButtonPopperOpen(true);  
  }

  const handleTutorialStep2 = () => {
    setNavbarAnchorEl(onboardingButtonRef.current);
    setHelpButtonPopperOpen(false);
    setNavbarPopperOpen(true);
  }

  const handleTutorialStep3 = () => {
    setOnboardingButtonAnchorEl(onboardingButtonRef.current);
    setNavbarPopperOpen(false);
    setOnboardingButtonPopperOpen(true);
  }

  const handleTutorialStep4 = () => {
    setDataDownloadAnchorEl(dataDownloadRef.current);
    setDataDownloadPopperOpen(true);
    setOnboardingButtonPopperOpen(false);
  }

  console.log('inner width: ', window.innerWidth);
  console.log('inner height: ', window.innerHeight);

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      {/* <div ref={gridNavbarRef}></div> */}

      {/* <AppBar position="fixed" sx={{backgroundColor: '#235351'}}>
        <Toolbar sx={{width: '100%'}} ref={gridNavbarRef}>
          <div>
            <Button color="inherit" onClick={handleOnboardingUserOpen} ref={onboardingButtonRef}>Onboarding</Button>
          </div>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Global Covid-19 Variant Tracker V1.0
          </Typography>
          <div >           
            <IconButton
              color="inherit"
              aria-label="startTutorial"
              onClick={handleFitnessChange}
            >
              <HelpOutlinedIcon ref={gridHelpButtonRef}/>
            </IconButton>
          </div>          
        </Toolbar>       
      </AppBar> */}

      
           
      <Box component="main" sx={{ flexGrow: 1, position: 'relative', height: window.innerHeight/* , p: 3 */ }}>  
        <div ref={dataDownloadRef} className='downloadDataAnchor'></div>   
        <Button color="inherit" onClick={handleOnboardingUserOpen} ref={onboardingButtonRef} className='onboardingButton'>Onboarding</Button>
        <IconButton
          color="inherit"
          aria-label="startTutorial"
          onClick={handleFitnessChange}
          className='helpButton'
        >
          <HelpOutlinedIcon ref={gridHelpButtonRef}/>
        </IconButton>
      
        <iframe id="shiny_vt" /* src="http://ppi-variant-dynamics-prod-39a4c5a9f260fa0a.elb.us-east-1.amazonaws.com/" */ src="http://127.0.0.1:5153" title="RShiny VT" height="100%"/* {window.innerHeight} */ width="100%" frameBorder="0">
            
          
            <Onboarding handleTutorialStep1={handleTutorialStep1} onboardingUserOpen={onboardingUserOpen} setOnboardingUserOpen={setOnboardingUserOpen}/>
            <Fitness fitnessClicked={fitnessClicked} setFitnessClicked={setFitnessClicked}/>
        </iframe>       
      </Box>

      <Backdrop open={helpButtonPopperOpen}>
            <OnboardingPopper 
                open={helpButtonPopperOpen} 
                anchorEl={helpButtonAnchorEl} 
                placement='bottom' 
                transition
                modifiers={[
                    {
                        name: 'arrow',
                        enabled: true,
                        options: {
                            element: arrowRef1,
                        }
                    }
                ]}
            >                           
            {({ TransitionProps }) => (
                <Fade {...TransitionProps}>
                <OnboardingBox>
                    <Arrow className='MuiPopper-arrow' ref={setArrowRef1} />
                    <OnboardingSteps step1={true} handleHelpButtonPopperClose={handleHelpButtonPopperClose} handleTutorialStep2={handleTutorialStep2}/>
                </OnboardingBox>
                </Fade>
            )}
            </OnboardingPopper>
        </Backdrop>
      
        <Backdrop open={navbarPopperOpen} >
            <OnboardingPopper 
            open={navbarPopperOpen} 
            anchorEl={navbarAnchorEl} 
            placement='bottom' 
            transition 
            className='navbarPopper'
            modifiers={[
                {
                    name: 'arrow',
                    enabled: true,
                    options: {
                        element: arrowRef2,
                    }
                },
                {
                  name: "offset",
                  enabled: true,
                  options: {
                    offset: [-(window.innerWidth / 2), 0],
                  }
                }
            ]}>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps}>
                <OnboardingBox>
                    <Arrow className='MuiPopper-arrow' sx={{left: '-155px !important'}} ref={setArrowRef2} />
                    <OnboardingSteps step2={true} handleNavbarPopperClose={handleNavbarPopperClose} handleTutorialStep3={handleTutorialStep3}/>
                </OnboardingBox>
                </Fade>
            )}
            </OnboardingPopper>
        </Backdrop>

        <Backdrop open={onboardingButtonPopperOpen} >
            <OnboardingPopper 
            open={onboardingButtonPopperOpen} 
            anchorEl={onboardingButtonAnchorEl} 
            placement='bottom' 
            transition 
            modifiers={[
                {
                    name: 'arrow',
                    enabled: true,
                    options: {
                        element: arrowRef3,
                    }
                }
            ]}>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps}>
                <OnboardingBox>
                    <Arrow className='MuiPopper-arrow' ref={setArrowRef3} />
                    <OnboardingSteps step3={true} handleOnboardingButtonPopperClose={handleOnboardingButtonPopperClose} handleTutorialStep4={handleTutorialStep4}/>
                </OnboardingBox>
                </Fade>
            )}
            </OnboardingPopper>
        </Backdrop>

        <Backdrop open={dataDownloadPopperOpen} >
            <OnboardingPopper 
            open={dataDownloadPopperOpen} 
            anchorEl={dataDownloadAnchorEl} 
            placement='right' 
            transition 
            // className='dataDownloadPopper'
            modifiers={[
                {
                    name: 'arrow',
                    enabled: true,
                    options: {
                        element: arrowRef4,
                    }
                  },
                  {
                    name: "offset",
                    enabled: true,
                    options: {
                      offset: [(window.innerHeight <= 800 ? (window.innerHeight / 1.5) : 
                      (window.innerHeight <= 1050 ? (window.innerHeight / 1.85) :
                      (window.innerHeight <= 1300 ? (window.innerHeight / 1.75) : 
                      (window.innerHeight / 2.55))))
                        , (window.innerWidth <= 1500 ? (window.innerWidth / 5.3) : 
                        (window.innerWidth / 3.2))],
                    }
                  }                 
            ]}>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps}>
                <OnboardingBox>
                    <Arrow className='MuiPopper-arrow' sx={{top: '100px !important'}} ref={setArrowRef4} />
                    <OnboardingSteps step4={true} handleDataDownloadPopperClose={handleDataDownloadPopperClose}/>
                </OnboardingBox>
                </Fade>
            )}
            </OnboardingPopper>
        </Backdrop>

    </Box>
  );
}