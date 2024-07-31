
function Footer() {
  return (
    <>
        <section className="flex flex-col items-center mt-20 bg-shortenerDesktop py-10 bg-darkViolet bg-center bg-cover lg:mt-28">
            <h2 className="text-3xl text-white font-bold">Boost your links today</h2>
            <button
                className="py-3 px-7 w-7/12 bg-cyan hover:bg-darkCyan hover:cursor-pointer text-white font-bold rounded-2xl mt-5 transition-colors duration-300 md:w-3/12"
            >Get Started</button>
        </section>

        <footer className=" bg-veryDarkViolet py-10 text-center">
            <h2 className="text-3xl text-white font-extrabold mb-10 ">Shortly</h2>
            <div className="md:flex justify-between md:gap-10 md:w-11/12 lg:w-1/2 mx-auto">
                <ul className="mb-10">
                    <li className="text-white font-bold text-lg">Features</li>
                    <li className="text-grayishViolet">Link Shortening</li>
                    <li className="text-grayishViolet">Branded Links</li>
                    <li className="text-grayishViolet">Analytics</li>
                </ul>
                <ul className="mb-10">
                    <li className="text-white font-bold text-lg">Resources</li>
                    <li className="text-grayishViolet">Blog</li>
                    <li className="text-grayishViolet">Developers</li>
                    <li className="text-grayishViolet">Support</li>
                </ul>
                <ul className="mb-10">
                    <li className="text-white font-bold text-lg">Company</li>
                    <li className="text-grayishViolet">About</li>
                    <li className="text-grayishViolet">Our Team</li>
                    <li className="text-grayishViolet">Careers</li>
                    <li className="text-grayishViolet">Contact</li>
                </ul>

                <nav className="flex gap-5 items-center justify-center mx-auto w-11/12 pb-10 md:w-1/5 lg:w-1/12">
                    <img src="images/icon-facebook.svg" alt="F" className="hover:cursor-pointer" />
                    <img src="images/icon-twitter.svg" alt="T" className="hover:cursor-pointer" />
                    <img src="images/icon-pinterest.svg" alt="P" className="hover:cursor-pointer" />
                    <img src="images/icon-instagram.svg" alt="I" className="hover:cursor-pointer" />
                </nav>
            </div>
        </footer>

       
    </>
  )
}

export default Footer