import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
import Animated from './Animated'
import Navebar from './Navebar'
const About = () => {
    useGSAP(() => {
        const clipanimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipanimation.to('.mask-clip-path', {
            width: '100vh',
            height: '100vh',
            borderRadius: '0',
        })
    })
    return (
        <>
            <Navebar />
            <div id='about' className='min-h-screen w-screen '>
                <div className='relative mb-8 mt-36 flex flex-col items-center gap-5' >
                    <h2 className='font-general text-sm uppercase md:text-[10px]'>Ggs Hope Yo doing good </h2>

                    <Animated
                        title="someday i h<b>o</b>pe to  summit a <b>p</b>eak" container="mt-5 !text-black text-center" />



                    <div className="about-subtext">
                        <p>Genz in general are cooked</p>
                    </div>
                </div>
                <div className='h-dvh w-screen ' id='clip'>
                    <div className="mask-clip-path about-image">
                        <img src="img/about.webp"
                            alt='Background'
                            className='absolute left-0 top-0 size-full object-cover' />

                    </div>
                </div>
            </div>
        </>
    )
}

export default About
