

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from './assets/Avin..png'; // Ensure you have this image
import heroImage from './assets/icon.webp'; // Replace with your image file
// import resumePDF from './assets/resume.pdf';

// Updated icon imports
import {
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiMysql,
  DiPython,
  DiDocker,
} from 'react-icons/di';
import { SiNextdotjs, SiExpress, SiTensorflow } from 'react-icons/si';

// Import the TechnologyCard component
import TechnologyCard from './components/TechnologyCard';



const App = () => {
  const technologies = [
    { name: 'React', icon: <DiReact />, color: 'text-[#61DAFB]' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
    { name: 'Express.js', icon: <SiExpress />, color: 'text-white' },
    { name: 'Node.js', icon: <DiNodejsSmall />, color: 'text-[#339933]' },
    { name: 'MongoDB', icon: <DiMongodb />, color: 'text-[#47A248]' },
    { name: 'MySQL', icon: <DiMysql />, color: 'text-[#4479A1]' },
    { name: 'Python', icon: <DiPython />, color: 'text-[#3776AB]' },
    { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-[#FF6F00]' },
    { name: 'Docker', icon: <DiDocker />, color: 'text-[#2496ED]' },
  ];

  const experience = [
    {
      period: 'Jun 2024 - Aug 2024',
      role: 'Software Engineer Intern',
      company: 'Pratinik Infotech Pvt. Limited',
      achievements: [
        'Developed ML model for metal casting defect detection with 99.58% accuracy using CNNs (VGG16, ResNet50)',
        'Optimized training processes by integrating SGD and Adam optimizers, reducing model convergence time by 15%',
        'Applied data augmentation techniques to address class imbalance, improving model robustness by 20%',
      ],
    },
    {
      period: 'Jun 2023 - Dec 2023',
      role: 'Web Developer Intern',
      company: 'IndusFly',
      achievements: [
        'Designed and implemented backend architecture for flight reservation system using Express.js, maximizing data processing, reducing response time by 30%',
        'Implemented JWT-based authentication to enhance user security, resulting in a 25% reduction in unauthorized access incidents',
        'Built responsive UI with React.js, automating PDF invoice generation after payments for enhanced user experience',
      ],
    },
  ];

  const projects = [
    {
      title: 'Inquire PDF',
      tech: 'React.js, FastAPI, Python, Hugging Face, SQLite',
      description: [
        'Built a full-stack platform with React.js frontend and FastAPI backend, enabling PDF uploads and real-time Q&A.',
        'Implemented semantic search with FAISS, reducing retrieval times by 35%.',
        'Optimized backend with SQLite to handle 1,000+ queries and concurrent sessions efficiently.',
        'Executed automated test scripts and incorporated detailed logging, achieving 98% test coverage and enabling real-time error tracking for faster issue resolution.'
      ],
      link: 'https://github.com/Avin-saxena/PDFChat',
    },
    {
      title: 'Video WebApp',
      tech: 'React.js, Express.js, MongoDB, JWT',
      description: [
        'Architected a responsive dashboard using React.js, enhancing UI/UX across platforms.',
        'Deployed JWT-based authentication in Express.js, increasing access control efficiency by 30%.',
        'Engineered scalable video API with Express.js and MongoDB, processing 1000-second videos.',
        'Fine-tuned MongoDB queries, cutting storage time by 40%.',
      ],
      link: 'https://github.com/Avin-saxena/VideoApp',
    },
    {
      title: 'Laundry Management System',
      tech: 'Express.js, HTML, CSS, MySQL',
      description: [
        'Built RESTful API endpoints handling 1,000+ requests per second for laundry operations.',
        'Managed employee, customer, and inventory data with CRUD operations in MySQL.',
        'Secured API access for 50+ users with JWT authentication.',
        'Achieved 98% unit test coverage using Postman and Jest.',
      ],
      link: 'https://github.com/Avin-saxena/laundry-management-system',
    },
    
  ];
  

  return (
    <div className="min-h-screen bg-black bg-pattern text-gray-200 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-custom-dark">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left Side: Profile Picture and AS */}
          <div className="flex items-center space-x-2">
            <motion.img
              src={profileImage}
              alt="Avin Saxena"
              className="w-10 h-10 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h1 className="text-2xl font-bold tracking-wider">AS</h1>
          </div>
          {/* Right Side: Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Avin-saxena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/avin-saxena-384616237/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:avin12121111@gmail.com"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center">
          <motion.div
            className="flex flex-col md:flex-row items-start gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Text Content */}
            <div className="md:w-1/2 mt-4 ml-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Avin Saxena
              </h1>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text font-semibold font-serif">
                  Final year CSE@IIIT Vadodara
                </h2>
                <span className="text-2xl">🎓</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8">
                Computer Science student at IIIT Vadodara ICD with expertise in
                full-stack development. Proficient in React.js, Express.js, and
                machine learning technologies. Passionate about creating
                efficient solutions and delivering exceptional user experiences.
              </p>
              {/* Resume Download Button */}
              <motion.a
  href="/Avin_Saxena_Resume.pdf"  // Updated path to match your file name
  download="Avin_Saxena_Resume.pdf"
  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg 
            shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 
            transform hover:scale-105 active:scale-95"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
>
  <Download className="w-5 h-5 mr-2" />
  <span className="font-medium">Download Resume</span>
</motion.a>
            </div>
            {/* Enlarged Image on the Right */}
            <div className="md:w-1/2 flex justify-center">
              <motion.img
                src={heroImage}
                alt="Avin Saxena"
                className="w-96 h-96 md:w-96 md:h-96 rounded-lg shadow-2xl object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </section>
        {/* Technologies Section */}
        <motion.section
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technologies
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard
                key={index}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-pink-500 pl-8 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-500 rounded-full"></div>
                <p className="text-gray-400 mb-2">{exp.period}</p>
                <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-gray-400 mb-4">{exp.company}</p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{
                        delay: index * 0.2 + i * 0.1,
                        duration: 0.5,
                      }}
                    >
                      <ExternalLink
                        size={16}
                        className="mt-1 flex-shrink-0 text-pink-500"
                      />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                  {project.title}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-400 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </h3>
                <p className="text-pink-500 text-sm mb-4">{project.tech}</p>
                <ul className="space-y-2">
                  {project.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <ExternalLink
                        size={14}
                        className="mt-1 flex-shrink-0 text-pink-500"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="mailto:avin12121111@gmail.com"
                className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Email Me
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/avin-saxena-384616237/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.section>
      </main>

        {/* Footer */}
        <footer className="bg-black/80 backdrop-blur-md py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>
            Contact:{" "}
            <a
              href="mailto:avin12121111@gmail.com"
              className="underline hover:text-pink-500 transition-colors"
            >
              avin12121111@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;