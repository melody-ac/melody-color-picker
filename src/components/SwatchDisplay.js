import React from 'react'
import Card from 'react-bootstrap/Card'

const SwatchDisplay = ({title, colors}) => {
    return(
        <div>
            <Card>
                <Card.Body>
                    <div className='swatchDisplayCard'>
                        <div>
                            <div>{title}</div>
                            {colors?.map((color,id)=> {
                                console.log(color, "color")
                                return(
                                    <div 
                                    key={id} 
                                    style={{
                                        background: `rgb(${color.r},${color.g},${color.b})`, height:100,
                                }}></div>
                                )
                            })}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default SwatchDisplay