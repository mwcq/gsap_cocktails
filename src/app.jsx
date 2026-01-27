import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

// 注册ScrollTrigger,SplitText插件
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <div className='flex-center h-screen'>
            <h1 className='text-3xl text-indigo-400'>gsap</h1>
        </div>
    )
}

export default App