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
                <p className="text-2xl font-bold">{props.title}</p>
                <p>{props.text}</p>
            </div>
        </div>
    );
}
function PictureLeft(props: { title: string; text: string }) {
    return (
        <div className="w-full flex flex-row justify-between space-x-10 rtl:space-x-reverse">
            <div className="flex flex-col items-center w-1/2 space-y-5">
                <p className="text-2xl font-bold">{props.title}</p>
                <p>{props.text}</p>
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
    return (
        <div className="w-screen flex flex-col items-center">
            <div className="relative flex w-full flex-row">
                <div
                    className="w-[800px] bg-white/60 backdrop-blur-lg absolute bottom-24
                 ltr:left-24 rtl:right-24 h-32 shadow rounded-xl"
                ></div>
                <div className="flex h-[700px] w-full flex-row">
                    <div className="w-1/2"></div>
                    <div className="bg-grey w-1/2"></div>
                </div>
            </div>
            <div className="h-screen container mt-64 space-y-24">
                <div className="flex flex-row h-80 rounded-xl w-full bg-grey"></div>
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
