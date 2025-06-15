import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-[#0c0c0c] text-white">
      <Head>
        <title>Grand Horizon Hotel</title>
        <meta
          name="description"
          content="Welcome to Grand Horizon – A luxurious stay experience"
        />
      </Head>

      <header className="bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-300 text-black py-6 px-10 flex justify-between items-center shadow-xl sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 via-yellow-200 to-black bg-clip-text text-transparent">
          Grand Horizon
        </h1>
        <nav className="space-x-6 text-lg font-semibold">
          <a href="#about" className="hover:text-black transition-colors">
            About
          </a>
          <a href="#rooms" className="hover:text-black transition-colors">
            Rooms
          </a>
          <a href="#gallery" className="hover:text-black transition-colors">
            Gallery
          </a>
          <a href="#contact" className="hover:text-black transition-colors">
            Contact
          </a>
        </nav>
      </header>

      <section
        className="bg-cover bg-center h-[80vh] flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="bg-black/70 p-8 rounded-xl border-2 border-yellow-500 shadow-2xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-4 text-yellow-300">
            Experience Luxury
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl mb-6 text-yellow-100">
            Your perfect vacation starts here
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}>
            <Button className="text-lg px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              Book Now
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 px-8 md:px-20 bg-[#1a1a1a]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl font-extrabold mb-6 text-center text-yellow-300">
            About Us
          </h2>
          <p className="text-yellow-100 max-w-3xl mx-auto text-center text-lg">
            Grand Horizon is a premium hotel offering world-class amenities,
            exquisite cuisine, and a serene environment for leisure and business
            travelers. Our mission is to redefine hospitality by combining
            elegance, comfort, and top-tier service under one luxurious roof.
          </p>
        </motion.div>
      </section>

      <section id="rooms" className="py-20 px-8 md:px-20 bg-[#141414]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-12 text-center text-yellow-400">
          Our Rooms
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Deluxe Room", "Executive Suite", "Presidential Suite"].map(
            (room, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                <Card className="overflow-hidden border border-yellow-500 bg-[#1e1e1e] text-white">
                  <Image
                    src={`/room${idx + 1}.jpg`}
                    alt={room}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-bold text-2xl mb-2 text-yellow-300">
                      {room}
                    </h3>
                    <p className="text-yellow-100">
                      {room === "Deluxe Room" &&
                        "A modern space for comfort and relaxation with scenic views."}
                      {room === "Executive Suite" &&
                        "Ideal for business travelers with a workspace and lounge area."}
                      {room === "Presidential Suite" &&
                        "Luxury redefined with a private balcony, jacuzzi, and 24/7 butler service."}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </div>
      </section>

      <section id="gallery" className="py-20 px-8 md:px-20 bg-[#1c1c1c]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-8 text-center text-yellow-400">
          Gallery
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}>
              <Image
                src={`/gallery${idx + 1}.jpg`}
                alt={`Gallery ${idx + 1}`}
                width={300}
                height={200}
                className="rounded-lg w-full h-auto object-cover shadow-lg border-2 border-yellow-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-8 md:px-20 bg-[#121212] text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-4 text-yellow-300">
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 text-lg text-yellow-100">
          Have questions or want to make a reservation? Reach out now!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-2 text-lg">
          <p>
            Email:{" "}
            <span className="text-yellow-400">
              reservations@grandhorizon.com
            </span>
          </p>
          <p>
            Phone: <span className="text-yellow-400">+91 98765 43210</span>
          </p>
          <p>
            Address:{" "}
            <span className="text-yellow-400">
              123 Luxury Ave, Coimbatore, India
            </span>
          </p>
        </motion.div>
      </section>

      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white text-center py-6">
        &copy; {new Date().getFullYear()} Grand Horizon Hotel. All rights
        reserved.
      </footer>
    </div>
  );
}
