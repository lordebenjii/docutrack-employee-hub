
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Power Your Future?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get a free consultation from our ERC-licensed engineers. 
          Let's discuss how we can optimize your energy systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Get Free Energy Audit
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Phone className="h-5 w-5 mr-2" />
            Call +254 700 123 456
          </Button>
        </div>
        <p className="text-blue-100 mt-6">
          WhatsApp us for instant response: <span className="font-semibold">+254 700 123 456</span>
        </p>
      </div>
    </section>
  );
};

export default CTASection;
