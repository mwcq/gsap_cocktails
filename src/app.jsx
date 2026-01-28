import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/navbar'
import Hero from './components/hero'

// 注册ScrollTrigger,SplitText插件
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <main>
            <Navbar></Navbar>
            <Hero />
        </main>
    )
}

export default App