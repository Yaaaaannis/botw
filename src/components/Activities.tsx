import React from 'react';
import Header from './Header';

const activities = [
  {
    img: '/1.png',
    title: 'Casual Games',
    desc: 'Casual games with other members – no pressure, just fun.'
  },
  {
    img: '/2.png',
    title: 'In-house Tournaments',
    desc: 'Friendly competitions organized within the club.'
  },
  {
    img: '/3.png',
    title: 'Game Analysis',
    desc: 'Review your games and learn from your mistakes with others.'
  },
  {
    img: '/Ratedtournament.png',
    title: 'Rated Tournaments',
    desc: 'Participation in official rated tournaments.'
  },
  {
    img: '/5.png',
    title: 'Group lessons',
    desc: 'Chess lessons for begginers, intermediate or advanced players.'
  },
  {
    img: '/6.png',
    title: 'Kids Training Sessions',
    desc: 'Fun and educational sessions for young chess players.'
  },
  // Ajoute d'autres activités si besoin
];

const Activities: React.FC = () => {
  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50">
      <Header />
    </div>

    <section id="activities" className="w-full min-h-screen bg-white flex flex-row overflow-hidden">

      {/* Partie gauche */}
      <div className="w-[40%] min-h-screen flex flex-col justify-between px-16 pt-40">
        <div className='pt-30'>
          <h1 className="text-black font-pp text-[40px]  mb-8 uppercase">
            MORE THAN JUST<br />MOVES – REAL CHESS<br />MOMENTS
          </h1>
          <p className="text-black/70 font-ppLight text-[16px] max-w-[400px] mb-10">
            Whether you're here to compete, learn, or simply enjoy a good game, our club offers a wide range of activities for all ages and skill levels. Come play, progress, and share your passion for chess with a vibrant community.
          </p>
        </div>
        <div className="mb-2">
          <span className="text-black text-[80px] font-ginger">[E3] ACTIVITIES</span>
        </div>
      </div>
      {/* Partie droite : cartes scrollables */}
      <div className="flex-1 h-screen overflow-y-auto px-8 py-16 grid grid-cols-2 gap-8 ">
        {activities.map((activity, idx) => (
          <div className="col-span-1 row-span-1" key={idx}>
            <div className="bg-black border border-white/10 p-2">
              <img src={activity.img} alt={activity.title} className="w-full h-[200px] object-cover" />
              <div className="py-2">
                <div className="text-white font-ginger font-light text-[22px] mb-1">{activity.title}</div>
                <div className="text-white font-ppLight text-[15px]">{activity.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Activities; 