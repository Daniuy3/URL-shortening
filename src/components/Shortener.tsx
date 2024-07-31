
function Shortener() {
  return (

        <form className="flex flex-col gap-3 bg-shortenerMobile md:bg-shortenerDesktop items-center w-11/12 mx-auto py-6 bg-center bg-cover bg-darkViolet rounded-lg md:w-9/12 md:mt-20 md:flex-row md:px-6">
            <input type="text" 
                className=" border w-4/5 rounded-lg p-3"
                placeholder="Shorten a link here..."
            />
            <input type="submit" className="bg-cyan hover:bg-darkCyan hover:cursor-pointer py-3 px-5 w-4/5 rounded-lg font-bold text-white transition-colors duration-300 mix-blend-color-dodged md:w-1/3" value="Shorten it!" />
        </form>

  )
}

export default Shortener