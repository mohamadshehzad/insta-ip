import React from 'react';

const benefits = [
  "Protects info on public hotspots",
  "Prevents tracking of internet activity",
  "Access geo-blocked content easily",
  "Avoid IP blocking effectively",
  "Enhances online privacy protection",
  "Masks your real IP address",
  "Securely encrypts your internet traffic",
  "Bypasses regional content restrictions",
  "Maintains anonymous online presence",
];

const VPNBenefits = () => {
  return (
    <div className="max-w-screen-xl px-4 md:px-12 container mx-auto mb-20">
      <h5 className="mb-2 md:mb-8 text-2xl md:text-4xl font-bold leading-none md:pl-2">
        Benefits of changing your address{' '}
        <br className="hidden md:block" />
        and hiding your location.
      </h5>
      <div className="grid mt-7 gap-3 row-gap-3 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <ul key={index} className="space-y-3">
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-blue-500"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              {benefit}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default VPNBenefits;
