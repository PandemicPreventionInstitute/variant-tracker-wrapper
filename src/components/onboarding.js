import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../css/onboarding.module.css';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { useLocalStorage } from './localStorage';
import Coronavirus from '../assets/coronavirus-bacteria-svgrepo-com.svg';
import Laptop from '../assets/laptop.svg';
import RotatePhone from '../assets/smartphone-rotate.svg';
import { Grid } from '@mui/material';

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

export function delay(time, setOpen) {  
    const timeout = setTimeout(() => setOpen(true), time);
    return () => clearTimeout(timeout);
}

export default function Onboarding(props) {
    const [open, setOpen] = useState(false); // onboarding dialog open/close state
    const [checked, setChecked] = useState(false); // checkbox state for the UI
    const [isAccessible, setIsAccessible] = useState(true); // local storage accessibility state
    const [localCheck, setLocalCheck] = useLocalStorage("localCheck", false, setIsAccessible); // checkbox state for local storage


    useEffect(() => {
        if (props.iframeLoaded === true) {
            console.log('iframe loaded');
            delay(20000, setOpen);
        } else {
            console.log('iframe not loaded');
            setOpen(false);
        }
    }, [props.iframeLoaded]);
    

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
                            <img src={Coronavirus} className={styles.image} alt='Coronavirus image'/>
                        </div>
                        <h1 className={styles.welcome}>Welcome to the Global COVID-19 Variant Tracker! </h1>
                        <h3 className={styles.dialogText1}>Gain a better understanding of global SARS-CoV-2 emergence and evolutionary variant transmission dynamics 
                         in specific regions across the world</h3> 
                        <p className={styles.dialogText2}>The Variant Tracker leverages SARS-CoV-2 sequencing data to provide users with global and 
                        country-specific transmission dynamics.The underlying model allows users to explore the latest updates on the COVID-19 variants 
                        by leveraging data from countries with high-sequencing capacity to provide real-time estimates for countries with less capacity. </p>
                        <Grid container spacing={0} sx={{justifyContent: 'center'}}>
                            <Grid item xs={5} sx={{alignItems: 'center !important'}}>
                                <img src={Laptop} className={styles.smallImage} alt='Laptop'/>                                
                            </Grid>
                            <Grid item xs={5} >
                                <img src={RotatePhone} className={styles.smallImage} alt='Rotated phone'/>
                            </Grid>                           
                            <Grid item xs={12} >
                                <p >Optimal Viewing: The Variant Tracker is best viewed on a desktop, 
                                if using a mobile phone rotate the device horizontally for the best experience.</p>
                            </Grid>                          
                        </Grid>
                    </div>
                </DialogContent>
                <DialogActions className={styles.dialogActionButtons}>
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
