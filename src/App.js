import React, {useState} from 'react'
import './App.css'
import SwatchCreator from './components/SwatchCreator'
import SwatchDisplay from './components/SwatchDisplay'
const App = () => {
    const [swatchCollection,setSwatchCollection] = useState([])
    const saveSwatch = (newSwatch) => {
        setSwatchCollection([...swatchCollection, newSwatch]);
    };
    return(
    <div className='App'>
       <h1>Swatch Creator</h1> 
       
       <SwatchCreator saveSwatch= {saveSwatch} />
       <div className='swatch-main-wrapper'>
           {swatchCollection.map((swatchCollection,id) => (
               <div key={id}>
                    <SwatchDisplay title={swatchCollection.title} 
                    colors={swatchCollection.colors} 
                    
                    />
                </div>
           ))}
       </div>
       
    </div>
    )
}


export default App;