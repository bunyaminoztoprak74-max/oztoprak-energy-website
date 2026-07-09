import type { Locale } from "@/lib/i18n";
import type { BlogPost } from "@/content/types";

export const blogPosts: Record<Locale, BlogPost[]> = {
  en: [
    {
      slug: "common-problems-during-hydropower-plant-commissioning",
      title: "Common Problems During Hydropower Plant Commissioning",
      description: "Commissioning risks that commonly affect HPP startup, grid synchronization, protection readiness and operational handover.",
      category: "Commissioning",
      categorySlug: "commissioning",
      date: "2026-05-01",
      readingTime: "8 min",
      toc: ["Commissioning readiness gaps", "Protection and grid interface issues", "Handover evidence for operations"],
      related: ["power-plant-operational-readiness-checklist", "hydropower-efficiency-optimization-methods"],
      serviceLinks: ["power-plant-commissioning", "hydropower-consulting", "owners-engineering"],
      body: [
        { heading: "Commissioning readiness gaps", content: "Hydropower commissioning often becomes difficult when mechanical completion, pre-commissioning and functional testing are treated as one combined activity. A controlled HPP startup requires clear system boundaries, signed test procedures, verified instrumentation, trained operators and punch-list items ranked by startup risk." },
        { heading: "Protection and grid interface issues", content: "Grid synchronization depends on correct protection settings, breaker logic, AVR behavior, governor response, communication protocols and utility acceptance. When these items are reviewed late, commissioning teams face avoidable delays and unclear responsibility between EPC, owner and grid stakeholders." },
        { heading: "Handover evidence for operations", content: "The most valuable commissioning output is not only a successful first synchronization. It is a complete evidence package that operations can use later: test records, as-built drawings, protection files, alarm lists, operator procedures and unresolved risk notes." }
      ],
      faqs: [
        { question: "When should hydropower commissioning planning begin?", answer: "Commissioning planning should begin before construction completion pressure rises, ideally while design interfaces, protection settings and operating procedures can still be challenged without delaying energization." },
        { question: "What is the biggest commissioning risk for HPP projects?", answer: "The biggest risk is incomplete readiness evidence. Without verified procedures, settings, punch-list priorities and operations handover records, startup risk transfers into commercial operation." }
      ]
    },
    {
      slug: "hydropower-efficiency-optimization-methods",
      title: "Hydropower Efficiency Optimization Methods",
      description: "Practical methods for improving hydropower output, water-to-wire efficiency, availability and O&M performance.",
      category: "Hydropower",
      categorySlug: "hydropower",
      date: "2026-05-02",
      readingTime: "8 min",
      toc: ["Separate hydrology from technical loss", "Review water-to-wire performance", "Prioritize O&M actions"],
      related: ["common-problems-during-hydropower-plant-commissioning", "power-plant-operational-readiness-checklist"],
      serviceLinks: ["hydropower-consulting", "energy-audit", "om-performance-improvement"],
      body: [
        { heading: "Separate hydrology from technical loss", content: "Hydropower optimization starts by separating unavoidable water conditions from avoidable technical loss. Production records, reservoir or river flow, unit dispatch, outage history and operating restrictions must be reviewed together before assigning a loss cause." },
        { heading: "Review water-to-wire performance", content: "Efficiency is affected by intake conditions, hydraulic losses, turbine condition, generator behavior, cooling systems, control tuning, auxiliary loads and operator routines. A useful review connects these elements instead of treating each equipment package separately." },
        { heading: "Prioritize O&M actions", content: "Optimization should end with a ranked action plan. The strongest recommendations show expected energy impact, reliability impact, outage requirement, implementation difficulty and whether the work is OPEX, minor corrective maintenance or CAPEX." }
      ],
      faqs: [
        { question: "Can an operating HPP be optimized without major CAPEX?", answer: "Yes. Many gains come from operating discipline, maintenance planning, alarm response, control tuning review and better loss visibility before larger investments are required." },
        { question: "What data is needed for hydropower optimization?", answer: "Useful data includes generation, flow, outages, alarms, maintenance records, unit dispatch, test records and historical commissioning baselines." }
      ]
    },
    {
      slug: "solar-plant-performance-ratio-analysis",
      title: "Solar Plant Performance Ratio Analysis",
      description: "How solar PR analysis should be interpreted with EPC evidence, O&M routines, inverter behavior and real field conditions.",
      category: "Solar",
      categorySlug: "solar",
      date: "2026-05-03",
      readingTime: "7 min",
      toc: ["What PR can and cannot explain", "EPC evidence and inverter behavior", "Turning PR findings into action"],
      related: ["how-epc-delays-affect-power-plant-revenue", "power-plant-operational-readiness-checklist"],
      serviceLinks: ["solar-energy-consulting", "energy-audit", "epc-technical-advisory"],
      body: [
        { heading: "What PR can and cannot explain", content: "Performance ratio is a useful solar KPI, but it cannot explain asset performance alone. Irradiance quality, curtailment, temperature, soiling, inverter availability, string-level faults and metering accuracy must be reviewed before conclusions are drawn." },
        { heading: "EPC evidence and inverter behavior", content: "Solar underperformance often begins with a handover evidence gap. As-built records, commissioning tests, punch-list closure, inverter event logs and warranty boundaries should be reviewed together to separate delivery issues from operational degradation." },
        { heading: "Turning PR findings into action", content: "A good PR analysis creates a prioritized recovery plan. Actions may include monitoring corrections, cleaning logic, inverter troubleshooting, string inspections, O&M response improvements and EPC warranty follow-up." }
      ],
      faqs: [
        { question: "Is low PR always an EPC problem?", answer: "No. Low PR can result from resource variation, curtailment, soiling, equipment faults, poor O&M response or EPC quality issues. Evidence is needed before assigning responsibility." },
        { question: "How often should PR be reviewed?", answer: "PR should be monitored continuously and formally reviewed when losses persist, after major faults, before acquisition, or when O&M performance is questioned." }
      ]
    },
    {
      slug: "how-epc-delays-affect-power-plant-revenue",
      title: "How EPC Delays Affect Power Plant Revenue",
      description: "Why EPC delays create revenue exposure through late energization, incomplete commissioning and unresolved technical interfaces.",
      category: "EPC",
      categorySlug: "epc",
      date: "2026-05-04",
      readingTime: "7 min",
      toc: ["Delay is not only a schedule issue", "Commissioning delay drivers", "Owner-side controls that reduce exposure"],
      related: ["common-problems-during-hydropower-plant-commissioning", "power-plant-operational-readiness-checklist"],
      serviceLinks: ["epc-technical-advisory", "owners-engineering", "power-plant-commissioning"],
      body: [
        { heading: "Delay is not only a schedule issue", content: "EPC delay affects revenue because every unresolved interface can postpone energization, performance testing, grid acceptance and commercial operation. Technical delay also creates legal and commercial ambiguity when evidence is weak." },
        { heading: "Commissioning delay drivers", content: "Common drivers include late test procedures, unclear protection settings, missing grid documents, incomplete SCADA readiness, open punch-list items and O&M teams that are not ready to receive the asset." },
        { heading: "Owner-side controls that reduce exposure", content: "Owners can reduce delay exposure through independent deliverable review, interface risk registers, commissioning readiness gates, decision memos and evidence-based acceptance criteria." }
      ],
      faqs: [
        { question: "How can owners reduce EPC delay risk?", answer: "Owners should review design interfaces, contractor deliverables, commissioning readiness and handover evidence before schedule pressure forces rushed acceptance." },
        { question: "Do EPC delays affect long-term operations?", answer: "Yes. Delayed or rushed commissioning can transfer unresolved technical issues into O&M, increasing trips, documentation gaps and reliability risk." }
      ]
    },
    {
      slug: "power-plant-operational-readiness-checklist",
      title: "Power Plant Operational Readiness Checklist",
      description: "A practical checklist for confirming whether a renewable power plant is ready for reliable operation after EPC delivery.",
      category: "Operations",
      categorySlug: "operations",
      date: "2026-05-05",
      readingTime: "8 min",
      toc: ["Technical documentation", "People and procedures", "Performance and reliability evidence"],
      related: ["common-problems-during-hydropower-plant-commissioning", "hydropower-efficiency-optimization-methods"],
      serviceLinks: ["owners-engineering", "power-plant-commissioning", "energy-audit"],
      body: [
        { heading: "Technical documentation", content: "Operational readiness requires accurate as-built drawings, protection settings, O&M manuals, commissioning test records, punch-list status, warranty boundaries and spare parts information. Missing documents become operational risk." },
        { heading: "People and procedures", content: "Operators need training, alarm response routines, permit procedures, maintenance planning, reporting lines and escalation rules. A technically complete plant can still underperform if the operating organization is not ready." },
        { heading: "Performance and reliability evidence", content: "Readiness should be proven through functional tests, performance tests, reliability observations and evidence that recurring alarms or trips have been understood before takeover." }
      ],
      faqs: [
        { question: "Who should own operational readiness?", answer: "Operational readiness should be jointly controlled by the owner, EPC contractor and O&M team, with clear responsibility for evidence, acceptance and unresolved risks." },
        { question: "What is the best output of a readiness review?", answer: "The best output is a prioritized list of actions that must be closed before operation, plus risk notes for items that can be managed after takeover." }
      ]
    },
    {
      slug: "hydropower-plant-efficiency-optimization-guide",
      title: "Hydropower Plant Efficiency Optimization Guide",
      description: "A practical guide to improving hydropower output, availability and maintenance discipline.",
      category: "Hydropower",
      categorySlug: "hydropower",
      date: "2026-01-10",
      readingTime: "6 min",
      toc: ["Start with measured losses", "Review water-to-wire performance", "Turn findings into O&M actions"],
      related: ["why-existing-hydropower-plants-need-technical-audits", "power-plant-commissioning-checklist"],
      serviceLinks: ["hydropower-plant-optimization", "om-performance-improvement"],
      body: [
        { heading: "Start with measured losses", content: "Hydropower optimization should begin with production data, outage history, water availability and unit-level operating patterns. This separates unavoidable hydrology from avoidable technical loss." },
        { heading: "Review water-to-wire performance", content: "Turbine, generator, hydraulic structures, controls and auxiliary systems must be reviewed together. A narrow equipment-only review can miss the interface issues that reduce real plant output." },
        { heading: "Turn findings into O&M actions", content: "The strongest optimization plans rank actions by energy impact, reliability impact, cost and outage requirement so owners can execute improvements without disrupting production unnecessarily." }
      ]
    },
    {
      slug: "common-epc-mistakes-renewable-energy-projects",
      title: "Common EPC Mistakes in Renewable Energy Projects",
      description: "Frequent EPC delivery mistakes that increase technical risk in renewable energy projects.",
      category: "EPC",
      categorySlug: "epc",
      date: "2026-01-18",
      readingTime: "5 min",
      toc: ["Weak interface ownership", "Late commissioning planning", "Incomplete handover evidence"],
      related: ["power-plant-commissioning-checklist", "grid-and-protection-system-analysis-for-power-plants"],
      serviceLinks: ["epc-technical-consultancy", "owners-engineering"],
      body: [
        { heading: "Weak interface ownership", content: "Many EPC issues arise between civil, electrical, mechanical, grid and control scopes. Interface matrices and decision ownership should be active documents, not tender-stage formalities." },
        { heading: "Late commissioning planning", content: "Commissioning risk grows when test procedures, energization sequences and acceptance criteria are created too late. Early readiness reviews protect schedule and asset quality." },
        { heading: "Incomplete handover evidence", content: "Owners need test results, as-built records, protection settings, O&M manuals and punch-list closure evidence that can support reliable operation years after takeover." }
      ]
    },
    {
      slug: "power-plant-commissioning-checklist",
      title: "Power Plant Commissioning Checklist",
      description: "A commissioning checklist structure for safer startup, testing and handover.",
      category: "Commissioning",
      categorySlug: "commissioning",
      date: "2026-02-02",
      readingTime: "7 min",
      toc: ["Mechanical completion", "Electrical energization", "Functional and performance testing"],
      related: ["common-epc-mistakes-renewable-energy-projects", "grid-and-protection-system-analysis-for-power-plants"],
      serviceLinks: ["power-plant-commissioning", "epc-technical-consultancy"],
      body: [
        { heading: "Mechanical completion", content: "Completion status should be verified system by system, with clear punch-list ownership and boundaries between construction, pre-commissioning and commissioning." },
        { heading: "Electrical energization", content: "Energization requires verified protection settings, inspections, permits, communication protocols and a controlled sequence accepted by responsible parties." },
        { heading: "Functional and performance testing", content: "Functional tests prove systems operate correctly; performance tests show the plant can meet contractual and operational expectations under defined conditions." }
      ]
    },
    {
      slug: "grid-and-protection-system-analysis-for-power-plants",
      title: "Grid and Protection System Analysis for Power Plants",
      description: "Why protection coordination and grid interface review are critical for renewable power plant reliability.",
      category: "Grid",
      categorySlug: "grid",
      date: "2026-02-14",
      readingTime: "6 min",
      toc: ["Protection settings are asset value decisions", "Trip history reveals coordination issues", "Grid compliance needs evidence"],
      related: ["power-plant-commissioning-checklist", "common-epc-mistakes-renewable-energy-projects"],
      serviceLinks: ["grid-protection-system-analysis", "technical-audits-existing-power-plants"],
      body: [
        { heading: "Protection settings are asset value decisions", content: "Incorrect protection assumptions can create unnecessary trips, equipment stress or utility compliance issues. Settings must match the actual grid interface and plant configuration." },
        { heading: "Trip history reveals coordination issues", content: "Reviewing event records and operating logs helps identify whether trips are caused by equipment faults, grid disturbances or protection miscoordination." },
        { heading: "Grid compliance needs evidence", content: "Owners should keep a defensible record of settings, tests, studies and utility correspondence to support reliable operation and audits." }
      ]
    },
    {
      slug: "solar-plant-performance-improvement-guide",
      title: "Solar Plant Performance Improvement Guide",
      description: "How owners can diagnose solar PV underperformance and prioritize recovery actions.",
      category: "Solar",
      categorySlug: "solar",
      date: "2026-03-01",
      readingTime: "5 min",
      toc: ["Separate resource from technical loss", "Review EPC quality evidence", "Improve O&M response loops"],
      related: ["common-epc-mistakes-renewable-energy-projects", "power-plant-commissioning-checklist"],
      serviceLinks: ["solar-power-plant-consultancy", "om-performance-improvement"],
      body: [
        { heading: "Separate resource from technical loss", content: "Irradiance, temperature, curtailment, inverter availability, soiling and string-level issues must be separated before assigning performance responsibility." },
        { heading: "Review EPC quality evidence", content: "As-built records, test results and punch-list closure can reveal whether underperformance began at delivery or developed during operation." },
        { heading: "Improve O&M response loops", content: "Fast fault response, cleaning discipline, inspection routines and performance analytics are often the fastest path to better energy yield." }
      ]
    },
    {
      slug: "why-existing-hydropower-plants-need-technical-audits",
      title: "Why Existing Hydropower Plants Need Technical Audits",
      description: "How technical audits help owners understand risk, reliability and investment priorities in operating hydropower assets.",
      category: "Technical Audits",
      categorySlug: "technical-audits",
      date: "2026-03-15",
      readingTime: "6 min",
      toc: ["Aging assets hide technical debt", "Operations data needs engineering context", "Audit outputs should support decisions"],
      related: ["hydropower-plant-efficiency-optimization-guide", "grid-and-protection-system-analysis-for-power-plants"],
      serviceLinks: ["technical-audits-existing-power-plants", "hydropower-plant-optimization"],
      body: [
        { heading: "Aging assets hide technical debt", content: "Hydropower plants can operate for decades while accumulating documentation gaps, unresolved defects and maintenance shortcuts that gradually reduce reliability." },
        { heading: "Operations data needs engineering context", content: "Availability, outages and production trends become more useful when interpreted together with site observations, equipment condition and historical project records." },
        { heading: "Audit outputs should support decisions", content: "A good audit produces a prioritized technical risk register, corrective action roadmap and investment logic that owners can use immediately." }
      ]
    },
    {
      slug: "industrial-electricity-bill-analysis-guide",
      title: "Industrial Electricity Bill Analysis: Understanding Where Your Cost Comes From",
      description: "A practical guide to analyzing industrial electricity bills, identifying reactive penalties, demand charge exposure, tariff misalignment and contract power mismatches.",
      category: "Energy Cost",
      categorySlug: "energy-cost",
      date: "2026-06-10",
      readingTime: "9 min",
      toc: ["Why industrial electricity bills are hard to read", "Reactive power penalties explained", "Demand charges and contract power", "Tariff structure and open market eligibility", "First steps to reducing your bill"],
      related: ["reactive-penalty-compensation-system-audit", "contract-power-demand-charge-optimization"],
      serviceLinks: ["industrial-energy-cost-optimization", "energy-audit"],
      body: [
        { heading: "Why industrial electricity bills are hard to read", content: "Industrial electricity bills combine multiple cost components that behave differently: active energy consumption, reactive power penalties, contract demand charges, excess demand penalties, distribution charges, taxes and time-of-use adjustments. A facility manager looking at a high monthly total cannot identify the correctable portion without separating each component. The first step in any electricity cost review is building a 12-month cost breakdown that separates controllable costs from unavoidable ones and shows which component is driving the bill." },
        { heading: "Reactive power penalties explained", content: "Reactive power penalties appear when a facility's power factor falls below the network operator's required threshold — typically 0.90 or 0.95 in Turkey. Industrial loads including motors, compressors, welding machines, induction furnaces and fluorescent lighting consume reactive power. Without adequate compensation, the utility measures this reactive demand and charges a penalty per kVArh or as a multiplier on the active energy tariff. The penalty can represent 5-15% of a facility's monthly electricity cost and is almost entirely recoverable through proper compensation design." },
        { heading: "Demand charges and contract power", content: "Contract power is the maximum demand level a facility has agreed to draw from the grid. If the facility regularly draws less than its contracted level, it pays a capacity charge for unused headroom. If it regularly exceeds the contracted level, it pays excess demand penalties. Many industrial facilities operate with contract power levels set during their initial connection that no longer match their actual load pattern — either because processes changed, equipment was replaced, or the original contract was set conservatively. A demand charge analysis reviews actual 15-minute peak demand profiles against the contracted level to identify whether re-contracting would reduce cost." },
        { heading: "Tariff structure and open market eligibility", content: "Turkey's electricity market allows consumers above certain annual consumption thresholds to purchase electricity on the open market at negotiated rates. Whether open market supply offers a lower blended cost depends on the facility's consumption profile, time-of-use pattern, reactive power position, contracted capacity and the current spot and forward market price structure. Tariff eligibility is not automatic — it requires an assessment of the facility's load profile, consumption stability and risk tolerance before recommending a market transition." },
        { heading: "First steps to reducing your bill", content: "The first step is a 12-month bill review that separates each cost component and identifies the largest controllable items. The second step is a compensation system review if reactive penalties are present. The third step is a demand profile analysis to check contract power alignment. These three steps can typically be completed without a site visit and without any equipment purchase, and they define the savings opportunity before any investment decision is made." }
      ],
      faqs: [
        { question: "Can electricity costs be analyzed without a site visit?", answer: "Yes. A 12-month bill analysis, reactive power data and meter records provide enough information to identify the main cost reduction opportunities before any site work." },
        { question: "How much can reactive penalties be reduced?", answer: "Reactive power penalties can typically be eliminated or reduced to near zero with a properly designed and maintained compensation system. The key is correct sizing for the harmonics environment." },
        { question: "How long does a contract power optimization analysis take?", answer: "The analysis itself takes 1-2 weeks once bill data and demand profiles are available. The benefit is realized immediately after a contract revision with the distribution operator." }
      ]
    },
    {
      slug: "reactive-penalty-compensation-system-audit",
      title: "Reactive Power Penalty Analysis and Compensation System Audit",
      description: "How to identify, quantify and eliminate reactive power penalties in industrial facilities through compensation system review and right-sized corrective action.",
      category: "Energy Cost",
      categorySlug: "energy-cost",
      date: "2026-06-11",
      readingTime: "8 min",
      toc: ["How reactive penalties work", "Why existing compensation fails", "Harmonics and compensation system interaction", "Sizing and specification for correction", "Payback and cost avoidance"],
      related: ["industrial-electricity-bill-analysis-guide", "contract-power-demand-charge-optimization"],
      serviceLinks: ["industrial-energy-cost-optimization", "energy-audit"],
      body: [
        { heading: "How reactive penalties work", content: "Reactive power penalty is charged when a facility draws more inductive reactive power (kVAr) from the grid than the utility allows for a given active energy consumption level. The Turkish distribution tariff structure penalizes facilities whose reactive-to-active ratio (tan δ) exceeds 0.33 at the grid meter. For a facility consuming 500 MWh/month, an uncorrected power factor of 0.80 can generate a reactive penalty of several thousand lira per month that compounds year-over-year." },
        { heading: "Why existing compensation fails", content: "A compensation panel that was correctly sized at installation can become ineffective over time or after load changes. The most common failure modes are: undersized total reactive capacity after process expansion, capacitor banks that have degraded or failed silently, incorrect step switching logic that does not respond to fast load changes, and harmonic resonance that forces the protection relay to disconnect the compensation. Each of these failure modes has a different corrective action, which is why a bill-only analysis is insufficient — the compensation system itself must be inspected." },
        { heading: "Harmonics and compensation system interaction", content: "Variable speed drives, switched-mode power supplies, UPS systems and welding machines generate harmonic currents that can create resonance with fixed capacitor banks. This resonance amplifies the harmonic current, causes capacitor overheating, trips the protection relay and leaves the facility uncompensated — exactly when the penalty is occurring. The solution is not simply larger capacitors. It requires harmonic filtering or detuned reactor protection, properly selected for the harmonic spectrum of the specific facility. A compensation system installed without harmonics awareness in an industrial facility with VFDs will have reliability problems." },
        { heading: "Sizing and specification for correction", content: "Correct compensation system sizing requires the reactive power demand profile (hourly or 15-minute data from the meter), the harmonic voltage and current spectrum, the load switching speed, the ambient temperature and the available switchboard space. Oversizing wastes capital; undersizing leaves penalties in place. Detuned reactors should be selected with tuning frequencies that avoid resonance with the dominant harmonic orders present in the facility. The specification should include the required reactive power range, step size, switching response time, protection settings and harmonic protection order." },
        { heading: "Payback and cost avoidance", content: "A well-sized compensation system for a medium industrial facility typically costs between 50,000 and 250,000 TL installed, depending on capacity and harmonics protection requirements. With reactive penalties of 10,000-50,000 TL/month, payback periods of 6-18 months are common. The payback calculation should use actual measured penalty data, not generic estimates, and should account for the maintenance cost of the compensation system over its 15-20 year expected service life." }
      ],
      faqs: [
        { question: "Is a new compensation panel always needed?", answer: "Not always. Sometimes the existing panel can be repaired or reprogrammed. A technical inspection of the existing system is the starting point before specifying any new equipment." },
        { question: "What is a detuned reactor and when is it needed?", answer: "A detuned reactor is connected in series with a capacitor bank to shift the resonant frequency away from harmonic orders generated by the facility's loads. It is needed whenever VFDs, rectifiers or other harmonic-generating equipment are present." }
      ]
    },
    {
      slug: "contract-power-demand-charge-optimization",
      title: "Contract Power and Demand Charge Optimization for Industrial Facilities",
      description: "How to align contracted power levels with actual demand behavior, eliminate excess demand penalties and reduce capacity charges in industrial electricity contracts.",
      category: "Energy Cost",
      categorySlug: "energy-cost",
      date: "2026-06-12",
      readingTime: "7 min",
      toc: ["What contract power determines", "Overcontracted vs undercontracted", "Demand profile analysis method", "Re-contracting process", "Combined effect on total bill"],
      related: ["industrial-electricity-bill-analysis-guide", "reactive-penalty-compensation-system-audit"],
      serviceLinks: ["industrial-energy-cost-optimization", "energy-audit"],
      body: [
        { heading: "What contract power determines", content: "Contract power (sözleşme gücü) is the maximum active power level a facility is entitled to draw from the distribution network at any 15-minute interval. It determines the capacity component of the facility's tariff: a higher contracted level means a higher monthly capacity charge regardless of whether that capacity is used. It also determines the penalty threshold: exceeding contract power in any 15-minute period triggers an excess demand penalty, typically priced as a multiple of the active energy rate for the excess kW drawn." },
        { heading: "Overcontracted vs undercontracted", content: "An overcontracted facility pays monthly capacity charges for headroom it never uses. A facility that signed a contract at 1,000 kW during initial connection but now operates peak loads of 650 kW is paying for 350 kW of unused capacity every month. An undercontracted facility risks demand penalty events. A facility whose production has grown since the contract was set may regularly draw 1,200 kW on a 1,000 kW contract, triggering a penalty on every peak interval. Both problems are common in facilities where the electricity contract has not been reviewed since initial commissioning." },
        { heading: "Demand profile analysis method", content: "The analysis requires 15-minute active power demand data for a representative 12-month period — available from the meter data management system or from the distribution operator. The analysis identifies the actual peak demand level, the frequency distribution of demand intervals, seasonal patterns, production-related peaks, and the gap between the contracted level and the realistic maximum demand. It then models the financial outcome of different contract power levels to identify the optimal point that minimizes total capacity and penalty cost." },
        { heading: "Re-contracting process", content: "Re-contracting a distribution connection requires a formal application to the distribution operator. The operator reviews the request, inspects the connection if capacity is being reduced, and issues a new connection agreement. The process typically takes 2-6 weeks. For facilities on a high-voltage connection, re-contracting may also affect transformer sizing requirements and protection settings. The timing of a contract revision should account for seasonal demand peaks to avoid signing a lower contract level just before a high-demand production period." },
        { heading: "Combined effect on total bill", content: "For most industrial facilities, reactive penalty and demand charge optimization together can reduce the total monthly electricity bill by 8-20% without any production process change and without significant capital investment. The reactive penalty is recovered through compensation correction. The demand charge is recovered through contract revision. The energy tariff component — the largest single item — can be further addressed through open market supply eligibility review and time-of-use load shifting where process flexibility permits." }
      ],
      faqs: [
        { question: "How quickly does re-contracting take effect?", answer: "The new contract power level typically takes effect in the billing cycle following the distribution operator's formal approval, which usually takes 2-6 weeks after application." },
        { question: "Can contract power be changed more than once?", answer: "Yes, but distribution operators may impose a minimum period between changes. The analysis should identify a level that will remain appropriate for the foreseeable production plan." }
      ]
    },
    {
      slug: "rooftop-solar-feasibility-industrial-facilities",
      title: "Rooftop Solar Feasibility for Industrial Facilities: What the Numbers Really Show",
      description: "How to evaluate rooftop solar feasibility for factories and commercial buildings with realistic self-consumption modeling, payback analysis and grid connection constraints.",
      category: "Solar",
      categorySlug: "solar",
      date: "2026-06-13",
      readingTime: "9 min",
      toc: ["When rooftop solar makes financial sense", "Self-consumption rate is the key variable", "Roof assessment and structural considerations", "Grid connection and export constraints", "Financial model validation"],
      related: ["industrial-electricity-bill-analysis-guide", "reactive-penalty-compensation-system-audit"],
      serviceLinks: ["industrial-energy-cost-optimization", "solar-energy-consulting"],
      body: [
        { heading: "When rooftop solar makes financial sense", content: "Rooftop solar makes the most financial sense for facilities with high daytime electricity consumption, large roof areas with good solar exposure, and high grid electricity prices. The combination of these three factors determines the self-consumption rate — the percentage of generated solar energy that is directly consumed rather than exported. A facility that runs two shifts from 07:00 to 23:00, consumes 500 MWh/month and has 2,000 square meters of south-facing unshaded roof area is a strong candidate. A facility that runs only a night shift, or whose peak consumption is in winter when solar generation is low, will show a much weaker financial case." },
        { heading: "Self-consumption rate is the key variable", content: "Self-consumption is the financial engine of a rooftop solar project. Every kWh self-consumed saves the electricity tariff price. Every kWh exported to the grid earns a significantly lower feed-in tariff or is sold at spot market price — typically 30-50% of the retail tariff. A system sized too large for the facility's daytime consumption will push export levels high and reduce the financial return. The feasibility analysis must model hourly consumption and hourly solar generation together over a full year to determine the self-consumption ratio at the proposed system size." },
        { heading: "Roof assessment and structural considerations", content: "The roof area, structural capacity, orientation, tilt, shading from surrounding buildings or roof equipment, and access for maintenance must all be assessed before system sizing. Flat roofs require mounting structures that add to the installation cost. Roofs with air conditioning units, skylights, ventilation equipment or overhead cranes may have significantly less usable area than the gross roof footprint suggests. Structural loading from the module and racking weight must be confirmed by a structural engineer for older buildings. The roof waterproofing condition must also be assessed, as re-roofing after solar installation is expensive and disruptive." },
        { heading: "Grid connection and export constraints", content: "The distribution operator may impose limits on the export power level that a rooftop system can inject into the grid at the facility's connection point. In areas with high PV penetration, these limits can be set well below the installed system capacity, forcing curtailment during peak generation hours and reducing yield. The feasibility model must reflect actual export limits rather than assuming unlimited grid injection. In some cases, installing a zero-export control system — which throttles the inverter output to avoid any grid export — is the most practical solution, provided the system is sized to match actual daytime consumption." },
        { heading: "Financial model validation", content: "A sound rooftop solar financial model must use actual consumption data, site-specific solar yield from validated meteorological datasets, realistic degradation rates of 0.4-0.6% per year, actual installation cost quotes, maintenance cost allowance, inverter replacement reserve, financing cost if applicable, and conservative self-consumption ratio based on the hourly profile analysis. Generic online solar calculator results that assume 100% self-consumption or use default irradiance values not calibrated to the specific site will overstate the financial return. The payback period estimated from a validated model is typically 4-8 years for well-suited industrial facilities at 2026 electricity prices in Turkey." }
      ],
      faqs: [
        { question: "What size rooftop system is typical for an industrial facility?", answer: "Industrial rooftop systems typically range from 100 kWp to 1,500 kWp depending on available roof area and daytime consumption. The optimal size is determined by the self-consumption analysis, not the maximum installable capacity." },
        { question: "Does rooftop solar affect reactive power penalties?", answer: "Yes, indirectly. Solar generation reduces active power drawn from the grid during daylight hours, which affects the reactive-to-active ratio measured at the meter. The compensation system must be re-evaluated after solar installation to ensure the power factor target is still met." }
      ]
    },
    {
      slug: "how-factories-reduce-electricity-costs",
      title: "How Factories Can Reduce Electricity Costs Without Production Risk",
      description: "A structured approach for industrial facilities to identify, prioritize and implement electricity cost reductions through bill analysis, compensation, demand management and solar feasibility.",
      category: "Energy Cost",
      categorySlug: "energy-cost",
      date: "2026-06-14",
      readingTime: "8 min",
      toc: ["Start with the bill, not the equipment", "The three controllable cost levers", "Implementation sequence and timeline", "What requires external expertise", "Common mistakes to avoid"],
      related: ["industrial-electricity-bill-analysis-guide", "reactive-penalty-compensation-system-audit", "rooftop-solar-feasibility-industrial-facilities"],
      serviceLinks: ["industrial-energy-cost-optimization", "energy-audit", "solar-energy-consulting"],
      body: [
        { heading: "Start with the bill, not the equipment", content: "The most common mistake industrial facilities make when trying to reduce electricity costs is starting with equipment purchases. LED lighting projects, compressed air upgrades and motor efficiency programs are often promoted as energy savings measures, but they address the active energy consumption component — which is already the most competitive part of the bill. The components that typically offer the fastest payback are the penalty and charge items: reactive penalties, excess demand charges and contract power misalignment. These can often be addressed without any new equipment purchase at all, or with targeted investments that pay back in under 18 months." },
        { heading: "The three controllable cost levers", content: "For most industrial facilities, electricity cost reduction comes from three levers: reactive power management, demand charge optimization, and tariff or market access optimization. Reactive power management means eliminating or significantly reducing reactive penalties through proper compensation system design and maintenance. Demand charge optimization means aligning the contracted power level with the actual peak demand pattern. Tariff optimization means assessing whether open market supply, time-of-use load shifting or a different distribution tariff structure would reduce the blended cost. Rooftop solar is a fourth lever that can reduce active energy cost, but it requires more capital and a longer planning horizon than the first three." },
        { heading: "Implementation sequence and timeline", content: "The correct sequence is analysis first, then action. Month one: collect 12 months of bills, demand profile data and meter records. Month two: complete the bill decomposition and identify the largest controllable cost items. Months three and four: for reactive penalties, inspect the compensation system and prepare a specification for correction or upgrade; for demand charges, prepare the re-contracting application. Months five through eight: implement compensation correction and complete re-contracting. Months six through twelve: evaluate rooftop solar feasibility if consumption profile and roof area are favorable. This sequence avoids committing to capital expenditure before the baseline is understood." },
        { heading: "What requires external expertise", content: "Bill analysis and demand profile work can be done internally if the facility has access to interval meter data and staff with time to analyze it. Compensation system assessment requires an electrical engineer with knowledge of power quality and harmonics — incorrect sizing in a harmonic environment can cause new problems. Grid connection review for solar requires knowledge of local distribution operator requirements. Financial modeling for rooftop solar requires site-specific yield data, not generic estimates. External expertise is most valuable for defining the problem correctly and avoiding the errors that are most expensive to fix later." },
        { heading: "Common mistakes to avoid", content: "The most common mistakes in industrial electricity cost reduction are: buying a compensation panel based on reactive penalty alone without checking the harmonic environment; re-contracting to a lower power level without adequate demand headroom analysis; sizing a rooftop solar system to maximize installed capacity rather than self-consumption; and implementing energy efficiency measures before addressing the structural penalty and charge items. Each of these mistakes either fails to deliver the expected savings or creates new operational problems. The safest approach is a structured analysis before any procurement decision, and independent technical review before any significant equipment specification is finalized." }
      ],
      faqs: [
        { question: "How long before electricity cost reductions appear on the bill?", answer: "Reactive penalty reductions and demand charge corrections typically appear in the first full billing cycle after the technical fix is implemented. For re-contracting, the new rate applies from the contract revision date." },
        { question: "Is an energy audit required before implementing cost reduction measures?", answer: "A formal energy audit is not always required, but a structured bill analysis and technical review of the compensation and metering systems is essential to ensure the right problems are addressed in the right order." }
      ]
    }
  ],
  tr: [
    {
      slug: "hes-devreye-alma-sirasinda-sik-gorulen-problemler",
      title: "HES Devreye Alma Sırasında Sık Görülen Problemler",
      description: "HES başlangıcı, şebeke senkronizasyonu, koruma hazırlığı ve işletmeye teslimi etkileyen yaygın devreye alma riskleri.",
      category: "Devreye Alma",
      categorySlug: "devreye-alma",
      date: "2026-05-01",
      readingTime: "8 dk",
      toc: ["Devreye alma hazırlık boşlukları", "Koruma ve şebeke arayüz sorunları", "İşletme için teslim kanıtı"],
      related: ["enerji-santrali-operasyonel-hazirlik-kontrol-listesi", "hes-verimlilik-optimizasyon-yontemleri"],
      serviceLinks: ["enerji-santrali-devreye-alma", "hes-danismanligi", "isveren-muhendisligi"],
      body: [
        { heading: "Devreye alma hazırlık boşlukları", content: "HES devreye alma süreci mekanik tamamlama, ön devreye alma ve fonksiyonel testler tek faaliyet gibi yönetildiğinde zorlaşır. Kontrollü başlangıç için sistem sınırları, imzalı test prosedürleri, doğrulanmış enstrümantasyon, eğitimli operatörler ve risk bazlı eksik iş listesi gerekir." },
        { heading: "Koruma ve şebeke arayüz sorunları", content: "Şebeke senkronizasyonu doğru koruma ayarları, kesici mantığı, AVR davranışı, governor tepkisi, iletişim protokolleri ve dağıtım/iletim şirketi kabulüne bağlıdır. Bu kalemler geç incelendiğinde gecikme ve sorumluluk belirsizliği oluşur." },
        { heading: "İşletme için teslim kanıtı", content: "En değerli devreye alma çıktısı yalnızca ilk senkronizasyon değildir. İşletmenin daha sonra kullanacağı test kayıtları, as-built çizimler, koruma dosyaları, alarm listeleri, operatör prosedürleri ve açık risk notlarıdır." }
      ],
      faqs: [
        { question: "HES devreye alma planlaması ne zaman başlamalıdır?", answer: "Devreye alma planlaması enerjilendirme baskısı oluşmadan, tasarım arayüzleri ve koruma ayarları hâlâ sorgulanabilirken başlamalıdır." },
        { question: "HES devreye almada en büyük risk nedir?", answer: "En büyük risk eksik hazırlık kanıtıdır. Prosedür, ayar, eksik iş önceliği ve işletme teslim kayıtları olmadan risk ticari işletmeye taşınır." }
      ]
    },
    {
      slug: "hes-verimlilik-optimizasyon-yontemleri",
      title: "HES Verimlilik Optimizasyon Yöntemleri",
      description: "HES üretimi, su-güç verimi, emre amadelik ve O&M performansını iyileştirmek için pratik yöntemler.",
      category: "HES",
      categorySlug: "hes",
      date: "2026-05-02",
      readingTime: "8 dk",
      toc: ["Hidrolojiyi teknik kayıptan ayırın", "Su-güç performansını inceleyin", "O&M aksiyonlarını önceliklendirin"],
      related: ["hes-devreye-alma-sirasinda-sik-gorulen-problemler", "enerji-santrali-operasyonel-hazirlik-kontrol-listesi"],
      serviceLinks: ["hes-danismanligi", "enerji-denetimi", "isletme-bakim-performans-iyilestirme"],
      body: [
        { heading: "Hidrolojiyi teknik kayıptan ayırın", content: "HES optimizasyonu kaçınılmaz su koşullarını önlenebilir teknik kayıptan ayırarak başlar. Üretim kayıtları, akış, ünite yük dağılımı, duruş geçmişi ve işletme kısıtları birlikte incelenmelidir." },
        { heading: "Su-güç performansını inceleyin", content: "Verim; su alma koşulları, hidrolik kayıplar, türbin durumu, jeneratör davranışı, soğutma sistemleri, kontrol ayarı, yardımcı tüketimler ve operatör rutinlerinden etkilenir." },
        { heading: "O&M aksiyonlarını önceliklendirin", content: "Optimizasyon enerji etkisi, güvenilirlik etkisi, duruş ihtiyacı, uygulama zorluğu ve yatırım türü net olan sıralı aksiyon planıyla bitmelidir." }
      ],
      faqs: [
        { question: "Mevcut HES büyük CAPEX olmadan optimize edilebilir mi?", answer: "Evet. Birçok kazanım işletme disiplini, bakım planlama, alarm müdahalesi, kontrol ayarı incelemesi ve kayıp görünürlüğünden gelir." },
        { question: "HES optimizasyonu için hangi veri gerekir?", answer: "Üretim, akış, duruş, alarm, bakım kaydı, ünite yük dağılımı, test kayıtları ve devreye alma bazları faydalıdır." }
      ]
    },
    {
      slug: "ges-performans-orani-analizi",
      title: "GES Performans Oranı Analizi",
      description: "GES PR analizinin EPC kanıtı, O&M rutinleri, inverter davranışı ve saha koşullarıyla nasıl yorumlanması gerektiği.",
      category: "GES",
      categorySlug: "ges",
      date: "2026-05-03",
      readingTime: "7 dk",
      toc: ["PR neyi açıklar, neyi açıklamaz", "EPC kanıtı ve inverter davranışı", "PR bulgularını aksiyona çevirmek"],
      related: ["epc-gecikmeleri-enerji-santrali-gelirini-nasil-etkiler", "enerji-santrali-operasyonel-hazirlik-kontrol-listesi"],
      serviceLinks: ["gunes-enerjisi-danismanligi", "enerji-denetimi", "epc-teknik-danismanlik-hizmeti"],
      body: [
        { heading: "PR neyi açıklar, neyi açıklamaz", content: "Performans oranı faydalı bir GES KPI'ıdır fakat tek başına varlık performansını açıklamaz. Işınım, kısıt, sıcaklık, kirlenme, inverter emre amadeliği, string arızaları ve ölçüm doğruluğu birlikte incelenmelidir." },
        { heading: "EPC kanıtı ve inverter davranışı", content: "GES düşük performansı çoğu zaman teslim kanıtı boşluğu ile başlar. As-built kayıtlar, devreye alma testleri, eksik iş kapanışı, inverter olay logları ve garanti sınırları birlikte değerlendirilmelidir." },
        { heading: "PR bulgularını aksiyona çevirmek", content: "İyi PR analizi öncelikli toparlama planı üretir. Aksiyonlar izleme düzeltmeleri, temizlik mantığı, inverter arıza incelemesi, string kontrolleri, O&M müdahale iyileştirmesi ve EPC garanti takibini içerebilir." }
      ],
      faqs: [
        { question: "Düşük PR her zaman EPC problemi midir?", answer: "Hayır. Düşük PR kaynak değişkenliği, kısıt, kirlenme, ekipman arızası, zayıf O&M müdahalesi veya EPC kalite probleminden kaynaklanabilir." },
        { question: "PR ne sıklıkla incelenmelidir?", answer: "PR sürekli izlenmeli; kalıcı kayıplar, büyük arızalar, satın alma öncesi veya O&M performansı sorgulandığında formal olarak incelenmelidir." }
      ]
    },
    {
      slug: "epc-gecikmeleri-enerji-santrali-gelirini-nasil-etkiler",
      title: "EPC Gecikmeleri Enerji Santrali Gelirini Nasıl Etkiler",
      description: "EPC gecikmelerinin geç enerjilendirme, eksik devreye alma ve açık teknik arayüzlerle nasıl gelir riski yarattığı.",
      category: "EPC",
      categorySlug: "epc",
      date: "2026-05-04",
      readingTime: "7 dk",
      toc: ["Gecikme yalnızca takvim konusu değildir", "Devreye alma gecikme nedenleri", "İşveren tarafı kontroller"],
      related: ["hes-devreye-alma-sirasinda-sik-gorulen-problemler", "enerji-santrali-operasyonel-hazirlik-kontrol-listesi"],
      serviceLinks: ["epc-teknik-danismanlik-hizmeti", "isveren-muhendisligi", "enerji-santrali-devreye-alma"],
      body: [
        { heading: "Gecikme yalnızca takvim konusu değildir", content: "EPC gecikmesi gelir riskidir çünkü her açık arayüz enerjilendirme, performans testi, şebeke kabulü ve ticari işletmeyi geciktirebilir. Kanıt zayıf olduğunda teknik gecikme ticari belirsizlik de yaratır." },
        { heading: "Devreye alma gecikme nedenleri", content: "Yaygın nedenler geç test prosedürleri, belirsiz koruma ayarları, eksik şebeke dokümanları, SCADA hazırlık boşlukları, açık eksik işler ve varlığı devralmaya hazır olmayan O&M ekipleridir." },
        { heading: "İşveren tarafı kontroller", content: "İşverenler bağımsız doküman incelemesi, arayüz risk listesi, devreye alma hazırlık kapıları, karar notları ve kanıta dayalı kabul kriterleriyle gecikme riskini azaltabilir." }
      ],
      faqs: [
        { question: "İşveren EPC gecikme riskini nasıl azaltabilir?", answer: "Tasarım arayüzleri, yüklenici dokümanları, devreye alma hazırlığı ve teslim kanıtları takvim baskısından önce incelenmelidir." },
        { question: "EPC gecikmeleri uzun vadeli işletmeyi etkiler mi?", answer: "Evet. Gecikmiş veya aceleye gelmiş devreye alma çözülmemiş teknik konuları O&M sürecine taşır." }
      ]
    },
    {
      slug: "enerji-santrali-operasyonel-hazirlik-kontrol-listesi",
      title: "Enerji Santrali Operasyonel Hazırlık Kontrol Listesi",
      description: "EPC teslimi sonrası yenilenebilir enerji santralinin güvenilir işletmeye hazır olup olmadığını doğrulamak için pratik kontrol listesi.",
      category: "İşletme",
      categorySlug: "isletme",
      date: "2026-05-05",
      readingTime: "8 dk",
      toc: ["Teknik dokümantasyon", "İnsan ve prosedürler", "Performans ve güvenilirlik kanıtı"],
      related: ["hes-devreye-alma-sirasinda-sik-gorulen-problemler", "hes-verimlilik-optimizasyon-yontemleri"],
      serviceLinks: ["isveren-muhendisligi", "enerji-santrali-devreye-alma", "enerji-denetimi"],
      body: [
        { heading: "Teknik dokümantasyon", content: "Operasyonel hazırlık doğru as-built çizimler, koruma ayarları, O&M dokümanları, devreye alma test kayıtları, eksik iş durumu, garanti sınırları ve yedek parça bilgisi gerektirir." },
        { heading: "İnsan ve prosedürler", content: "Operatörlerin eğitim, alarm müdahale rutini, izin prosedürleri, bakım planlama, raporlama hatları ve eskalasyon kuralları hazır olmalıdır. Teknik olarak tamamlanmış bir santral, işletme organizasyonu hazır değilse düşük performans gösterebilir." },
        { heading: "Performans ve güvenilirlik kanıtı", content: "Hazırlık; fonksiyonel testler, performans testleri, güvenilirlik gözlemleri ve tekrarlayan alarm veya triplerin devir öncesi anlaşıldığına dair kanıtla gösterilmelidir." }
      ],
      faqs: [
        { question: "Operasyonel hazırlığın sahibi kim olmalıdır?", answer: "İşveren, EPC yüklenicisi ve O&M ekibi kanıt, kabul ve açık riskler için net sorumlulukla birlikte sahiplenmelidir." },
        { question: "Hazırlık incelemesinin en iyi çıktısı nedir?", answer: "En iyi çıktı işletme öncesi kapatılması gereken aksiyonlar ve devir sonrası yönetilebilecek risk notlarıdır." }
      ]
    },
    {
      slug: "hes-santrallerinde-verimlilik-optimizasyonu",
      title: "HES Santrallerinde Verimlilik Optimizasyonu",
      description: "HES üretimi, emre amadeliği ve bakım disiplinini iyileştirmek için pratik rehber.",
      category: "HES",
      categorySlug: "hes",
      date: "2026-01-10",
      readingTime: "6 dk",
      toc: ["Ölçülen kayıplarla başlayın", "Su-güç performansını inceleyin", "Bulguları O&M aksiyonuna çevirin"],
      related: ["mevcut-hes-santrallerinde-teknik-denetim-neden-gereklidir", "enerji-santrali-devreye-alma-kontrol-listesi"],
      serviceLinks: ["hes-optimizasyonu", "isletme-bakim-performans-iyilestirme"],
      body: [
        { heading: "Ölçülen kayıplarla başlayın", content: "HES optimizasyonu üretim verisi, duruş geçmişi, su durumu ve ünite bazlı işletme paternleri ile başlamalıdır. Bu yaklaşım kaçınılmaz hidrolojiyi önlenebilir teknik kayıptan ayırır." },
        { heading: "Su-güç performansını inceleyin", content: "Türbin, jeneratör, hidrolik yapılar, kontrol sistemleri ve yardımcı sistemler birlikte değerlendirilmelidir. Sadece ekipmana odaklanan inceleme gerçek üretimi azaltan arayüz sorunlarını kaçırabilir." },
        { heading: "Bulguları O&M aksiyonuna çevirin", content: "En güçlü optimizasyon planları aksiyonları enerji etkisi, güvenilirlik etkisi, maliyet ve duruş ihtiyacına göre sıralar." }
      ]
    },
    {
      slug: "yenilenebilir-enerji-projelerinde-sik-yapilan-epc-hatalari",
      title: "Yenilenebilir Enerji Projelerinde Sık Yapılan EPC Hataları",
      description: "Yenilenebilir enerji projelerinde teknik riski artıran yaygın EPC teslim hataları.",
      category: "EPC",
      categorySlug: "epc",
      date: "2026-01-18",
      readingTime: "5 dk",
      toc: ["Zayıf arayüz sahipliği", "Geç devreye alma planlaması", "Eksik teslim kanıtları"],
      related: ["enerji-santrali-devreye-alma-kontrol-listesi", "santrallerde-sebeke-ve-koruma-sistemi-analizi"],
      serviceLinks: ["epc-teknik-danismanlik", "isveren-muhendisligi"],
      body: [
        { heading: "Zayıf arayüz sahipliği", content: "Birçok EPC problemi inşaat, elektrik, mekanik, şebeke ve kontrol kapsamlarının arasında oluşur. Arayüz matrisleri yaşayan dokümanlar olmalıdır." },
        { heading: "Geç devreye alma planlaması", content: "Test prosedürleri, enerjilendirme sıraları ve kabul kriterleri geç oluşturulduğunda devreye alma riski büyür." },
        { heading: "Eksik teslim kanıtları", content: "İşverenler test sonuçları, as-built kayıtlar, koruma ayarları, O&M dokümanları ve eksik iş kapanış kanıtlarını eksiksiz teslim almalıdır." }
      ]
    },
    {
      slug: "enerji-santrali-devreye-alma-kontrol-listesi",
      title: "Enerji Santrali Devreye Alma Kontrol Listesi",
      description: "Daha güvenli başlangıç, test ve teslim için devreye alma kontrol listesi yapısı.",
      category: "Devreye Alma",
      categorySlug: "devreye-alma",
      date: "2026-02-02",
      readingTime: "7 dk",
      toc: ["Mekanik tamamlama", "Elektrik enerjilendirme", "Fonksiyonel ve performans testleri"],
      related: ["yenilenebilir-enerji-projelerinde-sik-yapilan-epc-hatalari", "santrallerde-sebeke-ve-koruma-sistemi-analizi"],
      serviceLinks: ["enerji-santrali-devreye-alma", "epc-teknik-danismanlik"],
      body: [
        { heading: "Mekanik tamamlama", content: "Tamamlama durumu sistem bazında doğrulanmalı, eksik iş sahipliği ve inşaat, ön devreye alma, devreye alma sınırları net olmalıdır." },
        { heading: "Elektrik enerjilendirme", content: "Enerjilendirme doğrulanmış koruma ayarları, kontroller, izinler, iletişim protokolleri ve kontrollü sıra gerektirir." },
        { heading: "Fonksiyonel ve performans testleri", content: "Fonksiyonel testler sistemlerin doğru çalıştığını; performans testleri santralin sözleşmesel ve operasyonel beklentileri karşıladığını gösterir." }
      ]
    },
    {
      slug: "santrallerde-sebeke-ve-koruma-sistemi-analizi",
      title: "Santrallerde Şebeke ve Koruma Sistemi Analizi",
      description: "Koruma koordinasyonu ve şebeke arayüz incelemesinin santral güvenilirliği için önemi.",
      category: "Şebeke",
      categorySlug: "sebeke",
      date: "2026-02-14",
      readingTime: "6 dk",
      toc: ["Koruma ayarları varlık değeri kararıdır", "Açma geçmişi koordinasyon sorunlarını gösterir", "Şebeke uyumu kanıt gerektirir"],
      related: ["enerji-santrali-devreye-alma-kontrol-listesi", "yenilenebilir-enerji-projelerinde-sik-yapilan-epc-hatalari"],
      serviceLinks: ["sebeke-koruma-sistemi-analizi", "mevcut-santraller-icin-teknik-denetim"],
      body: [
        { heading: "Koruma ayarları varlık değeri kararıdır", content: "Hatalı koruma varsayımları gereksiz açmalara, ekipman zorlanmasına veya şebeke uyum sorunlarına yol açabilir." },
        { heading: "Açma geçmişi koordinasyon sorunlarını gösterir", content: "Olay kayıtları ve işletme logları, açmaların ekipman arızası, şebeke olayı veya koruma koordinasyonsuzluğundan kaynaklanıp kaynaklanmadığını gösterir." },
        { heading: "Şebeke uyumu kanıt gerektirir", content: "İşverenler ayarlar, testler, çalışmalar ve dağıtım/iletim şirketi yazışmaları için savunulabilir kayıt tutmalıdır." }
      ]
    },
    {
      slug: "ges-performans-iyilestirme-rehberi",
      title: "GES Performans İyileştirme Rehberi",
      description: "GES sahipleri düşük performansı nasıl teşhis edip toparlama aksiyonlarını nasıl önceliklendirebilir?",
      category: "GES",
      categorySlug: "ges",
      date: "2026-03-01",
      readingTime: "5 dk",
      toc: ["Kaynak etkisini teknik kayıptan ayırın", "EPC kalite kanıtlarını inceleyin", "O&M müdahale döngülerini güçlendirin"],
      related: ["yenilenebilir-enerji-projelerinde-sik-yapilan-epc-hatalari", "enerji-santrali-devreye-alma-kontrol-listesi"],
      serviceLinks: ["ges-danismanligi", "isletme-bakim-performans-iyilestirme"],
      body: [
        { heading: "Kaynak etkisini teknik kayıptan ayırın", content: "Işınım, sıcaklık, kısıt, inverter emre amadeliği, kirlenme ve string düzeyi sorunlar sorumluluk belirlenmeden ayrıştırılmalıdır." },
        { heading: "EPC kalite kanıtlarını inceleyin", content: "As-built kayıtlar, test sonuçları ve eksik iş kapanışı düşük performansın teslimde mi yoksa işletmede mi başladığını gösterebilir." },
        { heading: "O&M müdahale döngülerini güçlendirin", content: "Hızlı arıza müdahalesi, temizlik disiplini, kontrol rutinleri ve performans analitiği daha yüksek üretime giden en hızlı yollardandır." }
      ]
    },
    {
      slug: "mevcut-hes-santrallerinde-teknik-denetim-neden-gereklidir",
      title: "Mevcut HES Santrallerinde Teknik Denetim Neden Gereklidir",
      description: "Teknik denetimlerin çalışan HES varlıklarında risk, güvenilirlik ve yatırım önceliklerini nasıl netleştirdiği.",
      category: "Teknik Denetim",
      categorySlug: "teknik-denetim",
      date: "2026-03-15",
      readingTime: "6 dk",
      toc: ["Yaşlanan varlıklar teknik borç saklar", "İşletme verisi mühendislik bağlamı ister", "Denetim çıktıları karar desteklemelidir"],
      related: ["hes-santrallerinde-verimlilik-optimizasyonu", "santrallerde-sebeke-ve-koruma-sistemi-analizi"],
      serviceLinks: ["mevcut-santraller-icin-teknik-denetim", "hes-optimizasyonu"],
      body: [
        { heading: "Yaşlanan varlıklar teknik borç saklar", content: "HES tesisleri yıllarca çalışırken dokümantasyon boşlukları, çözülmemiş kusurlar ve bakım kısayolları biriktirebilir." },
        { heading: "İşletme verisi mühendislik bağlamı ister", content: "Emre amadelik, duruşlar ve üretim trendleri saha gözlemleri, ekipman durumu ve geçmiş proje kayıtlarıyla birlikte yorumlandığında anlam kazanır." },
        { heading: "Denetim çıktıları karar desteklemelidir", content: "İyi bir denetim öncelikli teknik risk listesi, düzeltici aksiyon yol haritası ve yatırım mantığı üretir." }
      ]
    },
    {
      slug: "elektrik-faturasi-analizi-rehberi",
      title: "Endüstriyel Elektrik Faturası Analizi: Maliyetiniz Gerçekte Nereden Geliyor",
      description: "Sanayi elektrik faturalarını analiz etmek, reaktif cezaları, talep yükü riskini, tarife uyumsuzluğunu ve sözleşme gücü tutarsızlığını tespit etmek için pratik rehber.",
      category: "Enerji Maliyeti",
      categorySlug: "enerji-maliyeti",
      date: "2026-06-10",
      readingTime: "9 dk",
      toc: ["Sanayi elektrik faturaları neden okunması zordur", "Reaktif güç cezaları açıklaması", "Talep yükü ve sözleşme gücü", "Tarife yapısı ve serbest piyasa uygunluğu", "Faturanızı düşürmek için ilk adımlar"],
      related: ["reaktif-ceza-analizi-kompanzasyon-sistemi", "sozlesme-gucu-talep-optimizasyonu"],
      serviceLinks: ["endustriyel-enerji-maliyet-optimizasyonu", "enerji-denetimi"],
      body: [
        { heading: "Sanayi elektrik faturaları neden okunması zordur", content: "Sanayi elektrik faturaları farklı mekanizmalarla çalışan birden fazla maliyet bileşenini bir araya getirir: aktif enerji tüketimi, reaktif güç cezaları, sözleşme talep ücretleri, aşım cezaları, dağıtım ücretleri, vergiler ve zaman dilimine bağlı düzeltmeler. Yüksek aylık toplama bakan bir tesis yöneticisi, düzeltilebilir kısmı her bileşeni ayrı ayrı incelemeden tespit edemez. Herhangi bir elektrik maliyeti incelemesinin ilk adımı; kontrol edilebilir maliyetleri kontrol edilemeyenlerden ayıran ve hangi bileşenin faturayı yukarı çektiğini gösteren 12 aylık maliyet dağılımı oluşturmaktır." },
        { heading: "Reaktif güç cezaları açıklaması", content: "Bir tesisin güç faktörü şebeke işleticisinin gerektirdiği eşiğin altına düştüğünde reaktif güç cezası ortaya çıkar. Türkiye'de bu eşik genellikle 0,90 veya 0,95'tir. Motorlar, kompresörler, kaynak makineleri, endüksiyon fırınları ve floresan aydınlatma dahil endüstriyel yükler reaktif güç tüketir. Yeterli kompanzasyon olmadan dağıtım şirketi bu reaktif talebi ölçer ve kVArh başına veya aktif enerji tarifesine çarpan olarak ceza uygular. Ceza, bir tesisin aylık elektrik maliyetinin yüzde beş ile on beşini oluşturabilir ve doğru kompanzasyon tasarımıyla neredeyse tamamen giderilebilir." },
        { heading: "Talep yükü ve sözleşme gücü", content: "Sözleşme gücü bir tesisin şebekeden çekmeyi kabul ettiği maksimum talep düzeyidir. Tesis düzenli olarak sözleşme düzeyinin altında çekiş yapıyorsa kullanılmayan kapasite için kapasite bedeli öder. Düzenli olarak aşıyorsa aşım cezası öder. Pek çok sanayi tesisi, süreçlerin değiştiği veya ekipmanın yenilendiği için gerçek yük düzeniyle artık uyuşmayan başlangıç bağlantı döneminden kalma sözleşme gücü düzeyiyle çalışmaktadır. Talep yükü analizi, sözleşme düzeyiyle karşılaştırma yapmak üzere fiili 15 dakikalık pik talep profillerini inceler ve yeniden sözleşmenin maliyeti düşürüp düşürmeyeceğini belirler." },
        { heading: "Tarife yapısı ve serbest piyasa uygunluğu", content: "Türkiye'nin elektrik piyasası belirli yıllık tüketim eşiklerinin üzerindeki tüketicilerin pazarlık edilen fiyatlarla serbest piyasadan elektrik satın almasına olanak tanır. Serbest piyasa arzının daha düşük karma maliyet sunup sunmadığı tesisin tüketim profiline, zaman dilimi düzenine, reaktif güç durumuna ve mevcut spot piyasa fiyat yapısına bağlıdır. Tarife uygunluğu otomatik değildir; piyasa geçişini önermeden önce tesisin yük profili, tüketim stabilitesi ve risk toleransının değerlendirilmesini gerektirir." },
        { heading: "Faturanızı düşürmek için ilk adımlar", content: "İlk adım, her maliyet bileşenini ayıran ve en büyük kontrol edilebilir kalemleri tespit eden 12 aylık fatura incelemesidir. İkinci adım, reaktif cezalar mevcutsa kompanzasyon sistemi incelemesidir. Üçüncü adım, sözleşme gücü uyumunu kontrol etmek üzere talep profili analizidir. Bu üç adım genellikle saha ziyareti ve herhangi bir ekipman alımı yapılmadan tamamlanabilir ve herhangi bir yatırım kararı alınmadan önce tasarruf fırsatını ortaya koyar." }
      ],
      faqs: [
        { question: "Elektrik maliyetleri saha ziyareti olmadan analiz edilebilir mi?", answer: "Evet. 12 aylık fatura analizi, reaktif güç verisi ve sayaç kayıtları, sahaya gitmeden önce temel maliyet azaltma fırsatlarını belirlemek için yeterlidir." },
        { question: "Reaktif cezalar ne kadar azaltılabilir?", answer: "Reaktif güç cezaları doğru tasarlanmış ve bakımlı bir kompanzasyon sistemiyle genellikle tamamen ortadan kaldırılabilir veya sıfıra yakına indirilebilir." },
        { question: "Sözleşme gücü optimizasyon analizi ne kadar sürer?", answer: "Fatura verisi ve talep profili mevcut olduğunda analiz 1-2 hafta sürer. Yarar, dağıtım işleticisiyle sözleşme revizyonundan hemen sonra gerçekleşir." }
      ]
    },
    {
      slug: "reaktif-ceza-analizi-kompanzasyon-sistemi",
      title: "Reaktif Güç Cezası Analizi ve Kompanzasyon Sistemi Denetimi",
      description: "Sanayi tesislerinde reaktif güç cezalarını tespit etme, ölçme ve kompanzasyon sistemi incelemesiyle giderme rehberi.",
      category: "Enerji Maliyeti",
      categorySlug: "enerji-maliyeti",
      date: "2026-06-11",
      readingTime: "8 dk",
      toc: ["Reaktif cezalar nasıl çalışır", "Mevcut kompanzasyon neden yetersiz kalır", "Harmonikler ve kompanzasyon sistemi etkileşimi", "Düzeltme için boyutlandırma ve teknik özellik", "Geri ödeme ve maliyet önleme"],
      related: ["elektrik-faturasi-analizi-rehberi", "sozlesme-gucu-talep-optimizasyonu"],
      serviceLinks: ["endustriyel-enerji-maliyet-optimizasyonu", "enerji-denetimi"],
      body: [
        { heading: "Reaktif cezalar nasıl çalışır", content: "Bir tesis şebekeden, belirli bir aktif enerji tüketim düzeyi için dağıtım şirketinin izin verdiğinden fazla endüktif reaktif güç çektiğinde reaktif güç cezası uygulanır. Türkiye dağıtım tarife yapısı, reaktif-aktif oranının şebeke sayacında 0,33'ü aşması durumunda tesislere ceza uygular. Aylık 500 MWh tüketen bir tesis için düzeltilmemiş 0,80 güç faktörü, yıldan yıla birikerek aylık birkaç bin liraya ulaşan reaktif ceza üretebilir." },
        { heading: "Mevcut kompanzasyon neden yetersiz kalır", content: "Kurulumda doğru boyutlandırılmış bir kompanzasyon panosu zamanla veya yük değişikliklerinden sonra etkisizleşebilir. En yaygın başarısızlık modları şunlardır: proses genişlemesi sonrası yetersiz toplam reaktif kapasite, sessizce bozulan veya arızalanan kondansatör bankaları, hızlı yük değişimlerine tepki vermeyen yanlış kademeleme mantığı ve koruma rölesini devredışı bırakıp kompanzasyonu açıkta bırakan harmonik rezonans. Her başarısızlık modunun farklı düzeltici aksiyonu vardır; bu nedenle yalnızca fatura analizi yetersizdir — kompanzasyon sisteminin kendisi de incelenmelidir." },
        { heading: "Harmonikler ve kompanzasyon sistemi etkileşimi", content: "Hız kontrol sürücüleri, anahtarlamalı güç kaynakları, UPS sistemleri ve kaynak makineleri sabit kondansatör bantlarıyla rezonans yaratabilecek harmonik akımlar üretir. Bu rezonans harmonik akımı güçlendirir, kondansatör aşırı ısınmasına neden olur, koruma rölesini açar ve tesisi tam da cezanın oluştuğu anda kompanzasyonsuz bırakır. Çözüm sadece daha büyük kondansatör değildir; belirli tesisin harmonik spektrumuna göre seçilmiş harmonik filtreleme veya detune reaktör koruması gerektirir. Hız kontrol sürücüsü bulunan bir sanayi tesisinde harmonik farkındalığı olmadan kurulan kompanzasyon sistemi güvenilirlik sorunlarıyla karşılaşacaktır." },
        { heading: "Düzeltme için boyutlandırma ve teknik özellik", content: "Doğru kompanzasyon sistemi boyutlandırması; reaktif güç talep profilini, harmonik gerilim ve akım spektrumunu, yük anahtarlama hızını, ortam sıcaklığını ve mevcut pano alanını gerektirir. Fazla boyutlandırma sermayeyi boşa harcar; az boyutlandırma cezaların devam etmesine neden olur. Detune reaktörler, tesiste mevcut baskın harmonik sıralarıyla rezonansı önleyecek ayar frekanslarıyla seçilmelidir. Teknik özellikler gerekli reaktif güç aralığını, kademe büyüklüğünü, anahtarlama tepki süresini, koruma ayarlarını ve harmonik koruma sırasını içermelidir." },
        { heading: "Geri ödeme ve maliyet önleme", content: "Orta büyüklükteki bir sanayi tesisi için iyi boyutlandırılmış kompanzasyon sistemi kurulu olarak genellikle 50.000 ile 250.000 TL arasında maliyetlenir. Aylık 10.000-50.000 TL reaktif cezayla 6-18 aylık geri ödeme süreleri yaygındır. Geri ödeme hesabı genel tahminler değil gerçek ölçülen ceza verisi kullanmalı ve kompanzasyon sisteminin 15-20 yıllık beklenen hizmet ömrü boyunca bakım maliyetini dikkate almalıdır." }
      ],
      faqs: [
        { question: "Her zaman yeni kompanzasyon panosu gerekli midir?", answer: "Her zaman değil. Bazen mevcut pano tamir edilebilir veya yeniden programlanabilir. Herhangi bir yeni ekipman belirtilmeden önce mevcut sistemin teknik incelemesi başlangıç noktasıdır." },
        { question: "Detune reaktör nedir ve ne zaman gereklidir?", answer: "Detune reaktör, rezonans frekansını tesisin yükleri tarafından üretilen harmonik sıralarından uzaklaştırmak için kondansatör bankasıyla seri bağlanan bir reaktördür. Hız kontrol sürücüleri, doğrultucular veya diğer harmonik üreten ekipman bulunduğunda gereklidir." }
      ]
    },
    {
      slug: "sozlesme-gucu-talep-optimizasyonu",
      title: "Sözleşme Gücü ve Talep Yükü Optimizasyonu: Sanayi Tesisleri İçin Rehber",
      description: "Sözleşme güç düzeylerini gerçek talep davranışıyla uyumlandırma, aşım cezalarını ortadan kaldırma ve sanayi elektrik sözleşmelerinde kapasite ücretlerini azaltma rehberi.",
      category: "Enerji Maliyeti",
      categorySlug: "enerji-maliyeti",
      date: "2026-06-12",
      readingTime: "7 dk",
      toc: ["Sözleşme gücü neyi belirler", "Fazla sözleşme vs az sözleşme", "Talep profili analiz yöntemi", "Yeniden sözleşme süreci", "Toplam faturaya birleşik etki"],
      related: ["elektrik-faturasi-analizi-rehberi", "reaktif-ceza-analizi-kompanzasyon-sistemi"],
      serviceLinks: ["endustriyel-enerji-maliyet-optimizasyonu", "enerji-denetimi"],
      body: [
        { heading: "Sözleşme gücü neyi belirler", content: "Sözleşme gücü, bir tesisin herhangi bir 15 dakikalık aralıkta dağıtım şebekesinden çekme hakkına sahip olduğu maksimum aktif güç düzeyidir. Tesisin tarifesinin kapasite bileşenini belirler: daha yüksek sözleşme düzeyi, bu kapasite kullanılıp kullanılmadığından bağımsız olarak daha yüksek aylık kapasite bedeli demektir. Aynı zamanda ceza eşiğini de belirler: herhangi bir 15 dakikalık dönemde sözleşme gücünü aşmak, genellikle aşılan kW için aktif enerji tarifesinin katı olarak fiyatlanan aşım cezasına yol açar." },
        { heading: "Fazla sözleşme vs az sözleşme", content: "Fazla sözleşme yapılmış tesis hiç kullanmadığı kapasite için aylık kapasite bedeli öder. İlk bağlantıda 1.000 kW sözleşme imzalayan ancak şimdi 650 kW pik yükte çalışan tesis her ay 350 kW kullanılmayan kapasite ödemektedir. Az sözleşme yapılmış tesis talep cezası riskiyle karşılaşır. Sözleşme belirlendiğinden bu yana üretimi büyüyen ve 1.000 kW sözleşmede düzenli olarak 1.200 kW çeken tesis her pik aralıkta ceza tetiklemektedir. Her iki sorun da elektrik sözleşmesinin ilk devreye almadan bu yana gözden geçirilmediği tesislerde yaygındır." },
        { heading: "Talep profili analiz yöntemi", content: "Analiz, temsili 12 aylık dönem için 15 dakikalık aktif güç talep verisini gerektirir; sayaç veri yönetim sisteminden veya dağıtım işleticisinden temin edilebilir. Analiz gerçek pik talep düzeyini, talep aralıklarının frekans dağılımını, mevsimsel düzenleri, üretime bağlı pikleri ve sözleşme düzeyi ile gerçekçi maksimum talep arasındaki boşluğu tespit eder. Ardından toplam kapasite ve ceza maliyetini minimize eden optimum noktayı belirlemek üzere farklı sözleşme güç düzeylerinin finansal sonucunu modelleştirir." },
        { heading: "Yeniden sözleşme süreci", content: "Dağıtım bağlantısının yeniden sözleşmesi, dağıtım işleticisine resmi başvuru gerektirir. İşletici talebi inceler, kapasite düşürülüyorsa bağlantıyı denetler ve yeni bağlantı anlaşması düzenler. Süreç genellikle 2-6 hafta sürer. Orta gerilim bağlantısındaki tesisler için yeniden sözleşme trafo boyutlandırma gereksinimlerini ve koruma ayarlarını da etkileyebilir. Sözleşme revizyonunun zamanlaması, yüksek talep üretim döneminden hemen önce düşük sözleşme imzalamamak için mevsimsel talep piklerini dikkate almalıdır." },
        { heading: "Toplam faturaya birleşik etki", content: "Çoğu sanayi tesisinde reaktif ceza ve talep yükü optimizasyonu birlikte, herhangi bir üretim süreci değişikliği ve önemli sermaye yatırımı yapılmadan aylık elektrik faturasını yüzde sekiz ile yirmi arasında azaltabilir. Reaktif ceza, kompanzasyon düzeltmesiyle giderilir. Talep yükü, sözleşme revizyonuyla giderilir. En büyük tek kalem olan enerji tarife bileşeni, serbest piyasa uygunluğu incelemesi ve süreç esnekliğine izin verdiği yerlerde zaman dilimine bağlı yük kaydırmayla daha da ele alınabilir." }
      ],
      faqs: [
        { question: "Yeniden sözleşme ne zaman yürürlüğe girer?", answer: "Yeni sözleşme güç düzeyi genellikle başvurudan 2-6 hafta sonra olan dağıtım işleticisinin resmi onayının ardından fatura döneminde geçerli olur." },
        { question: "Sözleşme gücü birden fazla kez değiştirilebilir mi?", answer: "Evet, ancak dağıtım işleticileri değişiklikler arasında asgari süre uygulayabilir. Analiz, öngörülebilir üretim planı için uygun kalacak bir düzeyi tespit etmelidir." }
      ]
    },
    {
      slug: "cati-ges-fizibilite-sanayi-tesisleri",
      title: "Sanayi Tesisleri İçin Çatı GES Fizibilite: Rakamlar Gerçekte Ne Gösteriyor",
      description: "Gerçekçi öz tüketim modellemesi, geri ödeme analizi ve şebeke bağlantı kısıtlarıyla fabrikalar ve ticari binalar için çatı güneş enerjisi fizibilite değerlendirmesi.",
      category: "GES",
      categorySlug: "ges",
      date: "2026-06-13",
      readingTime: "9 dk",
      toc: ["Çatı GES'in finansal açıdan mantıklı olduğu durumlar", "Öz tüketim oranı temel değişkendir", "Çatı değerlendirmesi ve yapısal konular", "Şebeke bağlantısı ve ihracat kısıtları", "Finansal model doğrulama"],
      related: ["elektrik-faturasi-analizi-rehberi", "reaktif-ceza-analizi-kompanzasyon-sistemi"],
      serviceLinks: ["endustriyel-enerji-maliyet-optimizasyonu", "ges-danismanligi"],
      body: [
        { heading: "Çatı GES'in finansal açıdan mantıklı olduğu durumlar", content: "Çatı GES, yüksek gündüz elektrik tüketimi, geniş çatı alanı ve yüksek şebeke elektrik fiyatlarının bir araya geldiği tesisler için en fazla finansal anlam taşır. Bu üç faktörün kombinasyonu öz tüketim oranını belirler: üretilen güneş enerjisinin ihraç yerine doğrudan tüketilen yüzdesi. 07:00-23:00 arası iki vardiya çalışan, aylık 500 MWh tüketen ve 2.000 metrekare güneye bakan gölgesiz çatı alanına sahip tesis güçlü bir adaydır. Yalnızca gece vardiyası çalışan veya güneş üretiminin düşük olduğu kış aylarında pik tüketimi olan tesis çok daha zayıf bir finansal gösterecektir." },
        { heading: "Öz tüketim oranı temel değişkendir", content: "Öz tüketim, çatı GES projesinin finansal motorudur. Öz tüketilen her kWh elektrik tarife fiyatını tasarruf ettirir. Şebekeye ihraç edilen her kWh ise perakende tarifenin genellikle yüzde otuz ile ellisi oranında çok daha düşük ödeme almaktadır. Tesisin gündüz tüketimine göre fazla boyutlandırılmış sistem yüksek ihracat oranı ve daha zayıf finansal getiri üretir. Fizibilite analizi, önerilen sistem boyutunda öz tüketim oranını belirlemek üzere saatlik tüketimi ve saatlik güneş üretimini tam bir yıl boyunca birlikte modellemelidir." },
        { heading: "Çatı değerlendirmesi ve yapısal konular", content: "Çatı alanı, yapısal kapasite, yönelim, eğim, çevre binalardan veya çatı ekipmanından gölgelenme ve bakım için erişimin tümü sistem boyutlandırmasından önce değerlendirilmelidir. Düz çatılar kurulum maliyetini artıran montaj yapıları gerektirir. Klima üniteleri, aydınlatma kubbeleri, havalandırma ekipmanı veya köprülü vinçlere sahip çatılar brüt çatı izinden çok daha az kullanılabilir alana sahip olabilir. Eski binalarda modül ve taşıyıcı ağırlığından gelen yapısal yükleme bir inşaat mühendisi tarafından onaylanmalıdır." },
        { heading: "Şebeke bağlantısı ve ihracat kısıtları", content: "Dağıtım işleticisi, tesisin bağlantı noktasında çatı sisteminin şebekeye enjekte edebileceği ihracat güç düzeyine sınır koyabilir. Yüksek GES penetrasyonlu bölgelerde bu sınırlar kurulu kapasitenin çok altında belirlenebilir; pik üretim saatlerinde kısıntıya yol açar ve verimi düşürür. Fizibilite modeli sınırsız şebeke enjeksiyonu varsaymak yerine gerçek ihracat limitlerini yansıtmalıdır. Bazı durumlarda sıfır ihracat kontrol sistemi kurulumu en pratik çözümdür; sistem gerçek gündüz tüketimiyle eşleşecek şekilde boyutlandırılmalıdır." },
        { heading: "Finansal model doğrulama", content: "Sağlam bir çatı GES finansal modeli şunları kullanmalıdır: gerçek tüketim verisi, doğrulanmış meteorolojik veri setlerinden sahaya özgü güneş verimi, gerçekçi bozunma oranları, gerçek kurulum maliyet teklifleri, bakım maliyet payı, invertör değiştirme karşılığı ve saatlik profil analizine dayalı ihtiyatlı öz tüketim oranı. Yüzde yüz öz tüketim varsayan veya belirli sahaya kalibre edilmemiş varsayılan ışınım değerleri kullanan genel online hesaplayıcı sonuçları finansal getiriyi abartacaktır. Doğrulanmış modelden tahmin edilen geri ödeme süresi, 2026 yılı Türkiye elektrik fiyatlarında uygun sanayi tesisleri için genellikle 4-8 yıldır." }
      ],
      faqs: [
        { question: "Sanayi tesisi için tipik çatı GES boyutu nedir?", answer: "Sanayi çatı sistemleri kullanılabilir çatı alanına ve gündüz tüketimine bağlı olarak genellikle 100 kWp ile 1.500 kWp arasındadır. Optimum boyut kurulabilir maksimum kapasite değil öz tüketim analizi tarafından belirlenir." },
        { question: "Çatı GES reaktif güç cezalarını etkiler mi?", answer: "Evet, dolaylı olarak. Güneş üretimi gündüz saatlerinde şebekeden çekilen aktif gücü azaltır; bu da sayaçta ölçülen reaktif-aktif oranını etkiler. Güneş kurulumu sonrası güç faktörü hedefinin karşılanmasını sağlamak üzere kompanzasyon sistemi yeniden değerlendirilmelidir." }
      ]
    },
    {
      slug: "fabrikalarda-elektrik-maliyeti-dusurme",
      title: "Fabrikalar Üretim Riski Olmadan Elektrik Maliyetini Nasıl Düşürür",
      description: "Sanayi tesisleri için fatura analizi, kompanzasyon, talep yönetimi ve güneş enerjisi fizibilite aracılığıyla elektrik maliyet azaltmayı tespit etme, önceliklendirme ve uygulama rehberi.",
      category: "Enerji Maliyeti",
      categorySlug: "enerji-maliyeti",
      date: "2026-06-14",
      readingTime: "8 dk",
      toc: ["Ekipmanla değil faturayla başlayın", "Üç kontrol edilebilir maliyet kolu", "Uygulama sırası ve takvim", "Dış uzmanlık gerektiren konular", "Kaçınılacak yaygın hatalar"],
      related: ["elektrik-faturasi-analizi-rehberi", "reaktif-ceza-analizi-kompanzasyon-sistemi", "cati-ges-fizibilite-sanayi-tesisleri"],
      serviceLinks: ["endustriyel-enerji-maliyet-optimizasyonu", "enerji-denetimi", "ges-danismanligi"],
      body: [
        { heading: "Ekipmanla değil faturayla başlayın", content: "Sanayi tesislerinin elektrik maliyetlerini azaltmaya çalışırken yaptığı en yaygın hata ekipman alımıyla başlamaktır. LED aydınlatma projeleri, kompresör yükseltmeleri ve motor verimlilik programları çoğunlukla enerji tasarrufu önlemi olarak sunulur; ancak bunlar aktif enerji tüketimi bileşenini ele alır, faturanın zaten en rekabetçi kısmını. Genellikle en hızlı geri ödemeyi sunan bileşenler ceza ve ücret kalemleridir: reaktif cezalar, aşım talep ücretleri ve sözleşme gücü uyumsuzluğu. Bunlar çoğu zaman hiç ekipman alımı yapılmadan veya 18 ayın altında geri ödeyen hedefli yatırımlarla giderilebilir." },
        { heading: "Üç kontrol edilebilir maliyet kolu", content: "Çoğu sanayi tesisi için elektrik maliyet azaltma üç koldan gelir: reaktif güç yönetimi, talep yükü optimizasyonu ve tarife ya da piyasa erişimi optimizasyonu. Reaktif güç yönetimi, doğru kompanzasyon sistemi tasarımı ve bakımıyla reaktif cezaları ortadan kaldırmak veya önemli ölçüde azaltmak anlamına gelir. Talep yükü optimizasyonu, sözleşme güç düzeyini gerçek pik talep düzeniyle uyumlandırmak demektir. Tarife optimizasyonu, serbest piyasa arzının, zaman dilimine bağlı yük kaydırmanın veya farklı bir dağıtım tarife yapısının karma maliyeti düşürüp düşürmeyeceğini değerlendirmektir. Çatı GES, aktif enerji maliyetini azaltabilen dördüncü bir koldur; ancak ilk üçten daha fazla sermaye ve daha uzun planlama ufku gerektirir." },
        { heading: "Uygulama sırası ve takvim", content: "Doğru sıra önce analiz, sonra eylemdir. Birinci ay: 12 aylık fatura, talep profili verisi ve sayaç kayıtlarını toplayın. İkinci ay: fatura ayrıştırmasını tamamlayın ve en büyük kontrol edilebilir maliyet kalemlerini tespit edin. Üçüncü ve dördüncü ay: reaktif cezalar için kompanzasyon sistemini inceleyin ve düzeltme için teknik özellik hazırlayın; talep yükleri için yeniden sözleşme başvurusunu hazırlayın. Beşinci ila sekizinci ay: kompanzasyon düzeltmesini uygulayın ve yeniden sözleşmeyi tamamlayın. Altıncı ila on ikinci ay: tüketim profili ve çatı alanı uygunsa çatı GES fizibilite değerlendirmesi yapın." },
        { heading: "Dış uzmanlık gerektiren konular", content: "Fatura analizi ve talep profili çalışması, tesisin aralık sayaç verisine erişimi ve analiz için zamanı olan personeli varsa dahili olarak yapılabilir. Kompanzasyon sistemi değerlendirmesi, güç kalitesi ve harmonikler konusunda bilgili bir elektrik mühendisi gerektirir; harmonik ortamda yanlış boyutlandırma yeni sorunlara yol açabilir. Güneş için şebeke bağlantısı incelemesi, yerel dağıtım işleticisi gereksinimlerinin bilgisini gerektirir. Çatı GES finansal modellemesi, genel tahminler değil sahaya özgü verim verisini gerektirir. Dış uzmanlık, problemi doğru tanımlamak ve en pahalı olanı sonradan düzeltmekten kaçınmak için en değerlidir." },
        { heading: "Kaçınılacak yaygın hatalar", content: "Sanayi elektrik maliyet azaltmadaki en yaygın hatalar şunlardır: harmonik ortamı kontrol etmeden yalnızca reaktif cezaya dayanarak kompanzasyon panosu satın almak; yeterli talep boşluğu analizi yapmadan daha düşük güç düzeyine yeniden sözleşme yapmak; çatı GES sistemini öz tüketim yerine maksimum kurulu kapasiteye göre boyutlandırmak; ve yapısal ceza ile ücret kalemlerini ele almadan enerji verimliliği önlemlerini uygulamak. Her biri ya beklenen tasarrufları gerçekleştirmez ya da yeni operasyonel sorunlar yaratır. En güvenli yaklaşım, herhangi bir tedarik kararından önce yapılandırılmış analiz ve bağımsız teknik incelemedir." }
      ],
      faqs: [
        { question: "Elektrik maliyet azaltmalar faturada ne zaman görünür?", answer: "Reaktif ceza azaltmaları ve talep yükü düzeltmeleri genellikle teknik düzeltmenin uygulandığı tarihten sonraki ilk tam fatura döneminde görünür." },
        { question: "Maliyet azaltma önlemleri uygulamadan önce enerji denetimi gerekli midir?", answer: "Resmi enerji denetimi her zaman gerekli değildir; ancak doğru sorunların doğru sırayla ele alınmasını sağlamak için yapılandırılmış fatura analizi ve kompanzasyon ile sayaç sistemlerinin teknik incelemesi şarttır." }
      ]
    }
  ]
};

