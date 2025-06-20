import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Shield, Smartphone, Zap, ArrowRight, Check, AlertTriangle } from 'lucide-react';
import Scene3D from '../components/3d/Scene3D';
import ProductModel from '../components/3d/ProductModel';

const Alarm: React.FC = () => {
  const features = [
    {
      icon: Bell,
      title: 'Intrusion Detection',
      description: 'Advanced sensors and motion detectors for comprehensive perimeter security'
    },
    {
      icon: Shield,
      title: 'Fire Alarm Systems',
      description: 'Early fire detection with smoke, heat, and flame sensors'
    },
    {
      icon: Smartphone,
      title: 'Mobile Alerts',
      description: 'Real-time notifications sent directly to your smartphone'
    },
    {
      icon: Zap,
      title: 'Emergency Response',
      description: 'Automatic emergency service notification and response protocols'
    }
  ];

  const alarmTypes = [
    {
      title: 'Burglar Alarm Systems',
      description: 'Complete intrusion detection with door/window sensors, motion detectors, and control panels',
      features: ['PIR Motion Sensors', 'Door/Window Contacts', 'Glass Break Detectors', 'Control Keypads']
    },
    {
      title: 'Fire Alarm Systems',
      description: 'Advanced fire detection and notification systems for early warning and safety',
      features: ['Smoke Detectors', 'Heat Sensors', 'Manual Call Points', 'Fire Alarm Panels']
    },
    {
      title: 'Panic Alarm Systems',
      description: 'Emergency panic buttons and duress alarms for personal safety and security',
      features: ['Panic Buttons', 'Duress Codes', 'Silent Alarms', 'Emergency Contacts']
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-red-300">
                <Bell className="h-6 w-6" />
                <span className="font-semibold">Alarm Systems</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Advanced Security Alarm Solutions
              </h1>
              <p className="text-xl text-red-100 leading-relaxed">
                Protect your property with our comprehensive alarm systems featuring intrusion detection, 
                fire alarms, and emergency response capabilities with 24/7 monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-300"
                >
                  <span>Get Protection</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Scene3D className="w-full h-96" cameraPosition={[0, 0, 4]}>
                <ProductModel type="alarm" />
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
              Comprehensive Alarm Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our alarm systems provide multi-layered protection with advanced detection and response capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-7 w-7 text-red-600" />
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

      {/* Alarm Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Types of Alarm Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of specialized alarm systems designed for different security needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {alarmTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Components:</h4>
                    <div className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                24/7 Protection & Monitoring
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our alarm systems provide round-the-clock protection with professional monitoring services, 
                ensuring immediate response to any security threats or emergencies.
              </p>
              
              <div className="space-y-4">
                {[
                  'Instant alert notifications',
                  'Professional monitoring center',
                  'Emergency service dispatch',
                  'Mobile app control',
                  'Multiple zone monitoring',
                  'Backup power systems',
                  'False alarm reduction',
                  'System health monitoring'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Emergency Response</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  When an alarm is triggered, our monitoring center immediately verifies the threat 
                  and dispatches appropriate emergency services within seconds.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-1">&lt;30s</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Smart Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our alarm systems integrate seamlessly with other security components for comprehensive protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <Shield className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">CCTV Integration</h3>
              <p className="text-gray-300">
                Alarm triggers automatically activate camera recording and live viewing
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl">
              <Smartphone className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile Control</h3>
              <p className="text-gray-300">
                Arm, disarm, and monitor your alarm system from anywhere using our mobile app
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl">
              <Zap className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Access Control</h3>
              <p className="text-gray-300">
                Integrated with access control systems for complete security automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Secure Your Property Today
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Don't wait for a security incident. Get comprehensive alarm system protection with professional monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-300 space-x-2"
              >
                <span>Get Security Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/brands"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                View Equipment Brands
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alarm;