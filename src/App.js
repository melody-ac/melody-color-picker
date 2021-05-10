import React from 'react'
import './App.css'
// import SwatchCreator from './components/SwatchCreator'
import ColorPickerCard from './components/ColorPickerCard'
const App = () => {
    return(
    <div className='App'>
       <p>hi</p> 
       <ColorPickerCard />
       <ColorPickerCard />
       <ColorPickerCard />
    </div>
    )
}


export default App;