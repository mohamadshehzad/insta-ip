'use client';

import useIpDetails from '../hooks/useIpDetails';
import useBrowserDetails from '../hooks/useBrowserDetails';
import Loader from './Loader';


const IpDetails = () => {
  const { loading, error, data: ipData } = useIpDetails();
  const { browser, screenSize, cookiesEnabled } = useBrowserDetails();
  // console.log('ipdata', ipData);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }
  // Extract latitude and longitude from the 'loc' field
  const loc = ipData?.loc;
  const [lat, lon] = loc ? loc.split(',') : [];

  // Google Maps iframe URL based on lat, lon
  const mapUrl = lat && lon
    ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238`
    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238";

  return (
    <section className="mb-20">
      <div id="map" className="relative h-[350px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
          src={mapUrl}
          width="100%" height="480" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
      </div>
      <div className="container mx-auto px-6 md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap">
 
            {/* Four items per row */}
            <div className="w-full sm:w-6/12 lg:w-3/12 px-3 mb-6"> {/* 1st item */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-blue-500 p-4 text-white">
                    {/* SVG for IP */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">
                    IP
                  </p>
                  <p className="text-sm text-neutral-500">
                    {ipData.ip}
                  </p>
                </div>
              </div>
            </div>


            <div className="w-full sm:w-6/12 lg:w-3/12 px-3 mb-6"> {/* 2nd item */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-blue-500 p-4 text-white">
                    {/* SVG for City */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 2C8.13 2 5 5.13 5 9c0 3.35 2.79 6.53 6.28 9.61 1.26 1.01 2.56 2.01 3.72 3.09a.75.75 0 0 0 1.02 0c1.16-1.08 2.46-2.08 3.72-3.09C17.21 15.53 20 12.35 20 9c0-3.87-3.13-7-7-7zm0 10.5c-1.68 0-3-1.32-3-3s1.32-3 3-3 3 1.32 3 3-1.32 3-3 3z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">
                    City
                  </p>
                  <p className="text-sm text-neutral-500">
                    {ipData.city}
                  </p>
                </div>
              </div>
            </div>


            <div className="w-full sm:w-6/12 lg:w-3/12 px-3 mb-6"> {/* 3rd item */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-blue-500 p-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 5.25C7.753 5.25 4.5 8.503 4.5 12c0 3.785 2.771 7.25 6.5 7.25 2.591 0 4.837-1.494 5.806-3.707l3.156 2.083c.305.204.694.138.933-.152.239-.289.243-.689-.017-.993l-2.097-3.169c1.263-1.155 1.482-2.849 1.482-3.808 0-3.497-3.253-6.75-7.5-6.75z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">
                    Country
                  </p>
                  <p className="text-sm text-neutral-500">
                    {ipData.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-6/12 lg:w-3/12 px-3 mb-6"> {/* 4th item */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-blue-500 p-4 text-white">
                    {/* SVG for Postal */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 5.25C3 4.007 4.007 3 5.25 3h13.5C19.993 3 21 4.007 21 5.25v13.5C21 19.993 19.993 21 18.75 21H5.25C4.007 21 3 19.993 3 18.75V5.25zm15.978 4.752l-3.722 5.039a1.125 1.125 0 01-1.592.221l-2.582-3.447a.75.75 0 00-1.243.536v6.5a.75.75 0 001.244.535l2.582-3.448a1.125 1.125 0 011.592.22l3.722 5.039a.75.75 0 000-.95l-5.039-7.144a1.125 1.125 0 00-1.742-.022L14.25 9.997a.75.75 0 00-1.243-.536l-2.582 3.447a.75.75 0 001.243.536l2.582-3.447 3.722 5.039z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">
                    Postal
                  </p>
                  <p className="text-sm text-neutral-500">
                    {ipData.postal}
                  </p>
                </div>
              </div>
            </div>


            <div className="w-full sm:w-6/12 lg:w-3/12 px-3 mb-6 md:mb-0 "> {/* 5th item */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-blue-500 p-4 text-white">
                    {/* SVG for Browser */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 4.5h18a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5zm0 2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h18a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5H3zm2 1h14v9H5V7.5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">
                    Browser
                  </p>
                  <p className="text-sm text-neutral-500">
                    {browser}
                  </p>
                </div>
              </div>
            </div>


            <div className="w-full sm:w-6/12 lg:w-3/12 px-3  mb-6 md:mb-0"> {/* 6th item */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-blue-500 p-4 text-white">
                    {/* SVG for Screen */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 4.5h18a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5zm0 2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h18a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5H3zm2 1h14v9H5V7.5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">
                    Screen
                  </p>
                  <p className="text-sm text-neutral-500">
                    {screenSize}
                  </p>
                </div>
              </div>
            </div>



            <div className="w-full sm:w-6/12 lg:w-3/12 px-3 mb-6 md:mb-0 "> {/* 7th item */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-blue-500 p-4 text-white">
                    {/* SVG for Cookies */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 2.25c5.25 0 9.75 4.5 9.75 9.75S17.25 21.75 12 21.75 2.25 17.25 2.25 12 6.75 2.25 12 2.25zm0 2c-1.125 0-2.25.75-2.25 2.25s1.125 2.25 2.25 2.25 2.25-.75 2.25-2.25-1.125-2.25-2.25-2.25zm0 10.5c-2.25 0-4.5-1.125-4.5-3.375S9.75 8.25 12 8.25s4.5 1.125 4.5 3.375-2.25 3.375-4.5 3.375zm0 2.25c2.625 0 5.25 1.5 5.25 3.75v.375H6.75v-.375c0-2.25 2.625-3.75 5.25-3.75z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">
                    Cookies
                  </p>
                  <p className="text-sm text-neutral-500">
                    {cookiesEnabled.toString()}
                  </p>
                </div>
              </div>
            </div>


            <div className="w-full sm:w-6/12 lg:w-3/12 px-3  "> {/* 8th item */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-blue-500 p-4 text-white">
                    {/* SVG for Timezone (Globe with timezones) */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 2.25c5.25 0 9.75 4.5 9.75 9.75S17.25 21.75 12 21.75 2.25 17.25 2.25 12 6.75 2.25 12 2.25zM12 0c-6.75 0-12 5.25-12 12s5.25 12 12 12 12-5.25 12-12-5.25-12-12-12zm0 17.25c-2.25 0-4.5 1.125-4.5 3.375v.375h9v-.375c0-2.25-2.25-3.375-4.5-3.375zm0-10.5c-1.5 0-3.375 1.5-3.375 3.375s1.875 3.375 3.375 3.375 3.375-1.5 3.375-3.375-1.875-3.375-3.375-3.375z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">
                    Timezone
                  </p>
                  <p className="text-sm text-neutral-500">
                    {ipData.timezone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IpDetails;