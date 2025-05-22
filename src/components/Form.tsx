import React, { useState } from 'react';

const Form: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    chessLevel: [] as string[],
    lookingFor: [] as string[],
    membership: [] as string[],
  });

  const chessLevels = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Competitive / Tournament player',
  ];

  const lookingForOptions = [
    'Casual games',
    'Chess lessons',
    'Internal tournaments',
    'Online competitions',
    'Youth/Junior activities',
    'Volunteer opportunities',
  ];

  const membershipOptions = [
    'Annual membership - Adult',
    'Annual membership - Student/Child',
    'Monthly Membership',
    'Free Trial Session',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (field: 'chessLevel' | 'lookingFor' | 'membership', value: string) => {
    setFormData((prev) => {
      const exists = prev[field].includes(value);
      return {
        ...prev,
        [field]: exists
          ? prev[field].filter((l: string) => l !== value)
          : [...prev[field], value],
      };
    });
  };

  const handleNext = () => {
    if (step < 4) setStep((s) => s + 1);
    // Ici, tu peux gérer l'envoi du formulaire si step === 4
  };
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  // Titres et sous-titres dynamiques
  const stepTitles = [
    '',
    'Personal information',
    'Chess level',
    'What are you looking for ?',
    'Membership plan',
  ];
  const stepSubtitles = [
    '',
    '',
    '',
    '(Check all that apply)',
    '(You can select one or ask us for more info)',
  ];

  return (
    <section className="w-full h-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="flex w-full h-full  mx-auto relative">
        {/* Bloc gauche : vidéo */}
        <div className="flex-1 flex items-center justify-center pl-16">
          <video
            src={`/5.mp4`}
            autoPlay
            loop
            muted
            playsInline
            className="object-contain max-h-[600px] w-full pointer-events-none"
          />
        </div>
        {/* Bloc droit : formulaire */}
        <div className="flex flex-col justify-center w-1/2 h-full pr-16 pt-16 relative">
          {/* Header du formulaire, toujours fixe */}
          <div className="mb-8">
            <h2 className="text-white text-[40px] font-ginger mb-2">Join Our Chess Club</h2>
            <p className="text-white text-[24px] text-inter mb-4">Please fill out the form below to become a member of our club.</p>
            <div className="flex items-end gap-6">
              <span className="text-white text-2xl font-ginger">STEP {step}/4</span>
              <span className="text-white text-2xl font-light">
                {stepTitles[step]}
              </span>
            </div>
            {step > 2 && (
              <div className="mt-2">
                <span className="text-gray-300 text-base">{stepSubtitles[step]}</span>
              </div>
            )}
          </div>
          {/* Zone de réponse du formulaire, hauteur fixe */}
          <form className="flex flex-col gap-8 min-h-[320px] pb-32">
            {step === 1 && (
              <>
                <div>
                  <label className="block text-white/50 text-lg mb-2">Full name*</label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="w-full bg-transparent border-b border-gray-400 text-white py-2 outline-none" required />
                </div>
                <div>
                  <label className="block text-white/50 text-lg mb-2">Date of birth</label>
                  <input name="dob" value={formData.dob} onChange={handleChange} type="text" placeholder="__/__/____" className="w-full bg-transparent border-b border-gray-400 text-white py-2 outline-none" />
                </div>
                <div>
                  <label className="block text-white/50 text-lg mb-2">Email address*</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-transparent border-b border-gray-400 text-white py-2 outline-none" required />
                </div>
                <div>
                  <label className="block text-white/50 text-lg mb-2">Phone number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-transparent border-b border-gray-400 text-white py-2 outline-none" />
                </div>
              </>
            )}
            {step === 2 && (
              <div className="flex flex-col gap-6">
                {chessLevels.map((level) => (
                  <label key={level} className="flex items-center gap-4 cursor-pointer text-white text-xl group select-none">
                    <span
                      className={`w-6 h-6 flex items-center justify-center border border-white transition-all duration-200 mr-2 ${formData.chessLevel.includes(level) ? 'bg-white text-black' : 'bg-transparent'}`}
                      onClick={() => handleCheckbox('chessLevel', level)}
                      tabIndex={0}
                      role="checkbox"
                      aria-checked={formData.chessLevel.includes(level)}
                    >
                      {formData.chessLevel.includes(level) && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span onClick={() => handleCheckbox('chessLevel', level)}>{level}</span>
                  </label>
                ))}
              </div>
            )}
            {step === 3 && (
              <div className="flex flex-col gap-6">
                {lookingForOptions.map((option) => (
                  <label key={option} className="flex items-center gap-4 cursor-pointer text-white text-xl group select-none">
                    <span
                      className={`w-6 h-6 flex items-center justify-center border border-white transition-all duration-200 mr-2 ${formData.lookingFor.includes(option) ? 'bg-white text-black' : 'bg-transparent'}`}
                      onClick={() => handleCheckbox('lookingFor', option)}
                      tabIndex={0}
                      role="checkbox"
                      aria-checked={formData.lookingFor.includes(option)}
                    >
                      {formData.lookingFor.includes(option) && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span onClick={() => handleCheckbox('lookingFor', option)}>{option}</span>
                  </label>
                ))}
              </div>
            )}
            {step === 4 && (
              <div className="flex flex-col gap-6">
                {membershipOptions.map((option) => (
                  <label key={option} className="flex items-center gap-4 cursor-pointer text-white text-xl group select-none">
                    <span
                      className={`w-6 h-6 flex items-center justify-center border border-white transition-all duration-200 mr-2 ${formData.membership.includes(option) ? 'bg-white text-black' : 'bg-transparent'}`}
                      onClick={() => handleCheckbox('membership', option)}
                      tabIndex={0}
                      role="checkbox"
                      aria-checked={formData.membership.includes(option)}
                    >
                      {formData.membership.includes(option) && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span onClick={() => handleCheckbox('membership', option)}>{option}</span>
                  </label>
                ))}
              </div>
            )}
          </form>
        </div>
        {/* Boutons fixes en bas à droite de l'écran */}
        <div className="fixed right-16 bottom-12 flex gap-0 z-50">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="text-white text-lg flex items-center gap-2 px-6 py-3 font-formula border border-white rounded-l bg-transparent hover:bg-white hover:text-black transition-colors font-pp"
              style={{ borderRight: 'none' }}
            >
              <span>&#9664;</span> Back
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            className={`bg-white text-black px-8 py-3 font-formula text-lg flex items-center font-pp gap-2 rounded${step > 1 ? '-r' : ''}`}
            style={step > 1 ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } : {}}
          >
            {step === 4 ? 'Send' : <>Next <span>&#9654;</span></>}
          </button>
        </div>
        {/* Label [E3] FORM fixe en bas à gauche de l'écran */}
        <div className="fixed bottom-0 left-8 z-50">
          <span className="text-white font-ginger text-[80px] font-formula tracking-widest">[E3] FORM</span>
        </div>
      </div>
    </section>
  );
};

export default Form; 