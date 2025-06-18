
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Map, Zap } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to power your future? Get in touch with our expert team for 
              consultations, quotes, or emergency support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Phone Numbers</h3>
                        <p className="text-gray-600 mt-1">Main: +254 700 123 456</p>
                        <p className="text-gray-600">Emergency: +254 701 234 567</p>
                        <p className="text-gray-600">WhatsApp: +254 700 123 456</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email Addresses</h3>
                        <p className="text-gray-600 mt-1">General: info@voltedgekenya.com</p>
                        <p className="text-gray-600">Support: support@voltedgekenya.com</p>
                        <p className="text-gray-600">Sales: sales@voltedgekenya.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Map className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Office Location</h3>
                        <p className="text-gray-600 mt-1">
                          VoltEdge Kenya Ltd<br/>
                          Westlands Business Park<br/>
                          Ring Road, Westlands<br/>
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Zap className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Working Hours</h3>
                        <p className="text-gray-600 mt-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                        <p className="text-gray-600">Sunday: Emergency calls only</p>
                        <p className="text-sm text-green-600 mt-2">24/7 emergency support available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Doe" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="john@example.com" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input placeholder="+254 700 123 456" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>Select a service</option>
                        <option>Energy Audit</option>
                        <option>Solar Installation</option>
                        <option>Smart Grid Solutions</option>
                        <option>Power System Design</option>
                        <option>Maintenance Services</option>
                        <option>Emergency Support</option>
                        <option>General Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Location
                      </label>
                      <Input placeholder="Nairobi, Kenya" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Please describe your project requirements or questions..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Find Our Office</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Interactive map showing our office location in Westlands, Nairobi
              </p>
              <p className="text-sm text-gray-500 mt-2">
                (Google Maps integration would be implemented here)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-green-100 mb-8">
            Chat with us on WhatsApp for instant support and quick responses to your questions.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
            <Phone className="h-5 w-5 mr-2" />
            WhatsApp: +254 700 123 456
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
