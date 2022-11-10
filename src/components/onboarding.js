import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import maskedElbowBump from '../assets/masked-elbow-bump.jpeg';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../css/onboarding.module.css';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { useLocalStorage } from './localStorage';
import Coronavirus from '../assets/coronavirus-bacteria-svgrepo-com.svg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OnboardingDialog = styled(Dialog)(() => ({       
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        '& .MuiDialogContent-root': {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        '& .MuiDialogActions-root': {
            justifyContent: 'space-between'
        }
    })   
);

export default function Onboarding(props) {
  const [open, setOpen] = useState(true); // onboarding dialog open/close state
  const [checked, setChecked] = useState(false); // checkbox state for the UI
  const [isAccessible, setIsAccessible] = useState(true); // local storage accessibility state
  const [localCheck, setLocalCheck] = useLocalStorage("localCheck", false, setIsAccessible); // checkbox state for local storage

  const handleClose = () => {
    setOpen(false);
    props.setOnboardingUserOpen(false);
    if (checked) { // set the checkbox state in local storage
        setLocalCheck(true);
    } else {
        setLocalCheck(false);
    }
  };

  const startTutorial = () => {
    handleClose();
    props.handleTutorialStep1();
  }

  const handleChange = (event) => {
    setChecked(event.target.checked); // only set the UI checkbox
  };

  useEffect(() => {
    if (props.onboardingUserOpen) {
        setOpen(true);
    }
})

//   const hideContent = (event) => {
//     var iframe = document.getElementById("shiny_vt");
//     const box = iframe.contentWindow.document.getElementById('variant_fitness');

//     // 👇️ removes element from DOM
//     box.style.display = 'none';
//   };

  if (!localCheck) {
    return ( 
        <div id='OnboardingDialog' style={{display: 'flex'}}>
            <OnboardingDialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="welcome-onboarding-dialog"
            >
                <DialogTitle>{open ? (
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: '#305252',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
                </DialogTitle>
                <DialogContent>
                    <div className={styles.dialogContent}>
                        <div className={styles.imageRoot}>
                            <img src={Coronavirus} className={styles.image} alt='Masked elbow bump'/>
                        </div>
                        <h1 className={styles.welcome}>Welcome to the Global COVID-19 Variant Tracker! </h1>
                        <h3 className={styles.dialogText}>{'Some main blurb about how the user can use the Variant Tracker'}</h3> 
                        <p className={styles.dialogText}>The Variant Tracker... (the what / why, ex: leverages data, science, and technology to quickly estimate the probability that one or more infected
                         individuals will be present at an event or social gathering given the size and reported cases in the area).</p>
                    </div>
                </DialogContent>
                <DialogActions>
                    {isAccessible ? 
                        (
                        <div>
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'do not show again' }}                       
                            /> Don't show me again
                        </div>
                        ) : <div />
                    }
                    <div>
                        {/* <Button onClick={handleClose} className={styles.skip}>SKIP</Button> */}
                        <Button onClick={startTutorial} sx={{color: '#305252'}}>TAKE THE TOUR</Button>
                    </div>              
                    
                </DialogActions>
            </OnboardingDialog>
        </div>
      );
  } else {
      return null;
  }
}
