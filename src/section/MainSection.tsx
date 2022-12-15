import { Link } from "react-router-dom";

function MainSection() {
  return (
    <div className="lg:flex pt-5 bg-base-color-grey">
      <div className=" w-full px-5 pb-5 lg:pb-0 lg:px-24 my-auto">
        <p className="font-bold text-4xl">
          Sewa & Rental Mobil Terbaik di kawasan Bekasi
        </p>
        <p className="text-base font-light mt-4">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <Link to={"/find_car"}>
          <button className="text-base font-bold text-white bg-lime-green-04 rounded-md px-5 py-2 mt-5 cursor-pointer">
            Mulai Sewa Mobil
          </button>
        </Link>
      </div>
      <div className=" w-full flex justify-end">
        <img src="/img_car.svg" alt="" />
      </div>
    </div>
  );
}

export default MainSection;
