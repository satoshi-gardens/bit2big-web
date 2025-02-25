
export interface Framework {
  id: 'nist' | 'iso' | 'cis' | 'mitre' | 'owasp';
  name: string;
  color: string;
  focus: string;
  audience: string;
  origin: string;
  structure: string;
  use: string;
  strengths: string[];
  limitations: string[];
  relationship: string;
}

export interface TabInfo {
  title: string;
  description: string;
}

export interface MapTabs {
  [key: string]: TabInfo;
}
