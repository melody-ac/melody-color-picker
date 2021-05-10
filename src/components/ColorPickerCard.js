import React, {useState} from 'react'
import RgbSlider from './RgbSlider'
import RgbNumber from './RgbNumber'

const ColorPickerCard = () => {
    const [red, setRed] = useState(128);
    const [green, setGreen] = useState(128);
    const [blue, setBlue] = useState(128);
    return( 
        <div className= "card">
            <RgbSlider lable= 'R' value= {red} onChange={setRed}/>
            <RgbSlider lable= 'G' value= {green} onChange={setGreen}/>
            <RgbSlider lable= 'B' value= {blue} onChange={setBlue}/>
            <div className= "previewCircle" style= {{backgroundColor: `rgb(${red},${green},${blue})`}}></div>
            <RgbNumber lable= 'R' value= {red} onChange={setRed}/>
            <RgbNumber lable= 'G' value= {green} onChange={setGreen}/>
            <RgbNumber lable= 'B' value= {blue} onChange={setBlue}/>
        </div>
    )
}

export default ColorPickerCard;