import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
      <img 
        src={imgURL} 
        alt={name} 
        className="w-[280px] h-[280px] shadow-2xl rounded-full cursor-pointer"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img 
          src={star}
          alt="rating star"
          width={24}
          height={24} 
        />
        <p className="font-montserrat text-xl leading-normal text-sky-800">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-blue-800 text-2xl leading">{price}</p>
    </div>
  )
}

export default PopularProductCard