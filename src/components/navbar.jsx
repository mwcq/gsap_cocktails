import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const navbar = () => {
    const navBarLinks = [
        {
            id: "cocktails",
            title: "鸡尾酒",
        },
        {
            id: "about",
            title: "关于我们",
        },
        {
            id: "work",
            title: "艺术",
        },
        {
            id: "contact",
            title: "联系我们",
        },

    ]

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: "bottom top"
            }
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    })
    return (
        <nav>
            <div>
                <a href="#homes" className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>
                <ul>
                    {navBarLinks.map((item) => {
                        return (
                            <li key={item.id}><a href={`#${item.id}`}>{item.title}</a></li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default navbar