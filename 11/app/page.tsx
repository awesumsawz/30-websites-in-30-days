import SignUpButton from "./components/signup-btn"


export default function Home() {
  return (
    <div >
      <header className="flex items-center justify-between p-4 border-b border-gray-200"> 
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H20v15q-.625 0-1.062.438T18.5 18.5t.438 1.063T20 20v2zM6 15.325q.35-.175.725-.25T7.5 15H8V4h-.5q-.625 0-1.062.438T6 5.5zM10 15h8V4h-8zm-4 .325V4zM7.5 20h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"/></svg>        
          <div>LitRepo</div>
        </div>
        <nav>
          <ul id="logged-in__menu" className="hidden">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/downloades">downloads</a></li>
            <li><a  href="/profile">Profile</a></li>
          </ul>
          <ul id="logged-out__menu" className="flex items-center justify-end gap-4">
            <li><a href="/login">Login</a></li>
            <SignUpButton />
            <li><a className="py-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold rounded-md hover:bg-gradient-to-r hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700" href="/signup">Sign Up</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
