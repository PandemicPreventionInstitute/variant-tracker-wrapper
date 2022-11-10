import { Button, Stack } from "@mui/material";

export default function NavButtons() {
    return (
        <div>
            <div>
                <Stack spacing={2} direction="row" style={{justifyContent: 'center'}}>
                    <Button variant="contained" style={{backgroundColor: '#235351'}}>About</Button>
                    <Button variant="contained" style={{backgroundColor: '#235351'}}>Variant Fitness</Button>
                    <Button variant="contained" style={{backgroundColor: '#235351'}}>Global Overview</Button>
                    <Button variant="contained" style={{backgroundColor: '#235351'}}>Country Selector</Button>
                </Stack>
            </div>
        </div>
        
    )
}