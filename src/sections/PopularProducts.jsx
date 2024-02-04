import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants" 

const PopularProducts = () => {
  return (
    <secton 
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-blue-800">New</span> Catalogue
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-sky-800">
          We have the main technology and style trend in the market. 
          Our products are made with the best materials and the best quality. 
          We have the best prices in the market.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </secton>
  )
}

export default PopularProducts