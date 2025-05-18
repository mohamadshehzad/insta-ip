import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.2eb85d29b6c42e62c4ad.webp";

const Footer = () => {
    return (
        <footer className="relative mt-20 bg-gradient-to-r from-indigo-400 to-pink-600 overflow-hidden text-white">
            {/* Background Wave */}
            <div className="absolute z-10 overflow-hidden">
                <svg
                    className="absolute inset-0 top-0 left-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="white"
                        d="M0,256L1440,160L1440,320L0,320Z"
                        opacity="0.1"
                    />
                </svg>
            </div>

            <div className="relative z-40 px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                {/* Main Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Column 1: Logo & About */}
                    <div className="flex flex-col items-start space-y-4 text-left">
                        <Link href="/" className="text-2xl font-bold">
                            <Image
                                src={logo}
                                alt="Agency Logo"
                                className="h-12 w-auto cursor-pointer"
                                width={100}
                                height={100}
                                loading="lazy"
                            />
                        </Link>
                        <p className="text-sm">
                            At Insta-ip, we are dedicated to transforming your digital vision into reality.
                            Our expert team ensures your business stands out in the digital landscape.
                        </p>
                        <p className="text-sm">
                            With a commitment to excellence and a passion for innovation,
                            we craft tailored solutions that drive growth and success.
                        </p>
                    </div>

                    {/* Column 2: Important Pages */}
                    <div className="text-left">
                        <h3 className="text-lg font-semibold mb-4">Important Pages</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
                            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                            <li><Link href="/disclaimer" className="hover:underline">Disclaimer</Link></li>
                            <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links + Newsletter */}
                    <div className="text-left">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm mb-6">
                            <li><Link href="/ip-lookup" className="hover:underline">More Tools</Link></li>
                            <li><Link href="/blog" className="hover:underline">Our Blogs</Link></li>
                        </ul>

                        <h4 className="text-sm font-semibold mb-2">Subscribe to Our Newsletter</h4>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 rounded text-black placeholder-gray-600 focus:outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-white text-indigo-600 font-semibold py-2 rounded hover:bg-gray-100"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col justify-between pt-8 pb-10 mt-10 border-t border-white/30 sm:flex-row">
                    <p className="text-sm text-white">
                        © 2024 IP Checker Developed by <Link className="underline" href="https://insta-ip.com/">Insta-Ip</Link> All rights reserved!
                    </p>

                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <Link href="https://web.facebook.com/instaip" className="hover:text-teal-300 transition-colors duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5"><path d="M22.675 0H1.325C0.593 0 0 0.593..."/></svg>
                        </Link>
                        <Link href="https://www.instagram.com/instaip/" className="hover:text-teal-300 transition-colors duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5"><path d="M12,2.2c3.2,0,3.6,0..." /></svg>
                        </Link>
                        <Link href="https://twitter.com/instaip" className="hover:text-teal-300 transition-colors duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5"><path d="M24 4.56c-.89.39-1.84.66..." /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
