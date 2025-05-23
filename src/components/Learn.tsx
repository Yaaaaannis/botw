import React from 'react';

interface CellContent {
  position: string;
  title: string;
}

const Learn: React.FC = () => {
  // Création d'un tableau 8x8
  const grid = Array(8).fill(null).map(() => Array(8).fill(null));
  
  // Définition du contenu des cases spéciales
  const specialCells: { [key: string]: CellContent } = {
    'F7': { position: 'F7', title: 'Basic Rules' },
    'C6': { position: 'C6', title: 'Chessboard Setup' },
    'E4': { position: 'E4', title: 'The Pieces & Their Moves' },
    'B2': { position: 'B2', title: 'Checkmate' },
    'G2': { position: 'G2', title: 'Special Moves' },
  };

  // Fonction pour convertir les coordonnées en position d'échecs
  const getChessPosition = (row: number, col: number): string => {
    const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];
    return `${files[col]}${ranks[row]}`;
  };

  return (
    <div className="flex  bg-black text-white">
      {/* Left section */}
      <div className="flex-1 px-8  mt-25  " >
        <div className="">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full"
          >
            <source src="/queens.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="space-y-6">
          
          <p className="font-inter text-[14px] text-white/60">
            Explore the foundations of chess — from how each piece moves to
            special strategies and essential rules. Whether you're new to the
            game or brushing up, this is where your journey begins.
          </p>
          <h1 className=" text-[80px] pt-0 font-ginger uppercase text-white/80">[C1] LEARN</h1>
        </div>
      </div>

      {/* Right section */}
      <div className="w-[885px] h-[864px] pt-0">
        <div className="grid grid-cols-8 h-full">
          {grid.map((row, rowIndex) => (
            row.map((_, colIndex) => {
              const position = getChessPosition(rowIndex, colIndex);
              const cellContent = specialCells[position];
              
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  style={{
                    width: '110.6px',
                    height: '108px'
                  }}
                  className={`relative group ${
                    colIndex === 0 ? 'border-l border-white/10' : ''
                  } ${rowIndex === 0 ? 'border-t border-white/10' : ''} border-r border-b border-white/10`}
                >
                  {cellContent && (
                    <>
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(180deg, rgba(103, 103, 103, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%)'
                        }}
                      />
                      <div className="absolute inset-0 p-1.5 z-10">
                        <div className="w-[98px] h-[95px] m-[6px] flex flex-col justify-between">
                          <span className="text-[13px] leading-5 font-ppLight font-light max-w-[93px]">
                            {cellContent.title}
                          </span>
                          <div className="flex items-end">
                            <span 
                              className="text-[32px] leading-[40px] font-ginger uppercase"
                              style={{ flex: '1' }}
                            >
                              {cellContent.position}
                            </span>
                            <span className="text-[19px] leading-7 font-ppLight font-light px-2">
                              ↘
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn; 