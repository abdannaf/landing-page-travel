import { useState } from 'react';
import plane from '../assets/plane.png'
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";
import { SiExpedia } from "react-icons/si";
import { SiTrivago } from "react-icons/si";
import { TbBrandBooking } from "react-icons/tb";
import rajaAmpat from '../assets/rajaampat.jpg';
import bali from '../assets/bali-pagoda-sunrise-indonesia.jpg';
import labuanBajo from '../assets/labuanbajo.jpg';
import bintan from '../assets/bintan.jpg';
import bromo from '../assets/bromo.jpg';
import pulauKomodo from '../assets/pulaukomodo.jpg';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { IoLocationSharp } from "react-icons/io5";
import { LuTicket } from "react-icons/lu";
import { IoWallet } from "react-icons/io5";
import '../App.css';
import childFloater from "../assets/child-with-floater-by-seaside.jpg"
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoAirplane } from "react-icons/io5";

const populars = [
    {
        title: "Raja Ampat",
        image: rajaAmpat,
        location: "Papua Barat, Indonesia",
        rating: "5.0"
    },
    {
        title: "Bali",
        image: bali,
        location: "Bali, Indonesia",
        rating: "5.0"
    },
    {
        title: "Labuan Bajo",
        image: labuanBajo,
        location: "NTT, Indonesia",
        rating: "5.0"
    },
    {
        title: "Bintan",
        image: bintan,
        location: "Riau, Indonesia",
        rating: "5.0"
    },
    {
        title: "Bromo",
        image: bromo,
        location: "Jawa Timur, Indonesia",
        rating: "5.0"
    },
    {
        title: "Pulau Komodo",
        image: pulauKomodo,
        location: "NTT, Indonesia",
        rating: "5.0"
    }
];

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3); // Will adjust based on screen size

    // Adjust cards to show based on screen width
    const updateCardsToShow = () => {
        if (window.innerWidth < 640) {
            setCardsToShow(1);
        } else if (window.innerWidth < 1024) {
            setCardsToShow(2);
        } else {
            setCardsToShow(3);
        }
    };

    // Initialize and add resize listener
    useState(() => {
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + cardsToShow >= populars.length ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? populars.length - cardsToShow : prevIndex - 1
        );
    };

    const visibleDestinations = populars.slice(currentIndex, currentIndex + cardsToShow);

    return (
        <section className="relative font-[inter]">
            {/* HERO SECTION - Responsive */}
            <div className="min-h-[80dvh] md:min-h-[90dvh] bg-[url('https://images.unsplash.com/photo-1746982089516-e1174f1685d8?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center overflow-hidden flex mx-4 md:mx-8 lg:mx-[30px] rounded-3xl lg:rounded-[60px] relative">
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative z-10 flex items-center min-h-[80dvh] px-6 md:px-8 lg:px-[50px] w-full md:w-1/2">
                    <div className="max-w-2xl text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-black leading-tight">
                            Experience The Magic Of Flight!
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-black opacity-90">
                            Book your dream flight experience today and discover the world from a new perspective.
                        </p>
                        <button className="bg-blue-500 border-2 border-blue-500 hover:text-blue-500 text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer text-sm sm:text-base">
                            Book A Trip Now
                        </button>
                    </div>
                </div>

                <div className="hidden md:block absolute right-0 bottom-20 w-1/2 h-full flex items-center">
                    <img
                        src={plane}
                        alt="Airplane"
                        className="h-[80%] object-contain object-bottom ml-[150px] items-center w-full"
                    />
                </div>
            </div>

            {/* SOCIAL */}
            <div className="mx-4 md:mx-8 lg:mx-[100px] h-auto py-8 md:py-0 md:h-[30dvh] pt-[10px] flex flex-col md:flex-row items-center gap-4 md:gap-[40px] justify-between">
                <div className="border-[1px] w-full sm:w-[19rem] h-[70px] rounded-[100px] flex items-center border-[#dfdfdf] justify-center md:justify-start">
                    <p className="ml-4 md:ml-[30px] text-[#7c7c7c] text-[0.9rem]">Follow</p>
                    <div className='flex gap-2 sm:gap-[15px] ml-[20px]'>
                        {[FaTwitter, FaFacebook, FaInstagram, FaGithub].map((Icon, i) => (
                            <button key={i} className='rounded-[50%] border-[#c2c2c2] border-[1px] p-2 sm:p-[8px] cursor-pointer'>
                                <Icon className={i === 1 ? 'text-blue-500' : ''} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className='flex flex-wrap justify-center md:flex-nowrap items-center gap-2 sm:gap-4 md:gap-[40px]'>
                    {[
                        { icon: FaAirbnb, text: 'airbnb' },
                        { icon: TbBrandBooking, text: 'Booking.com' },
                        { icon: SiTrivago, text: 'trivago' },
                        { icon: SiExpedia, text: 'Expedia' }
                    ].map((item, i) => (
                        <div key={i} className='flex items-center gap-1 sm:gap-2'>
                            <item.icon className='text-3xl sm:text-[50px] text-[#b8b8b8]' />
                            <p className='text-lg sm:text-[25px] text-[#8f8f8f] font-[500]'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* HERO END */}

            {/* POPULAR DESTINATION */}
                        <div className="mx-4 md:mx-8 lg:mx-[100px] leading-[50px] mb-6 md:mb-10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Popular Destination</h1>
                    <p className="text-[#757575] text-sm sm:text-base">Unleash Your Wanderlust With Logos</p>
                </div>
                <div className="flex gap-3">
                    <button onClick={prevSlide} className="cursor-pointer hover:scale-110 transition-transform">
                        <IoIosArrowDropleftCircle className="text-4xl sm:text-5xl" />
                    </button>
                    <button onClick={nextSlide} className="cursor-pointer hover:scale-110 transition-transform">
                        <IoIosArrowDroprightCircle className="text-4xl sm:text-5xl" />
                    </button>
                </div>
            </div>

            <div className='h-auto sm:h-[70dvh] py-6 md:py-10 cursor-pointer overflow-x-auto px-4 md:px-[100px]'>
                <div className="flex gap-4 sm:gap-8 w-max sm:w-full mx-auto">
                    {visibleDestinations.map((popular, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl duration-300 w-[300px] sm:flex-1 sm:max-w-[360px] sm:min-w-[300px] cursor-pointer"
                        >
                            <img
                                src={popular.image}
                                alt={popular.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h2 className="text-xl font-semibold mb-3">{popular.title}</h2>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-sm sm:text-base">{popular.location}</span>
                                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs sm:text-sm flex items-center gap-1">
                                        <TiStarFullOutline /> {popular.rating}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* POPULAR DESTINATION END */}


            {/* JOURNEY  */}
            <div className="min-h-[90dvh] flex flex-col items-center justify-center shadow-lg bg-white py-8 sm:py-12 px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-16 max-w-2xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Journey To The Skies Made Simple!</h1>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        Traveling is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique Experiences.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto gap-4 sm:gap-6 md:gap-8 px-4 ">
                    {[
                        { icon: IoLocationSharp, title: "Book", subtitle: "A Ticket", bg: "gray-50" },
                        {
                            icon: LuTicket,
                            title: "Book",
                            subtitle: "A Ticket",
                            bg: "blue-600",
                            text: "white",
                            description: "Traveling is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique Experiences.",
                            button: true
                        },
                        { icon: IoWallet, title: "Pay & Start", subtitle: "Journey", bg: "gray-50" }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`bg-${item.bg} p-6 sm:p-8 md:p-12 rounded-3xl shadow-md flex-1 flex flex-col items-center text-center relative ${item.text ? 'text-' + item.text : ''} bg-blue-600`}
                        >
                            <div className={`absolute -top-6 sm:-top-8 bg-white p-3 sm:p-4 rounded-full shadow-lg`}>
                                <item.icon className={`text-2xl sm:text-3xl ${item.bg === 'blue-600' ? 'text-blue-600' : 'text-blue-600'}`} />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold mb-2 mt-6 sm:mt-8">{item.title}</h2>
                            <h3 className={`text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 ${item.bg === 'blue-600' ? '' : 'text-blue-600'}`}>
                                {item.subtitle}
                            </h3>
                            {item.description && (
                                <p className={`mb-4 sm:mb-8 ${item.text ? 'text-' + item.text : ''}`}>
                                    {item.description}
                                </p>
                            )}
                            {item.button && (
                                <button className="bg-white text-blue-600 px-4 sm:px-6 py-1 sm:py-2 rounded-full font-medium hover:bg-gray-100 transition cursor-pointer text-sm sm:text-base">
                                    LEARN MORE
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* JOURNEY END */}


            {/* BOOK A FLIGHT CTA */}
            <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                        <div className="space-y-4 sm:space-y-6 md:space-y-8 flex flex-col justify-center">
                            <div className="space-y-1 sm:space-y-2">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
                                    UNLEASH
                                </h1>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800">
                                    WANDERLUST WITH
                                </h2>
                                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                                    Logos
                                </h3>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
                                Traveling Is A Wonderful Way To Explore New Places, Learn About Different Cultures
                            </p>
                        </div>
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96 lg:h-auto">
                            <img
                                src={childFloater}
                                alt="Travel adventure"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        <div className="bg-gray-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 flex items-center justify-between">
                            <div className="space-y-1 sm:space-y-2">
                                <span className="inline-block px-2 sm:px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium">
                                    LIMITED OFFER
                                </span>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">20% OFF</h3>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-500 text-xs sm:text-sm md:text-base">On all flights this season</p>
                            </div>
                        </div>
                        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-24 sm:h-32 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 transition-all duration-500 group-hover:from-blue-700 group-hover:to-sky-600 cursor-pointer" />
                            <div className="absolute top-1/2 -translate-y-1/2 -left-8 group-hover:left-[calc(100%+32px)] transition-all duration-1000 ease-in-out ">
                                <IoAirplane className='text-white text-3xl' />
                            </div>
                            <button className="absolute inset-0 flex items-center justify-center space-x-2 overflow-hidden cursor-pointer">
                                <span className="text-white text-xl font-semibold transition-transform duration-300 group-hover:translate-x-2">
                                    Book A Flight Now
                                </span>
                                <IoArrowForwardOutline className="text-white text-xl transition-all duration-500 group-hover:translate-x-1 group-hover:scale-110" />
                            </button>
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-sparkle"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            animationDelay: `${i * 0.2}s`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BOOK A FLIGHT CTA */}
        </section >
    )
}

export default Hero;