import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { UI } from "./UI";
import { Suspense } from "react";

const BookScene = () => {
    const handleContinue = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full h-screen bg-black overflow-hidden">
            <UI onContinue={handleContinue} />
            <Suspense fallback={<div className="text-white text-center pt-20">Loading Book...</div>}>
                <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
                    <Experience />
                </Canvas>
            </Suspense>
        </section>
    );
};

export default BookScene;
