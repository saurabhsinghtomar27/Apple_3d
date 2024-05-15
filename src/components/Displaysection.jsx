import React from 'react'

function Displaysection({triggerPreview}) {
    const handleScrollToTop=()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"});
    }
    return (
        <div className='display-section wrapper'>
            <h2 className='title'>New</h2>
            <p className='text'>Super Retina XDR display</p>
            <span className='description'>
                The best quality on a smartphone, with bright
            </span>
            <button className='button' onClick={triggerPreview}>Try me!</button>
            <button className='back-button'  onClick={handleScrollToTop}>TOP</button>
        </div>
    )
}

export default Displaysection