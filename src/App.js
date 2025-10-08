import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-400">Anugu Thanishka Reddy</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="text-lg max-w-xl"
        >
          A <span className="text-blue-300">Computer Science Student</span> passionate about <span className="text-blue-300">Machine Learning</span>, 
          <span className="text-blue-300"> AI</span>, and building intelligent, interactive applications.
        </motion.p>

        <div className="flex gap-6 mt-6">
          <a href="https://github.com/thanishka220" target="_blank" rel="noreferrer">
            <FaGithub className="text-3xl hover:text-blue-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/anugu-thanishka-reddy/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-3xl hover:text-blue-400 transition" />
          </a>
          <a href="mailto:thanishkaanugu22@gmail.com">
            <FaEnvelope className="text-3xl hover:text-blue-400 transition" />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Yoga Posture Detection & Correction", desc: "Real-time web app using JavaScript, ml5.js, and p5.js to detect yoga poses via webcam and provide correction through speech feedback.", link: "https://github.com/thanishka220/Yoga-Pose-Correction-main.git" },
            { title: "Text Summarization (NLP)", desc: "Implemented NLP-based text summarization using Python & ML.", link: "https://github.com/thanishka220/Text-Summarization.git" },
            { title: "Flight Price Prediction", desc: "Applied 10 ML models to predict ticket prices.", link: "https://github.com/thanishka220/Flight-Price-Prediction.git" },
            { title: "Image Quality Analyzer", desc: "Built a Streamlit app to analyze image quality using deep learning models.", link: "https://image-quality-analyzergit.streamlit.app/" },
          ].map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">View Project →</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-xl mb-2">Programming</h3>
            <p>Python, C, SQL, HTML, CSS, JavaScript</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-xl mb-2">Technologies</h3>
            <p>TensorFlow, Scikit-learn, XGBoost, Flask</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-xl mb-2">Other</h3>
            <p>Data Visualization, Machine Learning, Critical Thinking</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-4">Open to opportunities in AI, Data Science, and Software Development.</p>
        <a 
          href="mailto:thanishkaanugu22@gmail.com" 
          className="px-6 py-3 bg-blue-500 rounded-full text-white font-medium hover:bg-blue-600 transition"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}
