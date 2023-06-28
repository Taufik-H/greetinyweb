import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { bg } from '../assets';

const KartuDetail = ({ kartuData }) => {
  const { key } = useParams();
  const kartu = kartuData ? kartuData[key] : null;
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-center items-center h-screen relative bg-gradient-to-t from-blue-500 to-blue-300">
        <motion.div
          whileTap={{ scale: 0.8 }}
          onClick={handleCardClick}
          className={`w-10/12 h-[400px] card-surprise rounded-md shadow-md bg-white overflow-hidden`}
        >
          <div className="w-full h-full">
            <img src={bg} alt="" className="object-cover w-full h-full" />
          </div>
        </motion.div>
        {kartu && (
          <motion.div
            onClick={handleCardClick}
            className={`absolute w-11/12 md:w-3/12 mx-auto overflow-hidden shadow-md bg-white rounded-lg border ${
              isOpen ? 'block' : 'hidden'
            }`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <img
                className="w-full h-52 object-cover"
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
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default KartuDetail;
