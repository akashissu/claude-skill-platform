export interface SkillModule {
  name: string;
  serviceTasks: string;
  skills: string[];
  creditGuidance: string;
}

export interface DepartmentSuite {
  index: number;
  code: string;
  slug: string;
  name: string;
  summary: string;
  buyers: string[];
  skillCount: number;
  addOns: string[];
  sourceIds: string[];
  activationRules: string[];
  modules: SkillModule[];
}

export interface IndustryOverlay {
  slug: string;
  name: string;
  summary: string;
  targetBuyers: string[];
  pairedDepartments: string[];
  complianceFocus: string;
  skillCount: number;
  sampleSkills: string[];
}

export interface SubscriptionTier {
  name: string;
  targetBuyer: string;
  includedSuites: string;
  creditLogic: string;
  controls: string;
}

export interface CreditBand {
  credits: string;
  workload: string;
}

export interface PackageModel {
  name: string;
  unlocks: string;
  monetization: string;
}

export interface SourceLink {
  id: string;
  title: string;
  url: string;
  category: 'anthropic' | 'marketplace' | 'asana' | 'data' | 'security' | 'tooling';
}

export interface CatalogData {
  departments: DepartmentSuite[];
  overlays: IndustryOverlay[];
  tiers: SubscriptionTier[];
  creditBands: CreditBand[];
  packages: PackageModel[];
  sources: SourceLink[];
  activationControls: string[];
}
