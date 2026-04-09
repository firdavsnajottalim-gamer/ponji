/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Smartphone, 
  Battery, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Wrench, 
  ChevronRight,
  CheckCircle2,
  Instagram,
  Facebook
} from "lucide-react";

const services = [
  {
    title: "Ekran almashtirish",
    description: "Barcha turdagi smartfonlar uchun original va sifatli ekranlar.",
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Batareya almashtirish",
    description: "Batareya quvvati tez tugayaptimi? Biz uni yangisiga almashtirib beramiz.",
    icon: <Battery className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Dasturiy ta'minot",
    description: "Proshivka, blokdan chiqarish va tizimni optimallashtirish.",
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Suvdan zarar ko'rish",
    description: "Suv tushgan telefonlarni qayta tiklash va tozalash xizmati.",
    icon: <Wrench className="w-8 h-8 text-blue-400" />,
  },
];

const features = [
  "Original ehtiyot qismlar",
  "Kafolatlangan xizmat",
  "Tezkor ta'mirlash (30-60 daqiqa)",
  "Tajribali ustalar",
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Smartphone className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight font-display">TELFON SERVIS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Xizmatlar</a>
            <a href="#about" className="hover:text-white transition-colors">Biz haqimizda</a>
            <a href="#contact" className="hover:text-white transition-colors">Aloqa</a>
          </div>

          <a 
            href="tel:+998901234567" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Bog'lanish</span>
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/10 blur-[100px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Kafolatlangan Xizmat</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-display">
                  Smartfoningizga <br />
                  <span className="text-gradient">Ikkinchi Hayot</span> <br />
                  Bering
                </h1>
                <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                  Professional darajadagi ta'mirlash xizmati. Biz barcha turdagi smartfonlarni tez va sifatli tuzatib beramiz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2 group">
                    Xizmatlarni ko'rish
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center gap-4 px-6 py-4 rounded-full border border-white/10 glass">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                          <img 
                            src={`https://picsum.photos/seed/user${i}/100/100`} 
                            alt="User" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-300">500+ mamnun mijozlar</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                  <img 
                    src="https://picsum.photos/seed/repair/800/1000" 
                    alt="Phone Repair" 
                    className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Hozirgi holat</p>
                        <p className="text-lg font-bold">Ochiq: 09:00 - 20:00</p>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-blue-500/30 rounded-tr-3xl" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Bizning Xizmatlar</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Sizning qurilmangiz uchun eng yaxshi yechimlar. Biz faqat sifatli ehtiyot qismlardan foydalanamiz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl glass hover:bg-white/10 transition-all group"
                >
                  <div className="mb-6 p-4 bg-blue-500/10 rounded-2xl w-fit group-hover:bg-blue-500/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display">Nega Aynan Bizni <br /> Tanlashadi?</h2>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-lg text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div className="p-6 rounded-2xl glass">
                    <p className="text-3xl font-bold text-blue-400 mb-1">5+</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Yillik Tajriba</p>
                  </div>
                  <div className="p-6 rounded-2xl glass">
                    <p className="text-3xl font-bold text-blue-400 mb-1">10k+</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Tuzatilgan Telefonlar</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img 
                    src="https://picsum.photos/seed/tech1/400/500" 
                    alt="Tech" 
                    className="rounded-2xl w-full aspect-[3/4] object-cover border border-white/5"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="https://picsum.photos/seed/tech2/400/300" 
                    alt="Tech" 
                    className="rounded-2xl w-full aspect-square object-cover border border-white/5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4">
                  <img 
                    src="https://picsum.photos/seed/tech3/400/300" 
                    alt="Tech" 
                    className="rounded-2xl w-full aspect-square object-cover border border-white/5"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="https://picsum.photos/seed/tech4/400/500" 
                    alt="Tech" 
                    className="rounded-2xl w-full aspect-[3/4] object-cover border border-white/5"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-[40px] p-8 md:p-16 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[100px] pointer-events-none" />
              
              <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Savollaringiz bormi?</h2>
                  <p className="text-gray-400 mb-10 text-lg">
                    Biz bilan bog'laning yoki servis markazimizga tashrif buyuring. Mutaxassislarimiz sizga yordam berishga tayyor.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-blue-400 w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Manzil</p>
                        <p className="text-xl font-medium">Toshkent sh., Chilonzor tumani, 1-mavze</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-blue-400 w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Telefon</p>
                        <p className="text-xl font-medium">+998 90 123 45 67</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                        <Clock className="text-blue-400 w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Ish vaqti</p>
                        <p className="text-xl font-medium">Har kuni: 09:00 — 20:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/40 p-8 rounded-3xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-6">Xabar qoldiring</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Ismingiz" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                      <input 
                        type="tel" 
                        placeholder="Telefon raqamingiz" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <textarea 
                      placeholder="Xabaringiz..." 
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    ></textarea>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all">
                      Yuborish
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Smartphone className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight font-display uppercase">Telfon Servis</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © 2026 Telfon Servis. Barcha huquqlar himoyalangan.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
