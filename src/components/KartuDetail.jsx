import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { bg } from '../assets';
import confetti from 'canvas-confetti';

const KartuDetail = ({ kartuData }) => {
  const { key } = useParams();
  const kartu = kartuData ? kartuData[key] : null;
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setIsOpen(!isOpen);
  };

  const cardCoverColor =
    kartu && kartu.type === 'Ulang tahun'
      ? 'bg-blue-500'
      : kartu && kartu.type === 'Valentine'
      ? 'bg-rose-400'
      : kartu && kartu.type === 'Pernikahan'
      ? 'bg-yellow-400'
      : kartu && kartu.type === 'Hari Raya'
      ? 'bg-green-400'
      : kartu && kartu.type === 'Kelulusan'
      ? 'bg-green-400'
      : kartu && kartu.type === 'Tahun Baru'
      ? 'bg-orange-400'
      : '';
  console.log(kartu.type);
  return (
    <div className="flex justify-center items-center h-screen relative bg-gradient-to-t from-blue-500 to-blue-300">
      {/* Card Cover */}
      <motion.div
        onClick={handleCardClick}
        className={`w-10/12 md:w-3/12 h-[500px] card-surprise rounded-md shadow-md bg-white overflow-hidden z-50 ${cardCoverColor}`}
        initial={{ x: 0 }}
        animate={{ x: isOpen ? '-100%' : 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {console.log(cardCoverColor)}
        <div
          className="relative w-full h-full rounded-md"
          style={{ minHeight: '500px' }}
        >
          <img
            src={bg}
            alt=""
            className="absolute object-cover w-full h-full"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </motion.div>

      {/* Card Detail */}
      {kartu && (
        <div
          onClick={handleCardClick}
          style={{
            backgroundImage: `url(${kartu.gambar})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className={`absolute w-10/12 md:w-3/12 h-[500px] mx-auto overflow-hidden shadow-md bg-white rounded-lg border`}
        >
          {/* Card Content */}
          <div className="w-full h-full px-3">
            <div className="relative mb-[320px]">
              <div className="absolute w-full bg-white p-3 rounded-lg">
                <h1>{kartu.subject}</h1>
                <h1>{kartu.subjectA ? `& ${kartu.subjectA}` : ''}</h1>
                <p>{kartu.type}</p>
                <p>{kartu.tanggal}</p>
                <p>{kartu.ucapan}</p>
                <p>{kartu.username}</p>
              </div>
            </div>
          </div>
          {/* end of Card Content */}
        </div>
      )}
    </div>
  );
};

export default KartuDetail;
