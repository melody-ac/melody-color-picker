import React, {useState, useEffect} from 'react'
import RgbSlider from './RgbSlider'
import RgbNumber from './RgbNumber'
import Card from 'react-bootstrap/Card'

const ColorPickerCard = ({setColor}) => {
    const [red, setRed] = useState(128);
    const [green, setGreen] = useState(128);
    const [blue, setBlue] = useState(128);

useEffect(() => {
    setColor({r: red, b: blue, g:green})

}, [blue, green, red, setColor])


    return( 
        <div className= "card">
            <Card style={{width: "15em"}}>
                <Card.Body>
                    <RgbSlider label= 'R' value= {red} onChange={setRed}/>
                    <RgbSlider label= 'G' value= {green} onChange={setGreen}/>
                    <RgbSlider label= 'B' value= {blue} onChange={setBlue}/>
                    <div 
                    className= "previewCircle" 
                    style= {{backgroundColor: `rgb(${red},${green},${blue})`}}></div>
                    <RgbNumber label= 'R' value= {red} onChange={setRed}/>
                    <RgbNumber label= 'G' value= {green} onChange={setGreen}/>
                    <RgbNumber label= 'B' value= {blue} onChange={setBlue}/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ColorPickerCard;