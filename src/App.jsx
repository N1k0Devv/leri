import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Menu,
  X,
  Droplets,
  Wrench,
  Zap,
  Trash2,
  Thermometer,
  Lock,
  Truck,
  Lightbulb,
  Move,
  Hammer,
  ChevronRight,
  ShieldCheck,
  ThumbsUp,
  Star,
  Clock,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Plus,
  Trophy,
  Users,
  BadgeCheck,
  Instagram,
  Facebook,
  MessageCircle,
  Cpu,
  Globe,
} from "lucide-react";
import heroImage from "./assets/hero.jpg";

// --- Translations ---
const translations = {
  ka: {
    brand: "უნივერსალური ოჯახის ხელოსანი",
    brandShort: "უნივერსალური ხელოსანი",
    brandSub: "ხელოსანი",
    nav: { home: "მთავარი", services: "სერვისები", contact: "კონტაქტი" },
    hero: {
      tag: "პროფესიონალური ხელოსანი 24/7",
      title: "თქვენი სახლის",
      titleAccent: "საუკეთესო",
      titleEnd: "მეგობარი",
      desc: "სანტექნიკა, ელექტროობა, რემონტი - ჩვენ ვგვარებთ ყველაფერს სწრაფად, ხარისხიანად და გარანტიით. ვიყენებთ უახლეს ტექნოლოგიებს.",
      ctaCall: "დარეკვა",
      ctaWA: "WhatsApp",
    },
    tech: {
      title: "უახლესი ტექნოლოგიები",
      desc: "ჩვენ ვიყენებთ თანამედროვე ხელსაწყოებს და ინოვაციურ მიდგომებს მაქსიმალური სიზუსტისთვის.",
    },
    services: {
      badge: "მომსახურება",
      title: "რას ვაკეთებთ?",
      items: [
        { icon: <Droplets />, title: "წყლის გაჟონვა", cat: "სანტექნიკა", desc: "გაჟონვის სწრაფი დიაგნოსტიკა და აღმოფხვრა." },
        { icon: <Wrench />, title: "მილების შეცვლა", cat: "სანტექნიკა", desc: "ძველი მილების შეცვლა ახალი, გამძლე მასალით." },
        { icon: <Zap />, title: "კანალიზაცია", cat: "წმენდა", desc: "კანალიზაციის სისტემის სრული მოწესრიგება." },
        { icon: <Trash2 />, title: "ჭედილობა", cat: "წმენდა", desc: "რთული ჭედილობების მოხსნა სპეციალური აპარატურით." },
        { icon: <Thermometer />, title: "ქვაბების წმენდა", cat: "გათბობა", desc: "გათბობის ქვაბების პროფილაქტიკა და წმენდა." },
        { icon: <Lock />, title: "კარის გახსნა", cat: "საკეტები", desc: "ჩაკეტილი კარების უსაფრთხო გახსნა დაზიანების გარეშე." },
        { icon: <Truck />, title: "მასალები", cat: "ტრანსპორტი", desc: "საჭირო მასალების ადგილზე მიტანა და შერჩევა." },
        { icon: <Lightbulb />, title: "ელექტროობა", cat: "ელექტროობა", desc: "ელ-გაყვანილობის მონტაჟი და დიაგნოსტიკა." },
        { icon: <Move />, title: "ავეჯი", cat: "სერვისი", desc: "ავეჯის აწყობა, დაშლა და მცირე რემონტი." },
        { icon: <Hammer />, title: "დემონტაჟი", cat: "ნგრევა", desc: "კედლების და კონსტრუქციების სწრაფი დემონტაჟი." },
      ]
    },
    contact: {
      badge: "კონტაქტი",
      title: "გჭირდებათ დახმარება?",
      desc: "დაგვიკავშირდით ნებისმიერ დროს. ჩვენი ოსტატები მზად არიან ოპერატიული რეაგირებისთვის. ვმუშაობთ უახლესი სტანდარტებით.",
      hotline: "ცხელი ხაზი 24/7",
      support: "დახმარების ხაზი",
      rights: "ყველა უფლება დაცულია",
    }
  },
  en: {
    brand: "Universal Family Handyman",
    brandShort: "Universal Handyman",
    brandSub: "Handyman",
    nav: { home: "Home", services: "Services", contact: "Contact" },
    hero: {
      tag: "Professional Handyman 24/7",
      title: "Your Home's",
      titleAccent: "Best",
      titleEnd: "Friend",
      desc: "Plumbing, electricity, repairs - we solve everything quickly, with quality, and guarantee. Working with newest technologies.",
      ctaCall: "Call Now",
      ctaWA: "WhatsApp",
    },
    tech: {
      title: "Advanced Technologies",
      desc: "We utilize modern tools and innovative approaches for maximum precision and efficiency.",
    },
    services: {
      badge: "Services",
      title: "What We Do?",
      items: [
        { icon: <Droplets />, title: "Water Leaks", cat: "Plumbing", desc: "Fast diagnosis and elimination of leaks." },
        { icon: <Wrench />, title: "Pipe Replacement", cat: "Plumbing", desc: "Replacing old pipes with new, durable materials." },
        { icon: <Zap />, title: "Sewage System", cat: "Cleaning", desc: "Complete maintenance of sewage systems." },
        { icon: <Trash2 />, title: "Clog Removal", cat: "Cleaning", desc: "Clearing difficult blockages with specialized equipment." },
        { icon: <Thermometer />, title: "Boiler Cleaning", cat: "Heating", desc: "Maintenance and cleaning of heating boilers." },
        { icon: <Lock />, title: "Door Opening", cat: "Locks", desc: "Safe opening of locked doors without damage." },
        { icon: <Truck />, title: "Materials", cat: "Logistics", desc: "Selection and delivery of necessary materials." },
        { icon: <Lightbulb />, title: "Electrical Works", cat: "Electricity", desc: "Installation and diagnostics of electrical wiring." },
        { icon: <Move />, title: "Furniture", cat: "Service", desc: "Assembly, disassembly, and minor furniture repairs." },
        { icon: <Hammer />, title: "Demolition", cat: "Demolition", desc: "Quick demolition of walls and structures." },
      ]
    },
    contact: {
      badge: "Contact",
      title: "Need Help?",
      desc: "Contact us anytime. Our technicians are ready for rapid response. We work with the latest standards.",
      hotline: "Hotline 24/7",
      support: "Support Line",
      rights: "All rights reserved",
    }
  }
};

