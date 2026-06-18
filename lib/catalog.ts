import fs from 'node:fs';
import path from 'node:path';
import type {
  CatalogData,
  CreditBand,
  DepartmentSuite,
  IndustryOverlay,
  PackageModel,
  SourceLink,
  SubscriptionTier,
} from '@/types';

const ISSUE_SPEC_PATH = path.join(process.cwd(), '.zero-human', 'ISSUE_SPEC.md');
const DEFAULT_ADD_ONS = ['Industry overlay', 'Security/GRC', 'Data/BI', 'Docs/artifacts'];

const packageModels: PackageModel[] = [
  {
    name: 'Department Suite',
    unlocks: 'A role-based operating system for a specific team or department.',
    monetization: 'Monthly suite license plus included skill credits.',
  },
  {
    name: 'Industry Overlay',
    unlocks: 'Industry-specific workflows, terminology, compliance checks, and templates.',
    monetization: 'Add-on overlay license or premium vertical plan.',
  },
  {
    name: 'Skill Credit',
    unlocks: 'Metered execution unit tied to complexity, tools, risk, and approvals.',
    monetization: 'Usage-based credits or hybrid subscription plus overage.',
  },
  {
    name: 'Agent Seat',
    unlocks: 'Named or pooled agent profiles with permissions and skill availability.',
    monetization: 'Charge by active agents, departments, or autonomous runs.',
  },
  {
    name: 'Regulated Controls',
    unlocks: 'Approvals, audit evidence, data boundaries, scanning, and policy gates.',
    monetization: 'Enterprise security or compliance add-on.',
  },
];

const subscriptionTiers: SubscriptionTier[] = [
  {
    name: 'Starter',
    targetBuyer: 'Small teams and agencies',
    includedSuites: '1 department suite and 1 basic industry overlay',
    creditLogic: '500 light credits per month',
    controls: 'Draft-only or comment-only skills',
  },
  {
    name: 'Growth',
    targetBuyer: 'Growing companies',
    includedSuites: '3 department suites and 2 industry overlays',
    creditLogic: '2,500 mixed credits per month',
    controls: 'Task creation, comments, and status updates',
  },
  {
    name: 'Business',
    targetBuyer: 'Mid-market organizations',
    includedSuites: '8 department suites and 5 overlays',
    creditLogic: '10,000 credits per month',
    controls: 'Approval gates, dashboards, and integrations',
  },
  {
    name: 'Enterprise',
    targetBuyer: 'Large cross-functional orgs',
    includedSuites: 'All department suites plus selected overlays',
    creditLogic: 'Custom pool with overages',
    controls: 'SSO, audit logs, sandboxed scripts, and data controls',
  },
  {
    name: 'Regulated',
    targetBuyer: 'Healthcare, finance, government, and pharma',
    includedSuites: 'All suites plus GRC, security, legal, and QA/regulatory',
    creditLogic: 'Higher-value pricing for high-risk runs',
    controls: 'Human approvals, evidence packs, and policy controls',
  },
  {
    name: 'Agency / Implementation Partner',
    targetBuyer: 'Consultancies and workflow implementation partners',
    includedSuites: 'Multi-client suite packaging',
    creditLogic: 'Client-isolated credit pools',
    controls: 'Template publishing and white labeling',
  },
];

const creditBands: CreditBand[] = [
  { credits: '1 credit', workload: 'Simple drafting, classification, cleanup, summaries, and comments.' },
  { credits: '3 credits', workload: 'Structured plans, checklists, SOP drafts, and meeting packs.' },
  { credits: '5 credits', workload: 'Multi-source analysis, workflows, dashboards, and campaign briefs.' },
  { credits: '8 credits', workload: 'Research synthesis, financial analysis, PRDs, launches, and reviews.' },
  { credits: '15 credits', workload: 'Multi-agent workflows involving files, integrations, QA, or regulated review.' },
  { credits: '25+ credits', workload: 'High-risk workflows requiring approvals, audit evidence, code execution, or production changes.' },
];

