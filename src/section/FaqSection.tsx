import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function FaqSection() {
  const faq = [
    {
      question: "Apa saja syarat yang dibutuhkan?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      question: "Berapa hari minimal sewa mobil lepas kunci?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      question: "Apakah Ada biaya antar-jemput?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      question: "Bagaimana jika terjadi kecelakaan",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
  return (
    <div className="lg:flex justify-center lg:mx-36">
      <div className="w-full text-center lg:text-left lg:pt-24 pl-5">
        <p className="font-bold text-2xl">
          Frequently Asked Question
        </p>
        <p className="font-light text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      <div className="w-full">
        <div className="w-full px-4 pt-16">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
            {faq.map((data) => {
              return (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="mt-3 border-2 border-gray-400 flex w-full justify-between rounded-sm bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span>{data.question}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-gray-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {data.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
