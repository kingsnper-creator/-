/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Church, 
  Users, 
  Heart, 
  BookOpen, 
  UserCircle, 
  ChevronRight,
  Sun,
  HandHeart,
  Clock
} from "lucide-react";

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 border-b border-brand-line ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen relative bg-brand-secondary text-[#333] font-serif antialiased selection:bg-brand-primary selection:text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#4A5D4E 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-paper/50 backdrop-blur-sm border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rotate-45"></div>
             </div>
            <span className="text-xl font-bold tracking-tighter text-brand-primary uppercase">Grace Dream Church</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-brand-muted">
            <a href="#intro" className="hover:text-brand-primary transition-colors">Intro</a>
            <a href="#worship" className="hover:text-brand-primary transition-colors">Worship</a>
            <a href="#message" className="hover:text-brand-primary transition-colors">Sermon</a>
            <a href="#community" className="hover:text-brand-primary transition-colors">Community</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 border-b border-brand-line overflow-hidden bg-brand-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.h1 variants={fadeIn} className="text-7xl md:text-9xl font-bold text-brand-primary leading-[0.85] mb-8">
              은혜드림<br/>교회
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl italic text-brand-muted mb-12 font-sans">
              “은혜를 나누고, 삶으로 드리는 공동체”
            </motion.p>
            <motion.div variants={fadeIn} className="flex gap-4">
              <a 
                href="#intro"
                className="px-10 py-4 bg-brand-primary text-white text-[10px] font-sans tracking-[0.3em] uppercase rounded-full hover:bg-brand-primary/90 transition-all shadow-md"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden md:block"
          >
             <div className="aspect-[4/5] rounded-[3rem] border border-brand-line overflow-hidden bg-white/50 backdrop-blur-sm p-4">
                <div className="w-full h-full border-2 border-brand-line border-dashed rounded-[2.5rem] flex items-center justify-center">
                   <div className="text-center opacity-10">
                      <Church className="w-32 h-32 mx-auto mb-4" />
                      <p className="font-display text-2xl">Established in Grace</p>
                   </div>
                </div>
             </div>
             <div className="absolute -bottom-8 -left-8 p-8 bg-brand-paper border border-brand-line rounded-3xl shadow-lg max-w-[240px] z-20">
                <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-3 font-bold">Identity</p>
                <p className="text-base font-bold leading-relaxed text-brand-primary italic">눈에 보이는 가시적 교회이자 그리스도의 불가시적 공동체</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Intro & Values */}
      <Section id="intro" className="bg-brand-paper/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-7"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">교회 소개</h2>
            <div className="space-y-8 text-xl leading-relaxed text-[#444] font-serif">
              <p>
                은혜드림교회는 하나님께서 부르신 백성들의 공동체이며 그리스도를 머리로 하는 몸이며 성령이 거하시는 전입니다. 우리는 서로의 삶을 나누며 함께 살아가는 본질적 교회를 지향합니다.
              </p>
              <p>
                신앙을 개인적인 차원에 머무르게 하지 않고, 서로의 필요를 돌아보고 은혜를 나누는 삶 속에서 교회의 본질을 실천하고자 합니다.
              </p>
            </div>
            
            <div className="flex gap-8 mt-20 pt-10 border-t border-brand-line">
              {[
                { id: "01", val: "참된 예배", label: "Core Value" },
                { id: "02", val: "진실한 교제", label: "Core Value" },
                { id: "03", val: "나눔의 삶", label: "Core Value" }
              ].map((item) => (
                <div key={item.id} className="flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted block mb-3 font-bold">{item.label} {item.id}</span>
                  <span className="text-2xl font-bold text-brand-primary">{item.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-5 bg-white p-12 rounded-[2.5rem] shadow-sm border border-brand-line"
          >
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted mb-10 text-center border-b border-brand-line pb-4">Worship Schedule</h3>
            <div className="space-y-10">
              <div className="flex justify-between items-center group">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brand-muted mb-1">Sunday Morning</span>
                  <span className="font-bold text-2xl group-hover:text-brand-primary transition-colors">주일 대예배</span>
                </div>
                <span className="font-sans font-bold text-2xl text-brand-primary">11:00 AM</span>
              </div>
              <div className="flex justify-between items-center group">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brand-muted mb-1">Sunday Afternoon</span>
                  <span className="font-bold text-2xl group-hover:text-brand-primary transition-colors">주일 찬양예배</span>
                </div>
                <span className="font-sans font-bold text-2xl text-brand-primary">02:00 PM</span>
              </div>
              <div className="flex justify-between items-center group pt-6 border-t border-brand-line">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brand-muted mb-1">Wednesday Night</span>
                  <span className="font-bold text-2xl group-hover:text-brand-primary transition-colors">수요 성서연구</span>
                </div>
                <span className="font-sans font-bold text-2xl text-brand-primary">07:30 PM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Sermon Section (High Contrast) */}
      <Section id="message" className="bg-brand-primary text-brand-secondary relative overflow-hidden">
        <span className="text-[240px] absolute -bottom-20 right-4 font-black opacity-5 leading-none select-none tracking-tighter">SERMON</span>
        <div className="max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 border border-brand-secondary/30 rounded-full text-[10px] tracking-[0.3em] uppercase mb-10 font-bold">
              Today's Word
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-brand-secondary leading-tight">
              “함께 나누는 공동체”
            </h2>
            <div className="flex items-center gap-4 mb-16">
               <div className="w-12 h-px bg-brand-secondary/40"></div>
               <p className="text-2xl italic text-brand-secondary/70 font-display">사도행전 2:44–45</p>
            </div>
            <div className="space-y-8 text-xl md:text-3xl leading-relaxed text-brand-secondary/90 font-serif italic max-w-3xl">
              <p>
                초대 교회 성도들은 모든 것을 서로 통용하며 각 사람의 필요를 따라 나누었습니다. 이는 단순한 물질의 나눔을 넘어 삶과 믿음을 함께하는 공동체의 회복을 상징합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Pastor & Sacraments */}
      <Section className="bg-brand-paper/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Pastor */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-5 p-12 border border-brand-line rounded-[2.5rem] bg-white/60 shadow-sm"
          >
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted mb-10 border-b border-brand-line pb-4">Our Pastor</h4>
            <div className="flex flex-col gap-8">
              <div className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center border border-brand-line ring-8 ring-brand-secondary/50">
                 <UserCircle className="w-12 h-12 text-brand-muted opacity-40" />
              </div>
              <div>
                <p className="font-bold text-3xl mb-4 text-brand-primary">담임목사 ○○○</p>
                <div className="w-12 h-px bg-brand-primary/20 mb-6"></div>
                <p className="text-xl text-[#555] leading-relaxed italic font-serif">
                  “하나님의 은혜를 삶을 통해 전하고, 성도들의 삶 속에 함께하며 그 빛을 비추는 목회를 지향합니다.”
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sacraments */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-7"
          >
            <div className="p-12 border border-brand-line rounded-[2.5rem] bg-white/60 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted mb-12 border-b border-brand-line pb-4">Holy Sacraments</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-3 h-3 bg-brand-primary rounded-full ring-4 ring-brand-primary/10"></div>
                       <p className="font-bold text-2xl uppercase tracking-tighter text-brand-primary">Baptism</p>
                    </div>
                    <p className="text-lg text-[#666] leading-relaxed font-serif">
                      하나님께 속한 공동체에 들어왔음을 나타내는 거룩하고 공적인 표식입니다.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-3 h-3 bg-brand-primary rounded-full ring-4 ring-brand-primary/10"></div>
                       <p className="font-bold text-2xl uppercase tracking-tighter text-brand-primary">Eucharist</p>
                    </div>
                    <p className="text-lg text-[#666] leading-relaxed font-serif">
                      그리스도의 은혜를 기억하고 공동체 안에서 확인하는 거룩한 연합의 식탁입니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                 <button className="px-14 py-5 bg-brand-primary text-white text-[10px] font-sans tracking-[0.4em] uppercase rounded-full hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-brand-primary/20">
                   Contact Us
                 </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Community Section */}
      <Section id="community" className="bg-brand-paper shadow-inner bg-brand-secondary/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center gap-4 mb-10">
               <span className="text-[10px] uppercase font-bold tracking-widest text-brand-muted">Community Life</span>
               <div className="flex-1 h-px bg-brand-line"></div>
            </div>
            <h2 className="text-6xl font-bold mb-12 leading-tight">공동체 나눔</h2>
            <p className="text-2xl text-[#444] leading-relaxed mb-16 font-serif italic border-l-4 border-brand-primary/20 pl-8">
              "서로의 기쁨과 어려움을 함께 나누며, 각자의 필요를 채우고 함께 성장하는 그리스도의 몸 된 공동체를 이루어갑니다."
            </p>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { icon: Users, label: "구역 모임" },
                 { icon: HandHeart, label: "중보 기도" },
                 { icon: Heart, label: "봉사/섬김" },
                 { icon: BookOpen, label: "성경 공부" }
               ].map((item, idx) => (
                 <motion.div 
                   key={idx} 
                   whileHover={{ scale: 1.02 }}
                   className="flex items-center gap-4 p-5 border border-brand-line rounded-2xl bg-white/40 hover:bg-white transition-colors cursor-pointer"
                 >
                    <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center">
                       <item.icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <span className="text-sm font-bold tracking-[0.1em] uppercase text-brand-primary">{item.label}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
             <div className="grid grid-cols-2 gap-6">
                <div className="bg-brand-primary/10 aspect-[4/5] rounded-[4rem] border border-brand-line transform rotate-3"></div>
                <div className="bg-brand-muted/5 aspect-[4/5] rounded-[4rem] border border-brand-line -mt-12 -transform -rotate-3"></div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white border border-brand-line rounded-full flex items-center justify-center p-10 shadow-2xl z-10">
                <div className="w-full h-full border-2 border-brand-line border-dashed rounded-full flex items-center justify-center">
                   <Users className="w-12 h-12 text-brand-primary opacity-20" />
                </div>
             </div>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white py-28 px-6 md:px-12 border-t border-brand-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-10">
               <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white rotate-45"></div>
               </div>
               <span className="text-2xl font-bold tracking-tighter text-brand-primary uppercase">Grace Dream Church</span>
            </div>
            <p className="text-lg text-brand-muted leading-relaxed max-w-sm mb-12 italic font-serif">
              “은혜를 나누고, 삶으로 드리는 공동체. 은혜드림교회는 하나님의 부르심에 합당한 삶을 지향하는 그리스도의 몸입니다.”
            </p>
            <div className="text-[10px] uppercase transition-all tracking-[0.3em] font-bold text-brand-muted/30">
              © 2026 GRACEDREAM CHURCH. ALL RIGHTS RESERVED.
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-brand-primary font-bold mb-10 border-b border-brand-line pb-2">Navigation</h5>
              <ul className="space-y-5 text-xs font-sans font-bold tracking-[0.15em] uppercase text-brand-muted">
                <li><a href="#intro" className="block hover:text-brand-primary transition-colors">Introduction</a></li>
                <li><a href="#worship" className="block hover:text-brand-primary transition-colors">Worship Info</a></li>
                <li><a href="#message" className="block hover:text-brand-primary transition-colors">Sermon Archives</a></li>
                <li><a href="#community" className="block hover:text-brand-primary transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-brand-primary font-bold mb-10 border-b border-brand-line pb-2">Ministry</h5>
              <ul className="space-y-5 text-xs font-sans font-bold tracking-[0.15em] uppercase text-brand-muted">
                <li className="opacity-60 cursor-not-allowed">Weekly Bulletin</li>
                <li className="opacity-60 cursor-not-allowed">Online Giving</li>
                <li className="opacity-60 cursor-not-allowed">Mission Projects</li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-brand-primary font-bold mb-10 border-b border-brand-line pb-2">Location</h5>
              <address className="text-xs font-sans font-bold tracking-[0.1em] uppercase text-brand-muted not-italic leading-loose">
                Seoul, South Korea<br/>
                123 Grace-ro, Dream-gu<br/>
                T. (02) 123-4567<br/>
                E. hello@gracedream.church
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
