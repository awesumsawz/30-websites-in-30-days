export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="brand flex items-center space-x-4">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13"/></svg>
          <div>Create Next App</div>
        </div>
        <nav className="flex items-center space-x-4">
          <a className="hover:underline" href="#">Dashboard</a>
          <a className="hover:underline" href="#">Downloads</a>
          <div className="relative">
            <div className="absolute z-0 -inset-2 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 opacity-75 blur"></div>
            <a className="relative z-10 bg-black px-4 py-2 border rounded-md border-gray-200 hover:bg-gradient-to-r hover:text-black hover:from-violet-500 hover:via-purple-500 hover:to-pink-500 hover:opacity-75" href="#">Profile</a>
          </div>
        </nav>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}
