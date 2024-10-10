import Image from "next/image";
import Link from "next/link";

const AiPageM = () => {
  return (
    <div className="mx-auto p-10 text-white">
      <h2 className="   pt-10 text-white text-2xl text-center font-black mb-3 ">
        CapitalRevo AI support
      </h2>
      <div className="  flex justify-center ">
        <hr className="border-t-[2px] border-[#990033] w-[90%] my-1 " />
      </div>
      <h3 className=" text-xl mt-2 mb-2 text-white font-bold text-center">
        Leave out the guessing from your trading success!
      </h3>

      {/* Slika */}
      <div className="w-full mb-4">
        <Image
          src="/HP AI Image-min.png" // zameni sa putanjom do tvoje slike
          alt="Opis slike"
          width={500} // prilagodi širinu
          height={500} // prilagodi visinu
          className="w-full"
        />
      </div>
      <h2 className="mb-4 text-lg font-bold   text-[#990033]">
        AI - Your Fast Track to Profitable Trading
      </h2>

      {/* Prvi paragraf */}
      <div className="mb-4">
        <p className="text-xs">
          Unlock the power of CapitalRevo&apos;s AI-powered trading platform and
          seize opportunities in the ever-changing foreign exchange markets.
        </p>
      </div>

      {/* Drugi paragraf */}
      <div className="mb-4">
        <p className="text-xs">
          With CapitalRevo, you can capitalize on price fluctuations in one of
          the world&apos;s most dynamic arenas.
        </p>
      </div>

      {/* Treći paragraf */}
      <div className="mb-4">
        <p className="text-xs">
          Our web trader and mobile app leverage cutting-edge machine learning
          technology to trade across a wide spectrum of major, minor, and exotic
          currency pairs.
        </p>
      </div>

      {/* Četvrti paragraf */}
      <div className="mb-4">
        <p className="text-xs">
          Simply sign up, deposit your funds, and let CapitalRevo&apos;s AI
          handle the heavy lifting—automating analysis, risk management, and
          trade execution seamlessly.
        </p>
      </div>

      {/* Peti paragraf */}
      <div className="mb-4">
        <p className="text-xs">
          With AI in charge, you&apos;ll act on emerging opportunities in
          real-time, tapping into the trillions of dollars traded daily on this
          highly liquid market.
        </p>
      </div>
      <div className="  flex justify-center ">
        <hr className="border-t-[2px] border-[#990033] w-[100%] my-2 mb-5 " />
      </div>
      {/* Slika */}
      <div className="w-full mb-4">
        <Image
          src="/HP AI Image 2.png" // zameni sa putanjom do tvoje slike
          alt="Opis slike"
          width={500} // prilagodi širinu
          height={500} // prilagodi visinu
          className="w-full"
        />
      </div>
      <p className="mb-4 text-xs">
        <strong>A Revolutionary AI Trading Bot</strong>
        <br />
        CapitalRevo&apos;s AI-driven bot is built with groundbreaking deep
        learning technology, delivering an exceptional trade win rate. Our
        proprietary blend of machine learning and natural language processing
        models sets a new standard in the evolution of AI-powered trading.
      </p>

      <p className="mb-4 text-xs">
        <strong>AI That Thinks Like You</strong>
        <br />
        Harnessing the latest deep neural networks, CapitalRevo&apos;s AI
        algorithms mimic the human brain, continuously learning from trades,
        user behavior, and vast datasets. This allows it to anticipate market
        movements with ever-increasing accuracy.
      </p>

      <p className="mb-4 text-xs">
        <strong>Big Data Meets Precision Trading</strong>
        <br />
        With the ability to process massive datasets, CapitalRevo&apos;s AI
        scours both traditional and alternative data sources from around the
        globe. Whether it&apos;s economic trends or specific asset-class
        insights, our AI forex bot analyzes it all to deliver smarter, faster
        trades.
      </p>

      <p className="mb-4 text-xs">
        <strong>Mastering Risk Management</strong>
        <br />
        Our AI doesn&apos;t just trade—it protects. Using sophisticated
        mathematical models, the system continuously refines risk parameters,
        balancing potential gains with effective risk mitigation. The result?
        Optimized profits with minimized exposure.
      </p>

      <p className="mb-4 text-xs">
        <strong>Smart, Data-Driven Decisions</strong>
        <br />
        CapitalRevo&apos;s AI evaluates a wealth of data from global markets in
        multiple languages, from real-time news updates to historical price
        trends. Combining technical indicators and deep analysis, it ensures
        every trade is executed at just the right moment.
      </p>
      <div className="  flex justify-center ">
        <hr className="border-t-[2px] border-[#990033] w-[100%] my-2 mb-5" />
      </div>
      <div className="w-full mb-4">
        <Image
          src="/HP AI Image 3.png" // zameni sa putanjom do tvoje slike
          alt="Opis slike"
          width={500} // prilagodi širinu
          height={500} // prilagodi visinu
          className="w-full"
        />
      </div>
      <div className=" p-4 xl:p-10">
        {/* Naslov */}
        <h1 className="text-[#990033] text-3xl font-bold ">
          Why Choose AI for Forex Trading?
        </h1>

        {/* Mali naslov */}
        <h2 className="text-white text-2xl font-bold my-4">
          With AI at the helm, you&apos;ll benefit from:
        </h2>

        {/* Paragrafi sa tekstom */}
        <p className="text-white text-xs my-4">
          <strong>Lightning-fast execution:</strong> Never miss a trading
          opportunity
        </p>
        <p className="text-white text-xs my-4">
          <strong>Efficiency and speed:</strong> Save time and cut operational
          costs
        </p>
        <p className="text-white text-xs my-4">
          <strong>Advanced data processing:</strong> Analyze multiple sources in
          seconds
        </p>
        <p className="text-white text-xs my-4">
          <strong>Automated risk management:</strong> Assess and mitigate
          exposure with ease
        </p>
        <p className="text-white text-xs my-4">
          <strong>Enhanced pattern recognition:</strong> Spot emerging trends
          faster than ever
        </p>
        <p className="text-white text-xs my-4">
          <strong>Emotion-free decisions:</strong> Pure logic, no emotional bias
        </p>
        <p className="text-white text-xs my-4">
          <strong>Scalability:</strong> Handle a high volume of forex trades
          simultaneously
        </p>

        <p className="text-[#990033] text-xl font-bold my-8">
          Ready to redefine your trading experience? <br />
          Let CapitalRevo&apos;s AI put you on the fast track to success.
        </p>

        {/* Dugme */}
        <div className="mt-10 flex justify-center">
          <Link href="/accounts">
            <button className="bg-white text-navcolor py-2 px-4 rounded shadow hover:bg-gray-100 transition">
              Let&apos;s Begin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiPageM;
