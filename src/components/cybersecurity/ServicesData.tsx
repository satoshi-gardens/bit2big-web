import { Shield, Lock, Cloud, Terminal, Users, Server } from "lucide-react";

export const services = [
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

export const certifications = [
  "Certified Ethical Hacker (CEH)",
  "ISO 27001 Implementation",
  "Docker Certified Professional",
  "Azure Security Engineer",
  "Red Hat Certified Engineer (RHCE)"
];