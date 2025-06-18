
import { Button } from "@/components/ui/button";
import { Zap, Sun, Settings } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Powering Kenya with
              <span className="text-yellow-300"> Smart, Sustainable</span>
              <br />Energy Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert electrical consultancy, energy audits, solar installations, and smart grid solutions. 
              ERC-licensed engineers delivering excellence across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Talk to Consultant
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Zap className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Energy Audits</h3>
              <p className="text-blue-100">Comprehensive energy assessments for optimal efficiency</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Sun className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Solar Solutions</h3>
              <p className="text-blue-100">Professional solar installations and maintenance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center col-span-2">
              <Settings className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Grid & Metering</h3>
              <p className="text-blue-100">Advanced power systems for modern Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
