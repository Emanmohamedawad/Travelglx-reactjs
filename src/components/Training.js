import React from 'react'
import './Traniningstyle.css'

import {Link} from 'react-router-dom'

import Pod from '../assests/pod.jpg'
import Moon from '../assests/moon.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className='right'>
            <h1>Training</h1>
                <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
        </div>
    )
}

export default Training