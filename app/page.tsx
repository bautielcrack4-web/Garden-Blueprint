'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Bug, 
  Clock, 
  Leaf, 
  ShieldCheck, 
  Search, 
  Sprout, 
  AlertTriangle, 
  CheckCircle2,
  Lock,
  Mail,
  Globe
} from 'lucide-react';
import { translations, Language } from '@/lib/i18n';

// --- Components ---

const Badge = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium backdrop-blur-sm mb-6">
    {Icon && <Icon className="w-4 h-4 text-[#4ade80]" />}
    {children}
  </div>
);

const SectionBadge = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f5e9] border border-[#c8e6c9] text-[#2d4a3e] text-sm font-semibold mb-6">
    {Icon && <Icon className="w-4 h-4" />}
    {children}
  </div>
);

const Card = ({ title, description, icon: Icon, color = "green" }: { title: string, description: string, icon: any, color?: "green" | "red" }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-2xl bg-white border border-[#e0e0e0] shadow-sm hover:shadow-md transition-all"
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${color === 'red' ? 'bg-red-50 text-red-500' : 'bg-[#f1f8f1] text-[#2d4a3e]'}`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-serif font-bold mb-3 text-[#1a2e26]">{title}</h3>
    <p className="text-[#4a5a54] leading-relaxed">{description}</p>
  </motion.div>
);

const ProblemCard = ({ text }: { text: string }) => (
  <div className="flex gap-4 p-6 rounded-xl bg-white border border-[#f0f0f0] items-start">
    <div className="mt-1 p-2 rounded-lg bg-red-50 text-red-500">
      <Bug className="w-5 h-5" />
    </div>
    <p className="text-[#4a5a54] font-medium leading-snug">{text}</p>
  </div>
);

const TestimonialCarousel = () => {
  const testimonials = [
    { src: "https://i.postimg.cc/LsqK1nFt/file-00000000d008720e8b3ce96dca49c97d.png", alt: "Carlos R." },
    { src: "https://i.postimg.cc/pLcMrK4F/file-00000000e07871f59e709d826df9697d.png", alt: "María G." },
    { src: "https://i.postimg.cc/0yX1j7Fp/file-00000000e81c720e85eee922ebfa830d.png", alt: "Lucía M." },
  ];

  // For infinite scroll, we duplicate the items
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden py-16 bg-[#fdfbf7]">
      <div className="flex justify-center mb-16">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <CheckCircle2 key={i} className="w-8 h-8 text-[#4ade80]" fill="currentColor" />
          ))}
        </div>
      </div>
      
      <div className="flex items-center" style={{ perspective: "1500px" }}>
        <motion.div 
          className="flex gap-10 px-4"
          animate={{
            x: [0, -1800], // Adjust based on card width + gap
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            width: "max-content",
            transformStyle: "preserve-3d"
          }}
        >
          {duplicatedTestimonials.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative w-[320px] md:w-[450px] aspect-square rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 shrink-0 bg-white"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                z: 50,
                transition: { duration: 0.3 }
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Image 
                src={item.src} 
                alt={item.alt}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                priority={idx < 4}
              />
              {/* 3D Glassy effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/10 pointer-events-none" />
              {/* Depth shadow */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fdfbf7] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fdfbf7] to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="py-6 border-b border-[#e0e0e0]">
    <h4 className="text-lg font-bold text-[#1a2e26] mb-2">{question}</h4>
    <p className="text-[#4a5a54]">{answer}</p>
  </div>
);

// --- Main Page ---

export default function LandingPage() {
  const [lang, setLang] = React.useState<Language>('es');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Determine language once on client
    const browserLang = navigator.language.toLowerCase();
    
    // Set state in a way that minimizes cascading renders (async)
    const timer = setTimeout(() => {
      setMounted(true);
      if (browserLang.startsWith('es')) {
        setLang('es');
      } else if (browserLang.startsWith('pt')) {
        setLang('pt');
      } else {
        setLang('en');
      }
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  const t = translations[lang];

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <main className="min-h-screen">
      {/* LANGUAGE SELECTOR */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/10">
        <Globe className="w-4 h-4 text-white/70" />
        <select 
          value={lang}
          onChange={(e) => setLang(e.target.value as Language)}
          className="bg-transparent text-white/90 text-sm font-medium outline-none cursor-pointer appearance-none pr-4"
        >
          <option value="en" className="text-black">English</option>
          <option value="es" className="text-black">Español</option>
          <option value="pt" className="text-black">Português</option>
        </select>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-[#2d4a3e] text-white pt-8 pb-12 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d4a3e]/80 to-[#1a2e26]/90" />
        <div className="absolute inset-0 hero-grid opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10 mb-8 lg:mb-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#4ade80] rounded-xl flex items-center justify-center text-[#1a2e26]">
              <Sprout className="w-6 h-6" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">BAGASY STUDIO</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
            
            {/* MOBILE ONLY: Book Mockup (Top) */}
            <div className="block lg:hidden w-full flex justify-center relative">
              {/* Glamour Glow Mobile */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#4ade80]/40 rounded-full blur-[70px] pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-[210px] aspect-square rounded-lg overflow-hidden shadow-2xl z-10"
              >
                <Image 
                  src="https://i.postimg.cc/K8phjtwP/file-00000000e23c71f5b0bc5198ff18234f.png" 
                  alt="Pest-Free Garden Blueprint"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center lg:items-start"
              >
                <Badge icon={Leaf}>{t.hero.badge}</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight mb-3 lg:mb-8 mt-4 lg:mt-0">
                  {t.hero.title1} <br className="hidden lg:block" />
                  <span className="text-[#4ade80]">{t.hero.titleHighlight}</span> <br className="hidden lg:block" />
                  {t.hero.title2}
                </h1>
                <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-5 lg:mb-12 leading-relaxed font-light max-w-xl">
                  {t.hero.subtitle}
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-5 lg:mb-8">
                  <div className="text-4xl lg:text-5xl font-bold">$12.99</div>
                  <div className="text-lg lg:text-2xl text-white/40 line-through">$39.99</div>
                  <div className="px-3 py-1 lg:px-4 rounded-full bg-[#4ade80]/20 text-[#4ade80] text-[10px] lg:text-sm font-bold border border-[#4ade80]/30 uppercase tracking-wider">
                    {t.hero.save}
                  </div>
                </div>

                <div className="w-full max-w-md lg:max-w-none flex flex-col gap-3 mb-4 lg:mb-8">
                  <button 
                    onClick={() => window.open('https://elprota.gumroad.com/l/jardinsinplagas?wanted=true', '_blank')}
                    className="w-full bg-[#4ade80] hover:bg-[#3ecb71] text-[#1a2e26] font-black text-lg lg:text-xl py-4 lg:py-6 rounded-xl lg:rounded-2xl flex items-center justify-center gap-2 lg:gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#4ade80]/20"
                  >
                    {t.hero.cta} <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 text-xs lg:text-sm text-white/60 justify-center lg:justify-start">
                  <Lock className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span>{t.hero.protected}</span>
                </div>
              </motion.div>
            </div>

            {/* DESKTOP ONLY: Book Mockup (Right) */}
            <div className="hidden lg:block flex-1 relative">
              {/* Glamour Glow Desktop */}
              <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] bg-[#4ade80]/30 rounded-full blur-[120px] pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                whileHover={{ rotate: -2, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-20 flex justify-end"
              >
                <div className="relative w-full max-w-[420px] aspect-square rounded-xl overflow-hidden shadow-[25px_25px_50px_-12px_rgba(0,0,0,0.5)]">
                  <Image 
                    src="https://i.postimg.cc/K8phjtwP/file-00000000e23c71f5b0bc5198ff18234f.png" 
                    alt="Pest-Free Garden Blueprint"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    priority
                  />
                  {/* Glass lighting effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/10 pointer-events-none" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SOUND FAMILIAR SECTION */}
      <section className="py-32 bg-[#fdfbf7]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1a2e26] mb-8 tracking-tight">{t.problems.h2}</h2>
            <p className="text-2xl text-[#4a5a54] font-light">{t.problems.p}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProblemCard text={t.problems.p1} />
            <ProblemCard text={t.problems.p2} />
            <ProblemCard text={t.problems.p3} />
            <ProblemCard text={t.problems.p4} />
            <ProblemCard text={t.problems.p5} />
            <ProblemCard text={t.problems.p6} />
          </div>
        </div>
      </section>

      {/* THERE'S A BETTER WAY SECTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <SectionBadge icon={CheckCircle2}>{t.betterWay.badge}</SectionBadge>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#1a2e26] mb-12 tracking-tight">
            {t.betterWay.h2_1} <span className="text-[#2d4a3e]">{t.betterWay.h2_span}</span>
          </h2>
          <div className="space-y-10 text-2xl text-[#4a5a54] leading-relaxed font-light">
            <p>{t.betterWay.p1}</p>
            <p className="font-bold text-[#1a2e26] text-3xl">
              {t.betterWay.p2}
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#fdfbf7] overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1a2e26] tracking-tight">{t.testimonials.h2}</h2>
        </div>
        <TestimonialCarousel />
      </section>

      {/* WHAT'S INSIDE SECTION */}
      <section className="py-32 bg-[#fdfbf7]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1a2e26] mb-8 tracking-tight">{t.inside.h2}</h2>
            <p className="text-2xl text-[#4a5a54] font-light">{t.inside.p}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              icon={Clock}
              title={t.inside.c1_title}
              description={t.inside.c1_desc}
            />
            <Card 
              icon={Leaf}
              title={t.inside.c2_title}
              description={t.inside.c2_desc}
            />
            <Card 
              icon={ShieldCheck}
              title={t.inside.c3_title}
              description={t.inside.c3_desc}
            />
            <Card 
              icon={Search}
              title={t.inside.c4_title}
              description={t.inside.c4_desc}
            />
            <Card 
              icon={Sprout}
              title={t.inside.c5_title}
              description={t.inside.c5_desc}
            />
            <Card 
              icon={AlertTriangle}
              title={t.inside.c6_title}
              description={t.inside.c6_desc}
            />
          </div>
        </div>
      </section>

      {/* WEEK BY WEEK SECTION */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1a2e26] mb-8 tracking-tight">{t.weeks.h2}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { week: "1", title: t.weeks.w1_title, desc: t.weeks.w1_desc },
              { week: "2", title: t.weeks.w2_title, desc: t.weeks.w2_desc },
              { week: "3", title: t.weeks.w3_title, desc: t.weeks.w3_desc },
              { week: "4", title: t.weeks.w4_title, desc: t.weeks.w4_desc }
            ].map((item, idx) => (
              <div key={idx} className="relative p-10 rounded-3xl bg-[#fdfbf7] border border-[#e0e0e0] shadow-sm hover:shadow-lg transition-all">
                <div className="text-7xl font-serif font-black text-[#2d4a3e]/10 absolute top-4 right-6">{item.week}</div>
                <h3 className="text-2xl font-bold text-[#1a2e26] mb-6">{t.weeks.prefix} {item.week}: {item.title}</h3>
                <p className="text-lg text-[#4a5a54] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-[#1a2e26] mb-12 text-center">{t.faq.h2}</h2>
          <div className="space-y-2">
            <FAQItem 
              question={t.faq.q1} 
              answer={t.faq.a1}
            />
            <FAQItem 
              question={t.faq.q2} 
              answer={t.faq.a2}
            />
            <FAQItem 
              question={t.faq.q3} 
              answer={t.faq.a3}
            />
            <FAQItem 
              question={t.faq.q4} 
              answer={t.faq.a4}
            />
            <FAQItem 
              question={t.faq.q5} 
              answer={t.faq.a5}
            />
            <FAQItem 
              question={t.faq.q6} 
              answer={t.faq.a6}
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-[#2d4a3e] text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">{t.cta.h2}</h2>
          <div className="text-xl text-white/80 mb-12 space-y-6">
            <p>{t.cta.p1}</p>
            <div className="text-left space-y-4 max-w-xl mx-auto">
              <p className="flex gap-3">
                <span className="font-bold text-[#4ade80]">{t.cta.opt1_title}</span> 
                {t.cta.opt1_desc}
              </p>
              <p className="flex gap-3">
                <span className="font-bold text-[#4ade80]">{t.cta.opt2_title}</span> 
                {t.cta.opt2_desc}
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-5xl font-bold">$12.99</div>
              <div className="text-2xl text-white/30 line-through">$39.99</div>
              <div className="px-4 py-1 rounded-full bg-[#4ade80] text-[#1a2e26] text-sm font-black uppercase tracking-wider">
                {t.cta.launch_price}
              </div>
            </div>
            
            <button 
              onClick={() => window.open('https://elprota.gumroad.com/l/jardinsinplagas?wanted=true', '_blank')}
              className="w-full bg-[#4ade80] hover:bg-[#3ecb71] text-[#1a2e26] font-black text-xl py-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] mb-6 shadow-xl shadow-[#4ade80]/20"
            >
              {t.cta.btn} <ArrowRight className="w-6 h-6" />
            </button>
            
            <div className="flex items-center justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>{t.cta.secure}</span>
              </div>
              <div className="w-1 h-1 bg-white/20 rounded-full" />
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{t.cta.instant}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#fdfbf7] border-t border-[#e0e0e0]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-serif font-bold tracking-widest text-[#2d4a3e] mb-4">BAGASY STUDIO</p>
          <p className="text-xs text-[#4a5a54]/60">{t.footer.rights} <br className="sm:hidden" /> {t.footer.disclaimer}</p>
        </div>
      </footer>
    </main>
  );
}
