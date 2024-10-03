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
      title: "1. Why Trade Forex",
      src: "https://play.dyntube.io/iframe/ojYsM6Gakkuj98xT026iw",
    },
    {
      title: "2. When To Trade Forex",
      src: "https://play.dyntube.io/iframe/hbsT8TpIDkODP6lOIcAng",
    },
    {
      title: "3. Trading Terminology Or Where Am I Going Long",
      src: "https://play.dyntube.io/iframe/Hq2OQORhXEmgK18lt7auGw",
    },
    {
      title: "4. How To Trade With Leverage",
      src: "https://play.dyntube.io/iframe/t0IdrS5z4kqSO6nPiC1H4Q",
    },
    {
      title: "5. What Is A PIP",
      src: "https://play.dyntube.io/iframe/5mT6I5egnkuKpWataMm7NQ",
    },
    {
      title: "6. How To Place A Trade In Forex",
      src: "https://play.dyntube.io/iframe/lVwCFDR9ikkVmGitZvPpg",
    },
    {
      title: "7. Types Of Forex Orders",
      src: "https://play.dyntube.io/iframe/x2pu7EFk00iFR9Zg06YZjQ",
    },
    {
      title: "8. Technical Analysis In Forex",
      src: "https://play.dyntube.io/iframe/gAmvQBdDn0yMQV26o3BfDw",
    },
    {
      title: "9. Fundamental Analysis In Forex",
      src: "https://play.dyntube.io/iframe/1KUaWVzZ00a7vVqAygEwg",
    },
    {
      title: "10. Types Of Forex Charts",
      src: "https://play.dyntube.io/iframe/1zAS2CXEEyU67A77X6sMQ",
    },
    {
      title: "11. Support And Resistance In Forex",
      src: "https://play.dyntube.io/iframe/oa5VrratBEO7rA0n95t99Q",
    },
    {
      title: "12. Trendlines",
      src: "https://play.dyntube.io/iframe/Vt19pFXtEOUI6dHGixRw",
    },
    {
      title: "Fibonacci",
      src: "",
    },
    {
      title: "1. Fibonacci",
      src: "https://play.dyntube.io/iframe/uOIHywZUeiGAAIXpUy3A",
    },
    {
      title: "2. Forex Fibonacci Extensions",
      src: "https://play.dyntube.io/iframe/I239xYZ9bEKDg6ziqUsESQ",
    },
    {
      title: "3. Learn Forex Fibonacci Fan And Arcs",
      src: "https://play.dyntube.io/iframe/6kbuVYnbTk2uGtRor0DXg",
    },
    {
      title:
        "4. Learn Forex Combining Fibonacci With Other Technical Analysis Tools",
      src: "https://play.dyntube.io/iframe/EPK3Xn4G0WanOrISERNQ",
    },
    {
      title: "Candlesticks",
      src: "",
    },
    {
      title: "1. Candlesticks",
      src: "https://play.dyntube.io/iframe/Cfz9HMUmGEKM8ASdD6nw",
    },
    {
      title: "2. Doji Candlestick In Forex",
      src: "https://play.dyntube.io/iframe/5zjcP1A6a0bF9PiMqYlqA",
    },
    {
      title: "3. Marubozu Candlestick In Forex",
      src: "https://play.dyntube.io/iframe/5rR2jcxkAEWQkzW9eAQ2w",
    },
    {
      title: "4. Hammer And Hanging Man Candlesticks",
      src: "https://play.dyntube.io/iframe/qkKL78oHPUqOnwRrt soGA",
    },
    {
      title: "5. Shooting Star And Inverted Hammer Candlestick",
      src: "https://play.dyntube.io/iframe/dtgimv7YikqbzxZcvNQYxg",
    },
    {
      title: "6. Bullish Piercing Pattern",
      src: "https://play.dyntube.io/iframe/arb9wDEwoUmxaCBVO9rC7w",
    },
    {
      title: "7. Dark Cloud Cover Pattern ",
      src: "https://play.dyntube.io/iframe/9WnmXRjX0iC3CO7tBMTQ",
    },
    {
      title: "8. Bullish And Bearish Engulfing Patterns",
      src: "https://play.dyntube.io/iframe/bdExFbiykSiAUpNhZLtSg",
    },
    {
      title: "9. Tweezer Tops And Bottoms",
      src: "https://play.dyntube.io/iframe/iksJU40Nv02L5IJ7AMsPUA",
    },
    {
      title: "10. Morning And Evening Star Patterns",
      src: "https://play.dyntube.io/iframe/rQWbCWX27kq3QfSfVKwtBg",
    },
    {
      title: "11. 3 White Soldiers 3 Black Crows",
      src: "https://play.dyntube.io/iframe/RDDGVbTvrky9J2lGkCFbJA",
    },
    {
      title: "12. 3 Insideup 3 Inside Down Pattern",
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
      title: "1. Forex Double Top And Double Bottom Formation Patterns",
      src: "https://play.dyntube.io/iframe/p4a7XDTUCEuqwFFyWY0EQ",
    },
    {
      title: "2. Learn Forex Head And Shoulders Pattern",
      src: "https://play.dyntube.io/iframe/hn9IMhW2t067bbpDkY35jg",
    },
    {
      title: "3. Forex Inverse Head And Shoulders Pattern",
      src: "https://play.dyntube.io/iframe/LUIRcn090kSRac7qsiUCRw",
    },
    {
      title: "4. Forex Bull Flag Formation Patterns",
      src: "https://play.dyntube.io/iframe/q8VyqLNbVUGwJhgnTYBYJQ",
    },
    {
      title: "5. Forex Bear Flag Patterns",
      src: "https://play.dyntube.io/iframe/8eTPmCLoFkqgvbgJJHF6xg",
    },
    {
      title: "6. Forex Bullish And Bearish Pennant Formation",
      src: "https://play.dyntube.io/iframe/IJexch9GjEOLMTnXwa7n6Q",
    },
    {
      title: "7. Forex Falling Wedge Pattern",
      src: "https://play.dyntube.io/iframe/OcpFHicB0i9jXnkfXaw",
    },
    {
      title: "8. Forex Ascending And Descending Triangle Formations",
      src: "https://play.dyntube.io/iframe/7WUwGLtHkqqfmC048iLRg",
    },
    {
      title: "9. Forex Symmetrical Triangle Pattern",
      src: "https://play.dyntube.io/iframe/IrbpkRMwmkuz8mGn5TOg7A",
    },
    {
      title: "10. Forex Box Range",
      src: "https://play.dyntube.io/iframe/WsL1rYJFkKi3y2IKZxZ4g",
    },
    {
      title: "11. Forex Cup And Handle Formation Pattern",
      src: "https://play.dyntube.io/iframe/XGz81dYLOEWaLiS0KihYwg",
    },
    {
      title: "12. Forex Inverse Cup And Handle Pattern",
      src: "https://play.dyntube.io/iframe/hK9BewgM4USBKw4KMN0cQ",
    },
    {
      title: "13. Forex Rising Wedge Pattern",
      src: "https://play.dyntube.io/iframe/ELZoU074kmFn5Lo2KpWWA",
    },
  ],
  Intermediate: [
    {
      title: "Forex Indicators",
      src: "",
    },
    {
      title: "1. Forex Indicators",
      src: "https://play.dyntube.io/iframe/60yCRtBIlkexWvyQUURd2A",
    },
    {
      title: "2. Forex RSI Stochastic Oscillator",
      src: "https://play.dyntube.io/iframe/gECQs82CtUS5xtIvk6eKlg",
    },
    {
      title: "3. Forex ATR Average True Range",
      src: "https://play.dyntube.io/iframe/GxJahUg3 AUeObJc00bYkjQ",
    },
    {
      title: "4. Forex Moving Average",
      src: "https://play.dyntube.io/iframe/iYrFyG0Yu0GkD9GIQyMJ2g",
    },
    {
      title: "5. Forex Moving Average Convergence Divergence MACD",
      src: "https://play.dyntube.io/iframe/aO5ZK66z02ZK0Lm3XeJ3Q",
    },
    {
      title: "6. Forex Average Directional Index ADX",
      src: "https://play.dyntube.io/iframe/M1wrlIQXPEKkxjvdHjBDYQ",
    },
    {
      title: "7. Forex Bollinger Bands",
      src: "https://play.dyntube.io/iframe/qJIznSGt3U22mNXzXKlzQ",
    },
    {
      title: "8. Forex Parabolic SAR",
      src: "https://play.dyntube.io/iframe/1Wu9pZmqREHSGmU97qimg",
    },
    {
      title: "9. Forex Ichimoku Kinko Hyo",
      src: "https://play.dyntube.io/iframe/BdAWKdeDmkquIJWVXqRhw",
    },
    {
      title: "10. Forex Pivot Points",
      src: "https://play.dyntube.io/iframe/myQ9OPKnSU6cDq5LIuYb4Q",
    },

    {
      title: "Timing in Forex",
      src: "",
    },
    {
      title: "1. Timing Your Entries When Trading Forex",
      src: "https://play.dyntube.io/iframe/6ODKVATfjUe3IvzWzgciOQ",
    },
    {
      title: "2. Timing Your Exits When Trading Forex",
      src: "https://play.dyntube.io/iframe/Ht0QhtoQUqZjJV53gr2oA",
    },
    {
      title: "MT4",
      src: "",
    },
    {
      title: "1. Getting Started With MT4",
      src: "https://play.dyntube.io/iframe/15JXEnFbCEOpfWqeiLVqIA",
    },
    {
      title: "2. Market Watch Basics",
      src: "https://play.dyntube.io/iframe/IudxkgnaNknzYgsVTkibQ",
    },
    {
      title: "3. Chart Window Basics",
      src: "https://play.dyntube.io/iframe/lpQ5xJ88uUSKtS6U8XjxQ",
    },
    {
      title: "4. Terminal Window Basics - Part 1",
      src: "https://play.dyntube.io/iframe/RgBKzeIUuyWpehnNF5lg",
    },
    {
      title: "5. Terminal Window Basics - Part 2",
      src: "https://play.dyntube.io/iframe/g9vGZ3UDE2SmOx2A3D3tg",
    },
    {
      title: "6. Navigator Window Basics",
      src: "https://play.dyntube.io/iframe/QQOeGc7pDEGPQHrYisGmpg",
    },
    {
      title: "7. Placing Orders",
      src: "https://play.dyntube.io/iframe/j nVsdm7zA0qsBYtUJG3Blw",
    },
    {
      title: "8. Account History - Closed Trades",
      src: "https://play.dyntube.io/iframe/8nEdKMaCIEKFVz50puc6A",
    },
    {
      title: "9. Market Watch Detailed",
      src: "https://play.dyntube.io/iframe/nLb83eTm40WThY8NpGHQA",
    },
    {
      title: "10. All About Charts",
      src: "https://play.dyntube.io/iframe/ivyTKaSu0uD24azeLGpug",
    },
    {
      title: "11. Chart Window Properties",
      src: "https://play.dyntube.io/iframe/egbFpx04EiMlJ2oTTTDA",
    },
    {
      title: "12. Indicators And Scripts",
      src: "https://play.dyntube.io/iframe/ablHGkKvk2lObFI5U61hw",
    },

    {
      title: "Cryptocurrencies",
      src: "",
    },
    {
      title: "1. Background - Early Digital Currencies (1980-2009)",
      src: "https://play.dyntube.io/iframe/XFpzY9rKW0WfIlWZ7r7FJg",
    },
    {
      title: "2. Evolution Of Blockchain And Cryptocurrencies",
      src: "https://play.dyntube.io/ iframe/8U79aw0VNEOdMmEblF3tvw",
    },
    {
      title: "3. The Future Of Digital Currencies And Blockchain",
      src: "https://play.dyntube.io/iframe/FGMT0aIIU62kyJRvOw4A",
    },
    {
      title: "4. Background - Concept Of Owning A Digital Currency",
      src: "https://play.dyntube.io/iframe/FNj2GxBNkO32NxMnG1g",
    },
    {
      title: "5. What Are Wallets And How Do They Work",
      src: "https://play.dyntube.io/iframe/6amlFNZ6kCSIGuWrsO5Q",
    },
    {
      title: "6. Backups & Offline Storage - Why Is It Important, How To Do It",
      src: "https://play.dyntube.io/iframe/HfUHZdJJRkyJKtTEkacsOQ",
    },
    {
      title: "7. Mobile Security - How To Safely Protect Your Mobile Wallet",
      src: "https://play.dyntube.io/iframe/Rz2zpA0qhEGeyLVWHei6sQ",
    },
    {
      title: "8. Types Of Cryptocurrency",
      src: "https://play.dyntube.io/iframe/CyNKIwLfwkylWqeWZPSOiA",
    },
    {
      title: "9. What Is Bitcoin",
      src: "https://play.dyntube.io/iframe/joutbjT33UG2OwJroJsRzw",
    },
    {
      title: "10. The History Of Bitcoin",
      src: "https://play.dyntube.io/iframe/wmVjV8LGeUu3xNNFO76WaQ",
    },
    {
      title: "11. Ways To Use Bitcoin Besides Investing",
      src: "https://play.dyntube.io/iframe/dQflnyBKNEeSjd0Cv7NoQ",
    },
    {
      title: "12. How To Invest In Bitcoin",
      src: "https://play.dyntube.io/iframe/8NCczzlUT0qLBgwiC30K0Q",
    },
    {
      title: "13. What Are The Risks Involved In Bitcoin Trading",
      src: "https://play.dyntube.io/iframe/AeqhjvAwUiOUPd75LbdEg",
    },
    {
      title: "14. How To Buy Bitcoin",
      src: "https://play.dyntube.io/iframe/fZlS73BrpEOAtWvyQWdhcg",
    },
    {
      title: "15. Why Accept Bitcoin",
      src: "https://play.dyntube.io/iframe/WNqeSs3DUsDpenBwPXNw",
    },
    {
      title: "16. What Are The Risks Involved In Using Bitcoin",
      src: "https://play.dyntube.io/iframe/xcuT5FjKFE2hK1DRAa3J5A",
    },
    {
      title: "17. How To Accept Bitcoin For Services Or Goods",
      src: "https://play.dyntube.io/iframe/4WB1o2k1o0eA70g52K90pQ",
    },
    {
      title: "18. Outlook On Taxation, Accounting & Legalities",
      src: "https://play.dyntube.io/iframe/Ik7qPnyxka6Vfa8dGMDAw",
    },
  ],

  Advanced: [
    {
      title: "Stock market introduction",
      src: "",
    },
    {
      title: "1. Introduction To The Stock Market",
      src: "https://play.dyntube.io/iframe/sUaUgYsDGUipJYkltXwZew",
    },
    {
      title: "2. Can Stock Charts Predict The Future & Trading Systems",
      src: "https://play.dyntube.io/iframe/bjYaptlrUCi5f2RUEAGyA",
    },
    {
      title: "3. Support And Resistance Levels",
      src: "https://play.dyntube.io/iframe/uThUCoRx0SpYaHs21yefw",
    },
    {
      title: "4. How To Identify A Market Direction - Part 1",
      src: "https://play.dyntube.io/iframe/Kf9HrofVskqRaRPPIXfV3g",
    },
    {
      title: "5. How To Identify A Market Direction - Part 2",
      src: "https://play.dyntube.io/iframe/ZIzfm6TVPUOTg4FR97wRKw",
    },
    {
      title: "6. Chart Patterns Introduction",
      src: "https://play.dyntube.io/iframe/Jx6w40uqG0idndMEX7eBzQ",
    },
    {
      title: "7. Symmetrical Triangles",
      src: "https://play.dyntube.io/iframe/MKGzH3fr8U6jxEOP5VVjg",
    },
    {
      title: "8. Symmetrical Triangles Trading Strategy",
      src: "https://play.dyntube.io/iframe/vhA9fUVZ6kCf3oiyyJrnjA",
    },
    {
      title: "9. Flags And Pennants",
      src: "https://play.dyntube.io/iframe/KoS06ZBi2U6baFucXBntw",
    },
    {
      title: "10. Flags And Pennants Trading Strategy",
      src: "https://play.dyntube.io/iframe/2tzkK5Z0mm15C3y2B5Q",
    },
    {
      title: "11. Ascending Triangles",
      src: "https://play.dyntube.io/iframe/b5fclfNDqkiE6H4Y4KpFg",
    },
    {
      title: "12. Ascending Triangles Trading Strategy",
      src: "https://play.dyntube.io/iframe/LwOjypqIoEGb49re498ZA",
    },
    {
      title: "13. Volumes And Trends",
      src: "https://play.dyntube.io/iframe/Mc4InQwDgUaY3DYgWWYsAA",
    },

    {
      title: "Advanced stock market trading - Level 1",
      src: "",
    },
    {
      title: "1. Market Indicators",
      src: "https://play.dyntube.io/iframe/8WgdZ2Kj7EikcLFOcMfMQg",
    },
    {
      title: "2. Trading Methodology",
      src: "https://play.dyntube.io/iframe/2WGUkN4EFEqSpOsOhCXY0A",
    },
    {
      title: "3. Round Numbers",
      src: "https://play.dyntube.io/iframe/1c7YNnny10GrXISz9CKDeA",
    },
    {
      title: "4. Setting Up A Trade",
      src: "https://play.dyntube.io/iframe/ZOAEFC97pUGyjILKReMIpQ",
    },
    {
      title: "5. Technical Analysis For Professional Traders",
      src: "https://play.dyntube.io/iframe/IzcMs8CcEkaGrmHwohjhFQ",
    },
    {
      title: "6. Practical Technical Analysis",
      src: "https://play.dyntube.io/iframe/ah3JXSPf8UuEWhn2cBnKBA",
    },
    {
      title: "7. Trading Psychology",
      src: "https://play.dyntube.io/iframe/bffBtP3hGkyml4em1uttA",
    },
    {
      title: "8. Risk & Position Management",
      src: "https://play.dyntube.io/iframe/nztXgIqnR02S28wzbugZA",
    },
    {
      title: "9. Intra-Day Trading",
      src: "https://play.dyntube.io/iframe/i1eeyL5BLkGvv8lIRSjtg",
    },
    {
      title: "10. Trading Arbitrage",
      src: "https://play.dyntube.io/iframe/lzSaHh8d9kmrj8JbgO3Lcw",
    },
    {
      title: "11. Trading Preparation & Sectors",
      src: "https://play.dyntube.io/iframe/pQgQxiIk30J6rD0pDmXxg",
    },

    {
      title: "Advanced stock market trading - Level 2",
      src: "",
    },
    {
      title: "1. Trading Small Caps",
      src: "https://play.dyntube.io/iframe/Lydu1NdL0mpfuvuGEGV1Q",
    },
    {
      title: "2. Identifying Institutional Tactics And Copying Them",
      src: "https://play.dyntube.io/iframe/CLKFnVxfi0ajbnfAFIGHQ",
    },
    {
      title: "3. Using Hot Keys",
      src: "https://play.dyntube.io/iframe/4h41m7hugEaShkcYK0kuDA",
    },
    {
      title: "4. Advanced Use Of Time & Sale",
      src: "https://play.dyntube.io/iframe/fzeeSLDdo0C4srhO2yL71g",
    },
    {
      title: "5. Manage “Watch Lists”",
      src: "https://play.dyntube.io/iframe/TLpwPQ0OzUKN5lrJN6Gjag",
    },
    {
      title: "6. The Fixed Quantities Paradox",
      src: "https://play.dyntube.io/iframe/anKRuCxkEkKL3DezdE6i9Q",
    },
    {
      title: "7. Identifying “Trade Traps”",
      src: "https://play.dyntube.io/iframe/VwmTan3rU6h0SOw5LmmOQ",
    },
    {
      title: "8. The “20 20” Method - How Do Experts Read The Chart",
      src: "https://play.dyntube.io/iframe/SJi3qNdnr0CnacOAfmySA",
    },
    {
      title: "9. How To Trade Using Failure Patterns",
      src: "https://play.dyntube.io/iframe/7cJ7bwoz0EurwVweXPqYQw",
    },
    {
      title: "10. Using NRB And WRB Candles",
      src: "https://play.dyntube.io/iframe/Da3YcLwAiUunET6bAZMzqA",
    },
    {
      title: "11. Trading IPOs - Day Trading And Swing Trading",
      src: "https://play.dyntube.io/iframe/P1gAwSKfNEybfUR0UOCJpQ",
    },

    {
      title: "Top Trader",
      src: "",
    },
    {
      title: "1. Advanced Trading And Technical Analysis",
      src: "https://play.dyntube.io/iframe/YMVFQlwx8EONTDQKK8lkw",
    },
    {
      title: "2. Advanced Stock Trading Strategies - The Trailing Stop",
      src: "https://play.dyntube.io/iframe/J93IFVKuMEm7UWUt6rHmQ",
    },
    {
      title: "3. Pivot Points In Stock Trading",
      src: "https://play.dyntube.io/iframe/gjgP1CRoYEuWBzGAR5w0NQ",
    },
    {
      title: "4. Trade According To Game Theory",
      src: "https://play.dyntube.io/iframe/SwfBtteSjUWhnrAbos2lVQ",
    },
    {
      title: "5. Practice VWAP Strategies",
      src: "https://play.dyntube.io/iframe/Ft6ZAgl9xkygqFVbwf7YA",
    },
    {
      title: "6. Trade Management",
      src: "https://play.dyntube.io/iframe/MHcb4LVhkSIwAseEVdow",
    },

    {
      title: "Advanced trading tools and techniques",
      src: "",
    },
    {
      title: "1. Introduction To MT5",
      src: "https://play.dyntube.io/iframe/dAs4yTakbE2xYGbPbXATbg",
    },
    {
      title: "2. Forex Markets Basics And Trading Examples",
      src: "https://play.dyntube.io/iframe/Lmkktp8rYE6iAJaxpHwItA",
    },
    {
      title: "3. Commodities Markets Basics And Trading Examples",
      src: "https://play.dyntube.io/iframe/0t1q4EyXUCaOcFAOJvA",
    },
    {
      title: "4. Trading Global Indices",
      src: "https://play.dyntube.io/iframe/uj1RR1h4ekcJbRL3WoctQ",
    },
    {
      title: "5. Market News Trading Technique",
      src: "https://play.dyntube.io/iframe/LOn0zmqUTUamu78fipdTQg",
    },
    {
      title: "6. Trend Trading",
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
      <div className="w-full md:w-1/3 bg-gray-100 h-[410px] overflow-y-auto mt-10 md:mt-0 rounded-lg shadow-lg">
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
