import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Globe, Zap } from 'lucide-react';

const Brands: React.FC = () => {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  const brands = [
    {
      id: 'panasonic',
      name: 'Panasonic',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Communication & Security',
      description: 'Global leader in professional communication systems and security solutions',
      products: ['Two-way Radios', 'CCTV Systems', 'Access Control', 'Intercom Systems'],
      founded: '1918',
      headquarters: 'Japan',
      specialty: 'Professional Communication'
    },
    {
      id: 'maktech',
      name: 'MAKTECH',
      logo: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Security Technology',
      description: 'Advanced security and surveillance technology solutions',
      products: ['Surveillance Systems', 'Alarm Systems', 'Smart Security', 'IoT Solutions'],
      founded: '2005',
      headquarters: 'Uganda',
      specialty: 'Integrated Security'
    },
    {
      id: 'hikvision',
      name: 'Hikvision',
      logo: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Video Surveillance',
      description: 'World\'s leading provider of innovative video surveillance products',
      products: ['IP Cameras', 'NVR Systems', 'Video Analytics', 'Access Control'],
      founded: '2001',
      headquarters: 'China',
      specialty: 'AI-Powered Surveillance'
    },
    {
      id: 'dahua',
      name: 'Dahua Technology',
      logo: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Security Solutions',
      description: 'Leading global provider of video-centric smart IoT solutions',
      products: ['Security Cameras', 'Video Management', 'AI Analytics', 'Thermal Imaging'],
      founded: '2001',
      headquarters: 'China',
      specialty: 'Smart IoT Solutions'
    },
    {
      id: 'axis',
      name: 'Axis Communications',
      logo: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Network Video',
      description: 'Pioneer in network video and market leader in video surveillance',
      products: ['Network Cameras', 'Video Encoders', 'Analytics', 'Audio Systems'],
      founded: '1984',
      headquarters: 'Sweden',
      specialty: 'Network Video Solutions'
    },
    {
      id: 'honeywell',
      name: 'Honeywell',
      logo: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Integrated Solutions',
      description: 'Comprehensive security and fire safety solutions provider',
      products: ['Fire Alarms', 'Access Control', 'Video Surveillance', 'Intrusion Systems'],
      founded: '1906',
      headquarters: 'USA',
      specialty: 'Fire & Security'
    }
  ];

  const partnerships = [
    {
      icon: Award,
      title: 'Certified Partners',
      description: 'Official partnerships with leading technology manufacturers'
    },
    {
      icon: Star,
      title: 'Premium Support',
      description: 'Direct access to manufacturer support and warranties'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'International quality standards and certifications'
    },
    {
      icon: Zap,
      title: 'Latest Technology',
      description: 'Access to cutting-edge products and innovations'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Our Technology Partners
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We partner with world-class manufacturers to deliver cutting-edge technology solutions. 
              Our partnerships ensure you get the best products backed by global expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Partnership Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships provide you with unmatched advantages and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Trusted Brand Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of world-renowned technology partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {brand.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {brand.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Founded:</span>
                      <span className="font-semibold text-gray-700">{brand.founded}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Headquarters:</span>
                      <span className="font-semibold text-gray-700">{brand.headquarters}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Specialty:</span>
                      <span className="font-semibold text-gray-700">{brand.specialty}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Product Range:</h4>
                    <div className="flex flex-wrap gap-1">
                      {brand.products.map((product, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {hoveredBrand === brand.id && (
                    <div className="pt-4 border-t animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-semibold">Learn More</span>
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Why We Choose the Best Partners
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our partnerships are built on shared values of innovation, quality, and customer satisfaction. 
                We carefully select partners who meet our high standards for technology excellence.
              </p>
              
              <div className="space-y-4">
                {[
                  'Proven track record of reliability',
                  'Continuous innovation and R&D',
                  'Global support and warranty coverage',
                  'Compliance with international standards',
                  'Sustainable and ethical practices',
                  'Comprehensive training and certification'
                ].map((criterion, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{criterion}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">Years Combined Experience</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Certified Partnerships</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Countries Supported</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Technical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our partnerships ensure compliance with international standards and certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { standard: 'ISO 9001', description: 'Quality Management Systems' },
              { standard: 'CE Marking', description: 'European Conformity' },
              { standard: 'FCC Certified', description: 'Federal Communications Commission' },
              { standard: 'RoHS Compliant', description: 'Restriction of Hazardous Substances' }
            ].map((cert, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  {cert.standard}
                </div>
                <p className="text-gray-300 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Experience Premium Technology
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get access to world-class technology solutions backed by our trusted partnerships and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 space-x-2"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;