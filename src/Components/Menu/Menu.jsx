
import React from 'react';
import { motion } from 'framer-motion';
import img1 from "../../assets/490831652_708829838383253_5844518814560447124_n.jpg";
import img2 from "../../assets/511277872_764291726170397_1906358253066482358_n.jpg";
import img3 from "../../assets/512502015_764291766170393_6518838663240917741_n.jpg";

export default function Menu() {
  const menuPages = [img1, img2, img3];

  return (
    <div className="bg-tired text-sec font-sans py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        <motion.h1
          className="text-center text-4xl font-extrabold text-main mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          المنيو الكامل
        </motion.h1>

        {menuPages.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <a href={img} target="_blank" rel="noreferrer">
              <img
                src={img}
                alt={`صفحة منيو ${index + 1}`}
                className="w-full h-auto hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

