import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

        <div>
          <h3 className="text-white text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/training" className="hover:underline">Training</Link></li>
            <li><Link to="/manufacturing" className="hover:underline">Manufacturing</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg mb-3">Contact</h3>
          <p>Email: info@volatusclone.com</p>
          <p>Phone: +1 123 456 7890</p>
          <p>Address: Toronto, Canada</p>
        </div>

        <div>
          <h3 className="text-white text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Facebook
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Twitter
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
      <p className="text-center mt-6 text-gray-500">
        © 2025 Volatus Clone Website. All rights reserved.
      </p>
    </footer>
  );
}
