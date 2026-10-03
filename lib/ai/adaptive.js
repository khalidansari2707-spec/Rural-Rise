/**
 * Rural Rise - Adaptive Learning Engine (/lib/ai/adaptive.js)
 * Rule-based pedagogical recommendation engine with full explainability.
 * Structured so a real LLM / Vertex AI model could replace the rule-based logic later.
 */

(function (global) {
  const AdaptiveEngine = {
    // Default trainee profile
    defaultProfile: {
      quizScore: 68, // 0 - 100
      learningStyle: 'video', // 'video' | 'text' | 'audio'
      language: 'en', // 'en' | 'hi' | 'mr'
      network: 'fast', // 'fast' | 'slow'
      device: 'smart', // 'smart' | 'basic'
      lowDataMode: false,
      currentModule: 2,
      skills: {
        patternMaking: { current: 65, target: 90 },
        fabricCutting: { current: 80, target: 85 },
        machineThreading: { current: 55, target: 80 },
        doubleStitching: { current: 70, target: 85 },
        qualityInspection: { current: 40, target: 80 } // Weakest skill
      }
    },

    // Course syllabus knowledge base
    syllabus: [
      {
        id: 'L-101',
        module: 1,
        title: {
          en: '1. Introduction to Measuring Tools & Tailor Chalk',
          hi: '१. मापन उपकरण और टेलर चाक का परिचय',
          mr: '१. मोजमाप साधने आणि टेलर चॉकची ओळख'
        },
        difficulty: 'Easy',
        standardDuration: '14 mins',
        topics: ['Measuring tape', 'Fabric rulers', 'Chalk marking'],
        formats: { video: '14 min HD', audio: '6 min Audio + Text Notes', text: 'Illustrated Guide' }
      },
      {
        id: 'L-102',
        module: 1,
        title: {
          en: '2. Understanding Fabric Grain, Warp & Weft',
          hi: '२. फैब्रिक ग्रेन, ताना और बाना की समझ',
          mr: '२. कापडाचे पोत, ताणा आणि बाणा समजून घेणे'
        },
        difficulty: 'Easy',
        standardDuration: '18 mins',
        topics: ['Cotton vs Poly', 'Bias stretch', 'Grain alignment'],
        formats: { video: '18 min HD', audio: '7 min Audio + Diagrams', text: 'Step Card Summary' }
      },
      {
        id: 'L-201',
        module: 2,
        title: {
          en: '3. Machine Bobbin Winding & Thread Tension Tuning',
          hi: '३. मशीन बॉबिन वाइंडिंग और धागा तनाव समायोजन',
          mr: '३. शिवण मशीन बॉबिन भरणे आणि धाग्याचा ताण जुळवणे'
        },
        difficulty: 'Medium',
        standardDuration: '20 mins',
        topics: ['Bobbin case', 'Upper tension nut', 'Stitch puckering'],
        formats: { video: '20 min HD', audio: '8 min Audio + Diagram', text: 'Photo Walkthrough' }
      },
      {
        id: 'L-202',
        module: 2,
        title: {
          en: '4. Precision Seam Allowances & Corner Turning',
          hi: '४. सटीक सीम अलाउंस और कोनों को मोड़ना',
          mr: '४. अचूक शिलाई मार्जिन आणि कोपरे वळवणे'
        },
        difficulty: 'Medium',
        standardDuration: '16 mins',
        topics: ['1.5cm seam gauge', 'Needle down turn', 'Iron pressing'],
        formats: { video: '16 min HD', audio: '7 min Audio + Notes', text: 'Visual Reference' }
      },
      {
        id: 'L-301',
        module: 3,
        title: {
          en: '5. Diagnostic Quality Inspection & Hem Defect Rectification',
          hi: '५. गुणवत्ता निरीक्षण और हेम सिलाई दोष सुधार',
          mr: '५. गुणवत्ता तपासणी आणि हेम शिलाई दोष निवारण'
        },
        difficulty: 'Hard',
        standardDuration: '25 mins',
        topics: ['Skipped stitches', 'Hem uniformity', 'Export quality checklist'],
        formats: { video: '25 min HD', audio: '10 min Audio + Checklist', text: 'Inspection Sheet' }
      },
      {
        id: 'L-302',
        module: 3,
        title: {
          en: '6. Final Kurta Collar Assembly & Buttonhole Finishing',
          hi: '६. अंतिम कुर्ता कॉलर असेंबली और बटनहोल फिनिशिंग',
          mr: '६. कुर्ता कॉलर जोडणी आणि काज-बटन फिनिशिंग'
        },
        difficulty: 'Hard',
        standardDuration: '28 mins',
        topics: ['Band collar', 'Interfacing stiffener', 'Clean edge lock'],
        formats: { video: '28 min HD', audio: '11 min Audio + Practical Tips', text: 'Master Blueprint' }
      }
    ],

    /**
     * Core Adaptive Evaluation Logic
     * Rule-based engine computing recommendations & human-readable rationales
     */
    evaluate: function (userProfile) {
      const p = Object.assign({}, this.defaultProfile, userProfile);
      const reasons = [];
      const reasonsHi = [];
      const reasonsMr = [];

      // 1. Difficulty & Pace determination based on quizScore
      let difficulty = 'Medium';
      let pace = 'Normal';

      if (p.quizScore < 60) {
        difficulty = 'Easy';
        pace = 'Slow';
        reasons.push(`Quiz score ${p.quizScore}% is below 60% threshold -> Recommended foundational revision and slower step-by-step pace.`);
        reasonsHi.push(`क्विज़ स्कोर ${p.quizScore}% (60% से कम) है -> आसान पाठ व धीरे-धीरे सीखने की गति सुझाई गई।`);
        reasonsMr.push(`चाचणी गुण ${p.quizScore}% (६०% पेक्षा कमी) आहेत -> सुलभ धडे आणि संथ शिकण्याचा वेग सुचवला.`);
      } else if (p.quizScore <= 80) {
        difficulty = 'Medium';
        pace = 'Normal';
        reasons.push(`Quiz score ${p.quizScore}% demonstrates solid foundation -> Balanced practice with practical workshop challenges.`);
        reasonsHi.push(`क्विज़ स्कोर ${p.quizScore}% अच्छा आधार दिखाता है -> संतुलित अभ्यास और वर्कशॉप स्तर के पाठ।`);
        reasonsMr.push(`चाचणी गुण ${p.quizScore}% चांगला पाया दर्शवतात -> संतुलित सराव आणि प्रत्यक्ष कार्यशाळा धडे.`);
      } else {
        difficulty = 'Hard';
        pace = 'Fast';
        reasons.push(`High quiz score ${p.quizScore}% (>80%) -> Fast-track advanced industrial fabrication & quality inspection lessons.`);
        reasonsHi.push(`उच्च स्कोर ${p.quizScore}% (>80%) -> उन्नत औद्योगिक निर्माण व गुणवत्ता निरीक्षण पाठ।`);
        reasonsMr.push(`उच्च गुण ${p.quizScore}% (>८०%) -> प्रगत औद्योगिक गुणवत्ता तपासणीचे वेगवान धडे.`);
      }

      // 2. Format & Bandwidth determination based on Network, Device & Low Data Mode
      let contentFormat = 'video';
      let formatLabel = 'HD Video Tutorial';
      let dataSavedMb = 0;

      const isConstrained = p.lowDataMode || p.network === 'slow' || p.device === 'basic';

      if (p.lowDataMode) {
        contentFormat = 'audio_text';
        formatLabel = 'Low-Data Audio + Illustrated Notes';
        dataSavedMb = 44;
        reasons.push(`Low Data Mode enabled by user -> Video stream replaced with lightweight audio + offline summary (saves ~44 MB per lesson).`);
        reasonsHi.push(`कम डेटा मोड चालू है -> वीडियो के स्थान पर हल्का ऑडियो और ऑफलाइन नोट्स (प्रति पाठ ~४४ MB की बचत)।`);
        reasonsMr.push(`कमी डेटा मोड सुरू आहे -> व्हिडिओ ऐवजी हलका ऑडिओ आणि ऑफलाइन नोट्स (~४४ MB डेटा बचत).`);
      } else if (p.network === 'slow') {
        contentFormat = 'audio_text';
        formatLabel = 'Adaptive Audio & Lite Diagrams (2G/3G friendly)';
        dataSavedMb = 38;
        reasons.push(`Slow network detected (2G/3G/Rural Cell) -> Auto-switched to buffer-free Audio + Step Cards.`);
        reasonsHi.push(`धीमा नेटवर्क (2G/3G) पहचाना गया -> बफरिंग मुक्त ऑडियो और स्टेप कार्ड्स पर स्विच किया गया।`);
        reasonsMr.push(`संथ नेटवर्क आढळले -> विनाव्यत्यय ऑडिओ आणि स्टेप कार्ड्स सुरू केले.`);
      } else if (p.device === 'basic') {
        contentFormat = p.learningStyle === 'audio' ? 'audio_text' : 'text';
        formatLabel = 'Optimized Mobile Cards & Voice Notes';
        dataSavedMb = 32;
        reasons.push(`Basic smartphone profile -> Optimized for lower RAM and screen resolution with responsive cards.`);
        reasonsHi.push(`साधारण स्मार्टफोन डिवाइस -> कम रैम और स्क्रीन के लिए अनुकूलित कार्ड्स।`);
        reasonsMr.push(`साधा स्मार्टफोन -> कमी रॅमसाठी अनुकूलित जलद कार्ड्स.`);
      } else {
        if (p.learningStyle === 'audio') {
          contentFormat = 'audio_text';
          formatLabel = 'Voice Guide + Key Summaries';
          dataSavedMb = 28;
          reasons.push(`Learner preference set to Audio -> Prioritized clear regional voice instructions over silent reading.`);
          reasonsHi.push(`शिक्षार्थी की पसंद ऑडियो है -> स्पष्ट क्षेत्रीय वॉयस गाइड को प्राथमिकता दी गई।`);
          reasonsMr.push(`शिकण्याची पसंती ऑडिओ आहे -> स्पष्ट प्रादेशिक आवाजातील सूचनांना प्राधान्य.`);
        } else if (p.learningStyle === 'text') {
          contentFormat = 'text';
          formatLabel = 'Interactive Diagrams & Visual Text';
          dataSavedMb = 36;
          reasons.push(`Learner preference set to Text/Diagrams -> Self-paced visual reading deck.`);
          reasonsHi.push(`शिक्षार्थी की पसंद टेक्स्ट/चित्र है -> स्व-गति दृश्य वाचन सामग्री।`);
          reasonsMr.push(`पसंती मजकूर/आकृती आहे -> स्वतःच्या गतीने वाचण्यायोग्य सचित्र साहित्य.`);
        } else {
          contentFormat = 'video';
          formatLabel = 'Interactive HD Video with Dual Subtitles';
          dataSavedMb = 0;
          reasons.push(`High-speed network & Smart device active -> Full HD video lessons enabled.`);
          reasonsHi.push(`तेज़ नेटवर्क और स्मार्ट फोन उपलब्ध -> फुल एचडी वीडियो पाठ सक्रिय।`);
          reasonsMr.push(`जलद नेटवर्क आणि चांगला फोन उपलब्ध -> फुल एचडी व्हिडिओ धडे सक्षम.`);
        }
      }

      // 3. Skill gap analysis & Weakest skill prioritization
      let weakestSkillKey = 'qualityInspection';
      let maxGap = 0;
      Object.keys(p.skills).forEach(k => {
        const gap = p.skills[k].target - p.skills[k].current;
        if (gap > maxGap) {
          maxGap = gap;
          weakestSkillKey = k;
        }
      });

      const skillNames = {
        patternMaking: { en: 'Pattern Making & Drafting', hi: 'पैटर्न निर्माण एवं ड्राफ्टिंग', mr: 'पॅटर्न मेकिंग व मोजमाप' },
        fabricCutting: { en: 'Fabric Cutting & Grain Alignment', hi: 'फैब्रिक कटिंग एवं ग्रेन संरेखण', mr: 'कापड कापणे व रचना' },
        machineThreading: { en: 'Sewing Machine Threading & Tension', hi: 'सिलाई मशीन धागा व तनाव नियंत्रण', mr: 'शिलाई मशीन धागा व ताण' },
        doubleStitching: { en: 'Double Seam & Hem Finishing', hi: 'डबल सिलाई एवं हेम फिनिशिंग', mr: 'दुहेरी शिलाई व बॉर्डर्स' },
        qualityInspection: { en: 'Industrial Quality Inspection', hi: 'औद्योगिक गुणवत्ता निरीक्षण', mr: 'औद्योगिक गुणवत्ता तपासणी' }
      };

      reasons.push(`Skill Gap detected in "${skillNames[weakestSkillKey].en}" (Current: ${p.skills[weakestSkillKey].current}%, Target: ${p.skills[weakestSkillKey].target}%) -> Injected reinforcement practical drills.`);
      reasonsHi.push(`कौशल गैप: "${skillNames[weakestSkillKey].hi}" (वर्तमान: ${p.skills[weakestSkillKey].current}%, लक्ष्य: ${p.skills[weakestSkillKey].target}%) -> अतिरिक्त व्यावहारिक अभ्यास जोड़ा गया।`);
      reasonsMr.push(`कौशल्य तफावत: "${skillNames[weakestSkillKey].mr}" (सध्या: ${p.skills[weakestSkillKey].current}%, उद्दिष्ट: ${p.skills[weakestSkillKey].target}%) -> जास्तीचा सराव समाविष्ट केला.`);

      // 4. Select top 3 recommended lessons according to difficulty and weakest skill
      let recommended = [];
      if (difficulty === 'Easy') {
        recommended = [this.syllabus[0], this.syllabus[1], this.syllabus[2]];
      } else if (difficulty === 'Medium') {
        recommended = [this.syllabus[2], this.syllabus[3], this.syllabus[4]];
      } else {
        recommended = [this.syllabus[3], this.syllabus[4], this.syllabus[5]];
      }

      // 5. Generate tailored career & learning milestones (3 to 5 steps)
      const milestones = [
        {
          step: 1,
          title: {
            en: 'Foundational Mechanical Mastery',
            hi: 'बुनियादी मशीन नियंत्रण व तनाव सुधार',
            mr: 'पायाभूत मशीन नियंत्रण व ताण दुरुस्ती'
          },
          desc: {
            en: 'Calibrate lockstitch machine tensions to eliminate puckering and skipped stitches.',
            hi: 'सिलाई मशीन के तनाव को संतुलित करें ताकि सिलाई में सिकुड़न न आए।',
            mr: 'टाका सुटणे व सुरकुत्या थांबवण्यासाठी मशीनचा ताण योग्य बसवा.'
          },
          status: p.quizScore > 60 ? 'completed' : 'in_progress',
          targetSkill: 'machineThreading'
        },
        {
          step: 2,
          title: {
            en: 'Targeted Skill Repair: ' + skillNames[weakestSkillKey].en,
            hi: 'लक्षित कौशल्य सुधार: ' + skillNames[weakestSkillKey].hi,
            mr: 'लक्षित कौशल्य सुधारणा: ' + skillNames[weakestSkillKey].mr
          },
          desc: {
            en: `Complete practical drill to bridge the ${maxGap}% gap in ${skillNames[weakestSkillKey].en}.`,
            hi: `${skillNames[weakestSkillKey].hi} में ${maxGap}% के अंतर को पाटने के लिए व्यावहारिक अभ्यास पूरा करें।`,
            mr: `${skillNames[weakestSkillKey].mr} मधील ${maxGap}% तफावत भरून काढण्यासाठी सराव पूर्ण करा.`
          },
          status: 'next_focus',
          targetSkill: weakestSkillKey
        },
        {
          step: 3,
          title: {
            en: 'Garment Construction Practical Assessment',
            hi: 'परिधान निर्माण व्यावहारिक मूल्यांकन',
            mr: 'वस्त्र निर्मिती प्रात्यक्षिक मूल्यमापन'
          },
          desc: {
            en: 'Submit a full cotton kurta sample to Er. Sunita Devi for biometric assessment.',
            hi: 'प्रशिक्षक सुनीता देवी को पूरा कॉटन कुर्ता नमूना मूल्यांकन के लिए प्रस्तुत करें।',
            mr: 'मार्गदर्शक सुनिता देवी यांच्याकडे मूल्यांकनासाठी संपूर्ण कुर्ता नमुना सादर करा.'
          },
          status: 'locked',
          targetSkill: 'doubleStitching'
        },
        {
          step: 4,
          title: {
            en: 'NSDC Level-4 Assistant Tailor Certification',
            hi: 'NSDC लेवल-४ सहायक दर्जी प्रमाणपत्र',
            mr: 'NSDC लेव्हल-४ सहाय्यक शिंपी प्रमाणपत्र'
          },
          desc: {
            en: 'Issue blockchain-verifiable digital credential on Rural Rise (/verify).',
            hi: 'रूरल राइज पर ब्लॉकचेन सत्यापित डिजिटल प्रमाणपत्र प्राप्त करें।',
            mr: 'रुरल राईजवर डिजिटल प्रमाणपत्र पडताळणीसह मिळवा.'
          },
          status: 'locked',
          targetSkill: 'patternMaking'
        },
        {
          step: 5,
          title: {
            en: 'Direct Rural Garment Cluster Placement',
            hi: 'ग्रामीण वस्त्रोद्योग क्लस्टर में सीधा रोजगार',
            mr: 'ग्रामीण गारमेंट क्लस्टरमध्ये थेट रोजगार'
          },
          desc: {
            en: 'Fast-track interview with Mahati Textiles or Wardha Apparel Hub with ₹16,500/mo base.',
            hi: 'महाती टेक्सटाइल्स या वर्धा अपैरल हब में ₹१६,५००/माह पर सीधा साक्षात्कार।',
            mr: 'महाती टेक्सटाईल्स किंवा वर्धा हबमध्ये ₹१६,५००/महिना वेतनावर थेट मुलाखत.'
          },
          status: 'locked',
          targetSkill: 'qualityInspection'
        }
      ];

      return {
        profile: p,
        difficulty: difficulty,
        pace: pace,
        contentFormat: contentFormat,
        formatLabel: formatLabel,
        dataSavedMb: dataSavedMb,
        weakestSkill: {
          key: weakestSkillKey,
          name: skillNames[weakestSkillKey],
          current: p.skills[weakestSkillKey].current,
          target: p.skills[weakestSkillKey].target,
          gap: maxGap
        },
        recommendedLessons: recommended,
        explanations: {
          en: reasons,
          hi: reasonsHi,
          mr: reasonsMr
        },
        milestones: milestones
      };
    },

    /**
     * Get specific why reasons for a specific lesson
     */
    getLessonExplanation: function (lessonId, profile, lang) {
      const evaluation = this.evaluate(profile);
      const l = lang || profile.language || 'en';
      const lesson = this.syllabus.find(item => item.id === lessonId) || this.syllabus[0];
      
      const specific = [];
      if (l === 'hi') {
        specific.push(`पाठ का स्तर "${lesson.difficulty}" आपके क्विज़ स्कोर (${profile.quizScore}%) के अनुकूल है।`);
        specific.push(`नेटवर्क स्थिति: ${profile.network === 'slow' || profile.lowDataMode ? 'कम डेटा / ऑडियो मोड सक्रिय' : 'फुल वीडियो मोड उपलब्ध'}।`);
        specific.push(`लक्षित कौशल: इस पाठ में आपके कमजोर क्षेत्र को मजबूत करने के लिए व्यावहारिक चरण शामिल हैं।`);
      } else if (l === 'mr') {
        specific.push(`धड्याची काठिण्य पातळी "${lesson.difficulty}" तुमच्या चाचणी गुणांशी (${profile.quizScore}%) सुसंगत आहे.`);
        specific.push(`नेटवर्क स्थिती: ${profile.network === 'slow' || profile.lowDataMode ? 'कमी डेटा / ऑडिओ मोड सुरू' : 'फुल व्हिडिओ मोड उपलब्ध'}.`);
        specific.push(`उद्दिष्ट: या धड्यात तुमच्या कमकुवत कौशल्याची पूर्तता करण्यासाठी प्रात्यक्षिक पायऱ्या आहेत.`);
      } else {
        specific.push(`Lesson difficulty level "${lesson.difficulty}" aligns with your evaluated score of ${profile.quizScore}%.`);
        specific.push(`Bandwidth optimization: ${profile.network === 'slow' || profile.lowDataMode ? 'Lite Audio + Text selected to prevent lag' : 'High-definition video streaming enabled'}.`);
        specific.push(`Pedagogical impact: Directly targets prerequisite techniques needed for your upcoming NSDC evaluation.`);
      }

      return {
        lesson: lesson,
        generalReasons: evaluation.explanations[l] || evaluation.explanations.en,
        specificReasons: specific
      };
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdaptiveEngine;
  } else {
    global.AdaptiveEngine = AdaptiveEngine;
  }
})(typeof window !== 'undefined' ? window : this);
