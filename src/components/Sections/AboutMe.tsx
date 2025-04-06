import dave from "./dave.jpg";

export const AboutMe = () => {
  return (
    <div className="max-w-[1000px] h-full p-5 flex flex-col justify-evenly">
      <div className="flex justify-evenly items-center">
        <h2 className="inline-block text-5xl text-transparent bg-clip-text bg-linear-to-r from-[#E9A5F1] from-10% via-[#C68EFD] via-30% to-[#8F87F1] to-90%">
          Hi, I'm David
        </h2>
        <img className="rounded-full w-32 md:w-50 opacity-80" src={dave}></img>
      </div>
      <div>
        <p className="text-2xl">
          I’m a fullstack software engineer with extensive experience in web3
          space.
        </p>
        <p className="text-2xl">
          I have a passion for building and learning new technologies.
        </p>
      </div>
    </div>
  );
};
