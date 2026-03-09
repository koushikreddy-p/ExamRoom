export default function Home() {
  return (
    <div className="w-full">

      {/* HERO */}
      <div className="flex h-[200px]">
        
        <div className="w-1/2 bg-green-400 flex items-center justify-end pr-10">
          <h1 className="text-6xl font-bold">EXAM</h1>
        </div>

        <div className="w-1/2 bg-black flex items-center justify-start pl-10">
          <h1 className="text-6xl font-bold text-green-400">ROOM</h1>
        </div>

      </div>

      {/* tagline */}
      <div className="text-center py-10 bg-gray-200">

        <p className="text-gray-600 uppercase text-sm">
          Examine your candidates online with 100% behaviour with no malpractice
        </p>

        <button className="mt-4 bg-black text-white px-6 py-2 rounded-full">
          Sign Up
        </button>

      </div>

      {/* FEATURES */}

<div className="flex justify-center py-16 bg-gray-100">

  <div className="bg-white shadow-md rounded-lg p-10 w-[500px] text-center">

    <h2 className="font-semibold mb-4">
      Why to choose Proctor X ?
    </h2>

    <ol className="text-gray-600 space-y-2 justify-start text-left">
      <li>1. Best online exam interface</li>
      <li>2. Full test proctored</li>
      <li>3. Behavior of candidate recorded</li>
      <li>4. Copy/Paste Disabled</li>
      <li>5. Tab switching disabled</li>
    </ol>

  </div>

</div>

{/* FOOTER */}

<div className="bg-black text-white py-12 text-center">

  <h2 className="mb-4">NEXT WHAT ?</h2>

  <button className="bg-white text-black px-6 py-2 rounded-full">
    Sign Up
  </button>

  <div className="mt-10 text-gray-400 text-sm">
    Mail: poreddykoushik@gmail.com
  </div>

</div>

    </div>
  )
}