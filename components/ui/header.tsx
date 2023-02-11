// base
import { useState } from "react";
import Image from "next/image";

// my components
import Button from "./button";

// icons
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { FaStethoscope } from "react-icons/fa";

export default function Header() {
    // states
    const [state, stateHandler] = useState(0);

    return (
        <div
            className="bg-white w-screen fixed top-0 h-24 flex flex-row
            justify-between items-center px-10 z-10"
        >
            <div>
                <Image
                    src="logoGrey.svg"
                    alt="دکتر زهرا میرزامحمدی"
                    height={200}
                    width={200}
                />
            </div>
            <div className="fixed flex items-center justify-center w-full left-0 right-0">
                <div className="grid grid-cols-3 gap-5">
                    {[
                        {
                            key: 1,
                            name: "تماس با ما",
                            dir: "/",
                            icons: <AiFillPhone />,
                        },
                        {
                            key: 0,
                            dir: "/",
                            icons: <AiFillHome className="text-3xl" />,
                        },
                        {
                            key: 2,
                            name: "خدمات مرکز",
                            dir: "/",
                            icons: <FaStethoscope />,
                        },
                    ].map((e) => (
                        <button
                            onClick={() => {
                                console.log(state);

                                stateHandler(e.key);
                            }}
                            key={e.key}
                            className={
                                "transition-all flex flex-row items-center justify-center space-x-3 rtl:space-x-reverse " +
                                (state === e.key
                                    ? "border-b-2 border-pink px-5 pb-3 text-xl"
                                    : "hover:border-b-2 border-grey hover:pb-1")
                            }
                        >
                            <div
                                className={
                                    e.key === state ? "text-pink" : "text-grey"
                                }
                            >
                                {e.icons}
                            </div>
                            {e.name && <p>{e.name}</p>}
                        </button>
                    ))}
                </div>
            </div>
            <button
                className={`w-44 h-16 bg-gradient-to-tl from-darkPink/60 to-pink rounded-xl`}
            >
                <p className="font-bold">درخواست نوبت</p>
            </button>
        </div>
    );
}
