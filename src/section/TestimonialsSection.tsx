import React, { Fragment } from "react";

export default function TestimonialsSection() {
  const carousel = [
    {
      id: "slide1",
      image: "/testimonials-assets/testi(2).png",
      prev: "#slide4",
      next: "#slide2",
    },
    {
      id: "slide2",
      image: "/testimonials-assets/testi(2).png",
      prev: "#slide1",
      next: "#slide3",
    },
    {
      id: "slide3",
      image: "/testimonials-assets/testi(2).png",
      prev: "#slide2",
      next: "#slide4",
    },
    {
      id: "slide4",
      image: "/testimonials-assets/testi(2).png",
      prev: "#slide3",
      next: "#slide1",
    },
  ];
  return (
    <Fragment>
      <p className="font-bold text-2xl text-center">Testimonial</p>
      <p className="font-light text-sm mt-3 text-center">Berbagai review positif dari para pelanggan kami</p>
      <div className="carousel w-4/5 mx-auto mt-5">
        {carousel.map((data) => {
          return (
            <div id={data.id} className="carousel-item relative w-full">
              <img src={data.image} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={data.prev} className="btn btn-circle">
                  ❮
                </a>
                <a href={data.next} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
