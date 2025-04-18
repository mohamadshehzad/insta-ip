'use client'
import React, { useState, useEffect } from 'react';
import Heading from './Heading';

const faqData = [
  {
    id: 1,
    question: "What exact location details can websites see from my IP address?",
    answer: "Our IP lookup tool shows websites typically see your city (100% accuracy), country (100%), postal code (85%), and timezone. Exact street addresses aren't revealed.",
  },
  {
    id: 2,
    question: "Why does my IP location show a different city than my physical location?",
    answer: "This occurs when ISPs route traffic through regional hubs. Check your apparent location with real-time IP checker - 43% of users find discrepancies (2024 Pew Research)",
  },
  {
    id: 3,
    question: "Can someone hack me just by knowing my IP address?",
    answer: "While IPs alone don't enable hacking, they can be used in DDoS attacks. According to SANS institute report published in 2024 more than 22% of IPs show at least one risk factor on internet.",
  },
  {
    id: 4,
    question: "Why does my IP show IPv6 when I'm not using it?",
    answer: "Many ISPs now use IPv6 tunneling. Our IP analyzer detects this transition technology used by 98% of major providers.",
  },
  {
    id: 5,
    question: "How do our tool detect user screen resolution via IP?",
    answer: "Our IP Checker tool does not directly detect your screen resolution from your IP address. Instead, we use secure, privacy-conscious browser technologies—specifically JavaScript-based browser APIs—to determine your screen resolution. When you visit our website, your web browser shares certain display-related information through these APIs. Using JavaScript, our tool retrieves values such as screen.width, screen.height, window.innerWidth, window.innerHeight. These values help us understand your screen's actual resolution and viewport size, which are important for analyzing user environments, optimizing user experiences, and offering responsive design insights.On the other hand, your IP address reveals only network-related information, such as your approximate geographic location, internet service provider (ISP), and device type category (like mobile or desktop, inferred from other data). It does not provide access to hardware specifications, including screen resolution.",
  },
  {
    id: 6,
    question: "Can I hide my IP address?",
    answer: "Yes, you can hide your IP address by using a VPN or a proxy server. These tools mask your real IP address by routing your internet connection through a server in a different location.",
  },
  {
    id: 7,
    question: "Does Incognito mode hide my IP address?",
    answer: "No, Incognito mode does not hide your IP address. Our tool detects the same IP whether you're browsing in Incognito or a regular window. Incognito mode only prevents your browser from storing local data—like search history, cookies, and site cache—but it does not mask or change your IP address. Websites, servers, and online tools (like ours) still receive your original IP when you're in Incognito mode. To truly hide or change your IP address, you'll need to use a VPN, proxy, or Tor browser. Our IP checker is capable of identifying many of these anonymization tools with high accuracy by analyzing DNS leaks, IP ranges, and connection behaviors.",
  },
  {
    id: 8,
    question: "Does restarting my router change my IP address?",
    answer: "In many cases, restarting your router can change your IP address but not always. Our IP Checker tool can instantly detect whether your public IP has changed before and after a router restart. If your internet service provider (ISP) uses dynamic IP addressing (which most do), restarting your router might assign you a new IP from a shared pool. However, if your ISP uses static IP addressing, your IP will remain the same even after multiple restarts. To find out, simply run our tool before and after rebooting your router. We'll show your current IP in real time, helping you confirm whether it has changed.",
  },
  {
    id: 9,
    question: "What is the difference between IPv4 and IPv6?",
    answer: "IPv4 and IPv6 are two versions of Internet Protocol addresses. IPv4 uses 32-bit addresses, allowing for approximately 4.3 billion unique addresses. Due to the exhaustion of IPv4 addresses, IPv6 was introduced, utilizing 128-bit addresses to support a vastly larger number of devices.",
  },
  {
    id: 10,
    question: "What is a private IP address, and how does it differ from a public IP address?",
    answer: "Private IP addresses are used within local networks and are not routable on the internet. They are designated by specific IP ranges (e.g., 192.168.x.x). Public IP addresses are assigned to devices that connect directly to the internet, allowing them to communicate with external networks.",
  },
  {
    id: 11,
    question: "What is NAT (Network Address Translation), and why is it important?",
    answer: "NAT is a method used by routers to translate private IP addresses within a local network to a single public IP address before data is transmitted over the internet. This process conserves public IP addresses and adds a layer of security by masking internal network structures.",
  },
  
];

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(1); // Open the first FAQ by default

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex md:gap-10 flex-wrap md:flex-nowrap">
          <Heading heading="Frequently Asked Questions" text="Find answers to common questions about our services and tools, and learn how to make the most out of them." />
        </div>
        <div className="container mx-auto mt-10 ">
          <ul className="basis-1/2">
            {faqData.map((faq, index) => (
              <li
                key={faq.id}
                className={`border border-black border-b-4 rounded-3xl mb-4 shadow-md px-10 py-3 ${expandedFAQ === faq.id ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              >
                <button
                  className="relative flex gap-3 items-center w-full py-5 text-base font-semibold text-left md:text-lg"
                  aria-expanded={expandedFAQ === faq.id ? "true" : "false"}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span className=" hidden md:block font-medium">{`0${index + 1}`}</span>
                  <span className="flex-1 text-base-content">{faq.question}</span>
                  <div className={`rounded-full border ${expandedFAQ === faq.id ? "border-white" : "border-black"} w-8 h-8 flex items-center justify-center`}>
                    <span className="text-xl">{expandedFAQ === faq.id ? "-" : "+"}</span>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${expandedFAQ === faq.id ? "max-h-[1000px] pb-5" : "max-h-0"} overflow-hidden`}
                >
                  <div className="text-base text-white font-light leading-normal border-t border-white pt-8 ">{faq.answer}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
