import Link from 'next/link'
import {Button} from "./ui/Button"
import {Send } from "lucide-react"



import React from 'react'

import { RiTeamFill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";
import { BsBriefcaseFill } from "react-icons/bs";
import HomeImage from './HomeImage'
import Badge from './Badge'

const Hero = () => {

    return (<section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none ' > 
        <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'> 
        {/* text /> */}
        <div> 
        <div> Notary Services</div>
        <h1> We are here to help you</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in quam id purus mollis aliquam. </p>

        </div>
        {/* <HomeImage /> */}
        <div> Home Image</div>

        </div>
        {/*  icon*/}   
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce  '> 
        <RiArrowDownSLine className='text-3xl text-primary text-gray-500' />
        </div>
        </div>
    </section> )
};

export default Hero;