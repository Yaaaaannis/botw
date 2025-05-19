

const About = () => (
  <section className="w-full min-h-screen bg-black text-white flex flex-col items-stretch justify-start px-0 pt-4 pb-0">
    {/* Header */}

    {/* Contenu principal */}
    <div className="flex flex-1 items-start justify-between w-full px-16 pt-8 pb-0">
      {/* Colonne gauche : texte */}
      <div className="flex-1 flex flex-col justify-start max-w-[700px] pr-16 pt-8">
        <div className="mb-8">
          <div className="flex gap-8 mb-6 mt-2">
            <div>
              <span className="font-semibold text-[20px]">25</span>
              <span className="ml-2 text-[15px]">Active Clubs</span>
            </div>
            <div>
              <span className="font-semibold text-[20px]">5,680+</span>
              <span className="ml-2 text-[15px]">Members</span>
            </div>
            <div>
              <span className="font-semibold text-[20px]">60</span>
              <span className="ml-2 text-[15px]">Tournament Wins</span>
            </div>
          </div>
          <div className="w-full h-px bg-white/20 mb-6" />
          <div className="uppercase text-xs tracking-widest mb-3 font-ppLight leading-relaxed">
            Founded by Mat Carlsen — the lesser known, equally passionate (and allegedly fictional) brother of world champion Magnus Carlsen — our club was born from a desire to reimagine the chess experience.
          </div>
          <div className="text-sm font-ppLight mb-8 leading-relaxed">
            Whether you're a seasoned player or just discovering the 64 squares, you're invited to think deeper, move smarter — and play with style.
          </div>
        </div>
        <div className="italic text-[15px] font-ppLight mb-12 mt-8">
          "Not all Carlsens aim for world titles. Some just want to make chess look good."<br/>
          <span className="not-italic font-pp">— Mat Carlsen</span>
        </div>
        <div className="mt-auto mb-8">
          <h2 className="text-[40px] font-ginger tracking-wide uppercase flex items-center gap-4">[A1] <span>About</span></h2>
          <div className="w-full h-px bg-white/30 mt-2" />
        </div>
      </div>
      {/* Colonne droite : images */}
      <div className="flex flex-col justify-start items-end min-w-[480px] max-w-[520px] w-full pt-2">
        <div className="flex flex-col gap-4 w-full items-end">
          <div className="w-full aspect-[4/5] bg-white/10 rounded-lg overflow-hidden mb-4">
            <img src="/pion.png" alt="Chess main" className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col gap-4 w-[180px]">
            <img src="/bat.png" alt="Chess 1" className="object-cover w-full h-[80px] rounded" />
            <img src="/book.png" alt="Chess 2" className="object-cover w-full h-[80px] rounded" />
            <img src="/carl.png" alt="Chess 3" className="object-cover w-full h-[80px] rounded" />
          </div>
        </div>
      </div>
    </div>
    {/* Bordure basse */}
    <div className="w-full h-px bg-white/20 mt-8" />
  </section>
)

export default About 