import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { useMediaQuery } from 'react-responsive';

const art = () => {
    const goodLists = [
        "Handpicked ingredients",
        "Signature techniques",
        "Bartending artistry in action",
        "Freshly muddled flavors",
    ];

    const featureLists = [
        "Perfectly balanced blends",
        "Garnished to perfection",
        "Ice-cold every time",
        "Expertly shaken & stirred",
    ];

    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';

        const maskTileline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: "bottom center",
                scrub: 1.5,
                pin: true
            }
        })

        maskTileline
            .to(".will-fade", {
                opacity: 0,
                stagger: 0.2,
                ease: 'power1.out',
            })
            .to('.masked-img', {
                scale: 1.3,
                maskPosition: 'center',
                maskSize: '400%',
                duration: 1,
                ease: 'power1.inOut'
            })
            .to('#masked-content', {
                opacity: 1,
                duration: 1,
                ease: 'power1.inOut'
            })

    })

    return (
        <div id='art'>
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade">The ART</h2>

                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((item, index) => {
                            return (
                                <li key={index} className='flex items-center gap-2'>
                                    <img src="/images/check.png" alt="check" />
                                    <p>{item}</p>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="cocktail-img">
                        <img className=' abs-center masked-img size-full object-contain' src="/images/under-img.jpg " alt="cocktail" />
                    </div>

                    <ul className="space-y-4 will-fade">
                        {featureLists.map((item, index) => {
                            return (
                                <li key={index} className='flex items-center justify-start gap-2'>
                                    <img src="/images/check.png" alt="check" />
                                    <p className='md:w-fit w-60'>{item}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="masked-container">
                    <h2 className="will-fade">Sip-Worthy Perfection</h2>
                    <div id="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default art