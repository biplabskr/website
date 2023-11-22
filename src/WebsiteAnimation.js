import React from 'react'
import "./WebsiteAnimation.css"
import "./Shery.js"
import img1 from '../images/IMG_7564.JPG'
import img6 from '../images/raybanlogo.png'


export default function WebsiteAnimation() {
  return (
    <div className='main'>

        <div className='back'>

            <img src={img1} alt=''/>
           
        </div>

        <div className='top'>

            <div className='workingarea'>

                <div className='nav'>

                    <div className='nleft'>

                    <img src={img6} alt=''/>

                    <a href='#'>Product</a>
                    <a href='#'>About</a>

                    </div>
                    
                    <div className=' nright'>

                    <a href='#'>luxe</a>
                    <a href='#'>Pricing</a>

                    </div>

                </div>

                <div className='hero'>

                    <div className='heroleft'>

                        <div className='element'>

                            <h1>david chang</h1>
                            <h1>david chang</h1>
                            <h1>david chang</h1>
                            <h1>david chang</h1>
                            <h1>david chang</h1>
                        
                            
                        </div>

                        <div className='element'>
                            <h1>Gives zero</h1>
                            <h1>david chang</h1>
                            <h1>david chang</h1>
                            <h1>david chang</h1>
                            <h1>david chang</h1>
                        </div>

                        <div className='element'>
                            <h1>funks.</h1>
                            <h1>david chang</h1>
                            <h1>david chang</h1>
                            <h1>david chang</h1>
                            <h1>david chang</h1>
                        </div>

                        <button>explore now</button>


                    </div>

                    <div className='heroright'>

                        <p>lorem ipsum dolor sit amet.</p>
                        <div className='imagediv'>
                            <img/>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>

                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
