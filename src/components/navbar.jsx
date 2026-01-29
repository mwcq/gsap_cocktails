import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useLanguage } from '../i18n.jsx'

const navbar = () => {
    const { lang, toggleLanguage, translations } = useLanguage()

    const navBarLinks = [
        {
            id: "cocktails",
            title: translations.navbar.links.cocktails,
        },
        {
            id: "about",
            title: translations.navbar.links.about,
        },
        {
            id: "work",
            title: translations.navbar.links.work,
        },
        {
            id: "contact",
            title: translations.navbar.links.contact,
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
                    <p>{translations.navbar.logo}</p>
                </a>
                <ul>
                    {navBarLinks.map((item) => {
                        return (
                            <li key={item.id}><a href={`#${item.id}`}>{item.title}</a></li>
                        )
                    })}
                </ul>
                <button
                    type="button"
                    onClick={toggleLanguage}
                    className="ml-4 px-3 py-1 border border-white/60 text-xs rounded-full hover:bg-white/10 transition"
                    aria-label={lang === 'en' ? '切换为中文' : 'Switch to English'}
                >
                    {lang === 'en' ? 'EN / 中文' : '中文 / EN'}
                </button>
            </div>
        </nav>
    )
}

export default navbar