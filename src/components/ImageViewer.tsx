"use client"

interface ImageViewerProps {
  imageUrl: string;
  title: string;
  artist: string;
  description: string;
  onClose: () => void;
}

export default function ImageViewer
  ({ imageUrl, title, artist, description, onClose }: ImageViewerProps) {
  return (
    // Dark Overlay
    <div style={{
      position: "fixed",   
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      display: "flex",      
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,     
    }}>

      {/* Pop-Up Window */}
      <div style={{
        backgroundColor: "#000",
        color: "#fff",      
        padding: "30px",
        maxWidth: "600px",  
        width: "90%",
        position: "relative", 
        textAlign: "center"
      }}>

        {/* Close Button */}
        <button 
          onClick={onClose} 
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            background: "transparent",
            color: "#fff",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          X
        </button>

        {/* Artwork */}
        <img 
          src={imageUrl} 
          alt={title} 
          style={{ 
            width: "100%", 
            maxHeight: "50vh", 
            objectFit: "contain", 
            marginBottom: "20px" 
          }} 
        />
        
        {/* Title, Artist, & Description */}
        <h2 style={{ margin: "0 0 5px 0" }}>{title}</h2>
        <p style={{ margin: "0 0 20px 0", fontSize: "14px", color: "#ccc" }}>
          By {artist}
        </p>
        <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.5", textAlign: "left" }}>
          {description}
        </p>

      </div>
    </div>
  );
}