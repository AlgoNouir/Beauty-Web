import { ReactNode } from "react";

export default function Button(props: {
    width: number;
    height: number;
    children: ReactNode;
}) {
    return (
        <button
            className={`w-${props.width} h-${props.height} bg-gradient-to-tl from-darkPink to-pink rounded-xl`}
        >
            {props.children}
        </button>
    );
}
