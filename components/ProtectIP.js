import React from 'react';
import Heading from './Heading';
import Card from './Card';
import Text from './Text';

import image01 from '@/public/tokyo-magnifier-web-search-with-elements 2.png';
import image02 from '@/public/tokyo-selecting-a-value-in-the-browser-window 1.png';
import image03 from '@/public/Illustration (1).png';
import image04 from '@/public/Illustration (2).png';
import image05 from '@/public/Illustration.png';
import image06 from '@/public/tokyo-sending-messages-from-one-place-to-another 1.png';


const ProtectIP = ({ ipDetails }) => {
  return (
    <>
      {/* How to Protect Your IP Address */}
      <section className="bg-white md:mt-5">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <Heading
            heading="How to Protect and Secure Your Privacy and IP Address in 2025"
            text="Discover proven methods to check your IP address, mask your online activity, and prevent leaks. Use tools like Insta-IP to find your public IP and monitor its security in real-time."
          />

          {/* Cards */}
          <div className="container mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <Card
                heading="Using a VPN"
                imageUrl={image01}
                bg="bg-gray-100"
                textBg="bg-blue-400"
                textColor="text-gray-500"
                text="A VPN hides your public IP address, replacing it with a secure IP."
              />
              <Card
                heading="Enable a Firewall"
                imageUrl={image02}
                bg="bg-blue-500"
                textBg="bg-white"
                textColor="text-white"
                text="Enable a firewall to block unauthorized access to your network."
              />
              <Card
                heading="Keep Browser Updated"
                imageUrl={image05}
                bg="bg-[#000000]"
                textBg="bg-white"
                textColor="text-white"
                text="Keep your browser updated to avoid vulnerabilities."
              />
              <Card
                heading="Use Two-Factor Authentication"
                imageUrl={image06}
                bg="bg-gray-100"
                textBg="bg-blue-400"
                textColor="text-gray-700"
                text="Use (2FA) for an extra layer of protection."
              />
              <Card
                heading="Change Passwords"
                imageUrl={image03}
                bg="bg-blue-500"
                textBg="bg-white"
                textColor="text-white"
                text="Regularly update your passwords to maintain security."
              />
              <Card
                heading="Beware of Phishing Scams"
                imageUrl={image04}
                bg="bg-[#000000]"
                textBg="bg-blue-400"
                textColor="text-white"
                text="Protect your personal information from fraud."
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Check Your IP Address in 3 Steps */}
      <section className="bg-gray-50 py-20">
    <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-12">
      How to Check Your IP Address in 3 Steps
    </h2>

    <div className="space-y-8">
      {/* Step 1 */}
      <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-start md:flex-row md:items-center md:gap-6 text-left">
        <div className="text-3xl font-bold text-blue-600 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
          1
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Visit Insta-IP.com</h3>
          <p className="text-gray-600 mt-1">
            Open your browser and navigate to{' '}
            <a href="https://insta-ip.com" className="text-blue-600 underline">
              Insta-IP.com
            </a>.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-start md:flex-row md:items-center md:gap-6 text-left">
        <div className="text-3xl font-bold text-blue-600 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
          2
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">Check your IP</h3>
          <p className="text-gray-600 mt-1">
            Our tool automatically detects your IP address. No installation required.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-start md:flex-row md:items-center md:gap-6 text-left">
        <div className="text-3xl font-bold text-blue-600 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
          3
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Review Your Results</h3>
          <p className="text-gray-600 mt-1">
            Instantly see your IP, location, browser, and screen details. Export or share results if needed.
          </p>
          <img
            src="/ss.png"
            alt="Insta-IP Check My IP button example"
            className="mt-4 rounded-lg shadow-md w-full max-w-sm"
            />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-white py-20">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-12">
      Who Needs an IP Checker Tool?
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
      {/* Developer Card */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4">👨‍💻</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Developers & IT Teams</h3>
        <p className="text-gray-600 text-sm">
          Debug network issues, verify geolocation APIs, or test VPN configurations.
        </p>
      </div>

      {/* Privacy Users */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4">🔒</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Privacy-Conscious Users</h3>
        <p className="text-gray-600 text-sm">
          Check for IP leaks, verify VPN effectiveness, or monitor DNS settings.
        </p>
      </div>

      {/* Remote Workers */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4">🌍</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Remote Workers</h3>
        <p className="text-gray-600 text-sm">
          Ensure your IP matches your company’s expected location for secure access.
        </p>
      </div>

      {/* E-Commerce */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4">🛒</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">E-Commerce Businesses</h3>
        <p className="text-gray-600 text-sm">
          Detect fraudulent transactions by analyzing buyer IP locations.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Reuse any text section below */}
      <Text />
    </>
  );
};

export default ProtectIP;
