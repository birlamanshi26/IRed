export default function Equipment() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Equipment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Drone Store</h2>
          <p className="text-gray-600">
            Browse our comprehensive selection of professional drones and equipment. 
            Find the perfect solution for your aerial operations.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Platforms</h2>
          <p className="text-gray-600">
            Explore our range of drone platforms designed for various industries 
            and applications. From inspection to delivery solutions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Volatus Engineering</h2>
          <p className="text-gray-600">
            Custom engineering solutions and innovative drone technology. 
            Including the revolutionary Aerieport Drone Nesting Station.
          </p>
        </div>
      </div>
    </div>
  );
}

