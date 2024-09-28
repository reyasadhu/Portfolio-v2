import Link from "next/link";
import Image from "next/image";
import MyProfile from "../../assets/ReyaSadhu.jpeg";

const Hero = () => {
  const sendEmail = () => {
    window.location.href = "mailto:reyasadhu7687@gmail.com";
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
      <Image
        src={MyProfile}
        alt="My Profile"
        width={150}
        height={150}
        className="aspect-square rounded-full mb-4 sm:mb-5"
      />
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
        Reya Sadhu
      </h1>
      <button
        onClick={sendEmail}
        className="bg-[#E95278] text-white px-4 py-2 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-5"
      >
        Open to Work
      </button>
      <p className="text-[#747371] text-center text-xs sm:text-sm mb-2 sm:mb-3">
        Machine Learning Engineer from Los Angeles, California
      </p>
      <p className="text-[#747371] text-xs sm:text-sm">
        Find me on:{" "}
        <Link
          href="https://github.com/reyasadhu"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1 mr-2"
        >
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/reya-sadhu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mr-2"
        >
          Linkedin
        </Link>
        <Link
          href="https://drive.google.com/drive/folders/1E82cRQPlTA3OidzWd15CD3VO8q1Oucvh"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Resume
        </Link>
      </p>
    </div>
  );
};

export default Hero;
