import { Framework, MapTabs } from '@/types/cybersecurity';

export const frameworks: Framework[] = [
  {
    id: 'nist',
    name: 'NIST Cybersecurity Framework',
    color: '#4472C4',
    focus: 'Holistic security risk management approach',
    audience: 'Executives, Security Leaders',
    origin: 'National Institute of Standards and Technology (US)',
    structure: 'Five core functions: Identify, Protect, Detect, Respond, Recover',
    use: 'Strategic planning, risk assessment, security program foundation',
    strengths: ['Flexible', 'Widely adopted', 'Non-prescriptive', 'Adaptable to many industries'],
    limitations: ['High-level, requires interpretation', 'Needs supplementing with technical details'],
    relationship: 'Forms the foundation for comprehensive security programs'
  },
  {
    id: 'iso',
    name: 'ISO 27001/27002',
    color: '#70AD47',
    focus: 'Information Security Management System (ISMS)',
    audience: 'Security Managers, Compliance Teams',
    origin: 'International Organization for Standardization',
    structure: '114 controls across 14 domains (27002), Certification requirements (27001)',
    use: 'Security governance, policy development, compliance, certification',
    strengths: ['Comprehensive', 'Internationally recognized', 'Certification available', 'Process-oriented'],
    limitations: ['Resource-intensive', 'Can be bureaucratic', 'Less focus on technical specifics'],
    relationship: 'Implements NIST CSF with formal processes and management controls'
  },
  {
    id: 'cis',
    name: 'CIS Controls',
    color: '#ED7D31',
    focus: 'Prioritized defensive actions',
    audience: 'Security Operations Teams',
    origin: 'Center for Internet Security',
    structure: '18 control categories with implementation groups (Basic, Foundational, Organizational)',
    use: 'Security implementation roadmap, practical defense measures',
    strengths: ['Prioritized approach', 'Practical and specific', 'Implementation-focused', 'Community-driven'],
    limitations: ['Primarily defense-focused', 'Less coverage of governance aspects'],
    relationship: 'Provides the practical "how-to" for implementing NIST CSF and ISO 27001'
  },
  {
    id: 'mitre',
    name: 'MITRE ATT&CK',
    color: '#5B9BD5',
    focus: 'Adversary tactics and techniques',
    audience: 'Threat Hunters, Security Analysts',
    origin: 'MITRE Corporation',
    structure: 'Matrix of tactics, techniques, and procedures used by attackers',
    use: 'Threat intelligence, security testing, detection development',
    strengths: ['Attacker perspective', 'Detailed techniques', 'Real-world observations', 'Common vocabulary'],
    limitations: ['Can be overwhelming', 'Requires security maturity to utilize effectively'],
    relationship: 'Helps understand threats that CIS Controls and other frameworks defend against'
  },
  {
    id: 'owasp',
    name: 'OWASP Top 10',
    color: '#A5A5A5',
    focus: 'Web application security risks',
    audience: 'Developers, Application Security Teams',
    origin: 'Open Web Application Security Project',
    structure: 'Ranked list of 10 most critical web application security risks',
    use: 'Secure coding practices, application security testing',
    strengths: ['Developer-friendly', 'Specific to web applications', 'Regularly updated', 'Community-driven'],
    limitations: ['Limited scope (web apps only)', 'Only covers top risks, not comprehensive'],
    relationship: 'Provides specific application security guidance complementing broader frameworks'
  }
];

export const mapTabs: MapTabs = {
  'overview': {title: 'Overview', description: 'High-level comparison of all frameworks'},
  'audience': {title: 'Target Audience', description: 'Who primarily uses each framework'},
  'origin': {title: 'Origin & Background', description: 'Where each framework comes from'},
  'focus': {title: 'Primary Focus', description: 'What each framework concentrates on'},
  'relationship': {title: 'Framework Relationships', description: 'How frameworks connect with each other'},
  'education': {title: 'Learning Path', description: 'Recommended approach for students'}
};
