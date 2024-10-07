"use client";

import { useState } from "react";

// Define the type for videos
type Video = {
  title: string;
  src: string;
};

type VideoCategories = {
  [category: string]: Video[];
};

// Video data
const videos: VideoCategories = {
  Beginner: [
    {
      title: "Basic Forex Education",
      src: "",
    },
    {
      title: "Why Trade Forex",
      src: "https://play.dyntube.io/iframe/ojYsM6Gakkuj98xT026iw",
    },
    {
      title: "When To Trade Forex",
      src: "https://play.dyntube.io/iframe/hbsT8TpIDkODP6lOIcAng",
    },
    {
      title: "Trading Terminology Or Where Am I Going Long",
      src: "https://play.dyntube.io/iframe/Hq2OQORhXEmgK18lt7auGw",
    },
    {
      title: "How To Trade With Leverage",
      src: "https://play.dyntube.io/iframe/t0IdrS5z4kqSO6nPiC1H4Q",
    },
    {
      title: "What Is A PIP",
      src: "https://play.dyntube.io/iframe/5mT6I5egnkuKpWataMm7NQ",
    },
    {
      title: "How To Place A Trade In Forex",
      src: "https://play.dyntube.io/iframe/lVwCFDR9ikkVmGitZvPpg",
    },
    {
      title: "Types Of Forex Orders",
      src: "https://play.dyntube.io/iframe/x2pu7EFk00iFR9Zg06YZjQ",
    },
    {
      title: "Technical Analysis In Forex",
      src: "https://play.dyntube.io/iframe/gAmvQBdDn0yMQV26o3BfDw",
    },
    {
      title: "Fundamental Analysis In Forex",
      src: "https://play.dyntube.io/iframe/1KUaWVzZ00a7vVqAygEwg",
    },
    {
      title: "Types Of Forex Charts",
      src: "https://play.dyntube.io/iframe/1zAS2CXEEyU67A77X6sMQ",
    },
    {
      title: "Support And Resistance In Forex",
      src: "https://play.dyntube.io/iframe/oa5VrratBEO7rA0n95t99Q",
    },
    {
      title: "Trendlines",
      src: "https://play.dyntube.io/iframe/Vt19pFXtEOUI6dHGixRw",
    },
    {
      title: "Fibonacci",
      src: "",
    },
    {
      title: "Fibonacci",
      src: "https://play.dyntube.io/iframe/uOIHywZUeiGAAIXpUy3A",
    },
    {
      title: "Forex Fibonacci Extensions",
      src: "https://play.dyntube.io/iframe/I239xYZ9bEKDg6ziqUsESQ",
    },
    {
      title: "Learn Forex Fibonacci Fan And Arcs",
      src: "https://play.dyntube.io/iframe/6kbuVYnbTk2uGtRor0DXg",
    },
    {
      title:
        "Learn Forex Combining Fibonacci With Other Technical Analysis Tools",
      src: "https://play.dyntube.io/iframe/EPK3Xn4G0WanOrISERNQ",
    },
    {
      title: "Candlesticks",
      src: "",
    },
    {
      title: "Candlesticks",
      src: "https://play.dyntube.io/iframe/Cfz9HMUmGEKM8ASdD6nw",
    },
    {
      title: "Doji Candlestick In Forex",
      src: "https://play.dyntube.io/iframe/5zjcP1A6a0bF9PiMqYlqA",
    },
    {
      title: "Marubozu Candlestick In Forex",
      src: "https://play.dyntube.io/iframe/5rR2jcxkAEWQkzW9eAQ2w",
    },
    {
      title: "Hammer And Hanging Man Candlesticks",
      src: "https://play.dyntube.io/iframe/qkKL78oHPUqOnwRrt soGA",
    },
    {
      title: "Shooting Star And Inverted Hammer Candlestick",
      src: "https://play.dyntube.io/iframe/dtgimv7YikqbzxZcvNQYxg",
    },
    {
      title: "Bullish Piercing Pattern",
      src: "https://play.dyntube.io/iframe/arb9wDEwoUmxaCBVO9rC7w",
    },
    {
      title: "Dark Cloud Cover Pattern ",
      src: "https://play.dyntube.io/iframe/9WnmXRjX0iC3CO7tBMTQ",
    },
    {
      title: "Bullish And Bearish Engulfing Patterns",
      src: "https://play.dyntube.io/iframe/bdExFbiykSiAUpNhZLtSg",
    },
    {
      title: "Tweezer Tops And Bottoms",
      src: "https://play.dyntube.io/iframe/iksJU40Nv02L5IJ7AMsPUA",
    },
    {
      title: "Morning And Evening Star Patterns",
      src: "https://play.dyntube.io/iframe/rQWbCWX27kq3QfSfVKwtBg",
    },
    {
      title: "3 White Soldiers 3 Black Crows",
      src: "https://play.dyntube.io/iframe/RDDGVbTvrky9J2lGkCFbJA",
    },
    {
      title: "3 Insideup 3 Inside Down Pattern",
      src: "https://play.dyntube.io/iframe/fSJDpJ70z0euwHMOpPDY2w",
    },
    {
      title: "13. Rising And Falling Three Methods",
      src: "https://play.dyntube.io/iframe/Ap5nnu5SLEezF6YQFNTgPQ",
    },

    {
      title: "Chart formation patterns",
      src: "",
    },
    {
      title: "Forex Double Top And Double Bottom Formation Patterns",
      src: "https://play.dyntube.io/iframe/p4a7XDTUCEuqwFFyWY0EQ",
    },
    {
      title: "Learn Forex Head And Shoulders Pattern",
      src: "https://play.dyntube.io/iframe/hn9IMhW2t067bbpDkY35jg",
    },
    {
      title: "Forex Inverse Head And Shoulders Pattern",
      src: "https://play.dyntube.io/iframe/LUIRcn090kSRac7qsiUCRw",
    },
    {
      title: "Forex Bull Flag Formation Patterns",
      src: "https://play.dyntube.io/iframe/q8VyqLNbVUGwJhgnTYBYJQ",
    },
    {
      title: "Forex Bear Flag Patterns",
      src: "https://play.dyntube.io/iframe/8eTPmCLoFkqgvbgJJHF6xg",
    },
    {
      title: "Forex Bullish And Bearish Pennant Formation",
      src: "https://play.dyntube.io/iframe/IJexch9GjEOLMTnXwa7n6Q",
    },
    {
      title: "Forex Falling Wedge Pattern",
      src: "https://play.dyntube.io/iframe/OcpFHicB0i9jXnkfXaw",
    },
    {
      title: "Forex Ascending And Descending Triangle Formations",
      src: "https://play.dyntube.io/iframe/7WUwGLtHkqqfmC048iLRg",
    },
    {
      title: "Forex Symmetrical Triangle Pattern",
      src: "https://play.dyntube.io/iframe/IrbpkRMwmkuz8mGn5TOg7A",
    },
    {
      title: "Forex Box Range",
      src: "https://play.dyntube.io/iframe/WsL1rYJFkKi3y2IKZxZ4g",
    },
    {
      title: "Forex Cup And Handle Formation Pattern",
      src: "https://play.dyntube.io/iframe/XGz81dYLOEWaLiS0KihYwg",
    },
    {
      title: "Forex Inverse Cup And Handle Pattern",
      src: "https://play.dyntube.io/iframe/hK9BewgM4USBKw4KMN0cQ",
    },
    {
      title: "Forex Rising Wedge Pattern",
      src: "https://play.dyntube.io/iframe/ELZoU074kmFn5Lo2KpWWA",
    },
  ],
  Intermediate: [
    {
      title: "Forex Indicators",
      src: "",
    },
    {
      title: "Forex Indicators",
      src: "https://play.dyntube.io/iframe/60yCRtBIlkexWvyQUURd2A",
    },
    {
      title: "Forex RSI Stochastic Oscillator",
      src: "https://play.dyntube.io/iframe/gECQs82CtUS5xtIvk6eKlg",
    },
    {
      title: "Forex ATR Average True Range",
      src: "https://play.dyntube.io/iframe/GxJahUg3 AUeObJc00bYkjQ",
    },
    {
      title: "Forex Moving Average",
      src: "https://play.dyntube.io/iframe/iYrFyG0Yu0GkD9GIQyMJ2g",
    },
    {
      title: "Forex Moving Average Convergence Divergence MACD",
      src: "https://play.dyntube.io/iframe/aO5ZK66z02ZK0Lm3XeJ3Q",
    },
    {
      title: "Forex Average Directional Index ADX",
      src: "https://play.dyntube.io/iframe/M1wrlIQXPEKkxjvdHjBDYQ",
    },
    {
      title: "Forex Bollinger Bands",
      src: "https://play.dyntube.io/iframe/qJIznSGt3U22mNXzXKlzQ",
    },
    {
      title: "Forex Parabolic SAR",
      src: "https://play.dyntube.io/iframe/1Wu9pZmqREHSGmU97qimg",
    },
    {
      title: "Forex Ichimoku Kinko Hyo",
      src: "https://play.dyntube.io/iframe/BdAWKdeDmkquIJWVXqRhw",
    },
    {
      title: "Forex Pivot Points",
      src: "https://play.dyntube.io/iframe/myQ9OPKnSU6cDq5LIuYb4Q",
    },

    {
      title: "Timing in Forex",
      src: "",
    },
    {
      title: "Timing Your Entries When Trading Forex",
      src: "https://play.dyntube.io/iframe/6ODKVATfjUe3IvzWzgciOQ",
    },
    {
      title: "Timing Your Exits When Trading Forex",
      src: "https://play.dyntube.io/iframe/Ht0QhtoQUqZjJV53gr2oA",
    },
    {
      title: "MT4",
      src: "",
    },
    {
      title: "Getting Started With MT4",
      src: "https://play.dyntube.io/iframe/15JXEnFbCEOpfWqeiLVqIA",
    },
    {
      title: "Market Watch Basics",
      src: "https://play.dyntube.io/iframe/IudxkgnaNknzYgsVTkibQ",
    },
    {
      title: "Chart Window Basics",
      src: "https://play.dyntube.io/iframe/lpQ5xJ88uUSKtS6U8XjxQ",
    },
    {
      title: "Terminal Window Basics - Part 1",
      src: "https://play.dyntube.io/iframe/RgBKzeIUuyWpehnNF5lg",
    },
    {
      title: "Terminal Window Basics - Part 2",
      src: "https://play.dyntube.io/iframe/g9vGZ3UDE2SmOx2A3D3tg",
    },
    {
      title: "Navigator Window Basics",
      src: "https://play.dyntube.io/iframe/QQOeGc7pDEGPQHrYisGmpg",
    },
    {
      title: "Placing Orders",
      src: "https://play.dyntube.io/iframe/j nVsdm7zA0qsBYtUJG3Blw",
    },
    {
      title: "Account History - Closed Trades",
      src: "https://play.dyntube.io/iframe/8nEdKMaCIEKFVz50puc6A",
    },
    {
      title: "Market Watch Detailed",
      src: "https://play.dyntube.io/iframe/nLb83eTm40WThY8NpGHQA",
    },
    {
      title: "All About Charts",
      src: "https://play.dyntube.io/iframe/ivyTKaSu0uD24azeLGpug",
    },
    {
      title: "Chart Window Properties",
      src: "https://play.dyntube.io/iframe/egbFpx04EiMlJ2oTTTDA",
    },
    {
      title: "Indicators And Scripts",
      src: "https://play.dyntube.io/iframe/ablHGkKvk2lObFI5U61hw",
    },

    {
      title: "Cryptocurrencies",
      src: "",
    },
    {
      title: "Background - Early Digital Currencies (1980-2009)",
      src: "https://play.dyntube.io/iframe/XFpzY9rKW0WfIlWZ7r7FJg",
    },
    {
      title: "Evolution Of Blockchain And Cryptocurrencies",
      src: "https://play.dyntube.io/ iframe/8U79aw0VNEOdMmEblF3tvw",
    },
    {
      title: "The Future Of Digital Currencies And Blockchain",
      src: "https://play.dyntube.io/iframe/FGMT0aIIU62kyJRvOw4A",
    },
    {
      title: "Background - Concept Of Owning A Digital Currency",
      src: "https://play.dyntube.io/iframe/FNj2GxBNkO32NxMnG1g",
    },
    {
      title: "What Are Wallets And How Do They Work",
      src: "https://play.dyntube.io/iframe/6amlFNZ6kCSIGuWrsO5Q",
    },
    {
      title: "Backups & Offline Storage - Why Is It Important, How To Do It",
      src: "https://play.dyntube.io/iframe/HfUHZdJJRkyJKtTEkacsOQ",
    },
    {
      title: "Mobile Security - How To Safely Protect Your Mobile Wallet",
      src: "https://play.dyntube.io/iframe/Rz2zpA0qhEGeyLVWHei6sQ",
    },
    {
      title: "Types Of Cryptocurrency",
      src: "https://play.dyntube.io/iframe/CyNKIwLfwkylWqeWZPSOiA",
    },
    {
      title: "What Is Bitcoin",
      src: "https://play.dyntube.io/iframe/joutbjT33UG2OwJroJsRzw",
    },
    {
      title: "The History Of Bitcoin",
      src: "https://play.dyntube.io/iframe/wmVjV8LGeUu3xNNFO76WaQ",
    },
    {
      title: "Ways To Use Bitcoin Besides Investing",
      src: "https://play.dyntube.io/iframe/dQflnyBKNEeSjd0Cv7NoQ",
    },
    {
      title: "How To Invest In Bitcoin",
      src: "https://play.dyntube.io/iframe/8NCczzlUT0qLBgwiC30K0Q",
    },
    {
      title: "What Are The Risks Involved In Bitcoin Trading",
      src: "https://play.dyntube.io/iframe/AeqhjvAwUiOUPd75LbdEg",
    },
    {
      title: "How To Buy Bitcoin",
      src: "https://play.dyntube.io/iframe/fZlS73BrpEOAtWvyQWdhcg",
    },
    {
      title: "Why Accept Bitcoin",
      src: "https://play.dyntube.io/iframe/WNqeSs3DUsDpenBwPXNw",
    },
    {
      title: "What Are The Risks Involved In Using Bitcoin",
      src: "https://play.dyntube.io/iframe/xcuT5FjKFE2hK1DRAa3J5A",
    },
    {
      title: "How To Accept Bitcoin For Services Or Goods",
      src: "https://play.dyntube.io/iframe/4WB1o2k1o0eA70g52K90pQ",
    },
    {
      title: "Outlook On Taxation, Accounting & Legalities",
      src: "https://play.dyntube.io/iframe/Ik7qPnyxka6Vfa8dGMDAw",
    },
  ],

  Advanced: [
    {
      title: "Stock market introduction",
      src: "",
    },
    {
      title: "Introduction To The Stock Market",
      src: "https://play.dyntube.io/iframe/sUaUgYsDGUipJYkltXwZew",
    },
    {
      title: "Can Stock Charts Predict The Future & Trading Systems",
      src: "https://play.dyntube.io/iframe/bjYaptlrUCi5f2RUEAGyA",
    },
    {
      title: "Support And Resistance Levels",
      src: "https://play.dyntube.io/iframe/uThUCoRx0SpYaHs21yefw",
    },
    {
      title: "How To Identify A Market Direction - Part 1",
      src: "https://play.dyntube.io/iframe/Kf9HrofVskqRaRPPIXfV3g",
    },
    {
      title: "How To Identify A Market Direction - Part 2",
      src: "https://play.dyntube.io/iframe/ZIzfm6TVPUOTg4FR97wRKw",
    },
    {
      title: "Chart Patterns Introduction",
      src: "https://play.dyntube.io/iframe/Jx6w40uqG0idndMEX7eBzQ",
    },
    {
      title: "Symmetrical Triangles",
      src: "https://play.dyntube.io/iframe/MKGzH3fr8U6jxEOP5VVjg",
    },
    {
      title: "Symmetrical Triangles Trading Strategy",
      src: "https://play.dyntube.io/iframe/vhA9fUVZ6kCf3oiyyJrnjA",
    },
    {
      title: "Flags And Pennants",
      src: "https://play.dyntube.io/iframe/KoS06ZBi2U6baFucXBntw",
    },
    {
      title: "Flags And Pennants Trading Strategy",
      src: "https://play.dyntube.io/iframe/2tzkK5Z0mm15C3y2B5Q",
    },
    {
      title: "Ascending Triangles",
      src: "https://play.dyntube.io/iframe/b5fclfNDqkiE6H4Y4KpFg",
    },
    {
      title: "Ascending Triangles Trading Strategy",
      src: "https://play.dyntube.io/iframe/LwOjypqIoEGb49re498ZA",
    },
    {
      title: "Volumes And Trends",
      src: "https://play.dyntube.io/iframe/Mc4InQwDgUaY3DYgWWYsAA",
    },

    {
      title: "Advanced stock market trading - Level 1",
      src: "",
    },
    {
      title: "Market Indicators",
      src: "https://play.dyntube.io/iframe/8WgdZ2Kj7EikcLFOcMfMQg",
    },
    {
      title: "Trading Methodology",
      src: "https://play.dyntube.io/iframe/2WGUkN4EFEqSpOsOhCXY0A",
    },
    {
      title: "Round Numbers",
      src: "https://play.dyntube.io/iframe/1c7YNnny10GrXISz9CKDeA",
    },
    {
      title: "Setting Up A Trade",
      src: "https://play.dyntube.io/iframe/ZOAEFC97pUGyjILKReMIpQ",
    },
    {
      title: "Technical Analysis For Professional Traders",
      src: "https://play.dyntube.io/iframe/IzcMs8CcEkaGrmHwohjhFQ",
    },
    {
      title: "Practical Technical Analysis",
      src: "https://play.dyntube.io/iframe/ah3JXSPf8UuEWhn2cBnKBA",
    },
    {
      title: "Trading Psychology",
      src: "https://play.dyntube.io/iframe/bffBtP3hGkyml4em1uttA",
    },
    {
      title: "Risk & Position Management",
      src: "https://play.dyntube.io/iframe/nztXgIqnR02S28wzbugZA",
    },
    {
      title: "Intra-Day Trading",
      src: "https://play.dyntube.io/iframe/i1eeyL5BLkGvv8lIRSjtg",
    },
    {
      title: "Trading Arbitrage",
      src: "https://play.dyntube.io/iframe/lzSaHh8d9kmrj8JbgO3Lcw",
    },
    {
      title: "Trading Preparation & Sectors",
      src: "https://play.dyntube.io/iframe/pQgQxiIk30J6rD0pDmXxg",
    },

    {
      title: "Advanced stock market trading - Level 2",
      src: "",
    },
    {
      title: "Trading Small Caps",
      src: "https://play.dyntube.io/iframe/Lydu1NdL0mpfuvuGEGV1Q",
    },
    {
      title: "Identifying Institutional Tactics And Copying Them",
      src: "https://play.dyntube.io/iframe/CLKFnVxfi0ajbnfAFIGHQ",
    },
    {
      title: "Using Hot Keys",
      src: "https://play.dyntube.io/iframe/4h41m7hugEaShkcYK0kuDA",
    },
    {
      title: "Advanced Use Of Time & Sale",
      src: "https://play.dyntube.io/iframe/fzeeSLDdo0C4srhO2yL71g",
    },
    {
      title: "Manage “Watch Lists”",
      src: "https://play.dyntube.io/iframe/TLpwPQ0OzUKN5lrJN6Gjag",
    },
    {
      title: "The Fixed Quantities Paradox",
      src: "https://play.dyntube.io/iframe/anKRuCxkEkKL3DezdE6i9Q",
    },
    {
      title: "Identifying “Trade Traps”",
      src: "https://play.dyntube.io/iframe/VwmTan3rU6h0SOw5LmmOQ",
    },
    {
      title: "The “20 20” Method - How Do Experts Read The Chart",
      src: "https://play.dyntube.io/iframe/SJi3qNdnr0CnacOAfmySA",
    },
    {
      title: "How To Trade Using Failure Patterns",
      src: "https://play.dyntube.io/iframe/7cJ7bwoz0EurwVweXPqYQw",
    },
    {
      title: "Using NRB And WRB Candles",
      src: "https://play.dyntube.io/iframe/Da3YcLwAiUunET6bAZMzqA",
    },
    {
      title: "Trading IPOs - Day Trading And Swing Trading",
      src: "https://play.dyntube.io/iframe/P1gAwSKfNEybfUR0UOCJpQ",
    },

    {
      title: "Top Trader",
      src: "",
    },
    {
      title: "Advanced Trading And Technical Analysis",
      src: "https://play.dyntube.io/iframe/YMVFQlwx8EONTDQKK8lkw",
    },
    {
      title: "Advanced Stock Trading Strategies - The Trailing Stop",
      src: "https://play.dyntube.io/iframe/J93IFVKuMEm7UWUt6rHmQ",
    },
    {
      title: "Pivot Points In Stock Trading",
      src: "https://play.dyntube.io/iframe/gjgP1CRoYEuWBzGAR5w0NQ",
    },
    {
      title: "Trade According To Game Theory",
      src: "https://play.dyntube.io/iframe/SwfBtteSjUWhnrAbos2lVQ",
    },
    {
      title: "Practice VWAP Strategies",
      src: "https://play.dyntube.io/iframe/Ft6ZAgl9xkygqFVbwf7YA",
    },
    {
      title: "Trade Management",
      src: "https://play.dyntube.io/iframe/MHcb4LVhkSIwAseEVdow",
    },

    {
      title: "Advanced trading tools and techniques",
      src: "",
    },
    {
      title: "Introduction To MT5",
      src: "https://play.dyntube.io/iframe/dAs4yTakbE2xYGbPbXATbg",
    },
    {
      title: "Forex Markets Basics And Trading Examples",
      src: "https://play.dyntube.io/iframe/Lmkktp8rYE6iAJaxpHwItA",
    },
    {
      title: "Commodities Markets Basics And Trading Examples",
      src: "https://play.dyntube.io/iframe/0t1q4EyXUCaOcFAOJvA",
    },
    {
      title: "Trading Global Indices",
      src: "https://play.dyntube.io/iframe/uj1RR1h4ekcJbRL3WoctQ",
    },
    {
      title: "Market News Trading Technique",
      src: "https://play.dyntube.io/iframe/LOn0zmqUTUamu78fipdTQg",
    },
    {
      title: "Trend Trading",
      src: "https://play.dyntube.io/iframe/gGzEO84tUecbdkZHm7Yw",
    },
  ],
};

