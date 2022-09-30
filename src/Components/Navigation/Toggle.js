import React  from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function Toggle(props) {

    return (
        <>

            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Show"
                    name="radio-buttons-group" 
                     size="large" >
                    <FormControlLabel value="actor" onChange={(e) => props.getValueFromToggle(e)} control={<Radio />} label="Actor" />
                    <FormControlLabel value="shows" onChange={(e) => props.getValueFromToggle(e)} control={<Radio />} label="Show" />
                </RadioGroup>
            </FormControl>
        </>
    )
}
export default Toggle;