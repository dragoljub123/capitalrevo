import Image from "next/image";
import Link from "next/link";

const AibanerM = () => {
  return (
    <div className="mx-auto p-5 md:p-10 text-white">
      {/* Naslov */}
      <h2 className="text-2xl font-black mb-2 ">CapitalRevo AI support</h2>
      <div className="   ">
        <hr className="border-t-[2px] border-[#00dbfe] w-[90%] my-2 " />
      </div>

      {/* Podnaslov */}
      <h3 className="text-lg mb-4 font-bold">
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

      {/* Prvi paragraf */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#00dbfe]">
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
        <h3 className="text-lg font-semibold text-[#00dbfe]">
          Continuous Learning and Improvement
        </h3>
        <p className="text-xs">
          With built-in machine learning, these bots continuously evolve. They
          analyze every bit of data to deepen their understanding of market
          trends, enabling them to adapt and improve with each trade.
        </p>
      </div>

      {/* Treći paragraf */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-[#00dbfe]">
          Advanced Analytical Power
        </h3>
        <p className="text-xs">
          AI trading systems effortlessly perform complex technical analyses
          across multiple markets at once, identifying key price trends in
          seconds—work that would take humans hours to complete.
        </p>
      </div>

      {/* Četvrti paragraf */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-[#00dbfe]">
          Emotionless, Data-Driven Decisions
        </h3>
        <p className="text-xs">
          Powered solely by data, trading bots eliminate emotional
          decision-making, focusing purely on statistics. No fear or greed—just
          precise, rational moves to optimize your trading strategy.
        </p>
      </div>

      {/* Peti paragraf */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-[#00dbfe]">
          Market Access For Everyone
        </h3>
        <p className="text-xs">
          AI trading bots make high-level market expertise accessible to
          everyone, regardless of financial background, investment size, or time
          commitment. You can tap into expert-level trading without needing to
          be an expert yourself.
        </p>
      </div>

      {/* Dugme Learn More */}
      <div className="mt-3 ">
        <Link href="/ai-support">
          <button className="bg-white text-navcolor font-bold py-2 px-4 w-48 h-12 rounded-lg shadow transition hover:bg-[#00dbfe]">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AibanerM;
