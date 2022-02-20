import React from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {

    const [values, setValues] = React.useState<number[]>([20, 37]);

    const onChangeRange = (newValue: number) => {
        console.log(values)
        setValues([newValue, values[1]])
    }
    const onChangeDoubleRange = (newValue: number[]) => {
        console.log(newValue)
        setValues(newValue)
    }

    return (
        <div>
            homeworks 11
            <div>

                <SuperRange
                    onChangeRange={onChangeRange}
                    value={values[0]}
                />
                <span>{values[0]}</span>
            </div>

            <div>

                <SuperDoubleRange
                    onChangeRange={onChangeRange}
                    values={values}
                    onChangeDoubleRange={onChangeDoubleRange}
                />
                <br/>
                <span>MIN: {values[0]}</span>
                <br/>
                <span>MAX: {values[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
        </div>
    )
}

export default HW11
