import carmine from "./carmine.png";
import remus from "./remus.png";

export const Projects = () => {
  return (
    <div className="max-w-[1400px] w-full h-full flex flex-col justify-evenly py-20 px-5 overflow-hidden">
      <div className="max-w-[1000px] w-full mx-auto">
        <h2 className="inline-block text-5xl text-transparent bg-clip-text bg-linear-to-r from-[#E9A5F1] from-10% via-[#C68EFD] via-30% to-[#8F87F1] to-90%">
          My Projects
        </h2>
      </div>

      <div className="relative h-full">
        <div className="absolute right-0 top-0 h-full w-2/3 flex items-center justify-end">
          <img
            src={carmine}
            alt="Carmine Options AMM app screenshot"
            className="w-3/4 rounded-lg -z-10"
          />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1/2 flex flex-col justify-evenly items-center">
          <a
            href="https://app.carmine.finance?ref_code=charming-ghostwhite-mongoose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl md:text-4xl underline">
              Carmine Options AMM
            </h2>
          </a>
          <p className="text-md md:text-2xl">
            Automated Market Maker for crypto options trading
          </p>
        </div>
      </div>
      <div className="relative h-full">
        <div className="absolute left-0 top-0 h-full w-2/3 flex items-center justify-start">
          <img
            src={remus}
            alt="RemusDEX app screenshot"
            className="w-3/4 rounded-lg -z-10"
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex flex-col justify-evenly items-center">
          <a
            href="https://app.remusdex.xyz?ref_code=charming-ghostwhite-mongoose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl md:text-4xl underline">RemusDEX</h2>
          </a>
          <p className="text-md md:text-2xl">
            Fully onchain Decentralised Orderbook
          </p>
        </div>
      </div>
    </div>
  );
};
