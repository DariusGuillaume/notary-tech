import Link from 'next/link';
import { Button } from './ui/Button';
import { Send } from 'lucide-react';
import React from 'react';
import { RiTeamFill, RiTodoFill, RiArrowDownSLine, RiBriefcase4Fill } from 'react-icons/ri';
import { BsBriefcaseFill } from 'react-icons/bs';
import HomeImage from './HomeImage';
import Badge from './Badge';

const Hero = () => {
  return (
    <section className="py-8 xl:py-16 h-[84vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Notary Services
            </div>
            <h1 className="h1">We are here to help you</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in quam id purus mollis aliquam.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2 text-white dark:text-white bg-blue-600">
                  Contact Us <Send size={18} />
                </Button>
              </Link>
            </div>
          </div>

          {/* <HomeImage /> */}
          <div className="hidden xl:flex relative">
            {/* Badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill className="text-2xl text-primary" />}
              endCountNum={10}
              endCountText="+"
              badgeText="Years of Experience"
            />

            {/* Badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem] z-10"
              icon={<RiTodoFill className="text-2xl text-primary" />}
              endCountNum={6}
              endCountText="k"
              badgeText="Projects Completed"
            />
            <HomeImage
              containerStyles="w-[510px] h-[462px]"
              imageSource="/assets/public_1/hero/hero.png"
            />
          </div>
        </div>

        {/* icon */}
        <div className="hidden xl:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;