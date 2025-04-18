import Heading from "./Heading";

export const Concern = ({ipDetails}) => {
    const concerns = [
      {
        title: "Privacy Concerns",
        description: "With the increasing collection of personal data online, users are more concerned than ever about how their information is used and shared. Ensuring that your personal details remain confidential is crucial in today's digital landscape.",
        icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
      },
      {
        title: "Cybersecurity Threats",
        description: "Cyberattacks, including phishing, malware, and ransomware, are becoming more sophisticated. Protecting sensitive information from these threats is essential to maintain digital security.",
        icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
      },
      {
        title: "Online Scams and Fraud",
        description: "The internet has seen a surge in scams, from deceptive emails to fraudulent websites. Being vigilant and informed can help users avoid falling victim to these schemes.",
        icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
      },
      {
        title: "Cyberbullying and Harassment",
        description: "Online platforms can sometimes be venues for bullying and harassment. Creating a respectful digital environment is vital for the mental and emotional well-being of all users.",
        icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
      },
      {
        title: "Fake News",
        description: "The spread of false information online can lead to confusion and mistrust. Verifying sources and seeking accurate information is more important than ever.",
        icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
      },
      {
        title: "Digital Well-being and Screen Time",
        description: "I want to manage my screen time and avoid becoming addicted to the internet, maintaining a healthy balance.",
        icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
      },
    ];
  
    return (
      <div className={`px-4 pt-10  mx-auto sm:max-w-xl md:max-w-full ${ipDetails && 'mt-[32rem] md:mt-0' } lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10`}>
        <div className="flex md:gap-10 flex-wrap md:flex-nowrap">
        <Heading heading='Biggest concerns about using the internet?' text='As we spend more time online, concerns regarding privacy, security, and the authenticity of information grow.' />
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
  