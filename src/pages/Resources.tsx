
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Info, Zap, Sun } from "lucide-react";

const Resources = () => {
  const energyTips = [
    {
      title: "Home Energy Efficiency",
      icon: Zap,
      tips: [
        "Switch to LED lighting - save up to 80% on lighting costs",
        "Unplug electronics when not in use to reduce phantom loads",
        "Use energy-efficient appliances with high star ratings",
        "Optimize air conditioning - set to 24°C for best efficiency",
        "Install programmable thermostats for better temperature control"
      ]
    },
    {
      title: "Solar Energy Optimization",
      icon: Sun,
      tips: [
        "Face solar panels south for maximum sunlight exposure",
        "Keep panels clean - dirty panels lose 15-20% efficiency",
        "Monitor system performance through mobile apps",
        "Consider battery storage for backup power during outages",
        "Schedule high-energy activities during peak solar hours"
      ]
    },
    {
      title: "Business Energy Management",
      icon: Info,
      tips: [
        "Conduct regular energy audits to identify waste",
        "Implement demand response programs to reduce peak charges",
        "Use power factor correction to improve electrical efficiency",
        "Install motion sensors for automatic lighting control",
        "Consider time-of-use tariffs for cost optimization"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I understand my KPLC electricity bill?",
      answer: "Your KPLC bill includes energy charges (per kWh consumed), demand charges (for commercial users), fuel cost adjustment, taxes, and connection fees. The energy charge varies based on your consumption tier - domestic users pay different rates for 0-50, 51-1500, and above 1500 units."
    },
    {
      question: "What are ERC requirements for electrical installations?",
      answer: "The Energy and Petroleum Regulatory Authority (EPRA) requires all electrical installations to comply with KEBS standards. This includes proper earthing, circuit protection, certified materials, and installation by licensed electricians. Commercial installations require ERC approval before connection."
    },
    {
      question: "How much can I save with solar energy in Kenya?",
      answer: "Solar installations in Kenya typically reduce electricity bills by 50-90% depending on system size and consumption patterns. With Kenya's abundant sunshine (4-6 peak sun hours daily), most systems pay for themselves within 3-5 years."
    },
    {
      question: "What is net metering and is it available in Kenya?",
      answer: "Net metering allows you to feed excess solar power back to the grid and receive credits. KPLC offers net metering for systems up to 1MW, though the current regulations limit export to 50% of your average consumption."
    },
    {
      question: "Do I need permits for solar installation?",
      answer: "Yes, solar installations require approval from your local county government and KPLC if you plan to connect to the grid. Systems above 1MW also need ERC licensing. We handle all permit applications for our clients."
    }
  ];

  const downloads = [
    {
      title: "Solar Installation Guide for Nairobi Homes",
      description: "Complete guide covering system sizing, costs, and installation process for residential solar in Nairobi.",
      size: "2.5 MB",
      type: "PDF"
    },
    {
      title: "Energy Efficiency Checklist for Businesses",
      description: "Comprehensive checklist to identify energy saving opportunities in commercial buildings.",
      size: "1.8 MB",
      type: "PDF"
    },
    {
      title: "KEBS Electrical Standards Compliance Guide",
      description: "Essential guide to meeting Kenya Bureau of Standards requirements for electrical installations.",
      size: "3.2 MB",
      type: "PDF"
    },
    {
      title: "Smart Metering Benefits for Industries",
      description: "How smart metering can optimize energy consumption and reduce costs for industrial facilities.",
      size: "2.1 MB",
      type: "PDF"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Guides</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expert knowledge, practical guides, and answers to common questions about 
              electrical systems and energy management in Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Energy Saving Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Energy-Saving Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {energyTips.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Download Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((download, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Download className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{download.title}</CardTitle>
                        <CardDescription className="mt-2">{download.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {download.type} • {download.size}
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest energy tips, industry updates, and exclusive guides delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
