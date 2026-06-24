

export type UrjaCard = {
  title: string;
  description: string;
  accent?: "green" | "red" | "yellow" | "blue" | "orange" | "pink" | "amber";
};

export type UrjaImage = {
  src: string;
  alt: string;
};

export type UrjaVigyanContent = {
  seo: {
    title: string;
    description: string;
  };


  hero: {
    heading: string;
    highlight: string;
    subtitle: string;
  };

  intro: {
    title: string;
    para: string;
    warningTitle: string;
    warningText: string;
    techTitle: string;
    techText: string;
  };

  cosmic: {
    title: string;
    intro: string;
    sections: UrjaCard[];
    trisarenu: {
      title: string;
      items: { emoji: string; label: string; colorClass: string }[];
    };
    panchmahabhoot: {
      title: string;
      items: { emoji: string; label: string; bgClass: string }[];
    };
    bookCta: {
      title: string;
      subtitle: string;
    };
    note: string;
  };

  nineEnergies: {
    title: string;
    subtitle: string;
    image: UrjaImage;
    badge: string;
    points: string[];
  };

  energyFlow: {
    title: string;
    subtitle: string;
    cards: {
      type: "positive" | "negative";
      title: string;
      text: string;
    }[];
    images: UrjaImage[];
    principlesTitle: string;
    principles: string[];
    footerImage: UrjaImage;
  };

  manureCycle: {
    title: string;
    mainDiagram: UrjaImage;

    problem: {
      title: string;
      text: string;
      bulletsTitle: string;
      bullets: string[];
    };

    molecularChange: {
      title: string;
      text: string;
      proof: string;
    };

    solution: {
      title: string;
      steps: string[];
      mixtureTitle: string;
      mixtureList: string[];
      timeNote: string;
      usage: string;
    };

    analysis: {
      title: string;
      text: string;
      conclusion: string;
      images: UrjaImage[];
    };
  };
};

