
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-tired text-gray-800 font-sans py-10 px-4" dir="rtl">
      {/* العنوان */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-extrabold text-main mb-3">تواصل معنا</h1>
        <p className="text-lg text-sec">نسعد بخدمتك في أي وقت</p>
      </motion.section>

      {/* معلومات التواصل */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-10 text-center sm:text-start">
        {/* بيانات التواصل */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* رقم الهاتف */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-sec mb-2">📞 رقم الهاتف</h2>
            <p className="text-lg text-sec">01020669592</p>
          </motion.div>

          {/* العنوان */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-sec mb-2 flex justify-center sm:justify-start">
              <CiLocationOn className="m-1" /> العنوان
            </h2>
            <p className="text-sec">
              108 صقر قريش مساكن شيراتون، بجوار مسجد الفاروق، شيراتون المطار، قسم النزهة Cairo, Egypt 4471207
            </p>
          </motion.div>

          {/* السوشيال ميديا */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-sec mb-2">🌐 تابعنا على السوشيال</h2>
            <div className="flex gap-4 text-main text-2xl justify-center sm:justify-start">
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="hover:text-[#0866FF]"
                href="https://www.facebook.com/shrimpzone1/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="hover:text-[#fd0a83]"
                href="https://www.instagram.com/shrimpzone1/?hl=ar"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="hover:text-[#25d366]"
                href="https://wa.me/01020669592"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>

          {/* زر واتساب مع نبض */}
          <motion.a
            href="https://wa.me/01020669592"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-main text-sec px-6 py-3 rounded-full font-bold text-lg shadow hover:bg-orange-700 transition-all"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 2,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            كلمنا على واتساب
          </motion.a>
        </motion.div>

        {/* خريطة Google */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg h-72 sm:h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            title="موقعنا على الخريطة"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.2518128844065!2d31.235711!3d30.044420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60e1dbbbd%3A0xd59c872dcad1494b!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1623073526320!5m2!1sen!2seg"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
}


