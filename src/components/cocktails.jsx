import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const cocktails = () => {

    const cocktailList = [{
        name: "Chapel Hill Shiraz",
        country: "AU",
        detail: "Battle",
        price: "$10",
    },
    {
        name: "Caten Malbee",
        country: "AU",
        detail: "Battle",
        price: "$49",
    },
    {
        name: "Rhino Pale Ale",
        country: "CA",
        detail: "750 ml",
        price: "$20",
    },
    {
        name: "Irish Guinness",
        country: "IE",
        detail: "600 ml",
        price: "$29",
    }]

    const mockTailLists = [
        {
            name: "Tropical Bloom",
            country: "US",
            detail: "Battle",
            price: "$10",
        },
        {
            name: "Passionfruit Mint",
            country: "US",
            detail: "Battle",
            price: "$49",
        },
        {
            name: "Citrus Glow",
            country: "CA",
            detail: "750 ml",
            price: "$20",
        },
        {
            name: "Lavender Fizz",
            country: "IE",
            detail: "600 ml",
            price: "$29",
        }
    ]

    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true
            }
        })

        parallaxTimeline
            .from('#c-left-leaf', {
                x: -100, y: 100
            }).from('#c-right-leaf', {
                x: 100, y: 100
            })
    })

    return (
        <section id='cocktails' className='noisy'>
            <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id='c-left-leaf' />
            <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id='c-right-leaf' />
            <div className="list">
                <div className="popular">
                    <h2>最受欢迎:</h2>
                    <ul>
                        {cocktailList.map((item) => {
                            return (
                                <li key={item.name}>
                                    <div className="md:me-28">
                                        <h3>{item.name}</h3>
                                        <p>{item.country} | {item.detail}</p>
                                    </div>
                                    <span>- {item.price}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="loved">
                    <h2>最受欢迎的无酒精饮品:</h2>
                    <ul>
                        {mockTailLists.map((item) => {
                            return (
                                <li key={item.name}>
                                    <div className="me-28">
                                        <h3>{item.name}</h3>
                                        <p>{item.country} | {item.detail}</p>
                                    </div>
                                    <span>- {item.price}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default cocktails