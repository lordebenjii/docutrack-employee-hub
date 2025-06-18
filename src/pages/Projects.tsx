
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Map, Zap, Users, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Nairobi Business Park Solar Installation",
      type: "Commercial Solar",
      location: "Nairobi, Kenya",
      capacity: "500kW",
      year: "2023",
      description: "Complete solar installation for a major business park in Nairobi, reducing electricity costs by 60%.",
      features: ["Grid-tied system", "Battery backup", "Real-time monitoring", "25-year warranty"],
      image: "/placeholder.svg"
    },
    {
      title: "Mombasa Port Authority Energy Audit",
      type: "Energy Audit",
      location: "Mombasa, Kenya",
      capacity: "2MW facility",
      year: "2023",
      description: "Comprehensive energy audit resulting in 30% reduction in energy consumption.",
      features: ["Load analysis", "Efficiency improvements", "Cost optimization", "Compliance reporting"],
      image: "/placeholder.svg"
    },
    {
      title: "Kisumu Industrial Smart Grid",
      type: "Smart Grid",
      location: "Kisumu, Kenya",
      capacity: "1.2MW",
      year: "2022",
      description: "Smart grid implementation for industrial complex with automated load management.",
      features: ["Smart metering", "Load balancing", "Automated switching", "Remote monitoring"],
      image: "/placeholder.svg"
    },
    {
      title: "Nakuru Hospital Backup Power",
      type: "Power Systems",
      location: "Nakuru, Kenya",
      capacity: "300kW",
      year: "2022",
      description: "Critical backup power systems design and installation for regional hospital.",
      features: ["UPS systems", "Generator backup", "Automatic transfer", "24/7 monitoring"],
      image: "/placeholder.svg"
    },
    {
      title: "Rural Electrification - Kajiado",
      type: "Off-grid Solar",
      location: "Kajiado, Kenya",
      capacity: "50kW",
      year: "2023",
      description: "Off-grid solar installation serving 200+ households in rural Kajiado.",
      features: ["Community solar", "Micro-grid", "Mobile payment integration", "Local training"],
      image: "/placeholder.svg"
    },
    {
      title: "Eldoret University Campus Upgrade",
      type: "Electrical Systems",
      location: "Eldoret, Kenya",
      capacity: "800kW",
      year: "2022",
      description: "Complete electrical system upgrade including power distribution and lighting.",
      features: ["Power distribution", "LED lighting", "Safety systems", "Energy monitoring"],
      image: "/placeholder.svg"
    }
  ];

  const projectTypes = ["All", "Solar", "Energy Audit", "Smart Grid", "Power Systems"];
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Showcasing successful electrical projects across Kenya. From Nairobi's commercial 
              districts to rural solar installations.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50MW+</div>
              <div className="text-gray-600">Total Capacity Installed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">40+</div>
              <div className="text-gray-600">Counties Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary">{project.type}</Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Map className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Zap className="h-4 w-4 mr-2" />
                      {project.capacity}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "VoltEdge Kenya delivered an exceptional solar installation that exceeded our expectations. 
                  Our energy costs have dropped by 60% since the installation."
                </p>
                <div className="font-semibold">- Sarah Kimani</div>
                <div className="text-sm text-gray-500">Facilities Manager, Nairobi Business Park</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "Their energy audit was comprehensive and professional. The recommendations they provided 
                  helped us achieve significant cost savings."
                </p>
                <div className="font-semibold">- John Ochieng</div>
                <div className="text-sm text-gray-500">Operations Director, Mombasa Port Authority</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "The smart grid solution has revolutionized our power management. The system is reliable 
                  and the support team is always responsive."
                </p>
                <div className="font-semibold">- Mary Wanjiku</div>
                <div className="text-sm text-gray-500">Plant Manager, Kisumu Industrial Complex</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