const longFormTopics = {
  en: [
    ["hydropower-plant-commissioning-procedures", "Hydropower Plant Commissioning Procedures", "A field-oriented guide to HPP commissioning gates, test evidence, synchronization, governor response, AVR behavior and owner-side handover control.", "Commissioning", "commissioning", ["HPP commissioning", "governor response", "handover evidence"], ["power-plant-commissioning", "hydropower-consulting", "owners-engineering"]],
    ["common-hpp-operational-problems", "Common HPP Operational Problems", "Technical review of recurring hydropower operating problems including nuisance trips, cooling limits, sediment effects, auxiliary failures and weak alarm discipline.", "Hydropower", "hydropower", ["HPP operations", "availability", "O&M"], ["hydropower-consulting", "om-performance-improvement", "energy-audit"]],
    ["solar-plant-performance-optimization", "Solar Plant Performance Optimization", "Expert guide to solar PV performance recovery using PR analysis, inverter event review, string testing, soiling logic and O&M response improvement.", "Solar", "solar", ["solar PR", "PV optimization", "technical audit"], ["solar-energy-consulting", "energy-audit", "om-performance-improvement"]],
    ["epc-technical-due-diligence", "EPC Technical Due Diligence", "How owners and investors should review EPC scope, design evidence, interface risk, commissioning readiness and handover quality before committing capital.", "EPC", "epc", ["EPC due diligence", "owner engineering", "technical advisory"], ["epc-technical-advisory", "owners-engineering", "renewable-energy-investment-advisory"]],
    ["power-plant-operational-readiness", "Power Plant Operational Readiness", "A practical owner-side framework for confirming people, procedures, documentation, grid interface and reliability evidence before commercial operation.", "Operations", "operations", ["operational readiness", "commissioning", "O&M"], ["power-plant-commissioning", "owners-engineering", "om-performance-improvement"]],
    ["turbine-efficiency-loss-analysis", "Turbine Efficiency Loss Analysis", "How hydropower owners can diagnose turbine efficiency loss through water-to-wire evidence, operating points, vibration, cavitation and outage history.", "Hydropower", "hydropower", ["turbine efficiency", "water-to-wire", "HPP audit"], ["hydropower-consulting", "hydropower-plant-optimization", "energy-audit"]],
    ["agc-and-grid-stability", "AGC and Grid Stability", "Engineering perspective on AGC-compatible operation, governor response, reactive power control, AVR behavior and grid stability evidence for renewable plants.", "Grid", "grid", ["AGC", "grid stability", "reactive power"], ["grid-protection-system-analysis", "power-plant-commissioning", "om-performance-improvement"]],
    ["renewable-energy-investment-risks", "Renewable Energy Investment Risks", "Technical investment risk guide for renewable energy assets covering EPC evidence, production assumptions, grid constraints, O&M maturity and CAPEX exposure.", "Investment", "investment", ["investment risk", "technical due diligence", "renewable energy"], ["renewable-energy-investment-advisory", "energy-audit", "epc-technical-advisory"]]
  ],
  tr: [
    ["hes-devreye-alma-prosedurleri", "HES Devreye Alma Prosedurleri", "HES devreye alma kapilari, test kanitlari, senkronizasyon, governor tepkisi, AVR davranisi ve isveren tarafi teslim kontrolu icin saha odakli rehber.", "Devreye Alma", "devreye-alma", ["HES devreye alma", "governor tepkisi", "teslim kaniti"], ["enerji-santrali-devreye-alma", "hes-danismanligi", "isveren-muhendisligi"]],
    ["yaygin-hes-isletme-problemleri", "Yaygin HES Isletme Problemleri", "Gereksiz tripler, sogutma limitleri, sediment etkisi, yardimci sistem arizalari ve zayif alarm disiplini dahil HES isletme problemlerinin teknik incelemesi.", "HES", "hes", ["HES isletme", "emre amadelik", "O&M"], ["hes-danismanligi", "isletme-bakim-performans-iyilestirme", "enerji-denetimi"]],
    ["ges-performans-optimizasyonu", "GES Performans Optimizasyonu", "PR analizi, inverter olay incelemesi, string testi, kirlenme mantigi ve O&M yanit iyilestirmesi ile GES performans toparlama rehberi.", "GES", "ges", ["GES PR", "PV optimizasyon", "teknik denetim"], ["gunes-enerjisi-danismanligi", "enerji-denetimi", "isletme-bakim-performans-iyilestirme"]],
    ["epc-teknik-due-diligence", "EPC Teknik Due Diligence", "Sermaye karari oncesinde EPC kapsam, tasarim kaniti, arayuz riski, devreye alma hazirligi ve teslim kalitesinin nasil incelenecegi.", "EPC", "epc", ["EPC due diligence", "isveren muhendisligi", "teknik danismanlik"], ["epc-teknik-danismanlik-hizmeti", "isveren-muhendisligi", "yenilenebilir-enerji-yatirim-danismanligi"]],
    ["enerji-santrali-operasyonel-hazirlik", "Enerji Santrali Operasyonel Hazirlik", "Ticari isletme oncesinde insan, prosedur, dokumantasyon, sebeke arayuzu ve guvenilirlik kanitinin dogrulanmasi icin pratik cerceve.", "Isletme", "isletme", ["operasyonel hazirlik", "devreye alma", "O&M"], ["enerji-santrali-devreye-alma", "isveren-muhendisligi", "isletme-bakim-performans-iyilestirme"]],
    ["turbin-verim-kaybi-analizi", "Turbin Verim Kaybi Analizi", "HES sahipleri icin su-guc kaniti, isletme noktalari, vibrasyon, kavitasyon ve durus gecmisi ile turbin verim kaybi teshisi.", "HES", "hes", ["turbin verimi", "su-guc", "HES denetim"], ["hes-danismanligi", "hes-optimizasyonu", "enerji-denetimi"]],
    ["agc-ve-sebeke-kararliligi", "AGC ve Sebeke Kararliligi", "AGC uyumlu isletme, governor tepkisi, reaktif guc kontrolu, AVR davranisi ve yenilenebilir santrallerde sebeke kararliligi kaniti.", "Sebeke", "sebeke", ["AGC", "sebeke kararliligi", "reaktif guc"], ["sebeke-koruma-sistemi-analizi", "enerji-santrali-devreye-alma", "isletme-bakim-performans-iyilestirme"]],
    ["yenilenebilir-enerji-yatirim-riskleri", "Yenilenebilir Enerji Yatirim Riskleri", "EPC kaniti, uretim varsayimlari, sebeke kisitlari, O&M olgunlugu ve CAPEX maruziyeti dahil yenilenebilir enerji teknik yatirim riski rehberi.", "Yatirim", "yatirim", ["yatirim riski", "teknik due diligence", "yenilenebilir enerji"], ["yenilenebilir-enerji-yatirim-danismanligi", "enerji-denetimi", "epc-teknik-danismanlik-hizmeti"]]
  ]
} as const;

