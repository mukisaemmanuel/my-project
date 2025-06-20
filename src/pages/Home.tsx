import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Radio, Camera, Bell, Users, Award, Zap } from 'lucide-react';
import Scene3D from '../components/3d/Scene3D';
import FloatingLogo from '../components/3d/FloatingLogo';
import NetworkVisualization from '../components/3d/NetworkVisualization';

const Home: React.FC = () => {
  const features = [
    {
      icon: Radio,
      title: 'Communication Systems',
      description: 'Professional two-way radio systems for seamless team coordination',
      link: '/services/communication'
    },
    {
      icon: Bell,
      title: 'Alarm Systems',
      description: 'Advanced security alarms and monitoring solutions',
      link: '/services/alarm'
    },
    {
      icon: Camera,
      title: 'Security Systems',
      description: 'Comprehensive CCTV and access control systems',
      link: '/services/security'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Advanced Technology
                  <span className="block text-blue-300">Solutions</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                  Leading provider of communication, alarm, and security systems in Uganda. 
                  Trusted by businesses for reliable, cutting-edge technology infrastructure.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-400" />
                  <span className="text-sm">Certified Solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Scene3D className="w-full h-96" cameraPosition={[0, 0, 8]}>
                <FloatingLogo />
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
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Network Visualization Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Connected Solutions
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our integrated systems work seamlessly together, providing you with 
                a comprehensive technology ecosystem that grows with your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Seamless integration across all systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Real-time monitoring and alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Scalable architecture for future growth</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Scene3D className="w-full h-96" cameraPosition={[0, 2, 6]}>
                <NetworkVisualization />
              </Scene3D>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Choose COM-TEC?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence in technology solutions backed by years of experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Certified Excellence
              </h3>
              <p className="text-gray-600">
                All our solutions meet international standards and certifications
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Highly trained professionals with extensive industry experience
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Reliable Support
              </h3>
              <p className="text-gray-600">
                24/7 technical support and maintenance services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Upgrade Your Technology?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with our experts today for a free consultation and 
              discover how we can transform your business operations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;