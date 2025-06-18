
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Sun, Settings, Wrench, Search, Bar-Chart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Energy Audits & Compliance",
      description: "Comprehensive energy assessments to optimize consumption and ensure regulatory compliance.",
      features: [
        "Detailed energy consumption analysis",
        "ERC compliance verification",
        "KEBS standards assessment",
        "Cost reduction recommendations",
        "Energy efficiency reports",
        "Carbon footprint analysis"
      ],
      pricing: "Starting from KES 25,000"
    },
    {
      icon: Sun,
      title: "Solar Installations",
      description: "Professional solar panel installations for sustainable energy solutions.",
      features: [
        "Grid-tied solar systems",
        "Off-grid solar solutions",
        "Hybrid solar installations",
        "Solar water heating systems",
        "Battery storage solutions",
        "Maintenance & monitoring"
      ],
      pricing: "From KES 150,000"
    },
    {
      icon: Settings,
      title: "Smart Grid & Metering",
      description: "Advanced metering infrastructure and smart grid implementation.",
      features: [
        "Smart meter installations",
        "Load management systems",
        "Real-time monitoring",
        "Automated switching",
        "Grid optimization",
        "Data analytics platforms"
      ],
      pricing: "Custom pricing"
    },
    {
      icon: Zap,
      title: "Power System Design",
      description: "Custom electrical system design and power distribution solutions.",
      features: [
        "Electrical system planning",
        "Load flow analysis",
        "Protection coordination",
        "Circuit design & layout",
        "Power quality assessment",
        "Safety system design"
      ],
      pricing: "From KES 50,000"
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Comprehensive maintenance for all electrical systems and equipment.",
      features: [
        "Preventive maintenance",
        "Emergency repairs",
        "Equipment upgrades",
        "Thermographic inspections",
        "Annual safety checks",
        "24/7 support contracts"
      ],
      pricing: "Monthly contracts available"
    },
    {
      icon: Bar-Chart,
      title: "Energy Management",
      description: "Complete energy management solutions for optimal efficiency.",
      features: [
        "Energy monitoring systems",
        "Consumption analytics",
        "Cost optimization strategies",
        "Demand response programs",
        "Energy procurement advice",
        "Sustainability reporting"
      ],
      pricing: "From KES 75,000"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive electrical solutions tailored to Kenya's energy landscape. 
              From energy audits to smart grid implementations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-green-600">{service.pricing}</span>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and 
            create a tailored solution for your energy needs.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Schedule Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