function buildAuthorityArticle(locale: Locale, topic: (typeof longFormTopics)[Locale][number], index: number): BlogPost {
  const [slug, title, description, category, categorySlug, tags, serviceLinks] = topic;
  const en = locale === "en";
  const toc = en
    ? ["Operating context", "Engineering evidence", "Field problems", "Recommended actions", "Owner decision value"]
    : ["Isletme baglami", "Muhendislik kaniti", "Saha problemleri", "Onerilen aksiyonlar", "Isveren karar degeri"];
  return {
    slug,
    title,
    description,
    category,
    categorySlug,
    tags: [...tags],
    author: en ? "Oztoprak Energy engineering desk" : "Oztoprak Enerji muhendislik masasi",
    featured: index === 0,
    trending: index < 3,
    date: `2026-06-${String(index + 1).padStart(2, "0")}`,
    readingTime: en ? "18 min" : "18 dk",
    toc,
    related: longFormTopics[locale].filter((item) => item[0] !== slug).slice(0, 3).map((item) => item[0]),
    serviceLinks: [...serviceLinks],
    body: toc.map((heading, sectionIndex) => ({
      heading,
      content: en
        ? `${title} should be evaluated as a decision system, not as a checklist. In real renewable power plants, the useful answer comes from connecting EPC records, commissioning evidence, SCADA trends, protection files, O&M logs, operator routines and commercial deadlines. Section ${sectionIndex + 1} focuses on how an experienced consultant turns those inputs into a practical owner-side recommendation. The analysis considers availability, generation loss, grid compliance, reactive power behavior, governor or inverter response, outage planning, CAPEX exposure and the quality of evidence available for future audits or warranty discussions.`
        : `${title} bir kontrol listesi degil, karar sistemi olarak degerlendirilmelidir. Gercek yenilenebilir enerji santrallerinde faydali cevap; EPC kayitlari, devreye alma kanitlari, SCADA trendleri, koruma dosyalari, O&M loglari, operator rutinleri ve ticari takvim arasindaki bagdan gelir. ${sectionIndex + 1}. bolum, deneyimli bir danismanin bu girdileri nasil uygulanabilir isveren tarafi onerisine donusturdugunu aciklar. Analiz emre amadelik, uretim kaybi, sebeke uyumu, reaktif guc davranisi, governor veya inverter tepkisi, durus planlama, CAPEX maruziyeti ve gelecekteki denetim veya garanti gorusmeleri icin kanit kalitesini dikkate alir.`
    })),
    faqs: [
      {
        question: en ? `Who should read ${title}?` : `${title} kimler icin uygundur?`,
        answer: en
          ? "Owners, EPC teams, investors and O&M managers who need technically defensible decisions before commissioning, acquisition, audit or performance recovery work."
          : "Devreye alma, satin alma, denetim veya performans toparlama oncesinde teknik olarak savunulabilir karar isteyen isverenler, EPC ekipleri, yatirimcilar ve O&M yoneticileri icin uygundur."
      },
      {
        question: en ? "What evidence is most important?" : "En onemli kanit nedir?",
        answer: en
          ? "The strongest evidence combines site observations, operating data, commissioning records, grid/protection files and clear ownership of unresolved risks."
          : "En guclu kanit; saha gozlemleri, isletme verisi, devreye alma kayitlari, sebeke/koruma dosyalari ve acik risklerin net sorumlulugunu birlikte gosterir."
      }
    ]
  };
}

