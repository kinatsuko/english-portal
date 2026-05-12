"use client";

import Link from "next/link";

export default function Navbar() {
  const menu = [
    { name: "HOME", link: "/" },
    { name: "NOTES", link: "/notes" },
    { name: "VIDEOS", link: "/videos" },
    { name: "EXERCISES", link: "/exercises" },
    { name: "MATERIALS", link: "/materials" },
    { name: "ANNOUNCEMENTS", link: "/announcements" },
    { name: "CONTACT", link: "/contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  return (
    <header className="bg-gradient-to-r from-blue-950 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-4xl">📚</div>

          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              ENGLISH
            </h1>

            <p className="text-sm uppercase tracking-widest">
              Learning Portal
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-6 mt-4 md:mt-0 text-sm font-semibold tracking-wide items-center">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="hover:text-blue-200 transition duration-200"
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}