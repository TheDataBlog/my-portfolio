import React from 'react';

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Full-screen Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 text-center"
      >
        <h1 className="text-5xl font-extrabold mb-4">Kaleb Asefa</h1>
        <p className="text-2xl mb-2">Statistics Student | Math • Code • Finance</p>
        {/* Contact Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a
            href="mailto:kalebasefa0@example.com"
            className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
          >
            📧 Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
          >
            <span role="img" aria-label="GitHub">🐙</span> GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
          >
            <span role="img" aria-label="LinkedIn">💼</span> LinkedIn
          </a>
          <span className="text-gray-700 flex items-center gap-1">
            <span role="img" aria-label="Phone">📱</span> +251947690724
          </span>
        </div>
        <a
          href="#projects"
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded shadow text-lg hover:bg-blue-700 transition"
        >
          View My Projects ↓
        </a>
      </section>

      <main className="p-6 space-y-12">
        {/* About Me */}
        <section id="about" className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            I’m currently a B.Sc. Statistics student at Addis Ababa University and enrolled in the ALX Data Science and Data Engineering programs. 
            I enjoy working on data analysis, machine learning, and statistical research projects — and I’m just getting started.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-700">
            <li>Python (pandas, numpy, matplotlib)</li>
            <li>SQL</li>
            <li>Excel / Google Sheets</li>
            <li>Data Visualization</li>
            <li>Basic Web Development</li>
            <li>Statistics & Probability</li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="space-y-6">
            <div className="border p-4 rounded shadow">
              <h4 className="font-bold">Cryptocurrency Behavior Analyzer</h4>
              <p className="text-sm text-gray-600">A tool that analyzes real-time and historical crypto trends and explains them in natural language.</p>
              <p className="text-sm mt-2">Tools: Python, WebSocket API, pandas</p>
            </div>
            <div className="border p-4 rounded shadow">
              <h4 className="font-bold">Student Performance Tracker</h4>
              <p className="text-sm text-gray-600">A form-based tool for tracking students’ weekly progress and generating insights over time.</p>
              <p className="text-sm mt-2">Tools: Google Forms, Sheets, Data Studio</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
          <p className="text-gray-700 mb-2">📧 kala@example.com</p>
          <p className="text-gray-700 mb-2">🔗 <a href="https://github.com/yourusername" className="text-blue-500 underline">GitHub</a></p>
          <p className="text-gray-700">📍 Addis Ababa, Ethiopia</p>
        </section>
      </main>

      <footer className="p-6 mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kala B. • Built with React + Tailwind
      </footer>
    </div>
  );
}
