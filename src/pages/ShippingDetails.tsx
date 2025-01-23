import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Package, Clock, Globe, MapPin, ArrowLeft } from 'lucide-react';

function ShippingDetails() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header with Background Image */}
      <header className="relative h-[300px] flex items-center justify-center mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Truck className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shipping Information</h1>
          <p className="text-gray-200 max-w-2xl mx-auto px-4">
            Learn about our shipping methods, delivery times, and policies
          </p>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Terms & Conditions
        </Link>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Shipping Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Standard Shipping */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
            <Package className="w-10 h-10 text-black mb-4" />
            <h3 className="text-xl font-semibold mb-3">Standard Shipping</h3>
            <p className="text-gray-600 mb-4">5-7 business days</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Free for orders over $50</li>
              <li>• $4.99 for orders under $50</li>
              <li>• Tracking included</li>
            </ul>
          </div>

          {/* Express Shipping */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
            <Clock className="w-10 h-10 text-black mb-4" />
            <h3 className="text-xl font-semibold mb-3">Express Shipping</h3>
            <p className="text-gray-600 mb-4">2-3 business days</p>
            <ul className="space-y-2 text-gray-700">
              <li>• $9.99 flat rate</li>
              <li>• Priority handling</li>
              <li>• Real-time tracking</li>
            </ul>
          </div>

          {/* International Shipping */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
            <Globe className="w-10 h-10 text-black mb-4" />
            <h3 className="text-xl font-semibold mb-3">International</h3>
            <p className="text-gray-600 mb-4">7-14 business days</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Rates vary by location</li>
              <li>• Customs fees may apply</li>
              <li>• International tracking</li>
            </ul>
          </div>
        </div>

        {/* Shipping Policies */}
        <div className="space-y-12">
          <section className="bg-gray-50 rounded-lg p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-black border-b border-gray-200 pb-4">
              Shipping Policies
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                All orders are processed within 1-2 business days. Orders placed after 2 PM EST
                will be processed the next business day. We do not ship on weekends or holidays.
              </p>
              <p>
                Once your order ships, you will receive a confirmation email with tracking
                information. You can track your order status at any time through your account
                dashboard.
              </p>
            </div>
          </section>

          {/* Delivery Information */}
          <section className="bg-gray-50 rounded-lg p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-black border-b border-gray-200 pb-4">
              Delivery Information
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Most deliveries are made Monday through Friday between 9 AM and 5 PM local time.
                We cannot guarantee specific delivery times, but you can track your package for
                estimated delivery windows.
              </p>
              <p>
                For apartment buildings, packages will be delivered to the building's main
                entrance or package room. Special delivery instructions can be added during checkout.
              </p>
            </div>
          </section>
        </div>

        {/* Contact Information */}
        <div className="mt-16 p-8 bg-black text-white rounded-lg">
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="w-8 h-8" />
            <h3 className="text-xl font-semibold">Need Help?</h3>
          </div>
          <p className="text-gray-300 mb-4">
            If you have any questions about shipping or delivery, our customer service team is
            here to help.
          </p>
          <p className="text-gray-300">
            Email: shipping@store.com<br />
            Phone: 1-800-SHIPPING (1-800-744-77464)
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} [Store Name]. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ShippingDetails;