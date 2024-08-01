import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { getPosts } from "../services"

function Shortener() {
  const [url, setUrl] = useState("")
  const [validated, setValidated] = useState(true)

  function validateURL(url: string){
    const regex = new RegExp("^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$")

    return regex.test(url)
    
  }

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()

    const isValidated = validateURL(url)

    setValidated(isValidated)

    if(isValidated){
      await getPosts(url)
    }
  }

  return (

        <form className={`flex flex-col gap-3 bg-shortenerMobile md:bg-shortenerDesktop items-center w-11/12 mx-auto py-10  bg-center bg-cover bg-darkViolet rounded-lg md:w-9/12 md:mt-20 md:flex-row md:px-6 relative shadow-2xl ${!validated? "shadow-rose-500" : ""} transition-shadow duration-300`}
        onSubmit={handleSubmit}>
            <input type="text" 
                className={`w-4/5 rounded-lg p-3  md:w-2/3 ${!validated ? 'border-rose-500 active:outline-rose-500 focus:outline-rose-500' : 'outline-transparent'} outline-2`}
                placeholder="Shorten a link here..."
                onChange={(e) => setUrl(e.target.value)}
            />
            <input type="submit" className="bg-cyan hover:bg-darkCyan hover:cursor-pointer py-3 px-5 w-4/5 rounded-lg font-bold text-white transition-colors duration-300 mix-blend-color-dodged md:w-1/3" value="Shorten it!" />
            {!validated && (
              <AnimatePresence>
                  <motion.p 
                      className="absolute top-3 md:bottom-3 md:top-auto left-8 text-rose-500 font-bold italic "
                      initial={{ opacity: 0, y: -20 }} 
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}  
                      transition={{ duration: 0.3 }} 
                  >Please enter a valid URL</motion.p>
              </AnimatePresence>
                
            )}
        </form>

  )
}

export default Shortener