blogPosts.en.push(...longFormTopics.en.map((topic, index) => buildAuthorityArticle("en", topic, index)));
blogPosts.tr.push(...longFormTopics.tr.map((topic, index) => buildAuthorityArticle("tr", topic, index)));

type AuthorityTopic = {
  enSlug: string;
  trSlug: string;
  enTitle: string;
  trTitle: string;
  enDescription: string;
  trDescription: string;
  category: string;
  categorySlug: string;
  enServices: string[];
  trServices: string[];
  focus: string;
  equipment: string;
  risk: string;
};

const authorityTopics: AuthorityTopic[] = [
  {
    enSlug: "hydropower-consulting-field-guide",
    trSlug: "hes-danismanligi-saha-rehberi",
    enTitle: "Hydropower Consulting Field Guide for Owners and Investors",
    trTitle: "HES Danismanligi Saha Rehberi: Isveren ve Yatirimci Icin Teknik Yol Haritasi",
    enDescription: "A deep engineering guide to hydropower consulting, technical audits, commissioning evidence, turbine performance and owner-side decision control.",
    trDescription: "HES danismanligi, teknik denetim, devreye alma kaniti, turbin performansi ve isveren tarafi karar kontrolu icin kapsamli muhendislik rehberi.",
    category: "HES",
    categorySlug: "hes",
    enServices: ["hydropower-consulting", "technical-audits-existing-power-plants", "om-performance-improvement"],
    trServices: ["hes-danismanligi", "mevcut-santraller-icin-teknik-denetim", "isletme-bakim-performans-iyilestirme"],
    focus: "HES danismanligi",
    equipment: "Francis, Kaplan veya Pelton turbin-jenerator grubu",
    risk: "su-guc verim kaybi, gereksiz tripler ve eksik isletme kaniti"
  },
  {
    enSlug: "solar-energy-consulting-performance-guide",
    trSlug: "ges-danismanligi-performans-rehberi",
    enTitle: "Solar Energy Consulting Performance Guide for PV Investors",
    trTitle: "GES Danismanligi Performans Rehberi: PV Yatirimcilari Icin Teknik Kontrol",
    enDescription: "How solar energy consulting should review PR loss, inverter evidence, EPC handover quality, O&M response and technical audit priorities.",
    trDescription: "GES danismanligi kapsaminda PR kaybi, inverter kaniti, EPC teslim kalitesi, O&M yaniti ve teknik denetim oncelikleri nasil incelenir?",
    category: "GES",
    categorySlug: "ges",
    enServices: ["solar-energy-consulting", "energy-audit", "om-performance-improvement"],
    trServices: ["gunes-enerjisi-danismanligi", "enerji-denetimi", "isletme-bakim-performans-iyilestirme"],
    focus: "GES danismanligi",
    equipment: "inverter, string, trafo, meteoroloji ve SCADA olcum zinciri",
    risk: "dusuk performans orani, kirlenme kaybi ve gec ariza mudahalesi"
  },
  {
    enSlug: "epc-consulting-owner-side-control",
    trSlug: "epc-danismanligi-isveren-tarafi-kontrol",
    enTitle: "EPC Consulting for Owner-Side Technical Control",
    trTitle: "EPC Danismanligi: Isveren Tarafi Teknik Kontrol ve Risk Yonetimi",
    enDescription: "Owner-side EPC consulting framework for interface control, design review, commissioning readiness and evidence-based contractor management.",
    trDescription: "EPC danismanligi ile arayuz kontrolu, tasarim inceleme, devreye alma hazirligi ve kanita dayali yuklenici yonetimi.",
    category: "EPC",
    categorySlug: "epc",
    enServices: ["epc-technical-advisory", "owners-engineering", "power-plant-commissioning"],
    trServices: ["epc-teknik-danismanlik-hizmeti", "isveren-muhendisligi", "enerji-santrali-devreye-alma"],
    focus: "EPC danismanligi",
    equipment: "insaat, elektromekanik, otomasyon, koruma ve sebeke arayuzleri",
    risk: "gecikme, kapsam boslugu, teslim kaniti eksigi ve claim riski"
  },
  {
    enSlug: "technical-audit-power-plant-evidence",
    trSlug: "teknik-denetim-santral-kanit-yonetimi",
    enTitle: "Technical Audit Evidence for Existing Power Plants",
    trTitle: "Teknik Denetim: Mevcut Santrallerde Kanit ve Risk Yonetimi",
    enDescription: "Technical audit methodology for existing hydropower and solar assets using operating records, commissioning files, site evidence and risk ranking.",
    trDescription: "Teknik denetim metodolojisi: mevcut HES ve GES varliklarinda isletme kaydi, devreye alma dosyasi, saha kaniti ve risk siralamasi.",
    category: "Teknik Denetim",
    categorySlug: "teknik-denetim",
    enServices: ["technical-audits-existing-power-plants", "energy-audit", "renewable-energy-investment-advisory"],
    trServices: ["mevcut-santraller-icin-teknik-denetim", "enerji-denetimi", "yenilenebilir-enerji-yatirim-danismanligi"],
    focus: "Teknik denetim",
    equipment: "primer ekipman, yardimci sistemler, koruma, SCADA ve O&M dokumantasyonu",
    risk: "gizli CAPEX ihtiyaci, garanti belirsizligi ve yatirim riski"
  },
  {
    enSlug: "commissioning-services-renewable-power-plants",
    trSlug: "devreye-alma-hizmetleri-yenilenebilir-santraller",
    enTitle: "Commissioning Services for Renewable Power Plants",
    trTitle: "Devreye Alma Hizmetleri: Yenilenebilir Enerji Santrallerinde Kontrollu Baslangic",
    enDescription: "Commissioning services guide covering energization, functional tests, synchronization, protection files, punch-list discipline and handover evidence.",
    trDescription: "Devreye alma hizmetleri rehberi: enerjilendirme, fonksiyonel test, senkronizasyon, koruma dosyalari, punch-list disiplini ve teslim kaniti.",
    category: "Devreye Alma",
    categorySlug: "devreye-alma",
    enServices: ["power-plant-commissioning", "owners-engineering", "grid-protection-system-analysis"],
    trServices: ["enerji-santrali-devreye-alma", "isveren-muhendisligi", "sebeke-koruma-sistemi-analizi"],
    focus: "Devreye alma",
    equipment: "kesici, role, governor, AVR, SCADA, yardimci sistem ve trafo adalari",
    risk: "erken enerjilendirme, eksik test ve operasyonel hazirlik zafiyeti"
  },
  {
    enSlug: "power-plant-performance-analysis-methodology",
    trSlug: "santral-performans-analizi-metodolojisi",
    enTitle: "Power Plant Performance Analysis Methodology",
    trTitle: "Santral Performans Analizi Metodolojisi: Uretim Kaybini Kanitla Okumak",
    enDescription: "Performance analysis methodology for hydropower and solar plants using loss categories, SCADA trends, O&M events and corrective action ranking.",
    trDescription: "Santral performans analizi metodolojisi: HES ve GES varliklarinda kayip kategorisi, SCADA trendi, O&M olayi ve aksiyon onceligi.",
    category: "Performans",
    categorySlug: "performans",
    enServices: ["om-performance-improvement", "energy-audit", "hydropower-consulting"],
    trServices: ["isletme-bakim-performans-iyilestirme", "enerji-denetimi", "hes-danismanligi"],
    focus: "Performans analizi",
    equipment: "uretim sayaclari, SCADA trendleri, inverter veya turbin kontrol sistemi",
    risk: "gelir kaybi, dusuk emre amadelik ve yanlis bakim onceligi"
  },
  {
    enSlug: "renewable-energy-investment-consulting-due-diligence",
    trSlug: "enerji-yatirim-danismanligi-teknik-due-diligence",
    enTitle: "Renewable Energy Investment Consulting and Technical Due Diligence",
    trTitle: "Enerji Yatirim Danismanligi: Teknik Due Diligence ve Varlik Riski",
    enDescription: "Investment consulting framework for renewable energy assets covering EPC evidence, performance assumptions, grid risk, O&M maturity and CAPEX exposure.",
    trDescription: "Enerji yatirim danismanligi cercevesi: EPC kaniti, performans varsayimi, sebeke riski, O&M olgunlugu ve CAPEX maruziyeti.",
    category: "Yatirim",
    categorySlug: "yatirim",
    enServices: ["renewable-energy-investment-advisory", "technical-audits-existing-power-plants", "epc-technical-advisory"],
    trServices: ["yenilenebilir-enerji-yatirim-danismanligi", "mevcut-santraller-icin-teknik-denetim", "epc-teknik-danismanlik-hizmeti"],
    focus: "Enerji yatirim danismanligi",
    equipment: "finansal model varsayimlari, uretim raporlari, teknik varlik dosyasi ve lisans-saha kanitlari",
    risk: "fazla iyimser uretim tahmini, gizli teknik borc ve yatirim deger kaybi"
  },
  {
    enSlug: "agc-compliance-consulting-hydropower",
    trSlug: "agc-uyumu-danismanligi-hes-isletme",
    enTitle: "AGC Compliance Consulting for Hydropower Operations",
    trTitle: "AGC Uyumu Danismanligi: HES Isletmede Governor Tepkisi ve Sebeke Kararliligi",
    enDescription: "AGC compliance guide for hydropower plants covering governor response, setpoint tracking, ramp behavior, reactive power and grid stability evidence.",
    trDescription: "AGC uyumu rehberi: HES isletmede governor tepkisi, set noktasi takibi, rampa davranisi, reaktif guc ve sebeke kararliligi kaniti.",
    category: "Sebeke",
    categorySlug: "sebeke",
    enServices: ["grid-protection-system-analysis", "power-plant-commissioning", "om-performance-improvement"],
    trServices: ["sebeke-koruma-sistemi-analizi", "enerji-santrali-devreye-alma", "isletme-bakim-performans-iyilestirme"],
    focus: "AGC uyumu",
    equipment: "governor, AVR, SCADA, telemetri, primer ve sekonder frekans kontrolu",
    risk: "set noktasi sapmasi, frekans kontrol zafiyeti ve sebeke uyum riski"
  },
  {
    enSlug: "kaplan-turbine-consulting-efficiency-loss",
    trSlug: "kaplan-turbin-danismanligi-verim-kaybi",
    enTitle: "Kaplan Turbine Consulting for Efficiency Loss and Availability",
    trTitle: "Kaplan Turbin Danismanligi: Verim Kaybi, Kanat Ayari ve Emre Amadelik",
    enDescription: "Kaplan turbine consulting guide for blade pitch behavior, hydraulic efficiency, vibration evidence, governor response and O&M priorities.",
    trDescription: "Kaplan turbin danismanligi rehberi: kanat ayari davranisi, hidrolik verim, vibrasyon kaniti, governor tepkisi ve O&M oncelikleri.",
    category: "HES",
    categorySlug: "hes",
    enServices: ["hydropower-consulting", "hydropower-plant-optimization", "energy-audit"],
    trServices: ["hes-danismanligi", "hes-optimizasyonu", "enerji-denetimi"],
    focus: "Kaplan turbin",
    equipment: "Kaplan runner, kanat ayar mekanizmasi, yolluk, governor ve yatak sistemleri",
    risk: "kismi yuk verim kaybi, kanat mekanizmasi arizasi ve vibrasyon artisi"
  },
  {
    enSlug: "scada-optimization-power-plant-operations",
    trSlug: "scada-optimizasyonu-santral-isletme",
    enTitle: "SCADA Optimization for Power Plant Operations",
    trTitle: "SCADA Optimizasyonu: Santral Isletmede Alarm, Trend ve Karar Kalitesi",
    enDescription: "SCADA optimization guide for alarm discipline, trend quality, event records, O&M response and power plant performance decisions.",
    trDescription: "SCADA optimizasyonu rehberi: alarm disiplini, trend kalitesi, olay kaydi, O&M yaniti ve santral performans kararlari.",
    category: "SCADA",
    categorySlug: "scada",
    enServices: ["om-performance-improvement", "grid-protection-system-analysis", "energy-audit"],
    trServices: ["isletme-bakim-performans-iyilestirme", "sebeke-koruma-sistemi-analizi", "enerji-denetimi"],
    focus: "SCADA optimizasyonu",
    equipment: "SCADA tag yapisi, alarm siniflandirmasi, olay kaydi, historian ve raporlama ekranlari",
    risk: "alarm yorgunlugu, veri kalitesi zafiyeti ve gec ariza teshisi"
  },
  {
    enSlug: "francis-turbine-performance-diagnosis",
    trSlug: "francis-turbin-performans-teshisi",
    enTitle: "Francis Turbine Performance Diagnosis for Hydropower Plants",
    trTitle: "Francis Turbin Performans Teshisi: HES Danismanligi Icin Kanit Yaklasimi",
    enDescription: "Francis turbine diagnosis guide covering efficiency loss, cavitation, guide vane behavior, vibration, cooling limits and outage evidence.",
    trDescription: "Francis turbin teshis rehberi: verim kaybi, kavitasyon, ayar kanadi davranisi, vibrasyon, sogutma limiti ve durus kaniti.",
    category: "HES",
    categorySlug: "hes",
    enServices: ["hydropower-consulting", "technical-audits-existing-power-plants", "om-performance-improvement"],
    trServices: ["hes-danismanligi", "mevcut-santraller-icin-teknik-denetim", "isletme-bakim-performans-iyilestirme"],
    focus: "Francis turbin",
    equipment: "Francis runner, ayar kanatlari, salyangoz, draft tube, yatak ve sogutma sistemi",
    risk: "kavitasyon, verim dususu, sogutma limiti ve plansiz durus"
  },
  {
    enSlug: "primary-frequency-control-renewable-plants",
    trSlug: "primer-frekans-kontrolu-yenilenebilir-santraller",
    enTitle: "Primary Frequency Control in Renewable Power Plants",
    trTitle: "Primer Frekans Kontrolu: Yenilenebilir Santrallerde Tepki ve Kanit Yonetimi",
    enDescription: "Engineering guide to primary frequency control, governor or inverter response, droop behavior, testing evidence and grid compliance.",
    trDescription: "Primer frekans kontrolu icin muhendislik rehberi: governor veya inverter tepkisi, droop davranisi, test kaniti ve sebeke uyumu.",
    category: "Sebeke",
    categorySlug: "sebeke",
    enServices: ["grid-protection-system-analysis", "power-plant-commissioning", "owners-engineering"],
    trServices: ["sebeke-koruma-sistemi-analizi", "enerji-santrali-devreye-alma", "isveren-muhendisligi"],
    focus: "Primer frekans kontrolu",
    equipment: "governor droop, inverter kontrol modu, frekans olcum zinciri ve test kayitlari",
    risk: "uyum testi basarisizligi, grid kod riski ve kontrol kararsizligi"
  },
  {
    enSlug: "secondary-frequency-control-agc-readiness",
    trSlug: "sekonder-frekans-kontrolu-agc-hazirligi",
    enTitle: "Secondary Frequency Control and AGC Readiness",
    trTitle: "Sekonder Frekans Kontrolu ve AGC Hazirligi: Santral Kabul Kriterleri",
    enDescription: "Secondary frequency control and AGC readiness guide for renewable plants including telemetry, setpoint tracking, ramp tests and control room procedures.",
    trDescription: "Sekonder frekans kontrolu ve AGC hazirligi rehberi: telemetri, set noktasi takibi, rampa testi ve kumanda prosedurleri.",
    category: "Sebeke",
    categorySlug: "sebeke",
    enServices: ["grid-protection-system-analysis", "power-plant-commissioning", "om-performance-improvement"],
    trServices: ["sebeke-koruma-sistemi-analizi", "enerji-santrali-devreye-alma", "isletme-bakim-performans-iyilestirme"],
    focus: "Sekonder frekans kontrolu",
    equipment: "AGC baglantisi, telemetri, setpoint tracking, SCADA ve kontrol odasi rutini",
    risk: "AGC komut takibi zafiyeti, rampa siniri ve operasyonel kabul riski"
  },
  {
    enSlug: "solar-plant-technical-audit-checklist",
    trSlug: "ges-teknik-denetim-kontrol-listesi",
    enTitle: "Solar Plant Technical Audit Checklist",
    trTitle: "GES Teknik Denetim Kontrol Listesi: PR, Inverter ve EPC Kaniti",
    enDescription: "Solar technical audit checklist for PR analysis, inverter logs, string evidence, EPC handover, O&M maturity and investment decisions.",
    trDescription: "GES teknik denetim kontrol listesi: PR analizi, inverter loglari, string kaniti, EPC teslimi, O&M olgunlugu ve yatirim kararlari.",
    category: "GES",
    categorySlug: "ges",
    enServices: ["solar-energy-consulting", "technical-audits-existing-power-plants", "renewable-energy-investment-advisory"],
    trServices: ["ges-danismanligi", "mevcut-santraller-icin-teknik-denetim", "yenilenebilir-enerji-yatirim-danismanligi"],
    focus: "GES teknik denetim",
    equipment: "modul, inverter, string, trafo, kamera, meteoroloji istasyonu ve izleme sistemi",
    risk: "eksik EPC kaniti, PR kaybi ve satin alma sonrasi CAPEX ihtiyaci"
  },
  {
    enSlug: "hpp-technical-audit-operating-assets",
    trSlug: "hes-teknik-denetim-isletmedeki-varliklar",
    enTitle: "HPP Technical Audit for Operating Hydropower Assets",
    trTitle: "HES Teknik Denetim: Isletmedeki Varliklarda Risk ve Performans",
    enDescription: "HPP technical audit guide for operating assets covering civil structures, turbine-generator evidence, protection records, O&M maturity and CAPEX ranking.",
    trDescription: "HES teknik denetim rehberi: isletmedeki varliklarda insaat yapilari, turbin-jenerator kaniti, koruma kayitlari, O&M olgunlugu ve CAPEX siralamasi.",
    category: "HES",
    categorySlug: "hes",
    enServices: ["technical-audits-existing-power-plants", "hydropower-consulting", "energy-audit"],
    trServices: ["mevcut-santraller-icin-teknik-denetim", "hes-danismanligi", "enerji-denetimi"],
    focus: "HES teknik denetim",
    equipment: "cebri boru, vana, turbin, generator, trafo, kesici ve koruma sistemi",
    risk: "yaslanan varlik riski, dokumantasyon boslugu ve plansiz CAPEX"
  },
  {
    enSlug: "epc-delay-risk-power-plant-projects",
    trSlug: "epc-gecikme-riski-enerji-santrali-projeleri",
    enTitle: "EPC Delay Risk in Power Plant Projects",
    trTitle: "EPC Gecikme Riski: Enerji Santrali Projelerinde Teknik Kokenler",
    enDescription: "Technical review of EPC delay risk in renewable power projects including interface gaps, late testing, grid documents and owner-side controls.",
    trDescription: "Yenilenebilir enerji projelerinde EPC gecikme riski: arayuz bosluklari, gec test, sebeke dokumanlari ve isveren tarafi kontroller.",
    category: "EPC",
    categorySlug: "epc",
    enServices: ["epc-technical-advisory", "power-plant-commissioning", "owners-engineering"],
    trServices: ["epc-teknik-danismanlik-hizmeti", "enerji-santrali-devreye-alma", "isveren-muhendisligi"],
    focus: "EPC gecikme riski",
    equipment: "proje takvimi, arayuz matrisi, test proseduru, koruma dosyasi ve kabul kriterleri",
    risk: "gec ticari isletme, gelir kaybi ve sozlesmesel uyusmazlik"
  },
  {
    enSlug: "reactive-power-control-renewable-plants",
    trSlug: "reaktif-guc-kontrolu-yenilenebilir-santraller",
    enTitle: "Reactive Power Control in Renewable Power Plants",
    trTitle: "Reaktif Guc Kontrolu: Yenilenebilir Santrallerde AVR, Inverter ve Sebeke Uyumu",
    enDescription: "Reactive power control guide for renewable plants covering AVR, inverter modes, voltage setpoints, transformer limits and compliance testing.",
    trDescription: "Reaktif guc kontrolu rehberi: AVR, inverter modlari, gerilim setleri, trafo limitleri ve sebeke uyum testi.",
    category: "Sebeke",
    categorySlug: "sebeke",
    enServices: ["grid-protection-system-analysis", "solar-energy-consulting", "power-plant-commissioning"],
    trServices: ["sebeke-koruma-sistemi-analizi", "gunes-enerjisi-danismanligi", "enerji-santrali-devreye-alma"],
    focus: "Reaktif guc kontrolu",
    equipment: "AVR, inverter Q kontrolu, trafo tap, gerilim regule modu ve sayaç olcumleri",
    risk: "gerilim uyumsuzlugu, ceza riski ve ekipman zorlanmasi"
  },
  {
    enSlug: "om-optimization-renewable-assets",
    trSlug: "om-optimizasyonu-yenilenebilir-enerji-varliklari",
    enTitle: "O&M Optimization for Renewable Energy Assets",
    trTitle: "O&M Optimizasyonu: Yenilenebilir Enerji Varliklarinda Emre Amadelik ve Kayip Azaltma",
    enDescription: "O&M optimization guide for renewable assets using alarms, outage history, maintenance planning, spare parts and performance recovery logic.",
    trDescription: "O&M optimizasyonu rehberi: alarm, durus gecmisi, bakim planlama, yedek parca ve performans toparlama mantigi.",
    category: "Isletme",
    categorySlug: "isletme",
    enServices: ["om-performance-improvement", "energy-audit", "technical-audits-existing-power-plants"],
    trServices: ["isletme-bakim-performans-iyilestirme", "enerji-denetimi", "mevcut-santraller-icin-teknik-denetim"],
    focus: "O&M optimizasyonu",
    equipment: "bakim planlari, alarm listeleri, yedek parca, ariza kaydi ve performans raporlari",
    risk: "tekrar eden ariza, dusuk emre amadelik ve uretim kaybi"
  },
  {
    enSlug: "owner-engineering-renewable-energy-projects",
    trSlug: "isveren-muhendisligi-yenilenebilir-enerji-projeleri",
    enTitle: "Owner's Engineering in Renewable Energy Projects",
    trTitle: "Isveren Muhendisligi: Yenilenebilir Enerji Projelerinde Bagimsiz Teknik Kontrol",
    enDescription: "Owner's engineering guide for renewable projects covering design review, EPC deliverables, commissioning evidence and investment decision support.",
    trDescription: "Isveren muhendisligi rehberi: tasarim inceleme, EPC teslimatlari, devreye alma kaniti ve yatirim karari destegi.",
    category: "EPC",
    categorySlug: "epc",
    enServices: ["owners-engineering", "epc-technical-advisory", "renewable-energy-investment-advisory"],
    trServices: ["isveren-muhendisligi", "epc-teknik-danismanlik-hizmeti", "yenilenebilir-enerji-yatirim-danismanligi"],
    focus: "Isveren muhendisligi",
    equipment: "tasarim dosyalari, EPC deliverable listesi, saha ilerleme kaniti ve kabul kriterleri",
    risk: "isveren gorunurlugu eksigi, zayif teknik itiraz ve teslim kalitesi riski"
  },
  {
    enSlug: "power-plant-fault-analysis-method",
    trSlug: "santral-ariza-analizi-metodu",
    enTitle: "Power Plant Fault Analysis Method for Owners",
    trTitle: "Santral Ariza Analizi Metodu: Koku Neden, SCADA ve Koruma Kaydi",
    enDescription: "Fault analysis method for renewable power plants using SCADA events, relay records, operator logs, maintenance history and corrective action ranking.",
    trDescription: "Santral ariza analizi metodu: SCADA olaylari, role kayitlari, operator loglari, bakim gecmisi ve duzeltici aksiyon siralamasi.",
    category: "Ariza Analizi",
    categorySlug: "ariza-analizi",
    enServices: ["om-performance-improvement", "grid-protection-system-analysis", "technical-audits-existing-power-plants"],
    trServices: ["isletme-bakim-performans-iyilestirme", "sebeke-koruma-sistemi-analizi", "mevcut-santraller-icin-teknik-denetim"],
    focus: "Ariza analizi",
    equipment: "SCADA olay sirasi, role kaydi, operator notu, bakim gecmisi ve ekipman testleri",
    risk: "tekrar eden ariza, yanlis koku neden ve gereksiz durus"
  },
  {
    enSlug: "renewable-energy-feasibility-technical-review",
    trSlug: "yenilenebilir-enerji-fizibilite-teknik-inceleme",
    enTitle: "Renewable Energy Feasibility Technical Review",
    trTitle: "Yenilenebilir Enerji Fizibilite Teknik Inceleme: Yatirim Kararindan Once Kanit",
    enDescription: "Feasibility technical review for renewable energy investments covering production assumptions, grid limits, EPC cost logic, O&M maturity and risk ranking.",
    trDescription: "Yenilenebilir enerji yatirimlari icin fizibilite teknik inceleme: uretim varsayimi, sebeke limiti, EPC maliyet mantigi, O&M olgunlugu ve risk siralamasi.",
    category: "Yatirim",
    categorySlug: "yatirim",
    enServices: ["renewable-energy-investment-advisory", "epc-technical-advisory", "energy-audit"],
    trServices: ["yenilenebilir-enerji-yatirim-danismanligi", "epc-teknik-danismanlik-hizmeti", "enerji-denetimi"],
    focus: "Enerji yatirim danismanligi",
    equipment: "fizibilite raporu, uretim modeli, grid baglanti gorusu, EPC teklifleri ve O&M varsayimlari",
    risk: "yatirim oncesi yanlis kabul, gelir sapmasi ve finansman riski"
  },
  {
    enSlug: "grid-protection-audit-renewable-plants",
    trSlug: "sebeke-koruma-denetimi-yenilenebilir-santraller",
    enTitle: "Grid and Protection Audit for Renewable Plants",
    trTitle: "Sebeke ve Koruma Denetimi: Yenilenebilir Santrallerde Acma Analizi",
    enDescription: "Grid and protection audit guide covering relay settings, event records, transformer constraints, breaker logic and compliance evidence.",
    trDescription: "Sebeke ve koruma denetimi rehberi: role ayarlari, olay kayitlari, trafo kisitlari, kesici mantigi ve uyum kaniti.",
    category: "Sebeke",
    categorySlug: "sebeke",
    enServices: ["grid-protection-system-analysis", "technical-audits-existing-power-plants", "power-plant-commissioning"],
    trServices: ["sebeke-koruma-sistemi-analizi", "mevcut-santraller-icin-teknik-denetim", "enerji-santrali-devreye-alma"],
    focus: "Teknik denetim",
    equipment: "koruma roleleri, kesici, trafo, bara, tek hat semasi ve olay kayit sistemi",
    risk: "gereksiz acma, koruma koordinasyon hatasi ve sebeke uyum sorunu"
  }
];

