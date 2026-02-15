import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Smile,
  Zap,
  Heart,
  Shield,
  Baby,
  Scissors,
  CalendarCheck,
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  Stethoscope,
  ChevronDown,
  Mail,
  MessageCircle,
  ClipboardList,
  UserCheck,
  ThumbsUp,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { APP_TITLE } from "@/const";

const BOOKING_URL = "https://nammadr.vercel.app/book/ashirvadhdentalclinic";

// Hook for scroll-triggered animations
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// Animated counter component
function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: string;
  suffix?: string;
}) {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/\D/g, ""));

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(numericTarget / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, numericTarget]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBookAppointment = () => {
    window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Smile,
      title: "Cosmetic Dentistry",
      description:
        "Teeth whitening, veneers, and smile makeovers for a confident, beautiful smile.",
    },
    {
      icon: Zap,
      title: "General Dentistry",
      description:
        "Cleanings, fillings, and preventive care for optimal oral health.",
    },
    {
      icon: Heart,
      title: "Root Canal Treatment",
      description:
        "Pain-free endodontic treatment to save and restore your natural teeth.",
    },
    {
      icon: Shield,
      title: "Dental Implants",
      description:
        "Permanent tooth replacement solutions that look and feel completely natural.",
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description:
        "Gentle, child-friendly dental care in a comfortable environment.",
    },
    {
      icon: Scissors,
      title: "Oral Surgery",
      description:
        "Wisdom teeth extraction, jaw corrections, and advanced surgical procedures.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description:
        "Trusted expertise with over a decade of successful dental practice.",
    },
    {
      icon: Stethoscope,
      title: "Advanced Equipment",
      description:
        "State-of-the-art dental technology for precise and comfortable treatments.",
    },
    {
      icon: Users,
      title: "Patient-First Approach",
      description:
        "Personalized care plans tailored to your unique dental needs.",
    },
    {
      icon: Shield,
      title: "Sterilized & Safe",
      description:
        "Strict hygiene protocols ensuring a completely safe clinical environment.",
    },
  ];

  const processSteps = [
    {
      icon: CalendarCheck,
      step: "01",
      title: "Book Online",
      description:
        "Choose your preferred date and time slot through our online booking system.",
    },
    {
      icon: ClipboardList,
      step: "02",
      title: "Consultation",
      description:
        "Meet Dr. Sowmya for a thorough dental examination and diagnosis.",
    },
    {
      icon: UserCheck,
      step: "03",
      title: "Treatment Plan",
      description:
        "Receive a personalized treatment plan with transparent pricing.",
    },
    {
      icon: ThumbsUp,
      step: "04",
      title: "Healthy Smile",
      description:
        "Walk out with a healthier, brighter smile and follow-up care guidance.",
    },
  ];

  const testimonials = [
    {
      name: "Priya R.",
      rating: 5,
      text: "Dr. Sowmya is incredibly gentle and professional. My root canal was completely painless. Highly recommend!",
      treatment: "Root Canal",
    },
    {
      name: "Rajesh K.",
      rating: 5,
      text: "Best dental clinic in Sunkadakatte. The online booking through NammaDr makes it so convenient. No more waiting!",
      treatment: "General Checkup",
    },
    {
      name: "Ananya S.",
      rating: 5,
      text: "My kids love visiting Dr. Sowmya. She makes them feel comfortable and the clinic is spotlessly clean.",
      treatment: "Pediatric Care",
    },
  ];

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book online through our NammaDr booking system by clicking any 'Book Appointment' button on this page. You can also call us or send a WhatsApp message to schedule your visit.",
    },
    {
      question: "What are your clinic timings?",
      answer:
        "We are open Monday to Saturday with two sessions: Morning (10:00 AM - 2:00 PM) and Evening (5:30 PM - 9:00 PM). Sundays are available by appointment only.",
    },
    {
      question: "Is the root canal treatment painful?",
      answer:
        "With modern techniques and anesthesia, root canal treatment at our clinic is virtually painless. Dr. Sowmya ensures maximum comfort throughout the procedure.",
    },
    {
      question: "Do you offer dental care for children?",
      answer:
        "Yes! We provide specialized pediatric dental care in a child-friendly environment. Dr. Sowmya is experienced in making children feel comfortable during their dental visits.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, UPI, and all major digital payment methods. We also provide transparent cost estimates before any treatment begins.",
    },
  ];

  // Scroll-animated section refs
  const heroRef = useInView(0.1);
  const servicesRef = useInView();
  const whyUsRef = useInView();
  const processRef = useInView();
  const statsRef = useInView();
  const testimonialsRef = useInView();
  const timingsRef = useInView();
  const faqRef = useInView();
  const contactRef = useInView();

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HEADER ==================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-white/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-blue-900 leading-tight">
                {APP_TITLE}
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wide hidden sm:block">
                DENTAL CARE & WELLNESS
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {["home", "services", "about", "timings", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors capitalize relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  {section}
                </button>
              )
            )}
            <Button
              onClick={handleBookAppointment}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Appointment
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-blue-600" />
            ) : (
              <Menu className="w-6 h-6 text-blue-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg animate-fade-in">
            {["home", "services", "about", "timings", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition capitalize"
                >
                  {section}
                </button>
              )
            )}
            <Button
              onClick={() => {
                setMenuOpen(false);
                handleBookAppointment();
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 mt-2"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Appointment
            </Button>
          </nav>
        )}
      </header>

      <main>
        {/* ==================== HERO SECTION ==================== */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden"
        >
          {/* Decorative blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

          <div
            ref={heroRef.ref}
            className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 ${
              heroRef.inView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            {/* Left Content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4" />
                Now accepting online appointments
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Your Smile,{" "}
                <span className="gradient-text">Our Priority</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Experience exceptional dental care with Dr. Sowmya H.M. From
                routine checkups to advanced treatments, we ensure your comfort
                at every step.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  onClick={handleBookAppointment}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3.5 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book Appointment
                </Button>
                <Button
                  onClick={handleCall}
                  variant="outline"
                  className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3.5 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 mt-10 justify-center md:justify-start text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>500+ Happy Patients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Content - Doctor Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100 relative">
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                BDS, MDS
              </div>

              <div className="text-center mb-6">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-xl mx-auto border-4 border-white ring-4 ring-blue-100 overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/f1/08/6f/f1086f1975c76be334d9b941b247d9f8.jpg"
                    alt="Dr. Sowmya H.M"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 text-center mb-1">
                Dr. Sowmya H.M
              </h2>

              <p className="text-blue-600 text-center mb-4 font-semibold">
                Dental Surgeon
              </p>

              <p className="text-gray-500 text-center mb-6 text-sm leading-relaxed">
                Dedicated to providing exceptional dental care with a focus on
                patient comfort, advanced techniques, and lasting results.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                  <p className="text-lg font-bold text-blue-600">15+</p>
                  <p className="text-xs text-gray-500">Years Exp.</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                  <p className="text-lg font-bold text-blue-600">500+</p>
                  <p className="text-xs text-gray-500">Patients</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                  <p className="text-lg font-bold text-blue-600">5.0</p>
                  <p className="text-xs text-gray-500">Rating</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleBookAppointment}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book Now
                </Button>
                <Button
                  onClick={handleCall}
                  variant="outline"
                  className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 px-5"
                >
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SERVICES SECTION ==================== */}
        <section id="services" className="py-20 px-4 bg-white">
          <div
            ref={servicesRef.ref}
            className={`max-w-6xl mx-auto ${servicesRef.inView ? "" : "opacity-0"}`}
          >
            <div className={servicesRef.inView ? "animate-fade-in-up" : ""}>
              <p className="text-blue-600 font-semibold text-center mb-2 tracking-wide uppercase text-sm">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
                Our Dental Services
              </h2>
              <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
                Comprehensive dental care under one roof. From preventive care
                to advanced treatments, we have you covered.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className={`group bg-white rounded-2xl p-7 border border-gray-100 hover-lift cursor-default ${
                    servicesRef.inView
                      ? `animate-fade-in-up delay-${(i + 1) * 100}`
                      : "opacity-0"
                  }`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-5 group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== WHY CHOOSE US ==================== */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div
            ref={whyUsRef.ref}
            className={`max-w-6xl mx-auto ${whyUsRef.inView ? "" : "opacity-0"}`}
          >
            <div className={whyUsRef.inView ? "animate-fade-in-up" : ""}>
              <p className="text-blue-600 font-semibold text-center mb-2 tracking-wide uppercase text-sm">
                Why Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
                Why Choose Ashirwadh Dental
              </h2>
              <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
                We combine years of expertise with modern technology to deliver
                dental care you can trust.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, i) => (
                <div
                  key={item.title}
                  className={`bg-white rounded-2xl p-6 text-center hover-lift ${
                    whyUsRef.inView
                      ? `animate-fade-in-up delay-${(i + 1) * 100}`
                      : "opacity-0"
                  }`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== BOOK APPOINTMENT CTA ==================== */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <CalendarCheck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Book Your Visit?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Skip the wait! Choose your preferred date and time slot online.
              Powered by NammaDr smart queue management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookAppointment}
                className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all"
              >
                Book Appointment Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                onClick={handleCall}
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call: +91 98765 43210
              </Button>
            </div>
          </div>
        </section>

        {/* ==================== HOW IT WORKS ==================== */}
        <section className="py-20 px-4 bg-white">
          <div
            ref={processRef.ref}
            className={`max-w-6xl mx-auto ${processRef.inView ? "" : "opacity-0"}`}
          >
            <div className={processRef.inView ? "animate-fade-in-up" : ""}>
              <p className="text-blue-600 font-semibold text-center mb-2 tracking-wide uppercase text-sm">
                Simple Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
                How It Works
              </h2>
              <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
                Getting the dental care you need is simple. Here's how to get
                started.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div
                  key={step.step}
                  className={`relative text-center ${
                    processRef.inView
                      ? `animate-fade-in-up delay-${(i + 1) * 100}`
                      : "opacity-0"
                  }`}
                >
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-blue-200" />
                  )}
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="w-8 h-8 text-blue-600" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== ABOUT / STATS ==================== */}
        <section
          id="about"
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50"
        >
          <div
            ref={statsRef.ref}
            className={`max-w-6xl mx-auto ${statsRef.inView ? "" : "opacity-0"}`}
          >
            <div className={statsRef.inView ? "animate-fade-in-up" : ""}>
              <p className="text-blue-600 font-semibold text-center mb-2 tracking-wide uppercase text-sm">
                Our Track Record
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
                Trusted by Hundreds of Patients
              </h2>
              <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
                Our numbers speak for themselves. We take pride in delivering
                quality dental care with certified expertise.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 text-center hover-lift shadow-sm">
                <h3 className="text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter target="500" suffix="+" />
                </h3>
                <p className="text-gray-500 font-medium">Happy Patients</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center hover-lift shadow-sm">
                <h3 className="text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter target="15" suffix="+" />
                </h3>
                <p className="text-gray-500 font-medium">
                  Years of Experience
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center hover-lift shadow-sm">
                <h3 className="text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter target="100" suffix="%" />
                </h3>
                <p className="text-gray-500 font-medium">
                  Patient Satisfaction
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={handleBookAppointment}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3.5 rounded-xl font-semibold text-lg flex items-center gap-2 mx-auto shadow-lg"
              >
                <CalendarCheck className="w-5 h-5" />
                Book an Appointment
              </Button>
            </div>
          </div>
        </section>

        {/* ==================== TESTIMONIALS ==================== */}
        <section className="py-20 px-4 bg-white">
          <div
            ref={testimonialsRef.ref}
            className={`max-w-6xl mx-auto ${testimonialsRef.inView ? "" : "opacity-0"}`}
          >
            <div
              className={testimonialsRef.inView ? "animate-fade-in-up" : ""}
            >
              <p className="text-blue-600 font-semibold text-center mb-2 tracking-wide uppercase text-sm">
                Testimonials
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
                What Our Patients Say
              </h2>
              <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
                Real experiences from our valued patients at Ashirwadh Dental
                Clinic.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`bg-white rounded-2xl p-7 border border-gray-100 hover-lift relative ${
                    testimonialsRef.inView
                      ? `animate-fade-in-up delay-${(i + 1) * 100}`
                      : "opacity-0"
                  }`}
                >
                  <div className="absolute top-6 right-6">
                    <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                      {t.treatment}
                    </span>
                  </div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900 text-sm">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-400">Verified Patient</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== TIMINGS SECTION ==================== */}
        <section
          id="timings"
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50"
        >
          <div
            ref={timingsRef.ref}
            className={`max-w-6xl mx-auto ${timingsRef.inView ? "" : "opacity-0"}`}
          >
            <div className={timingsRef.inView ? "animate-fade-in-up" : ""}>
              <p className="text-blue-600 font-semibold text-center mb-2 tracking-wide uppercase text-sm">
                Visit Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
                Clinic Timings
              </h2>
              <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
                Visit us during our convenient working hours. We are here to
                serve you with the best dental care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Weekday */}
              <div
                className={`bg-white rounded-2xl p-8 hover-lift border border-blue-100 ${
                  timingsRef.inView
                    ? "animate-slide-in-left delay-200"
                    : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">
                    Monday - Saturday
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-xl">
                    <p className="font-semibold text-gray-800">Morning</p>
                    <p className="text-blue-600 font-medium">
                      10:00 AM - 2:00 PM
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-xl">
                    <p className="font-semibold text-gray-800">Evening</p>
                    <p className="text-blue-600 font-medium">
                      5:30 PM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Sunday */}
              <div
                className={`bg-white rounded-2xl p-8 hover-lift border border-cyan-100 ${
                  timingsRef.inView
                    ? "animate-slide-in-right delay-200"
                    : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Sunday</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-cyan-50/50 rounded-xl">
                    <p className="font-semibold text-gray-800 mb-1">
                      By Appointment Only
                    </p>
                    <p className="text-gray-500 text-sm">
                      Available for scheduled appointments and emergency cases.
                    </p>
                  </div>
                  <Button
                    onClick={handleBookAppointment}
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Book a Slot
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send?phone=919876543210&text=Hello, I would like to book a Sunday appointment.",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== FAQ SECTION ==================== */}
        <section className="py-20 px-4 bg-white">
          <div
            ref={faqRef.ref}
            className={`max-w-3xl mx-auto ${faqRef.inView ? "" : "opacity-0"}`}
          >
            <div className={faqRef.inView ? "animate-fade-in-up" : ""}>
              <p className="text-blue-600 font-semibold text-center mb-2 tracking-wide uppercase text-sm">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
                Got questions? We've got answers. Find everything you need to
                know below.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`border border-gray-100 rounded-2xl overflow-hidden transition-all ${
                    openFaq === i ? "shadow-md bg-blue-50/30" : "bg-white"
                  } ${
                    faqRef.inView
                      ? `animate-fade-in-up delay-${(i + 1) * 100}`
                      : "opacity-0"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-blue-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-500 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? "max-h-40 pb-5 px-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CONTACT SECTION ==================== */}
        <section
          id="contact"
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50"
        >
          <div
            ref={contactRef.ref}
            className={`max-w-6xl mx-auto ${contactRef.inView ? "" : "opacity-0"}`}
          >
            <div className={contactRef.inView ? "animate-fade-in-up" : ""}>
              <p className="text-blue-600 font-semibold text-center mb-2 tracking-wide uppercase text-sm">
                Reach Out
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
                Contact Us
              </h2>
              <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
                We're here for your dental health. Reach out through any of our
                platforms below.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Left - Map & Location */}
              <div
                className={`space-y-6 ${
                  contactRef.inView
                    ? "animate-slide-in-left delay-200"
                    : "opacity-0"
                }`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <iframe
                    title="Ashirwadh Dental Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.51!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSunkadakatte%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000"
                    className="w-full h-52 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-blue-900 mb-1">
                          Clinic Location
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          Sollapuradamma Layout, Sreenivas Nagar,
                          <br />
                          Sunkadakatte, Bengaluru - 560091
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-blue-900 mb-1">
                        Working Hours
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Mon - Sat: 10:00 AM - 2:00 PM, 5:30 PM - 9:00 PM
                        <br />
                        Sunday: By Appointment Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Contact Methods */}
              <div
                className={`${
                  contactRef.inView
                    ? "animate-slide-in-right delay-200"
                    : "opacity-0"
                }`}
              >
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 space-y-4">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Get in Touch
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Choose your preferred way to connect with us.
                  </p>

                  <Button
                    onClick={handleBookAppointment}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2.5 shadow-md"
                  >
                    <CalendarCheck className="w-5 h-5" />
                    Book Appointment Online
                  </Button>

                  <Button
                    onClick={handleCall}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2.5"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>

                  <Button
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send?phone=919876543210&text=Hello, I would like to book an appointment.",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2.5"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Message
                  </Button>

                  <Button
                    onClick={() =>
                      (window.location.href = "mailto:drsowmyahm@gmail.com")
                    }
                    variant="outline"
                    className="w-full border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2.5"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-white to-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold shadow-md">
                  A
                </div>
                <div>
                  <span className="text-lg font-bold block leading-tight">
                    {APP_TITLE}
                  </span>
                  <span className="text-[10px] text-blue-300 tracking-wide">
                    DENTAL CARE & WELLNESS
                  </span>
                </div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed mb-4">
                Your trusted dental care partner in Sunkadakatte, Bengaluru.
                Dedicated to healthy, beautiful smiles since 2009.
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
                <span className="text-blue-200 text-xs ml-2">5.0 Rating</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold mb-5 tracking-wide uppercase text-blue-300">
                Quick Links
              </h4>
              <ul className="space-y-3 text-blue-200">
                {["home", "services", "about", "timings", "contact"].map(
                  (section) => (
                    <li key={section}>
                      <button
                        onClick={() => scrollToSection(section)}
                        className="hover:text-white transition capitalize text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                        {section}
                      </button>
                    </li>
                  )
                )}
                <li>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                    Book Appointment
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold mb-5 tracking-wide uppercase text-blue-300">
                Contact Info
              </h4>
              <ul className="space-y-4 text-blue-200">
                <li>
                  <a
                    href="tel:+919876543210"
                    className="hover:text-white transition text-sm flex items-center gap-3"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:drsowmyahm@gmail.com"
                    className="hover:text-white transition text-sm flex items-center gap-3"
                  >
                    <Mail className="w-4 h-4 text-blue-400" />
                    drsowmyahm@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Sunkadakatte, Bengaluru
                    <br />
                    Karnataka 560091
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-blue-300 text-sm">
            <p>&copy; 2025 {APP_TITLE}. All rights reserved.</p>
            <p>
              Powered by{" "}
              <a
                href="https://nammadr.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-white transition font-medium"
              >
                NammaDr
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ==================== FLOATING MOBILE CTA ==================== */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex gap-3 max-w-lg mx-auto">
          <Button
            onClick={handleBookAppointment}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md text-sm"
          >
            <CalendarCheck className="w-4 h-4" />
            Book Appointment
          </Button>
          <Button
            onClick={handleCall}
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-5 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4" />
            Call
          </Button>
        </div>
      </div>

      {/* Bottom padding on mobile for floating CTA */}
      <div className="h-20 lg:hidden" />
    </div>
  );
}
