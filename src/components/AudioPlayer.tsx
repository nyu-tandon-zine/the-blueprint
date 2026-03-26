"use client"

import {useState, useRef} from "react";

export default function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () =>
    {
        if (!audioRef.current) return

        if(isPlaying)
        {
            audioRef.current.pause()
        }

        if(!isPlaying)
        {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    }


}