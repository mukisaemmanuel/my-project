import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Headphones, Wifi, Settings, ArrowRight, Check, Star } from 'lucide-react';
import Scene3D from '../components/3d/Scene3D';
import ProductModel from '../components/3d/ProductModel';

const Communication: React.FC = () => {
  const features = [
    {
      icon: Radio,
      title: 'Two-Way Radio Systems',
      description: 'Professional-grade radio communication for teams and organizations'
    },
    {
      icon: Headphones,
      title: 'Intercom Solutions',
      description: 'Advanced intercom systems for buildings and facilities'
    },
    {
      icon: Wifi,
      title: 'Wireless Networks',
      description: 'Robust wireless communication infrastructure'
    },
    {
      icon: Settings,
      title: 'Custom Integration',
      description: 'Tailored solutions to meet your specific requirements'
    }
  ];

  const benefits = [
    'Instant team communication',
    'Extended range coverage',
    'Crystal clear audio quality',
    'Emergency alert capabilities',
    'Multi-channel support',
    'Weatherproof designs',
    'Long battery life',
    '24/7 technical support'
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-blue-300">
                <Radio className="h-6 w-6" />
                <span className="font-semibold">Communication Systems</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Communication Solutions
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Keep your team connected with our advanced two-way radio systems, 
                intercom solutions, and wireless communication networks designed for reliability and clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-300"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Scene3D className="w-full h-96" cameraPosition={[0, 0, 4]}>
                <ProductModel type="radio" />
              </Scene3D>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Communication Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive communication systems designed for various industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Why Choose Our Communication Systems?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our professional-grade communication solutions offer unmatched reliability, 
                crystal-clear audio quality, and advanced features designed for mission-critical operations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Industry Leading</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our communication systems are trusted by security companies, construction firms, 
                  event organizers, and businesses across Uganda.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">99.9%</div>
                  <div className="text-sm text-blue-800">Uptime Reliability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our communication systems serve various industries with specialized solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Security & Safety',
                description: 'Critical communication for security teams and emergency response',
                image: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Construction Sites',
                description: 'Reliable communication across large construction projects',
                image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Events & Hospitality',
                description: 'Seamless coordination for events and hospitality services',
                image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Transportation',
                description: 'Fleet management and driver communication systems',
                image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Manufacturing',
                description: 'Industrial communication for production facilities',
                image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Healthcare',
                description: 'Critical communication for healthcare facilities',
                image: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((application, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${application.image})` }}>
                  <div className="h-full bg-black bg-opacity-40 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{application.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{application.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Enhance Your Communication?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Contact our communication experts today for a customized solution that meets your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/brands"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                View Our Brands
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communication;