
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Sun, Settings, Wrench, Search, Bar-Chart } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Search,
      title: "Energy Audits & Compliance",
      description: "Comprehensive energy assessments and ERC compliance checks for businesses and homes.",
      features: ["KEBS Standards Compliance", "Energy Efficiency Reports", "Cost Reduction Analysis"]
    },
    {
      icon: Sun,
      title: "Solar Installations",
      description: "Professional solar panel installations for residential, commercial, and industrial clients.",
      features: ["Grid-tied Systems", "Off-grid Solutions", "Maintenance Services"]
    },
    {
      icon: Settings,
      title: "Smart Grid Solutions",
      description: "Advanced metering and smart grid implementations for modern energy management.",
      features: ["Smart Metering", "Load Management", "Real-time Monitoring"]
    },
    {
      icon: Zap,
      title: "Power System Design",
      description: "Custom electrical system design and consultation for optimal power distribution.",
      features: ["System Planning", "Load Calculations", "Safety Assessments"]
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Preventive and corrective maintenance for electrical systems and equipment.",
      features: ["Scheduled Maintenance", "Emergency Repairs", "Equipment Upgrades"]
    },
    {
      icon: Bar-Chart,
      title: "Energy Management",
      description: "Comprehensive energy management solutions to optimize consumption and costs.",
      features: ["Usage Analytics", "Cost Optimization", "Efficiency Improvements"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From energy audits to smart grid solutions, we provide comprehensive electrical services 
            tailored to Kenya's unique energy landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
