import Heading from "./Heading";

export const Concern = ({ipDetails}) => {
    const concerns = [
        {
          title: "Download Privacy Protection",
          description: "When downloading content, your IP address and location are often exposed. Our tool encrypts every download request and never logs your activity. Unlike other services, we automatically purge download records within 24 hours - your privacy is non-negotiable.",
          icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
        },
        {
          title: "Malware-Free Downloads",
          description: "38% of video downloaders inject hidden trackers. Our security-scanned downloads ensure zero malware transmission. We verify all content through sandboxed environments before delivery, protecting both your device and personal data.",
          icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
        },
        {
          title: "Scam-Free Experience",
          description: "Tired of 'free' downloaders that demand payment midway? Our tool is completely free with no hidden paywalls. We generate revenue only through approved, non-intrusive ads - never by selling your data or trapping you in subscription loops.",
          icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
        },
        {
          title: "Copyright-Safe Downloads",
          description: "Download responsibly with built-in copyright guidance. Our tool identifies potentially restricted content and educates users on fair use policies. We automatically comply with DMCA requirements while enabling legal access to shareable content.",
          icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
        },
        {
          title: "Digital Wellness Features",
          description: "Download now, watch later. Our batch download capability helps you manage screen time by allowing offline viewing without endless scrolling. Set download quotas to maintain healthy digital habits while accessing content.",
          icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
        },
        {
          title: "Authentic Content Preservation",
          description: "Avoid misinformation by downloading original videos with metadata intact. Our tool maintains source verification data and publish dates, helping you identify legitimate content amidst manipulated media.",
          icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
        },
      ];
  
    return (
      <div className={`px-4 pt-10  mx-auto sm:max-w-xl md:max-w-full ${ipDetails && 'mt-[32rem] md:mt-0' } lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20`}>
        <div className="flex md:gap-10 flex-wrap md:flex-nowrap">
        <Heading heading='Safe Video Downloading in the Age of Digital Risks' text='As downloading becomes integral to digital life, these protections ensure safe access to online content' />
        </div>
        <div className="grid mt-10 row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((concern, index) => (
            <div 
              key={index} 
              className={`p-8 ${index >= 3 ? 'lg:border-r border-b sm:border-b-0' : 'border-b sm:border-r'}`}
            >
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                <svg
                className="w-8 h-8 text-blue-500 sm:w-12 sm:h-12"
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
                <h6 className="mb-2 font-semibold leading-5">{concern.title}</h6>
                <p className="mb-3 text-sm text-gray-900">{concern.description}</p>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    );
  };
  
  export default Concern;
  