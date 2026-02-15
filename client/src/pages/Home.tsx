import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Clock, Smile, Zap, Heart } from "lucide-react";
import { useState } from "react";
import { APP_TITLE } from "@/const";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBookAppointment = () => {
    // WhatsApp link - update with actual clinic number
    window.location.href =
      "https://api.whatsapp.com/send?phone=919876543210&text=Hello, I would like to book an appointment.";
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HEADER ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="text-xl font-bold text-blue-900">
              {APP_TITLE}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("timings")}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Timings
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
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
          <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("timings")}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Timings
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </button>
          </nav>
        )}
      </header>

      <main className="pt-20">
        {/* ==================== HOME SECTION ==================== */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 to-cyan-50"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                <span className="text-blue-600">Get Your Perfect</span>
                <br />
                Dental Smile
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Get your dental care from a certified dentist and health
                professional. We provide the best dental services with utmost
                care.
              </p>

              <Button
                onClick={handleBookAppointment}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
              >
                Get Started
              </Button>
            </div>

            {/* Right Content - Doctor Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-600">
              <div className="text-center mb-6">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center shadow-lg mx-auto border-4 border-blue-600 overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/f1/08/6f/f1086f1975c76be334d9b941b247d9f8.jpg"
                    alt="Dental Care"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 text-center mb-2">
                Dr. Sowmya H.M
              </h2>

              <p className="text-lg text-gray-600 text-center mb-6 font-semibold">
                Dental Surgeon
              </p>

              <p className="text-gray-600 text-center mb-8">
                Dedicated to providing exceptional dental care with a focus on
                patient comfort and satisfaction.
              </p>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleCall}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SERVICES SECTION ==================== */}
        <section id="services" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
              <span className="text-gray-600">Our Dental</span>
              <br />
              Services
            </h2>

            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We provide comprehensive dental services to ensure your teeth and
              gums remain healthy and beautiful.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 mx-auto">
                  <Smile className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 text-center mb-3">
                  Cosmetic Dentistry
                </h3>
                <p className="text-gray-600 text-center">
                  Teeth whitening, veneers, and smile makeovers for a beautiful
                  smile.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 text-center mb-3">
                  General Dentistry
                </h3>
                <p className="text-gray-600 text-center">
                  Cleanings, fillings, and preventive care for optimal oral
                  health.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 text-center mb-3">
                  Root Canal Treatment
                </h3>
                <p className="text-gray-600 text-center">
                  Advanced endodontic treatment to save your natural teeth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT SECTION ==================== */}
        <section id="about" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
              <span className="text-gray-600">We Have Certified</span>
              <br />
              Dental Service
            </h2>

            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Don't worry, we have certified dental services, so you can receive
              dental consultations and treatments with complete peace of mind.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-gray-600 font-semibold">
                  Happy <br /> Patients
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">15+</h3>
                <p className="text-gray-600 font-semibold">
                  Years Of <br /> Experience
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">100%</h3>
                <p className="text-gray-600 font-semibold">
                  Patient <br /> Satisfaction
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={handleCall}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </section>

        {/* ==================== TIMINGS SECTION ==================== */}
        <section id="timings" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
              <span className="text-gray-600">Clinic</span>
              <br />
              Timings
            </h2>

            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Visit us during our convenient working hours. We are here to serve
              you with the best dental care.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Weekday Timings */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-blue-900">
                    Monday - Saturday
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Morning Session
                    </p>
                    <p className="text-gray-600">10:00 AM - 1:00 PM</p>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-lg font-semibold text-gray-800">
                      Evening Session
                    </p>
                    <p className="text-gray-600">5:00 PM - 8:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Sunday Timings */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 shadow-lg border-l-4 border-cyan-600">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-blue-900">Sunday</h3>
                </div>

                <div className="space-y-4">
                  <p className="text-lg font-semibold text-gray-800">
                    By Appointment Only
                  </p>

                  <p className="text-gray-600">
                    Contact us to schedule your Sunday appointment. We are
                    available for emergency cases.
                  </p>

                  <Button
                    onClick={handleBookAppointment}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-semibold"
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CONTACT SECTION ==================== */}
        <section id="contact" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
              Contact Us <br />
              <span className="text-gray-600">On All Platforms</span>
            </h2>

            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Contact us on all our platforms. We are available for you and your
              dental health. Reach out to us now.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                {/* Location */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        Location
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Sollapuradamma Layout,
                        <br />
                        Sreenivas Nagar,
                        <br />
                        Sunkadakatte,
                        <br />
                        Bengaluru, Karnataka
                        <br />
                        <span className="font-semibold">560091</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        Attention Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Saturday
                        <br />
                        10:00 AM - 1:00 PM
                        <br />
                        5:00 PM - 8:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-6">
                    Get in Touch
                  </h3>

                  <div className="space-y-4">
                    <Button
                      onClick={handleCall}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </Button>

                    <Button
                      onClick={handleBookAppointment}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                    >
                      💬 WhatsApp Message
                    </Button>

                    <Button
                      onClick={() =>
                        (window.location.href =
                          "mailto:sowmya@ashirwadhdental.com")
                      }
                      className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                      📧 Send Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-blue-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold">
                  A
                </div>
                <span className="text-xl font-bold">
                  {APP_TITLE}
                </span>
              </div>
              <p className="text-blue-100">
                Your trusted dental care partner for a beautiful smile.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-100">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="hover:text-white transition"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-blue-100">
                <li>
                  <a
                    href="tel:+919876543210"
                    className="hover:text-white transition"
                  >
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sowmya@ashirwadhdental.com"
                    className="hover:text-white transition"
                  >
                    sowmya@ashirwadhdental.com
                  </a>
                </li>
                <li className="text-sm">
                  Sunkadakatte, Bengaluru
                  <br />
                  Karnataka 560091
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center text-blue-100">
            <p>© 2024 {APP_TITLE}. All rights reserved.</p>
            <p className="text-sm mt-2">
              Dedicated to your dental health and beautiful smile.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
