import React, { useState } from 'react'


function Colours() {


    const [bgColor, setBgColor] = useState("#ffffff"); // Initial background color

    const changeBackgroundColor = (color) => {
      setBgColor(color);
    };


  return (
    <>
        
        <div className='d-flex w-100 flex-column justify-content-center align-items-center' style={{height:'100vh',backgroundColor: bgColor }} >
          
            <div className='d-flex justify-content-center gap-5 w-50 ' >
    
                <button style={{width:'100px',height:'50px'} } className='btn btn-dark text-light ' onClick={() => changeBackgroundColor("#0000FF")}>Blue</button>
                <button style={{width:'100px',height:'50px'} }  className='btn btn-dark text-light '  onClick={() => changeBackgroundColor("#FF0000")}>Red</button>
                <button style={{width:'100px',height:'50px'} } className='btn btn-dark text-light ' onClick={() => changeBackgroundColor("#DFFF00")} >Yellow</button>
                <button style={{width:'100px',height:'50px'} } className='btn btn-dark text-light ' onClick={() => changeBackgroundColor("#00FF00")}>Green</button>
    
            </div>
            
    
        </div>
    </>
  )
}

export default Colours