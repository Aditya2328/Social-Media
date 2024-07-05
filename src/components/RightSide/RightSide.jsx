import React, { useState } from "react";
import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard.jsx";
import ShareModal from "../ShareModal/ShareModal.jsx";
import FollowersCard from "../FollowersCard/FollowersCard.jsx";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <FollowersCard />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <TrendCard />
    </div>
  );
};

export default RightSide;
