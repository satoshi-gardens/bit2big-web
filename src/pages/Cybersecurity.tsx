import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, FileSearch, Cog, Users, Terminal, Lock, Server, Cloud, CheckCircle2, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cybersecurity = () => {
  const services = [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Enterprise Security Architecture",
      description: "Comprehensive security solutions including SOC/SIEM implementation, Microsoft Defender for Cloud, and hybrid cloud security architectures.",
      techStack: ["Azure Sentinel", "Microsoft Defender", "Splunk", "ELK Stack"],
      detailedInfo: "Our enterprise security architecture service provides end-to-end protection for your organization. We implement state-of-the-art Security Operations Centers (SOC) and Security Information and Event Management (SIEM) systems, ensuring 24/7 monitoring and threat detection."
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "On-Premises & Hybrid Infrastructure Security",
      description: "Comprehensive security solutions for traditional data centers and hybrid environments, including PKI infrastructure, HSM deployment, and advanced Linux security hardening.",
      techStack: ["HSM", "PKI", "SELinux", "Red Hat", "VMware Security"],
      detailedInfo: "We provide robust security solutions for on-premises and hybrid infrastructures, implementing Hardware Security Modules (HSM), managing Public Key Infrastructure (PKI), and applying advanced security hardening techniques for traditional and virtualized environments."
    },
    {
      icon: <Cloud className="w-6 h-6 text-white" />,
      title: "Cloud Security",
      description: "Implementation of secure cloud environments across Azure and AWS, with focus on compliance and best practices.",
      techStack: ["Azure", "AWS", "OpenShift", "Docker", "Kubernetes"],
      detailedInfo: "Our cloud security services ensure that your cloud environments are secure and compliant with industry standards. We implement best practices for cloud security architecture and continuous monitoring."
    },
    {
      icon: <Terminal className="w-6 h-6 text-white" />,
      title: "SecOps Implementation",
      description: "Integration of security into DevOps pipelines, automated security testing, and continuous monitoring.",
      techStack: ["Jenkins", "Azure DevOps", "Terraform", "Ansible"],
      detailedInfo: "We help organizations integrate security into their DevOps processes, ensuring that security is a fundamental part of the software development lifecycle."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Security Training & Awareness",
      description: "Comprehensive cybersecurity awareness programs and ethical hacking training for organizations.",
      techStack: ["CEH", "Incident Response", "Security Awareness"],
      detailedInfo: "Our training programs equip your team with the knowledge and skills needed to recognize and respond to security threats effectively."
    },
    {
      icon: <Server className="w-6 h-6 text-white" />,
      title: "Compliance & Audit",
      description: "ISO 27001 compliance implementation, security audits, and continuous compliance monitoring.",
      techStack: ["ISO 27001", "ISMS", "Audit Tools", "Compliance Frameworks"],
      detailedInfo: "We assist organizations in achieving and maintaining compliance with industry standards and regulations through thorough audits and continuous monitoring."
    }
  ];

  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "ISO 27001 Implementation",
    "Docker Certified Professional",
    "Azure Security Engineer",
    "Red Hat Certified Engineer (RHCE)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto py-20">
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Enterprise Cybersecurity Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions for modern enterprises, combining cutting-edge technology with decades of expertise in infrastructure, cloud, and compliance security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Card className="h-full p-6 bg-gray-800 hover:bg-gray-700 transition-colors border-gray-700">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>
                  <div className="flip-card-back">
                    <Card className="h-full p-6 bg-gray-800 border-gray-700">
                      <div className="flex flex-col h-full justify-center">
                        <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                        <p className="text-gray-300 mb-6">{service.detailedInfo}</p>
                        <div className="mt-auto">
                          <Link to="/contact">
                            <Button className="w-full bg-blue-500 hover:bg-blue-600">
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800/50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Cybersecurity Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Proven Expertise</h3>
                  <p className="text-gray-300">Over 10 years of experience in implementing enterprise-grade security solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Industry Certifications</h3>
                  <p className="text-gray-300">Certified professionals with up-to-date industry credentials</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock security monitoring and incident response</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Professional Certifications</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {certifications.map((cert, index) => (
                <span key={index} className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-full">
                  {cert}
                </span>
              ))}
            </div>
            <Link to="/contact">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full text-lg">
                Schedule a Security Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cybersecurity;