import { useEffect, useMemo, useState } from "react";
import { FaAirbnb, FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoAirplane, IoArrowForwardOutline, IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { LuCalendarDays, LuCheck, LuClock3, LuMapPin, LuSearch, LuTicket } from "react-icons/lu";
import { SiExpedia, SiTrivago } from "react-icons/si";
import { TbBrandBooking } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";
import bali from "../assets/bali-pagoda-sunrise-indonesia.jpg";
import bintan from "../assets/bintan.jpg";
import bromo from "../assets/bromo.jpg";
import childFloater from "../assets/child-with-floater-by-seaside.jpg";
import heroBg from "../assets/fantastic-blue-sky.jpg";
import labuanBajo from "../assets/labuanbajo.jpg";
import plane from "../assets/plane.png";
import pulauKomodo from "../assets/pulaukomodo.jpg";
import rajaAmpat from "../assets/rajaampat.jpg";
import "../App.css";

const destinations = [
  {
    title: "Raja Ampat",
    image: rajaAmpat,
    location: "Papua Barat",
    rating: "5.0",
    price: "Rp 4,8 jt",
    duration: "4D3N",
    vibe: "Island hopping",
  },
  {
    title: "Bali",
    image: bali,
    location: "Bali",
    rating: "4.9",
    price: "Rp 2,6 jt",
    duration: "3D2N",
    vibe: "Culture escape",
  },
  {
    title: "Labuan Bajo",
    image: labuanBajo,
    location: "Nusa Tenggara Timur",
    rating: "4.9",
    price: "Rp 3,9 jt",
    duration: "4D3N",
    vibe: "Sunset sailing",
  },
  {
    title: "Bintan",
    image: bintan,
    location: "Kepulauan Riau",
    rating: "4.8",
    price: "Rp 2,2 jt",
    duration: "3D2N",
    vibe: "Resort weekend",
  },
  {
    title: "Bromo",
    image: bromo,
    location: "Jawa Timur",
    rating: "4.9",
    price: "Rp 1,7 jt",
    duration: "2D1N",
    vibe: "Sunrise trail",
  },
  {
    title: "Pulau Komodo",
    image: pulauKomodo,
    location: "Nusa Tenggara Timur",
    rating: "4.8",
    price: "Rp 4,3 jt",
    duration: "4D3N",
    vibe: "Wild coast",
  },
];

const steps = [
  {
    icon: IoLocationSharp,
    title: "Pilih Destinasi",
    text: "Bandingkan rute, suasana, dan estimasi budget dalam satu tampilan.",
  },
  {
    icon: LuTicket,
    title: "Atur Paket",
    text: "Tentukan tanggal, durasi, dan preferensi trip yang paling cocok.",
    featured: true,
  },
  {
    icon: IoWallet,
    title: "Bayar Aman",
    text: "Checkout cepat dengan ringkasan biaya yang jelas sebelum berangkat.",
  },
];

const services = [
  {
    name: "City Tour Half Day",
    price: "Rp 350.000",
    duration: "4 jam",
    schedule: "Senin - Jumat, 09.00 / 14.00",
    features: ["Driver lokal", "2 destinasi", "Free dokumentasi basic"],
  },
  {
    name: "Private Trip Full Day",
    price: "Rp 850.000",
    duration: "8 jam",
    schedule: "Setiap hari, 08.00",
    features: ["Itinerary fleksibel", "Transport private", "Rekomendasi kuliner"],
    highlighted: true,
  },
  {
    name: "Custom Travel Plan",
    price: "Mulai Rp 1.500.000",
    duration: "2-3 hari",
    schedule: "By request",
    features: ["Konsultasi rute", "Booking partner lokal", "Support ringan 3 bulan"],
  },
];

const scheduleSlots = ["08.00", "10.00", "14.00", "16.00"];

const faqs = [
  {
    question: "Apakah harga sudah termasuk transport?",
    answer: "Untuk paket private trip sudah termasuk transport lokal. Paket lain bisa menyesuaikan kebutuhan dan area penjemputan.",
  },
  {
    question: "Bagaimana cara konfirmasi jadwal?",
    answer: "Isi form booking, lalu klik tombol WhatsApp. Pesan otomatis akan berisi layanan, tanggal, jam, dan jumlah peserta.",
  },
  {
    question: "Apakah bisa request itinerary sendiri?",
    answer: "Bisa. Pilih Custom Travel Plan dan tulis catatan khusus agar tim bisa menyiapkan rekomendasi yang lebih pas.",
  },
  {
    question: "Support ringan 3 bulan mencakup apa?",
    answer: "Support dummy ini bisa berupa update kecil konten, penyesuaian informasi layanan, dan bantuan ringan setelah halaman dipakai.",
  },
];

const estimates = [
  {
    type: "Trip Hemat",
    range: "Rp 350 rb - Rp 750 rb",
    details: "Cocok untuk city tour singkat, 1-3 peserta, dan destinasi dalam kota.",
  },
  {
    type: "Private Day Trip",
    range: "Rp 850 rb - Rp 1,8 jt",
    details: "Untuk perjalanan satu hari penuh dengan transport private dan itinerary fleksibel.",
    highlighted: true,
  },
  {
    type: "Custom Group",
    range: "Mulai Rp 2,5 jt",
    details: "Untuk rombongan, multi-day trip, atau kebutuhan khusus seperti pickup bandara.",
  },
];

const testimonials = [
  {
    name: "Nadia Putri",
    role: "Owner jasa tour lokal",
    quote: "Flow booking-nya jadi kelihatan rapi. Klien tinggal pilih layanan, isi tanggal, lalu pesan WhatsApp sudah otomatis lengkap.",
    rating: "5.0",
  },
  {
    name: "Raka Mahendra",
    role: "Travel planner freelance",
    quote: "Section harga dan jadwal membantu banget untuk menjelaskan paket tanpa harus bolak-balik chat panjang.",
    rating: "4.9",
  },
  {
    name: "Sinta Amelia",
    role: "Customer dummy",
    quote: "Tampilannya terasa profesional dan mudah dipahami. FAQ serta lokasi bikin halaman terlihat lebih terpercaya.",
    rating: "5.0",
  },
];

function getCardsToShow() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 700) return 1;
  if (window.innerWidth < 1100) return 2;
  return 3;
}

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow);
  const [activeDestination, setActiveDestination] = useState(destinations[0]);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    service: services[1].name,
    date: "",
    time: scheduleSlots[0],
    guests: "2",
    note: "",
  });

  useEffect(() => {
    const updateCardsToShow = () => setCardsToShow(getCardsToShow());

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, destinations.length - cardsToShow));
  }, [cardsToShow]);

  const visibleDestinations = useMemo(() => {
    const end = currentIndex + cardsToShow;
    return destinations.slice(currentIndex, end);
  }, [cardsToShow, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((index) => (index + cardsToShow >= destinations.length ? 0 : index + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((index) => (index === 0 ? destinations.length - cardsToShow : index - 1));
  };

  const selectedService = services.find((service) => service.name === bookingForm.service) || services[0];
  const whatsappMessage = [
    "Halo WebTravel, saya ingin booking layanan.",
    `Nama: ${bookingForm.name || "-"}`,
    `No. HP: ${bookingForm.phone || "-"}`,
    `Layanan: ${bookingForm.service}`,
    `Tanggal: ${bookingForm.date || "-"}`,
    `Jam: ${bookingForm.time}`,
    `Jumlah peserta: ${bookingForm.guests}`,
    `Catatan: ${bookingForm.note || "-"}`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`;

  const updateBookingField = (field, value) => {
    setBookingForm((form) => ({ ...form, [field]: value }));
  };

  return (
    <main className="font-[Inter] text-slate-950">
      <section
        id="about"
        className="relative mx-4 overflow-hidden rounded-[28px] bg-slate-950 md:mx-8 lg:mx-[30px] lg:rounded-[42px]"
      >
        <img
          src={heroBg}
          alt="Blue sky above tropical water"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/78 to-sky-200/20" />
        <div className="absolute inset-x-8 bottom-0 h-24 rounded-t-full bg-white/30 blur-3xl" />

        <div className="relative grid min-h-[82dvh] items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-14">
          <div className="max-w-2xl animate-hero-copy">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
              <IoAirplane />
              Booking jasa lokal lebih rapi
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.02] text-slate-950 sm:text-5xl lg:text-7xl">
              Booking trip lokal yang rapi, cepat, dan siap lewat WhatsApp.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
              Tampilkan layanan, harga, jadwal, form booking, FAQ, dan lokasi dalam satu halaman yang terasa siap dipakai.
            </p>

            <div className="mt-8 grid gap-3 rounded-2xl border border-white/70 bg-white/85 p-3 shadow-xl shadow-sky-950/10 backdrop-blur md:grid-cols-[1fr_1fr_auto]">
              <label className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                <LuSearch className="text-sky-600" />
                <span>
                  <span className="block text-xs font-semibold uppercase text-slate-500">Destination</span>
                  <span className="text-sm font-bold">Labuan Bajo</span>
                </span>
              </label>
              <label className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                <LuCalendarDays className="text-sky-600" />
                <span>
                  <span className="block text-xs font-semibold uppercase text-slate-500">Schedule</span>
                  <span className="text-sm font-bold">August 2026</span>
                </span>
              </label>
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-sky-600"
              >
                Booking Sekarang
                <IoArrowForwardOutline />
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[560px] lg:block">
            <img
              src={plane}
              alt="Airplane"
              className="absolute right-0 top-10 z-10 w-[92%] animate-plane-float drop-shadow-2xl"
            />
            <div className="absolute bottom-16 left-6 z-20 w-72 rounded-2xl border border-white/70 bg-white/88 p-4 shadow-2xl backdrop-blur">
              <p className="text-xs font-bold uppercase text-slate-500">Trending now</p>
              <div className="mt-3 flex items-center gap-3">
                <img src={activeDestination.image} alt="" className="h-16 w-16 rounded-xl object-cover" />
                <div>
                  <h2 className="font-bold">{activeDestination.title}</h2>
                  <p className="text-sm text-slate-600">{activeDestination.vibe}</p>
                  <p className="mt-1 text-sm font-bold text-sky-700">{activeDestination.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-4 flex flex-col items-center justify-between gap-6 py-8 md:mx-8 md:flex-row lg:mx-[100px]">
        <div className="flex w-full max-w-sm items-center justify-between rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">
          <span className="text-sm font-semibold text-slate-500">Follow</span>
          {[FaTwitter, FaFacebook, FaInstagram, FaGithub].map((Icon, index) => (
            <button
              key={index}
              className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600"
              aria-label="Social link"
            >
              <Icon />
            </button>
          ))}
        </div>

        <div className="grid w-full grid-cols-2 items-center gap-4 text-slate-400 sm:grid-cols-4 md:w-auto md:gap-8">
          {[
            { icon: FaAirbnb, text: "airbnb" },
            { icon: TbBrandBooking, text: "Booking" },
            { icon: SiTrivago, text: "trivago" },
            { icon: SiExpedia, text: "Expedia" },
          ].map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2 text-lg font-bold">
              <item.icon className="text-3xl" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="tour" className="px-4 py-12 md:px-8 lg:px-[100px]">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Popular destination</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Paket yang sering dilirik</h2>
          </div>
          <div className="flex gap-3">
            <button onClick={prevSlide} className="text-5xl text-slate-900 transition hover:-translate-x-1 hover:text-sky-600" aria-label="Previous destinations">
              <IoIosArrowDropleftCircle />
            </button>
            <button onClick={nextSlide} className="text-5xl text-slate-900 transition hover:translate-x-1 hover:text-sky-600" aria-label="Next destinations">
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleDestinations.map((destination) => (
            <article
              key={destination.title}
              onMouseEnter={() => setActiveDestination(destination)}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-2xl hover:shadow-sky-950/10"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-slate-900">
                  {destination.duration}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="flex items-center gap-1 text-sm font-semibold">
                    <IoLocationSharp />
                    {destination.location}
                  </p>
                  <h3 className="mt-1 text-2xl font-black">{destination.title}</h3>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="text-sm text-slate-500">{destination.vibe}</p>
                  <p className="mt-1 text-xl font-black text-slate-950">{destination.price}</p>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">
                  <TiStarFullOutline />
                  {destination.rating}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="package" className="bg-slate-50 px-4 py-16 md:px-8 lg:px-[100px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Simple journey</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">Dari ide liburan ke checkout dalam tiga langkah.</h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              className={`rounded-2xl p-7 shadow-sm ${
                step.featured ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-950"
              }`}
            >
              <div className={`mb-8 inline-flex rounded-2xl p-4 ${step.featured ? "bg-sky-500" : "bg-sky-50 text-sky-600"}`}>
                <step.icon className="text-3xl" />
              </div>
              <h3 className="text-2xl font-black">{step.title}</h3>
              <p className={`mt-3 leading-7 ${step.featured ? "text-slate-200" : "text-slate-600"}`}>{step.text}</p>
              {step.featured && (
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-100">
                  Learn more
                  <IoArrowForwardOutline />
                </button>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="px-4 py-16 md:px-8 lg:px-[100px]">
        <div className="mb-9 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Layanan & harga</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Paket jasa lokal yang mudah dipilih.</h2>
          </div>
          
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className={`rounded-2xl p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                service.highlighted ? "bg-slate-950 text-white" : "border border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black">{service.name}</h3>
                  <p className={`mt-2 text-sm ${service.highlighted ? "text-slate-300" : "text-slate-500"}`}>
                    {service.duration}
                  </p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${service.highlighted ? "bg-sky-500 text-white" : "bg-sky-50 text-sky-700"}`}>
                  Populer
                </span>
              </div>
              <p className={`mt-7 text-3xl font-black ${service.highlighted ? "text-sky-200" : "text-slate-950"}`}>
                {service.price}
              </p>
              <p className={`mt-3 flex items-center gap-2 text-sm ${service.highlighted ? "text-slate-300" : "text-slate-600"}`}>
                <IoTimeOutline className="text-lg" />
                {service.schedule}
              </p>
              <ul className="mt-7 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-3 text-sm ${service.highlighted ? "text-slate-200" : "text-slate-600"}`}>
                    <LuCheck className="mt-0.5 shrink-0 text-sky-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-xl px-5 py-3 text-sm font-bold transition ${
                  service.highlighted ? "bg-white text-slate-950 hover:bg-sky-100" : "bg-slate-950 text-white hover:bg-sky-600"
                }`}
                onClick={() => updateBookingField("service", service.name)}
              >
                Pilih layanan ini
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="booking" className="bg-slate-50 px-4 py-16 md:px-8 lg:px-[100px]">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[28px] bg-slate-950 p-6 text-white shadow-2xl lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-300">Form booking</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Pesan otomatis ke WhatsApp.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Setelah form diisi, tombol WhatsApp akan membuka chat dengan format pesan yang sudah tersusun rapi.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-slate-300">Layanan terpilih</p>
              <h3 className="mt-1 text-2xl font-black">{selectedService.name}</h3>
              <p className="mt-2 text-sky-200">{selectedService.price}</p>
              <p className="mt-1 text-sm text-slate-300">{selectedService.schedule}</p>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <LuCheck className="text-sky-300" />
                CTA WhatsApp dengan pesan otomatis
              </p>
              <p className="flex items-center gap-2">
                <LuCheck className="text-sky-300" />
                Support ringan 3 bulan
              </p>
              <p className="flex items-center gap-2">
                <LuCheck className="text-sky-300" />
                Siap deploy Cloudflare Pages + SSL
              </p>
            </div>
          </aside>

          <form className="grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2 lg:p-8">
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-700">Nama</span>
              <input
                value={bookingForm.name}
                onChange={(event) => updateBookingField("name", event.target.value)}
                className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                placeholder="Nama pemesan"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-700">Nomor HP</span>
              <input
                value={bookingForm.phone}
                onChange={(event) => updateBookingField("phone", event.target.value)}
                className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                placeholder="08xxxxxxxxxx"
              />
            </label>
            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-bold text-slate-700">Pilihan layanan</span>
              <select
                value={bookingForm.service}
                onChange={(event) => updateBookingField("service", event.target.value)}
                className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              >
                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} - {service.price}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-700">Tanggal</span>
              <input
                type="date"
                value={bookingForm.date}
                onChange={(event) => updateBookingField("date", event.target.value)}
                className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-700">Jam</span>
              <select
                value={bookingForm.time}
                onChange={(event) => updateBookingField("time", event.target.value)}
                className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              >
                {scheduleSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-700">Jumlah peserta</span>
              <input
                type="number"
                min="1"
                value={bookingForm.guests}
                onChange={(event) => updateBookingField("guests", event.target.value)}
                className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-700">Ketersediaan</span>
              <div className="flex h-[50px] items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-bold text-emerald-700">
                <LuClock3 />
                Slot tersedia
              </div>
            </label>
            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-bold text-slate-700">Catatan</span>
              <textarea
                value={bookingForm.note}
                onChange={(event) => updateBookingField("note", event.target.value)}
                className="min-h-28 rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                placeholder="Contoh: jemput di hotel, request destinasi, alergi makanan, dll."
              />
            </label>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:col-span-2"
            >
              <FaWhatsapp className="text-xl" />
              Kirim Booking via WhatsApp
            </a>
          </form>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 lg:px-[100px]">
        <div className="mb-9 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Estimasi biaya</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Gambaran budget sebelum booking.</h2>
          </div>
          
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {estimates.map((estimate) => (
            <article
              key={estimate.type}
              className={`rounded-2xl p-6 shadow-sm ${
                estimate.highlighted ? "bg-sky-500 text-white" : "border border-slate-200 bg-white text-slate-950"
              }`}
            >
              <p className={`text-sm font-bold uppercase tracking-[0.18em] ${estimate.highlighted ? "text-sky-100" : "text-sky-600"}`}>
                {estimate.type}
              </p>
              <h3 className="mt-4 text-3xl font-black">{estimate.range}</h3>
              <p className={`mt-4 leading-7 ${estimate.highlighted ? "text-sky-50" : "text-slate-600"}`}>
                {estimate.details}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="px-4 py-16 md:px-8 lg:px-[100px]">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">FAQ</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Pertanyaan yang sering muncul.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" open={index === 0}>
                <summary className="cursor-pointer list-none text-lg font-black text-slate-950">
                  {faq.question}
                </summary>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white md:px-8 lg:px-[100px]">
        <div className="mb-9 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-300">Testimonial</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Cerita dari pengguna.</h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex items-center gap-1 rounded-full bg-amber-300 px-3 py-1 text-sm font-black text-amber-950">
                  <TiStarFullOutline />
                  {testimonial.rating}
                </span>
              </div>
              <p className="leading-7 text-slate-100">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <h3 className="font-black">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-slate-300">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="location" className="bg-slate-50 px-4 py-16 md:px-8 lg:px-[100px]">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Lokasi</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Kantor WebTravel.</h2>
          </div>
          <p className="flex max-w-xl items-center gap-2 leading-7 text-slate-600">
            <LuMapPin className="shrink-0 text-sky-600" />
            Jakarta Selatan, Indonesia.
          </p>
        </div>
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <iframe
            title="Lokasi WebTravel"
            src="https://www.google.com/maps?q=Jakarta%20Selatan%2C%20Indonesia&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section id="contact" className="px-4 py-16 md:px-8 lg:px-[100px]">
        <div className="grid overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl lg:grid-cols-[1fr_0.9fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <span className="inline-flex rounded-full bg-sky-400/15 px-4 py-2 text-sm font-bold text-sky-200">
              Limited dummy offer
            </span>
            <h2 className="mt-6 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
              Siapkan halaman booking yang terasa siap dipakai.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Section ini dibuat seperti CTA nyata: ada promo, visual, dan tombol interaktif supaya proyek dummy terlihat matang.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-sm text-slate-300">Season discount</p>
                <p className="mt-1 text-3xl font-black text-sky-200">20% OFF</p>
              </div>
              <a
                href="#about"
                className="group relative flex min-h-28 items-center justify-center overflow-hidden rounded-2xl bg-sky-500 px-5 font-bold text-white transition hover:bg-sky-400"
              >
                <IoAirplane className="absolute left-5 text-2xl transition duration-700 group-hover:left-[calc(100%-2.5rem)]" />
                <span className="inline-flex items-center gap-2">
                  Book a Flight Now
                  <IoArrowForwardOutline />
                </span>
              </a>
            </div>
          </div>
          <div className="relative min-h-80">
            <img src={childFloater} alt="Beach travel moment" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent lg:bg-gradient-to-r" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
