import type { Locale } from "@/lib/i18n";
import type { Service } from "@/content/types";

const sharedFaq = {
  en: [
    {
      question: "When should we request this service?",
      answer: "The best time is before irreversible EPC, commissioning, acquisition or O&M decisions are made, but existing assets can also be reviewed at any stage."
    },
    {
      question: "Can the work be delivered for international teams?",
      answer: "Yes. Reporting can be structured for EPC contractors, owners, lenders and international energy companies."
    }
  ],
  tr: [
    {
      question: "Bu hizmet ne zaman talep edilmelidir?",
      answer: "En doğru zaman EPC, devreye alma, satın alma veya işletme bakım kararları kesinleşmeden öncedir; mevcut santraller de her aşamada incelenebilir."
    },
    {
      question: "Çalışma uluslararası ekipler için hazırlanabilir mi?",
      answer: "Evet. Raporlama EPC yüklenicileri, işverenler, finans kuruluşları ve uluslararası enerji şirketleri için yapılandırılabilir."
    }
  ]
};

export const services: Record<Locale, Service[]> = {
  en: [
    {
      slug: "epc-technical-consultancy",
      title: "EPC Technical Consultancy",
      eyebrow: "Risk, quality and constructability",
      description: "Independent EPC technical consultancy for renewable energy projects from design review to site execution and handover.",
      keywords: ["EPC technical consultancy", "renewable energy consultant", "owner's engineering"],
      outcomes: ["Clear EPC risk register", "Improved technical specifications", "Better handover readiness"],
      scope: ["Design and specification review", "EPC tender technical support", "Site quality observations", "Interface risk assessment"],
      faqs: sharedFaq.en
    },
    {
      slug: "hydropower-plant-optimization",
      title: "Hydropower Plant Optimization",
      eyebrow: "Efficiency and availability",
      description: "Hydropower consultancy focused on output, reliability, water-to-wire performance and practical O&M improvements.",
      keywords: ["hydropower consultancy", "hydropower plant optimization", "O&M optimization"],
      outcomes: ["Reduced avoidable losses", "Improved availability", "Prioritized corrective actions"],
      scope: ["Turbine and generator performance review", "Hydraulic loss assessment", "Operational data analysis", "Maintenance practice review"],
      faqs: sharedFaq.en
    },
    {
      slug: "solar-power-plant-consultancy",
      title: "Solar Power Plant Consultancy",
      eyebrow: "Yield and reliability",
      description: "Solar power plant consultancy for investors, EPC teams and owners seeking stronger generation, quality and lifecycle performance.",
      keywords: ["solar power plant consultancy", "solar plant performance improvement", "renewable energy consultant"],
      outcomes: ["Improved PR analysis", "Lower underperformance risk", "Actionable O&M roadmap"],
      scope: ["Yield and loss review", "EPC quality review", "O&M performance assessment", "Technical due diligence"],
      faqs: sharedFaq.en
    },
    {
      slug: "power-plant-commissioning",
      title: "Power Plant Commissioning",
      eyebrow: "Readiness and controlled startup",
      description: "Commissioning consultancy for power plants covering procedures, test planning, punch-list control and performance readiness.",
      keywords: ["power plant commissioning", "commissioning checklist", "EPC technical consultancy"],
      outcomes: ["Safer startup", "Cleaner punch-list closure", "Documented test evidence"],
      scope: ["Commissioning readiness review", "Test procedure review", "Performance test support", "Handover documentation review"],
      faqs: sharedFaq.en
    },
    {
      slug: "owners-engineering",
      title: "Owner's Engineering",
      eyebrow: "Owner-side technical control",
      description: "Owner's engineering services that protect project value through independent review, field observations and decision support.",
      keywords: ["owner's engineering", "EPC technical consultancy", "renewable energy project advisory"],
      outcomes: ["Better owner visibility", "Reduced technical ambiguity", "Stronger contractor alignment", "Cleaner FAT, SAT and commissioning readiness evidence", "More disciplined project handover controls"],
      scope: [
        "Technical governance",
        "EPC design review and constructability challenge",
        "Contractor deliverable review",
        "Factory acceptance test (FAT) and site acceptance test (SAT) evidence review",
        "Inspection and test plan (ITP) control",
        "Non-conformance report (NCR) management and closeout follow-up",
        "Commissioning readiness and energization gate review",
        "Project handover controls, punch-list discipline and as-built documentation review",
        "Site progress observations",
        "Decision memos"
      ],
      faqs: [
        ...sharedFaq.en,
        {
          question: "How does owner's engineering reduce EPC risk?",
          answer: "It gives the owner independent technical control over design submittals, ITP checkpoints, FAT/SAT evidence, NCR closeout, commissioning readiness and handover documentation before issues become delay claims or operational defects."
        },
        {
          question: "Do you review FAT, SAT, ITP and NCR documentation?",
          answer: "Yes. These records are reviewed as evidence of quality maturity, equipment readiness, interface control and contractor accountability."
        }
      ]
    },
    {
      slug: "om-performance-improvement",
      title: "O&M Performance Improvement",
      eyebrow: "Availability, reliability, losses",
      description: "O&M optimization services for existing renewable energy assets that need measurable operational performance improvement.",
      keywords: ["O&M optimization", "power plant performance analysis", "renewable energy consultant"],
      outcomes: ["Higher availability", "Focused maintenance planning", "Reduced recurring failures"],
      scope: ["Availability and downtime analysis", "Maintenance planning review", "Failure pattern assessment", "KPI structure improvement"],
      faqs: sharedFaq.en
    },
    {
      slug: "grid-protection-system-analysis",
      title: "Grid & Protection System Analysis",
      eyebrow: "Reliability and compliance",
      description: "Grid and protection analysis for power plants requiring stronger coordination, reliability and utility interface confidence.",
      keywords: ["grid protection analysis", "protection coordination", "power plant technical audit"],
      outcomes: ["Reduced trip risk", "Improved protection logic", "Clear grid interface actions"],
      scope: ["Protection setting review", "Single-line diagram assessment", "Trip event analysis", "Grid compliance observations"],
      faqs: sharedFaq.en
    },
    {
      slug: "technical-audits-existing-power-plants",
      title: "Technical Audits for Existing Power Plants",
      eyebrow: "Due diligence and asset health",
      description: "Technical audits for operating power plants covering asset condition, performance risks, O&M maturity and investment priorities.",
      keywords: ["power plant technical audit", "hydropower technical audit", "technical due diligence"],
      outcomes: ["Prioritized risk register", "Investment-grade findings", "Action plan for asset recovery"],
      scope: ["Site inspection", "Document review", "Performance data review", "Corrective action roadmap"],
      faqs: sharedFaq.en
    },
    {
      slug: "renewable-energy-investment-advisory",
      title: "Renewable Energy Investment Advisory",
      eyebrow: "Technical clarity for investment",
      description: "Renewable energy project advisory for investors evaluating feasibility, acquisition, development or performance recovery options.",
      keywords: ["renewable energy investment advisory", "renewable energy consultant", "power plant technical audit"],
      outcomes: ["Better investment decisions", "Clear technical risks", "Practical value creation options"],
      scope: ["Technical due diligence", "Feasibility challenge review", "CAPEX/OPEX technical assumptions", "Asset improvement strategy"],
      faqs: sharedFaq.en
    },
    {
      slug: "hydropower-consulting",
      title: "Hydropower Consulting",
      eyebrow: "HPP performance, commissioning and asset reliability",
      description: "Expert hydropower consulting for owners, EPC teams and investors who need practical engineering support for HPP commissioning, operations, technical audits and performance recovery.",
      keywords: ["hydropower consulting", "HPP commissioning", "hydropower technical audit", "power plant operations"],
      outcomes: ["Higher HPP availability", "Clear commissioning and O&M risk priorities", "Evidence-based hydropower improvement plan"],
      scope: ["Hydropower site inspection", "Turbine-generator operating review", "HPP commissioning evidence assessment", "Water-to-wire loss analysis", "O&M and outage history review"],
      faqs: sharedFaq.en
    },
    {
      slug: "energy-audit",
      title: "Energy Audit Services",
      eyebrow: "Plant performance, losses and technical due diligence",
      description: "Energy audit services for hydropower, solar and renewable power plants focused on technical risk, operating losses, asset condition and practical corrective actions.",
      keywords: ["energy audit services", "power plant technical audit", "renewable energy consultancy", "plant performance review"],
      outcomes: ["Prioritized technical audit report", "Actionable loss reduction roadmap", "Owner-ready investment and risk ranking"],
      scope: ["Power plant site audit", "Performance and loss review", "Asset condition observations", "Grid and protection evidence review", "Corrective action prioritization"],
      faqs: sharedFaq.en
    },
    {
      slug: "solar-energy-consulting",
      title: "Solar Energy Consulting",
      eyebrow: "Solar PV performance, EPC quality and O&M recovery",
      description: "Solar energy consulting for PV investors, owners and EPC teams requiring performance ratio analysis, technical audit support and lifecycle asset optimization.",
      keywords: ["solar energy consulting", "solar plant technical audit", "solar performance ratio analysis", "renewable energy consultancy"],
      outcomes: ["Clear PR and loss diagnosis", "Improved EPC and O&M accountability", "Practical solar recovery action plan"],
      scope: ["Performance ratio analysis", "Inverter and string-level review", "EPC quality evidence assessment", "O&M response and cleaning routine review", "Solar technical due diligence"],
      faqs: sharedFaq.en
    },
    {
      slug: "epc-technical-advisory",
      title: "EPC Technical Advisory",
      eyebrow: "Owner-side EPC risk, quality and delivery control",
      description: "EPC technical advisory for renewable energy projects where owners and investors need independent technical control over design, interfaces, commissioning and handover.",
      keywords: ["EPC technical advisory", "EPC technical consultancy", "owner's engineering", "renewable energy consultancy"],
      outcomes: ["Reduced EPC delivery risk", "Better interface and contractor control", "Stronger commissioning and handover evidence"],
      scope: ["EPC scope and interface review", "Technical risk register", "Contractor deliverable review", "Commissioning readiness challenge", "Owner decision support"],
      faqs: sharedFaq.en
    },
    {
      slug: "technical-due-diligence",
      title: "Technical Due Diligence for Renewable Energy Assets",
      eyebrow: "Investor-grade technical risk review",
      description: "Technical due diligence for hydropower, solar and renewable energy assets covering performance evidence, EPC risk, O&M maturity, grid compliance, CAPEX exposure and acquisition decisions.",
      keywords: ["technical due diligence renewable energy", "power plant technical due diligence", "solar technical due diligence", "hydropower technical due diligence", "renewable energy investment consulting"],
      outcomes: ["Investment-ready technical risk register", "Clear CAPEX and O&M exposure priorities", "Evidence-based acquisition or refinancing decision support", "Improved lender and investor confidence"],
      scope: [
        "Asset data room and EPC documentation review",
        "Hydropower and solar performance evidence analysis",
        "Commissioning records and handover documentation review",
        "O&M maturity, outage history and availability assessment",
        "Grid compliance, protection and reactive power evidence review",
        "CAPEX risk, warranty exposure and corrective action prioritization"
      ],
      faqs: [
        ...sharedFaq.en,
        {
          question: "What is included in renewable energy technical due diligence?",
          answer: "The review typically covers asset condition, generation history, EPC documentation, commissioning evidence, O&M records, grid compliance, technical risks, CAPEX exposure and practical recommendations for investors or owners."
        },
        {
          question: "Is this different from a normal technical audit?",
          answer: "Yes. A technical audit focuses on asset condition and performance. Technical due diligence connects those findings to an investment, acquisition, refinancing or portfolio decision."
        },
        {
          question: "Can the report support acquisition negotiations?",
          answer: "Yes. Findings can be structured as risk register items with evidence, severity, likely cost impact, priority and negotiation relevance."
        }
      ]
    },
    {
      slug: "hpp-performance-analysis",
      title: "HPP Performance Analysis",
      eyebrow: "Hydropower generation loss and efficiency review",
      description: "HPP performance analysis for hydropower owners who need to understand generation losses, turbine efficiency, governor behavior, AGC response, availability, alarms, trips and O&M improvement priorities.",
      keywords: ["HPP performance analysis", "hydropower performance analysis", "turbine efficiency loss analysis", "hydropower generation loss analysis", "AGC compliance hydropower"],
      outcomes: ["Clear hydropower loss diagnosis", "Prioritized turbine, governor and O&M actions", "Improved availability and generation recovery roadmap", "Better evidence for operational and CAPEX decisions"],
      scope: [
        "Generation, water availability and availability trend review",
        "Turbine-generator operating data and efficiency loss analysis",
        "Governor response, AGC behavior and dispatch performance review",
        "SCADA alarm, trip and outage history assessment",
        "Hydraulic constraints, sedimentation signals and auxiliary system observations",
        "O&M routine, corrective action and performance recovery roadmap"
      ],
      faqs: [
        ...sharedFaq.en,
        {
          question: "What data is needed for HPP performance analysis?",
          answer: "Useful inputs include monthly generation, water availability, unit availability, SCADA trends, alarm logs, trip history, outage records, turbine test data, governor settings and O&M reports."
        },
        {
          question: "Can the analysis identify turbine efficiency loss?",
          answer: "It can identify likely efficiency loss patterns and recommend the next engineering checks, including operating curve review, water-to-wire loss analysis, runner condition observations and targeted performance testing."
        },
        {
          question: "Does the review include AGC and grid behavior?",
          answer: "Yes. Setpoint tracking, ramp behavior, governor response, reactive power behavior and grid interface records are reviewed when data is available."
        }
      ]
    },
    {
      slug: "industrial-energy-cost-optimization",
      title: "Industrial Energy Cost Optimization",
      eyebrow: "Electricity cost analysis and savings advisory",
      description: "Energy cost optimization consultancy for factories and industrial facilities facing high electricity bills, reactive power penalties, demand charge exposure, tariff misalignment or rooftop solar feasibility questions.",
      keywords: ["industrial energy cost optimization", "electricity bill analysis", "reactive power penalty analysis", "industrial energy consultant", "rooftop solar feasibility"],
      outcomes: [
        "Identified electricity cost savings potential",
        "Elimination or significant reduction of reactive power penalties",
        "Contract demand and tariff optimization",
        "Realistic rooftop solar payback analysis",
        "Energy monitoring and cost tracking system recommendation"
      ],
      scope: [
        "Electricity bill and consumption profile analysis",
        "Reactive power penalty and compensation system review",
        "Contract demand and excess demand charge assessment",
        "Tariff structure and open market eligibility analysis",
        "Rooftop solar feasibility and self-consumption model",
        "Power quality and metering system observation",
        "Energy management system implementation prioritization"
      ],
      faqs: [
        {
          question: "What types of facilities benefit from this service?",
          answer: "Organized industrial zone factories, textile, food, plastics, metal, cold storage, hospitals, hotels and high-consumption commercial buildings are the primary target audience."
        },
        {
          question: "Can I get an analysis by only sending my electricity bill?",
          answer: "Yes. The last 12 months of electricity bills are sufficient for a preliminary analysis. Consumption profiles, reactive power measurements and contract details can be added for a deeper review."
        },
        {
          question: "Is it possible to completely eliminate reactive power penalties?",
          answer: "If the compensation panel is correctly sized and operating well, reactive penalties can be largely or completely eliminated. The review assesses the existing system and recommends upgrades where needed."
        },
        {
          question: "How long does a rooftop solar feasibility study take?",
          answer: "Based on basic consumption data, roof area and regional solar data, a preliminary feasibility can usually be prepared within 5-7 working days."
        },
        {
          question: "How is this service different from renewable energy consultancy?",
          answer: "This service targets industrial facilities with high electricity costs, not power plant owners. The goal is to optimize existing consumption and reduce energy costs rather than advise on plant construction or acquisition."
        }
      ]
    },
    {
      slug: "reactive-power-audit",
      title: "Reactive Power Audit",
      eyebrow: "Penalty elimination and compensation review",
      description: "Reactive power audit for industrial facilities and renewable energy plants incurring TEİAŞ reactive power penalties — identifying root cause, sizing compensation, and calculating payback period.",
      keywords: ["reactive power audit", "reactive power penalty turkey", "reactive energy penalty analysis", "power factor correction turkey", "TEİAŞ reactive penalty"],
      outcomes: ["Reactive penalty root cause identified", "Compensation system correctly sized", "Payback period calculated", "Penalty elimination roadmap delivered"],
      scope: ["Power factor and reactive power measurement review", "TEİAŞ invoice and penalty calculation analysis", "Compensation panel capacity and control assessment", "Harmonic environment observation", "Upgrade specification and payback analysis"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "What causes reactive power penalties in Turkey?",
          answer: "Reactive penalties occur when the power factor at the grid connection point falls outside the TEİAŞ-required range, typically due to undersized or malfunctioning compensation equipment, harmonic distortion, or incorrect panel settings."
        },
        {
          question: "Can a free analysis be conducted from invoices alone?",
          answer: "Yes. A preliminary reactive penalty analysis can be conducted from the last 12 months of TEİAŞ electricity invoices. Site measurement adds accuracy but is not always required for the initial assessment."
        },
        {
          question: "How quickly can reactive penalties be eliminated?",
          answer: "If the existing compensation panel is resized and correctly configured, penalties can often be reduced within one billing cycle. Where new equipment is needed, the typical timeline is 4–8 weeks from decision to installation."
        }
      ]
    },
    {
      slug: "independent-engineer",
      title: "Independent Engineer",
      eyebrow: "Lender and investor technical oversight",
      description: "Independent Engineer services for renewable energy project finance — providing lenders, bond trustees and investors with neutral technical oversight from pre-construction through performance testing and completion.",
      keywords: ["independent engineer renewable energy turkey", "independent engineer solar project finance", "IE appointment hydropower turkey", "independent engineer report project finance"],
      outcomes: ["Neutral technical opinion for lenders", "Drawdown conditions verified", "Completion certificate issued", "Bankable independent engineer report delivered"],
      scope: ["Pre-construction feasibility and EPC contract review", "Monthly site visit reports during construction", "FAT and SAT witnessing", "Commissioning readiness assessment", "Performance test witness and certification", "Completion certificate issuance"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "When is an Independent Engineer required?",
          answer: "Most Turkish project finance structures — including development bank loans from Ziraat, Halkbank, Garanti BBVA and international facilities from EBRD and IFC — require an IE appointment as a loan condition."
        },
        {
          question: "Who does the Independent Engineer represent?",
          answer: "The IE is appointed by and reports to the lender or bond trustee — not the developer or EPC contractor. This independence is the basis of the IE's credibility with the financing bank."
        },
        {
          question: "What is included in an IE completion certificate?",
          answer: "The completion certificate confirms that the project has reached commercial operation, performance tests have been completed satisfactorily, and all lender conditions precedent for final drawdown have been met."
        }
      ]
    },
    {
      slug: "lenders-engineer",
      title: "Lender's Engineer",
      eyebrow: "Bank-side technical oversight for project finance",
      description: "Lender's Engineer services for Turkish and international banks financing renewable energy projects — providing technical due diligence, construction monitoring, drawdown verification and completion certification.",
      keywords: ["lenders engineer solar turkey", "lenders technical advisor renewable energy", "lenders engineer hydropower turkey", "bank technical advisor project finance"],
      outcomes: ["Lender-side technical opinion delivered", "Drawdown conditions independently verified", "Construction progress and quality confirmed", "Completion certificate issued for final drawdown"],
      scope: ["Pre-financial-close technical due diligence", "EPC contract technical adequacy review", "Energy yield and grid connection assessment", "Monthly construction monitoring reports", "Drawdown condition verification", "Completion and performance test certification"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "What is the difference between Lender's Engineer and Independent Engineer?",
          answer: "The terms are often used interchangeably. Lender's Engineer emphasises the bank-side appointment — the primary client is the financing institution, not the project developer. Both roles provide neutral technical oversight throughout the project lifecycle."
        },
        {
          question: "Which banks does Oztoprak Energy work with?",
          answer: "We have experience supporting project finance structures for Turkish development banks including Ziraat, Halkbank and Garanti BBVA, as well as international financing institutions and private lenders."
        },
        {
          question: "How frequently are monitoring reports produced?",
          answer: "Monthly progress reports are standard during the construction phase. Milestone reports are produced at key events: financial close, mechanical completion, first energization, commissioning completion and commercial operation."
        }
      ]
    },
    {
      slug: "bank-technical-advisor",
      title: "Bank Technical Advisor",
      eyebrow: "Pre-financial-close technical opinion",
      description: "Bank Technical Advisor (BTA) services for lenders and credit committees requiring an independent technical opinion on renewable energy project feasibility, EPC contract adequacy, yield assumptions and grid connection plan before financial close.",
      keywords: ["bank technical advisor renewable energy", "BTA solar project turkey", "bank technical advisory report", "pre-financial close technical review"],
      outcomes: ["Independent technical opinion for credit committee", "EPC contract technical gaps identified", "Yield and grid connection assumptions challenged", "BTA report structured for lender's facility agreement"],
      scope: ["Technical feasibility review", "EPC contract scope and risk allocation analysis", "Energy yield assessment review", "Grid connection plan and permit adequacy", "Environmental and permitting status", "Technical risk summary for credit committee"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "What is the difference between a BTA and an Independent Engineer?",
          answer: "A BTA produces a one-time technical opinion at the pre-financial-close stage. An Independent Engineer is appointed for the full project lifecycle — construction, commissioning and completion. Many projects require both: a BTA for credit approval, then an IE appointment post-financial-close."
        },
        {
          question: "How long does a BTA review take?",
          answer: "A typical BTA review takes 3–6 weeks depending on data room completeness, site visit requirements and lender reporting obligations."
        }
      ]
    },
    {
      slug: "portfolio-technical-review",
      title: "Portfolio Technical Review",
      eyebrow: "Multi-asset technical risk assessment",
      description: "Portfolio Technical Review for infrastructure investors and private equity funds owning multiple renewable assets — providing consolidated risk assessment, performance benchmarking and priority action matrix across the portfolio.",
      keywords: ["renewable portfolio technical review", "solar portfolio due diligence turkey", "renewable energy portfolio review", "multi-asset technical assessment"],
      outcomes: ["Portfolio-level risk aggregation completed", "Assets benchmarked against each other", "Systematic risks identified across portfolio", "Priority action matrix delivered"],
      scope: ["Individual asset technical condition review", "Portfolio-level risk aggregation and correlation analysis", "Performance benchmarking across assets", "Systematic O&M, EPC and grid compliance issue identification", "Portfolio technical dashboard and priority action matrix"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "How is a portfolio review different from individual asset due diligence?",
          answer: "A portfolio review identifies risks that are correlated across assets — such as a common EPC contractor with recurring defect patterns, or a shared grid operator issue affecting multiple plants. This view is not visible from individual asset reviews."
        },
        {
          question: "What size portfolio does this service target?",
          answer: "Portfolio reviews are most valuable for investors with 3 or more renewable assets. The consolidated approach produces efficiency benefits and reveals systematic patterns that individual asset reviews miss."
        }
      ]
    },
    {
      slug: "expert-witness",
      title: "Expert Witness",
      eyebrow: "Technical opinions for legal proceedings",
      description: "Expert Witness services for renewable energy disputes in court and arbitration proceedings — providing independent written technical opinions on performance shortfall, delay causation, EPC specification compliance and commissioning defects.",
      keywords: ["expert witness renewable energy turkey", "expert witness power plant dispute", "expert witness solar energy", "technical expert ICC arbitration turkey"],
      outcomes: ["Independent technical opinion prepared", "Expert report suitable for court or arbitration", "Technical facts clearly presented for legal counsel", "Opinion defensible under cross-examination"],
      scope: ["Technical document and evidence review", "Independent engineering opinion preparation", "Performance shortfall analysis", "Delay causation technical assessment", "EPC specification compliance review", "Expert report drafting and revision for legal proceedings"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "What types of disputes require an Expert Witness?",
          answer: "Common disputes include EPC performance guarantee shortfall, construction delay causation, defect liability, grid connection failure responsibility, commissioning defects, and O&M contract performance disputes."
        },
        {
          question: "What legal frameworks apply?",
          answer: "We have experience with ICC Arbitration, ICSID proceedings, Turkish courts, and international arbitration seated in London, Paris and Stockholm. The expert report format and disclosure obligations vary by jurisdiction."
        }
      ]
    },
    {
      slug: "technical-arbitration-support",
      title: "Technical Arbitration Support",
      eyebrow: "Engineering evidence for dispute resolution",
      description: "Technical arbitration support for renewable energy EPC disputes — reviewing technical documents, preparing independent engineering opinions, and assisting legal counsel with technical arguments and evidence strategy.",
      keywords: ["technical arbitration renewable energy turkey", "engineering dispute support solar", "EPC arbitration technical expert", "renewable energy dispute support"],
      outcomes: ["Independent technical position established", "Technical documents reviewed for strength and weakness", "Legal counsel supported with engineering facts", "Expert opinion prepared for arbitration proceedings"],
      scope: ["Technical document and evidence review", "Independent engineering position preparation", "Performance shortfall and delay causation analysis", "Specification compliance and defect assessment", "Legal counsel briefing and technical strategy support", "Expert witness report preparation if required"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "How is arbitration support different from expert witness?",
          answer: "Arbitration support assists one party in understanding and presenting the technical facts of their case. An Expert Witness provides a formal independent opinion for the tribunal. Arbitration support often precedes and informs the Expert Witness appointment."
        },
        {
          question: "How long do arbitration engagements typically last?",
          answer: "Technical arbitration support for renewable energy disputes typically runs 6–24 months, depending on the complexity of the technical issues, the number of expert reports required, and the arbitration timeline."
        }
      ]
    },
    {
      slug: "factory-acceptance-test",
      title: "Factory Acceptance Test (FAT) Witnessing",
      eyebrow: "Equipment verification before shipment",
      description: "FAT witnessing services for renewable energy equipment — verifying that inverters, transformers, protection relays and SCADA hardware meet technical specifications at the manufacturer's facility before shipment to site.",
      keywords: ["FAT inspection solar inverter turkey", "factory acceptance test renewable energy", "FAT witnessing transformer", "FAT inspection commissioning"],
      outcomes: ["Equipment defects identified before shipment", "FAT report delivered with technical evidence", "Technical specification compliance verified", "Commissioning risk reduced by early defect detection"],
      scope: ["Inverter FAT witnessing and report", "Power transformer FAT (IEC 60076 routine tests)", "Protection relay FAT and settings verification", "SCADA and control system factory testing", "FAT punch-list management and closure verification"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "Why is FAT witnessing important?",
          answer: "Defects found at FAT cost 10–50x less to resolve than defects found during site commissioning or operation. FAT witnessing also creates baseline documentation for warranty claims and future troubleshooting."
        },
        {
          question: "Which standards do you apply during FAT?",
          answer: "IEC 60076 for power transformers, IEC 62109 for inverters, IEC 60255 series for protection relays, and manufacturer-specific test procedures agreed with the owner during pre-FAT documentation review."
        }
      ]
    },
    {
      slug: "site-acceptance-test",
      title: "Site Acceptance Test (SAT) Supervision",
      eyebrow: "Pre-handover installation verification",
      description: "SAT supervision services for solar and hydropower plants — verifying that installed equipment functions correctly in its installed environment before handover, covering string testing, inverter commissioning, protection verification and SCADA check.",
      keywords: ["SAT site acceptance test solar plant", "site acceptance test commissioning turkey", "SAT supervision renewable energy", "IEC 62446 solar SAT"],
      outcomes: ["Installed equipment function verified", "SAT certificate issued with evidence", "Commissioning punch-list managed", "IEC 62446 documentation requirements met"],
      scope: ["Solar string testing and IV curve tracing", "Inverter functional test verification", "Protection relay on-site testing", "SCADA commissioning check and I/O verification", "SAT certificate and punch-list management", "IEC 62446 documentation compliance review"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "What is the difference between FAT and SAT?",
          answer: "FAT verifies equipment at the manufacturer's facility. SAT verifies that the same equipment, once installed, functions correctly at the site — accounting for cable runs, earthing, auxiliary supplies and interaction with other systems."
        },
        {
          question: "Is SAT required for TEİAŞ grid connection approval?",
          answer: "TEİAŞ requires protection relay commissioning evidence and SCADA telemetry verification as part of the energization approval process. SAT documentation supports these requirements directly."
        }
      ]
    },
    {
      slug: "performance-guarantee-verification",
      title: "Performance Guarantee Verification",
      eyebrow: "Independent measurement against EPC contract guarantee",
      description: "Performance Guarantee Verification for solar and renewable energy plants — independently measuring actual plant performance against the EPC contractual guarantee using IEC 61724 methodology to resolve disputes or confirm compliance.",
      keywords: ["performance guarantee verification solar plant", "EPC performance test witness", "solar performance ratio test", "IEC 61724 performance test"],
      outcomes: ["Actual performance independently measured", "Performance Ratio calculated per IEC 61724", "Contractual guarantee compliance determined", "Bankable performance test report delivered"],
      scope: ["Performance measurement setup and calibration", "IEC 61724 methodology application", "Irradiance, temperature and generation data collection", "Performance Ratio calculation with correction factors", "Comparison with EPC guaranteed values", "Performance Test Report suitable for legal and commercial use"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "Why is independent performance verification needed?",
          answer: "EPC contractors calculate their own performance against their own guarantee — a clear conflict of interest. Independent verification ensures the test methodology, correction factors and measurement accuracy are not biased toward the contractor."
        },
        {
          question: "Which standard applies to solar performance testing?",
          answer: "IEC 61724-1 (PV system performance monitoring) defines measurement and reporting requirements. IEC 61724-3 defines the energy evaluation methodology used for guarantee verification."
        }
      ]
    },
    {
      slug: "construction-monitoring",
      title: "Construction Monitoring",
      eyebrow: "Owner-side quality during construction",
      description: "Construction monitoring for renewable energy projects — on-site inspection of critical installation milestones, workmanship verification against approved drawings, NCR documentation, and ITP hold point witnessing on behalf of owners or lenders.",
      keywords: ["construction monitoring solar plant turkey", "EPC construction supervision", "renewable energy construction quality", "construction monitoring owner lender"],
      outcomes: ["Installation quality verified against specifications", "NCRs documented and tracked to closure", "ITP hold points witnessed with evidence", "Construction defects identified before commissioning"],
      scope: ["DC and AC electrical installation inspection", "Civil and mounting structure quality verification", "Grid connection and transformer installation review", "ITP hold point and witness point attendance", "NCR documentation and closure tracking", "Interface with EPC quality plan"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "How is construction monitoring different from project monitoring?",
          answer: "Construction monitoring involves Oztoprak Energy engineers being on-site during critical installation milestones to physically inspect workmanship and verify against approved drawings. Project monitoring is less intensive — typically monthly progress visits and written reports without detailed physical inspection."
        }
      ]
    },
    {
      slug: "project-monitoring",
      title: "Project Monitoring",
      eyebrow: "Regular progress reporting for lenders and investors",
      description: "Project monitoring for renewable energy construction — regular site visits, written progress reports, schedule compliance assessment, and early-warning technical issue identification on behalf of lenders and investors.",
      keywords: ["project monitoring renewable energy construction turkey", "technical monitoring solar construction", "construction progress reporting lender", "project monitoring report"],
      outcomes: ["Regular progress reports delivered", "Schedule compliance assessed", "Early technical issues flagged", "Lender-ready monitoring reports produced"],
      scope: ["Monthly or milestone-based site visits", "Physical progress and quality assessment", "Schedule compliance review", "Contractor deliverable status review", "Early-warning technical issue identification", "Written progress reports for lenders and investors"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "How frequently are project monitoring visits conducted?",
          answer: "Typically monthly during the active construction period. Visits can be adjusted to milestone frequency — for example, at civil completion, electromechanical installation, energization readiness, and commissioning milestones."
        }
      ]
    },
    {
      slug: "grid-compliance-audit",
      title: "Grid Compliance Audit",
      eyebrow: "TEİAŞ requirements verification",
      description: "Grid Compliance Audit for solar and hydropower plants — systematic review of TEİAŞ grid connection requirements including protection relay settings, reactive power compensation, fault ride-through compliance and technical documentation.",
      keywords: ["grid compliance audit solar turkey", "TEİAŞ compliance review", "grid compliance renewable energy turkey", "FRT compliance audit"],
      outcomes: ["Compliance gaps identified with evidence", "TEİAŞ requirement alignment confirmed or challenged", "Remediation schedule produced", "Grid compliance report suitable for regulatory review"],
      scope: ["Protection relay settings review against TEİAŞ requirements", "Reactive power and power factor compliance check", "Fault ride-through (FRT) evidence review", "Grid connection documentation audit", "Anti-islanding and SCADA telemetry compliance", "Remediation recommendations and schedule"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "What happens if a plant fails a grid compliance audit?",
          answer: "Non-compliant settings or missing documentation create regulatory risk — TEİAŞ can issue improvement notices or curtailment orders. The audit report includes a prioritized remediation schedule so the plant can achieve compliance before a regulatory review occurs."
        },
        {
          question: "Which TEİAŞ regulations are covered?",
          answer: "The audit covers TEİAŞ Sistem İşletim Yönetmeliği requirements including protection coordination, reactive power limits, FRT profiles, anti-islanding obligations and SCADA telemetry interface requirements."
        }
      ]
    },
    {
      slug: "power-quality-audit",
      title: "Power Quality Audit",
      eyebrow: "Harmonic and voltage compliance measurement",
      description: "Power Quality Audit for renewable energy plants and industrial facilities — measuring harmonic distortion, voltage imbalance, flicker, and frequency deviation at the grid connection point against IEEE 519 and TEİAŞ requirements.",
      keywords: ["power quality audit turkey", "harmonics voltage flicker renewable energy", "IEEE 519 compliance turkey", "power quality measurement solar"],
      outcomes: ["Power quality measurements completed", "Compliance status against IEEE 519 and TEİAŞ confirmed", "Non-compliance root cause identified", "Remediation recommendations provided"],
      scope: ["Harmonic distortion measurement (voltage and current)", "Voltage imbalance and flicker assessment", "Frequency deviation review", "IEEE 519 and IEC 61000-3-x compliance check", "TEİAŞ power quality limit verification", "Root cause analysis and remediation recommendations"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "What equipment is used for power quality measurement?",
          answer: "Calibrated Class A power quality analyzers compliant with IEC 61000-4-30 are used for all site measurements. Measurement duration is typically 7 days to capture weekly variation patterns as required by standards."
        }
      ]
    },
    {
      slug: "asset-management",
      title: "Technical Asset Management",
      eyebrow: "Ongoing performance oversight for owners",
      description: "Technical Asset Management for renewable energy portfolios — ongoing yield monitoring, O&M contractor oversight, performance benchmarking, compliance tracking, and annual technical review for owners who want consistent asset performance.",
      keywords: ["renewable energy asset management turkey", "solar plant technical asset management", "technical asset management hydropower", "O&M oversight renewable energy"],
      outcomes: ["Consistent performance monitoring in place", "O&M contractor performance tracked against KPIs", "Annual technical review delivered", "Compliance and regulatory issues identified early"],
      scope: ["Monthly yield and availability monitoring", "Performance benchmarking against budget and peers", "O&M contractor KPI tracking and oversight", "Grid compliance and regulatory status monitoring", "Annual technical review with prioritized action plan", "Incident and defect escalation management"],
      faqs: [
        ...sharedFaq.en,
        {
          question: "Is this financial asset management?",
          answer: "No. Oztoprak Energy provides technical asset management only — engineering oversight, performance monitoring, O&M contractor management and compliance tracking. Financial asset management (fund administration, distributions, financial reporting) is outside our scope."
        },
        {
          question: "What is included in the annual technical review?",
          answer: "The annual review covers 12-month generation performance, availability trends, O&M quality assessment, equipment condition observations, grid compliance status, outstanding defects, and a prioritized action plan for the next 12 months."
        }
      ]
    }
  ],
  tr: [
    {
      slug: "epc-teknik-danismanlik",
      title: "EPC Teknik Danışmanlık",
      eyebrow: "Risk, kalite ve uygulanabilirlik",
      description: "Yenilenebilir enerji projeleri için tasarım incelemesinden saha uygulaması ve teslim sürecine kadar bağımsız EPC teknik danışmanlık.",
      keywords: ["EPC teknik danışmanlık", "enerji santrali danışmanlığı", "işveren mühendisliği"],
      outcomes: ["Net EPC risk listesi", "Güçlü teknik şartnameler", "Daha hazırlıklı teslim süreci"],
      scope: ["Tasarım ve şartname inceleme", "EPC ihale teknik desteği", "Saha kalite gözlemleri", "Arayüz risk değerlendirmesi"],
      faqs: sharedFaq.tr
    },
    {
      slug: "hes-optimizasyonu",
      title: "HES Optimizasyonu",
      eyebrow: "Verimlilik ve emre amadelik",
      description: "Üretim, güvenilirlik, su-güç performansı ve pratik işletme bakım iyileştirmelerine odaklanan HES danışmanlığı.",
      keywords: ["HES danışmanlığı", "HES optimizasyonu", "işletme bakım optimizasyonu"],
      outcomes: ["Önlenebilir kayıpların azaltılması", "Emre amadeliğin iyileştirilmesi", "Öncelikli düzeltici aksiyonlar"],
      scope: ["Türbin ve jeneratör performans inceleme", "Hidrolik kayıp değerlendirmesi", "Operasyon verisi analizi", "Bakım pratiği inceleme"],
      faqs: sharedFaq.tr
    },
    {
      slug: "ges-danismanligi",
      title: "GES Danışmanlığı",
      eyebrow: "Üretim ve güvenilirlik",
      description: "Yatırımcılar, EPC ekipleri ve santral sahipleri için üretim, kalite ve yaşam döngüsü performansını güçlendiren GES danışmanlığı.",
      keywords: ["GES danışmanlığı", "GES performans iyileştirme", "enerji yatırım danışmanlığı"],
      outcomes: ["Geliştirilmiş PR analizi", "Düşük performans riskinin azaltılması", "Uygulanabilir O&M yol haritası"],
      scope: ["Üretim ve kayıp incelemesi", "EPC kalite incelemesi", "İşletme bakım performans değerlendirmesi", "Teknik durum tespiti"],
      faqs: sharedFaq.tr
    },
    {
      slug: "enerji-santrali-devreye-alma",
      title: "Enerji Santrali Devreye Alma",
      eyebrow: "Hazırlık ve kontrollü başlangıç",
      description: "Prosedür, test planlama, eksik iş kontrolü ve performans hazırlığı dahil enerji santrali devreye alma danışmanlığı.",
      keywords: ["santral devreye alma", "devreye alma kontrol listesi", "EPC teknik danışmanlık"],
      outcomes: ["Daha güvenli ilk çalıştırma", "Daha temiz eksik iş kapanışı", "Belgelenmiş test kanıtları"],
      scope: ["Devreye alma hazırlık incelemesi", "Test prosedürü inceleme", "Performans testi desteği", "Teslim dokümantasyonu inceleme"],
      faqs: sharedFaq.tr
    },
    {
      slug: "isveren-muhendisligi",
      title: "İşveren Mühendisliği | HES ve GES Projelerinde Bağımsız Teknik Kontrol",
      eyebrow: "İşveren tarafı teknik kontrol",
      description: "HES, GES ve yenilenebilir enerji projelerinde işveren mühendisliği: bağımsız EPC incelemesi, saha gözlemleri, yüklenici doküman kontrolü ve karar desteği. Proje değerini koruyun.",
      keywords: ["işveren mühendisliği", "EPC teknik danışmanlık", "enerji santrali danışmanlığı"],
      outcomes: ["Daha yüksek işveren görünürlüğü", "Azalan teknik belirsizlik", "Güçlü yüklenici uyumu"],
      scope: ["Teknik yönetişim", "Yüklenici doküman incelemesi", "Saha ilerleme gözlemleri", "Karar notları"],
      faqs: sharedFaq.tr
    },
    {
      slug: "isletme-bakim-performans-iyilestirme",
      title: "İşletme ve Bakım Performans İyileştirme",
      eyebrow: "Emre amadelik, güvenilirlik, kayıplar",
      description: "Ölçülebilir operasyonel performans iyileştirmesi isteyen mevcut yenilenebilir enerji varlıkları için işletme bakım optimizasyonu.",
      keywords: ["işletme bakım optimizasyonu", "santral performans analizi", "enerji santrali danışmanlığı"],
      outcomes: ["Daha yüksek emre amadelik", "Odaklı bakım planlama", "Tekrarlayan arızalarda azalma"],
      scope: ["Emre amadelik ve duruş analizi", "Bakım planlama incelemesi", "Arıza paterni değerlendirmesi", "KPI yapısı iyileştirme"],
      faqs: sharedFaq.tr
    },
    {
      slug: "sebeke-koruma-sistemi-analizi",
      title: "Şebeke ve Koruma Sistemi Analizi",
      eyebrow: "Güvenilirlik ve uyum",
      description: "Daha güçlü koordinasyon, güvenilirlik ve şebeke arayüz güveni gerektiren santraller için şebeke ve koruma analizi.",
      keywords: ["şebeke koruma analizi", "koruma koordinasyonu", "santral performans analizi"],
      outcomes: ["Açma riskinin azaltılması", "Geliştirilmiş koruma mantığı", "Net şebeke arayüz aksiyonları"],
      scope: ["Koruma ayarı incelemesi", "Tek hat şeması değerlendirme", "Açma olayı analizi", "Şebeke uyum gözlemleri"],
      faqs: sharedFaq.tr
    },
    {
      slug: "mevcut-santraller-icin-teknik-denetim",
      title: "Mevcut Santraller İçin Teknik Denetim",
      eyebrow: "Durum tespiti ve varlık sağlığı",
      description: "Mevcut santraller için varlık durumu, performans riskleri, O&M olgunluğu ve yatırım önceliklerini kapsayan teknik denetim.",
      keywords: ["HES teknik denetim", "santral performans analizi", "teknik durum tespiti"],
      outcomes: ["Öncelikli risk listesi", "Yatırımcı düzeyinde bulgular", "Varlık iyileştirme aksiyon planı"],
      scope: ["Saha incelemesi", "Doküman incelemesi", "Performans verisi inceleme", "Düzeltici aksiyon yol haritası"],
      faqs: sharedFaq.tr
    },
    {
      slug: "yenilenebilir-enerji-yatirim-danismanligi",
      title: "Yenilenebilir Enerji Yatırım Danışmanlığı",
      eyebrow: "Yatırım için teknik netlik",
      description: "Fizibilite, satın alma, geliştirme veya performans toparlama seçeneklerini değerlendiren yatırımcılar için teknik yatırım danışmanlığı.",
      keywords: ["enerji yatırım danışmanlığı", "enerji santrali danışmanlığı", "HES teknik denetim"],
      outcomes: ["Daha doğru yatırım kararları", "Net teknik riskler", "Pratik değer yaratma seçenekleri"],
      scope: ["Teknik durum tespiti", "Fizibilite varsayım incelemesi", "CAPEX/OPEX teknik varsayımları", "Varlık iyileştirme stratejisi"],
      faqs: sharedFaq.tr
    },
    {
      slug: "hes-danismanligi",
      title: "HES Danışmanlığı",
      eyebrow: "HES performansı, devreye alma ve varlık güvenilirliği",
      description: "HES sahipleri, EPC ekipleri ve yatırımcılar için HES devreye alma, işletme, teknik denetim ve performans toparlama odaklı uzman hidroelektrik danışmanlığı.",
      keywords: ["HES danışmanlığı", "HES devreye alma", "HES teknik denetim", "enerji santrali danışmanlığı"],
      outcomes: ["Daha yüksek HES emre amadeliği", "Net devreye alma ve O&M risk öncelikleri", "Kanıta dayalı HES iyileştirme planı"],
      scope: ["HES saha incelemesi", "Türbin-jeneratör işletme incelemesi", "HES devreye alma kanıt değerlendirmesi", "Su-güç kayıp analizi", "O&M ve duruş geçmişi incelemesi"],
      faqs: sharedFaq.tr
    },
    {
      slug: "enerji-denetimi",
      title: "Enerji Denetimi Hizmetleri",
      eyebrow: "Santral performansı, kayıplar ve teknik durum tespiti",
      description: "HES, GES ve yenilenebilir enerji santralleri için teknik risk, işletme kayıpları, varlık durumu ve uygulanabilir düzeltici aksiyon odaklı enerji denetimi hizmetleri.",
      keywords: ["enerji denetimi", "santral teknik denetim", "enerji santrali danışmanlığı", "santral performans analizi"],
      outcomes: ["Öncelikli teknik denetim raporu", "Uygulanabilir kayıp azaltma yol haritası", "İşveren için yatırım ve risk sıralaması"],
      scope: ["Santral saha denetimi", "Performans ve kayıp incelemesi", "Varlık durumu gözlemleri", "Şebeke ve koruma kanıt incelemesi", "Düzeltici aksiyon önceliklendirme"],
      faqs: sharedFaq.tr
    },
    {
      slug: "gunes-enerjisi-danismanligi",
      title: "Güneş Enerjisi Danışmanlığı",
      eyebrow: "GES performansı, EPC kalite ve O&M toparlama",
      description: "Performans oranı analizi, teknik denetim ve yaşam döngüsü varlık optimizasyonu ihtiyacı olan GES yatırımcıları, sahipleri ve EPC ekipleri için güneş enerjisi danışmanlığı.",
      keywords: ["güneş enerjisi danışmanlığı", "GES teknik denetim", "GES performans oranı analizi", "yenilenebilir enerji danışmanlığı"],
      outcomes: ["Net PR ve kayıp teşhisi", "Geliştirilmiş EPC ve O&M sorumluluk görünürlüğü", "Uygulanabilir GES toparlama aksiyon planı"],
      scope: ["Performans oranı analizi", "İnverter ve string düzeyi inceleme", "EPC kalite kanıt değerlendirmesi", "O&M müdahale ve temizlik rutini incelemesi", "GES teknik durum tespiti"],
      faqs: sharedFaq.tr
    },
    {
      slug: "epc-teknik-danismanlik-hizmeti",
      title: "EPC Teknik Danışmanlık Hizmeti",
      eyebrow: "İşveren tarafı EPC risk, kalite ve teslim kontrolü",
      description: "Tasarım, arayüzler, devreye alma ve teslim süreçlerinde bağımsız teknik kontrol ihtiyacı olan yenilenebilir enerji projeleri için EPC teknik danışmanlık hizmeti.",
      keywords: ["EPC teknik danışmanlık", "işveren mühendisliği", "yenilenebilir enerji danışmanlığı", "santral devreye alma"],
      outcomes: ["Azaltılmış EPC teslim riski", "Daha güçlü arayüz ve yüklenici kontrolü", "Daha sağlam devreye alma ve teslim kanıtları"],
      scope: ["EPC kapsam ve arayüz incelemesi", "Teknik risk listesi", "Yüklenici doküman incelemesi", "Devreye alma hazırlık sorgulaması", "İşveren karar desteği"],
      faqs: sharedFaq.tr
    },
    {
      slug: "teknik-durum-tespiti",
      title: "Yenilenebilir Enerji Teknik Durum Tespiti",
      eyebrow: "Yatirimci duzeyinde teknik risk incelemesi",
      description: "HES, GES ve yenilenebilir enerji varliklari icin performans kaniti, EPC riski, O&M olgunlugu, sebeke uyumu, CAPEX etkisi ve satin alma kararlarini kapsayan teknik durum tespiti.",
      keywords: ["teknik durum tespiti", "yenilenebilir enerji due diligence", "HES teknik durum tespiti", "GES teknik durum tespiti", "enerji yatirim danismanligi"],
      outcomes: ["Yatirima hazir teknik risk listesi", "Net CAPEX ve O&M risk oncelikleri", "Satin alma veya refinansman karari icin kanita dayali destek", "Yatirimci ve finans kurumu guveninin artmasi"],
      scope: [
        "Varlik data room ve EPC dokumantasyon incelemesi",
        "HES ve GES performans kaniti analizi",
        "Devreye alma kayitlari ve teslim dokumantasyonu incelemesi",
        "O&M olgunlugu, durus gecmisi ve emre amadelik degerlendirmesi",
        "Sebeke uyumu, koruma ve reaktif guc kaniti incelemesi",
        "CAPEX riski, garanti etkisi ve duzeltici aksiyon onceliklendirme"
      ],
      faqs: [
        ...sharedFaq.tr,
        {
          question: "Yenilenebilir enerji teknik durum tespiti neleri kapsar?",
          answer: "Inceleme varlik durumu, uretim gecmisi, EPC dokumantasyonu, devreye alma kanitlari, O&M kayitlari, sebeke uyumu, teknik riskler, CAPEX etkisi ve yatirimci icin pratik onerileri kapsar."
        },
        {
          question: "Bu calisma normal teknik denetimden farkli midir?",
          answer: "Evet. Teknik denetim varlik durumu ve performansa odaklanir. Teknik durum tespiti bu bulgulari satin alma, yatirim, refinansman veya portfoy karariyla iliskilendirir."
        },
        {
          question: "Rapor satin alma gorusmelerini destekler mi?",
          answer: "Evet. Bulgular kanit, siddet, muhtemel maliyet etkisi, oncelik ve pazarlik etkisi ile risk listesi olarak yapilandirilabilir."
        }
      ]
    },
    {
      slug: "hes-performans-analizi",
      title: "HES Performans Analizi",
      eyebrow: "Hidroelektrik uretim kaybi ve verimlilik incelemesi",
      description: "Uretim kaybi, turbin verimi, governor davranisi, AGC tepkisi, emre amadelik, alarmlar, tripler ve O&M iyilestirme onceliklerini anlamak isteyen HES sahipleri icin performans analizi.",
      keywords: ["HES performans analizi", "hidroelektrik santral performans analizi", "turbin verim kaybi analizi", "HES uretim kaybi analizi", "AGC uyumu HES"],
      outcomes: ["Net HES kayip teshisi", "Oncelikli turbin, governor ve O&M aksiyonlari", "Emre amadelik ve uretim toparlama yol haritasi", "Operasyonel ve CAPEX kararlari icin daha guclu kanit"],
      scope: [
        "Uretim, su geliri ve emre amadelik trend incelemesi",
        "Turbin-jenerator isletme verisi ve verim kaybi analizi",
        "Governor tepkisi, AGC davranisi ve yuk tevzi performansi incelemesi",
        "SCADA alarm, trip ve durus gecmisi degerlendirmesi",
        "Hidrolik kisitlar, sedimentasyon sinyalleri ve yardimci sistem gozlemleri",
        "O&M rutini, duzeltici aksiyon ve performans toparlama yol haritasi"
      ],
      faqs: [
        ...sharedFaq.tr,
        {
          question: "HES performans analizi icin hangi veriler gerekir?",
          answer: "Aylik uretim, su geliri, unit emre amadeligi, SCADA trendleri, alarm kayitlari, trip gecmisi, durus kayitlari, turbin test verisi, governor ayarlari ve O&M raporlari faydalidir."
        },
        {
          question: "Analiz turbin verim kaybini belirleyebilir mi?",
          answer: "Muhtemel verim kaybi paternleri belirlenebilir ve isletme egrisi incelemesi, su-guc kayip analizi, runner durumu gozlemi ve hedefli performans testi gibi sonraki muhendislik kontrolleri onerilebilir."
        },
        {
          question: "AGC ve sebeke davranisi incelenir mi?",
          answer: "Evet. Veri mevcutsa set noktasi takibi, rampa davranisi, governor tepkisi, reaktif guc davranisi ve sebeke arayuz kayitlari incelenir."
        }
      ]
    },
    {
      slug: "endustriyel-enerji-maliyet-optimizasyonu",
      title: "Endüstriyel Enerji Maliyet Optimizasyonu",
      eyebrow: "Elektrik maliyeti analizi ve tasarruf danışmanlığı",
      description: "Yüksek elektrik faturası, reaktif güç cezası, talep fazlası, tarife uyumsuzluğu ve çatı GES fizibilite konularında fabrikalara ve endüstriyel tesislere yönelik enerji maliyet optimizasyonu danışmanlığı.",
      keywords: ["endüstriyel enerji maliyet optimizasyonu", "elektrik faturası analizi", "reaktif ceza analizi", "sanayi enerji danışmanlığı", "çatı GES fizibilite"],
      outcomes: [
        "Elektrik maliyetinde somut tasarruf potansiyelinin tespiti",
        "Reaktif güç cezalarının ortadan kaldırılması",
        "Tarife ve sözleşme gücü optimizasyonu",
        "Çatı GES yatırımı için gerçekçi geri ödeme analizi",
        "Enerji izleme ve maliyet takip sistemi önerisi"
      ],
      scope: [
        "Elektrik faturası ve tüketim profili analizi",
        "Reaktif güç cezası ve kompanzasyon sistemi incelemesi",
        "Sözleşme gücü ve talep fazlası değerlendirmesi",
        "Tarife yapısı ve serbest piyasa uygunluk analizi",
        "Çatı GES fizibilite ve öz tüketim modeli",
        "Güç kalitesi ve ölçüm sistemi gözlemi",
        "Enerji yönetim sistemi kurulum önceliklendirmesi"
      ],
      faqs: [
        {
          question: "Hangi tür tesisler bu hizmetten faydalanabilir?",
          answer: "Organize sanayi bölgesindeki fabrikalar, tekstil, gıda, plastik, metal, soğuk hava deposu, hastane, otel ve yüksek tüketimli ticari binalar bu hizmetin birincil hedef kitlesidir."
        },
        {
          question: "Sadece fatura göndererek analiz yaptırabilir miyim?",
          answer: "Evet. Ön analiz için son 12 aya ait elektrik faturası yeterlidir. Daha detaylı inceleme için tüketim profili, reaktif güç ölçümleri ve sözleşme bilgileri de kullanılabilir."
        },
        {
          question: "Reaktif güç cezasını tamamen ortadan kaldırmak mümkün müdür?",
          answer: "Kompanzasyon paneli uygun kapasitede ve doğru çalışıyorsa reaktif ceza büyük ölçüde veya tamamen ortadan kaldırılabilir. İnceleme mevcut sistemi değerlendirir ve gerekiyorsa güncelleme önerisi sunar."
        },
        {
          question: "Çatı GES için fizibilite ne kadar sürede hazırlanır?",
          answer: "Temel tüketim verisi, çatı alanı bilgisi ve bölge güneş verisine dayanarak genellikle 5-7 iş günü içinde ön fizibilite hazırlanabilir."
        },
        {
          question: "Bu hizmet yenilenebilir enerji danışmanlığından farklı mıdır?",
          answer: "Evet. Bu hizmet HES veya GES santrali sahibi değil, yüksek elektrik faturasıyla karşılaşan sanayi tesislerine yöneliktir. Amaç mevcut tüketimi optimize etmek ve enerji maliyetini düşürmektir."
        }
      ]
    },
    {
      slug: "reaktif-guc-denetimi",
      title: "Reaktif Güç Denetimi",
      eyebrow: "Ceza eliminasyonu ve kompanzasyon incelemesi",
      description: "TEİAŞ reaktif güç cezası ödeyen sanayi tesisleri ve yenilenebilir enerji santralleri için reaktif güç denetimi — kök neden tespiti, kompanzasyon boyutlandırma ve geri ödeme hesabı.",
      keywords: ["reaktif güç denetimi", "reaktif güç cezası türkiye", "reaktif enerji ceza analizi", "güç faktörü düzeltme türkiye", "TEİAŞ reaktif ceza"],
      outcomes: ["Reaktif ceza kök nedeni tespit edildi", "Kompanzasyon sistemi doğru boyutlandırıldı", "Geri ödeme süresi hesaplandı", "Ceza eliminasyon yol haritası teslim edildi"],
      scope: ["Güç faktörü ve reaktif güç ölçüm incelemesi", "TEİAŞ fatura ve ceza hesap analizi", "Kompanzasyon panosu kapasite ve kontrol değerlendirmesi", "Harmonik ortam gözlemi", "Güncelleme spesifikasyonu ve geri ödeme analizi"],
      faqs: sharedFaq.tr
    },
    {
      slug: "bagimsiz-muhendis",
      title: "Bağımsız Mühendis",
      eyebrow: "Kredi ve yatırımcı teknik denetimi",
      description: "Yenilenebilir enerji proje finansmanı için bağımsız mühendis hizmetleri — kredi kuruluşlarına, tahvil mütevellilerine ve yatırımcılara ön yapımdan performans testine ve tamamlanmaya kadar tarafsız teknik denetim.",
      keywords: ["bağımsız mühendis yenilenebilir enerji türkiye", "bağımsız mühendis GES proje finansmanı", "IE atama HES türkiye", "bağımsız mühendis raporu proje finansmanı"],
      outcomes: ["Kredi kuruluşları için tarafsız teknik görüş", "Çekiş koşulları doğrulandı", "Tamamlama sertifikası düzenlendi", "Bankable bağımsız mühendis raporu teslim edildi"],
      scope: ["Ön yapım fizibilite ve EPC sözleşme incelemesi", "İnşaat sürecinde aylık saha ziyareti raporları", "FAT ve SAT tanıklığı", "Devreye alma hazırlık değerlendirmesi", "Performans testi tanıklığı ve sertifikasyonu", "Tamamlama sertifikası düzenlenmesi"],
      faqs: sharedFaq.tr
    },
    {
      slug: "finans-kurulusu-muhendisi",
      title: "Finans Kuruluşu Mühendisi",
      eyebrow: "Proje finansmanı için banka taraflı teknik denetim",
      description: "Yenilenebilir enerji projelerini finanse eden Türk ve uluslararası bankalar için finans kuruluşu mühendisliği hizmetleri — teknik durum tespiti, inşaat izleme, çekiş doğrulama ve tamamlama sertifikasyonu.",
      keywords: ["finans kuruluşu mühendisi GES türkiye", "banka teknik danışmanı proje finansmanı", "lenders engineer HES türkiye"],
      outcomes: ["Banka taraflı teknik görüş teslim edildi", "Çekiş koşulları bağımsız olarak doğrulandı", "İnşaat ilerlemesi ve kalitesi onaylandı", "Son çekiş için tamamlama sertifikası düzenlendi"],
      scope: ["Finansal kapanış öncesi teknik durum tespiti", "EPC sözleşmesi teknik yeterlilik incelemesi", "Enerji verimi ve şebeke bağlantısı değerlendirmesi", "Aylık inşaat izleme raporları", "Çekiş koşulu doğrulama", "Tamamlama ve performans testi sertifikasyonu"],
      faqs: sharedFaq.tr
    },
    {
      slug: "banka-teknik-danismani",
      title: "Banka Teknik Danışmanı",
      eyebrow: "Finansal kapanış öncesi teknik görüş",
      description: "Yenilenebilir enerji projesinin fizibilitesi, EPC sözleşmesi yeterliliği, verim varsayımları ve şebeke bağlantısı planı hakkında finansal kapanış öncesi bağımsız teknik görüş isteyen kredi kuruluşları ve kredi komiteleri için banka teknik danışmanlığı.",
      keywords: ["banka teknik danışmanı yenilenebilir enerji", "BTA GES proje türkiye", "banka teknik danışmanlık raporu", "finansal kapanış öncesi teknik inceleme"],
      outcomes: ["Kredi komitesi için bağımsız teknik görüş", "EPC sözleşmesi teknik boşlukları tespit edildi", "Verim ve şebeke bağlantısı varsayımları sorgulandı", "BTA raporu kredi sözleşmesine uygun yapılandırıldı"],
      scope: ["Teknik fizibilite incelemesi", "EPC sözleşme kapsamı ve risk dağılımı analizi", "Enerji verimi değerlendirmesi incelemesi", "Şebeke bağlantı planı ve izin yeterliliği", "Çevresel ve izinleme durumu", "Kredi komitesi için teknik risk özeti"],
      faqs: sharedFaq.tr
    },
    {
      slug: "portfoy-teknik-incelemesi",
      title: "Portföy Teknik İncelemesi",
      eyebrow: "Çok varlıklı teknik risk değerlendirmesi",
      description: "Birden fazla yenilenebilir enerji varlığına sahip altyapı yatırımcıları ve özel sermaye fonları için portföy teknik incelemesi — portföy genelinde konsolide risk değerlendirmesi, performans karşılaştırması ve öncelik eylem matrisi.",
      keywords: ["yenilenebilir enerji portföy teknik incelemesi", "GES portföy due diligence türkiye", "çok varlıklı teknik değerlendirme"],
      outcomes: ["Portföy düzeyinde risk agregasyonu tamamlandı", "Varlıklar karşılıklı kıyaslandı", "Portföy genelinde sistemik riskler tespit edildi", "Öncelik eylem matrisi teslim edildi"],
      scope: ["Bireysel varlık teknik durum incelemesi", "Portföy düzeyinde risk agregasyonu ve korelasyon analizi", "Varlıklar arası performans karşılaştırması", "Sistematik O&M, EPC ve şebeke uyum sorunlarının tespiti", "Portföy teknik gösterge paneli ve öncelik eylem matrisi"],
      faqs: sharedFaq.tr
    },
    {
      slug: "bilirkisi",
      title: "Bilirkişi Hizmetleri",
      eyebrow: "Hukuki süreçler için teknik görüş",
      description: "Yenilenebilir enerji uyuşmazlıklarında mahkeme ve tahkim süreçleri için bilirkişi hizmetleri — performans açığı, gecikme nedenselliği, EPC şartname uyumu ve devreye alma kusurları hakkında bağımsız yazılı teknik görüş.",
      keywords: ["bilirkişi yenilenebilir enerji türkiye", "bilirkişi enerji santrali uyuşmazlığı", "teknik uzman ICC tahkimi türkiye"],
      outcomes: ["Bağımsız teknik görüş hazırlandı", "Mahkeme veya tahkime uygun uzman raporu", "Hukuk müşavirlerine teknik gerçekler açıkça sunuldu", "Çapraz sorgulamaya dayanıklı görüş"],
      scope: ["Teknik doküman ve kanıt incelemesi", "Bağımsız mühendislik görüşü hazırlanması", "Performans açığı analizi", "Gecikme nedenselliği teknik değerlendirmesi", "EPC şartname uyum incelemesi", "Hukuki süreçler için uzman raporu taslağı ve revizyonu"],
      faqs: sharedFaq.tr
    },
    {
      slug: "teknik-tahkim-destegi",
      title: "Teknik Tahkim Desteği",
      eyebrow: "Uyuşmazlık çözümü için mühendislik kanıtı",
      description: "Yenilenebilir enerji EPC uyuşmazlıkları için teknik tahkim desteği — teknik dokümanların incelenmesi, bağımsız mühendislik görüşlerinin hazırlanması ve hukuk müşavirlerine teknik argüman ve kanıt stratejisinde yardım.",
      keywords: ["teknik tahkim yenilenebilir enerji türkiye", "mühendislik uyuşmazlık desteği GES", "EPC tahkimi teknik uzman"],
      outcomes: ["Bağımsız teknik pozisyon oluşturuldu", "Teknik belgeler güçlü ve zayıf yönleriyle incelendi", "Hukuk müşavirleri mühendislik gerçekleriyle desteklendi", "Tahkim sürecine hazır uzman görüşü hazırlandı"],
      scope: ["Teknik doküman ve kanıt incelemesi", "Bağımsız mühendislik pozisyonu hazırlanması", "Performans açığı ve gecikme nedenselliği analizi", "Şartname uyumu ve kusur değerlendirmesi", "Hukuk müşaviri brifing ve teknik strateji desteği", "Gerektiğinde bilirkişi raporu hazırlanması"],
      faqs: sharedFaq.tr
    },
    {
      slug: "fabrika-kabul-testi",
      title: "Fabrika Kabul Testi (FAT) Tanıklığı",
      eyebrow: "Sevk öncesi ekipman doğrulama",
      description: "Yenilenebilir enerji ekipmanları için FAT tanıklık hizmetleri — invertörler, transformatörler, koruma röleleri ve SCADA donanımının saha sevkinden önce üretici tesisinde teknik şartnameye uygunluğunun doğrulanması.",
      keywords: ["FAT tanıklığı GES invertör türkiye", "fabrika kabul testi yenilenebilir enerji", "FAT transformatör tanıklığı", "FAT devreye alma"],
      outcomes: ["Sevk öncesi ekipman kusurları tespit edildi", "Teknik kanıtlarla FAT raporu teslim edildi", "Teknik şartname uyumu doğrulandı", "Erken kusur tespiti ile devreye alma riski azaltıldı"],
      scope: ["İnvertör FAT tanıklığı ve raporu", "Güç transformatörü FAT (IEC 60076 rutin testleri)", "Koruma rölesi FAT ve ayar doğrulaması", "SCADA ve kontrol sistemi fabrika testleri", "FAT eksik iş yönetimi ve kapanış doğrulaması"],
      faqs: sharedFaq.tr
    },
    {
      slug: "saha-kabul-testi",
      title: "Saha Kabul Testi (SAT) Denetimi",
      eyebrow: "Teslim öncesi kurulum doğrulama",
      description: "GES ve HES'ler için SAT denetim hizmetleri — teslimden önce kurulu ekipmanın kurulu ortamda doğru çalıştığının doğrulanması; string testleri, invertör devreye alma, koruma doğrulaması ve SCADA kontrolü.",
      keywords: ["SAT saha kabul testi GES türkiye", "saha kabul testi devreye alma türkiye", "SAT denetimi yenilenebilir enerji", "IEC 62446 GES SAT"],
      outcomes: ["Kurulu ekipman işlevi doğrulandı", "Kanıtlarla SAT sertifikası düzenlendi", "Devreye alma eksik iş yönetildi", "IEC 62446 dokümantasyon gereksinimleri karşılandı"],
      scope: ["GES string testi ve IV eğrisi izleme", "İnvertör fonksiyonel test doğrulaması", "Koruma rölesi saha testleri", "SCADA devreye alma kontrolü ve G/Ç doğrulaması", "SAT sertifikası ve eksik iş yönetimi", "IEC 62446 dokümantasyon uyum incelemesi"],
      faqs: sharedFaq.tr
    },
    {
      slug: "performans-garantisi-dogrulama",
      title: "Performans Garantisi Doğrulama",
      eyebrow: "EPC sözleşme garantisine karşı bağımsız ölçüm",
      description: "GES ve yenilenebilir enerji santralleri için performans garantisi doğrulama — uyuşmazlıkları çözmek veya uyumu teyit etmek amacıyla IEC 61724 metodolojisi kullanılarak gerçek santral performansının EPC sözleşme garantisine karşı bağımsız ölçümü.",
      keywords: ["performans garantisi doğrulama GES türkiye", "EPC performans testi tanıklığı", "GES performans oranı testi", "IEC 61724 performans testi"],
      outcomes: ["Gerçek performans bağımsız olarak ölçüldü", "IEC 61724 uyarınca Performans Oranı hesaplandı", "Sözleşme garantisi uyumu belirlendi", "Bankable performans testi raporu teslim edildi"],
      scope: ["Performans ölçüm kurulumu ve kalibrasyonu", "IEC 61724 metodolojisi uygulaması", "Işınım, sıcaklık ve üretim verisi toplanması", "Düzeltme faktörleriyle Performans Oranı hesabı", "EPC garantili değerlerle karşılaştırma", "Hukuki ve ticari kullanıma uygun Performans Testi Raporu"],
      faqs: sharedFaq.tr
    },
    {
      slug: "insaat-izleme",
      title: "İnşaat İzleme",
      eyebrow: "İnşaat sürecinde işveren taraflı kalite",
      description: "Yenilenebilir enerji projeleri için inşaat izleme — kritik kurulum kilometre taşlarında saha incelemesi, onaylı çizimlere karşı işçilik doğrulaması, NCR belgelemesi ve işveren veya kredi kuruluşu adına ITP durdurma noktası tanıklığı.",
      keywords: ["inşaat izleme GES türkiye", "EPC inşaat denetimi", "yenilenebilir enerji inşaat kalitesi", "inşaat izleme işveren kredi kuruluşu"],
      outcomes: ["Kurulum kalitesi teknik şartnameye göre doğrulandı", "NCR'lar belgelendi ve kapanışa kadar takip edildi", "ITP durdurma noktaları kanıtlarla tanıklandı", "İnşaat kusurları devreye almadan önce tespit edildi"],
      scope: ["DC ve AC elektrik kurulum incelemesi", "İnşaat ve montaj yapısı kalite doğrulaması", "Şebeke bağlantısı ve transformatör kurulum incelemesi", "ITP durdurma noktası ve tanıklık noktası katılımı", "NCR belgeleme ve kapanış takibi", "EPC kalite planıyla arayüz"],
      faqs: sharedFaq.tr
    },
    {
      slug: "proje-izleme",
      title: "Proje İzleme",
      eyebrow: "Kredi kuruluşları ve yatırımcılar için düzenli ilerleme raporlaması",
      description: "Yenilenebilir enerji inşaatı için proje izleme — kredi kuruluşları ve yatırımcılar adına düzenli saha ziyaretleri, yazılı ilerleme raporları, takvim uyum değerlendirmesi ve erken uyarı teknik sorun tespiti.",
      keywords: ["proje izleme yenilenebilir enerji inşaatı türkiye", "teknik izleme GES inşaatı", "inşaat ilerleme raporlaması kredi kuruluşu"],
      outcomes: ["Düzenli ilerleme raporları teslim edildi", "Takvim uyumu değerlendirildi", "Erken teknik sorunlar işaret edildi", "Kredi kuruluşuna uygun izleme raporları üretildi"],
      scope: ["Aylık veya kilometre taşı bazlı saha ziyaretleri", "Fiziksel ilerleme ve kalite değerlendirmesi", "Takvim uyum incelemesi", "Yüklenici doküman durum incelemesi", "Erken uyarı teknik sorun tespiti", "Kredi kuruluşları ve yatırımcılar için yazılı ilerleme raporları"],
      faqs: sharedFaq.tr
    },
    {
      slug: "sebeke-uyum-denetimi",
      title: "Şebeke Uyum Denetimi",
      eyebrow: "TEİAŞ gereksinimleri doğrulama",
      description: "GES ve HES'ler için şebeke uyum denetimi — koruma rölesi ayarları, reaktif güç kompanzasyonu, hata ridelthrough uyumu ve teknik dokümantasyon dahil TEİAŞ şebeke bağlantısı gereksinimlerinin sistematik incelemesi.",
      keywords: ["şebeke uyum denetimi GES türkiye", "TEİAŞ uyum incelemesi", "şebeke uyumu yenilenebilir enerji türkiye", "FRT uyum denetimi"],
      outcomes: ["Uyum boşlukları kanıtlarla tespit edildi", "TEİAŞ gereksinim uyumu doğrulandı veya sorgulandı", "Düzeltme takvimi üretildi", "Düzenleyici incelemeye uygun şebeke uyum raporu"],
      scope: ["Koruma rölesi ayarlarının TEİAŞ gereksinimlerine göre incelenmesi", "Reaktif güç ve güç faktörü uyum kontrolü", "Hata geçiş (FRT) kanıt incelemesi", "Şebeke bağlantısı dokümantasyon denetimi", "Ada önleme ve SCADA telemetri uyumu", "Düzeltme önerileri ve takvimi"],
      faqs: sharedFaq.tr
    },
    {
      slug: "guc-kalitesi-denetimi",
      title: "Güç Kalitesi Denetimi",
      eyebrow: "Harmonik ve gerilim uyum ölçümü",
      description: "Yenilenebilir enerji santralleri ve sanayi tesisleri için güç kalitesi denetimi — IEEE 519 ve TEİAŞ gereksinimlerine karşı şebeke bağlantı noktasında harmonik bozunum, gerilim dengesizliği, flicker ve frekans sapması ölçümü.",
      keywords: ["güç kalitesi denetimi türkiye", "harmonik gerilim flicker yenilenebilir enerji", "IEEE 519 uyum türkiye", "güç kalitesi ölçümü GES"],
      outcomes: ["Güç kalitesi ölçümleri tamamlandı", "IEEE 519 ve TEİAŞ uyum durumu doğrulandı", "Uyumsuzluk kök nedeni tespit edildi", "Düzeltme önerileri sunuldu"],
      scope: ["Harmonik bozunum ölçümü (gerilim ve akım)", "Gerilim dengesizliği ve flicker değerlendirmesi", "Frekans sapması incelemesi", "IEEE 519 ve IEC 61000-3-x uyum kontrolü", "TEİAŞ güç kalitesi limiti doğrulama", "Kök neden analizi ve düzeltme önerileri"],
      faqs: sharedFaq.tr
    },
    {
      slug: "teknik-varlik-yonetimi",
      title: "Teknik Varlık Yönetimi",
      eyebrow: "İşverenler için süregelen performans denetimi",
      description: "Yenilenebilir enerji portföyleri için teknik varlık yönetimi — tutarlı varlık performansı isteyen işverenler için süregelen verim izleme, O&M yüklenici denetimi, performans karşılaştırması, uyum takibi ve yıllık teknik inceleme.",
      keywords: ["yenilenebilir enerji varlık yönetimi türkiye", "GES teknik varlık yönetimi", "teknik varlık yönetimi HES", "O&M denetimi yenilenebilir enerji"],
      outcomes: ["Tutarlı performans izleme sistemde", "O&M yüklenici performansı KPI'lara göre takip edildi", "Yıllık teknik inceleme teslim edildi", "Uyum ve düzenleyici sorunlar erken tespit edildi"],
      scope: ["Aylık verim ve emre amadelik izleme", "Bütçe ve emsallere karşı performans karşılaştırması", "O&M yüklenici KPI takibi ve denetimi", "Şebeke uyumu ve düzenleyici durum izleme", "Öncelikli aksiyon planıyla yıllık teknik inceleme", "Olay ve kusur yükseltme yönetimi"],
      faqs: sharedFaq.tr
    }
  ]
};

export function getServices(locale: Locale) {
  return services[locale];
}

export function getService(locale: Locale, slug: string) {
  return services[locale].find((service) => service.slug === slug);
}
