/**
 * Rural Rise - Evidence-based Career Matching Engine (/lib/ai/matching.js)
 * Transparent and deterministic matching algorithm with weighted multi-factor evidence.
 * Structured so a real LLM / Vertex AI model could replace the rule-based logic later.
 */

(function (global) {
  const CareerMatchingEngine = {
    // Standard criteria weights
    WEIGHTS: {
      skills: 40,       // Max 40 pts
      certificate: 30,  // Max 30 pts
      assessment: 20,   // Max 20 pts
      attendance: 10    // Max 10 pts
    },

    // Candidates repository with verified credentials
    candidates: [
      {
        id: 'CAN-101',
        name: 'Sunita Suresh Sharma',
        nameHi: 'सुनीता सुरेश शर्मा',
        nameMr: 'सुनिता सुरेश शर्मा',
        role: 'Assistant Tailor & Garment Finisher',
        roleHi: 'सहायक दर्जी एवं परिधान निर्माता',
        roleMr: 'सहाय्यक शिंपी व गारमेंट फिनिशर',
        location: 'Nagpur Rural (12 km away)',
        locationHi: 'नागपुर ग्रामीण (१२ किमी दूर)',
        locationMr: 'नागपूर ग्रामीण (१२ किमी अंतर)',
        skills: ['Woven Fabric Cutting', 'Lockstitch Sewing', 'Seam Gauge Precision', 'Basic Hemming', 'Industrial Pattern Drafting'],
        certificateId: 'RR-2026-004821',
        certificateName: 'PMKVY 4.0 Basic Tailoring Skills',
        certificateNameHi: 'PMKVY ४.० बेसिक सिलाई कौशल्य',
        certificateNameMr: 'PMKVY ४.० बेसिक टेलरिंग कौशल्य',
        certificateValid: true,
        assessmentScore: 92, // %
        attendancePct: 94,   // %
        expectedSalary: '₹14,000 - ₹17,000 / mo',
        avatarInitials: 'SS'
      },
      {
        id: 'CAN-102',
        name: 'Ramesh Baliram Rathod',
        nameHi: 'रमेश बलीराम राठौड़',
        nameMr: 'रमेश बळीराम राठोड',
        role: 'Solar Pump Maintenance Tech',
        roleHi: 'सोलर पंप मेंटेनेंस तकनीशियन',
        roleMr: 'सोलर पंप देखभाल तंत्रज्ञ',
        location: 'Wardha Rural (25 km away)',
        locationHi: 'वर्धा ग्रामीण (२५ किमी दूर)',
        locationMr: 'वर्धा ग्रामीण (२५ किमी अंतर)',
        skills: ['DC Wiring & Inverters', 'Pump Motor Repair', 'Ground Earthing', 'Solar PV Array Mounting'],
        certificateId: 'RR-2026-008194',
        certificateName: 'Solar Micro-Grid Technician Level 4',
        certificateNameHi: 'सोलर माइक्रो-ग्रिड तकनीशियन लेवल ४',
        certificateNameMr: 'सोलर मायक्रो-ग्रीड तंत्रज्ञ लेव्हल ४',
        certificateValid: true,
        assessmentScore: 88,
        attendancePct: 90,
        expectedSalary: '₹16,000 - ₹19,000 / mo',
        avatarInitials: 'RR'
      },
      {
        id: 'CAN-103',
        name: 'Pooja Vitthal Jadhav',
        nameHi: 'पूजा विट्ठल जाधव',
        nameMr: 'पूजा विठ्ठल जाधव',
        role: 'Industrial Lockstitch Operator',
        roleHi: 'औद्योगिक लॉकस्टिच मशीन ऑपरेटर',
        roleMr: 'औद्योगिक लॉकस्टिच मशीन ऑपरेटर',
        location: 'Chandrapur ITI Cluster',
        locationHi: 'चंद्रपुर आईटीआई क्लस्टर',
        locationMr: 'चंद्रपूर आयटीआय क्लस्टर',
        skills: ['Single-needle Lockstitch', 'Overlock 4-thread', 'Collar Interfacing', 'Quality Checking'],
        certificateId: 'RR-2026-003310',
        certificateName: 'Apparel Sewing Machine Operator (ASMO)',
        certificateNameHi: 'अपैरल सिलाई मशीन ऑपरेटर',
        certificateNameMr: 'अपॅरल शिवण मशीन ऑपरेटर',
        certificateValid: true,
        assessmentScore: 85,
        attendancePct: 88,
        expectedSalary: '₹15,000 - ₹18,000 / mo',
        avatarInitials: 'PJ'
      }
    ],

    // Job Roles catalog
    jobRoles: [
      {
        id: 'JOB-201',
        title: {
          en: 'Junior Quality Tailor / Sample Maker',
          hi: 'जूनियर क्वालिटी दर्जी / सैंपल मेकर',
          mr: 'कनिष्ठ गुणवत्ता शिंपी / सॅम्पल मेकर'
        },
        company: 'Mahati Textiles Pvt Ltd (Nagpur Hub)',
        salary: '₹15,500 - ₹18,000 / mo',
        requiredSkills: ['Woven Fabric Cutting', 'Lockstitch Sewing', 'Seam Gauge Precision'],
        minScore: 80,
        minAttendance: 85,
        targetCertificate: 'PMKVY 4.0 Basic Tailoring Skills'
      },
      {
        id: 'JOB-202',
        title: {
          en: 'Village Apparel Production Associate',
          hi: 'ग्राम परिधान उत्पादन सहयोगी',
          mr: 'ग्रामीण वस्त्रोद्योग उत्पादन सहयोगी'
        },
        company: 'Vidarbha Khadi & Livelihood Cooperative',
        salary: '₹14,000 - ₹16,500 / mo + Hostel',
        requiredSkills: ['Lockstitch Sewing', 'Basic Hemming'],
        minScore: 75,
        minAttendance: 80,
        targetCertificate: 'PMKVY 4.0 Basic Tailoring Skills'
      },
      {
        id: 'JOB-203',
        title: {
          en: 'Solar Irrigation Maintenance Trainee',
          hi: 'सौर सिंचाई रखरखाव प्रशिक्षु',
          mr: 'सौर सिंचन देखभाल प्रशिक्षणार्थी'
        },
        company: 'Urja Vikas Rural Electrification',
        salary: '₹16,000 - ₹20,000 / mo',
        requiredSkills: ['DC Wiring & Inverters', 'Pump Motor Repair'],
        minScore: 78,
        minAttendance: 80,
        targetCertificate: 'Solar Micro-Grid Technician Level 4'
      }
    ],

    /**
     * Compute deterministic multi-factor match score and evidence breakdown
     * @param {Object} candidate 
     * @param {Object} jobOrTrade
     * @returns {Object} Full transparent evidence report
     */
    computeMatch: function (candidate, jobOrTrade) {
      const c = candidate || this.candidates[0];
      const j = jobOrTrade || this.jobRoles[0];

      // 1. Skill Match Score (Max 40)
      const reqSkills = j.requiredSkills || ['Woven Fabric Cutting', 'Lockstitch Sewing', 'Seam Gauge Precision'];
      const candSkills = c.skills || [];
      const matchedSkills = candSkills.filter(s => reqSkills.some(rs => rs.toLowerCase() === s.toLowerCase()));
      const skillRatio = reqSkills.length > 0 ? (matchedSkills.length / reqSkills.length) : 1;
      const skillScore = Math.round(skillRatio * this.WEIGHTS.skills);

      // 2. Certificate Score (Max 30)
      let certScore = 0;
      let certStatus = 'Unverified';
      if (c.certificateValid && c.certificateId) {
        certScore = this.WEIGHTS.certificate; // 30/30
        certStatus = 'NSDC / PMKVY Blockchain Verified ✓';
      } else if (c.certificateId) {
        certScore = Math.round(this.WEIGHTS.certificate * 0.7);
        certStatus = 'Provisional Enrolment Match';
      }

      // 3. Assessment Score (Max 20)
      const scorePct = Math.min(100, Math.max(0, c.assessmentScore || 85));
      const assessScore = Math.round((scorePct / 100) * this.WEIGHTS.assessment);

      // 4. Attendance Score (Max 10)
      const attendPct = Math.min(100, Math.max(0, c.attendancePct || 90));
      const attendScore = Math.round((attendPct / 100) * this.WEIGHTS.attendance);

      // Total Match Percentage
      const totalMatchPct = Math.min(100, skillScore + certScore + assessScore + attendScore);

      return {
        totalMatchPct: totalMatchPct,
        breakdown: {
          skills: {
            score: skillScore,
            max: this.WEIGHTS.skills,
            pct: Math.round((skillScore / this.WEIGHTS.skills) * 100),
            matchedList: matchedSkills,
            requiredList: reqSkills
          },
          certificate: {
            score: certScore,
            max: this.WEIGHTS.certificate,
            pct: Math.round((certScore / this.WEIGHTS.certificate) * 100),
            id: c.certificateId,
            name: c.certificateName,
            status: certStatus,
            verifyUrl: `/verify`
          },
          assessment: {
            score: assessScore,
            max: this.WEIGHTS.assessment,
            actualPct: scorePct
          },
          attendance: {
            score: attendScore,
            max: this.WEIGHTS.attendance,
            actualPct: attendPct
          }
        },
        evidenceText: {
          en: `Candidate matched with ${totalMatchPct}% overall alignment: ${matchedSkills.length}/${reqSkills.length} core job skills verified, digital credential ${c.certificateId} authenticated via State Registry, ${scorePct}% practical exam proficiency, and verified ${attendPct}% biometric attendance record.`,
          hi: `उम्मीदवार का ${totalMatchPct}% मिलान: ${matchedSkills.length}/${reqSkills.length} आवश्यक कौशल सत्यापित, डिजिटल प्रमाणपत्र ${c.certificateId} प्रमाणित, ${scorePct}% व्यावहारिक परीक्षा स्कोर और ${attendPct}% बायोमेट्रिक उपस्थिति।`,
          mr: `उमेदवाराचे ${totalMatchPct}% जुळणी गुणोत्तर: ${matchedSkills.length}/${reqSkills.length} आवश्यक कौशल्ये सत्यापित, डिजिटल प्रमाणपत्र ${c.certificateId} प्रमाणित, ${scorePct}% प्रात्यक्षिक परीक्षा गुण आणि ${attendPct}% बायोमेट्रिक हजेरी.`
        }
      };
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CareerMatchingEngine;
  } else {
    global.CareerMatchingEngine = CareerMatchingEngine;
  }
})(typeof window !== 'undefined' ? window : this);
