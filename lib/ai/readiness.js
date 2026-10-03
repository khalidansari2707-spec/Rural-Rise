/**
 * Rural Rise - AI Implementation Readiness Engine (/lib/ai/readiness.js)
 * Weighted readiness gauge, checklist cards with status, outcomes tracking,
 * and dynamic real-time action intervention handler.
 */

(function (global) {
  const AIReadinessEngine = {
    // Default weights for checklist items (Sum = 100)
    checklistItems: [
      {
        id: 'conn',
        title: {
          en: 'Connectivity & Offline Sync Coverage',
          hi: 'कनेक्टिविटी एवं ऑफलाइन सिंक कवरेज',
          mr: 'कनेक्टिव्हिटी आणि ऑफलाइन सिंक कव्हरेज'
        },
        desc: {
          en: 'Percentage of rural training centres with reliable 4G or cached PWA offline pack deployment.',
          hi: 'विश्वसनीय 4G या ऑफलाइन PWA पैक वाले ग्रामीण प्रशिक्षण केंद्रों का प्रतिशत।',
          mr: 'विश्वसनीय 4G किंवा ऑफलाइन PWA पॅक असलेल्या ग्रामीण प्रशिक्षण केंद्रांची टक्केवारी.'
        },
        weight: 25,
        score: 72, // 0 - 100
        thresholds: { green: 80, saffron: 65 },
        status: 'saffron', // 'green' | 'saffron' | 'red'
        icon: 'wifi_tethering',
        metric: '72% Centres Ready'
      },
      {
        id: 'devices',
        title: {
          en: 'Student Device & Tablet Availability',
          hi: 'प्रशिक्षार्थी डिवाइस एवं टैबलेट उपलब्धता',
          mr: 'प्रशिक्षणार्थी उपकरण व टॅब्लेट उपलब्धता'
        },
        desc: {
          en: 'Ratio of functional Android tablets/smartphones per batch in village training labs.',
          hi: 'ग्राम प्रशिक्षण प्रयोगशालाओं में प्रति बैच स्मार्ट टैबलेट्स का अनुपात।',
          mr: 'ग्रामीण प्रशिक्षण लॅबमधील प्रति बॅच स्मार्ट टॅब्लेटचे प्रमाण.'
        },
        weight: 20,
        score: 68,
        thresholds: { green: 80, saffron: 65 },
        status: 'saffron',
        icon: 'devices',
        metric: '1 Device per 1.8 Trainees'
      },
      {
        id: 'language',
        title: {
          en: 'Tri-lingual (EN/HI/MR) Curriculum Coverage',
          hi: 'त्रि-भाषी (अंग्रेजी/हिंदी/मराठी) पाठ्यक्रम कवरेज',
          mr: 'त्रि-भाषिक (इंग्रजी/हिंदी/मराठी) अभ्यासक्रम कव्हरेज'
        },
        desc: {
          en: 'Audio, text notes, and evaluation rubrics localized across English, Hindi, and Marathi.',
          hi: 'तीनों भाषाओं में उपलब्ध ऑडियो, टेक्स्ट नोट्स और मूल्यांकन रूब्रिक्स।',
          mr: 'तिन्ही भाषांमध्ये उपलब्ध ऑडिओ, मजकूर नोट्स आणि मूल्यमापन पद्धती.'
        },
        weight: 20,
        score: 92,
        thresholds: { green: 85, saffron: 70 },
        status: 'green',
        icon: 'translate',
        metric: '92% Content Localized'
      },
      {
        id: 'trainers',
        title: {
          en: 'Trainer AI Tools & Biometric Certification',
          hi: 'प्रशिक्षक एआई उपकरण एवं बायोमेट्रिक प्रमाणीकरण',
          mr: 'प्रशिक्षक एआय साधने व बायोमेट्रिक प्रमाणपत्र'
        },
        desc: {
          en: 'Trainers trained on adaptive recommendation override and face kiosk calibration.',
          hi: 'प्रशिक्षक जो अनुकूली सिफारिशों और फेस कियोस्क संचालन में प्रमाणित हैं।',
          mr: 'अ‍ॅडॉप्टिव्ह शिफारसी व फेस किओस्क चालवण्यात प्रशिक्षित असलेले मार्गदर्शक.'
        },
        weight: 20,
        score: 64,
        thresholds: { green: 80, saffron: 60 },
        status: 'saffron',
        icon: 'co_present',
        metric: '64% Master Trainers Certified'
      },
      {
        id: 'data',
        title: {
          en: 'Aadhaar eKYC & Attendance Data Quality',
          hi: 'आधार eKYC एवं उपस्थिति डेटा गुणवत्ता',
          mr: 'आधार eKYC आणि हजेरी डेटा गुणवत्ता'
        },
        desc: {
          en: 'Zero-duplicate registry records verified with UIDAI and geofenced timestamp accuracy.',
          hi: 'शून्य डुप्लीकेट और जियोफेंस्ड टाइमस्टैम्प से सत्यापित रिकॉर्ड्स।',
          mr: 'शून्य डुप्लिकेट आणि जिओफेन्स्ड अचूकतेने तपासलेले नोंदी.'
        },
        weight: 15,
        score: 86,
        thresholds: { green: 80, saffron: 65 },
        status: 'green',
        icon: 'verified_user',
        metric: '99.4% Match Accuracy'
      }
    ],

    // Real-time Guidance Action Interventions
    actionCards: [
      {
        id: 'ACT-01',
        category: 'conn',
        title: {
          en: '5 rural talukas have intermittent connectivity: Enable Offline Audio Packs',
          hi: '५ ग्रामीण तालुकों में रुक-रुक कर नेटवर्क: ऑफलाइन ऑडियो पैक सक्षम करें',
          mr: '५ ग्रामीण तालुक्यांत खंडित नेटवर्क: ऑफलाइन ऑडिओ पॅक सक्षम करा'
        },
        impactDescription: '+8% Connectivity Score • Boosts 420 Village Learners',
        impactScoreBoost: 8,
        affectedItem: 'conn',
        status: 'pending' // 'pending' | 'completed'
      },
      {
        id: 'ACT-02',
        category: 'trainers',
        title: {
          en: '14 ITI trainers in Wardha require biometric kiosk protocol refresher: Run Webinar',
          hi: 'वर्धा में १४ आईटीआई प्रशिक्षकों को बायोमेट्रिक कियोस्क रिफ्रेशर की आवश्यकता: वेबिनार चलाएं',
          mr: 'वर्ध्यातील १४ आयटीआय प्रशिक्षकांना बायोमेट्रिक किओस्क उजळणी आवश्यक: वेबिनार घ्या'
        },
        impactDescription: '+7% Trainer Training Score • 100% Wardha Compliance',
        impactScoreBoost: 7,
        affectedItem: 'trainers',
        status: 'pending'
      },
      {
        id: 'ACT-03',
        category: 'devices',
        title: {
          en: 'Device sharing ratio is 2.4 trainees/device in Gadchiroli: Allot 40 Refurbished Tablets',
          hi: 'गढ़चिरोली में डिवाइस शेयरिंग अनुपात २.४ है: ४० नवीनीकृत टैबलेट आवंटित करें',
          mr: 'गडचिरोलीत उपकरण प्रमाण २.४ आहे: ४० नूतनीकृत टॅब्लेटचे वाटप करा'
        },
        impactDescription: '+6% Device Availability Score • Reaches 1:1 Target',
        impactScoreBoost: 6,
        affectedItem: 'devices',
        status: 'pending'
      }
    ],

    // District-wise Readiness Breakdown
    districts: [
      { name: 'Nagpur', nameHi: 'नागपुर', nameMr: 'नागपूर', score: 88, status: 'green' },
      { name: 'Wardha', nameHi: 'वर्धा', nameMr: 'वर्धा', score: 74, status: 'saffron' },
      { name: 'Amravati', nameHi: 'अमरावती', nameMr: 'अमरावती', score: 79, status: 'saffron' },
      { name: 'Chandrapur', nameHi: 'चंद्रपुर', nameMr: 'चंद्रपूर', score: 68, status: 'saffron' },
      { name: 'Gadchiroli', nameHi: 'गढ़चिरोली', nameMr: 'गडचिरोली', score: 58, status: 'red' }
    ],

    // Outcomes row metrics
    outcomes: {
      learningGainPct: 34,      // +34%
      skillGapClosedPct: 68,    // 68%
      placementRatePct: 82      // 82%
    },

    /**
     * Compute current state, overall weighted readiness gauge score, and metrics
     */
    getState: function () {
      // Read actions from localStorage if available
      let storedActions = null;
      try {
        if (typeof localStorage !== 'undefined') {
          storedActions = JSON.parse(localStorage.getItem('rr_ai_actions') || 'null');
        }
      } catch (e) {}

      const activeActions = this.actionCards.map(a => {
        if (storedActions && storedActions[a.id]) {
          return Object.assign({}, a, { status: storedActions[a.id] });
        }
        return a;
      });

      // Compute adjusted scores based on completed actions
      const items = this.checklistItems.map(item => {
        let currentScore = item.score;
        activeActions.forEach(a => {
          if (a.affectedItem === item.id && a.status === 'completed') {
            currentScore = Math.min(100, currentScore + a.impactScoreBoost);
          }
        });

        let status = 'red';
        if (currentScore >= item.thresholds.green) {
          status = 'green';
        } else if (currentScore >= item.thresholds.saffron) {
          status = 'saffron';
        }

        return Object.assign({}, item, {
          score: currentScore,
          status: status
        });
      });

      // Overall weighted score
      let totalWeightedScore = 0;
      let totalWeight = 0;
      items.forEach(it => {
        totalWeightedScore += (it.score * it.weight);
        totalWeight += it.weight;
      });
      const overallScore = Math.round(totalWeightedScore / totalWeight);

      let overallStatus = 'saffron';
      if (overallScore >= 80) overallStatus = 'green';
      else if (overallScore < 60) overallStatus = 'red';

      return {
        overallScore: overallScore,
        overallStatus: overallStatus,
        checklistItems: items,
        actionCards: activeActions,
        districts: this.districts,
        outcomes: this.outcomes
      };
    },

    /**
     * Execute an action ("Act" button clicked)
     */
    executeAction: function (actionId) {
      let storedActions = {};
      try {
        if (typeof localStorage !== 'undefined') {
          storedActions = JSON.parse(localStorage.getItem('rr_ai_actions') || '{}');
        }
      } catch (e) {}

      storedActions[actionId] = 'completed';
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('rr_ai_actions', JSON.stringify(storedActions));
        }
      } catch (e) {}

      return this.getState();
    },

    /**
     * Reset actions (for demo testing)
     */
    resetActions: function () {
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem('rr_ai_actions');
        }
      } catch (e) {}
      return this.getState();
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIReadinessEngine;
  } else {
    global.AIReadinessEngine = AIReadinessEngine;
  }
})(typeof window !== 'undefined' ? window : this);
