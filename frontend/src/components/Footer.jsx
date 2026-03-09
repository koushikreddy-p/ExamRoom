export default function Footer() {
  return (
    <footer className="bg-black text-white px-20 py-10">

      <div className="flex justify-between">

        <div>
          <h1 className="text-2xl font-title">
            EXAM <span className="text-green-400">ROOM</span>
          </h1>

          <p className="text-gray-400 mt-3 max-w-sm">
            Secure AI powered online examination system with smart
            monitoring and malpractice detection.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Features</li>
            <li>Pricing</li>
            <li>Security</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400">
        © 2026 ExamRoom. All rights reserved.
      </div>

    </footer>
  )
}