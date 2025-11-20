import React from 'react'

export const ServiceSection = () => {
  const services = [
    { name: 'Yoga', description: 'Improve flexibility, balance, and mental well-being through guided yoga sessions.' },
    { name: 'Zumba', description: 'High-energy dance workouts that combine Latin music with easy-to-follow moves.' },
    { name: 'CrossFit', description: 'High-intensity functional training to build strength, endurance, and agility.' },
    { name: 'Aerobics', description: 'Cardiovascular exercises to boost heart health and burn calories.' },
    { name: 'Functional Strengthening', description: 'Targeted exercises to improve everyday movement and prevent injuries.' },
    { name: 'Physique Transformation', description: 'Personalized programs to reshape your body and achieve your fitness goals.' },
    { name: 'Cardio', description: 'Effective cardiovascular training to improve stamina and overall fitness.' },
    { name: 'Weight Training', description: 'Strength building exercises using free weights and machines.' },
  ]

  return (
    <section id="services" className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#2C1A0D]">Our Services</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Discover our range of specialized fitness programs designed for women</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-[#C01818]"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#2C1A0D]">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-[#C01818] font-semibold hover:text-[#8A0F0F] transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
