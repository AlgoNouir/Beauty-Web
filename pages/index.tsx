// base
import { useState } from "react";

// icons
import { AiFillMedicineBox } from "react-icons/ai";

function PictureRight(props: { title: string; text: string }) {
    return (
        <div className="w-full flex flex-row justify-between space-x-10 rtl:space-x-reverse">
            <div className="h-80 w-1/2 bg-pink rounded-xl">
                <div
                    className="h-80 w-full bg-grey/80 rounded-xl relative 
              bottom-5 rtl:right-5 ltr:left-5"
                ></div>
            </div>
            <div className="flex flex-col items-center w-1/2 space-y-5">
                <p className="text-2xl font-bold text-black/80">
                    {props.title}
                </p>
                <p className="text-grey">{props.text}</p>
            </div>
        </div>
    );
}
function PictureLeft(props: { title: string; text: string }) {
    return (
        <div className="w-full flex flex-row justify-between space-x-10 rtl:space-x-reverse">
            <div className="flex flex-col items-center w-1/2 space-y-5">
                <p className="text-2xl font-bold text-black/80">
                    {props.title}
                </p>
                <p className="text-grey">{props.text}</p>
            </div>
            <div className="h-80 w-1/2 bg-pink rounded-xl">
                <div
                    className="h-80 w-full bg-grey/80 rounded-xl relative 
              bottom-5 rtl:right-5 ltr:left-5"
                ></div>
            </div>
        </div>
    );
}

export default function Home() {
    const [ButtonADS, setButtonADS] = useState(0);
    return (
        <div className="w-screen flex flex-col items-center justify-center">
            <div className=" flex w-full flex-row">
                <div
                    className="w-[800px] bg-white/60 backdrop-blur-lg absolute bottom-24
                 ltr:left-24 rtl:right-24 h-32 shadow rounded-xl"
                ></div>
                <div className="flex h-[700px] w-full flex-row">
                    <div className="w-1/2 flex flex-col p-32 space-y-7">
                        <p className="text-4xl font-bold text-black/80">
                            یک عنوان خیلی بزرگ
                        </p>
                        <p className="text-grey">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                            آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
                        </p>
                    </div>
                    <div className="bg-grey w-1/2"></div>
                </div>
            </div>
            <div className=" container mt-64 space-y-24 flex flex-col items-center">
                <div className="grid grid-cols-4 px-5 w-full gap-5 rounded-xl h-80 bg-grey">
                    {[
                        {
                            key: 0,
                            title: "یک متن تست عنوان",
                            text: "یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش ",
                            icon: <AiFillMedicineBox />,
                        },
                        {
                            key: 1,
                            title: "یک متن تست عنوان",
                            text: "یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش ",
                            icon: <AiFillMedicineBox />,
                        },
                        {
                            key: 2,
                            title: "یک متن تست عنوان",
                            text: "یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش ",
                            icon: <AiFillMedicineBox />,
                        },
                        {
                            key: 3,
                            title: "یک متن تست عنوان",
                            text: "یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش یک متن تست فقط برای نمایش ",
                            icon: <AiFillMedicineBox />,
                        },
                    ].map((e) => (
                        <button
                            key={e.key}
                            onMouseEnter={() => setButtonADS(e.key)}
                            className={
                                "h-full flex space-y-3 flex-col items-center justify-center p-5 transition-all w-full " +
                                (ButtonADS === e.key
                                    ? "bg-pink rounded-xl -mt-5 shadow-xl text-black/70"
                                    : "text-white")
                            }
                        >
                            <div className="text-5xl border-2 rounded-full p-3">
                                {e.icon}
                            </div>
                            <p className="text-lg font-bold">{e.title}</p>
                            <p className="text-xs">{e.text}</p>
                        </button>
                    ))}
                </div>
                <PictureRight
                    title="یک عنوان تست برای نمایش"
                    text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                />
                <PictureLeft
                    title="یک عنوان تست برای نمایش"
                    text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                />
                <PictureRight
                    title="یک عنوان تست برای نمایش"
                    text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                />
            </div>
        </div>
    );
}