export const urjaVigyanContent: UrjaVigyanContent = {
  seo: {
    title: "TCBT ऊर्जा विज्ञान - Tarachand Belji Jaivik Kishan",
    description: "TCBT ऊर्जा विज्ञान - प्रकृति का स्वयंपोषी और स्वयंविकासी ऊर्जा चक्र के बारे में जानें। ताराचंद बेलजी तकनीक में प्रार्थना और अग्निहोत्र से पंचमहाभूत को साधकर प्रकृति की व्यवस्था को पुर्नस्थापित करना।",
  },


  hero: {
    heading: "TCBT",
    highlight: "ऊर्जा विज्ञान",
    subtitle: "प्रकृति का स्वयंपोषी और स्वयंविकासी ऊर्जा चक्र",
  },

  intro: {
    title: "प्रकृति का ऊर्जा चक्र",
    para:
      "प्रकृति का अपना एक स्वयं का ऊर्जा चक्र है, यह चक्र स्वयंपोषी और स्वयंविकासी है, अपने इसी चक्र के आधार पर प्रकृति अपने अण्डज, स्वेदज और जरायुज जीवों को जन्माता है और पोषण देता है।",
    warningTitle: "⚠️ प्रकृति का दण्ड",
    warningText:
      "इस ऊर्जा चक्र से छेड़-छाड़ करने पर प्रकृति दण्ड भी देती है। तापमान संकट और हिडन हंगर (कुपोषण) यह दो बड़े दण्ड हैं।",
    techTitle: "✨ ताराचन्द बेलजी तकनीक",
    techText:
      "ताराचन्द बेलजी तकनीक में प्रार्थना और अग्निहोत्र से पंचमहाभूत को साधकर प्रकृति की इस व्यवस्था को पुर्नस्थापित किया जाता है। इसके दर्शन निम्न हैं-",
  },

  cosmic: {
    title: "नौ ऊर्जाओं का प्रकृति निर्माण क्रम",
    intro:
      "विश्व, ब्रम्हाण्ड और यह दिखाई देने वाली यह प्रकृति, ऊर्जा से बनी है। इसी ऊर्जा को प्राप्त करने के लिए इस प्रकृति के सभी पदार्थ और जीव संयोजन/भोजन करते हैं।",
    sections: [
      {
        title: "🌱 महाकाली और महाकाल",
        description:
          "आधुनिक विज्ञान भी स्वीकार करता है कि ब्लैक एनर्जी, जिसे हमारे पूर्वजों ने महाकाली कहा हुआ है। महाकाली ऊर्जा संघनित होकर महाकाल ऊर्जा का निर्माण करती है।",
        accent: "green",
      },
      {
        title: "🌞 ज्योतिपुंज और बिगबैंग",
        description:
          "महाकाली की ऊर्जा अत्यधिक संघनित होकर ज्योतिपुंज के प्रकार के रूप में प्रस्फुटित होती है, जिसे आधुनिक विज्ञान बिगबैंग कहता है।",
        accent: "yellow",
      },
      {
        title: "🌾 देव कण और दानव कण",
        description:
          "महाकाली की ब्लैक एनर्जी और ज्योतिर्लिंग से निकले प्रकाश की ऊर्जा ने मैटर (देव कण) और एंटीमैटर (दानव कण) का निर्माण किया।",
        accent: "blue",
      },
      {
        title: "🌾 त्रिसरेणु - त्रिदेव ऊर्जा",
        description: "इसी क्रम में ही त्रिसरेणु का निर्माण होता है।",
        accent: "orange",
      },
      {
        title: "पंचमहाभूत का निर्माण",
        description: "फिर क्रमशः पंचमहाभूतों का निर्माण होता है।",
        accent: "green",
      },
      {
        title: "मन-बुद्धि और जीवन का आरंभ",
        description:
          "शिव और शक्ति की संयुक्त ऊर्जा से मन-बुद्धि का सृजन होता है। विष्णु ऊर्जा से अहंकार (डीएनए) का निर्माण होता है। और प्रकृति का जीवन प्रारंभ हो जाता है।",
        accent: "pink",
      },
    ],
    trisarenu: {
      title: "त्रिसरेणु - त्रिदेव ऊर्जा",
      items: [
        { emoji: "🌻", label: "ब्रम्ह ऊर्जा", colorClass: "text-orange-700" },
        { emoji: "🌳", label: "विष्णु ऊर्जा", colorClass: "text-blue-700" },
        { emoji: "🌾", label: "शिव ऊर्जा", colorClass: "text-purple-700" },
      ],
    },
    panchmahabhoot: {
      title: "पंचमहाभूत",
      items: [
        { emoji: "🌱", label: "भूमि", bgClass: "bg-green-500/40" },
        { emoji: "🌤️", label: "गगन", bgClass: "bg-blue-500/40" },
        { emoji: "🌬️", label: "वायु", bgClass: "bg-cyan-500/40" },
        { emoji: "🔥", label: "अग्नि", bgClass: "bg-red-500/40" },
        { emoji: "💧", label: "नीर", bgClass: "bg-blue-600/40" },
      ],
    },
    bookCta: {
      title: "📚 विस्तार से जानकारी के लिए",
      subtitle: "टीसीबीटी प्रकृति ऊर्जा विज्ञान पुस्तक पढ़ें",
    },
    note:
      "अभी संक्षिप्त में मैं नौ ऊर्जाओं का निर्माण क्रम आपको बता रहा हूँ। क्योंकि इसी क्रम का उपयोग करके अतिरिक्त ऊर्जा देकर अतिरिक्त उत्पादन प्राप्त कर सकते हैं।",
  },

  nineEnergies: {
    title: "नौ ऊर्जाओं का दृश्य निरूपण",
    subtitle: "प्रकृति की रचना में नौ मूलभूत ऊर्जाएं कार्यरत हैं",
    image: {
      src: "/Urja-Vigyan/img_1.webp",
      alt: "नौ ऊर्जाओं का प्रकृति निर्माण क्रम",
    },
    badge: "9 ऊर्जाएं",
    points: [
      "प्रकृति की रचना नौ मूलभूत ऊर्जाओं से होती है जो सभी जीवन के आधार हैं।",
      "इन ऊर्जाओं का संतुलन ही स्वस्थ कृषि और पर्यावरण की कुंजी है।",
    ],
  },

  energyFlow: {
    title: "ऊर्जा की गति",
    subtitle: "ऊर्जा की गति दो प्रकार की प्रकृति का निर्माण करती है",
    cards: [
      {
        type: "positive",
        title: "सकारात्मक ऊर्जा",
        text: "प्रकृति का सृजन करती है",
      },
      {
        type: "negative",
        title: "नकारात्मक ऊर्जा",
        text: "प्रकृति का विघटन करती है",
      },
    ],
    images: [
      {
        src: "/Urja-Vigyan/img_2.webp",
        alt: "ऊर्जा की गति चित्र 1",
      },
      {
        src: "/Urja-Vigyan/img_3.webp",
        alt: "ऊर्जा की गति चित्र 2",
      },
    ],
    principlesTitle: "ऊर्जा के मुख्य सिद्धांत",
    principles: [
      "दोनों गतियाँ दो तरह की प्रकृति (इकोलॉजी) का निर्माण करती हैं।",
      "दोनों प्रकृतियाँ (इकोलॉजी) एक-दूसरे के विरोधक-संहारक होते हैं।",
      "दोनों इकोलॉजी को हम रूप, रंग, गंध, स्वर, स्पर्श से समझ सकते हैं या माप सकते हैं।",
      "इसी आधार पर इकोलॉजी अच्छा या बुरा (खराब) अर्थात सकारात्मक-नकारात्मक में पहचान बना लेती है।",
      "सकारात्मक ऊर्जा प्रकृति का सृजन करती है, नकारात्मक ऊर्जा प्रकृति का विघटन करती है।",
    ],
    footerImage: {
      src: "/Urja-Vigyan/img_4.webp",
      alt: "ऊर्जा प्रवाह",
    },
  },

  manureCycle: {
    title: "सूखे गोबर का ढेर (घूरा) का ऊर्जा चक्र",
    mainDiagram: {
      src: "/Urja-Vigyan/img_5.webp",
      alt: "घूरे का ऊर्जा चक्र - मुख्य चित्र",
    },

    problem: {
      title: "⚠️ समस्या",
      text: "कृषि करते समय या भूमि उपचार के दौरान घूरे का कच्चा गोबर खेत में ना डालें, यह गोबर खेत में फंगस, वायरस, कीट व खरपतवारों को बढ़ाता है।",
      bulletsTitle: "यह फसल की शत्रु इकोलॉजी को जन्म देता है:",
      bullets: [
        "फंगस और वायरस की वृद्धि",
        "कीटों का प्रकोप",
        "खरपतवारों की अधिकता",
        "रस चूसक कीटों का प्रकोप",
      ],
    },

    molecularChange: {
      title: "घूरे की गोबर की ऊर्जा का आणविक परिवर्तन",
      text: "जहाँ जैसी ऊर्जा होती है वहाँ वैसे ही अणु और जीवाणु उत्पन्न होते हैं। घूरे के गोबर में नकारात्मक ऊर्जा होने से उसमें नकारात्मक अणु बनते हैं।",
      proof:
        "प्रमाण: इस ऊर्जा से बने हुए उक्त सभी जीव लचीले, चमकीले और आलसी हैं। ऐसे ही इस खाद से उत्पन्न कार्बन, फास्फोरस पोटास में ऐसे ही गुण होंगे, जिससे पौधा लचीला, चमकीला और आलसी रहता है।",
    },

    solution: {
      title: "✅ समाधान",
      steps: [
        "गोबर को 2 फुट की ऊंचाई में फैलाएं",
        "पानी डालकर ठंडा करें",
        "बीच-बीच में छेद करके प्रति ट्राली गोबर के मान से हाई सीएन रेशियो घोल मिलाएं",
        "15 दिन बाद उक्त घोल को पुनः मिलते हुए उलटा-पलटा कर दें",
      ],
      mixtureTitle: "हाई सीएन रेशियो घोल में:",
      mixtureList: [
        "देशी गाय का गोबर",
        "जीवाणु जल",
        "जैव रसायन",
        "जीवन ऊर्जा",
        "अन्न द्रव्य रसायन",
        "भस्म रसायन",
        "षडरस",
      ],
      timeNote: "⏱️ एक माह में सजीव कम्पोस्ट खाद बनकर तैयार हो जाता है",
      usage:
        "उपयोग: बुवाई पूर्व जमीन में प्रति ट्राली, प्रति एकड़ इस खाद का भुरकाव करें।",
    },

    analysis: {
      title: "🔬 वैज्ञानिक विश्लेषण",
      text: "श्री ताराचंद बेलजी (गुरुजी) ने इस इकोलॉजी का विस्तारपूर्वक विश्लेषन किया है। यह शोध प्राकृतिक खेती शोध संस्था से जुड़े बहुत से किसानों के अनुभव पर आधारित है।",
      conclusion:
        "निष्कर्ष: जैसी ऊर्जा होगी वैसे अणु और जीवाणु उत्पन्न होते हैं। पौधे की पत्तियाँ चमकदार तो होती हैं पर ऐसी फसल से उपज कम आती है।",
      images: [
        {
          src: "/Urja-Vigyan/img_6.webp",
          alt: "TCBT पुस्तक - ऊर्जा विज्ञान",
        },
        {
          src: "/Urja-Vigyan/img_7.webp",
          alt: "ऊर्जा चक्र प्रक्रिया",
        },
      ],
    },
  },
};
