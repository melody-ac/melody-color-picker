import React, {useState} from 'react'
import ColorPickerCard from './ColorPickerCard'
import Button from 'react-bootstrap/Button'
import { propTypes } from 'react-bootstrap/esm/Image'


const SwatchCreator = (props) => {
    const [title,setTitle] = useState('');
    const [color1, setColor1] = useState({})
    const [color2, setColor2] = useState({})
    const [color3, setColor3] = useState({})
    const [color4, setColor4] = useState({})

    const saveSwatchButton = () => {
        const swatch = {
            title: title,
            colors: [color1, color2, color3, color4]
        }
        props.saveSwatch(swatch)
    }


    return (
        <div>
            <input placeholder='Swatch Name' value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <div className='cardWrapper'>
            <ColorPickerCard color={color1} setColor={setColor1}/>
            <ColorPickerCard color={color2} setColor={setColor2}/>
            <ColorPickerCard color={color3} setColor={setColor3}/>
            <ColorPickerCard color={color4} setColor={setColor4}/>
        </div>
        <Button onClick={saveSwatchButton}>Save</Button>
        </div>
    )
}

export default SwatchCreator;

// Have this to always keep referencing as the "shape" of the component. It's useful to have one of these for each component so that people are mapping props to an object.
//     const emptySwatch = {
//         title: '',
//         description: '',
//         colors: [{
//             r: '',
//             g: '',
//             b: '',
//         },
//         {
//             r: '',
//             g: '',
//             b: '',
//         },
//         {
//             r: '',
//             g: '',
//             b: '',
//         },
//         {
//             r: '',
//             g: '',
//             b: '',
//         }
//     ]
// }
