import Image from "next/image";
import Link from "next/link";
import logo from '@/public/logo.2eb85d29b6c42e62c4ad.webp';

const Footer = () => {
    return (
        <footer className="relative mt-20 bg-gradient-to-r from-indigo-400 to-pink-600 overflow-hidden">
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
            <div className="px-4 z-40 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="mb-9">
                    <div className="md:max-w-md lg:col-span-2 mx-auto flex flex-col items-center text-center">
                        <div className="text-2xl font-bold">
                            <Link href="/">
                                <Image
                                    src={logo}
                                    alt="Agency Logo"
                                    className="h-12 w-auto cursor-pointer"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-white">
                                At Insta-ip, we are dedicated to transforming your digital vision into reality. Our expert team ensures your business stands out in the digital landscape.
                            </p>
                            <p className="mt-4 text-sm text-white">
                                With a commitment to excellence and a passion for innovation, we craft tailored solutions that drive growth and success.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                    <p className="text-sm text-gray-100">
                        © 2024 IP Checker Developed by <Link className="underline" href={'https://insta-ip.com/'}>Insta-Ip</Link> All rights reserved!
                    </p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <Link
                            href="https://web.facebook.com/instaip"
                            className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325v21.351C0 23.407 0.593 24 1.325 24h11.489V14.708h-3.13v-3.631h3.13V8.045c0-3.1 1.893-4.787 4.66-4.787 1.325 0 2.463 0.099 2.794 0.143v3.241l-1.918 0.001c-1.504 0-1.795 0.716-1.795 1.763v2.313h3.587l-0.467 3.631h-3.12V24h6.117C23.407 24 24 23.407 24 22.676V1.325C24 0.593 23.407 0 22.675 0z" />
                            </svg>
                        </Link>
                        <Link
                            href="https://www.instagram.com/instaip/"
                            className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M12,2.2c3.2,0,3.6,0,4.8,0.1c1.2,0.1,1.9,0.2,2.4,0.4c0.6,0.2,1.1,0.5,1.6,1c0.5,0.5,0.8,1,1,1.6c0.2,0.5,0.4,1.2,0.4,2.4 c0.1,1.2,0.1,1.6,0.1,4.8s0,3.6-0.1,4.8c-0.1,1.2-0.2,1.9-0.4,2.4c-0.2,0.6-0.5,1.1-1,1.6c-0.5,0.5-1,0.8-1.6,1 c-0.5,0.2-1.2,0.4-2.4,0.4c-1.2,0.1-1.6,0.1-4.8,0.1s-3.6,0-4.8-0.1c-1.2-0.1-1.9-0.2-2.4-0.4c-0.6-0.2-1.1-0.5-1.6-1 c-0.5-0.5-0.8-1-1-1.6c-0.2-0.5-0.4-1.2-0.4-2.4c-0.1-1.2-0.1-1.6-0.1-4.8s0-3.6,0.1-4.8c0.1-1.2,0.2-1.9,0.4-2.4 c0.2-0.6,0.5-1.1,1-1.6c0.5-0.5,1-0.8,1.6-1c0.5-0.2,1.2-0.4,2.4-0.4C8.4,2.2,8.8,2.2,12,2.2 M12,0.3c-3.3,0-3.7,0-4.9,0.1 c-1.2,0.1-2.1,0.2-2.8,0.4c-0.9,0.2-1.7,0.6-2.4,1.3c-0.7,0.7-1.1,1.5-1.3,2.4c-0.2,0.7-0.3,1.6-0.4,2.8C0.3,9.5,0.3,9.9,0.3,13.2 s0,3.7,0.1,4.9c0.1,1.2,0.2,2.1,0.4,2.8c0.2,0.9,0.6,1.7,1.3,2.4c0.7,0.7,1.5,1.1,2.4,1.3c0.7,0.2,1.6,0.3,2.8,0.4 c1.2,0.1,1.6,0.1,4.9,0.1s3.7,0,4.9-0.1c1.2-0.1,2.1-0.2,2.8-0.4c0.9-0.2,1.7-0.6,2.4-1.3c0.7-0.7,1.1-1.5,1.3-2.4 c0.2-0.7,0.3-1.6,0.4-2.8c0.1-1.2,0.1-1.6,0.1-4.9s0-3.7-0.1-4.9c-0.1-1.2-0.2-2.1-0.4-2.8c-0.2-0.9-0.6-1.7-1.3-2.4 c-0.7-0.7-1.5-1.1-2.4-1.3c-0.7-0.2-1.6-0.3-2.8-0.4C15.7,0.3,15.3,0.3,12,0.3L12,0.3z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2 s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S14.2,16,12,16z M18.4,4.3 c-0.8,0-1.5,0.6-1.5,1.5s0.6,1.5,1.5,1.5s1.5-0.6,1.5-1.5S19.2,4.3,18.4,4.3z" />
                            </svg>
                        </Link>
                        <Link
                            href="https://twitter.com/instaip"
                            className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24 4.56c-.89.39-1.84.66-2.84.78 1.02-.61 1.8-1.57 2.17-2.72-.95.57-2.01.98-3.13 1.2A4.92 4.92 0 0 0 16.66 3c-2.73 0-4.93 2.22-4.93 4.95 0 .39.03.77.1 1.14C7.72 8.85 4.1 6.88 1.67 3.9a4.93 4.93 0 0 0-.67 2.48c0 1.71.87 3.22 2.18 4.1-.81-.03-1.57-.25-2.23-.62v.06c0 2.39 1.7 4.38 3.96 4.83-.42.12-.86.17-1.31.17-.32 0-.63-.03-.94-.09.63 1.98 2.45 3.43 4.6 3.47a9.87 9.87 0 0 1-6.1 2.1c-.39 0-.78-.02-1.17-.07a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63A10.01 10.01 0 0 0 24 4.56z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
