import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../css/helpDialog.module.css';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import ChevronRight from '@mui/icons-material/ChevronRight';
import BubbleChart from '../assets/bubble_chart.png';
import FitnessTable from '../assets/fitness_table.png';
import HelpDialogContent from './helpDialogContent';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FitnessHelpDialog = styled(Dialog)(() => ({       
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        '& .MuiDialogContent-root': {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%'
        },
        '& .MuiDialogActions-root': {
            justifyContent: 'space-between'
        },
        '& .MuiPaper-root': {
            maxWidth: '900px'
        },
        '& .MuiDialogTitle-root': {
            padding: '24px 24px'
        },
    })   
);

const BottomNavBox = styled(Box)(() => ({       
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexFlow: 'row nowrap', 
    justifyContent: 'space-between', 
    width: '90%', 
    marginLeft: '40px', 
    alignContent: 'center'
})   
);

export default function Help(props) {
    const [open, setOpen] = useState(false); // onboarding dialog open/close state

    const [fitnessSlide, setFitnessSlide] = useState(false);
    const [globalSlide, setGlobalSlide] = useState(false);
    const [countrySelectSlide, setCountrySelectSlide] = useState(false);
    const [keyCountriesSlide, setKeyCountriesSlide] = useState(false);

    useEffect(() => {
        if (props.helpClicked) {
            setOpen(true);
            setFitnessSlide(true);
        } else {
            setOpen(false);
        }
    });

    const handleClose = () => {
        setOpen(false);
        props.setHelpClicked(false);
    };

    const handleFitnessChange = () => {
        setFitnessSlide(false);
        setGlobalSlide(true);
    };

    const handleGlobalChange = () => {
        setGlobalSlide(false);
        setCountrySelectSlide(true);
    }

    const handleCountrySelectChange = () => {
        setCountrySelectSlide(false);
        setKeyCountriesSlide(true);
    }

    return ( 
        <div id='FitnessHelpDialog' style={{display: 'flex'}}>
            <FitnessHelpDialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="fitness-help-dialog"
            >
                <DialogTitle>{open ? (
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: '#305252'
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
                </DialogTitle>
                <DialogContent>
                    <div className={styles.dialogContent}>                   
                        {/* <h1 className={styles.mainText}>How to Interpret the Fitness Charts</h1>
                        <img src={BubbleChart} className={styles.image} alt='Bubble chart'/>
                        <img src={FitnessTable} className={styles.image} alt='Fitness table'/>                    */}
                        <HelpDialogContent />
                    </div>
                    
                </DialogContent>
                {/* <BottomNavBox>
                    <Box>
                        {fitnessSlide ? <h4>1/4</h4> : null}
                        {globalSlide ? <h4>2/4</h4> : null}
                        {countrySelectSlide ? <h4>3/4</h4> : null}
                        {keyCountriesSlide ? <h4>4/4</h4> : null}
                    </Box>
                    {!keyCountriesSlide ?
                        <Box sx={{display: 'flex'}}>
                            <Button 
                                onClick={
                                    fitnessSlide ? handleFitnessChange : 
                                    globalSlide ? handleGlobalChange :
                                    countrySelectSlide ? handleCountrySelectChange :
                                    null
                                } 
                                sx={{color: '#305252'}}>
                                NEXT <ChevronRight />
                            </Button>
                        </Box> 
                    : null}       
                </BottomNavBox> */}
            </FitnessHelpDialog>
        </div>
    );
}
