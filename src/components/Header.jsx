import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  const navigationItems = [
    {
      name: "Home",
      path: "/",
      hasDropdown: false,
    },
    {
      name: "Equipment",
      path: "/equipment",
      hasDropdown: true,
      items: [
        { name: "Drone Store", path: "/equipment/drone-store" },
        { name: "Platforms", path: "/equipment/platforms" },
        {
          name: "Volatus Engineering",
          path: "/equipment/volatus-engineering",
          subItems: [
            { name: "Aerieport Drone Nesting Station", path: "/equipment/aerieport" },
          ],
        },
      ],
    },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      items: [
        { name: "Drone Services Quote", path: "/services/quote" },
        { name: "Surveillance as a Service", path: "/services/surveillance" },
        { name: "Pipeline Services", path: "/services/pipeline" },
        { name: "Drone Lidar Inspections", path: "/services/lidar-inspections" },
        { name: "Drone Inspection Services", path: "/services/inspections" },
        { name: "Drone Delivery Services", path: "/services/delivery" },
        { name: "Wildfire Services", path: "/services/wildfire" },
        { name: "UK Services", path: "/services/uk" },
        { name: "Crewed Aerial Services", path: "/services/crewed-aerial" },
        {
          name: "Geomatics",
          path: "/services/geomatics",
          subItems: [
            { name: "LIDAR", path: "/services/geomatics/lidar" },
            { name: "Photogrammetry", path: "/services/geomatics/photogrammetry" },
            { name: "Aerial Imagery", path: "/services/geomatics/aerial-imagery" },
            { name: "Precision Agriculture", path: "/services/geomatics/precision-agriculture" },
            { name: "Change Detection", path: "/services/geomatics/change-detection" },
            { name: "Photointerpretation", path: "/services/geomatics/photointerpretation" },
            { name: "Gas Detection and Thermography Inspection", path: "/services/geomatics/gas-detection" },
          ],
        },
      ],
    },
    {
      name: "Academy",
      path: "/academy",
      hasDropdown: true,
      items: [
        {
          name: "Canada Training Courses",
          path: "/academy/canada-training",
          subItems: [
            { name: "Level 1 Complex Course", path: "/academy/canada-training/level1-complex" },
            { name: "Advanced RPAS Ground School Bundle", path: "/academy/canada-training/advanced-bundle" },
            { name: "Advanced RPAS Ground School", path: "/academy/canada-training/advanced-ground-school" },
          ],
        },
        { name: "UK Training Courses", path: "/academy/uk-training" },
        { name: "Drones in Ed", path: "/academy/drones-in-ed" },
        { name: "The Drone Mentor", path: "/academy/drone-mentor" },
      ],
    },
    {
      name: "Investors",
      path: "/investors",
      hasDropdown: false,
    },
    {
      name: "Industries",
      path: "/industries",
      hasDropdown: true,
      items: [
        { name: "Oil & Gas", path: "/industries/oil-gas" },
        { name: "Energy & Utilities", path: "/industries/energy-utilities" },
        { name: "Construction & Engineering", path: "/industries/construction" },
        { name: "Defense", path: "/industries/defense" },
        { name: "Forestry & Conservation", path: "/industries/forestry" },
        { name: "Government and Public Agencies", path: "/industries/government" },
        { name: "Infrastructure & Transportation", path: "/industries/infrastructure" },
        { name: "Mining & Aggregates", path: "/industries/mining" },
        { name: "Precision Agriculture", path: "/industries/precision-agriculture" },
        { name: "Property Development & Maintenance", path: "/industries/property" },
        { name: "Public Safety", path: "/industries/public-safety" },
      ],
    },
    {
      name: "About",
      path: "/about",
      hasDropdown: true,
      items: [
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Volatus News", path: "/about/news" },
        { name: "Drone Network News", path: "/about/drone-network-news" },
      ],
    },
  ];

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeMobileMenu}>
            <img src={logo} className="h-12 w-auto" alt="Volatus Aerospace Logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-200">
                        {item.items.map((subItem) => (
                          <div key={subItem.name} className="relative group/sub">
                            {subItem.subItems ? (
                              <>
                                <div className="px-4 py-2 text-gray-700 hover:bg-blue-50 flex items-center justify-between">
                                  <span className="font-medium">{subItem.name}</span>
                                  <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                                <div className="absolute left-full top-0 ml-1 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-200 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
                                  {subItem.subItems.map((subSubItem) => (
                                    <Link
                                      key={subSubItem.name}
                                      to={subSubItem.path}
                                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {subSubItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <Link
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Language Selection */}
            <div className="ml-4 pl-4 border-l border-gray-300">
              <select className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <nav className="lg:hidden pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        <span className="font-medium">{item.name}</span>
                        <svg
                          className={`h-5 w-5 transition-transform ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-6 mt-1 space-y-1">
                          {item.items.map((subItem) => (
                            <div key={subItem.name}>
                              {subItem.subItems ? (
                                <>
                                  <button
                                    className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                                    onClick={() =>
                                      toggleDropdown(`${item.name}-${subItem.name}`)
                                    }
                                  >
                                    <span>{subItem.name}</span>
                                    <svg
                                      className={`h-4 w-4 transition-transform ${
                                        activeDropdown === `${item.name}-${subItem.name}`
                                          ? "rotate-90"
                                          : ""
                                      }`}
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </button>
                                  {activeDropdown === `${item.name}-${subItem.name}` && (
                                    <div className="pl-6 mt-1 space-y-1">
                                      {subItem.subItems.map((subSubItem) => (
                                        <Link
                                          key={subSubItem.name}
                                          to={subSubItem.path}
                                          className="block px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-md"
                                          onClick={closeMobileMenu}
                                        >
                                          {subSubItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  to={subItem.path}
                                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                                  onClick={closeMobileMenu}
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Selection */}
              <div className="px-4 pt-4 border-t border-gray-200">
                <select className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
