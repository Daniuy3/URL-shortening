
function Nav() {
return (
    <div className="flex justify-between mt-10 px-3 items-center md:justify-start md:gap-10">
        <img src="/logo.svg" alt="Shortly" className="hover:cursor-pointer" />
        <img src="/menu.svg" alt="Menu" className="w-7 h-7 md:hidden hover:cursor-pointer" />
        <div className="md:flex hidden justify-between w-full">
            
                <ul className="flex gap-10 items-center">
                    <li className="text-grayishViolet hover:cursor-pointer hover:text-veryDarkBlue font-bold">Features</li>
                    <li className="text-grayishViolet hover:cursor-pointer hover:text-veryDarkBlue font-bold">Pricing</li>
                    <li className="text-grayishViolet hover:cursor-pointer hover:text-veryDarkBlue font-bold">Resources</li>
                </ul>
          
         
                <ul className="flex gap-10 items-center">
                    <li className="text-grayishViolet hover:cursor-pointer hover:text-veryDarkBlue font-bold">Login</li>
                    <li className="bg-cyan hover:bg-darkCyan hover:cursor-pointer py-3 px-7 w-4/5 rounded-2xl     font-bold text-white transition-colors duration-300">Sign Up</li>
                </ul>
      
        </div>
    </div>
  )
}

export default Nav