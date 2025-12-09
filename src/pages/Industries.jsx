export default function Industries() {
  const industries = [
    { name: "Oil & Gas", description: "Advanced drone solutions for pipeline inspection, monitoring, and safety in the oil and gas sector." },
    { name: "Energy & Utilities", description: "Comprehensive aerial services for power line inspection, solar panel monitoring, and infrastructure assessment." },
    { name: "Construction & Engineering", description: "Surveying, mapping, and progress monitoring solutions for construction projects." },
    { name: "Defense", description: "Specialized drone services and technology for defense and security applications." },
    { name: "Forestry & Conservation", description: "Environmental monitoring, forest management, and wildlife conservation using aerial technology." },
    { name: "Government and Public Agencies", description: "Supporting government operations with compliant and secure drone services." },
    { name: "Infrastructure & Transportation", description: "Bridge inspection, road monitoring, and transportation infrastructure assessment." },
    { name: "Mining & Aggregates", description: "Site surveying, stockpile measurement, and safety monitoring for mining operations." },
    { name: "Precision Agriculture", description: "Crop monitoring, field mapping, and agricultural data collection services." },
    { name: "Property Development & Maintenance", description: "Aerial photography, site planning, and property inspection services." },
    { name: "Public Safety", description: "Emergency response, search and rescue, and public safety support services." },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Industries We Serve</h1>
      <p className="text-xl text-gray-600 mb-8">
        Volatus Aerospace provides cutting-edge drone solutions across multiple industries, 
        delivering innovative aerial services tailored to each sector's unique needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3">{industry.name}</h2>
            <p className="text-gray-600">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

