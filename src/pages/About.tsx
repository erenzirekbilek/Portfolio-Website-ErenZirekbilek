import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Software Development',
      description: 'React JS, Java, and modern JavaScript frameworks',
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with attention to detail',
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Building fast, efficient applications with optimal user experience',
      color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working effectively with teams using modern development workflows',
      color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
IoT ve web teknolojileri gibi alanlarda edindiğim deneyimlerle sürekli öğrenmeyi ve üretmeyi hedefleyen bir geliştiriciyim.
React.js ile modern ve kullanıcı dostu web arayüzleri geliştirirken, Python ve Raspberry Pi kullanarak IoT tabanlı çözümler üzerinde çalıştım. Ayrıca Unity ile mobil oyun geliştirme konusuna hobi olarak ilgi duyuyor, teknik ve yaratıcı yönümü bu alanda geliştiriyorum. Farklı disiplinlerde kazandığım bu deneyimler; analitik düşünme, problem çözme ve kullanıcı odaklı yazılım geliştirme becerilerimi pekiştirdi. Hedefim, işlevsel, ölçeklenebilir ve yenilikçi yazılım çözümleri üreterek teknoloji ile insan yaşamı arasında güçlü bir bağ kurmaktır.            </p>
             
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                  <Award className="w-5 h-5 mr-2" />
                  Download Resume
                </button>
                <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-all duration-200">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Certifications
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-gray-400 dark:text-gray-500">EZ</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Code className="w-10 h-10 text-gray-800" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                  <Palette className="w-8 h-8 text-gray-800" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do Best
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I focus on creating exceptional digital experiences through a combination of technical expertise and creative problem-solving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className={`inline-flex p-3 rounded-lg ${skill.color} mb-4`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A timeline of my professional growth and key milestones in my development career
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>
            
            {[
              {
                year: '2024-2025',
                title: 'Software Engineer',
                company: 'Hometech',
                description: 'Python Flask tabanlı bir web arayüzü geliştirilerek, TLS destekli güvenli MQTT haberleşmesi ve uzaktan MIMO anten yönlendirmesi sağlanmış; ayrıca TÜBİTAK destekli projelerde planlama, dokümantasyon ve süreç takibi görevleri üstlenilmiştir.'
              },
              {
                year: '2023',
                title: 'Electric Electronic Engineer',
                company: 'AKE Elevator and Disabled Systems',
                description: 'Python ile bakım ve arıza verileri analiz edildi. Pandas ve PyTorch kütüphaneleriyle sistematik müdahale yapısı oluşturuldu. Asansör ana kontrol kartı yazılım güncellemeleri ve optimizasyonu üzerinde çalışıldı'
              },
              {
                year: '2023',
                title: 'Long Term Intern',
                company: 'KSB Pump Valve Industry and Trade Inc.',
                description: 'DCtoPWM dönüştürücü ve motor hız kontrol projelerinde tasarım, simülasyon ve test süreçlerine aktif olarak rol alındı. SPI haberleşme protokolü kullanılarak kartlar arası iletişim gerçekleştirildi. ARM ve Atmel işlemcilerle sürücü kartı yazılımı üzerinde geliştirmeler yapıldı.'
              },
              {
                year: '2022',
                title: 'Hardware Design Intern',
                company: 'KSB Pump Valve Industry and Trade Inc.',
                description: 'Motor sürücü kartı projelerinin tasarım ve test süreçlerine aktif olarak katılım sağlandı. Şematik ve PCB tasarımları Altium ve OrCAD kullanılarak yapıldı. Motor sürücü devreleri Proteus ve LT Spice yazılımları kullanılarak simüle edildi.'
              },
              {
                year: '2021',
                title: 'Software Developer Intern',
                company: 'Medron Technology',
                description: 'Karayolları durum tespiti için yoldaki sıcaklık, basınç ve nem verileri ölçülüp SPI haberleşme protokolü kullanılarak uzak mesafeli  LoRa modülleri arasında iletildi. MQTT protokolü aracılığıyla sensörlerden toplanan veriler, merkezi bir bulut sunucusuna aktarıldı.RS485 ve I2C protokolleri kullanılarak sıcaklık ve basınç sensörlerinden kalman algoritması kullanılarak veri toplandı. Projelerde STM, ESP32, Arduino ve Raspberry Pi 3 kartları kullanıldı. '
              }
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;