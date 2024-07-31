
type CardProps = {
    title: string,
    content:string,
    children: React.ReactNode
}
function Card({title, content, children}: CardProps) {
  return (
    <div className="flex flex-col items-center bg-white mx-auto rounded-lg shadow-md p-5">
        <div className="rounded-full bg-darkViolet w-20 h-20 grid place-content-center -translate-y-14">{children}</div>
        <div className="-translate-y-14">
        <h3 className="font-bold text-center text-xl text-veryDarkBlue mt-10">{title}</h3>
        <p className="text-center font-medium text-grayishViolet mt-4">{content}</p>
        </div>
    </div>
  )
}

export default Card