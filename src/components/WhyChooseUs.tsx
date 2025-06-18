
import { Card, CardContent } from "@/components/ui/card";
import { Users, Settings, Zap, Info } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "ERC-Licensed Engineers",
      description: "Our team consists of qualified electrical engineers licensed by the Energy and Petroleum Regulatory Authority (EPRA) of Kenya."
    },
    {
      icon: Zap,
      title: "Proven Track Record",
      description: "Over 500+ successful projects across Kenya, from Nairobi's commercial districts to rural solar installations."
    },
    {
      icon: Settings,
      title: "Latest Technology",
      description: "We use cutting-edge equipment and follow international standards while complying with local KEBS regulations."
    },
    {
      icon: Info,
      title: "Local Expertise",
      description: "Deep understanding of Kenya's energy sector, from KPLC grid requirements to off-grid solutions for remote areas."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose VoltEdge Kenya?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine international expertise with local knowledge to deliver 
            exceptional electrical solutions across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center border-0 shadow-none">
              <CardContent className="pt-8">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
