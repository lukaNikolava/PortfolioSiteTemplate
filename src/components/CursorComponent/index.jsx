import { useEffect, useRef } from 'react';
import './style.css';

export const Cursor = () => {
    const cursorFollow = useRef(null);

    useEffect(() => {
        const mouseMove = (e) => {
            if (cursorFollow.current) {
                cursorFollow.current.style.top = `${e.clientY}px`;
                cursorFollow.current.style.left = `${e.clientX}px`;
            }
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <div className="cursorFollow" ref={cursorFollow}></div>
    );
};

