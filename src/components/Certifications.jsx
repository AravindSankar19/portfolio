import { motion } from "framer-motion";

const certifications = [
  "IELTS – Overall 7.5"
];

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="py-20 px-6 max-w-4xl mx-auto relative z-10 bg-black bg-opacity-40 backdrop-blur-md rounded-2xl my-10 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Certifications</h2>
      <ul className="list-disc list-inside text-gray-200 space-y-2 text-center">
        {certifications.map((cert, idx) => (
          <li key={idx}>{cert}</li>
        ))}
      </ul>
    </motion.section>
  );
}
