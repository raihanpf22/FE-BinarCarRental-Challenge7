import React from "react";

export default function OurSection() {
  return (
    <div className="lg:flex justify-center">
      <div className="w-full flex justify-center pt-5 my-12">
        <img src="/img_service.svg" alt="Our_Section_Asset" />
      </div>
      <div className="w-4/5 my-auto items-center mx-5 lg:mx-0 lg:pr-64 text-justify">
        <p className="font-bold text-2xl">
          Best Car Rental for any kind of trip in Bekasi!
        </p>
        <p className="font-light text-sm mt-5">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <div className="flex gap-4 mt-3">
          <img src="/Group 53.svg" alt="" />
          <p className="font-light text-sm">
            Sewa Mobil Dengan Supir di Bali 12 Jam
          </p>
        </div>
        <div className="flex gap-4 mt-3">
          <img src="/Group 53.svg" alt="" />
          <p className="font-light text-sm">
            Sewa Mobil Lepas Kunci di Bali 24 Jam
          </p>
        </div>
        <div className="flex gap-4 mt-3">
          <img src="/Group 53.svg" alt="" />
          <p className="font-light text-sm">
            Sewa Mobil Jangka Panjang Bulanan
          </p>
        </div>
        <div className="flex gap-4 mt-3">
          <img src="/Group 53.svg" alt="" />
          <p className="font-light text-sm">
            Gratis Antar - Jemput Mobil di Bandara
          </p>
        </div>
        <div className="flex gap-4 mt-3">
          <img src="/Group 53.svg" alt="" />
          <p className="font-light text-sm">
            Layanan Airport Transfer / Drop In Out
          </p>
        </div>
      </div>
    </div>
  );
}
