import nikebg from '../assets/images/nikebg.png'
import nikesd from '../assets/images/nikesd.png'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SuperQuality = () => {
  return (
    <section
      id="quality"
      className="w-full flex xl:flex-row flex-col min-h-screen gap-40 max-container"
    >
      <div className="sm:flex flex-col">
        <p className="text-xl font-montserrat text-blue-800">STORY</p>
        <h1 className="mt-2 font-palanquin text-4xl max-sm:text[72px] max-sm:leading-[82px] font-bold">
          <span className="text-blue-800 inline-block mt-3">Nike</span> Air Max Origins
        </h1>
        <p className="font-montserrat text-sky-800 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Nike's revolutionary Air-Sole unit made its way into Nike footwear in 1978.
          In 1987, the Nike Air Max 1 debuted with visible air in its heel, allowing
          fans more than just the feel of Air-Sole comfort—suddenly they could see it.
        </p>
        <p className="text-xl font-montserrat text-blue-800">
          Benefits
        </p>
        <h2 className="mt-10 font-montserrat font-semibold text-2xl">Layered textile/Synthetic upper</h2>
        <p className="font-palanquin text-sky-500">for lightweight durability and confort</p>
        <h2 className="mt-10 font-montserrat font-semibold text-2xl">Injected phylon midsole doubles</h2>
        <p className="font-palanquin text-sky-500">Outsole to reduce the overall weight of the shoe</p>
        <h2 className="mt-10 font-montserrat font-semibold text-2xl">Max air heel unit</h2>
        <p className="font-palanquin text-sky-500">Delivers maximun lightweight cushioning</p>
        <h2 className="mt-10 font-montserrat font-semibold text-2xl">Rubber waffle outsole</h2>
        <p className="font-palanquin text-sky-500">Durable, Multi-surface traction</p>
      </div>
      <div>
        <img
          src={nikebg}
          alt="nike shoe"
        />
        <div className="flex flex-col border rounded-full border-blue-700 shadow-2xl lg:flex-row">
          <div className="md:flex justify-center">
            <img
              src={nikesd}
              alt="nike sd"
              className="sm:w-[500px] h-[30%] mt-6 md:h-[50%] lg:h-[260px]"
            />
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex justify-center">
              <h2 className="text-blue-800 mt-3">Nike</h2>
            </div>
            <div className="flex justify-center">
              <p className="font-montserrat font-semibold text-2xl">Air Max tavas SD</p>
            </div>
            <div className="flex justify-center gap-10 mt-4">
              <p className="font-montserrat font-semibold text-2xl">Price:</p>
              <p className="font-montserrat font-semibold text-2xl text-blue-800">$160</p>
            </div>
            <div className="mt-6 flex justify-center mb-6">
              <Button
                label="Buy Now"
                iconUrl={arrowRight}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuperQuality