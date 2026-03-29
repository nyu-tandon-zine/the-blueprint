"use client"

import {useState, useRef} from "react";

export default function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const onTimeUpdate = () => {
        if (!audioRef.current) return;
        const { currentTime, duration } = audioRef.current;
        if (duration > 0) {
            setProgress((currentTime / duration) * 100);
        }
    };

    const onEnded = () => {
        setIsPlaying(false);
        setProgress(100);
    };

    return (
        <div style={{ width: "100%", maxWidth: 720, marginTop: 24 }}>
            <audio
                ref={audioRef}
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                onTimeUpdate={onTimeUpdate}
                onEnded={onEnded}
            />
            <button
                onClick={togglePlay}
                style={{
                    padding: "10px 18px",
                    borderRadius: 8,
                    border: "1px solid #333",
                    background: isPlaying ? "#222" : "#fff",
                    color: isPlaying ? "#fff" : "#000",
                    cursor: "pointer",
                }}
            >
                {isPlaying ? "Pause" : "Play"}
            </button>
            <div style={{ marginTop: 12, height: 10, width: "100%", background: "#eee", borderRadius: 999 }}>
                <div
                    style={{
                        width: `${progress}%`,
                        height: "100%",
                        background: "#0070f3",
                        borderRadius: 999,
                        transition: "width 0.1s linear",
                    }}
                />
            </div>
            <p style={{ marginTop: 8, fontSize: 13 }}>Progress: {Math.round(progress)}%</p>
        </div>
    );
}
