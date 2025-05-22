import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="w-full h-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="flex w-full h-full max-w-[1400px] mx-auto relative">
        {/* Bloc gauche : deux cartes */}
        <div className="flex flex-col items-center justify-center w-1/2 h-full pl-16 pt-16">
          <div className="flex flex-row gap-8">
            <div className="bg-white w-[320px] h-[420px] flex items-start justify-center">
              <span className="text-black text-[48px] font-ginger tracking-widest">NORMAL</span>
            </div>
            <div className="bg-white w-[320px] h-[420px] flex items-start justify-center">
              <span className="text-black text-[48px] font-ginger tracking-widest">ETUDIANT</span>
            </div>
          </div>
          
        </div>
        <div className="absolute -bottom-30 left-8 ">
            <span className="text-white text-[80px] font-ginger tracking-widest">[E3] PRICE</span>
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