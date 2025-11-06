import React, { useEffect, useState, useRef } from 'react';

function useTypewriter(words = [], typingSpeed = 80, pause = 1500) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    let timeout;
    const current = words[wordIndex % words.length];

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, typingSpeed);
      if (text === current) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, typingSpeed / 2);
      if (text === '') {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pause]);

  useEffect(() => () => { mounted.current = false; }, []);

  return text;
}

export default function App() {
  const [dark, setDark] = useState(false);
  const subtitle = useTypewriter(
    ['Statistics Student', 'Data • ML • Visualization', 'Math • Code • Finance'],
    60,
    1400
  );

  function handleContactSubmit(e) {
    e.preventDefault();
    const name = e.target.name?.value || 'Friend';
    const msg = encodeURIComponent(e.target.message?.value || 'Hi — I saw your portfolio!');
    const subject = encodeURIComponent(`Contact from ${name}`);
    window.location.href = `mailto:kalebasefa0@example.com?subject=${subject}&body=${msg}`;
  }

  return (
    <div className={`${dark ? 'dark' : ''} font-sans`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
              KA
            </div>
            <div>
              <div className="text-lg font-semibold">Kaleb Asefa</div>
              <div className="text-xs text-gray-500 dark:text-gray-300">B.Sc. Statistics • Data Enthusiast</div>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <a href="#projects" className="text-sm hover:text-blue-500 transition">Projects</a>
            <a href="#about" className="text-sm hover:text-blue-500 transition">About</a>
            <a href="#contact" className="text-sm hover:text-blue-500 transition">Contact</a>
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDark((d) => !d)}
              className="ml-2 p-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              {dark ? '🌙' : '☀️'}
            </button>
          </nav>
        </header>

        {/* Full-screen Hero Section */}
        <section
          id="hero"
          className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6"
        >
          <div className="max-w-4xl w-full">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
              Kaleb Asefa
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 h-8">
              {subtitle}
              <span className="inline-block animate-blink ml-1">|</span>
            </p>

            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-6">
              Statistics student at Addis Ababa University — building data tools, visualizations, and experiments in machine learning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md transform hover:-translate-y-1 transition"
              >
                View Projects
              </a>
              <a
                href="mailto:kalebasefa0@example.com"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 text-gray-600 dark:text-gray-300">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white hover:bg-gray-700 dark:hover:bg-white p-2 rounded-full transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 007.88 10.94c.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.38-3.87-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.98.11-.76.41-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.12-3.16 0 0 .98-.31 3.2 1.18a11.1 11.1 0 015.82 0c2.22-1.49 3.2-1.18 3.2-1.18.64 1.64.24 2.86.12 3.16.75.81 1.2 1.84 1.2 3.1 0 4.45-2.7 5.42-5.27 5.71.42.36.8 1.07.8 2.16v3.2c0 .31.2.68.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" /></svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4v15h-4v-15zM9.5 8.5h3.84v2.04h.05c.53-1 1.83-2.04 3.77-2.04 4.03 0 4.78 2.65 4.78 6.09v8.91h-4V15.1c0-2.23-.04-5.1-3.11-5.1-3.11 0-3.58 2.43-3.58 4.95v8.05h-4v-15z" /></svg>
              </a>
            </div>
          </div>
        </section>

        <main className="max-w-5xl mx-auto p-6 space-y-12">
          {/* About Me */}
          <section id="about" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">About Me</h3>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              I’m currently a B.Sc. Statistics student at Addis Ababa University and enrolled in the ALX Data Science and Data Engineering programs. I enjoy working on data analysis, machine learning, and statistical research projects — and I’m just getting started.
            </p>
          </section>

          {/* Skills */}
          <section id="skills" className="rounded-lg p-6 bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <li className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm">Python (pandas, numpy)</li>
              <li className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm">SQL</li>
              <li className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm">Data Visualization</li>
              <li className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm">Statistics & Probability</li>
              <li className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm">Excel / Sheets</li>
              <li className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm">Basic Web Dev</li>
            </ul>
          </section>

          {/* Projects */}
          <section id="projects" className="rounded-lg p-6 bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          </section>

          {/* Contact */}
          <section id="contact" className="rounded-lg p-6 bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">📧 kala@example.com</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">📍 Addis Ababa, Ethiopia</p>
                <p className="text-gray-700 dark:text-gray-300">🔗 <a href="https://github.com/yourusername" className="text-blue-500 underline">GitHub</a></p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-3">
                <input name="name" className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" placeholder="Your name" />
                <textarea name="message" className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" rows="3" placeholder="Message"></textarea>
                <div className="flex items-center gap-3">
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Send email</button>
                  <a href="tel:+251947690724" className="text-sm text-gray-600 dark:text-gray-300">📱 +251 947 690 724</a>
                </div>
              </form>
            </div>
          </section>
        </main>

        <footer className="p-6 mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Kala B. • Built with React + Tailwind
        </footer>
      </div>
    </div>
  );
}
