"use client";
import React, { useState } from 'react';
import Link from "next/link";

export default function EnglishLearningPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === 'teacher@gmail.com' && password === '123456') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };
  const menu = [
  {
    name: 'HOME',
    link: '/',
  },
  {
    name: 'NOTES',
    link: '/notes',
  },
  {
    name: 'VIDEOS',
    link: '/videos',
  },
  {
    name: 'EXERCISES',
    link: '/exercises',
  },
  {
    name: 'MATERIALS',
    link: '/materials',
  },
  {
    name: 'ANNOUNCEMENTS',
    link: '/announcements',
  },
  {
    name: 'CONTACT',
    link: '/contact',
  },
];

  const cards = [
    {
      title: 'NOTES',
      desc: 'Study and learn with ease',
      color: 'bg-blue-600',
      icon: '📘',
    },
    {
      title: 'EXERCISES',
      desc: 'Practice makes perfect',
      color: 'bg-green-600',
      icon: '✏️',
    },
    {
      title: 'QUIZ',
      desc: 'Test yourself and improve',
      color: 'bg-purple-600',
      icon: '📝',
    },
    {
      title: 'MATERIALS',
      desc: 'Download notes and worksheets',
      color: 'bg-yellow-500',
      icon: '📁',
    },
  ];

const sections = [
  {
    title: 'NOTES',
    points: ['Grammar', 'Vocabulary', 'Writing'],
    button: 'Explore',
    link: '/notes',
    color: 'bg-blue-700',
    icon: '📖',
  },
  {
    title: 'VIDEOS',
    points: ['Watch selected videos', 'Improve English skills'],
    button: 'Explore',
    link: '/videos',
    color: 'bg-red-600',
    icon: '▶️',
  },
  {
    title: 'EXERCISES',
    points: ['Practice exercises', 'Interactive tasks'],
    button: 'Explore',
    link: '/exercises',
    color: 'bg-green-600',
    icon: '✍️',
  },
  {
    title: 'MATERIALS',
    points: ['Worksheets', 'Sample essays', 'Downloads'],
    button: 'Explore',
    link: '/materials',
    color: 'bg-yellow-500',
    icon: '📂',
  },
];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 to-blue-700 px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📚</div>
            <h1 className="text-3xl font-bold text-blue-900">
              English Learning Portal
            </h1>
            <p className="text-gray-500 mt-2">
              Login to continue
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-500 text-center">
            Demo Login:<br />
            Email: teacher@gmail.com<br />
            Password: 123456
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-950 to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">📚</div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">ENGLISH</h1>
              <p className="text-sm uppercase tracking-widest">Learning Portal</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-6 mt-4 md:mt-0 text-sm font-semibold tracking-wide">
            {menu.map((item) => (
  <Link
    key={item.name}
    href={item.link}
    className="hover:text-blue-200 transition duration-200"
  >
    {item.name}
  </Link>
))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-3xl italic text-blue-900 mb-2">
            Welcome to Your
          </p>

          <h2 className="text-6xl font-extrabold text-blue-900 leading-tight drop-shadow-lg">
            ENGLISH
          </h2>

          <h3 className="text-3xl font-bold text-blue-950 mt-2">
            LEARNING PORTAL
          </h3>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto italic">
            “The limits of my language are the limits of my world.” — Ludwig
            Wittgenstein
          </p>
        </div>
      </section>

      {/* Top Cards */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <div
                className={`w-16 h-16 ${card.color} rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-4`}
              >
                {card.icon}
              </div>

              <h4 className="font-bold text-xl text-gray-800 mb-2">
                {card.title}
              </h4>

              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-[2px] bg-blue-300 flex-1"></div>
          <h2 className="text-2xl font-bold text-blue-900 tracking-wide">
            EXPLORE & LEARN
          </h2>
          <div className="h-[2px] bg-blue-300 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-4 text-center">{section.icon}</div>

              <h3 className="text-xl font-bold text-center text-gray-800 mb-5">
                {section.title}
              </h3>

              <ul className="space-y-2 text-sm text-gray-600 mb-6 list-disc list-inside">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <Link href={section.link}>
  <button
    className={`w-full ${section.color} text-white py-2 rounded-xl font-semibold hover:opacity-90 transition`}
  >
    {section.button}
  </button>
</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Announcement + Quote */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="bg-blue-800 text-white px-6 py-4 flex items-center justify-between">
            <h3 className="font-bold text-lg">📢 ANNOUNCEMENTS</h3>
            <button className="text-sm hover:underline">View All</button>
          </div>

          <div className="divide-y divide-gray-200">
            {[
              {
                date: '24 MAY',
                title: 'Grammar Quiz (Tenses)',
                desc: 'Due: 30 May 2024',
              },
              {
                date: '27 MAY',
                title: 'Speaking Activity',
                desc: 'In class presentation',
              },
              {
                date: '31 MAY',
                title: 'Writing Task',
                desc: 'Descriptive Essay',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 p-5 hover:bg-gray-50"
              >
                <div className="bg-blue-100 text-blue-900 rounded-xl px-4 py-3 text-center font-bold text-sm min-w-[80px]">
                  {item.date}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg p-8 flex flex-col justify-center">
          <div className="text-5xl text-blue-700 mb-4">❝</div>
          <p className="text-3xl italic text-blue-900 leading-relaxed">
            Practice is the key to progress.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h4 className="font-bold text-lg mb-2">📧 Teacher’s Email</h4>
            <p className="text-sm text-blue-100">teacher.english@gmail.com</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">🕒 Consultation Time</h4>
            <p className="text-sm text-blue-100">
              Monday - Friday: 2.30 pm – 4.30 pm
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">🎯 Motivation</h4>
            <p className="text-sm text-blue-100">
              Let’s Learn, Practice and Achieve Together!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
