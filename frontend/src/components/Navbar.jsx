export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5">
      
      <h1 className="text-3xl font-title tracking-widest">
        EXAM <span className="text-green-400">ROOM</span>
      </h1>

      <ul className="flex gap-8 font-body text-gray-700">
        <li className="cursor-pointer hover:text-black">Home</li>
        <li className="cursor-pointer hover:text-black">About</li>
        <li className="cursor-pointer hover:text-black">Features</li>
        <li className="cursor-pointer hover:text-black">Contact</li>
      </ul>

      <button className="bg-green-400 px-5 py-2 rounded-lg font-body hover:bg-green-500">
        Login
      </button>

    </nav>
  )
}