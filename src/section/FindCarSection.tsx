import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { ICar } from "../interfaces/ICar";
import currencyFormat from "../util/currencyFormat";

export default function FindCarSection() {
  const Time24H = [
    {
      hour: "01:00",
      zone: "WIB",
    },
    {
      hour: "02:00",
      zone: "WIB",
    },
    {
      hour: "03:00",
      zone: "WIB",
    },
    {
      hour: "04:00",
      zone: "WIB",
    },
    {
      hour: "05:00",
      zone: "WIB",
    },
    {
      hour: "06:00",
      zone: "WIB",
    },
    {
      hour: "07:00",
      zone: "WIB",
    },
    {
      hour: "08:00",
      zone: "WIB",
    },
    {
      hour: "09:00",
      zone: "WIB",
    },
    {
      hour: "10:00",
      zone: "WIB",
    },
    {
      hour: "11:00",
      zone: "WIB",
    },
    {
      hour: "12:00",
      zone: "WIB",
    },
    {
      hour: "13:00",
      zone: "WIB",
    },
    {
      hour: "14:00",
      zone: "WIB",
    },
    {
      hour: "15:00",
      zone: "WIB",
    },
    {
      hour: "16:00",
      zone: "WIB",
    },
    {
      hour: "17:00",
      zone: "WIB",
    },
    {
      hour: "18:00",
      zone: "WIB",
    },
  ];
  const [ListCars, setListCars] = useState<ICar[]>([]);
  const [FilterCars, setFilterCars] = useState<ICar[]>([]);
  const [DateCars, setDateCars] = useState("");
  const [TimeCars, setTimeCars] = useState("");
  const [Visible, setVisible] = useState(false);
  const [PassangerCars, setPassangerCars] = useState(0);

  let DataCarsArr: ICar[] = [];

  function API_GetCars() {
    const getCars = {
      method: "GET",
      url: "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json",
    };

    axios
      .request(getCars)
      .then((response: any) => {
        setListCars(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  useEffect(() => {
    API_GetCars();
  }, []);

  const HandleFilter = () => {
    ListCars.map((data: any) => {
      if (
        DateCars <= data.availableAt.split("T", 1) &&
        PassangerCars <= data.capacity &&
        TimeCars.split(":", 1) <=
          data.availableAt.substring(11, 16).split(":", 1)
      ) {
        DataCarsArr.push(data);
      }
    });

    setFilterCars(DataCarsArr);
  };

  return (
    <Fragment>
      <div className="w-4/5 p-5 lg:flex justify-between gap-5 mx-8 md:mx-20 lg:mx-36 absolute  content-center -my-16 rounded-md bg-white shadow-lg">
        <div>
          <p className="font-light text-xs">Tipe Driver</p>
          <select className="select select-bordered focus:border-lime-green-04 mt-3 w-full max-w-xs">
            <option disabled selected>
              Pilih Tipe Driver
            </option>
            <option value="Dengan Sopir">Dengan Sopir</option>
            <option value="Tanpa Sopir">Tanpa Sopir (Lepas Kunci)</option>
          </select>
        </div>

        <div className="mt-5 lg:mt-0">
          <p className="font-light text-xs">Tanggal</p>
          <input
            type="date"
            className="w-full mt-3 border-2 border-gray-200 focus:border-lime-green-03 px-5 py-2 rounded-md"
            onChange={(e) => setDateCars(e.target.value)}
          />
        </div>

        {Visible === false ? (
          <div className="mt-5 lg:mt-0">
            <p className="font-light text-xs">Waktu Jemput/Ambil</p>

            <div className="flex lg:w-52 justify-between border-2 px-5 py-2 mt-3  border-gray-200 rounded-md">
              <p>Pilih Waktu</p>
              <img
                src="/fi_clock.svg"
                alt=""
                className="cursor-pointer"
                onClick={() => setVisible(true)}
              />
            </div>
          </div>
        ) : (
          <div>
            <p className="font-light text-xs">Waktu Jemput/Ambil</p>
            <select
              onChange={(e) => setTimeCars(e.target.value)}
              className="select select-bordered focus:border-lime-green-04 mt-3 w-full max-w-xs"
            >
              <option disabled selected>
                Pilih Waktu
              </option>
              {Time24H.map((data) => {
                return (
                  <option value={data.hour} className="flex justify-between">
                    <p className="w-full px-5">{data.hour} </p>
                    <p className="w-full"> {data.zone}</p>
                  </option>
                );
              })}
            </select>
          </div>
        )}

        <div className="mt-5 lg:mt-0">
          <p className="font-light text-xs">Jumlah Penumpang</p>

          <div className="flex  justify-between border-2 mt-3 border-gray-200 rounded-md">
            <div className="lg:w-full">
              <input
                type="number"
                placeholder="Jumlah Penumpang"
                className="py-2 px-5"
                onChange={(e) => setPassangerCars(Number(e.target.value))}
              />
            </div>
            <div className="lg:w-full">
              <img src="/fi_users.svg" alt="" className="mx-3 my-3" />
            </div>
          </div>
        </div>
        <div>
          <button
            className="my-8 rounded-md bg-lime-green-04 px-5 py-2 text-white text-sm font-bold"
            onClick={() => HandleFilter()}
          >
            Cari Mobil
          </button>
        </div>
      </div>
      <div className=" bg-white shadow-lg rounded-md mt-[450px] lg:mt-32 m-12 lg:m-32 p-5 grid grid-cols-1 lg:grid-cols-4 gap-5">
        {FilterCars.map((data: any) => {
          return (
            <div
              className="p-5 mt-5 border-2 border-gray-100 shadow-lg rounded-md"
              key={data.id}
            >
              <img src={data.image} alt="" className="w-[270px] h-[160px]" />
              <p className="mt-3 font-normal text-sm">
                {`${data.manufacture} ${data.model}`}
              </p>
              <p className="font-bold text-base mt-3">
                Rp. {currencyFormat(data.rentPerDay)} /hari{" "}
              </p>
              <p className="mt-3 font-light text-sm">{data.description}</p>
              <div className="flex justify-between mt-3">
                <img src="/fi_users.svg" alt="" />
                <p className="font-light text-sm">{data.capacity} orang</p>
              </div>
              <div className="flex justify-between mt-3">
                <img src="/fi_settings.svg" alt="" />
                <p className="font-light text-sm">{data.transmission}</p>
              </div>
              <div className="flex justify-between mt-3">
                <img src="/fi_calendar.svg" alt="" />
                <p className="font-light text-sm">
                  {data.availableAt.split("T", 1)}
                </p>
              </div>
              <div className="flex justify-between mt-3">
                <img src="/fi_clock.svg" alt="" />
                <p className="font-light text-sm">
                  {data.availableAt.substring(11, 16)} WIB
                </p>
              </div>
              <button className="rounded-md bg-lime-green-04 text-white font-bold text-sm w-full py-3 mt-3">Pilih Mobil</button>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
