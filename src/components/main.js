import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Onboarding from './onboarding';
import Help from './helpDialog';
import { Backdrop } from '@mui/material';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import OnboardingSteps from './onboardingSteps';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import Button from '@mui/material/Button';

const OnboardingPopper = styled(Popper)(({ theme }) => ({
  zIndex: 1110, 
  width: 'auto', 
  maxWidth: '350px', 
  padding: '10px 0px',
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
    marginTop: '0.4em',
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

  const gridNavbarRef = React.useRef();
  const gridHelpButtonRef = React.useRef();
  const onboardingButtonRef = React.useRef();
  const dataDownloadRef = React.useRef();
  const variantFitnessRef = React.useRef();

  const [onboardingUserOpen, setOnboardingUserOpen] = React.useState(true);

  const [helpButtonPopperOpen, setHelpButtonPopperOpen] = React.useState(false);
  const [onboardingButtonPopperOpen, setOnboardingButtonPopperOpen] = React.useState(false);
  const [navbarPopperOpen, setNavbarPopperOpen] = React.useState(false);
  const [dataDownloadPopperOpen, setDataDownloadPopperOpen] = React.useState(false);
  const [variantFitnessPopperOpen, setVariantFitnessPopperOpen] = React.useState(false);

  const [arrowRef1, setArrowRef1] = React.useState(null);
  const [arrowRef2, setArrowRef2] = React.useState(null);
  const [arrowRef3, setArrowRef3] = React.useState(null);
  const [arrowRef4, setArrowRef4] = React.useState(null);
  const [arrowRef5, setArrowRef5] = React.useState(null);

  const [helpButtonAnchorEl, setHelpButtonAnchorEl] = React.useState(null);
  const [navbarAnchorEl, setNavbarAnchorEl] = React.useState(null);
  const [onboardingButtonAnchorEl, setOnboardingButtonAnchorEl] = React.useState(null);
  const [dataDownloadAnchorEl, setDataDownloadAnchorEl] = React.useState(null);
  const [variantFitnessAnchorEl, setVariantFitnessAnchorEl] = React.useState(null);
  
  const handleOnboardingUserOpen = () => {
    setOnboardingUserOpen(true);
  }

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

  const handleVariantFitnessPopperClose = () => {
    setVariantFitnessPopperOpen(false);
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
    setDataDownloadAnchorEl(onboardingButtonRef.current);   
    setNavbarPopperOpen(false);
    setDataDownloadPopperOpen(true);
  }

  const handleTutorialStep4 = () => {
    setVariantFitnessAnchorEl(onboardingButtonRef.current);   
    setVariantFitnessPopperOpen(true);
    setDataDownloadPopperOpen(false);
  }

  const handleTutorialStep5 = () => {
    setOnboardingButtonAnchorEl(onboardingButtonRef.current);    
    setOnboardingButtonPopperOpen(true);
    setVariantFitnessPopperOpen(false);
  }

  /* Help slides */

  const [helpClicked, setHelpClicked] = React.useState(false);

  const handleHelpChange = () => {
    setHelpClicked(!helpClicked);
  };

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
          
      <Box component="main" sx={{ flexGrow: 1, position: 'relative', height: window.innerHeight }}>  
        <div ref={dataDownloadRef} className='downloadDataAnchor'></div>   
        <Button color="inherit" onClick={handleOnboardingUserOpen} ref={onboardingButtonRef} className='onboardingButton'>Onboarding</Button>
        <IconButton
          color="inherit"
          aria-label="startTutorial"
          onClick={handleHelpChange}
          className='helpButton'
        >
          <HelpOutlinedIcon ref={gridHelpButtonRef}/>
        </IconButton>
      
        <iframe id="shiny_vt" src="http://ppi-variant-dynamics-prod-39a4c5a9f260fa0a.elb.us-east-1.amazonaws.com/" /* src="http://127.0.0.1:5292" */ title="RShiny VT" height="100%" width="100%" frameBorder="0">         
            <Onboarding handleTutorialStep1={handleTutorialStep1} onboardingUserOpen={onboardingUserOpen} setOnboardingUserOpen={setOnboardingUserOpen}/>
            <Help helpClicked={helpClicked} setHelpClicked={setHelpClicked}/>
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
      
        <Backdrop open={navbarPopperOpen}>
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

        <Backdrop open={dataDownloadPopperOpen} >
            <OnboardingPopper 
            open={dataDownloadPopperOpen} 
            anchorEl={dataDownloadAnchorEl} 
            placement='bottom' 
            transition 
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
                      offset: [-(window.innerWidth / 1.5), 0],
                    }
                  }       
            ]}>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps}>
                <OnboardingBox>
                    <Arrow className='MuiPopper-arrow' sx={{left: '-155px !important'}} ref={setArrowRef4} />
                    <OnboardingSteps step3={true} handleDataDownloadPopperClose={handleDataDownloadPopperClose} handleTutorialStep4={handleTutorialStep4}/>
                </OnboardingBox>
                </Fade>
            )}
            </OnboardingPopper>
        </Backdrop>

        <Backdrop open={variantFitnessPopperOpen} >
            <OnboardingPopper 
            open={variantFitnessPopperOpen} 
            anchorEl={variantFitnessAnchorEl} 
            placement='bottom' 
            transition 
            modifiers={[
                {
                    name: 'arrow',
                    enabled: true,
                    options: {
                        element: arrowRef5,
                    }
                  },
                  {
                    name: "offset",
                    enabled: true,
                    options: {
                      offset: [-(window.innerWidth / 1.5), (window.innerHeight / 2.7)],
                    }
                  }      
            ]}>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps}>
                <OnboardingBox>
                    <Arrow className='MuiPopper-arrow' sx={{left: '-170px !important'}} ref={setArrowRef5} />
                    <OnboardingSteps step4={true} handleVariantFitnessPopperClose={handleVariantFitnessPopperClose} handleTutorialStep5={handleTutorialStep5}/>
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
                    <OnboardingSteps step5={true} handleOnboardingButtonPopperClose={handleOnboardingButtonPopperClose} />
                </OnboardingBox>
                </Fade>
            )}
            </OnboardingPopper>
        </Backdrop>

    </Box>
  );
}