// --- Shared Animations ---
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const Navbar = ({ lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#", key: "home" },
    { name: t.nav.services, href: "#services", key: "services" },
    { name: t.nav.contact, href: "#contact", key: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled ? "py-2 sm:py-4" : "py-4 sm:py-8"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`relative flex justify-between items-center p-3 sm:p-4 rounded-[2rem] transition-all duration-700 ${isScrolled
            ? "bg-slate-900/80 backdrop-blur-3xl border border-white/5 shadow-2xl"
            : "bg-transparent"
            }`}
        >
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="bg-orange-600 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(234,88,12,0.4)] flex-shrink-0"
            >
              <Wrench className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
            <div className="flex flex-col min-w-0 overflow-hidden">
              <span className="text-[11px] sm:text-base lg:text-xl font-black tracking-tight text-white leading-tight uppercase truncate">
                <span className="hidden sm:inline">{t.brand}</span>
                <span className="sm:hidden">{t.brandShort}</span>
              </span>
              <span className="text-[8px] sm:text-[10px] font-black tracking-[0.4em] text-orange-500 uppercase truncate">
                {t.brandSub}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-white/60 hover:text-orange-500 transition-all uppercase tracking-widest"
              >
                {t.nav[link.key]}
              </a>
            ))}

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'ka' ? 'en' : 'ka')}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-widest border border-white/5"
            >
              <Globe size={14} />
              {lang === 'ka' ? 'English' : 'ქართული'}
            </button>

            <a
              href="tel:593941496"
              className="bg-orange-600 text-white px-8 py-3.5 rounded-xl font-black text-sm flex items-center gap-2 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all"
            >
              <Phone size={18} />
              {t.hero.ctaCall}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language Toggle */}
            <button
              onClick={(e) => { e.stopPropagation(); setLang(lang === 'ka' ? 'en' : 'ka'); }}
              className="p-3 bg-white/5 rounded-2xl text-white border border-white/5 flex items-center justify-center min-w-[50px] active:scale-95 transition-all outline-none"
            >
              <span className="text-[10px] font-black uppercase tracking-widest">{lang.toUpperCase()}</span>
            </button>
            {/* Mobile Direct Call Button */}
            <a
              href="tel:593941496"
              className="p-3 bg-orange-600 rounded-2xl text-white shadow-lg active:scale-95 transition-all"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ t, lang }) => (
  <section className="relative min-h-screen flex items-center pt-40 pb-20 bg-mesh-dark overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

    <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="min-w-0"
      >
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full mb-10 tech-badge">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/80">
            {t.hero.tag}
          </span>
        </div>
        <h1 className="text-fluid-h1 font-black text-white mb-6 lg:mb-10 tracking-tight">
          {t.hero.title} <br />
          <span className="text-neon italic">{t.hero.titleAccent}</span> <br />
          {t.hero.titleEnd}
        </h1>
        <p className="text-lg lg:text-xl text-white/50 mb-8 lg:mb-12 max-w-xl leading-relaxed font-medium">
          {t.hero.desc}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
          <a
            href="tel:593941496"
            className="w-full sm:w-auto bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(234,88,12,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-3 group"
          >
            <Phone size={22} className="group-hover:rotate-12 transition-transform" />
            {t.hero.ctaCall}
          </a>
          <a
            href="https://wa.me/995593941496"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-xl group"
          >
            <MessageCircle size={22} className="text-green-500 group-hover:scale-110 transition-transform" />
            {t.hero.ctaWA}
          </a>
        </div>

        {/* Tech Mention Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 w-fit"
        >
          <div className="bg-blue-600/20 p-2 rounded-lg text-blue-400">
            <Cpu size={20} className="animate-pulse" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/80">{t.tech.title}</p>
            <p className="text-[11px] text-white/40">{lang === 'ka' ? 'სმარტ გადაწყვეტილებები' : 'Smart Solutions'}</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative mt-12 lg:mt-0 flex justify-center"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-orange-600/50 to-blue-600/50 rounded-[4.5rem] blur-2xl opacity-20 animate-pulse" />
          <div className="rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden border-[6px] lg:border-[12px] border-white/5 shadow-2xl aspect-[4/5] lg:h-[700px] relative">
            <img
              src={heroImage}
              className="w-full h-full object-cover opacity-90 scale-105 hover:scale-100 transition-transform duration-[2s]"
              alt="Handyman service"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 p-6 dark-glass rounded-3xl floating">
              <div className="flex items-center gap-4 mb-2">
                <CheckCircle2 className="text-orange-500" size={24} />
                <span className="text-xl font-black text-white">{lang === 'ka' ? '10+ წლიანი გამოცდილება' : '10+ Years Experience'}</span>
              </div>
              <p className="text-sm text-white/60">{lang === 'ka' ? 'ხარისხი გარანტირებულია' : 'Quality is guaranteed'}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = ({ t }) => {
  return (
    <section id="services" className="py-40 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 lg:mb-32">
          <motion.h2
            {...fadeInUp}
            className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-6"
          >
            {t.services.badge}
          </motion.h2>
          <motion.h3
            {...fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter"
          >
            {t.services.title}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {t.services.items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="neon-card p-10 rounded-[3rem] group"
            >
              <div className="bg-orange-600/10 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-600 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                {React.cloneElement(s.icon, { size: 32 })}
              </div>
              <h4 className="text-xl font-black text-white mb-3 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{s.title}</h4>
              <p className="text-sm text-white/40 mb-6 leading-relaxed font-medium">
                {s.desc}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                  {s.cat}
                </span>
                <Plus size={16} className="text-orange-500/50 group-hover:rotate-90 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ t, lang }) => (
  <section id="contact" className="py-40 bg-slate-900 border-t border-white/5 relative bg-mesh-dark">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-3 min-w-0">
          <h2 className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-6">
            {t.contact.badge}
          </h2>
          <h3 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-8 lg:mb-12 tracking-tighter leading-[0.9]">
            {t.contact.title.split('?')[0]}?
          </h3>
          <p className="text-lg lg:text-2xl text-white/40 mb-12 lg:mb-16 max-w-2xl leading-relaxed">
            {t.contact.desc}
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-white border border-white/5 hover:bg-orange-600 hover:border-orange-600 transition-all">
              <Instagram size={28} />
            </a>
            <a href="#" className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-white border border-white/5 hover:bg-blue-600 hover:border-blue-600 transition-all">
              <Facebook size={28} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 grid gap-6">
          <a
            href="tel:593941496"
            className="bg-slate-950/50 backdrop-blur-3xl p-10 lg:p-14 rounded-[3.5rem] border border-white/5 group hover:border-orange-500/30 transition-all"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="bg-orange-600/10 p-6 rounded-3xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Phone size={36} />
              </div>
              <ArrowRight
                className="text-white/10 group-hover:translate-x-2 group-hover:text-white transition-all"
                size={40}
              />
            </div>
            <p className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase mb-3">
              {t.contact.hotline}
            </p>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
              593 94 14 96
            </p>
          </a>
          <a
            href="tel:571530033"
            className="bg-slate-950/50 backdrop-blur-3xl p-10 lg:p-14 rounded-[3.5rem] border border-white/5 group hover:border-blue-500/30 transition-all"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="bg-blue-600/10 p-6 rounded-3xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Phone size={36} />
              </div>
              <ArrowRight
                className="text-white/10 group-hover:translate-x-2 group-hover:text-white transition-all"
                size={40}
              />
            </div>
            <p className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase mb-3">
              {t.contact.support}
            </p>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
              571 53 00 33
            </p>
          </a>
        </div>
      </div>

      <footer className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-white/20 font-black text-[10px] uppercase tracking-[0.4em]">
        <div className="flex items-center gap-4 text-white">
          <div className="bg-orange-600 p-2.5 rounded-xl text-white shadow-lg">
            <Wrench size={20} />
          </div>
          <p className="tracking-tighter text-xl font-black">{t.brand}</p>
        </div>
        <div className="flex gap-12">
          <a href="#" className="hover:text-white transition-colors">{t.nav.home}</a>
          <a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
        </div>
        <p className="text-center md:text-right">© {new Date().getFullYear()} {t.contact.rights}</p>
      </footer>
    </div>
  </section>
);

export default function App() {
  const [lang, setLang] = useState('ka');
  const t = translations[lang];

  return (
    <div className={`min-h-screen bg-slate-950 selection:bg-orange-600 selection:text-white ${lang === 'en' ? 'font-outfit' : ''}`}>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} lang={lang} />
      <Services t={t} />
      <Contact t={t} lang={lang} />

      {/* Mobile Fab */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <a
          href="https://wa.me/995593941496"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden bg-green-600 text-white p-5 rounded-full shadow-2xl border-4 border-slate-950 hover:scale-110 active:scale-95 transition-all"
        >
          <MessageCircle size={28} />
        </a>
        <a
          href="tel:593941496"
          className="lg:hidden bg-orange-600 text-white p-5 rounded-full shadow-2xl border-4 border-slate-950 hover:scale-110 active:scale-95 transition-all"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
}

