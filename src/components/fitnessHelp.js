import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../css/fitnessHelp.module.css';
import { styled } from '@mui/material/styles';
import fitnessChart from '../assets/fitnessChart.png';
import fitnessChartYaxis from '../assets/fitnessChartYaxis.png';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { SouthEast } from '@mui/icons-material';
import { Box } from '@mui/material';
import ChevronRight from '@mui/icons-material/ChevronRight';

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
            textAlign: 'center'
        },
        '& .MuiDialogActions-root': {
            justifyContent: 'space-between'
        }
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

export default function Fitness(props) {
  const [open, setOpen] = useState(false); // onboarding dialog open/close state

  useEffect(() => {
      if (props.fitnessClicked) {
          setOpen(true);
      } else {
          setOpen(false);
      }
  })

  const handleClose = () => {
    setOpen(false);
    props.setFitnessClicked(false);
  };

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
                        color: '#318AD0',
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
            </DialogTitle>
            <DialogContent>
                <div className={styles.dialogContent}>                   
                    <h1 className={styles.mainText}>How to Interpret the Fitness Chart</h1>
                    <div className={styles.imageRoot}>
                        <img src={fitnessChart} className={styles.image} alt='Fitness chart'/>
                    </div>
                    <div className={styles.yAxisImageRoot}>
                        <p className={styles.yAxisExplain}>These are the variants
                            <div className={styles.southEastArrow}><SouthEast /></div>                           
                        </p>
                        <img src={fitnessChartYaxis} className={styles.Yaxis} alt='Fitness chart y axis'/>
                    </div>
                    <h3 className={styles.dialogText}>What is a 'fit' variant?</h3> 
                    <p className={styles.dialogText}>A 'fit' variant is...</p>
                </div>
            </DialogContent>
            <BottomNavBox>
                <Box>
                    <h4>1/3</h4>
                </Box>
                <Box sx={{display: 'flex'}}>
                    <Button 
                        onClick={props.step1 ? props.handleTutorialStep2 : props.handleTutorialStep3} >
                        NEXT <ChevronRight />
                    </Button>
                </Box>        
            </BottomNavBox>
        </FitnessHelpDialog>
    </div>
    );
}
