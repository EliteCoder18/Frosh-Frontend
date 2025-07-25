import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  MapPin,
  Calendar,
  Users,
  Image,
  Award,
  LogIn,
  ChevronDown,
  Mail,
  Phone,
} from "lucide-react";
import Dither from "./Dither";
import GooeyNav from "./GooeyNav";
import FlowingMenu from "./FlowingMenu";
import logo from "./assets/logo.png";
import Navlogo from "./assets/Navlogo.png";
import map from "./assets/map.jpg";
import ContactFooter from "./components/ContactFooter";
import Faq from "./components/Faq";

const facultyMembers = [
  { name: "Dr. Sharma", image: "/images/faculty1.jpg" },
  { name: "Prof. Verma", image: "/images/faculty2.jpg" },
  { name: "Dr. Kapoor", image: "/images/faculty3.jpg" },
  { name: "Prof. Gupta", image: "/images/faculty4.jpg" },
  { name: "Dr. Singh", image: "/images/faculty5.jpg" },
  { name: "Prof. Jain", image: "/images/faculty6.jpg" },
];

const oscMembers = [
  { name: "Arjun Mehta", image: "/images/osc1.jpg" },
  { name: "Neha Rao", image: "/images/osc2.jpg" },
];

const coreMembers = [
  { name: "Rahul", image: "/images/core1.jpg" },
  { name: "Simran", image: "/images/core2.jpg" },
  { name: "Kabir", image: "/images/core3.jpg" },
  { name: "Aman", image: "/images/core4.jpg" },
  { name: "Priya", image: "/images/core5.jpg" },
  { name: "Ishaan", image: "/images/core6.jpg" },
  { name: "Tanya", image: "/images/core7.jpg" },
  { name: "Kunal", image: "/images/core8.jpg" },
  { name: "Megha", image: "/images/core9.jpg" },
  { name: "Aditya", image: "/images/core10.jpg" },
  { name: "Sneha", image: "/images/core11.jpg" },
  { name: "Rohan", image: "/images/core12.jpg" },
  { name: "Divya", image: "/images/core13.jpg" },
  { name: "Ananya", image: "/images/core14.jpg" },
  { name: "Yash", image: "/images/core15.jpg" },
  { name: "Sakshi", image: "/images/core16.jpg" },
  { name: "Varun", image: "/images/core17.jpg" },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("gallery");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);

    
  };




  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "gallery",
        "sponsors",
        "about",
        "map",
        "events",
        "login",
        "faq",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Animated Wave Background */}
      {
        // <div
        //   style={{ width: "1920px", height: "1080px", position: "absolute" }}
        // >
        //   <Dither
        //     waveColor={[0, 0, 1]}
        //     disableAnimation={false}
        //     enableMouseInteraction={false}
        //     mouseRadius={0.3}
        //     colorNum={40}
        //     waveAmplitude={0.3}
        //     waveFrequency={0}
        //     waveSpeed={0.05}
        //   />
        // </div>

        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-slate-900 to-black">
            <div className="wave-container">
              <div className="wave wave-1"></div>
              <div className="wave wave-2"></div>
              <div className="wave wave-3"></div>
              <div className="wave wave-4"></div>
            </div>
          </div>
        </div>
      }

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] h-[70px] bg-black/50 backdrop-blur-md rounded-3xl text-white shadow-lg z-50">
  <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between relative">

      {/* <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-black/50 backdrop-blur-md backdrop-saturate-150 rounded-3xl text-white shadow-lg z-50"> */}
        
        {/* <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-3 items-center"> */}
          {/* Left Navigation */}
    <ul className="flex gap-20 text-lg font-semibold">
      <li onClick={() => scrollToSection("gallery")} className={`cursor-pointer ${activeSection === "gallery" ? "text-cyan-400" : ""}`}>Gallery</li>
      <li onClick={() => scrollToSection("sponsors")} className={`cursor-pointer ${activeSection === "sponsors" ? "text-cyan-400" : ""}`}>Sponsors</li>
      <li onClick={() => scrollToSection("about")} className={`cursor-pointer ${activeSection === "about" ? "text-cyan-400" : ""}`}>About Us</li>
    </ul>

          {/* Center Logo */}
{/* <div className="absolute left-1/2 top-[-70px] transform -translate-x-1/2 transition-all duration-500">
  {scrolled ? (
    <img src={logo} alt="Small Logo" className="h-[0px] w-auto" />
  ) : (
    <img src={Navlogo} alt="Large Logo" className="h-[250px] w-auto" />
  )}
</div> */}


     <div className="absolute left-1/2 top-[-74px] transform -translate-x-1/2">
      <img src={Navlogo} alt="WaveSite Logo" className="h-[250px] w-100 " />
    </div> 


          {/* Right Navigation */}
    <ul className="flex gap-20 text-lg font-semibold">
      <li onClick={() => scrollToSection("map")} className={`cursor-pointer ${activeSection === "map" ? "text-cyan-400" : ""}`}>Map</li>
      <li onClick={() => scrollToSection("events")} className={`cursor-pointer ${activeSection === "events" ? "text-cyan-400" : ""}`}>Events</li>
      <li onClick={() => scrollToSection("login")} className={`cursor-pointer ${activeSection === "login" ? "text-cyan-400" : ""}`}>Log In</li>
    </ul>
  
    




          {/* Mobile menu button (only visible on small screens) */}
          <div className="md:hidden flex justify-end col-span-3 mt-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm mt-2 rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { id: "gallery", label: "Gallery", icon: Image },
                { id: "sponsors", label: "Sponsors", icon: Award },
                { id: "about", label: "About Us", icon: Users },
                { id: "map", label: "Map", icon: MapPin },
                { id: "events", label: "Events", icon: Calendar },
                { id: "login", label: "Log In", icon: LogIn },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    activeSection === id
                      ? "text-blue-300 bg-blue-900/30"
                      : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}



      </nav>


      
      





      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img
              src={logo}
              alt="WaveSite Logo"
              // className="h-50 w-80 drop-shadow-[0_0_40px_rgba(0,255,255,0.7)]"
                className="h-[400px] w-[820px] drop-shadow-[0_0_40px_rgba(0,255,255,0.7)]"
            />
            {/* <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-blue-400">Frosh</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the perfect blend of innovation and elegance in our
              immersive digital space
            </p> */}
            {/* <button
              onClick={() => scrollToSection("gallery")}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              <span>Explore</span>
              <ChevronDown className="w-5 h-5" />
            </button> */}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gallery
              </h2>
              <p className="text-xl text-gray-300">
                Discover our visual journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-lg bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-600 to-slate-800 p-8 flex items-center justify-center">
                    <Image className="w-16 h-16 text-blue-300 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Gallery Item {item}
                    </h3>
                    <p className="text-gray-300">
                      Beautiful showcase of our work and achievements
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section
          id="sponsors"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Sponsors
              </h2>
              <p className="text-xl text-gray-300">
                Trusted partners who make it all possible
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sponsor) => (
                <div
                  key={sponsor}
                  className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300 flex items-center justify-center"
                >
                  <Award className="w-12 h-12 text-blue-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* About Us Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        About Us
      </h2>
      <p className="text-xl text-gray-300">
        {/* You can add a small tagline here if needed */}
      </p>
    </div>

    {/* Our Story Section */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
      <p className="text-gray-300 mb-6">
        Frosh is the official admission cell extension of Thapar Institute of Engineering & Technology,
        dedicated to assisting incoming students in their transition to college life. Frosh serves as a comprehensive
        support system for freshers, guiding them through the admission process, orientation, and early campus experiences.
        With a focus on providing accurate information, personalized assistance, and fostering a welcoming environment,
        Frosh ensures a seamless and confident start to every student’s journey at Thapar University.
      </p>
      <p className="text-gray-300 mb-6">
        Through innovation and collaboration, we've built a platform
        that brings together creativity, functionality, and user
        experience in perfect harmony.
      </p>
    </div>



 <div className="space-y-16">
  <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Team</h3>

  {/* Faculty Section */}
  <div>
    <h4 className="text-2xl font-semibold text-blue-400 mb-4">Faculty</h4>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {facultyMembers.map((member, index) => (
        <div key={`faculty-${index}`} className="relative w-full aspect-square rounded-lg overflow-hidden">
          <img src={member.image} alt="" className="w-full h-full object-cover block" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/80"></div>
          <span className="absolute bottom-1 left-1 right-1 text-xs text-white text-center">{member.name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* OSC Section */}
  <div>
    <h4 className="text-2xl font-semibold text-blue-400 mb-4">OSC</h4>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {oscMembers.map((member, index) => (
        <div key={`osc-${index}`} className="relative w-[200px] h-[200px] rounded-lg overflow-hidden mx-auto">
          <img src={member.image} alt="" className="w-full h-full object-cover block" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/80"></div>
          <span className="absolute bottom-1 left-1 right-1 text-xs text-white text-center">{member.name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Core Section */}
  <div>
    <h4 className="text-2xl font-semibold text-blue-400 mb-4">Core</h4>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {coreMembers.map((member, index) => (
        <div key={`core-${index}`} className="relative w-full aspect-square rounded-lg overflow-hidden">
          <img src={member.image} alt="" className="w-full h-full object-cover block" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/80"></div>
          <span className="absolute bottom-1 left-1 right-1 text-xs text-white text-center">{member.name}</span>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
</section>



        {/* Map Section */}
        <section
          id="map"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              
              </h2>
              <p className="text-xl text-gray-300">
         
              </p>
             </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-lg p-8 text-center">
              {/* <MapPin className="w-16 h-16 text-blue-300 mx-auto mb-6" /> */}
              <h1 className="text-5xl font-semibold text-white mb-4 -mt-4">
                Map
              </h1>
              {/* <p className="text-gray-300 mb-4">
                123 Innovation Street
                <br />
                Tech District, Digital City 12345
                <br />
                United States
              </p>
              <p className="text-gray-300">
                Open Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Weekend: By appointment only
              </p> */}
              <img src={map} className="h-100px w-auto drop-shadow-[0_0_40px_rgba(0,255,255,0.7)]" />
              
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-300">
                Join us for exciting events and workshops
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Innovation Summit",
                  date: "March 15, 2025",
                  time: "10:00 AM",
                },
                {
                  title: "Creative Workshop",
                  date: "March 22, 2025",
                  time: "2:00 PM",
                },
                {
                  title: "Tech Networking Event",
                  date: "April 5, 2025",
                  time: "6:00 PM",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300"
                >
                  <Calendar className="w-12 h-12 text-blue-300 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mb-2">{event.date}</p>
                  <p className="text-blue-300">{event.time}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section
          id="login"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
        >
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Log In
              </h2>
              <p className="text-xl text-gray-300">Access your account</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-0 ">
          {/* <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  question: "What services do you offer?",
                  answer:
                    "We provide comprehensive digital solutions including web development, design, consulting, and ongoing support for businesses of all sizes.",
                },
                {
                  question: "How can I get started?",
                  answer:
                    "Simply contact us through our contact form or visit our location. We'll schedule a consultation to discuss your needs and create a customized plan.",
                },
                {
                  question: "What is your typical project timeline?",
                  answer:
                    "Project timelines vary based on scope and complexity. Simple projects typically take 2-4 weeks, while more complex solutions may take 2-3 months.",
                },
                {
                  question: "Do you provide ongoing support?",
                  answer:
                    "Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions continue to perform optimally.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-black border border-blue-800/30 rounded-lg p-6"

                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div> */}
          <Faq/>
        </section>

        {/* Contact Section */}
        {/* <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-xl text-gray-300">
                Get in touch - we'd love to hear from you
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-300" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">hello@wavesite.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-300" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-300" />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-300">
                        123 Innovation Street, Tech District
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-lg p-8">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main> */}

      </main>

      {/* Footer */}
      <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-blue-800/30 py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <ContactFooter/>
      </footer>
      
    
    </div>
    
  );
}

export default App;
