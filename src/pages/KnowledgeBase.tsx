
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonTable from '@/components/cybersecurity/ComparisonTable';

const KnowledgeBase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <div className="container mx-auto py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Security Knowledge Base
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive resources and comparisons of security frameworks and best practices
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <ComparisonTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KnowledgeBase;
