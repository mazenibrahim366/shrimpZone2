
import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/484544568_684662484133322_6420662040429805829_n.jpg";

export default function About() {
  let commentData = [
    {
      name: "أحمد عبد الرحمن",
      comment: "أفضل مطعم جمبري جربته في حياتي! الطعم خرافي والتغليف ممتاز.",
    },
    {
      name: "سارة محمود",
      comment: "طلبت منهم أكثر من مرة، وكل مرة الطعم ثابت ومميز. أنصح به جدًا!",
    },
    {
      name: "محمد كمال",
      comment: "توصيل سريع، والوجبة سخنة ومليانة نكهات. خدمة ممتازة.",
    },
    {
      name: "ياسمين سامي",
      comment: "أول مرة أطلب وأكيد مش آخر مرة. الجمبري متبل صح والرز تحفة.",
    },
    {
      name: "كريم الحسيني",
      comment: "الصوص بتاع الجمبري خرافي، وطريقة التقديم مبتكرة وجذابة.",
    },
    {
      name: "ليلى أحمد",
      comment: "الديكور حلو جدًا لو بتاكل في المكان، والأكل طازة وبيوصل بسرعة.",
    },
  ];

  return (
    <div className="bg-tired text-sec font-sans py-5" >
      {/* عنوان الصفحة */}
      <motion.section
        className="text-center py-10 space-y-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-main">من نحن</h1>
        <p className="text-lg text-sec">
          اكتشف قصة Shrimp Zone ورحلتنا في عالم المأكولات البحرية
        </p>
      </motion.section>

      {/* المحتوى الرئيسي */}
      <div className="max-w-5xl mx-auto space-y-12 px-6">
        {/* قصة المطعم */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-sec mb-3">قصة المطعم</h2>
          <p className="leading-loose">
            تأسس Shrimp Zone في عام 2018 بهدف تقديم أشهى وجبات الجمبري والمأكولات البحرية بتتبيلة فريدة ومذاق لا يُنسى.
            بدأنا من مطبخ صغير وشغف كبير، وتحولنا لمكان يثق فيه الزبائن ويعشقون نكهاته.
          </p>
          <img
            src={img1}
            alt="قصة المطعم"
            className="w-1/2 rounded-lg mt-4 shadow-md m-auto"
          />
        </motion.section>

        {/* ماذا يقدم المطعم */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-sec mb-3">ماذا يقدم المطعم</h2>
          <p className="leading-loose">
            مطعم "شرمب زون" هو وجهة مميزة لعشاق المأكولات البحرية الطازجة والمميزة، حيث يقدم تجربة طعام فريدة تجمع بين النكهات البحرية الأصيلة وأسلوب التحضير العصري...
          </p>
        </motion.section>

        {/* الرؤية والمهمة */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-sec mb-3">الرؤية والمهمة</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>تقديم تجربة بحرية أصلية باستخدام مكونات طازجة يوميًا.</li>
            <li>توسيع فروعنا داخل مصر وخارجها خلال السنوات القادمة.</li>
            <li>الحفاظ على جودة الخدمة والاهتمام بالتفاصيل في كل وجبة.</li>
          </ul>
        </motion.section>

        {/* تعليقات الزبائن */}
        <motion.section
          className="bg-sec text-main p-6 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-6">آراء الزبائن</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {commentData.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white border-l-4 border-main p-4 rounded shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * i }}
                viewport={{ once: true }}
              >
                <p className="italic text-gray-700 mb-2">"{item.comment}"</p>
                <h4 className="text-right text-tired font-semibold">- {item.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
