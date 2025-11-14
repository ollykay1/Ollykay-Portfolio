import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import skills from "../data/skills";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 py-16 px-6 transition-colors duration-300">
      <SectionHeader
        title="About Me"
        subtitle="Who I am, what I do, and why I’m passionate about cybersecurity."
      />
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-lg">
            I’m <span className="font-semibold text-blue-600 dark:text-blue-400">ollykay</span>, a cybersecurity-focused developer who builds secure, maintainable applications and helps others level up their security mindset.
          </p>
          <p className="mb-3">
            I enjoy bridging the gap between development and security by embedding secure patterns into everyday engineering: threat-aware design, automated testing, and clear documentation.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 mb-8 text-left"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold mb-1">What I build</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Secure web apps, developer tools, and security-focused automation.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold mb-1">Experience highlights</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Threat modelling, secure CI/CD, vulnerability remediation, and developer-focused training.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold mb-1">How I work</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Empathy-first collaboration, measurable security improvements, and practical docs that developers actually use.</p>
          </div>
        </motion.div>

        <motion.div
          id="skills"
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-4">Core skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;