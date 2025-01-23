import React from 'react';
import { ScrollText, ShieldCheck, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header with Background Image */}
      <header className="relative h-[300px] flex items-center justify-center mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <ScrollText className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-gray-200 max-w-2xl mx-auto px-4">
            Please read these terms and conditions carefully before using our services
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <ShieldCheck className="w-8 h-8 text-black" />
            <h2 className="text-2xl font-semibold text-black">Welcome to Our Store</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            By accessing and placing an order with [Store Name], you confirm that you are in
            agreement with and bound by the terms and conditions contained herein.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-16">
          {/* Section 1 */}
          <section className="bg-gray-50 rounded-lg p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-black border-b border-gray-200 pb-4">
              1. General Terms
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                These terms and conditions govern your use of our website and the purchase of
                products from our online store. By accessing our website and/or purchasing
                something from us, you engage in our service and agree to be bound by these
                terms and conditions.
              </p>
              <p>
                You may not use our products for any illegal or unauthorized purpose nor may
                you, in the use of the Service, violate any laws in your jurisdiction.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gray-50 rounded-lg p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-black border-b border-gray-200 pb-4">
              2. Online Store Terms
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                By agreeing to these Terms of Service, you represent that you are at least
                the age of majority in your state or province of residence.
              </p>
              <p>
                You may not use our products for any illegal or unauthorized purpose nor may
                you, in the use of the Service, violate any laws in your jurisdiction.
              </p>
              <p>
                A breach or violation of any of the Terms will result in an immediate
                termination of your Services.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-gray-50 rounded-lg p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-black border-b border-gray-200 pb-4">
              3. Modifications to the Service
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                We reserve the right to modify or discontinue the Service (or any part or
                content thereof) without notice at any time.
              </p>
              <p>
                We shall not be liable to you or to any third-party for any modification,
                price change, suspension or discontinuance of the Service.
              </p>
            </div>
          </section>
        </div>

        {/* Legal Notice */}
        <div className="mt-16 p-8 bg-black text-white rounded-lg">
          <div className="flex items-center space-x-3 mb-6">
            <Scale className="w-8 h-8" />
            <h3 className="text-xl font-semibold">Legal Notice</h3>
          </div>
          <p className="text-gray-300">
            These terms and conditions are subject to change at any time without prior notice.
            By using our website, you acknowledge and agree to be bound by the most current
            version of these terms and conditions.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} [Store Name]. All rights reserved.
            </p>
            <Link to="/shipping" className="text-white hover:text-gray-300 transition-colors">
              Shipping Information
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}