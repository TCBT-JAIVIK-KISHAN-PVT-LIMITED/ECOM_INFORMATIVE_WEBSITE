import React from "react";

export default function BhoomiUpcharPage() {
    return (
        <div className="bg-linear-to-br from-green-50 via-white to-amber-50 text-gray-800">

            {/* Hero Section */}
            <section
                className="flex items-center justify-center relative bg-linear-to-br from-emerald-950 via-green-900 to-teal-950 text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
            >
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-2xl">
                            भूमि उपचार
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-50 font-light tracking-wide">
                            TCBT वृक्षायुर्वेद विज्ञान
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* ================= WHY SECTION ================= */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 sm:mb-8 lg:mb-10 border-t-4 border-primary hover:shadow-3xl transition-shadow duration-300">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 text-center lg:text-left">
                            भूमि उपचार की आवश्यकता क्यों?
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl group">
                                    <img
                                        src="https://www.tcbtjaivikkisan.com/files/Gallary/bhoomi%20upchar/Screenshot%202025-12-05%20181318.webp"
                                        alt="भूमि उपचार"
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            <div className="order-1 lg:order-2 text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 sm:space-y-6">
                                <p className="text-justify">
                                    आधुनिक रसायनिक खेती ने मिट्टी को बहुत ज्यादा कठोर (सख्त) कर दिया है, मिट्टी सख्त होने से नये-नये तरह के खरपतवार भी उग रहे हैं। मिट्टी से हवा निकल गई है, मिट्टी की पानी पकड़ने की क्षमता बहुत कम हो गई है, मिट्टी का कार्बन लेवल बहुत घट गया है, ऊपरी 6 इंच की सतह में अति आवश्यक सुक्ष्म खनिज तत्व लगभग समाप्त हो गए हैं। जिसके कारण पौधों में संतुलित विकास नहीं हो रहा है और इन खनिज तत्वों की कमी से फसलों में बीमारी भी बढ़ रही है। मिट्टी का पीएच भी असंतुलित हो गया है, केटाईन एक्सचेंज कैपीसिटी (ईसी) भी अवरूद्ध हो गया है। मिट्टी में फसल को बढ़ाने वाले जीवाणुओं के स्थान पर कीटाणु बहुत ज्यादा बढ़ गए हैं। फंगस, वायरस, व्हाइट ग्रब्स, तेला, चेपा, माहू, निमेटोड जैसे हानिकारक कीट बहुत ज्यादा बढ़ गए हैं।
                                </p>

                                <p className="text-justify">
                                    इस सब का स्थाई समाधान TCBT वृक्षायुर्वेद विज्ञान से पिछले 15 वर्षों के अध्ययन और शोध से प्राप्त परिणामों के आधार पर आप सब किसानों को दिया जा रहा है। भारत भर के सैकड़ों किसानों ने TCBT वृक्षायुर्वेद विज्ञान के भूमि उपचार को अपनाकर अपनी मिट़्टी को शुद्ध, स्वस्थ्य, सजीव और समृद्ध कर लिया है। अाप भी यह प्रक्रिया अपनाएँ और उक्त सभी समस्याओं से स्थाई िनदान पाएं, 2 वर्षमें कृषि भूमि में पौने दो प्रतिशत तक कार्बन बढ़ाकर अपनी मिट्टी को मक्खन जैसी मुलायम बनाएँ।
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= TCBT PROCESS ================= */}
                    <div className="bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 sm:mb-8 lg:mb-10 border border-green-200">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-8 lg:mb-10 text-center">
                            TCBT भूमि उपचार प्रक्रिया
                        </h2>

                        <div className="space-y-4 sm:space-y-5 text-gray-900 text-sm sm:text-base leading-relaxed">

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-primary shadow-sm">
                                4 फुट के अंतर से सब-सॉइलर चलाएँ। (सब-सॉइलर एक ऐसा यंत्र है जो ढाई फुट गहराई की मिट्टी में चीरा लगा देता है, जिससे मिट्टी के अंदर हवा, पानी, जीवाणु और केंचुओं के आने–जाने की व्यवस्था बन जाती है।)
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-green-500 shadow-sm">
                                300 लीटर पानी में 400 ग्राम भू-शक्ति ऊर्जा भस्म, 2 किलो भू-निर्विषी भस्म, 800 ग्राम फफूंदरोधी भस्म—तीनों को मिलाकर मिट्टी के ऊपर अच्छे से स्प्रे करें या सिंचाई जल के साथ पूरे जमीन में जाने दें।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-teal-500 shadow-sm">
                                जेसीबी से 5 फुट तक की गहराई की 30 से 35 ट्राली मिट्टी खोदकर एक एकड़ खेत में फैलाएँ और रोटावेटर चलाकर जमीन समतल कर लें।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-emerald-500 shadow-sm">
                                इसके बाद खेती की जमीन पर 2 क्विंटल आयरन ऑक्साइड (50% वाली), 4 क्विंटल मैग्निशियम–कैल्शियम प्राकृतिक खनिज (28%–20% वाली) या जिप्सम प्राकृतिक खनिज (सल्फर 36%, कैल्शियम 22% वाली), 2 क्विंटल रॉक फॉस्फेट प्राकृतिक खनिज (फॉस्फेट 20%), 50 किलो गोवर्धन खनिज खाद (सूक्ष्म अणु–जीवाणु मिश्रण)—सभी को मिलाकर प्रति एकड़ भुरकाव करें।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-green-600 shadow-sm">
                                5 किलो तिल (तिल्ली के बीज) का प्रति एकड़ बुवाई करें और 35 दिन तक बढ़ने दें।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-primary shadow-sm">
                                तिल के ऊपर सिंचाई करते समय 200 लीटर जीवाणु जल, 200 लीटर ففूंद-भक्षक घोल, 200 लीटर कीट-भक्षक घोल चलाएँ। अलग से 200 लीटर पानी में ऊर्जा जल और अणु जल का मिश्रण भी चलाएँ। ऐसी तीन बार सिंचाई अवश्य करें। 600–600 लीटर का कोर्स पूरा करें।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-teal-600 shadow-sm">
                                35 दिन बाद तिल के पौधों के ऊपर रोटावेटर चलाकर जमीन में हरी खाद के रूप में दबा दें।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-emerald-600 shadow-sm">
                                600 लीटर हाई C:N रेशियो घोल बनाकर वेंचूरी के माध्यम से जमीन के ऊपर सिंचाई करें।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-green-700 shadow-sm">
                                15 दिन बाद 5 किलो तिल पुनः बोएँ और ऊर्जा जल, अणु जल का मिश्रण तथा फफूंद–कीट भक्षक का घोल—इनका कोर्स पुनः पूरा करें। 35 दिन बाद तिल के पौधों को पुनः गाड़ दें, 500 लीटर हाई C:N रेशियो का घोल डालकर जमीन को छोड़ दें।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-primary shadow-sm">
                                35 किलो सन की बुवाई करें। ऊर्जा जल और जीवाणु जल डालकर सन के पौधों को 35 दिन तक बढ़ने दें।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-teal-700 shadow-sm">
                                इसके बाद जिस भी प्रकार की फसल बोनी है, उस फसल की आवश्यक मात्रा बीज को प्रति एकड़ भुरकाव कर दें। पाटा चलाकर सन के पौधों को सुला दें। सब्जी वर्गीय बीजों के पौधों को सन के पौधों को सुलाने के बाद लाइन से लगा दें। लाइन के ऊपर ड्रिप सिंचाई सिस्टम लगा दें। प्रति सप्ताह प्रति एकड़ हाई C:N रेशियो घोल 200 लीटर वेंचूरी के माध्यम से जमीन में जाने दें।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-emerald-700 shadow-sm">
                                अमावस्या के आसपास फसलों के ऊपर ऊर्जा जल 20%, अणु जल 50%, 3% छाछ द्रव्य-रसायन—तीनों को मिलाकर सुबह के समय स्प्रे करना है। और शाम को 50% कीट-भक्षक घोल का स्प्रे करें।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-green-800 shadow-sm">
                                इसी तरह पूर्णिमा के समय फसलों पर 1% जैव-रसायन, 3% षडरस, 10% जीवाणु जल, 50% अणु जल को मिलाकर फसलों पर स्प्रे करें। पहली फसल समाप्त होने के बाद दूसरी फसल भी बिना जुताई की लगा देनी है। इसके लिए TCBT पाठशाला के वीडियो देखें।
                            </p>
                        </div>

                        <div className="bg-linear-to-r from-amber-50 to-yellow-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 mt-8 sm:mt-10 border-l-4 border-yellow-500 shadow-xl">
                            <p className="text-gray-800 text-base sm:text-lg lg:text-xl italic leading-relaxed text-center sm:text-left">
                                ताराचंद बेलजी तकनीक में भूमि का सम्पूर्ण उपचार एक वर्ष में पूर्ण हो जाता है. मिट्टी मख्खन जैसी मुलायम और सौंधी महक वाली हो जाती है, प्रति वर्ग फुट मिट्टी खाने वाले तीन इंडोजेइक केचुए आ जाते है।
                            </p>
                        </div>
                    </div>

                    {/* ================= SANSKRIT QUOTE ================= */}
                    <div className="bg-linear-to-r from-amber-100 via-yellow-100 to-amber-100 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 sm:mb-8 lg:mb-10 text-center border-2 border-yellow-300">
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                            ।। यस्मिन् भूम्याम् जीवा नास्ति, सा भूमि एव नास्ति ।।
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">
                            "जिस भूमि में सूक्ष्म जीवाणु नहीं हैं, वह भूमि ही नहीं है।"
                        </p>
                    </div>

                    {/* ================= प्रकृति और कृषि का रहस्य ================= */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-14 space-y-6 sm:space-y-8 text-gray-800 leading-relaxed text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 tracking-wide text-center sm:text-left">
                            🌱 प्रकृति और कृषि का रहस्य
                        </h2>

                        <p className="text-justify">
                            प्रकृति के जीवन क्रम में जो भी परिवर्तन होता है, वह जीवाणुओं के कारण होता है। जीवाणु ही बीजों को उगाते हैं, बढ़ाते हैं और सभी प्रकार का पोषण देते हैं — और तो और फसलों की सुरक्षा भी करते हैं।
                        </p>

                        <div className="bg-linear-to-br from-green-50 to-emerald-50 border-l-4 sm:border-l-8 border-green-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg">
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700 mb-2 sm:mb-3">
                                "जन्तु नाम जीवनम कृषि"
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-justify">
                                इसी बात को कृषि के संदर्भ में महर्षि पारासर जी अपनी <strong>पारासर संहिता</strong> में स्पष्ट कहते हैं कि<br />
                                <strong className="text-green-900 block mt-2">
                                    "जीवाणुओं का पूर्ण जीवन होना ही कृषि है।"
                                </strong>
                            </p>
                        </div>

                        <p className="text-justify">
                            इसलिए कृषि भूमि में समस्त प्रकार के जीवाणुओं का होना आवश्यक है। यदि कृषि भूमि में ये जीवाणु नहीं हैं तो ऐसी भूमि को भूमि के बजाय <strong>मिट्टी</strong> कहेंगे। मिट्टी होना अर्थात <strong>मृत होना</strong> है।
                        </p>

                        <p className="text-justify">
                            आज अपनी कृषि भूमि मिट्टी हो गई है, मृत हो गई है — जिससे बार-बार बड़े-बड़े ट्रैक्टरों से जोत-जोत कर और रसायन डाल-डाल कर जबरदस्ती फसल ले रहे हैं।
                        </p>

                        <p className="font-semibold text-green-800 text-justify">
                            जिस मिट्टी में जीवाणु होते हैं — वहाँ अपनी-आप बढ़िया फसल होती है। पौधे खुद से हरे-भरे रहते हैं, न बीमारी आती है और न कीट।
                        </p>

                        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mt-6 sm:mt-8 lg:mt-10">
                            <img
                                src="https://www.tcbtjaivikkisan.com/files/Gallary/%E0%A4%AB%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A5%82%E0%A4%B2%E0%A5%87/optimized_Screenshot%202025-11-25%20181145_500x286.webp"
                                alt="कृषि फार्मूला"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* ================= मिट्टी की समस्याएँ ================= */}
                    <div className="bg-linear-to-br from-red-50 via-orange-50 to-red-50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 sm:mb-8 lg:mb-10 border-t-4 border-red-500">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center sm:text-left">
                            मिट्टी में तीन तरह की समस्याएँ होती हैं –
                        </h3>

                        <div className="space-y-6 sm:space-y-8 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">

                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg border-l-4 border-primary">
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4">पहली समस्या</h4>
                                <p className="text-justify">
                                    अमूमन खेती में केमिकल फर्टिलाइज़र डालने वाले, मुर्गी खाद डालने वाले, या जैविक प्राकृतिक खेती के नाम पर बदबूदार घोल डालने वाले किसानों की मिट्टी निगेटिव होती है। ऐसी मिट्टी को पॉज़िटिव बनाने के लिए फसल कटाई के पश्चात मिट्टी के ऊपर से फसल अवशेष हटाकर खाली खेत में या खुले खेत में या पड़त मिट्टी के ऊपर 200 ग्राम अग्निहोत्र भस्म और 200 ग्राम फिटकरी को 200 लीटर पानी में मिलाकर सिंचाई जल के साथ प्रति एकड़ खेत में जाने दें। ऐसा 4–5 बार करें। अब आपकी मिट्टी पूरी तरह से पॉज़िटिव हो गई है। आप ऊर्जा जांच कर सकते हैं, मिट्टी ताकत देने लगेगी या बहते हुए पानी में, पानी के स्रोत में अग्निहोत्र भस्म और राह ऊर्जा भस्म डालकर सिंचाई के पानी में मिलाकर खेत में जाने दें। मिट्टी के निगेटिव होने पर खेत में फंगस बहुत बढ़ जाता है। ऐसी स्थिति में फफूंद भक्षक घोल भी चार से पाँच बार खेत में चलाना है।
                                </p>
                            </div>

                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg border-l-4 border-green-600">
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4">दूसरी समस्या</h4>
                                <p className="text-justify mb-4">
                                    बीज उगाने वाले और पौधों को बढ़ाने वाले जीवाणुओं का न होना। गैर-जैविक खेती के कारण हमारी भूमि में जीवाणु समाप्त हो गए हैं। ये जीवाणु तुरंत नहीं आयेंगे। धीरे-धीरे ये अपनी आप बढ़ेंगे। पर मुसीबत ये है कि इनके बढ़ने से पहले खरपतवार के बीज, सड़े हुए कार्बनिक पदार्थ की उपस्थिति में बढ़ने वाले रोगों के बीजाणु, या फसल के अवशेष इतनी तादात में हैं, जो बीज उगने और बढ़ने नहीं देते। क्यों कि पौधों को खाने वाले कीट जीवाणु जो बीजों को खराब करते हैं, भरे पड़े हैं। इसका तरीका यही है कि इन सूक्ष्म जीवों को बाहर से जमीन में डाला जाये। उसमें भी खरपतवार के बीज खाने वाले जीवाणु, रोग व कीट नाशक जीवाणु भी डालने होंगे।
                                </p>

                                <div className="bg-linear-to-br from-amber-50 to-yellow-50 rounded-xl p-4 sm:p-5 lg:p-6 border-l-4 border-amber-500">
                                    <h5 className="text-base sm:text-lg lg:text-xl font-bold text-amber-700 mb-2 sm:mb-3">उपचार</h5>
                                    <p className="mb-2">हर सिंचाई में 10 लीटर गौमूत्र व 10 लीटर जैव-रसायन प्रति एकड़ दें।</p>
                                    <p className="mb-2">10 बार की सिंचाई में कुल 100 लीटर गौमूत्र व 100 लीटर जैव-रसायन चलाया जाता है।</p>
                                    <p>एक वर्ष की अवधि में यह कोर्स पूरा करें।</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg border-l-4 border-teal-600">
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4">तीसरी समस्या</h4>
                                <p className="text-justify mb-3">
                                    मिट्टी में पड़े हुए खनिज तत्व फॉस्फोरस, पोटास, सल्फर, कैल्सियम, मैग्नीशियम, लोहा, तांबा, जस्ता आदि को खाने वाले विभिन्न तरह के जीवाणु होते हैं, जिन्हें फॉस्फोरस सॉल्ब्युलाईजिंग बैक्टीरिया, सल्फर सॉल्ब्युलाईजिंग, कैल्सियम, मैग्नीशियम, जिंक सॉल्ब्युलाईजिंग बैक्टीरिया कहा जाता है।
                                </p>

                                <p className="text-justify mb-3">
                                    ये जीवाणु जब मिट्टी के इन खनिज तत्वों को खाकर फॉस्फोरस को पेंटाऑक्साइड, पोटास को पोटेशियम ऑक्साइड, सल्फर, जिंक, लोहा, तांबा को ऑक्साइड फॉर्म में (उपलब्ध अवस्था में) बदलने लगते हैं तो कृषिभूमि अपने आप मुलायम होने लग जाती है, भूमि से सोंधी महक आने लग जाती है।
                                </p>

                                <p className="text-justify mb-3">
                                    किसान जब भी खेती करता है, फसल काटने के बाद फसल की जड़ें और अंत में तना-पत्तियाँ खेत की मिट्टी में रह जाती हैं।
                                </p>

                                <p className="text-justify mb-3">
                                    इन फसल अवशेष (कार्बनिक पदार्थों) को खाने वाले भी बहुत से जीवाणु होते हैं, जिन्हें डी-कम्पोजिंग बैक्टीरिया कहा जाता है, इनमें एस्परजिलस अवामोरी, मुख्य डी-कम्पोजिंग बैक्टीरिया हैं।
                                </p>

                                <p className="text-justify mb-3">
                                    ऐसे ही हवा से नाइट्रोजन खींचकर इसे ऑक्सीकरण करके जमीन में छोड़ने वाले जीवाणु भी होते हैं, जिनमें राइजोबियम, एजोटोबैक्टर, एजोस्पिरिलम, एसिटोबैक्टर मुख्य हैं।
                                </p>

                                <p className="text-justify mb-3">
                                    ऐसे ही बीजों को अंकुरित करवाने वाले, बढ़ाने वाले बहुत से प्रोबायोटिक बैक्टीरिया होते हैं।
                                </p>

                                <p className="text-justify mb-3">
                                    ऐसे ही जमीन के 15 फुट नीचे जाकर पानी लाकर जड़ों के अंदर डालने वाला कवक-जीवाणु माइकोराइजा होता है। यह सूखे की स्थिति में भी पौधे को लगातार पानी देता रहता है। इसी कवक के कारण भरी गर्मी में अनेक तरह के पौधे फूलों-फलों से लहलहाते रहते हैं। गर्मी में भी इनके फूल पानी से भरे रहते हैं।
                                </p>

                                <p className="font-semibold text-green-700">
                                    राह FPO आपको यह भी उपलब्ध करवा रही है।
                                </p>

                                <p className="text-justify">
                                    ये हर एक जीवाणु हमारी मिट्टी में अर्थात 20 लाख जीवाणु प्रति ग्राम मिट्टी में होने चाहिए। अर्थात एक ग्राम मिट्टी में सभी जीवाणुओं की एक से दो करोड़ कॉलोनियाँ होनी चाहिए।
                                </p>
                            </div>

                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg border-l-4 border-orange-600">
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4">चौथी समस्या</h4>
                                <p className="text-justify">
                                    जमीन के अंदर के कीट (व्हाइट ग्रब्स, दीमक, संडूई) या जमीन के ऊपर के कीट (इल्ली, माहू, तेलापा आदि सभी) को समाप्त करने वाले मांसाहारी सूक्ष्मजीव मेटारीजियम एनीसोपली, बरटसिलियम लेकानी, बीबेरिया बासियाना, हेरसटेला थॉम्सनी वायरस (राह वर्टी भक्षक, मेटा भक्षक या कीट भक्षक वीबीएम) को 200 लीटर पानी में डालकर 200 ग्राम गड़ु मिलाएँ। तत्पश्चात मिट्टी या घरू में पड़े व्हाइट ग्रब्स के कोकून या इल्ली या चने मंगू इल्ली 25–50 नग ड्रम में डाल दें। 3 दिन बाद इसे सिंचाई जल में मिलाकर जमीन में जाने दें। इसका 50 प्रतिशत स्प्रे करने से कीटों की समस्या भी हल होती है।
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ================= तैयारी सूची ================= */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 sm:mb-8 lg:mb-10 border-t-4 border-accent">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center sm:text-left">
                            तैयारी सूची
                        </h3>

                        <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base lg:text-lg">
                            <p className="bg-linear-to-r from-green-50 to-emerald-50 p-4 sm:p-5 rounded-xl border-l-4 border-green-500 shadow-sm">
                                मिट्टी की ऊर्जा एवं पंच महाभूत की जांच TCBT वृक्षायुर्वेद अभ्यासक से कराएं।
                            </p>
                            <p className="bg-linear-to-r from-blue-50 to-cyan-50 p-4 sm:p-5 rounded-xl border-l-4 border-blue-500 shadow-sm">
                                अपने ट्यूबवेल या सिंचाई स्रोत के पास वने रचूई लगाएँ, 3 ड्रम रखें।
                            </p>
                            <p className="bg-linear-to-r from-amber-50 to-yellow-50 p-4 sm:p-5 rounded-xl border-l-4 border-amber-500 shadow-sm">
                                कम्पोस्ट खाद / तिल की हरी खाद की व्यवस्था करें।
                            </p>
                            <p className="bg-linear-to-r from-purple-50 to-pink-50 p-4 sm:p-5 rounded-xl border-l-4 border-purple-500 shadow-sm">
                                जैव-रसायन एवं खनिज भस्म बनाने की प्रक्रिया शुरू करें।
                            </p>
                            <p className="bg-linear-to-r from-teal-50 to-cyan-50 p-4 sm:p-5 rounded-xl border-l-4 border-teal-500 shadow-sm">
                                जीवाणु किट एवं अग्निहोत्र किट की व्यवस्था करें।
                            </p>
                        </div>
                    </div>

                    {/* ================= अतिरिक्त दिशा-निर्देश ================= */}
                    <div className="bg-linear-to-br from-blue-50 via-indigo-50 to-blue-50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 sm:mb-8 lg:mb-10 border-2 border-blue-200">
                        <div className="space-y-4 sm:space-y-5 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-blue-500 shadow-sm">
                                मिट्टी की जाँच रिपोर्ट में कार्बन तत्व की मात्रा 0.5% से कम आने पर 20–25 क्विंटल कम्पोस्ट खाद प्रति एकड़ डालनी है, या हरी खाद के लिए 2 किलो तिल को बोकर 35 दिन बाद जमीन में मिलाना है।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                                मिट्टी बहुत सख्त हो तो इसे तोड़ने के लिए प्रति एकड़ 4 क्विंटल रॉक फॉस्फेट डालें।
                            </p>

                            <p className="text-justify bg-white bg-opacity-60 p-4 sm:p-5 rounded-xl border-l-4 border-purple-500 shadow-sm">
                                सूक्ष्म तत्वों की कमी हो तो प्रति एकड़ 2 क्विंटल लाल मिट्टी और 2 क्विंटल सफेद मिट्टी भी डालें।
                            </p>
                        </div>
                    </div>

                    {/* ================= सावधानिया ================= */}
                    <div className="bg-linear-to-br from-green-50 via-emerald-50 to-green-50 text-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-14 space-y-6 sm:space-y-8 border-2 border-emerald-200">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide mb-4 sm:mb-6 text-emerald-800 text-center">
                            घूरे की गोबर खाद (FVM) संबंधित सावधानिया
                        </h2>

                        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-200">
                            <img
                                src="https://www.tcbtjaivikkisan.com/files/Gallary/energetics/Screenshot%202025-11-27%20110851.webp"
                                alt="घूरे के गोबर की ऊर्जा"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="text-sm sm:text-base lg:text-xl leading-relaxed space-y-4 sm:space-y-6">
                            <p className="text-justify">
                                कृषि करते समय या भूमि उपचार के दौरान घूरे का कच्चा गोबर खेत में न डालें। यह गोबर खेत में फंगस, वायरस, कीट व खरपतवारों को बढ़ाता है। यह फसल की शत्रु इकोलॉजी को जन्म देता है, जिससे खेती में कई परेशानियाँ पैदा होती हैं। श्री ताराचंद बेलजी (गुरुजी) ने इस इकोलॉजी का विस्तारपूर्वक विश्लेषण किया है, जिसका रेखा चित्र निम्नांकित है –
                            </p>

                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-green-700 text-center sm:text-left">
                                घूरे के गोबर की ऊर्जा का आणविक परिवर्तन
                            </h3>

                            <p className="italic text-gray-600 text-center sm:text-left text-sm sm:text-base lg:text-lg">
                                जहाँ जैसी ऊर्जा होती है वहाँ वैसे ही अणु और जीवाणु उत्पन्न होते हैं।
                            </p>

                            <p className="text-justify">
                                घूरे के गोबर में नकारात्मक ऊर्जा होने से उसमें नकारात्मक अणु बनते हैं। इसका प्रमाण यह है कि इस ऊर्जा से बने हुए उक्त सभी जीव लचीले, चमकीले और आलसी हैं। ऐसे ही इस खाद से उत्पन्न कार्बन, फॉस्फोरस, पोटास में भी ऐसे ही गुण होंगे, जिससे पौधा लचीला, चमकीला और आलसी रहता है। पौधे की पत्तियाँ चमकदार तो होती हैं, पर ऐसी फसल से उपज कम आती है। ऐसा प्राकृतिक खेती शोध संस्था से जुड़े बहुत से किसानों का अनुभव है।
                            </p>

                            <p className="text-justify">
                                इसी तरह से इस गोबर को जिस खेत में डाला जाता है, वहाँ बहुत खरपतवार उगते हैं, वायरस, फंगस और रस चूसक कीट बहुतायत में उत्पन्न होते हैं। इससे सिद्ध होता है कि जैसी ऊर्जा होगी, वैसे अणु और जीवाणु उत्पन्न होते हैं।
                            </p>

                            <p className="text-justify">
                                परंपरागत खेती के इस दोष ने उतना ही नुकसान किया है जितना रसायनिक खेती के केमिकलों ने किया है। परंपरागत खेती के घूरे के गोबर के इस दोष के कारण ही 1999 तक भारत में धान का राष्ट्रीय औसत उत्पादन 6 क्विंटल प्रति एकड़ था। भारत अन्न की कमी और कुपोषण से जूझ रहा था।
                            </p>

                            <div className="bg-white border-2 border-green-300 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl">
                                <p className="font-extrabold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-green-700 text-center sm:text-left">
                                    सही तरीका:
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg text-justify">
                                    इस गोबर को डिकम्पोजर से कम्पोष्ट करके ही खेत में डालना है। इसको जीवाणु कम्पोस्ट खाद के रूप में इस तरह से बनाये।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}