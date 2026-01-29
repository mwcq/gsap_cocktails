import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cocktails from "./components/cocktails"
import About from './components/about'
import Art from './components/art'
import Menu from './components/menu'
import Contact from './components/contact'
import { LanguageProvider } from './i18n.jsx'

// 注册ScrollTrigger,SplitText插件
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <LanguageProvider>
            <main>
                <Navbar />
                <Hero />
                <Cocktails />
                <About />
                <Art />
                <Menu />
                <Contact />
            </main>
        </LanguageProvider>
    )
}

export default App