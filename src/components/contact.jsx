import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react'
import { useLanguage } from '../i18n.jsx';

const contact = () => {
    const { translations } = useLanguage();

    const openingHours = translations.contact.openingHours;

    const socials = [
        {
            name: "Instagram",
            icon: "/images/insta.png",
            url: "#",
        },
        {
            name: "X (Twitter)",
            icon: "/images/x.png",
            url: "#",
        },
        {
            name: "Facebook",
            icon: "/images/fb.png",
            url: "#",
        },
    ];

    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: "words" })

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut'
        })

        timeline
            .from(titleSplit.words, {
                opacity: 0, yPercent: 100, stagger: 0.05
            })
            .from('#contact h3,#contact p,.icons img', {
                opacity: 0, yPercent: 100, stagger: 0.05
            })
            .to('#f-right-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            })
            .to('#f-left-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            }, '<')
           

    })

    return (
        <footer id='contact'>
            <img src="/images/footer-right-leaf.png" alt="right-leaf" id='f-right-leaf' />
            <img src="/images/footer-left-leaf.png" alt="left-leaf" id='f-left-leaf' />

            <div className="content">
                <h2>{translations.contact.sectionTitle}</h2>

                <div>
                    <h3>{translations.contact.visitTitle}</h3>
                    <p>{translations.contact.visitAddress}</p>
                </div>

                <div>
                    <h3>{translations.contact.contactTitle}</h3>
                    <p>{translations.contact.phone}</p>
                    <p>{translations.contact.email}</p>
                </div>

                <div>
                    <h3>{translations.contact.openTitle}</h3>
                    {openingHours.map((item) => {
                        return (
                            <p key={item.day}>{`${item.day} : ${item.time}`}</p>
                        )
                    })}
                </div>

                <div>
                    <h3>{translations.contact.socialsTitle}</h3>
                    <div className="flex-center gap-5 icons">
                        {socials.map((item) => {
                            return (
                                <a key={item.name} href={item.url} target='_black' rel='noopenner noreferrer' aria-label={item.name}>
                                    <img src={item.icon} alt="" />
                                </a>
                            )
                        })}
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default contact