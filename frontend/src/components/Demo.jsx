export default function Demo() {
  return (
    <section className="px-20 py-20 bg-gray-50">

      <div className="flex flex-col lg:flex-row items-center gap-12">

        <div className="flex-1">

          <h2 className="text-4xl font-bold mb-6">
            Live Monitoring Preview
          </h2>

          <p className="text-gray-600 mb-6">
            ProctorX uses AI to detect suspicious activity during exams.
            The system monitors candidate movement, face visibility and
            browser activity.
          </p>

          <button className="bg-green-400 px-6 py-3 rounded-lg hover:bg-green-500">
            Try Demo
          </button>

        </div>

        <div className="flex-1">

          <img
            src="https://illustrations.popsy.co/gray/video-call.svg"
            className="rounded-xl shadow-lg"
          />

        </div>

      </div>

    </section>
  )
}