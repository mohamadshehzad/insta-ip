'use client'
import Concern from '@/components/Concern';
import Content from '@/components/Content';
import FAQ from '@/components/FAQ';
import Loader from '@/components/Loader';
import VPNBenifits from '@/components/VPNBenifits';
import React, { useState } from 'react';

// Function to fetch IP details from the API route
const fetchIpDetails = async (ip) => {
  const res = await fetch(`https://ipinfo.io/${ip}?token=ff54dabd6117c7`);
  const data = await res.json();
  // console.log(data);
  return data;
};

const IpLookup = () => {
  // State for user input and IP data
  const [ipAddress, setIpAddress] = useState('');
  const [ipDetails, setIpDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');



  // Handle form submission
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!ipAddress) return;
    setLoading(true);
    setError('');
    try {
      const data = await fetchIpDetails(ipAddress);
      if (data.error) {
        setError(data.error.message);
      } else {
        setIpDetails(data);
      }
    } catch (err) {
      setError('An error occurred while fetching data');
    }
    setLoading(false);
  };

  
  return (
    <>
      {/* hero */}
      <div className={`relative ${ipDetails ? 'mb-32' : 'mb-5'}  bg-gray-100`}>
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 pb-16 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-4xl text-center font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
              Find Details{' '}
              <br className="hidden md:block" />
              Quickly and {' '}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-blue-500" />
                <span className="relative text-white">Accurately</span>
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-center text-gray-500 sm:mt-5 md:my-5">
              Enter an IP address or domain name to get detailed information including location, timezone, and more.
            </p>

            <form className={`flex flex-col w-full my-10 ${loading ? "md:mb-16" : "md:mb-36"} md:flex-row md:px-16`} onSubmit={handleSearch}>
              <div className='w-full'>
                <input
                  placeholder="Enter IP address or domain"
                  value={ipAddress}
                  onChange={(e) => setIpAddress(e.target.value)}
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                />
                {error && <p className="text-red-500 text-start hidden md:block mt-2">{error}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Search
                </button>
                {error && <p className="text-red-500 text-start block md:hidden mt-2">{error}</p>}
              </div>
            </form>

            {loading && <Loader />}

            {/* Box half inside the wave */}
            {ipDetails && !loading && !error && (
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-0 rounded-3xl md:-translate-y-24 bg-gradient-to-r from-purple-400 to-blue-500 w-full px-10 py-7">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                  <div className="p-2 border rounded-3xl ps-5 border-opacity-30 border-white">
                    <h1 className='text-start font-extrabold text-white'>IP</h1>
                    <p className="text-left rtl:text-right text-white">{ipDetails?.ip}</p>
                  </div>
                  <div className="p-2 border rounded-3xl ps-5 border-opacity-30 border-white">
                    <h1 className='text-start font-extrabold text-white'>City</h1>
                    <p className="text-left rtl:text-right text-white">{ipDetails?.city}</p>
                  </div>
                  <div className="p-2 border rounded-3xl ps-5 border-opacity-30 border-white">
                    <h1 className='text-start font-extrabold text-white'>Region</h1>
                    <p className="text-left rtl:text-right text-white">{ipDetails?.region}</p>
                  </div>
                  <div className="p-2 border rounded-3xl ps-5 border-opacity-30 border-white">
                    <h1 className='text-start font-extrabold text-white'>Country</h1>
                    <p className="text-left rtl:text-right text-white">{ipDetails?.country}</p>
                  </div>
                  <div className="p-2 border rounded-3xl ps-5 border-opacity-30 border-white">
                    <h1 className='text-start font-extrabold text-white'>Postal</h1>
                    <p className="text-left rtl:text-right text-white">{ipDetails?.postal}</p>
                  </div>
                  <div className="p-2 border rounded-3xl ps-5 border-opacity-30 border-white">
                    <h1 className='text-start font-extrabold text-white'>Timezone</h1>
                    <p className="text-left rtl:text-right text-white">{ipDetails?.timezone}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Concern ipDetails={ipDetails} />
      <Content />
      <VPNBenifits  />
      <FAQ />
    </>
  );
};

export default IpLookup;
