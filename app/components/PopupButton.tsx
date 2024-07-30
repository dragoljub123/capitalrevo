"use client";
import React, { useState } from "react";
import PopupForm from "./PopupForm";

const PopupButton: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button
        className="bg-customBlue text-white px-12 py-1 rounded-3xl hover:bg-zlatna transition-colors duration-300 w-25"
        onClick={handleOpenPopup}
      >
        Get started
      </button>
      {showPopup && <PopupForm onClose={handleClosePopup} />}
    </div>
  );
};

export default PopupButton;
