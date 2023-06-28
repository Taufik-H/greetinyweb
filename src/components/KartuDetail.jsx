import React from 'react';
import { useParams } from 'react-router-dom';
import { bg } from '../assets';
const KartuDetail = ({ kartuData }) => {
  const { key } = useParams();
  const kartu = kartuData ? kartuData[key] : null;

  return (
    <div>
      <img src={bg} alt="" className="object-cover w-full h-screen absolute" />
      <div className="flex justify-center items-center h-screen relative">
        {kartu ? (
          <div className=" absolute w-5/12 md:w-3/12 mx-auto overflow-hidden shadow-md bg-white rounded-lg border">
            <div className="relative">
              <img
                className="w-full h-52  object-cover "
                src={kartu.gambar}
                alt={kartu.subject}
              />
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <p className="text-2xl uppercase font-bold">{kartu.subject}</p>
                <p className="px-1 py-1 bg-orange-100 border border-orange-500 animate-pulse text-orange-500 rounded-full text-xs w-[90px] flex justify-center">
                  {kartu.type}
                </p>
              </div>
              <p className="text-xs uppercase font-bold text-slate-500 mt-5">
                {kartu.tanggal}
              </p>
              <p className="flex justify-center items-center w-full bg-slate-50 border-slate-200 border h-20 rounded-md mt-3 p-3">
                "{kartu.ucapan}"
              </p>

              <p className="text-xs mt-2 italic uppercase text-slate-500">
                Pengirim: {kartu.username}
              </p>
            </div>
          </div>
        ) : (
          <p className="p-10 rounded-md bg-white w-5/12 md:w-3/12 flex justify-center">
            Loading
          </p>
        )}
      </div>
    </div>
  );
};

export default KartuDetail;