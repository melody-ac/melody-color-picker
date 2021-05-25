import React from 'react'

const RgbSlider = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <input 
            type='range'
            min='0'
            max='255'
            value= {props.value} 
            onChange= {(e) => props.onChange(e.target.value)}
            ></input>
        </div>
    )
}
export default RgbSlider;