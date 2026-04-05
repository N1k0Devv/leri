import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
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
  ArrowRight,
  Instagram,
  Facebook,
  MessageCircle,
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
      tag: "24/7 ავარიული გამოძახება",
      title: "ხელოსნის სერვისი თბილისში",
      titleSub: "სანტექნიკა? ელექტრობა? გამოგვიძახეთ ახლავე!",
      desc: "პროფესიონალური ხელოსანი: წყლის ჟონვის აღმოფხვრა, მილების შეკეთება, კანალიზაციის გაწმენდა. ასევე ელექტრობა, საკეტები და სახლის სარემონტო სამუშაოები.",
      ctaCall: "დარეკვა",
      ctaWA: "WhatsApp",
    },
    services: {
      title: "ჩვენი სერვისები",
      mainBadge: "მთავარი სერვისი",
      items: [
        {
          icon: <Droplets />,
          title: "წყლის გაჟონვა",
          subtitle: "გაჟონვის სწრაფი დიაგნოსტიკა და აღმოფხვრა",
          cat: "სანტექნიკა",
          isMain: true,
          bullets: [
            "წყლის ჟონვის დიაგნოსტიკა (დეტექტორით, კამერით)",
            "გაჟონვის წყაროს სწრაფი დადგენა",
            "სასწრაფო სამუშაოები და შეკეთება",
          ],
        },
        {
          icon: <Wrench />,
          title: "მილების შეცვლა",
          subtitle: "ძველი მილების განახლება ახალი მასალით",
          cat: "სანტექნიკა",
          bullets: [
            "ძველი მილების სრული შეცვლა",
            "ახალი, გამძლე მასალების გამოყენება",
            "ხარისხის გარანტია",
          ],
        },
        {
          icon: <Zap />,
          title: "კანალიზაცია",
          subtitle: "კანალიზაციის სისტემის სრული მოწესრიგება",
          cat: "წმენდა",
          bullets: [
            "კანალიზაციის სისტემის შემოწმება",
            "ელექტრო ტროსით გაწმენდა",
            "ვიდეო ინსპექცია",
          ],
        },
        {
          icon: <Trash2 />,
          title: "ჭედილობა",
          subtitle: "რთული ჭედილობების მოხსნა სპეციალური აპარატურით",
          cat: "წმენდა",
          bullets: [
            "სპეციალური აპარატურით მოხსნა",
            "ვანის და სამზარეულოს სიფონები",
            "ჭედილობის პრევენცია",
          ],
        },
        {
          icon: <Thermometer />,
          title: "ქვაბების წმენდა",
          subtitle: "გათბობის სისტემის სრული სერვისი",
          cat: "გათბობა",
          bullets: [
            "ქვაბის პროფილაქტიკა და წმენდა",
            "რადიატორების გამოდევნება",
            "გათბობის ეფექტიანობის გაზრდა",
          ],
        },
        {
          icon: <Lock />,
          title: "კარის გახსნა",
          subtitle: "ავარიული გახსნა დაზიანების გარეშე",
          cat: "საკეტები",
          bullets: [
            "ჩაკეტილი კარების უსაფრთხო გახსნა",
            "საკეტების შეცვლა და შეკეთება",
          ],
        },
        {
          icon: <Truck />,
          title: "მასალები",
          subtitle: "საჭირო მასალების შერჩევა და მიტანა",
          cat: "ტრანსპორტი",
          bullets: [
            "სამშენებლო მასალების შერჩევა",
            "ადგილზე მიწოდება",
          ],
        },
        {
          icon: <Lightbulb />,
          title: "ელექტრობა",
          subtitle: "ელ-გაყვანილობის მონტაჟი და დიაგნოსტიკა",
          cat: "ელექტრობა",
          bullets: [
            "ელ-გაყვანილობის მონტაჟი",
            "განათების სისტემები",
            "ელექტრო პანელები",
          ],
        },
        {
          icon: <Move />,
          title: "ავეჯი",
          subtitle: "ავეჯის პროფესიული აწყობა და შეკეთება",
          cat: "სერვისი",
          bullets: [
            "ავეჯის პროფესიული აწყობა",
            "ავეჯის დაშლა",
            "მცირე რემონტი",
          ],
        },
        {
          icon: <Hammer />,
          title: "დემონტაჟი",
          subtitle: "კედლების და კონსტრუქციების სწრაფი დემონტაჟი",
          cat: "ნგრევა",
          bullets: [
            "კედლების სწრაფი დემონტაჟი",
            "ნარჩენების გატანა",
            "უსაფრთხო სამუშაოები",
          ],
        },
      ],
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
      tag: "24/7 Emergency Call",
      title: "Handyman Service in Tbilisi",
      titleSub: "Plumbing? Electrical? Call us now!",
      desc: "Professional handyman: water leak repair, pipe fixing, sewage cleaning. Also electrical works, locks, and all home repair jobs.",
      ctaCall: "Call Now",
      ctaWA: "WhatsApp",
    },
    services: {
      title: "Our Services",
      mainBadge: "Main Service",
      items: [
        {
          icon: <Droplets />,
          title: "Water Leaks",
          subtitle: "Fast diagnosis and elimination of leaks",
          cat: "Plumbing",
          isMain: true,
          bullets: [
            "Water leak diagnosis (detector, camera)",
            "Fast source detection",
            "Emergency repairs",
          ],
        },
        {
          icon: <Wrench />,
          title: "Pipe Replacement",
          subtitle: "Replacing old pipes with durable materials",
          cat: "Plumbing",
          bullets: [
            "Full pipe replacement",
            "New durable materials",
            "Quality guarantee",
          ],
        },
        {
          icon: <Zap />,
          title: "Sewage System",
          subtitle: "Complete sewage system maintenance",
          cat: "Cleaning",
          bullets: [
            "Sewage system inspection",
            "Electric cable cleaning",
            "Video inspection",
          ],
        },
        {
          icon: <Trash2 />,
          title: "Clog Removal",
          subtitle: "Clearing blockages with specialized equipment",
          cat: "Cleaning",
          bullets: [
            "Specialized equipment clearing",
            "Bath and kitchen siphons",
            "Clog prevention",
          ],
        },
        {
          icon: <Thermometer />,
          title: "Boiler Cleaning",
          subtitle: "Full heating system service",
          cat: "Heating",
          bullets: [
            "Boiler maintenance and cleaning",
            "Radiator flushing",
            "Heating efficiency improvement",
          ],
        },
        {
          icon: <Lock />,
          title: "Door Opening",
          subtitle: "Emergency opening without damage",
          cat: "Locks",
          bullets: [
            "Safe locked door opening",
            "Lock replacement and repair",
          ],
        },
        {
          icon: <Truck />,
          title: "Materials",
          subtitle: "Selection and delivery of necessary materials",
          cat: "Logistics",
          bullets: [
            "Building material selection",
            "On-site delivery",
          ],
        },
        {
          icon: <Lightbulb />,
          title: "Electrical Works",
          subtitle: "Wiring installation and diagnostics",
          cat: "Electricity",
          bullets: [
            "Electrical wiring installation",
            "Lighting systems",
            "Electrical panels",
          ],
        },
        {
          icon: <Move />,
          title: "Furniture",
          subtitle: "Professional furniture assembly and repair",
          cat: "Service",
          bullets: [
            "Professional furniture assembly",
            "Furniture disassembly",
            "Minor repairs",
          ],
        },
        {
          icon: <Hammer />,
          title: "Demolition",
          subtitle: "Quick demolition of walls and structures",
          cat: "Demolition",
          bullets: [
            "Quick wall demolition",
            "Debris removal",
            "Safe operations",
          ],
        },
      ],
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

const Hero = ({ t }) => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Full-screen background image */}
    <img
      src={heroImage}
      className="absolute inset-0 w-full h-full object-cover"
      alt="Handyman service"
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-slate-950/65" />

    <div className="relative z-10 w-full max-w-2xl mx-auto px-6 pt-32 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {/* Orange badge */}
        <div className="inline-block bg-orange-500 text-white text-xs font-black px-4 py-2 rounded mb-8 uppercase tracking-widest">
          {t.hero.tag}
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
          {t.hero.title}
        </h1>

        {/* Blue italic subtitle */}
        <p className="text-xl sm:text-2xl text-blue-400 font-bold italic mb-6 leading-snug">
          {t.hero.titleSub}
        </p>

        {/* Description */}
        <p className="text-white/70 text-base leading-relaxed mb-10 max-w-lg">
          {t.hero.desc}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4">
          <a
            href="tel:593941496"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-lg"
          >
            <Phone size={22} />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-sm font-bold opacity-80">{t.hero.ctaCall}</span>
              <span className="text-lg">593 94 14 96</span>
            </span>
          </a>
          <a
            href="https://wa.me/995593941496"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-lg"
          >
            <MessageCircle size={22} />
            {t.hero.ctaWA}
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = ({ t }) => {
  return (
    <section id="services" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-black text-white mb-10"
        >
          {t.services.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.services.items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`p-6 rounded-3xl bg-slate-800/70 border ${s.isMain ? "border-blue-500/60" : "border-white/5"} backdrop-blur-sm`}
            >
              {/* Icon */}
              <div className="bg-slate-700/60 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-400 mb-4">
                {React.cloneElement(s.icon, { size: 26 })}
              </div>

              {/* Main badge */}
              {s.isMain && (
                <span className="inline-block bg-blue-600 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                  {t.services.mainBadge}
                </span>
              )}

              {/* Title */}
              <h4 className="text-lg font-black text-white leading-tight mb-1">{s.title}</h4>

              {/* Subtitle */}
              <p className="text-blue-400 text-sm font-semibold mb-4">{s.subtitle}</p>

              {/* Bullet list */}
              <ul className="space-y-2.5">
                {s.bullets.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-white/80 text-sm leading-snug">
                    {s.isMain ? (
                      <Droplets size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    ) : (
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                    )}
                    {item}
                  </li>
                ))}
              </ul>
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
      <Hero t={t} />
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

