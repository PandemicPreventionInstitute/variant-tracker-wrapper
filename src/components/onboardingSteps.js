import * as React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';

const OnboardingBox1 = styled(Box)(() => ({       
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        width: '100%'
    })   
);

const OnboardingBox2 = styled(Box)(() => ({       
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

const StepBox = styled(Box)(() => ({ 
        paddingLeft: '10px'  
    })         
);

export default function OnboardingSteps(props) {
    return (
        <OnboardingBox1>
            <OnboardingBox1 sx={{flexFlow: 'row nowrap'}}>
                {props.step1 ? 
                <StepBox>
                    <h3 className="serif">Learn more about the figures</h3>
                    <p>Click on the question mark to see more detail about each visual</p>
                </StepBox> : null}
                {props.step2 ?
                <StepBox>
                    <h3 className="serif">Navigate to the different sections </h3>
                    <p>Click on the middle buttons of the navigation bar to jump to the different sections</p>
                </StepBox> : null}
                {props.step3 ? 
                <StepBox>
                    <h3 className="serif">Download the data</h3>
                    <p>Click on the 'About' text at the top to go to the About section of the page and download a CSV of the data used to create the visualizations</p>
                </StepBox> : null}
                {props.step4 ? 
                <StepBox>
                    <h3 className="serif">Learn about Variant Fitness</h3>
                    <p>Click on the 'Learn about Variant Fitness' button to see what 'Variant Fitness' means</p>
                </StepBox> : null}
                {props.step5 ? 
                <StepBox>
                    <h3 className="serif">View the onboarding</h3>
                    <p>Click on the onboarding button to go through these tutorial steps again</p>
                </StepBox> : null}
            </OnboardingBox1>
                         
            <OnboardingBox2>
                <Box>
                    {props.step1 ? <h4>1/5</h4> : null}
                    {props.step2 ? <h4>2/5</h4> : null}
                    {props.step3 ? <h4>3/5</h4> : null}
                    {props.step4 ? <h4>4/5</h4> : null}
                    {props.step5 ? <h4>5/5</h4> : null}
                </Box>
                {props.step5 ? 
                    (<Box sx={{display: 'flex'}}>              
                        <Button 
                        onClick={props.handleOnboardingButtonPopperClose} >
                        FINISH
                        </Button>
                    </Box>) : 
                    (<Box sx={{display: 'flex'}}>
                        <Button 
                            onClick={props.step1 ? props.handleHelpButtonPopperClose : (props.step2 ? props.handleNavbarPopperClose : (props.step3 ? props.handleDataDownloadPopperClose : props.handleVariantFitnessPopperClose))} 
                            sx={{color: 'inherit'}}>SKIP ALL
                        </Button>
                        <Button 
                            onClick={props.step1 ? props.handleTutorialStep2 : (props.step2 ? props.handleTutorialStep3 : (props.step3 ? props.handleTutorialStep4 : props.handleTutorialStep5))} >
                            NEXT <ChevronRightIcon />
                        </Button>
                    </Box>)}            
            </OnboardingBox2>
        </OnboardingBox1>        
    )
};
