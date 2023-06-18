import React, { useState } from 'react';
import musicFile from "../../assets/music.mp3";
import './Music.css';

function Music() {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef(null);



    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };


    return (

        <div className="musicContainer">
            <audio ref={audioRef} src={musicFile} />
            <div className={`switch ${isPlaying ? 'on' : 'off'}`} onClick={togglePlay}>
                <div className="handle" />
            </div>
        </div>


    )
}

export default Music