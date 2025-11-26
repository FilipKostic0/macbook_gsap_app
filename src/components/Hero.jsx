import { useRef, useEffect } from "react";

const Hero = () => {

    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Title" width="800" height="200" />
            </div>

            <video 
                ref={videoRef} 
                src="/videos/hero.mp4" 
                poster="/videos/hero-poster.jpg"
                width="1920" 
                height="1080"
                autoPlay 
                muted 
                playsInline 
            />
            <button>Buy</button>
            <p>From $1599 or $133/mo for 12 months</p>
        </section>
    );
};

export default Hero;