export default function VideoPlayer() {
  const [selectedCategory, setSelectedCategory] = useState("Beginner");
  const [currentVideo, setCurrentVideo] = useState(videos["Beginner"][1].src); // Set the first video of Beginner as default

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);

    if (videos[category] && videos[category][1].src) {
      setCurrentVideo(videos[category][1].src); // Automatically set the first video of the selected category
    }
  };

  const handleSubtitleClick = (subtitle: string) => {
    // Do nothing, as subtitles don't have a src property
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-4 max-w-5xl mx-auto">
      {/* Buttons Above Video Player */}
      <div className="w-full md:w-2/3 mb-4">
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedCategory === "Beginner"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleCategoryClick("Beginner")}
          >
            Beginner
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedCategory === "Intermediate"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleCategoryClick("Intermediate")}
          >
            Intermediate
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedCategory === "Advanced"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleCategoryClick("Advanced")}
          >
            Advanced
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full overflow-hidden rounded-lg">
          <div className="dyntube-iframe-container relative w-full overflow-hidden pb-[56.25%] rounded-lg">
            <iframe
              className="dyntube-responsive-iframe absolute top-0 left-0 w-full h-full border-none rounded-lg"
              allowFullScreen
              src={currentVideo}
            ></iframe>
          </div>
        </div>
      </div>

      {/* Right Side: Video Titles for the Selected Category */}
      <div className="w-full md:w-1/3 bg-gray-100 h-[410px] overflow-y-auto mt-10 md:mt-0 rounded-lg shadow-lg lg:ml-10">
        <ul className="pl-4 mt-2 space-y-2">
          {videos[selectedCategory]?.map((video, index) => {
            if (video.src) {
              // Check if the video has a src property

              return (
                <li
                  key={index}
                  className="cursor-pointer text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-200 transition duration-200"
                  onClick={() => setCurrentVideo(video.src)}
                >
                  {video.title}
                </li>
              );
            } else {
              // If it's a subtitle, use the handleSubtitleClick function

              return (
                <li
                  key={index}
                  className={`cursor-pointer text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-200 transition duration-200 ${!video.src && "font-bold"}`}
                  onClick={() => handleSubtitleClick(video.title)}
                >
                  {video.title}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
