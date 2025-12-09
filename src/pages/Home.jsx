export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Leading the Future of Aerial Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Comprehensive drone services, equipment, and training for industries worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚁</div>
              <h3 className="text-2xl font-semibold mb-4">Drone Services</h3>
              <p className="text-gray-600">
                Professional drone operations including inspections, surveillance, delivery, 
                and specialized services tailored to your industry needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-semibold mb-4">Equipment & Platforms</h3>
              <p className="text-gray-600">
                Browse our comprehensive drone store, explore platforms, and discover 
                innovative engineering solutions like the Aerieport system.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-semibold mb-4">Training & Academy</h3>
              <p className="text-gray-600">
                Professional training programs in Canada and UK, educational initiatives, 
                and expert mentorship to advance your drone career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Serving Multiple Industries</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            From oil & gas to precision agriculture, we deliver tailored solutions across 11+ industries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Oil & Gas", "Energy & Utilities", "Construction", "Defense", 
              "Forestry", "Government", "Infrastructure", "Mining", 
              "Agriculture", "Property", "Public Safety"
            ].map((industry, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition-colors">
                <p className="font-medium text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Volatus Aerospace</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-xl font-semibold mb-2">Certified & Compliant</h3>
              <p className="text-gray-600">Fully licensed and regulatory compliant operations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Services across Canada, UK, and international markets</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">Cutting-edge equipment and innovative solutions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals and certified pilots</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to discuss your aerial solution needs
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Request a Quote
          </button>
        </div>
      </section>
    </div>
  );
}
