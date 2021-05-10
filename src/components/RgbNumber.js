import React from 'react'

const RgbNumber = (props) => {
    return(
        <div>
         <lable>{props.lable}</lable>
            <input 
            type='number'
            min='0'
            max='255'
            value= {props.value} 
            onChange= {(e) => props.onChange(e.target.value)}
            ></input>
        </div>
    )
}
export default RgbNumber;