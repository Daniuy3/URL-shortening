import Card from "./Card"

function Statistics() {
return (
    <div className=" my-20 ">
            <div>
                    <h2 className="text-center text-3xl font-bold text-veryDarkBlue lg:text-5xl">
                            Advanced Statistics
                    </h2>
                    <p className="text-center w-11/12 mx-auto text-lg font-medium text-grayishViolet mt-10 lg:text-xl lg:w-1/2">
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard.
                    </p>
            </div>
            <div className="mt-20 flex flex-col gap-20 relative lg:flex-row  mx-auto lg:mt-36 lg:w-9/12">
                    <Card 
                            title="Brand Recognition"
                            content="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
                    ><img src="images/icon-brand-recognition.svg" alt="image" /></Card>
                   <div className="lg:translate-y-10">
                   <Card title="Detailed Records"
                            content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                    >
                            <img src="images/icon-detailed-records.svg" alt="image" />
                    </Card>
                   </div>
                    <div className="lg:translate-y-20">
                    <Card title="Fully Customizable"
                            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                    >
                            <img src="images/icon-fully-customizable.svg" alt="image" />
                    </Card>
                    </div>
                    <div className="absolute left-1/2 top-0 h-full w-2 bg-cyan transform -translate-x-1/2 -z-10 lg:hidden"></div>
                    <div className="absolute left-1/2 top-1/2 h-2 w-full bg-cyan transform -translate-x-1/2 -translate-y-1/2 -z-10 hidden lg:block"></div>
            </div>
            
    </div>
)
}

export default Statistics