const activationControls = [
  'Switch suites by workspace, customer, department, project, role, and data classification.',
  'Track skill lifecycle states: draft, reviewed, enabled, disabled, deprecated, and quarantined.',
  'Log every run with task, user, agent, skill, files, tool calls, approvals, output hash, credits, and risk tier.',
  'Require approval before external sends, production changes, financial commitments, billing or auth changes, data deletion, or untrusted script execution.',
  'Pin, scan, sandbox, and review third-party skills before activation.',
];

const industryOverlays: IndustryOverlay[] = [
  {
    slug: 'healthcare-life-sciences',
    name: 'Healthcare and Life Sciences',
    summary: 'Adds clinical, privacy, quality, and validation workflows to shared department suites.',
    targetBuyers: ['Healthcare operations', 'Clinical PMO', 'Regulatory affairs'],
    pairedDepartments: ['Quality, Regulatory, and Business Assurance', 'Legal, Compliance, and Risk', 'Operations and PMO'],
    complianceFocus: 'HIPAA, validation evidence, audit trails, and controlled documentation.',
    skillCount: 24,
    sampleSkills: ['clinical-intake-triage', 'regulated-launch-check', 'deviation-review-router', 'evidence-pack-builder'],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    summary: 'Adds controls for regulated customer flows, model governance, and audit-ready reporting.',
    targetBuyers: ['Banking ops', 'Fintech compliance', 'Finance leadership'],
    pairedDepartments: ['Finance and Accounting', 'Security and GRC', 'Legal, Compliance, and Risk'],
    complianceFocus: 'SOX, audit evidence, approvals, risk attestations, and policy routing.',
    skillCount: 24,
    sampleSkills: ['policy-control-check', 'transaction-risk-escalation', 'board-finance-pack', 'vendor-risk-intake'],
  },
  {
    slug: 'government-public-sector',
    name: 'Government and Public Sector',
    summary: 'Layers procurement rigor, records management, and public-sector approvals onto department suites.',
    targetBuyers: ['Program offices', 'Public sector operations', 'Policy teams'],
    pairedDepartments: ['Operations and PMO', 'Legal, Compliance, and Risk', 'Security and GRC'],
    complianceFocus: 'Approval matrices, records retention, transparency, and evidence-ready workflows.',
    skillCount: 24,
    sampleSkills: ['public-procurement-check', 'policy-brief-router', 'records-retention-plan', 'risk-attestation-pack'],
  },
  {
    slug: 'education',
    name: 'Education',
    summary: 'Supports student, faculty, and program operations with repeatable templates and intake flows.',
    targetBuyers: ['Academic operations', 'Enrollment teams', 'Learning leaders'],
    pairedDepartments: ['Learning, Enablement, and Training', 'Administration, Executive Assistance, and Office Ops', 'Customer Service and Customer Success'],
    complianceFocus: 'Program governance, stakeholder communications, and knowledge-base consistency.',
    skillCount: 24,
    sampleSkills: ['course-launch-plan', 'student-support-routing', 'program-status-brief', 'faculty-enablement-pack'],
  },
  {
    slug: 'nonprofit',
    name: 'Nonprofit',
    summary: 'Optimizes fundraising, donor operations, grant workflows, and board reporting.',
    targetBuyers: ['Nonprofit operations', 'Development teams', 'Executive offices'],
    pairedDepartments: ['Executive Strategy and Chief of Staff', 'Operations and PMO', 'Internal Communications and Corporate Affairs'],
    complianceFocus: 'Grant reporting, donor stewardship, and mission-aligned communications.',
    skillCount: 24,
    sampleSkills: ['grant-status-pack', 'donor-segment-brief', 'campaign-impact-summary', 'board-committee-followup'],
  },
  {
    slug: 'retail',
    name: 'Retail',
    summary: 'Adds store operations, merchandising, campaign pacing, and omnichannel readiness overlays.',
    targetBuyers: ['Retail operations', 'Merchandising', 'Growth teams'],
    pairedDepartments: ['Marketing and Growth', 'Operations and PMO', 'Procurement and Supply Chain'],
    complianceFocus: 'Promo governance, inventory visibility, and customer-impact workflows.',
    skillCount: 24,
    sampleSkills: ['promo-launch-check', 'store-ops-escalation', 'inventory-risk-brief', 'omnichannel-campaign-pack'],
  },
  {
    slug: 'construction',
    name: 'Construction',
    summary: 'Adds field operations, schedule risk, safety, and contractor coordination workflows.',
    targetBuyers: ['Project controls', 'Field operations', 'Safety teams'],
    pairedDepartments: ['Facilities, Real Estate, and Workplace Operations', 'Operations and PMO', 'Quality, Regulatory, and Business Assurance'],
    complianceFocus: 'Safety evidence, contractor coordination, and dependency management.',
    skillCount: 24,
    sampleSkills: ['site-readiness-check', 'contractor-handoff-plan', 'permit-risk-log', 'safety-inspection-pack'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    summary: 'Adds production quality, supply planning, and change-control overlays for operational teams.',
    targetBuyers: ['Plant operations', 'Quality teams', 'Supply chain leaders'],
    pairedDepartments: ['Procurement and Supply Chain', 'Quality, Regulatory, and Business Assurance', 'Operations and PMO'],
    complianceFocus: 'CAPA, change control, supplier performance, and production traceability.',
    skillCount: 24,
    sampleSkills: ['capa-workflow-router', 'supplier-scorecard-pack', 'production-change-brief', 'quality-hold-review'],
  },
  {
    slug: 'media-and-entertainment',
    name: 'Media and Entertainment',
    summary: 'Supports editorial calendars, production coordination, and audience growth workflows.',
    targetBuyers: ['Studio operations', 'Editorial leads', 'Audience teams'],
    pairedDepartments: ['Marketing and Growth', 'Design and Creative Studio', 'Internal Communications and Corporate Affairs'],
    complianceFocus: 'Publishing approvals, asset lifecycle tracking, and rights-aware coordination.',
    skillCount: 24,
    sampleSkills: ['content-slate-planner', 'rights-clearance-check', 'production-handoff-kit', 'audience-growth-readout'],
  },
  {
    slug: 'saas-and-software',
    name: 'SaaS and Software',
    summary: 'Adds product-led growth, release governance, and support-to-product feedback loops.',
    targetBuyers: ['Product leaders', 'Growth teams', 'RevOps'],
    pairedDepartments: ['Product Marketing and Go-to-Market', 'Engineering and Product Development', 'Customer Service and Customer Success'],
    complianceFocus: 'Launch risk, release approvals, adoption analytics, and VOC routing.',
    skillCount: 24,
    sampleSkills: ['release-readiness-gate', 'plg-activation-brief', 'churn-signal-heatmap', 'feedback-to-roadmap-pack'],
  },
  {
    slug: 'pharma-and-biotech',
    name: 'Pharma and Biotech',
    summary: 'Extends regulated evidence, quality review, and launch governance into cross-functional teams.',
    targetBuyers: ['Regulatory teams', 'Medical operations', 'Program leads'],
    pairedDepartments: ['Quality, Regulatory, and Business Assurance', 'Research, Innovation, and R&D', 'Legal, Compliance, and Risk'],
    complianceFocus: 'Controlled content, validation, inspection readiness, and evidence chains.',
    skillCount: 24,
    sampleSkills: ['inspection-readiness-pack', 'medical-review-router', 'study-governance-brief', 'controlled-content-check'],
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    summary: 'Supports policy operations, claims communication, and risk review workflows.',
    targetBuyers: ['Insurance operations', 'Claims teams', 'Risk offices'],
    pairedDepartments: ['Legal, Compliance, and Risk', 'Customer Service and Customer Success', 'Finance and Accounting'],
    complianceFocus: 'Claims evidence, risk routing, policy governance, and approvals.',
    skillCount: 24,
    sampleSkills: ['claims-intake-triage', 'policy-change-brief', 'risk-committee-pack', 'renewal-alert-workflow'],
  },
  {
    slug: 'telecommunications',
    name: 'Telecommunications',
    summary: 'Adds rollout operations, service communications, and field escalation playbooks.',
    targetBuyers: ['Network operations', 'Service delivery', 'Program offices'],
    pairedDepartments: ['IT and Digital Workplace', 'Operations and PMO', 'Customer Service and Customer Success'],
    complianceFocus: 'Incident communications, rollout governance, and service-level reporting.',
    skillCount: 24,
    sampleSkills: ['network-change-pack', 'service-outage-brief', 'field-escalation-playbook', 'capacity-expansion-readout'],
  },
  {
    slug: 'energy-and-utilities',
    name: 'Energy and Utilities',
    summary: 'Adapts the platform for field safety, capital programs, and regulated operating controls.',
    targetBuyers: ['Utility operations', 'Capital program PMO', 'Safety leadership'],
    pairedDepartments: ['Facilities, Real Estate, and Workplace Operations', 'Security and GRC', 'Operations and PMO'],
    complianceFocus: 'Safety evidence, outage readiness, and regulated change approvals.',
    skillCount: 24,
    sampleSkills: ['outage-response-brief', 'capital-program-gate', 'safety-permit-check', 'inspection-followup-pack'],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    summary: 'Adds property operations, lease workflows, investor updates, and site readiness tasks.',
    targetBuyers: ['Property operations', 'Asset managers', 'Workplace leaders'],
    pairedDepartments: ['Facilities, Real Estate, and Workplace Operations', 'Finance and Accounting', 'Administration, Executive Assistance, and Office Ops'],
    complianceFocus: 'Lease obligations, site coordination, and portfolio reporting.',
    skillCount: 24,
    sampleSkills: ['lease-obligation-pack', 'site-selection-review', 'tenant-comms-brief', 'portfolio-risk-summary'],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    summary: 'Supports multi-location operations, service recovery, and guest communications.',
    targetBuyers: ['Operations leaders', 'Guest experience', 'Regional management'],
    pairedDepartments: ['Customer Service and Customer Success', 'Operations and PMO', 'Internal Communications and Corporate Affairs'],
    complianceFocus: 'Service-level consistency, escalation routing, and brand-safe communications.',
    skillCount: 24,
    sampleSkills: ['guest-issue-router', 'service-recovery-draft', 'location-performance-pack', 'regional-launch-check'],
  },
  {
    slug: 'logistics-and-transportation',
    name: 'Logistics and Transportation',
    summary: 'Adds fulfillment risk, partner handoffs, and shipment exception workflows.',
    targetBuyers: ['Logistics operations', 'Carrier management', 'Supply chain teams'],
    pairedDepartments: ['Procurement and Supply Chain', 'Operations and PMO', 'Customer Service and Customer Success'],
    complianceFocus: 'Exception handling, SLA visibility, and partner coordination.',
    skillCount: 24,
    sampleSkills: ['shipment-exception-brief', 'carrier-performance-pack', 'network-capacity-alert', 'partner-escalation-router'],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    summary: 'Optimizes client delivery, project governance, and utilization across service teams.',
    targetBuyers: ['Delivery leaders', 'Client success', 'PMO'],
    pairedDepartments: ['Operations and PMO', 'Customer Service and Customer Success', 'Executive Strategy and Chief of Staff'],
    complianceFocus: 'Client-ready reporting, staffing controls, and scope governance.',
    skillCount: 24,
    sampleSkills: ['client-health-pack', 'project-governance-readout', 'utilization-risk-brief', 'scope-change-router'],
  },
  {
    slug: 'consumer-goods',
    name: 'Consumer Goods',
    summary: 'Adds merchandising, partner coordination, and campaign-to-shelf execution overlays.',
    targetBuyers: ['Brand teams', 'Channel ops', 'Supply planning'],
    pairedDepartments: ['Marketing and Growth', 'Procurement and Supply Chain', 'Product Marketing and Go-to-Market'],
    complianceFocus: 'Launch sequencing, channel content governance, and inventory-aware GTM.',
    skillCount: 24,
    sampleSkills: ['retail-launch-pack', 'channel-asset-check', 'demand-spike-alert', 'partner-sell-in-brief'],
  },
  {
    slug: 'automotive-and-mobility',
    name: 'Automotive and Mobility',
    summary: 'Supports dealer, service, manufacturing, and launch coordination workflows.',
    targetBuyers: ['Mobility operations', 'Service networks', 'Program leaders'],
    pairedDepartments: ['Quality, Regulatory, and Business Assurance', 'Procurement and Supply Chain', 'Operations and PMO'],
    complianceFocus: 'Supplier readiness, quality gates, and field issue escalation.',
    skillCount: 24,
    sampleSkills: ['dealer-launch-brief', 'field-issue-escalation', 'supplier-readiness-check', 'quality-campaign-router'],
  },
];

const sources: SourceLink[] = [
  { id: 'S01', title: 'Anthropic official skills repository', url: 'https://github.com/anthropics/skills', category: 'anthropic' },
  { id: 'S02', title: 'Claude API Agent Skills overview', url: 'https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview', category: 'anthropic' },
  { id: 'S03', title: 'Anthropic engineering article on Agent Skills', url: 'https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills', category: 'anthropic' },
  { id: 'S04', title: 'Agent Skills open specification', url: 'https://agentskills.io/specification', category: 'tooling' },
  { id: 'S05', title: 'ComposioHQ awesome Claude skills catalog', url: 'https://github.com/ComposioHQ/awesome-claude-skills', category: 'marketplace' },
  { id: 'S06', title: 'VoltAgent awesome agent skills catalog', url: 'https://github.com/VoltAgent/awesome-agent-skills', category: 'marketplace' },
  { id: 'S07', title: 'Alireza Rezvani Claude skills and agent plugins', url: 'https://github.com/alirezarezvani/claude-skills', category: 'marketplace' },
  { id: 'S08', title: 'PM Claude Skills professional skills catalog', url: 'https://github.com/mohitagw15856/pm-claude-skills', category: 'marketplace' },
  { id: 'S09', title: 'PM Skills Marketplace', url: 'https://github.com/phuryn/pm-skills', category: 'marketplace' },
  { id: 'S10', title: 'Product Manager Skills', url: 'https://github.com/deanpeters/Product-Manager-Skills', category: 'marketplace' },
  { id: 'S11', title: 'Marketing Skills for AI Agents', url: 'https://github.com/coreyhaines31/marketingskills', category: 'marketplace' },
  { id: 'S12', title: 'Claude Code video production toolkit', url: 'https://github.com/digitalsamba/claude-code-video-toolkit', category: 'tooling' },
  { id: 'S13', title: 'Addy Osmani agent skills', url: 'https://github.com/addyosmani/agent-skills', category: 'marketplace' },
  { id: 'S15', title: 'Agents marketplace and skill packaging reference', url: 'https://github.com/wshobson/agents', category: 'marketplace' },
  { id: 'S16', title: 'Scientific Agent Skills', url: 'https://github.com/K-Dense-AI/scientific-agent-skills', category: 'marketplace' },
  { id: 'S17', title: 'Code Review Skill', url: 'https://github.com/awesome-skills/code-review-skill', category: 'tooling' },
  { id: 'S18', title: 'Testcontainers Claude Skills', url: 'https://github.com/testcontainers/claude-skills', category: 'tooling' },
  { id: 'S19', title: 'Jeff Allan full-stack Claude skills', url: 'https://github.com/jeffallan/claude-skills', category: 'marketplace' },
  { id: 'S20', title: 'Agentic SEO Skill', url: 'https://github.com/Bhanunamikaze/Agentic-SEO-Skill', category: 'tooling' },
  { id: 'S21', title: 'Storybloq context and roadmap tooling', url: 'https://github.com/Storybloq/storybloq', category: 'tooling' },
  { id: 'S22', title: 'Obsidian second-brain workflow reference', url: 'https://github.com/eugeniughelbur/obsidian-second-brain', category: 'tooling' },
  { id: 'S23', title: 'Frontend slides and presentation generation', url: 'https://github.com/zarazhangrui/frontend-slides', category: 'tooling' },
  { id: 'S25', title: 'Google Workspace CLI automation', url: 'https://github.com/googleworkspace/cli', category: 'tooling' },
  { id: 'S28', title: 'Composio canvas-design skill', url: 'https://github.com/ComposioHQ/awesome-claude-skills/blob/master/canvas-design/SKILL.md', category: 'marketplace' },
  { id: 'S29', title: 'Trail of Bits security skills marketplace', url: 'https://github.com/trailofbits/skills', category: 'security' },
  { id: 'S30', title: 'Snyk agent-scan for skills and MCP security', url: 'https://github.com/snyk/agent-scan', category: 'security' },
  { id: 'S31', title: 'Snyk ToxicSkills research', url: 'https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/', category: 'security' },
  { id: 'S32', title: 'Anthropic Claude Code security review', url: 'https://github.com/anthropics/claude-code-security-review', category: 'security' },
  { id: 'A01', title: 'Asana marketing team templates', url: 'https://asana.com/templates/team/marketing', category: 'asana' },
  { id: 'A02', title: 'Asana design team templates', url: 'https://asana.com/templates/team/design', category: 'asana' },
  { id: 'A03', title: 'Asana HR team templates', url: 'https://asana.com/templates/team/hr', category: 'asana' },
  { id: 'A04', title: 'Asana IT templates', url: 'https://asana.com/templates/team/it', category: 'asana' },
  { id: 'A05', title: 'Asana IT teams page', url: 'https://asana.com/teams/it', category: 'asana' },
  { id: 'A06', title: 'Asana customer success templates', url: 'https://asana.com/templates/team/customer-success', category: 'asana' },
  { id: 'A07', title: 'Asana sales templates', url: 'https://asana.com/templates/team/sales', category: 'asana' },
  { id: 'A08', title: 'Asana product templates', url: 'https://asana.com/templates/team/product', category: 'asana' },
  { id: 'A09', title: 'Asana engineering templates', url: 'https://asana.com/templates/team/engineering', category: 'asana' },
  { id: 'A10', title: 'Asana operations templates', url: 'https://asana.com/templates/team/operations', category: 'asana' },
  { id: 'A11', title: 'Asana finance templates', url: 'https://asana.com/templates/industry/finance', category: 'asana' },
  { id: 'A12', title: 'Asana creative production use case', url: 'https://asana.com/templates/use-case/creative-production', category: 'asana' },
  { id: 'A13', title: 'Asana creative requests template', url: 'https://asana.com/templates/creative-requests', category: 'asana' },
  { id: 'A14', title: 'Asana discovery creative production template', url: 'https://asana.com/templates/discovery-creative-production', category: 'asana' },
  { id: 'A15', title: 'Asana editorial calendar template', url: 'https://asana.com/templates/editorial-calendar', category: 'asana' },
  { id: 'A16', title: 'Asana social media calendar template', url: 'https://asana.com/templates/social-media-calendar', category: 'asana' },
  { id: 'A17', title: 'Asana email marketing calendar template', url: 'https://asana.com/templates/email-marketing-calendar', category: 'asana' },
  { id: 'A18', title: 'Asana campaign management template', url: 'https://asana.com/templates/campaign-management', category: 'asana' },
  { id: 'A19', title: 'Asana content strategy template', url: 'https://asana.com/templates/content-strategy', category: 'asana' },
  { id: 'A21', title: 'Asana resource management template', url: 'https://asana.com/templates/resource-management', category: 'asana' },
  { id: 'A22', title: 'Asana RACI matrix template', url: 'https://asana.com/templates/raci-matrix', category: 'asana' },
  { id: 'A23', title: 'Asana vendor management template', url: 'https://asana.com/templates/vendor-management', category: 'asana' },
  { id: 'A24', title: 'Asana retail industry page', url: 'https://asana.com/industry/retail', category: 'asana' },
  { id: 'A25', title: 'Asana construction industry templates', url: 'https://asana.com/templates/industry/construction', category: 'asana' },
  { id: 'A26', title: 'Asana manufacturing templates', url: 'https://asana.com/templates/industry/manufacturing', category: 'asana' },
  { id: 'A27', title: 'Asana healthcare and life sciences page', url: 'https://asana.com/industry/healthcare', category: 'asana' },
  { id: 'A28', title: 'Asana government solutions page', url: 'https://asana.com/industry/government-solutions', category: 'asana' },
  { id: 'A29', title: 'Asana education templates', url: 'https://asana.com/templates/industry/education', category: 'asana' },
  { id: 'A30', title: 'Asana nonprofit templates', url: 'https://asana.com/templates/industry/nonprofit', category: 'asana' },
  { id: 'A31', title: 'Asana media templates', url: 'https://asana.com/templates/industry/media', category: 'asana' },
  { id: 'A32', title: 'Asana customers page', url: 'https://asana.com/customers', category: 'asana' },
  { id: 'A33', title: 'Asana project templates gallery', url: 'https://asana.com/templates', category: 'asana' },
  { id: 'A34', title: 'Asana product and work management overview', url: 'https://asana.com/product', category: 'asana' },
  { id: 'A35', title: 'Asana project management software comparison', url: 'https://asana.com/resources/best-project-management-software', category: 'asana' },
  { id: 'D01', title: 'BEA GDP by industry', url: 'https://www.bea.gov/data/gdp/gdp-industry', category: 'data' },
  { id: 'D02', title: 'BLS employment by major industry sector', url: 'https://www.bls.gov/emp/tables/employment-by-major-industry-sector.htm', category: 'data' },
  { id: 'D03', title: 'IBISWorld biggest US industries by revenue', url: 'https://www.ibisworld.com/united-states/industry-trends/biggest-industries-by-revenue/', category: 'data' },
  { id: 'D04', title: 'IBISWorld biggest US industries by employment', url: 'https://www.ibisworld.com/united-states/industry-trends/biggest-industries-by-employment/', category: 'data' },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function normalizeSpec(raw: string) {
  return raw.replace(/\r/g, ' ').replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
}

function unique<T>(values: T[]) {
  return Array.from(new Set(values));
}

function parseBuyers(raw: string) {
  return raw
    .split(',')
    .map((buyer) => buyer.trim())
    .filter(Boolean);
}

function parseActivationRules(raw: string) {
  return raw
    .split(/;|\.-\s+|\s-\s+/)
    .map((item) => item.replace(/^[-.\s]+|[-.\s]+$/g, '').trim())
    .filter(Boolean)
    .map((item) => (item.endsWith('.') ? item : `${item}.`));
}

function parseDepartmentSections(): DepartmentSuite[] {
  const raw = fs.readFileSync(ISSUE_SPEC_PATH, 'utf8');
  const normalized = normalizeSpec(raw);
  const sectionPattern = /4\.(\d+)\s+(.+?)\s+\((DEPT-[^)]+)\)\s+(.*?)(?=4\.\d+\s+.+?\s+\(DEPT-|## User Stories|## Acceptance Criteria|Definition of Done|$)/g;

  const departments: DepartmentSuite[] = [];

  for (const match of normalized.matchAll(sectionPattern)) {
    const index = Number(match[1]);
    const sectionTitle = match[2].trim();
    const code = match[3].trim();
    const sectionBody = match[4].trim();

    const headerMatch = sectionBody.match(/^(.*?)\s+Buyers:\s+(.*?)\.\s+Productizable skill count in this suite:\s+(\d+)\s+skill SKUs\./i);
    const summary = headerMatch?.[1]?.trim() ?? 'Role-based department suite for enterprise skill delivery.';
    const buyers = parseBuyers(headerMatch?.[2] ?? 'Enterprise teams');
    const skillCount = Number(headerMatch?.[3] ?? 0);

    const sourceBlockMatch = sectionBody.match(/Complete source URLs for this suite:\s+(.*?)\s+Licensable modules and individual skills\s+/i);
    const sourceIds = unique(Array.from((sourceBlockMatch?.[1] ?? '').matchAll(/\b([A-Z]\d{2})\b/g), (item) => item[1]));

    const modulesBlock =
      sectionBody.match(/Licensable modules and individual skills\s+(.*?)\s+Activation rules:/i)?.[1] ?? '';

    const modulePattern = /([A-Z][A-Za-z0-9,&/\- ]+?)\s+Service tasks:\s+(.*?)\s+Skill SKUs:\s+(.*?)\s+Suggested credit values:\s+(.*?)(?=(?:[A-Z][A-Za-z0-9,&/\- ]+?)\s+Service tasks:|$)/g;

    const modules = Array.from(modulesBlock.matchAll(modulePattern), (moduleMatch) => ({
      name: moduleMatch[1].trim(),
      serviceTasks: moduleMatch[2].trim(),
      skills: moduleMatch[3]
        .split(';')
        .map((skill) => skill.trim())
        .filter(Boolean),
      creditGuidance: moduleMatch[4].trim(),
    }));

    const activationText = sectionBody.split(/Activation rules:/i)[1] ?? '';
    const activationRules = parseActivationRules(activationText);

    departments.push({
      index,
      code,
      slug: slugify(sectionTitle),
      name: sectionTitle,
      summary,
      buyers,
      skillCount,
      addOns: DEFAULT_ADD_ONS,
      sourceIds,
      activationRules: activationRules.length > 0 ? activationRules : activationControls,
      modules,
    });
  }

  return departments.sort((a, b) => a.index - b.index);
}

let catalogCache: CatalogData | null = null;

export function getCatalogData(): CatalogData {
  if (catalogCache) {
    return catalogCache;
  }

  const departments = parseDepartmentSections();

  catalogCache = {
    departments,
    overlays: industryOverlays,
    tiers: subscriptionTiers,
    creditBands,
    packages: packageModels,
    sources,
    activationControls,
  };

  return catalogCache;
}

export function getDepartmentBySlug(slug: string) {
  return getCatalogData().departments.find((department) => department.slug === slug);
}

export function getSourceMap() {
  return Object.fromEntries(getCatalogData().sources.map((source) => [source.id, source]));
}

export function getCatalogStats() {
  const { departments, overlays } = getCatalogData();
  const departmentSkillCount = departments.reduce((sum, department) => sum + department.skillCount, 0);
  const overlaySkillCount = overlays.reduce((sum, overlay) => sum + overlay.skillCount, 0);
  const moduleCount = departments.reduce((sum, department) => sum + department.modules.length, 0);

  return {
    departments: departments.length,
    overlays: overlays.length,
    departmentSkillCount,
    overlaySkillCount,
    moduleCount,
    totalSkillCount: departmentSkillCount + overlaySkillCount,
  };
}

export function getTopDepartments(limit = 6) {
  return getCatalogData().departments.slice(0, limit);
}

export function getTopOverlays(limit = 6) {
  return getCatalogData().overlays.slice(0, limit);
}
