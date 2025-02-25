
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonTable from '@/components/cybersecurity/ComparisonTable';

const KnowledgeBase = () => {
  return (
    <div className="min-h-screen bg-[#0F1115]">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Security Knowledge Base
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive resources and comparisons of security frameworks and best practices
          </p>
        </div>
        <div className="glass">
          <ComparisonTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KnowledgeBase;