const authorityHeadings = {
  en: [
    "Why this topic matters for asset value",
    "Engineering evidence that must be reviewed",
    "Common field problems",
    "How the consultant separates facts from assumptions",
    "Case study example",
    "Recommended engineering actions",
    "Internal links for owner-side decisions",
    "When to request consultancy support"
  ],
  tr: [
    "Bu konu varlik degeri icin neden kritiktir",
    "Incelenmesi gereken muhendislik kanitlari",
    "Sahada sik gorulen problemler",
    "Danisman gercekleri varsayimlardan nasil ayirir",
    "Vaka ornegi",
    "Onerilen muhendislik aksiyonlari",
    "Isveren kararlari icin ic linkler",
    "Ne zaman danismanlik destegi alinmali"
  ]
} satisfies Record<Locale, string[]>;

function buildAuthoritySection(locale: Locale, topic: AuthorityTopic, heading: string, sectionIndex: number) {
  const en = locale === "en";
  if (en) {
    return `${topic.enTitle} should be handled as a structured engineering decision, not as a generic checklist. The consultant first defines the plant boundary, commercial decision, operating history and evidence quality. For this topic, the most important field context is ${topic.equipment}; the most common value risk is ${topic.risk}. A useful review connects design intent, EPC records, commissioning files, SCADA trends, protection settings, operator logs, outage history, maintenance routines and grid interface evidence. Section ${sectionIndex + 1} focuses on ${heading.toLowerCase()} and explains how an owner, EPC contractor or investor can turn incomplete site information into a defensible action plan. In practice, the strongest recommendations rank actions by safety, generation impact, grid compliance, outage requirement, CAPEX exposure, warranty relevance and implementation difficulty. A case example would compare the contractual acceptance evidence with real operating behavior, then identify whether the root issue is design, installation, control logic, O&M response, documentation quality or unresolved handover responsibility. The final output should link directly to consultancy services, define the next test or inspection, and make clear which risk can be accepted, monitored or corrected immediately. A senior review should also test the quality of the assumptions behind the numbers. For hydropower assets this may mean checking net head, tailwater influence, governor response, vibration history, cooling water reliability and reactive power capability under real dispatch conditions. For solar assets it can mean separating irradiation uncertainty from inverter clipping, string mismatch, soiling, transformer losses, availability losses and SCADA data gaps. In EPC advisory work, the same discipline applies to interface registers, design freezes, factory acceptance tests, method statements, protection coordination, energization permits and punch-list closure. The practical consulting value is not only to describe a problem, but to show the owner what can be measured next week, what must wait for an outage, what should be negotiated with the contractor, and what can be monitored through operating discipline without unnecessary CAPEX.`;
  }

  return `${topic.trTitle} genel bir kontrol listesi olarak degil, yapilandirilmis bir muhendislik karari olarak ele alinmalidir. Danisman once santral sinirini, ticari karari, isletme gecmisini ve kanit kalitesini tanimlar. Bu konuda en kritik saha baglami ${topic.equipment}; en yaygin deger riski ise ${topic.risk}. Yararlı bir inceleme tasarim niyetini, EPC kayitlarini, devreye alma dosyalarini, SCADA trendlerini, koruma ayarlarini, operator loglarini, durus gecmisini, bakim rutinlerini ve sebeke arayuz kanitlarini birlikte okur. ${sectionIndex + 1}. bolum ${heading.toLowerCase()} konusuna odaklanir ve isverenin, EPC yuklenicisinin veya yatirimcinin eksik saha bilgisini nasil savunulabilir aksiyon planina donusturebilecegini aciklar. Pratikte en guclu oneriler; emniyet, uretim etkisi, sebeke uyumu, durus ihtiyaci, CAPEX maruziyeti, garanti ilgisi ve uygulama zorluguna gore siralanir. Vaka orneginde sozlesmesel kabul kaniti gercek isletme davranisiyla karsilastirilir; kok nedenin tasarim, montaj, kontrol mantigi, O&M yaniti, dokumantasyon kalitesi veya kapanmamis teslim sorumlulugu olup olmadigi ayrilir. Nihai cikti dogrudan danismanlik hizmetlerine baglanmali, bir sonraki test veya incelemeyi tanimlamali ve hangi riskin kabul edilecegini, izlenecegini veya hemen duzeltilecegini netlestirmelidir. Tecrubeli bir inceleme sayilarin arkasindaki varsayim kalitesini de test eder. HES varliklarinda bu; net dusu, kuyruksuyu etkisi, governor cevabi, vibrasyon gecmisi, sogutma suyu guvenilirligi ve reaktif guc kabiliyetinin gercek yuk rejiminde okunmasi anlamina gelebilir. GES varliklarinda ise isinim belirsizligi, inverter clipping, string uyumsuzlugu, kirlenme kaybi, trafo kayiplari, emre amadelik kaybi ve SCADA veri bosluklari ayrilmalidir. EPC danismanligi tarafinda ayni disiplin arayuz listesi, tasarim dondurma, fabrika kabul testleri, metot beyanlari, koruma koordinasyonu, enerjilendirme izinleri ve punch-list kapanisi icin uygulanir. Danismanligin pratik degeri sadece problemi tarif etmek degil; isverene gelecek hafta neyin olculebilecegini, neyin durus beklemesi gerektigini, neyin yukleniciyle muzakerelik oldugunu ve hangi konunun gereksiz CAPEX yaratmadan isletme disipliniyle izlenebilecegini gostermektir.`;
}

