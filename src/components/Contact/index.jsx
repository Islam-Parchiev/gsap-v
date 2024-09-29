import { FaBehance,FaFacebookF, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    return (
        <section className="panel h-screen relative snap-start">

        <div className="shape size-44 absolute right-60 top-36"></div>

            <div className="backdrop-blur-2xl flex items-center justify-between px-60 py-32">
                <p className="text-4x1 w-96">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aspernatur?

                </p>
                <button className="glass-btn size-48 rounded-full text-lg">
                    Start a project
                </button>
            </div>
            <div className="text-xl px-60 py-20 flex items-center justify-between">
                <div className="space-y-2">

                    <p className="opacity-60">Phone Number</p>
                    <p>+ 380 72 0232</p>
                </div>
                <div className="space-y-2">

                    <p className="opacity-60">Email</p>
                    <p>info@test.com</p>
                </div>
                <div className="space-y-2">

                    <p className="opacity-60">Socials media</p>
                    <div className="flex gap-8">
                    <FaBehance className="hover:text-orange-500"/>
                    <FaFacebookF className="hover:text-orange-500"/>
                    <FaInstagram className="hover:text-orange-500"/>
                    </div>
                </div>
            </div>
            <footer className="px-60 py-10 opacity-50 flex justify-between items-center">
                <div className="text-lg">&copy;2024 All rights reserved</div>
                <div className="flex items-center gap-8">
                    <p>Eng</p>
                    <div className="w-20 h-[1px] bg-white/50"></div>
                    <p>Ar</p>
                </div>
            </footer>
        </section>
    );
}
export default Contact;