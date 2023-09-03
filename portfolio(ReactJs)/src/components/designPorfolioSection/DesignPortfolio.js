import React, { useState } from "react";
import "./DesignPortfolio.css";
import ImageModal from "../ImageModal/ImageModal";

const DesignPortfolio = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalVisible(false);
  };

  const portfolioItems = [
    {
      id: 1,
      imageUrl: "/pubImages/HMAC1.jpg",
      description: "HMAC UI for Sem 7 Major Project",
      tags: ["figma"],
    },
    {
      id: 2,
      imageUrl: "/pubImages/HMAC2.jpg",
      description: "HMAC UI for Sem 7 Major Project",
      tags: ["figma"],
    },
    {
      id: 3,
      imageUrl: "/pubImages/FLMS1.jpg",
      description: "FLMS UI for 3rd year Project",
      tags: ["figma"],
    },
    {
      id: 4,
      imageUrl: "/pubImages/FLMS2.jpg",
      description: "FLMS UI for 3rd year Project",
      tags: ["figma"],
    },
    {
      id: 5,
      imageUrl: "/pubImages/FLMS3.jpg",
      description: "FLMS UI for 3rd year Project",
      tags: ["figma"],
    },
    {
      id: 6,
      imageUrl: "/pubImages/assignment.png",
      description: "Mock Poster for ACM member selection",
      tags: ["adobeps"],
    },
    {
      id: 7,
      imageUrl: "/pubImages/cosmos.png",
      description: "Global Warming Message",
      tags: ["adobeps"],
    },
    {
      id: 8,
      imageUrl: "/pubImages/posterCompPoster.jpg",
      description: "Poster for ACM competion",
      tags: ["adobeps"],
    },
    {
      id: 9,
      imageUrl: "/pubImages/siddhanth_posterForGame.png",
      description: "Poster Submitted for Design competion ACM DBIT ",
      tags: ["adobeps"],
    },
    {
      id: 10,
      imageUrl: "/pubImages/UEworkshop.png",
      description: "UE4 Workshop Poster for ACM DBIT",
      tags: ["adobeps"],
    },
  ];

  const filteredItems = selectedTag
    ? portfolioItems.filter((item) => item.tags.includes(selectedTag))
    : portfolioItems;

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <section id="design-Porfolio"className="design-portfolio">
      <h2>Design Portfolio</h2>
      <div className="filter-buttons">
        <button
          className={selectedTag === "" ? "active" : ""}
          onClick={() => handleTagSelect("")}
        >
          All
        </button>
        <button
          className={selectedTag === "figma" ? "active" : ""}
          onClick={() => handleTagSelect("figma")}
        >
          Figma
        </button>
        <button
          className={selectedTag === "adobeps" ? "active" : ""}
          onClick={() => handleTagSelect("adobeps")}
        >
          Adobe PS
        </button>
      </div>
      <div className="portfolio-flex">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="portfolio-item"
            onClick={() => openModal(item.imageUrl)}
          >
            <img src={item.imageUrl} alt={`Design ${item.id}`} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {modalVisible && <ImageModal imageUrl={selectedImage} onClose={closeModal} />}
    </section>
  );
};

export default DesignPortfolio;
