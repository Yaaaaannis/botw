import React, { useEffect, useRef, useState } from 'react';

const typingText = `WHETHER YOU'RE A BEGINNER OR A\nGRANDMASTER, WE'RE JUST ONE\nMESSAGE AWAY.`;

const Contact: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [typingStarted, setTypingStarted] = useState(false);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      let i = 0;
      const text = typingText;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 35);
    };
    if (typingStarted) {
      handleTyping();
    }
  }, [typingStarted]);

  useEffect(() => {
    if (!h2Ref.current) return;
    observerRef.current = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTypingStarted(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observerRef.current.observe(h2Ref.current);
    return () => observerRef.current?.disconnect();
  }, []);

  // Split lines for display
  const lines = displayedText.split('\n');

  return (
    <section className="w-full min-h-screen bg-white text-black flex flex-col justify-between border border-black relative overflow-hidden">
      {/* Message principal */}
      <div className="p-8 md:p-16">
        <div className="max-w-2xl">
          <h2 ref={h2Ref} className="font-ppLight text-[32px] md:text-[36px] font-bold leading-tight mb-2 whitespace-pre-line">
            {lines.map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < lines.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>
      </div>
      {/* Bloc infos à droite */}
      <div className="absolute top-60 right-8 text-right text-[20px] font-inter">
        <div className="mb-2">CHESS CLUB STOCKHOLM<br />KUNGSGATAN 45, 3TR<br />111 56 STOCKHOLM<br />SWEDEN</div>
        <div className="mb-2">XX XX XX XX 08</div>
        <div className="mb-2">CONTACT@CAVALIERNOIRCHESS.COM</div>
      </div>
      {/* Logo central stylisé */}
      <div className="flex flex-col items-center justify-end flex-1">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative w-full flex flex-col items-center">
            <div className="flex flex-col items-center w-full">
              <span className="font-ginger text-[230px]   leading-none select-none">
                CAVALIER NOIR
              </span>
              {/* Ligne centrale avec 3 textes et traits entre eux, le tout sur fond blanc */}
              <div className="absolute left-0 right-0 top-[40%] flex items-center justify-between bg-white px-20 py-3 z-20" style={{transform: 'translateY(-50%)'}}>
                <span className="text-[16px] font-ppLight font-bold whitespace-nowrap">(Mat Carlsen Chess Club)</span>
                <div className="flex-1 h-[1px] bg-black  mx-2" />
                <span className="text-[16px] font-ppLight font-bold whitespace-nowrap">(Mat Carlsen Chess Club)</span>
                <div className="flex-1 h-[1px] bg-black  mx-2" />
                <span className="text-[16px] font-ppLight font-bold whitespace-nowrap">(Mat Carlsen Chess Club)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer contact */}
      <div className="flex items-center justify-between w-full px-8 ">
        <div className="font-ginger text-[80px] ">[DI] CONTACT</div>
        <div className="font-ppLight text-[16px] text-black/60 text-center w-full absolute left-0 right-0 mx-auto bottom-8">MADE BY OCTALISE &amp; YAAAANNIS</div>
      </div>
    </section>
  );
};

export default Contact; 