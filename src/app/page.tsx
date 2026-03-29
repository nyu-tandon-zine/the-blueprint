"use client"

import { useState } from "react";
import ImageViewer from "../components/ImageViewer";
import styles from "./page.module.css";

export default function Home() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleClose = () => {
    setIsViewerOpen(false);
  };

  const handleOpen = () => {
    setIsViewerOpen(true);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.intro}>

          <h1>Image Viewer Showcase</h1>
          
          {/* A button on the main page to trigger the pop-up */}
          <button 
            onClick={handleOpen} 
            style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
          >
            Click to view artwork
          </button>

        </section>
        {isViewerOpen && (
          <ImageViewer 
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1920px-David_-_The_Death_of_Socrates.jpg"
            title="The Death of Socrates"
            artist="Jacques-Louis David"
            description="The Death of Socrates is an oil on canvas painted by French painter Jacques-Louis David in 1787. The painting was part of the neoclassical style, popular in the 1780s, that depicted subjects from the Classical age, in this case the story of the execution of Socrates as told by Plato in his Phaedo."
            onClose={handleClose}
          />
        )}

      </main>
    </div>
  );
}

