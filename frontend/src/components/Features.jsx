export default function Features() {
  const features = [
    {
      title: "AI Monitoring",
      desc: "AI observes candidate behavior and flags suspicious activity."
    },
    {
      title: "Face Detection",
      desc: "Ensures the same candidate stays in front of the camera."
    },
    {
      title: "Tab Switch Detection",
      desc: "Detects when users switch tabs during exams."
    },
    {
      title: "Live Recording",
      desc: "Record the entire exam session for review."
    }
  ];

  return (
    <section className="px-20 py-20 bg-gray-50">

      <h2 className="text-4xl font-title text-center mb-16">
        Powerful Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}