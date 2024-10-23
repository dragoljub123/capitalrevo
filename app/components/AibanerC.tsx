import Image from "next/image";
import Link from "next/link";

const AibanerC = () => {
  return (
    <div className="mx-auto">
      <div className="max-w-screen-xl flex justify-center text-white">
        {/* Leva strana */}
        <div className="md:p-12 lg:p-10 ">
          <h2 className="md:text-2xl lg:text-4xl font-black text-[#00dbfe] mb-4  ">
            CapitalRevo AI support
          </h2>
          <h3 className="md:text-xl lg:text-2xl mb-4 font-bold ">
            Leave out the guessing from your trading success!
          </h3>

          {/* Prvi paragraf */}
          <div className="mb-4 ">
            <h3 className="text-lg font-semibold ">
              Unmatched Processing Speed
            </h3>
            <p className="text-xs">
              AI trading bots handle vast amounts of market data in real-time,
              analyzing it faster than any human ever could. This lightning-fast
              speed ensures you&apos;re always one step ahead in making informed
              trading decisions.
            </p>
          </div>

          {/* Drugi paragraf */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Continuous Learning and Improvement
            </h3>
            <p className="text-xs">
              With built-in machine learning, these bots continuously evolve.
              They analyze every bit of data to deepen their understanding of
              market trends, enabling them to adapt and improve with each trade.
            </p>
          </div>

          {/* Treći paragraf */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold  ">
              Advanced Analytical Power
            </h3>
            <p className="text-xs">
              AI trading systems effortlessly perform complex technical analyses
              across multiple markets at once, identifying key price trends in
              seconds—work that would take humans hours to complete.
            </p>
          </div>

          {/* Četvrti paragraf */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold  ">
              Emotionless, Data-Driven Decisions
            </h3>
            <p className="text-xs">
              Powered solely by data, trading bots eliminate emotional
              decision-making, focusing purely on statistics. No fear or
              greed—just precise, rational moves to optimize your trading
              strategy.
            </p>
          </div>

          {/* Peti paragraf */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold  ">
              Market Access For Everyone
            </h3>
            <p className="text-xs">
              AI trading bots make high-level market expertise accessible to
              everyone, regardless of financial background, investment size, or
              time commitment. You can tap into expert-level trading without
              needing to be an expert yourself.
            </p>
          </div>

          {/* Dugme Learn More */}
          <div className="mt-4 ">
            <Link href="/ai-support">
              <button className="bg-white text-navcolor font-bold px-4 py-2 gap-2 w-48 h-12  rounded-lg shadow hover:bg-tirkizna transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Desna strana */}
        <div className="w-full md:p-12 lg:p-10">
          <Image
            src="/HP AI Image-min.png" // zameni sa putanjom do tvoje slike
            alt="Opis slike"
            width={500} // prilagodi širinu
            height={500} // prilagodi visinu
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AibanerC;
