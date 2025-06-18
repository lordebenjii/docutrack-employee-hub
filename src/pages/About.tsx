
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Zap, Info } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About VoltEdge Kenya</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading Kenya's energy transformation with innovative electrical solutions, 
              sustainable practices, and unmatched expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To provide world-class electrical consultancy and energy solutions that power Kenya's 
                  growth while promoting sustainable energy practices and ensuring compliance with local 
                  and international standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Info className="h-6 w-6 text-green-600 mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To be Kenya's most trusted electrical consultancy firm, leading the transition to 
                  smart, sustainable energy systems across residential, commercial, and industrial sectors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Founded in 2018, VoltEdge Kenya emerged from a vision to bridge the gap between 
                Kenya's growing energy needs and sustainable solutions. Our team of ERC-licensed 
                engineers recognized the need for professional electrical consultancy services 
                that understand both local requirements and international best practices.
              </p>
              <p className="mb-6">
                Starting with energy audits for small businesses in Nairobi, we have grown to 
                serve clients across Kenya, from major commercial installations in Mombasa to 
                off-grid solar solutions in rural communities. Our expertise spans the entire 
                spectrum of electrical services, always with a focus on efficiency, safety, and sustainability.
              </p>
              <p>
                Today, we're proud to be trusted advisors to businesses, homeowners, and 
                institutions across Kenya, helping them navigate the evolving energy landscape 
                while reducing costs and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expert Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Engineering Team</CardTitle>
                <CardDescription>ERC-Licensed Electrical Engineers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our core team consists of qualified electrical engineers with valid licenses 
                  from the Engineers Registration Board (ERB) and Energy and Petroleum Regulatory Authority.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Solar Specialists</CardTitle>
                <CardDescription>Certified Solar Installation Experts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specialized team for solar energy systems with certifications in photovoltaic 
                  design, installation, and maintenance following KEBS standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Info className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Compliance Experts</CardTitle>
                <CardDescription>ERC & KEBS Standards Specialists</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dedicated professionals ensuring all projects meet Kenya's electrical codes, 
                  ERC regulations, and international safety standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
