import { Techwall } from "../Techwall";

export const Skills = () => {
  return (
    <div className="max-w-[1000px] w-full h-full p-5 flex flex-col justify-evenly">
      <h2 className="inline-block text-5xl text-transparent bg-clip-text bg-linear-to-r from-[#E9A5F1] from-10% via-[#C68EFD] via-30% to-[#8F87F1] to-90%">
        Technologies
      </h2>
      <p className="text-2xl">
        These are the technologies I enjoy working with the most. You get extra
        points if you can name them all!
      </p>
      <Techwall />
    </div>
  );
};
