import React from 'react';

const About = () => {
    return (
        <section className="panel h-screen relative snap-start">
            <div className="shape absolute w-full h-[60vh] left-0 right-0 rotate-180"></div>
            <div className="h-full w-full backdrop-blur-3xl flex flex-col justify-center p-40">
                <h1 className="text-8xl p-20 z-10">About</h1>
                <div className='w-96 self-center flex flex-col gap-6 opacity-50 font-sans'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, error!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aut.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, error!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aut.
                    </p>
                </div>
                <div className="px-10 py-20">
                <div className="flex items-center justify-around gap-40">
                    <h1 className="text-5x1">Services</h1>
                    <ul className="space-y-2">
                        <p>Development</p>
                        <li className="opacity-60">Front-End</li>
                        <li className="opacity-60">Back-End</li>
                        <li className="opacity-60">Seo and serm opt</li>
                    </ul>
                    <ul className="space-y-2">
                        <p>Design</p>
                        <li className="opacity-60">UI/UX</li>
                        <li className="opacity-60">Branding</li>
                        <li className="opacity-60">Motion Design</li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;