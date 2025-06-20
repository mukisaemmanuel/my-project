import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Bell, Camera, ArrowRight, Check } from 'lucide-react';
import Scene3D from '../components/3d/Scene3D';
import ProductModel from '../components/3d/ProductModel';

const Services: React.FC = () => {
  const services = [
    {
      icon: Radio,
      title: 'Communication Systems',
      description: 'Professional two-way radio systems, intercom solutions, and wireless communication networks designed for seamless team coordination.',
      features: ['Two-way Radio Systems', 'Intercom Solutions', 'Wireless Networks', 'Push-to-Talk Solutions'],
      link: '/services/communication',
      color: 'blue',
      modelType: 'radio' as const
    },
    {
      icon: Bell,
      title: 'Alarm Systems',
      description: 'Advanced security alarm systems with real-time monitoring, intrusion detection, and automated emergency response capabilities.',
      features: ['Intrusion Detection', 'Fire Alarm Systems', 'Emergency Response', '24/7 Monitoring'],
      link: '/services/alarm',
      color: 'red',
      modelType: 'alarm' as const
    },
    {
      icon: Camera,
      title: 'Security Systems',
      description: 'Comprehensive CCTV surveillance, access control systems, and integrated security solutions for complete protection.',
      features: ['CCTV Surveillance', 'Access Control', 'Biometric Systems', 'Integrated Security'],
      link: '/services/security',
      color: 'green',
      modelType: 'camera' as const
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to meet your business needs. 
              From communication systems to advanced security solutions, we deliver excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center`}>
                        <IconComponent className={`h-8 w-8 text-${service.color}-600`} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className={`h-5 w-5 text-${service.color}-600`} />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to={service.link}
                      className={`inline-flex items-center bg-${service.color}-600 hover:bg-${service.color}-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 space-x-2`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                      <Scene3D className="w-full h-80" cameraPosition={[0, 0, 4]}>
                        <ProductModel type={service.modelType} />
                      </Scene3D>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We analyze your needs and requirements' },
              { step: '02', title: 'Design', description: 'Custom solution design and planning' },
              { step: '03', title: 'Installation', description: 'Professional installation and setup' },
              { step: '04', title: 'Support', description: 'Ongoing maintenance and support' }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Contact our experts today for a free consultation and customized solution for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;