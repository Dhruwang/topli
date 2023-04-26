import React from 'react'

export default function Toggle(props) {
    const handleCheckClick =(e)=>{
        console.log(e.target.value)
        console.log(e.target.checked)
    }
    return (
        <div>
            <label class="switch">
                <input value={props.value} className='memberToggle' onClick={handleCheckClick} type="checkbox" />
                    <span class="slider round"></span>
            </label>
        </div>
    )
}
