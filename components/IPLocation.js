"use client";

import Image from "next/image";
import mapImage from "@/public/32540-4-technology-hd 1.png";
import useIpDetails from "@/hooks/useIpDetails";
import Link from "next/link";

const IPLocation = () => {
  const { data: ipData } = useIpDetails();

  return (
    <>
      {/* Trust Section */}
      <section className="bg-gray-50 py-14 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Trust Our IP Checker?
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white shadow-sm rounded-xl p-6 text-center hover:shadow-md transition">
              <div className="text-red-600 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No Data Storage
              </h3>
              <p className="text-gray-600 text-sm">
                We don’t log your IP or location. Your privacy is our top
                priority.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-sm rounded-xl p-6 text-center hover:shadow-md transition">
              <div className="text-yellow-500 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                SSL Encrypted
              </h3>
              <p className="text-gray-600 text-sm">
                All data is transmitted over secure HTTPS. Stay safe online.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-sm rounded-xl p-6 text-center hover:shadow-md transition">
              <div className="text-yellow-600 text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Used by 15,000+
              </h3>
              <p className="text-gray-600 text-sm">
                Trusted by developers, network engineers, and privacy
                advocates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IP Location Section */}
      <section className="container mt-10 px-4 md:px-12 mx-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-1/2 pr-0 mb-8 sm:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What is your IP address location?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Your IP address location is the portion of your IP address that
              allows for identification of the geographic location of your
              computer. If you are using a proxy server or a router, then the
              location of the server or router is identified. Typically, only
              the city, state, or general area is shown — but in some cases,
              exact locations can be discovered using geolocation technology.
            </p>
            <p className="text-lg text-gray-700">
              Additionally, there are virtual IP addresses (VIP or VIPA) that
              aren’t tied to a physical location. These are shared by multiple
              devices and are commonly used in home or office networks.
            </p>
          </div>

          <div className="w-full sm:w-1/2 relative mx-auto">
            <div className="relative mx-auto w-full h-[400px] md:h-[650px]">
              <Image
                src={mapImage}
                alt="World Map"
                className="w-full mx-auto h-auto rounded-lg"
                fill
                priority
              />
              <div className="absolute top-[30%] md:left-16 bg-white p-2 rounded-lg shadow-lg max-w-[300px] sm:max-w-[350px]">
                <p className="text-lg font-bold text-gray-900">
                  Hello 👋 We see you are in {ipData?.city}, {ipData?.country}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-gray-50 py-14 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Latest Blog Posts
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Blog Post 1 */}
            <Link href="/blog/my-first-post">
              <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition cursor-pointer">
                <Image
                  src="/ip-address.png"
                  alt="The Ultimate Guide to IP Addresses"
                  width={400}
                  height={160}
                  className="w-full h-40 object-contain rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  The Ultimate Guide to IP Addresses: What Your IP Reveals About You
                </h3>
                <p className="text-gray-600 text-sm">
                  Every time you go online, your device broadcasts a digital
                  identifier called an IP address. This unique number exposes...
                </p>
              </div>
            </Link>

            {/* Blog Post 2 */}
            <Link href="/blog/what-is-an-ip-address">
              <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition cursor-pointer">
                <Image
                  src="/digital-fingerprint.webp"
                  alt="What Is an IP Address?"
                  width={400}
                  height={160}
                  className="w-full h-40 object-contain rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  What Is an IP Address? Your Digital Fingerprint Explained
                </h3>
                <p className="text-gray-600 text-sm">
                  Every device connected to the internet — whether it's your
                  smartphone, laptop, or smart fridge — has a unique identifier
                  called an IP...
                </p>
              </div>
            </Link>

            {/* Blog Post 3 */}
            <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition cursor-pointer">
              <Image
                src="/blog3.jpg"
                alt="Why IP Privacy is Critical in 2025"
                width={400}
                height={160}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Why IP Privacy is Critical in 2025
              </h3>
              <p className="text-gray-600 text-sm">
                Explore modern privacy challenges and why IP-based tracking is a
                growing concern in today's internet landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IPLocation;
