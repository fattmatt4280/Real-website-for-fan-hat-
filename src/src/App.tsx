import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Separator } from './components/ui/separator';
import { 
  Sun, 
  Fan, 
  Battery, 
  Zap, 
  Shield, 
  Clock, 
  Star, 
  Truck, 
  Award, 
  Users, 
  CheckCircle,
  Play,
  ShoppingCart,
  Gift
} from 'lucide-react';

function App() {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('standard');

  const reviews = [
    { name: "Mike Chen", rating: 5, text: "Perfect for fishing trips! The fan keeps me cool all day and the solar charging means I never run out of power." },
    { name: "Sarah Johnson", rating: 5, text: "Game changer for golf! No more sweating through 18 holes. The battery lasts forever and it's surprisingly quiet." },
    { name: "Robert Davis", rating: 4, text: "Great for hiking. The UPF protection is excellent and the fan makes a real difference on hot days." },
    { name: "Lisa Martinez", rating: 5, text: "Bought this for my husband who works outdoors. He loves it! Says it's the best purchase we've made this year." }
  ];

  const features = [
    { icon: <Sun className="w-8 h-8" />, title: "Solar + USB Powered", description: "Dual charging options - never run out of power outdoors" },
    { icon: <Battery className="w-8 h-8" />, title: "16-Hour Battery", description: "All-day cooling with long-lasting lithium battery" },
    { icon: <Fan className="w-8 h-8" />, title: "3 Speed Settings", description: "Adjustable airflow from gentle breeze to powerful cooling" },
    { icon: <Shield className="w-8 h-8" />, title: "UPF 50+ Protection", description: "Maximum sun protection for skin and eyes" },
    { icon: <Zap className="w-8 h-8" />, title: "Hands-Free Cooling", description: "Stay cool without holding anything - perfect for activities" },
    { icon: <Clock className="w-8 h-8" />, title: "Quick Charge", description: "2-hour USB charge or unlimited solar power" }
  ];

  const faqs = [
    {
      question: "Is the fan noisy?",
      answer: "No! The fan operates at whisper-quiet levels (under 30dB) - quieter than most office environments. You'll feel the cooling breeze without any distracting noise."
    },
    {
      question: "How heavy is the hat?",
      answer: "The hat weighs only 320g (11.3oz) - lighter than most baseball caps with batteries. The weight is evenly distributed so you won't feel neck strain even after hours of wear."
    },
    {
      question: "Does it look weird or bulky?",
      answer: "Not at all! The sleek design looks like a premium outdoor hat. The solar panel is seamlessly integrated and the fan is barely visible. Many customers get compliments on the style!"
    },
    {
      question: "How long does the battery last?",
      answer: "Up to 16 hours on low speed, 8 hours on medium, and 4 hours on high speed. Plus, the solar panel provides continuous charging in sunlight, extending battery life indefinitely."
    },
    {
      question: "Is it waterproof?",
      answer: "The hat is water-resistant (IPX4 rated) and can handle light rain and splashes. The electronic components are sealed and protected."
    },
    {
      question: "What's the return policy?",
      answer: "30-day money-back guarantee! If you're not completely satisfied, return it for a full refund. We also include a 1-year warranty on all electronic components."
    }
  ];

  const scrollToOrder = () => {
    const orderSection = document.getElementById('order-section');
    orderSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 text-white">
                🔥 8,000+ Sold Last Month
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Stay Cool Outdoors with 
                <span className="block text-yellow-300">Solar-Powered Comfort</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                The revolutionary YAKINI Solar Fan Hat combines UPF 50+ sun protection with hands-free cooling technology. Perfect for fishing, golf, hiking, and any outdoor activity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" onClick={scrollToOrder} className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Get Yours Now - $30.00
                </Button>
                <Button size="lg" variant="outline" className="text-blue-800 border-white hover:bg-white/10 text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">4.4/5 Rating</span>
                </div>
                <Separator orientation="vertical" className="h-4 bg-blue-300" />
                <span>32 Reviews</span>
                <Separator orientation="vertical" className="h-4 bg-blue-300" />
                <span>✅ 30-Day Guarantee</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/hero-solar-hat.jpg" 
                alt="YAKINI Solar Fan Hat - Ultimate outdoor cooling"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-full font-bold text-sm">
                LIMITED TIME
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Thousands Choose YAKINI Solar Hat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets practical design for the ultimate outdoor cooling solution
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Perfect for Every Outdoor Adventure
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <img 
                src="/images/lifestyle-fishing.jpg" 
                alt="Fishing with solar fan hat"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg">
                <h3 className="font-bold text-gray-900">Fishing & Boating</h3>
                <p className="text-sm text-gray-600">Stay cool for hours on the water</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/lifestyle-sports.jpg" 
                alt="Golf and outdoor sports with solar hat"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg">
                <h3 className="font-bold text-gray-900">Golf & Sports</h3>
                <p className="text-sm text-gray-600">Focus on your game, not the heat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-lg font-semibold">4.4/5 from 32 reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-sm font-semibold">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            See It In Action
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-200 rounded-2xl aspect-video flex items-center justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Play className="w-8 h-8 mr-2" />
                Watch Product Demo
              </Button>
            </div>
            <p className="mt-4 text-gray-600">
              See how the YAKINI Solar Hat keeps you cool and comfortable during any outdoor activity
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="order-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-red-500 hover:bg-red-600 text-white text-lg px-4 py-2">
                🚨 LIMITED TIME OFFER
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get Your YAKINI Solar Hat Today
              </h2>
              <p className="text-lg text-gray-600">
                Join thousands of satisfied customers staying cool outdoors
              </p>
            </div>
            
            <Card className="border-2 border-orange-200 shadow-xl">
              <CardHeader className="text-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl">YAKINI Solar Fan Hat</CardTitle>
                <CardDescription className="text-orange-100">
                  UPF 50+ Protection + Solar Powered Cooling
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl text-gray-400 line-through">$49.99</span>
                    <span className="text-5xl font-bold text-green-600">$30.00</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800 text-sm">
                    Save $19.99 (40% OFF)
                  </Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="variant" className="text-sm font-medium">
                        Style
                      </Label>
                      <Select value={variant} onValueChange={setVariant}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard - Black</SelectItem>
                          <SelectItem value="navy">Navy Blue</SelectItem>
                          <SelectItem value="khaki">Khaki</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="quantity" className="text-sm font-medium">
                        Quantity
                      </Label>
                      <Select value={quantity.toString()} onValueChange={(val) => setQuantity(parseInt(val))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Hat - $30.00</SelectItem>
                          <SelectItem value="2">2 Hats - $55.00 (Save $5)</SelectItem>
                          <SelectItem value="3">3 Hats - $75.00 (Save $15)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span>Total:</span>
                      <span className="text-green-600">${quantity === 1 ? '30.00' : quantity === 2 ? '55.00' : '75.00'}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Free shipping included</p>
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-4 mb-4">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - Order Now
                </Button>

                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    30-Day Guarantee
                  </div>
                  <div className="flex items-center">
                    <Truck className="w-4 h-4 text-blue-500 mr-1" />
                    Free Shipping
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">Fast & reliable delivery worldwide</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1-Year Warranty</h3>
              <p className="text-sm text-gray-600">Full protection on all components</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">8K+ Happy Customers</h3>
              <p className="text-sm text-gray-600">Join our growing community</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Gift className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">30-Day Returns</h3>
              <p className="text-sm text-gray-600">Not satisfied? Full refund guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">YAKINI Solar Hat</h3>
              <p className="text-gray-400">
                Revolutionary outdoor cooling technology for the modern adventurer.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Contact Us</li>
                <li>Shipping Info</li>
                <li>Returns & Exchanges</li>
                <li>Size Guide</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Reviews</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: support@yakini.com</li>
                <li>Phone: 1-800-YAKINI</li>
                <li>Live Chat Available</li>
                <li>Mon-Fri 9AM-6PM EST</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2025 YAKINI. All rights reserved. | Designed for outdoor enthusiasts worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
