import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Target, Heart, ArrowRight, Clock, Shield, Zap } from 'lucide-react';
import Scene3D from '../components/3d/Scene3D';
import NetworkVisualization from '../components/3d/NetworkVisualization';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and industry standards.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our commitment to reliability ensures your systems work when you need them most, backed by proven technology.'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Customer satisfaction is at the heart of everything we do, from initial consultation to ongoing support.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and innovative solutions to solve complex challenges.'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'COM-TEC (U) LTD established with a vision to provide advanced technology solutions in Uganda'
    },
    {
      year: '2013',
      title: 'First Major Contract',
      description: 'Secured our first major security installation for a leading commercial complex'
    },
    {
      year: '2016',
      title: 'Team Expansion',
      description: 'Expanded our technical team and established partnerships with international brands'
    },
    {
      year: '2019',
      title: '500+ Projects',
      description: 'Reached milestone of 500 completed projects across various industries'
    },
    {
      year: '2022',
      title: 'Technology Innovation',
      description: 'Introduced AI-powered security solutions and smart building technologies'
    },
    {
      year: '2025',
      title: 'Market Leadership',
      description: 'Recognized as Uganda\'s leading provider of integrated technology solutions'
    }
  ];

  const team = [
    {
      name: 'David Mukasa',
      role: 'Managing Director',
      bio: 'Over 15 years of experience in technology solutions and business development.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Namukasa',
      role: 'Technical Director',
      bio: 'Expert in security systems with international certifications and training.',
      image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'James Okello',
      role: 'Operations Manager',
      bio: 'Specialist in project management and customer service excellence.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Grace Akello',
      role: 'Systems Engineer',
      bio: 'Communication systems expert with focus on innovative solutions.',
      image: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                About COM-TEC
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                We are Uganda's leading provider of advanced communication and security solutions, 
                committed to delivering innovative technology that protects and connects businesses across the region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-300"
                >
                  <span>Work With Us</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Scene3D className="w-full h-96" cameraPosition={[0, 2, 8]}>
                <NetworkVisualization />
              </Scene3D>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide innovative, reliable, and cost-effective technology solutions that enhance 
                  security, improve communication, and drive business success for our clients across Uganda and beyond.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">What We Believe</h3>
                <p className="text-blue-800">
                  Technology should simplify complex challenges, not create them. We believe in solutions 
                  that are both sophisticated and user-friendly, backed by exceptional service and support.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the most trusted technology partner in East Africa, recognized for our expertise, 
                  innovation, and commitment to transforming how businesses operate and protect their assets.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Looking Forward</h3>
                <p className="text-green-800">
                  We envision a future where advanced technology is accessible to all businesses, 
                  enabling them to compete globally while maintaining the highest standards of security and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and evolution as a technology solutions provider
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}>
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed', icon: Award },
              { number: '50+', label: 'Happy Clients', icon: Users },
              { number: '15+', label: 'Years Experience', icon: Clock },
              { number: '24/7', label: 'Support Available', icon: Shield }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center space-y-3">
                  <IconComponent className="h-12 w-12 text-blue-200 mx-auto" />
                  <div className="text-3xl sm:text-4xl font-bold">
                    {stat.number}
                  </div>
                  <div className="text-blue-100">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Join the growing number of businesses that trust COM-TEC for their technology needs. 
              Let's discuss how we can help transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;