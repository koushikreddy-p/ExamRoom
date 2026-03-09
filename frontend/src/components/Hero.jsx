export default function Hero() {
  return (
    <section className="flex items-center justify-between px-20 py-20">

      <div className="max-w-xl">

        <h1 className="text-7xl font-title tracking-widest">
          EXAM <span className="text-green-400">ROOM</span>
        </h1>

        <p className="mt-6 text-gray-600 font-body">
          Examine your candidates online with complete monitoring
          and AI powered malpractice detection.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="bg-green-400 px-6 py-3 rounded-lg hover:bg-green-500">
            Get Started
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Learn More
          </button>

        </div>

      </div>

      <div>
        <img
          src="https://illustrations.popsy.co/gray/web-design.svg"
          className="w-[450px]"
        />
      </div>

    </section>
  )
}