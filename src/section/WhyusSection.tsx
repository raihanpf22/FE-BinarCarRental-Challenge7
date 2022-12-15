import React from "react";

export default function WhyusSection() {
  return (
    <div className="m-8 lg:m-12">
      <p className="font-bold text-2xl">Why Us?</p>
      <p className="font-light text-sm mt-3">
        Mengapa harus pilih Binar Car Rental?
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5  mt-5">
        <div className="border-2 border-gray-200 rounded-md p-5">
          <img src="/why_us-assets/icon_complete.svg" alt="" />
          <p className="font-bold text-base mt-3">Mobil Lengkap</p>
          <p className="font-light text-sm mt-4">
            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
            terawat
          </p>
        </div>
        <div className="border-2 border-gray-200 rounded-md p-5">
          <img src="/why_us-assets/icon_price.svg" alt="" />
          <p className="font-bold text-base mt-3">Harga Murah</p>
          <p className="font-light text-sm mt-4">
            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
            mobil lain
          </p>
        </div>
        <div className="border-2 border-gray-200 rounded-md p-5">
          <img src="/why_us-assets/icon_24hrs.svg" alt="" />
          <p className="font-bold text-base mt-3">Layanan 24 Jam</p>
          <p className="font-light text-sm mt-4">
            Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
            tersedia di akhir minggu
          </p>
        </div>
        <div className="border-2 border-gray-200 rounded-md p-5">
          <img src="/why_us-assets/icon_professional.svg" alt="" />
          <p className="font-bold text-base mt-3">Sopir Profesional</p>
          <p className="font-light text-sm mt-4">
            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
            waktu
          </p>
        </div>
      </div>
    </div>
  );
}
