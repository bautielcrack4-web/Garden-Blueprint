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
  Mail
} from 'lucide-react';

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

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="py-6 border-b border-[#e0e0e0]">
    <h4 className="text-lg font-bold text-[#1a2e26] mb-2">{question}</h4>
    <p className="text-[#4a5a54]">{answer}</p>
  </div>
);

// --- Main Page ---

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-[#2d4a3e] text-white pt-8 pb-12 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d4a3e]/80 to-[#1a2e26]/90" />
        <div className="absolute inset-0 hero-grid opacity-10" />
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
            
            {/* MOBILE ONLY: Book Mockup (Top) */}
            <div className="block lg:hidden w-full flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-[160px] aspect-[3/4] rounded-lg overflow-hidden book-shadow border-l-4 border-black/20"
              >
                <Image 
                  src="/portada.png.png" 
                  alt="Pest-Free Garden Blueprint"
                  fill
                  className="object-cover"
                />
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
                <Badge icon={Leaf}>From Bagasy Studio</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight mb-3 lg:mb-8 mt-4 lg:mt-0">
                  The 30-Day <br className="hidden lg:block" />
                  <span className="text-[#4ade80]">Pest-Free</span> <br className="hidden lg:block" />
                  Garden Blueprint
                </h1>
                <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-5 lg:mb-12 leading-relaxed font-light max-w-xl">
                  &quot;The Complete Old-World System for a Garden That Defends Itself — No Chemicals, No Expensive Treatments, Just Proven Wisdom&quot;
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-5 lg:mb-8">
                  <div className="text-4xl lg:text-5xl font-bold">$17</div>
                  <div className="text-lg lg:text-2xl text-white/40 line-through">$47</div>
                  <div className="px-3 py-1 lg:px-4 rounded-full bg-[#4ade80]/20 text-[#4ade80] text-[10px] lg:text-sm font-bold border border-[#4ade80]/30 uppercase tracking-wider">
                    SAVE $30
                  </div>
                </div>

                <div className="w-full max-w-md lg:max-w-none flex flex-col gap-3 mb-4 lg:mb-8">
                  <button 
                    onClick={() => window.open('https://pay.hotmart.com/K105341448U', '_blank')}
                    className="w-full bg-[#4ade80] hover:bg-[#3ecb71] text-[#1a2e26] font-black text-lg lg:text-xl py-4 lg:py-6 rounded-xl lg:rounded-2xl flex items-center justify-center gap-2 lg:gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#4ade80]/20"
                  >
                    Get Instant Access Now <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 text-xs lg:text-sm text-white/60 justify-center lg:justify-start">
                  <Lock className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span>Protected by Hotmart</span>
                </div>
              </motion.div>
            </div>

            {/* DESKTOP ONLY: Book Mockup (Right) */}
            <div className="hidden lg:block flex-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-20 flex justify-end"
              >
                <div className="relative w-full max-w-[450px] aspect-[3/4] rounded-r-lg overflow-hidden book-shadow border-l-4 border-black/20">
                  <Image 
                    src="/portada.png.png" 
                    alt="Pest-Free Garden Blueprint"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#4ade80]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#4ade80]/5 rounded-full blur-3xl" />
            </div>

          </div>
        </div>
      </section>

      {/* SOUND FAMILIAR SECTION */}
      <section className="py-32 bg-[#fdfbf7]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1a2e26] mb-8 tracking-tight">Tired of Losing Your Garden to Pests?</h2>
            <p className="text-2xl text-[#4a5a54] font-light">Every year, millions of home gardeners watch helplessly as their hard work gets destroyed. Sound familiar?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProblemCard text="You plant everything perfectly, then aphids, beetles, or slugs destroy it overnight" />
            <ProblemCard text="Chemical pesticides worry you — you don't want poison near your food or family" />
            <ProblemCard text="You've tried 'natural' solutions from the internet that simply don't work" />
            <ProblemCard text="You spend hundreds on products that promise results but deliver nothing" />
            <ProblemCard text="Your neighbors' gardens thrive while yours gets eaten alive" />
            <ProblemCard text="You're ready to give up on growing your own food entirely" />
          </div>
        </div>
      </section>

      {/* THERE&apos;S A BETTER WAY SECTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <SectionBadge icon={CheckCircle2}>There&apos;s a Better Way</SectionBadge>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#1a2e26] mb-12 tracking-tight">
            What If Your Garden Could <span className="text-[#2d4a3e]">Defend Itself?</span>
          </h2>
          <div className="space-y-10 text-2xl text-[#4a5a54] leading-relaxed font-light">
            <p>
              &quot;For over 300 years, Amish communities have grown abundant, pest-free gardens without a single drop of chemical pesticide. Their secret? A complete system of companion planting, natural barriers, and time-tested techniques passed down through generations.&quot;
            </p>
            <p className="font-bold text-[#1a2e26] text-3xl">
              Bagasy Studio compiled years of research into these methods and created a simple, actionable 30-day protocol that anyone can follow — even if you&apos;ve never gardened before.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE SECTION */}
      <section className="py-32 bg-[#fdfbf7]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1a2e26] mb-8 tracking-tight">What&apos;s Inside the Blueprint</h2>
            <p className="text-2xl text-[#4a5a54] font-light">33 pages of actionable, step-by-step guidance with visual diagrams</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              icon={Clock}
              title="Day-by-Day 30-Day Action Plan"
              description="No guessing. Follow the exact steps each day to transform your garden into a pest-proof fortress."
            />
            <Card 
              icon={Leaf}
              title="Companion Planting Maps"
              description="Exact visual layouts for small (4×8 ft) and medium (10×20 ft) gardens showing precisely what to plant where with spacing measurements."
            />
            <Card 
              icon={ShieldCheck}
              title="5 Natural Spray Recipes"
              description="Homemade deterrents using garlic, hot peppers, and kitchen ingredients. No store runs, no expensive products."
            />
            <Card 
              icon={Search}
              title="Pest Identification Guide"
              description="Visual chart of the 8 most common garden pests with illustrated identification and the specific remedy for each one."
            />
            <Card 
              icon={Sprout}
              title="Soil Preparation Methods"
              description="Build soil so healthy that plants naturally resist disease and pest damage on their own. Includes compost layering guide."
            />
            <Card 
              icon={AlertTriangle}
              title="Emergency Pest Response"
              description="Already have a pest problem? Follow the decision flowchart to identify the threat and apply the right remedy immediately."
            />
          </div>
        </div>
      </section>

      {/* WEEK BY WEEK SECTION */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1a2e26] mb-8 tracking-tight">What to Expect Week by Week</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { week: "1", title: "Foundation", desc: "Set up your companion planting layout and natural barriers. Pest activity starts to decrease as you implement the first deterrents." },
              { week: "2", title: "Activation", desc: "Your garden's natural defense system kicks in. Beneficial insects arrive, soil health improves, and pest pressure drops noticeably." },
              { week: "3", title: "Protection", desc: "Your plants are visibly healthier and stronger. Neighbors start asking what you're doing differently. Pest damage is minimal." },
              { week: "4", title: "Fortress", desc: "Your garden is now a self-defending ecosystem. Pests avoid it naturally. You harvest more food than ever — completely chemical-free." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-10 rounded-3xl bg-[#fdfbf7] border border-[#e0e0e0] shadow-sm hover:shadow-lg transition-all">
                <div className="text-7xl font-serif font-black text-[#2d4a3e]/10 absolute top-4 right-6">{item.week}</div>
                <h3 className="text-2xl font-bold text-[#1a2e26] mb-6">Week {item.week}: {item.title}</h3>
                <p className="text-lg text-[#4a5a54] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-[#1a2e26] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem 
              question="Will this work in my climate zone?" 
              answer="Yes. The guide includes specific timing adjustments for Zones 3 through 9, covering everything from short northern seasons to hot southern climates."
            />
            <FAQItem 
              question="I'm a complete beginner. Is this too advanced?" 
              answer="Not at all. The 30-day plan tells you exactly what to do each day, step by step. No prior experience needed."
            />
            <FAQItem 
              question="How is this different from other gardening books?" 
              answer="Most books give you tips. This gives you a complete interconnected system — 6 pillars that work together — plus visual planting maps and diagrams you won't find anywhere else."
            />
            <FAQItem 
              question="What format is the ebook?" 
              answer="PDF. Instant digital download that works on any phone, tablet, or computer."
            />
            <FAQItem 
              question="I already have a pest problem. Will this help?" 
              answer="Yes. Chapter 10 is a dedicated emergency response protocol with a visual flowchart for immediate action."
            />
            <FAQItem 
              question="Do I need to buy any special products?" 
              answer="No. Everything uses common seeds, kitchen ingredients you already have, and free materials like cardboard rolls."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-[#2d4a3e] text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Start Growing a Pest-Free Garden Today</h2>
          <div className="text-xl text-white/80 mb-12 space-y-6">
            <p>You have two choices right now:</p>
            <div className="text-left space-y-4 max-w-xl mx-auto">
              <p className="flex gap-3">
                <span className="font-bold text-[#4ade80]">Option 1:</span> 
                Keep fighting pests with chemicals and expensive products that don&apos;t work long-term.
              </p>
              <p className="flex gap-3">
                <span className="font-bold text-[#4ade80]">Option 2:</span> 
                Give your garden 30 days with this proven system and watch it transform into a self-defending ecosystem.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-5xl font-bold">$17</div>
              <div className="text-2xl text-white/30 line-through">$47</div>
              <div className="px-4 py-1 rounded-full bg-[#4ade80] text-[#1a2e26] text-sm font-black uppercase tracking-wider">
                LAUNCH PRICE
              </div>
            </div>
            
            <button 
              onClick={() => window.open('https://pay.hotmart.com/K105341448U', '_blank')}
              className="w-full bg-[#4ade80] hover:bg-[#3ecb71] text-[#1a2e26] font-black text-xl py-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] mb-6 shadow-xl shadow-[#4ade80]/20"
            >
              Get Instant Access <ArrowRight className="w-6 h-6" />
            </button>
            
            <div className="flex items-center justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Secure Stripe Checkout</span>
              </div>
              <div className="w-1 h-1 bg-white/20 rounded-full" />
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Instant Email Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#fdfbf7] border-t border-[#e0e0e0]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-serif font-bold tracking-widest text-[#2d4a3e] mb-4">BAGASY STUDIO</p>
          <p className="text-xs text-[#4a5a54]/60">© 2026 Bagasy Studio. All rights reserved. <br className="sm:hidden" /> Gardening results vary by location and care.</p>
        </div>
      </footer>
    </main>
  );
}
