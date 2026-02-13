import { useEffect, useRef, useState } from 'react'
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const nav_Items = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navebar = () => {
    const [is_Audio_playing, set_is_Audio_Playing] = useState(false)
    const [is_Indicatorr_Active, set_is_Indicatorr_Active] = useState(false)
    const audioElementRef = useRef(null);
    const navRef = useRef(null);

    const toggleAudioIndicator = () => {
        is_Audio_playing((prev) => !prev);

        set_is_Indicatorr_Active((prev) => !prev);
    }
    useEffect(() => {
        if (is_Audio_playing) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [is_Audio_playing])
    return (
        <div
            className="fixed inset-x-0 top-4 z-50 h-16 transition-all duration-700 sm:inset-x-6"
            ref={navRef}
        >
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex w-full h-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        <img src="/img/logo.png" alt="logo" className="w-10" />

                        <Button
                            id="product-button"
                            title="Production"
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                        />
                    </div>

                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {nav_Items.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-hover-btn"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudioIndicator} />
                        <audio ref={audioElementRef} className='hidden' src="/audio/loop.mp3"
                            loop />
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className={`indicator-line ${is_Indicatorr_Active ? 'active' : ''}`} style={{ animationDelay: `${0.1}s` }} />
                        ))}


                    </div>
                </nav>
            </header>
        </div>
    );
};
export default Navebar