function buildAuthorityTopicPost(locale: Locale, topic: AuthorityTopic, index: number): BlogPost {
  const en = locale === "en";
  const slug = en ? topic.enSlug : topic.trSlug;
  const title = en ? topic.enTitle : topic.trTitle;
  const description = en ? topic.enDescription : topic.trDescription;
  const serviceLinks = en ? topic.enServices : topic.trServices;
  const headings = authorityHeadings[locale];
  const relatedPool = authorityTopics.filter((item) => item !== topic);

  return {
    slug,
    title,
    description,
    category: topic.category,
    categorySlug: topic.categorySlug,
    tags: en ? [topic.focus, "technical audit", "renewable energy consultancy"] : [topic.focus, "teknik denetim", "enerji danismanligi"],
    author: en ? "Oztoprak Energy engineering desk" : "Oztoprak Enerji muhendislik masasi",
    featured: index < 3,
    trending: index < 6,
    date: `2026-07-${String(index + 1).padStart(2, "0")}`,
    readingTime: en ? "22 min" : "22 dk",
    toc: headings,
    related: relatedPool.slice(index % 5, (index % 5) + 5).map((item) => (en ? item.enSlug : item.trSlug)),
    serviceLinks,
    body: [
      ...headings.map((heading, sectionIndex) => ({
        heading,
        content: buildAuthoritySection(locale, topic, heading, sectionIndex)
      })),
      {
        heading: en ? "Consultancy CTA" : "Danismanlik Cagrisi",
        content: en
          ? `If ${topic.focus} is connected to an active investment, commissioning gate, EPC dispute, performance loss or acquisition decision, request an independent technical consultation before the evidence becomes harder to recover. Oztoprak Energy can review the available records, define the missing tests, prepare an owner-side risk register and connect the findings to hydropower, solar, EPC, commissioning, technical due diligence and performance analysis services.`
          : `${topic.focus} aktif bir yatirim, devreye alma kapisi, EPC uyusmazligi, performans kaybi veya satin alma karariyla baglantiliysa kanit toparlanmasi zorlasmadan bagimsiz teknik danismanlik alin. Oztoprak Enerji mevcut kayitlari inceleyebilir, eksik testleri tanimlayabilir, isveren tarafi risk listesi hazirlayabilir ve bulgulari HES danismanligi, GES danismanligi, EPC danismanligi, devreye alma, teknik denetim, enerji yatirim danismanligi ve performans analizi hizmetlerine baglayabilir.`
      }
    ],
    faqs: [
      {
        question: en ? `When should an owner request support for ${topic.focus}?` : `${topic.focus} icin ne zaman destek alinmali?`,
        answer: en
          ? `Support should be requested before acceptance, acquisition, refinancing, warranty discussion or repeated operating loss. Early review protects evidence quality and prevents weak assumptions from becoming commercial risk.`
          : `Destek kabul, satin alma, refinansman, garanti gorusmesi veya tekrarlayan isletme kaybi oncesinde alinmalidir. Erken inceleme kanit kalitesini korur ve zayif varsayimlarin ticari riske donusmesini engeller.`
      },
      {
        question: en ? "Which records are most important?" : "Hangi kayitlar en onemlidir?",
        answer: en
          ? `The most useful records are commissioning test sheets, SCADA event history, protection files, O&M logs, outage reports, as-built drawings, performance trends and clear ownership of open issues.`
          : `En faydali kayitlar devreye alma test formlari, SCADA olay gecmisi, koruma dosyalari, O&M loglari, durus raporlari, as-built cizimler, performans trendleri ve acik konularin net sorumlulugudur.`
      },
      {
        question: en ? "What should the final consulting output include?" : "Nihai danismanlik ciktisi ne icermelidir?",
        answer: en
          ? `It should include an evidence summary, risk ranking, recommended engineering actions, missing tests, owner-side decisions and a practical implementation sequence.`
          : `Kanit ozeti, risk siralamasi, onerilen muhendislik aksiyonlari, eksik testler, isveren kararlari ve uygulanabilir is sirasi icermelidir.`
      }
    ]
  };
}

blogPosts.en.push(...authorityTopics.map((topic, index) => buildAuthorityTopicPost("en", topic, index)));
blogPosts.tr.push(...authorityTopics.map((topic, index) => buildAuthorityTopicPost("tr", topic, index)));

export function getPosts(locale: Locale) {
  return blogPosts[locale];
}

export function getPost(locale: Locale, slug: string) {
  return blogPosts[locale].find((post) => post.slug === slug);
}

export function getCategories(locale: Locale) {
  const map = new Map<string, string>();
  blogPosts[locale].forEach((post) => map.set(post.categorySlug, post.category));
  return Array.from(map.entries()).map(([slug, title]) => ({ slug, title }));
}
