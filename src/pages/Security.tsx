import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Eye, Lock, Fingerprint, ArrowRight, Check, Shield } from 'lucide-react';
import Scene3D from '../components/3d/Scene3D';
import ProductModel from '../components/3d/ProductModel';

const Security: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: 'CCTV Surveillance',
      description: 'High-definition cameras with night vision and remote monitoring capabilities'
    },
    {
      icon: Eye,
      title: 'Video Analytics',
      description: 'AI-powered video analysis for motion detection and behavioral monitoring'
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Card readers, keypads, and electronic locks for secure entry management'
    },
    {
      icon: Fingerprint,
      title: 'Biometric Systems',
      description: 'Fingerprint and facial recognition for advanced identity verification'
    }
  ];

  const securitySolutions = [
    {
      title: 'CCTV Surveillance Systems',
      description: 'Complete video surveillance solutions with HD cameras, recording systems, and remote viewing capabilities',
      features: ['4K Ultra HD Cameras', 'Night Vision Technology', 'Remote Mobile Access', 'Cloud Storage Options'],
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Access Control Systems',
      description: 'Comprehensive entry management with card readers, biometric scanners, and electronic locks',
      features: ['RFID Card Readers', 'Biometric Scanners', 'Electronic Door Locks', 'Visitor Management'],
      image: 'https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Integrated Security Solutions',
      description: 'Complete security ecosystem combining CCTV, access control, and alarm systems',
      features: ['Unified Management', 'Real-time Alerts', 'Automated Responses', 'Centralized Control'],
      image: 'https://images.pexels.com/photos/2899727/pexels-photo-2899727.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-green-300">
                <Camera className="h-6 w-6" />
                <span className="font-semibold">Security Systems</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Comprehensive Security Solutions
              </h1>
              <p className="text-xl text-green-100 leading-relaxed">
                Protect your assets with our advanced CCTV surveillance, access control systems, 
                and integrated security solutions featuring cutting-edge technology and 24/7 monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-300"
                >
                  <span>Secure Now</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Scene3D className="w-full h-96" cameraPosition={[0, 0, 4]}>
                <ProductModel type="camera" />
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
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our security systems incorporate the latest technology for comprehensive protection and monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-7 w-7 text-green-600" />
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

      {/* Security Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored security systems designed to meet your specific protection requirements
            </p>
          </div>

          <div className="space-y-16">
            {securitySolutions.map((solution, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {solution.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Cutting-Edge Technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our security systems utilize the latest advancements in surveillance technology, 
                artificial intelligence, and cloud computing for superior protection and ease of use.
              </p>
              
              <div className="space-y-4">
                {[
                  'AI-powered video analytics',
                  '4K Ultra HD resolution',
                  'Cloud storage and backup',
                  'Mobile app integration',
                  'Facial recognition technology',
                  'Motion detection alerts',
                  'Night vision capabilities',
                  'Remote system management'
                ].map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Smart Security</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our intelligent security systems learn from patterns and automatically adjust 
                  to provide optimal protection while minimizing false alarms.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">99.5%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">30s</div>
                    <div className="text-sm text-gray-600">Alert Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Choose Our Security Systems?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional-grade security solutions trusted by businesses across Uganda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <h3 className="text-xl font-semibold mb-3">Continuous Monitoring</h3>
              <p className="text-gray-300">
                Round-the-clock surveillance and monitoring for complete peace of mind
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
              <h3 className="text-xl font-semibold mb-3">Installations</h3>
              <p className="text-gray-300">
                Successfully installed security systems across various industries
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">5min</div>
              <h3 className="text-xl font-semibold mb-3">Response Time</h3>
              <p className="text-gray-300">
                Rapid response to security alerts and technical support requests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Get a comprehensive security assessment and custom solution designed for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 space-x-2"
              >
                <span>Get Security Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/brands"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                View Our Partners
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;