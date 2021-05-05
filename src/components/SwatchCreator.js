import React from 'react'
import ColorPickerCard from './ColorPickerCard'

const SwatchCreator = (props) => {
    return (
        <div>
            <h1>Swatch Creator my fav color is {props.favcolor}.</h1>
            <ColorPickerCard />
        </div>
    )
}

export default SwatchCreator;