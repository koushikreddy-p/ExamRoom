export default function HowItWorks() {

  const steps = [
    {
      title: "Create Exam",
      desc: "Instructor creates and schedules an online exam."
    },
    {
      title: "Start Proctoring",
      desc: "Candidates join the exam with webcam verification."
    },
    {
      title: "AI Monitoring",
      desc: "AI monitors face, eye movement and suspicious behavior."
    },
    {
      title: "Generate Report",
      desc: "System generates malpractice and performance reports."
    }
  ]

  return (
    <section className="px-20 py-20">

      <h2 className="text-4xl text-center font-bold mb-16">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {steps.map((step, index) => (
          <div key={index} className="text-center p-6 border rounded-xl hover:shadow-lg transition">

            <div className="text-3xl font-bold text-green-400 mb-4">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {step.title}
            </h3>

            <p className="text-gray-600">
              {step.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  )
}