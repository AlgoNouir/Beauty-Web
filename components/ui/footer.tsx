// base
import { ReactNode } from "react";

// icon
import { FcCellPhone, FcClock, FcOnlineSupport } from "react-icons/fc";

function Content(props: { icon: ReactNode; title: string; text: string }) {
    return (
        <div className="flex flex-row space-x-4 rtl:space-x-reverse items-center">
            <div className=" p-4 text-4xl rounded-full border shadow-xl">
                {props.icon}
            </div>
            <div className="flex flex-col space-y-1">
                <small>{props.title}</small>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default function Footer() {
    return (
        <div className=" bg-grey w-full h-80 flex mt-44 flex-col items-center">
            <div
                className="h-44 w-11/12 bg-pink/90 shadow-2xl backdrop-blur-xl rounded-xl -mt-16 p-16
             items-center flex flex-row justify-between"
            >
                <p className="text-2xl font-bold">راه های ارتباطی :</p>
                <Content
                    icon={<FcClock />}
                    title="ساعت پاسخ گویی"
                    text="یک متن تست"
                />
                <Content
                    icon={<FcCellPhone />}
                    title="شماره تماس"
                    text="یک متن تست"
                />
                <Content
                    icon={<FcOnlineSupport />}
                    title="تلفن ثابت"
                    text="یک متن تست"
                />
            </div>
        </div>
    );
}
