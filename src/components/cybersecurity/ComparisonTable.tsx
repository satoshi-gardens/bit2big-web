import React, { useState } from 'react';
import { Framework, MapTabs } from '@/types/cybersecurity';
import { frameworks, mapTabs } from './frameworkData';

const ComparisonTable = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [expandedFramework, setExpandedFramework] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedFramework(expandedFramework === id ? null : id);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Framework Ecosystem Overview</h3>
            <p className="mb-4">These five security frameworks complement each other to create a comprehensive security approach:</p>
            
            <div className="grid grid-cols-1 gap-4">
              {frameworks.map(framework => (
                <div 
                  key={framework.id}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div 
                    className="p-4 cursor-pointer flex justify-between items-center"
                    style={{backgroundColor: framework.color, color: 'white'}}
                    onClick={() => toggleExpand(framework.id)}
                  >
                    <h3 className="font-bold">{framework.name}</h3>
                    <span>{expandedFramework === framework.id ? '▲' : '▼'}</span>
                  </div>
                  
                  {expandedFramework === framework.id && (
                    <div className="p-4 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold">Focus</h4>
                          <p>{framework.focus}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Primary Audience</h4>
                          <p>{framework.audience}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Key Structure</h4>
                          <p>{framework.structure}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Primary Use</h4>
                          <p>{framework.use}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-semibold">Strengths</h4>
                        <ul className="list-disc pl-5">
                          {framework.strengths.map((strength, i) => (
                            <li key={i}>{strength}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-semibold">Limitations</h4>
                        <ul className="list-disc pl-5">
                          {framework.limitations.map((limitation, i) => (
                            <li key={i}>{limitation}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-semibold">Relationship to Other Frameworks</h4>
                        <p>{framework.relationship}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'audience':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Target Audience for Each Framework</h3>
            <p>Different frameworks are designed for different roles in an organization:</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Framework</th>
                    <th className="border p-2 text-left">Primary Audience</th>
                    <th className="border p-2 text-left">Secondary Audience</th>
                    <th className="border p-2 text-left">Skills Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2" style={{borderLeft: `4px solid ${frameworks[0].color}`}}>
                      <span className="font-medium">{frameworks[0].name}</span>
                    </td>
                    <td className="border p-2">Executives, CISOs, Security Program Managers</td>
                    <td className="border p-2">Risk Managers, Compliance Teams</td>
                    <td className="border p-2">Strategic thinking, risk management, business alignment</td>
                  </tr>
                  <tr>
                    <td className="border p-2" style={{borderLeft: `4px solid ${frameworks[1].color}`}}>
                      <span className="font-medium">{frameworks[1].name}</span>
                    </td>
                    <td className="border p-2">Security Managers, Compliance Officers</td>
                    <td className="border p-2">Auditors, Governance Teams</td>
                    <td className="border p-2">Process management, documentation, control implementation</td>
                  </tr>
                  <tr>
                    <td className="border p-2" style={{borderLeft: `4px solid ${frameworks[2].color}`}}>
                      <span className="font-medium">{frameworks[2].name}</span>
                    </td>
                    <td className="border p-2">Security Operations Teams, System Administrators</td>
                    <td className="border p-2">Network Engineers, Security Engineers</td>
                    <td className="border p-2">Technical implementation, security operations</td>
                  </tr>
                  <tr>
                    <td className="border p-2" style={{borderLeft: `4px solid ${frameworks[3].color}`}}>
                      <span className="font-medium">{frameworks[3].name}</span>
                    </td>
                    <td className="border p-2">Threat Hunters, Security Analysts</td>
                    <td className="border p-2">Red Teams, Penetration Testers</td>
                    <td className="border p-2">Threat intelligence, adversary emulation, detection engineering</td>
                  </tr>
                  <tr>
                    <td className="border p-2" style={{borderLeft: `4px solid ${frameworks[4].color}`}}>
                      <span className="font-medium">{frameworks[4].name}</span>
                    </td>
                    <td className="border p-2">Developers, Application Security Teams</td>
                    <td className="border p-2">Web Security Testers, DevOps Teams</td>
                    <td className="border p-2">Secure coding practices, web application security testing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
        
      case 'origin':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Origin & Background</h3>
            <p>Understanding where these frameworks come from helps appreciate their purpose:</p>
            
            <div className="space-y-6 mt-4">
              <div className="p-4 border rounded-lg" style={{borderLeft: `4px solid ${frameworks[0].color}`}}>
                <h4 className="font-semibold text-lg">{frameworks[0].name}</h4>
                <p><strong>Origin:</strong> Developed by the US National Institute of Standards and Technology (NIST) in response to Executive Order 13636 in 2014.</p>
                <p><strong>Purpose:</strong> Created to provide a common language and systematic methodology for managing cybersecurity risk.</p>
                <p><strong>Evolution:</strong> Updated to CSF 2.0 in 2024 with expanded guidance for supply chain, governance, and emerging risks.</p>
              </div>
              
              <div className="p-4 border rounded-lg" style={{borderLeft: `4px solid ${frameworks[1].color}`}}>
                <h4 className="font-semibold text-lg">{frameworks[1].name}</h4>
                <p><strong>Origin:</strong> Developed by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC).</p>
                <p><strong>Purpose:</strong> Created to establish an international standard for information security management systems.</p>
                <p><strong>Evolution:</strong> ISO 27001 first published in 2005, with major updates in 2013 and 2022. ISO 27002 provides the implementation guidance with controls.</p>
              </div>
              
              <div className="p-4 border rounded-lg" style={{borderLeft: `4px solid ${frameworks[2].color}`}}>
                <h4 className="font-semibold text-lg">{frameworks[2].name}</h4>
                <p><strong>Origin:</strong> Developed by the Center for Internet Security (CIS), a non-profit organization with a community of cybersecurity professionals.</p>
                <p><strong>Purpose:</strong> Created to provide prioritized, prescriptive actions to defend against common cyber attacks.</p>
                <p><strong>Evolution:</strong> Started as the "20 Critical Security Controls" and has evolved through community input to the current 18 control categories with implementation tiers.</p>
              </div>
              
              <div className="p-4 border rounded-lg" style={{borderLeft: `4px solid ${frameworks[3].color}`}}>
                <h4 className="font-semibold text-lg">{frameworks[3].name}</h4>
                <p><strong>Origin:</strong> Developed by MITRE Corporation, a not-for-profit organization that operates research and development centers for US government agencies.</p>
                <p><strong>Purpose:</strong> Created to document common tactics, techniques, and procedures (TTPs) used by adversaries based on real-world observations.</p>
                <p><strong>Evolution:</strong> Started in 2013 focusing on APT groups. Has expanded to cover Enterprise, Mobile, ICS, and Cloud environments with continuous updates.</p>
              </div>
              
              <div className="p-4 border rounded-lg" style={{borderLeft: `4px solid ${frameworks[4].color}`}}>
                <h4 className="font-semibold text-lg">{frameworks[4].name}</h4>
                <p><strong>Origin:</strong> Developed by the Open Web Application Security Project (OWASP), a nonprofit foundation focused on improving software security.</p>
                <p><strong>Purpose:</strong> Created to raise awareness about the most critical web application security risks.</p>
                <p><strong>Evolution:</strong> First published in 2003, updated approximately every 3-4 years based on changing risk landscape. Latest version released in 2021.</p>
              </div>
            </div>
          </div>
        );
        
      case 'focus':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Primary Focus of Each Framework</h3>
            <p>Each framework has a different scope and emphasis:</p>
            
            <div className="relative overflow-x-auto rounded-lg border">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">Framework</th>
                    <th className="p-3 text-left">Primary Focus</th>
                    <th className="p-3 text-left">Scope</th>
                    <th className="p-3 text-left">Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {frameworks.map((framework, index) => (
                    <tr key={framework.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 font-medium" style={{borderLeft: `4px solid ${framework.color}`}}>
                        {framework.name}
                      </td>
                      <td className="p-3">{framework.focus}</td>
                      <td className="p-3">
                        {framework.id === 'nist' && 'Organization-wide, all information systems'}
                        {framework.id === 'iso' && 'Organization-wide management system and controls'}
                        {framework.id === 'cis' && 'Technical security controls and configurations'}
                        {framework.id === 'mitre' && 'Threat actor behaviors and attack patterns'}
                        {framework.id === 'owasp' && 'Web application vulnerabilities and defenses'}
                      </td>
                      <td className="p-3">
                        {framework.id === 'nist' && 'Risk-based, flexible, outcome-focused'}
                        {framework.id === 'iso' && 'Process-based, formal, documentation-heavy'}
                        {framework.id === 'cis' && 'Prescriptive, prioritized, implementation-focused'}
                        {framework.id === 'mitre' && 'Knowledge base, descriptive, intelligence-driven'}
                        {framework.id === 'owasp' && 'Risk-ranked, developer-focused, practical'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
        
      case 'relationship':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">How These Frameworks Work Together</h3>
            <p>The frameworks complement each other to form a comprehensive security approach:</p>
            
            <div className="mt-4 relative">
              <div className="p-4 border rounded-lg shadow-sm mb-4 bg-gray-50">
                <h4 className="font-semibold">The Fortress Metaphor</h4>
                <p>Think of your security program as a medieval fortress:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li><strong>NIST CSF</strong> - The foundation and architectural blueprint</li>
                  <li><strong>ISO 27001/27002</strong> - The walls, gates, and guard procedures</li>
                  <li><strong>CIS Controls</strong> - The specific defensive structures and weapons</li>
                  <li><strong>MITRE ATT&CK</strong> - Intelligence about enemy tactics and strategies</li>
                  <li><strong>OWASP Top 10</strong> - Specialized defenses for a critical access point (the web)</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 border rounded-lg" style={{borderLeft: `4px solid ${frameworks[0].color}`}}>
                  <h4 className="font-semibold">{frameworks[0].name} → Others</h4>
                  <p>Provides the overarching structure that other frameworks can map to. Its five functions (Identify, Protect, Detect, Respond, Recover) offer organizing principles for other frameworks.</p>
                </div>
                
                <div className="p-4 border rounded-lg" style={{borderLeft: `4px solid ${frameworks[1].color}`}}>
                  <h4 className="font-semibold">{frameworks[1].name} → Others</h4>
                  <p>Provides the management system, governance, and documentation structure that helps implement NIST CSF systematically. CIS Controls can be mapped to specific ISO controls for technical implementation.</p>
                </div>
                
                <div className="p-4 border rounded-lg" style={{borderLeft: `4px solid ${frameworks[2].color}`}}>
                  <h4 className="font-semibold">{frameworks[2].name} → Others</h4>
                  <p>Provides specific, actionable security controls that help implement the "Protect" and "Detect" functions of NIST and many ISO controls. Maps to MITRE ATT&CK to show which controls mitigate which attack techniques.</p>
                </div>
                
                <div className="p-4 border rounded-lg" style={{borderLeft: `4px solid ${frameworks[3].color}`}}>
                  <h4 className="font-semibold">{frameworks[3].name} → Others</h4>
                  <p>Provides threat intelligence that helps prioritize which aspects of other frameworks to implement first. Shows what attackers do, while other frameworks show how to defend.</p>
                </div>
                
                <div className="p-4 border rounded-lg" style={{borderLeft: `4px solid ${frameworks[4].color}`}}>
                  <h4 className="font-semibold">{frameworks[4].name} → Others</h4>
                  <p>Provides specific guidance for web application security that complements the broader frameworks. Helps implement particular controls from CIS and ISO that relate to application security.</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'education':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Learning Path for Students</h3>
            <p>A structured approach to understanding and applying these frameworks:</p>
            
            <div className="space-y-6 mt-4">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-600 p-3 text-white">
                  <h4 className="font-bold">Stage 1: Foundation Understanding</h4>
                </div>
                <div className="p-4">
                  <p className="mb-3"><strong>Start with NIST CSF</strong> to understand the big picture:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Learn the five core functions: Identify, Protect, Detect, Respond, Recover</li>
                    <li>Understand how they form a security lifecycle</li>
                    <li>Study real-world examples of how organizations apply the framework</li>
                    <li><strong>Learning activity:</strong> Map your school/organization's security measures to these five functions</li>
                  </ul>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-500 p-3 text-white">
                  <h4 className="font-bold">Stage 2: Organizational Controls</h4>
                </div>
                <div className="p-4">
                  <p className="mb-3"><strong>Move to ISO 27001/27002</strong> to understand structured approach to security:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Learn how organizations manage security through policies and processes</li>
                    <li>Understand the concept of an Information Security Management System (ISMS)</li>
                    <li>Review the main control categories in ISO 27002</li>
                    <li><strong>Learning activity:</strong> Select 5 ISO controls and explain how they support NIST functions</li>
                  </ul>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-400 p-3 text-white">
                  <h4 className="font-bold">Stage 3: Practical Implementation</h4>
                </div>
                <div className="p-4">
                  <p className="mb-3"><strong>Explore CIS Controls</strong> to understand practical security measures:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Study the Implementation Groups concept (Basic, Foundational, Organizational)</li>
                    <li>Focus on understanding the Basic controls first (1-6)</li>
                    <li>Learn how these controls map back to NIST and ISO</li>
                    <li><strong>Learning activity:</strong> Create an implementation plan for 3 basic CIS controls</li>
                  </ul>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-300 p-3 text-white">
                  <h4 className="font-bold">Stage 4: Threat Intelligence</h4>
                </div>
                <div className="p-4">
                  <p className="mb-3"><strong>Study MITRE ATT&CK</strong> to understand the adversary perspective:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Learn the tactics and techniques structure</li>
                    <li>Study common attack patterns for a specific environment (e.g., Enterprise)</li>
                    <li>Understand how defenders use ATT&CK to improve security</li>
                    <li><strong>Learning activity:</strong> Map 3 CIS Controls to specific MITRE techniques they mitigate</li>
                  </ul>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-200 p-3 text-white">
                  <h4 className="font-bold">Stage 5: Specialized Security</h4>
                </div>
                <div className="p-4">
                  <p className="mb-3"><strong>Finish with OWASP Top 10</strong> to understand application security:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Learn the current Top 10 web application risks</li>
                    <li>Understand how they relate to broader security controls</li>
                    <li>Study basic defensive coding practices</li>
                    <li><strong>Learning activity:</strong> Analyze how OWASP risks map to NIST functions and CIS controls</li>
                  </ul>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-green-600 p-3 text-white">
                  <h4 className="font-bold">Stage 6: Integration Project</h4>
                </div>
                <div className="p-4">
                  <p className="mb-3"><strong>Capstone learning project:</strong></p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Select a simple system or application</li>
                    <li>Apply NIST CSF to identify security objectives</li>
                    <li>Use ISO 27001/27002 to establish management controls</li>
                    <li>Implement specific CIS Controls for technical security</li>
                    <li>Use MITRE ATT&CK to analyze potential threats</li>
                    <li>Apply OWASP Top 10 if web components are involved</li>
                    <li>Document how all frameworks complemented each other</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div>Select a tab to view content</div>;
    }
  };
  
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Cybersecurity Frameworks: Understanding the Ecosystem</h2>
      <p className="mb-6">Explore how these five key frameworks connect and complement each other.</p>
      
      <div className="flex overflow-x-auto mb-6 border-b">
        {Object.entries(mapTabs).map(([key, {title, description}]) => (
          <button
            key={key}
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === key ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
            onClick={() => setActiveTab(key)}
            title={description}
          >
            {title}
          </button>
        ))}
      </div>
      
      <div className="border rounded-lg p-4 bg-white min-h-96">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ComparisonTable;
