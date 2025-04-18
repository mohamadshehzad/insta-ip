import Image from "next/image";

const Card = ({ heading, imageUrl, bg, textBg, textColor,  text }) => (
    <div className={`flex flex-col p-6 md:flex-row md:py-7 md:ps-16 border border-black border-b-4 rounded-[2.5rem] shadow-md ${bg}`}>
        <div className="flex-1 mb-4 md:mb-0 md:mr-4">
        <h1 className="mb-4 text-4xl font-medium leading-none  tracking-tight text-gray-900 md:text-5xl lg:text-2xl"><mark className={` text-black  ${textBg} `}>{heading}</mark></h1>
        <p className={`text-lg me-auto font-thin  lg:text-md ${textColor}`}>{text}</p>
        </div>
        <div className="w-full md:w-auto flex justify-center items-center relative h-[150px]">
            <div className="w-[300px] h-[120px] relative">
                <Image src={imageUrl} alt={heading} fill className="rounded-lg object-contain" />
            </div>
        </div>
    </div>
);

export default Card;