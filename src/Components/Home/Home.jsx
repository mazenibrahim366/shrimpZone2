
import React from "react";
import { motion } from "framer-motion";
import imgHome from "../../assets/2شرمب-زون.jpg";
import img1 from "../../assets/490516554_710807498185487_2259485512732871367_n.jpg";
import img2 from "../../assets/491156639_713283947937842_1095303228406550896_n.jpg";
import img3 from "../../assets/492832968_719335073999396_1957682638406287991_n.jpg";
import { NavLink } from "react-router-dom";

export default function Home() {
  const meals = [
    {
      img: img2,
      title: "صنية بتر فلاي",
      desc: "خروجه الجمعه ماتحلاش غير بصنية بتر فلاي من شرمب زون",
    },
    {
      img: img3,
      title: "صنية احنا صُحاب بلادنا",
      desc: "صنية مليانه خيرات البحر من شرمب زون",
    },
    {
      img: img1,
      title: "صنية الفياجرا",
      desc: "جرب صنية الفياجرا من شرمب زون وخليك في المضمون",
    },
  ];

  return (
    <div className="bg-tired font-sans text-gray-800">
      <section
        className="w-full min-h-[100vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imgHome})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            className="text-sec text-4xl md:text-6xl font-extrabold text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            مرحبًا بكم في Shrimp Zone 🍤
          </motion.h1>
        </div>
      </section>


      <div className="container mx-auto text-center px-4">
        <motion.section
          className="my-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/01020669592"
            className="bg-main text-sec py-3 px-8 rounded-full text-xl font-bold shadow hover:bg-orange-700 transition-all duration-300"
          >
            اطلب دلوقتي عبر واتساب
          </a>
        </motion.section>


        <section className="max-w-6xl mx-auto p-6">
          <motion.h2
            className="text-3xl font-bold text-main mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            أشهر الوجبات
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map((meal, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-md rounded-xl p-4 hover:scale-105 transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={meal.img}
                  alt={meal.title}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-xl font-bold text-tired my-3">{meal.title}</h3>
                <p className="text-gray-600">{meal.desc}</p>
              </motion.div>
            ))}
          </div>

   
          <motion.section
            className="text-center my-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <NavLink
              to="/menu"
              className="inline-block bg-main text-sec py-3 px-8 rounded-full text-xl font-bold shadow-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300"
            >
              🍤 روح على المنيو
            </NavLink>
          </motion.section>
        </section>
      </div>
    </div>
  );
}
