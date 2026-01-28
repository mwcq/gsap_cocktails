"use client"
import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'

const menu = () => {



    const [currentIndex, setCurrentIndex] = useState(0)

    const contentRef = useRef()

    useGSAP(() => {
        gsap.fromTo('#title,.sp', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1
        })
        gsap.fromTo('.cocktail img', {
            opacity: 0,
            xPercent: -100
        },
            {
                opacity: 1,
                xPercent: 0,
                duration: 1,
                ease: 'power1.inOut'
            })
        gsap.fromTo('.details h2,.details .detail', { yPercent: 100, opacity: 0 }, {
            yPercent: 0, opacity: 1, ease: "power1.inOut",stagger:0.1
        })

    }, [currentIndex])

    const sliderLists = [
        {
            id: 1,
            name: "Classic Mojito",
            image: "/images/drink1.png",
            title: "Simple Ingredients, Bold Flavor",
            description:
                "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
        },
        {
            id: 2,
            name: "Raspberry Mojito",
            image: "/images/drink2.png",
            title: "A Zesty Classic That Never Fails",
            description:
                "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
        },
        {
            id: 3,
            name: "Violet Breeze",
            image: "/images/drink3.png",
            title: "Simple Ingredients, Bold Flavor",
            description:
                "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
        },
        {
            id: 4,
            name: "Curacao Mojito",
            image: "/images/drink4.png",
            title: "Crafted With Care, Poured With Love",
            description:
                "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
        },
    ];

    const getCocktailAt = (index) => {
        return sliderLists[(currentIndex + index + sliderLists.length) % sliderLists.length]
    }

    const currentCocktail = getCocktailAt(0)
    const prevCocktail = getCocktailAt(-1)
    const nextCocktail = getCocktailAt(1)

    const goToSlide = (index) => {
        const newIndex = (index + sliderLists.length) % sliderLists.length

        setCurrentIndex(newIndex)
    }


    return (
        <section id='menu' aria-labelledby='menu-heading'>
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf' />
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf' />

            <h2 id="menu-heading" className='sr-only'>
                Cocktail Menu
            </h2>

            <nav className='cocktail-tabs' aria-label=' Cocktail Navigation'>
                {sliderLists.map((item, index) => {
                    const isActive = index === currentIndex
                    return (
                        <button key={item.id} className={
                            `${isActive ? 'text-white border-white' :
                                'text-white/50 border-white/50'}
                            `}
                            onClick={() =>
                                goToSlide(index)
                            }
                        >{item.name}</button>
                    )
                })}
            </nav>
            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => {
                        goToSlide(currentIndex - 1)
                    }}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden='true' />
                    </button>

                    <button className="text-left" onClick={() => {
                        goToSlide(currentIndex + 1)
                    }}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden='true' />
                    </button>
                </div>
                <div className="cocktail">
                    <img src={currentCocktail.image} className='object-contain' alt="" />
                </div>
                <div className="recipe">
                    <div ref={contentRef} className='info'>
                        <p className='sp'>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>

                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p className='detail'>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default menu