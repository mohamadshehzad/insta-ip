import image from '@/public/social.avif'
import Image from 'next/image';

export const Content = () => {
    const contentData = [
        {
            title: "Your Download History Creates a Digital Footprint",
            description: "Every video you download is tracked by platforms. This data reveals your interests, viewing habits, and can be sold to advertisers. Our downloader auto-deletes your history every hour to prevent profiling.",
        },
        {
            title: "Platforms Collect More Than Just Video Files",
            description: "When you download videos, platforms capture: Your exact location (city/ZIP code), Device model and OS version, Unique browser fingerprint, Time spent watching content. We strip this metadata from downloads.",
        },
        {
            title: "The Hidden Tracking in Video Downloads",
            description: "Embedded trackers in video files can report your viewing activity back to platforms even after downloading. Our security scanning removes these hidden elements before saving files.",
        }
    ];

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Download Privacy
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 text-blue-500 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative text-black">What platforms learn when you download videos?</span>
                    </span>{' '}
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Downloading videos exposes your location, device details, and viewing habits. Platforms use this to build advertising profiles that follow you across the web.
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="flex flex-col justify-center">
                    {contentData.map((item, index) => (
                        <div key={index} className="flex">
                            <div className="mr-4">
                                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-blue-500"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-2 font-semibold leading-5">{item.title}</h6>
                                <p className="text-sm text-gray-900">{item.description}</p>
                                {index !== contentData.length - 1 && <hr className="w-full my-6 border-gray-300" />}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-5">
                    <Image 
                      width={1000} 
                      height={1000} 
                      src={image} 
                      alt="Video download privacy protection illustration" 
                    />

                </div>
            </div>
        </div>
    );
};

export default Content;