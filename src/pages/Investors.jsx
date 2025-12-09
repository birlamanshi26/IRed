export default function Investors() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Investors</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Investor Relations</h2>
        <p className="text-gray-600 mb-4">
          Welcome to Volatus Aerospace investor relations. We are committed to providing 
          transparent and timely information to our shareholders and potential investors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Financial Reports</h3>
            <p className="text-sm text-gray-600">Access quarterly and annual reports</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Stock Information</h3>
            <p className="text-sm text-gray-600">Current stock price and trading information</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Corporate Governance</h3>
            <p className="text-sm text-gray-600">Board of directors and governance policies</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Investor Relations</h2>
        <p className="text-gray-600">
          For investor inquiries, please contact our investor relations team at 
          <a href="mailto:investors@volatusaerospace.com" className="text-blue-600 hover:underline ml-1">
            investors@volatusaerospace.com
          </a>
        </p>
      </div>
    </div>
  );
}

