import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number) => void
    values: number[]
    onChangeDoubleRange: (newValue: number[]) => void
}


const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {



    const handleChange = (event: Event, newValue: number | number[]) => {
        props.onChangeDoubleRange(newValue as number[]);
    };

    return (
        <>
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={props.values}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                />
            </Box>
        </>
    )
}


export default SuperDoubleRange