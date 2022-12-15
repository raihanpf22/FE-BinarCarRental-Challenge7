import React from "react";

export default function FooterSection() {
  return (
    <div className="lg:flex justify-between px-8 mt-12 lg:m-24">
      <div className="font-light text-sm">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p className="mt-3">binarcarrental@gmail.com</p>
        <p className="mt-3">081-233-334-808</p>
      </div>
      <div className="font-normal text-sm mt-3 lg:mt-0">
        <p className="mt-3">Our services</p>
        <p className="mt-3">Why Us</p>
        <p className="mt-3">Testimonial</p>
        <p className="mt-3">FAQ</p>
      </div>
      <div className="mt-3 lg:mt-0">
        <p className="font-light text-sm">Connect with us</p>
        <div className="flex mt-3 gap-5">
          <img src="/footer-assets/icon_facebook.svg" alt="" />
          <img src="/footer-assets/icon_instagram.svg" alt="" />
          <img src="/footer-assets/icon_twitter.svg" alt="" />
          <img src="/footer-assets/icon_mail.svg" alt="" />
          <img src="/footer-assets/icon_twitch.svg" alt="" />
        </div>
      </div>
      <div>
        <p className="font-light texts-sm">Copyright Binar 2022</p>
        <div className="px-5 py-2 text-white text-center lg:text-left mt-5 rounded-md bg-dark-blue-04">
          Binar Car Rental
        </div>
      </div>
    </div>
  );
}
