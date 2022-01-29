import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {saveState} from './localStorage/localStorage'
import s from './SuperButtonClass.module.css'



function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        saveState<string>('editable-span-value', '')
        setValue('')
    }

    return (
        <div>
            <b>homework 6</b>

            {/*should work (должно работать)*/}
            <div>

                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save} className={s.SuperButtonClass}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>


            <hr/>
        </div>
    )
}

export default HW6
