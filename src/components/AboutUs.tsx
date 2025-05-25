import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="w-full h-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="flex w-full h-full max-w-[1400px] mx-auto relative">
        {/* Bloc gauche : tarifs et bouton */}
        <div className="flex flex-col justify-start w-1/2 h-full pl-16 pt-24">
          {/* Annual Membership */}
          <div>
            <h2 className="text-white font-ginger text-[36px] mb-6">ANNUAL MEMBERSHIP</h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-white font-pp text-[22px] ">
                <span>STUDENT/CHILD</span>
                <span>25€/month <span className="text-white/60 font-normal text-[18px]">(300€/year)</span></span>
              </div>
              <div className="flex items-center justify-between text-white font-pp text-[22px] ">
                <span>ADULT</span>
                <span>39€/month <span className="text-white/60 font-normal text-[18px]">(468€/year)</span></span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/30 my-6" />
          </div>
          {/* Monthly Membership */}
          <div className="mt-2">
            <h2 className="text-white font-ginger text-[32px] mb-6">MONTHLY MEMBERSHIP</h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-white font-pp text-[22px] ">
                <span>STUDENT/CHILD</span>
                <span>35€/mounth</span>
              </div>
              <div className="flex items-center justify-between text-white font-pp text-[22px] ">
                <span>ADULT</span>
                <span>49€/mounth</span>
              </div>
            </div>
            {/* Bouton Join us juste sous les prix */}
            <div className="mt-8 flex justify-start ml-115">
              <button onClick={() => navigate('/activities')} className="bg-white text-black py-3 px-10 rounded font-pp text-[22px] font-bold flex items-center gap-2 shadow hover:opacity-90 transition-opacity">
                <span className="text-[22px]">♞</span> Join us
              </button>
            </div>
          </div>
        </div>
        {/* Titre bas gauche */}
        <div className="absolute left-8 -bottom-24">
          <span className="text-white/80 text-[80px] font-ginger ">[E2] PRICE</span>
          </div>
        {/* Bloc droit : image */}
        <div className="flex-1 flex items-center justify-center pr-16">
          <img src="/join.png" alt="Chessboard" className="object-contain max-h-[600px] w-full scale-180 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 