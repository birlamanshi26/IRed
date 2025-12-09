export default function Academy() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Academy</h1>
      <p className="text-xl text-gray-600 mb-8">
        Professional drone training and education programs to advance your career in unmanned aviation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Canada Training Courses</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Level 1 Complex Course</li>
            <li>Advanced RPAS Ground School Bundle</li>
            <li>Advanced RPAS Ground School</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">UK Training Courses</h2>
          <p className="text-gray-600">
            Comprehensive training programs designed for UK regulations and requirements.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Drones in Ed</h2>
          <p className="text-gray-600">
            Educational programs bringing drone technology into classrooms and learning environments.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">The Drone Mentor</h2>
          <p className="text-gray-600">
            Expert mentorship and guidance for aspiring drone professionals.
          </p>
        </div>
      </div>
    </div>
  );
}

