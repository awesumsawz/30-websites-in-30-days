export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="brand flex items-center space-x-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13"
            />
          </svg>
          <a 
            className="text-xl font-bold hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
            href="#"
          >LitRepo</a>
        </div>
        <nav className="flex items-center space-x-4">
          <a className="hover:hover:bg-gray-800 px-4 py-2 rounded-md transition-all duration-300" href="#">
            Dashboard
          </a>
          <a className="hover:hover:bg-gray-800 px-4 py-2 rounded-md transition-all duration-300" href="#">
            Downloads
          </a>
          <div className="relative group">
            <div
              className="absolute z-0 -inset-2 rounded-lg opacity-0 blur transition-all duration-300 group-hover:opacity-75"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #8b5cf6, #d946ef, #ec4899)",
                backgroundSize: "200% 200%",
                animation: "gradient-rotate 3s linear infinite",
              }}
            ></div>
            <a
              className="relative z-10 bg-black px-4 py-2 border rounded-md border-gray-200"
              href="#"
            >
              Profile
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>
            Inspire young <span className="text-purple-500">readers</span>
          </h1>
          <p>
            Comprehensive literature units designed by teachers, for teachers.
            Transform your classroom with engaging book-based curriculum
          </p>
          <div className="cta-group">
            <a href="#" className="btn">
              Browse unites
            </a>
            <a href="#" className="btn">
              Get started
            </a>
          </div>
          <div className="search-bar relative flex items-center">
            <button className="absolute left-3 p-2 text-gray-500 hover:text-purple-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search by book title, author, or grade level"
              className="w-full py-3 pl-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </section>
        <section className="featured">
          <div className="intro">
            <h2>Featured teaching units</h2>
            <p>
              Complete curriculum packages with lesson plans, activities,
              assessments, and digital resources.
            </p>
          </div>
          <div className="container">
            <div className="card"></div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
