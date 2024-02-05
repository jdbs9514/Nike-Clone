
const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-black rounded-full text-white border-black transition-transform duration-500 ease-in-out transform hover:scale-110">
      {label}
      <img 
        src={iconUrl} 
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5" 
      />
    </button>
  )
}

export default Button