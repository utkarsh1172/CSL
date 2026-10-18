# CRO ऑडिट: AI Leadership Program पेज (`/programs/ai-leadership`)

**पद्धत:** [wondelai/skills मधील cro-methodology](https://github.com/wondelai/skills/tree/main/cro-methodology) (CRE Methodology) — "अंदाज नको, शोधा".
**तारीख:** 18 ऑक्टोबर 2026
**मुख्य ध्येय (एकच conversion):** "Talk to an Advisor" फॉर्म भरणे (`lead_submit` event).

> सूचना: खालील ICE गुण हे पेज आणि कोड तपासून केलेले अंदाज आहेत. पद्धतीनुसार ते वापरकर्त्यांच्या संशोधनाने (exit survey, advisor कॉल नोट्स) पडताळून पहावेत.

---

## 1. सद्यस्थिती — गुण: सुमारे 3 / 10

Skill च्या Quick Diagnostic च्या धर्तीवर (प्रत्येक "हो" ≈ 1.4 गुण):

| # | तपासणी | निकाल | कारण |
|---|---|---|---|
| 1 | एकच स्पष्ट action | ❌ नाही | एकाच कामासाठी 6 वेगवेगळी बटण-नावे (खाली पहा) |
| 2 | संशोधनावर आधारित objection → उत्तर (O/CO) | ❌ नाही | अजून कोणतेही ग्राहक-संशोधन झालेले नाही |
| 3 | 5 सेकंदात value proposition स्पष्ट | ✅ हो | "AI Leadership Program For Tech Leaders" + कोणासाठी आहे ते स्पष्ट |
| 4 | शंकेच्या जागी पुरावा (proof at friction points) | ❌ नाही | testimonials 7 व्या विभागात; फॉर्मजवळ कोणताही पुरावा नाही |
| 5 | Funnel मोजला जातो | ⚠️ अंशतः | पायरी 1 मध्ये events जोडले; GTM ID मिळेपर्यंत डेटा कुठेही जात नाही |
| 6 | दावे पुराव्यासह | ❌ नाही | "Rated 4.9/5" — कोणी, किती reviews? स्रोत नाही |
| 7 | मोबाइल, फॉर्म आणि स्पीड | ✅ हो | फॉर्म फक्त 3 fields; मोबाइल layout नीट (पण फॉर्म पेजच्या शेवटी) |

Skill चे bands: **≤3 = "competing CTAs, no funnel map, claims with no proof"** — आपले पेज नेमके इथे आहे. डिझाइन चांगले आहे; अडचण रूपांतरणाच्या रचनेत (conversion structure) आहे.

---

## 2. Funnel नकाशा

```
पेज पाहिले → पेज वाचले (scroll) → CTA क्लिक → फॉर्म सुरू → lead सबमिट → advisor कॉल → admission
   (GTM)          (GTM scroll)       cta_click     form_start    lead_submit      (CRM)        (CRM)
```

पायरी 1 नंतर मधल्या तीन टप्प्यांचे events तयार आहेत. पहिले दोन GTM च्या built-in triggers ने, आणि शेवटचे दोन CRM मधून मोजावेत.

**"Blocked arteries" (गळती होणाऱ्या जागा) — कोडमधून सापडलेल्या:**

| बटण | कुठे जाते | समस्या |
|---|---|---|
| Hero: "Start Your Journey" | `/contact` | पेजवरच फॉर्म असताना वापरकर्ता पेज सोडून जातो |
| Section nav: "Contact Us" | `/contact` | तेच — पेजवरून बाहेर |
| Flagship: Executive / CISO कार्ड्स | `/programs/executive`, `/programs/ciso-leadership` | **404** — विश्वासाला सर्वात मोठा धक्का |
| "Download Brochure" (2 वेळा) | advisor फॉर्म | नाव PDF सांगते, पण फॉर्म उघडतो — अपेक्षाभंग |
| Mentor "View profile" (3 वेळा) | advisor फॉर्म | प्रोफाइलऐवजी फॉर्म — अपेक्षाभंग |

**एकाच कामासाठी 6 बटण-नावे:** Start Your Journey · Schedule a Free Call · Talk to an Advisor · Download Brochure · Contact Us · (footer) Request Connect.

---

## 3. 5 मुख्य अडचणी (Big 5 Objections) आणि पेजवरची उत्तरे

| अडचण | पेजवर सध्या काय आहे | काय कमी आहे / उत्तर (Counter-objection) | कुठे ठेवावे |
|---|---|---|---|
| **विश्वास** | 3 testimonials (अर्धवट नावे, फोटो नाहीत), mentors फक्त initials, stock फोटो | पूर्ण नाव + फोटो + कंपनी असलेले testimonials; rating चा स्रोत; mentors चे खरे फोटो | फॉर्मखाली आणि hero मध्ये |
| **किंमत** | USD 8,000, EMI, 25% scholarship (विभाग 4) | Price फॉर्मपासून दूर; ROI किंवा "काय मिळणार" याची मांडणी नाही; risk reversal नाही | फॉर्मजवळ एक ओळ: "USD 8,000 · EMI · up to 25% scholarship" |
| **योग्यता (Fit)** | "Who is this for?", FAQ मध्ये entry-level प्रश्न | ✅ चांगले — फक्त वर आणावे | hero खाली |
| **वेळ (Timing)** | Overview: "8 to 12 months"; FAQ: "Six months" | **विसंगती** — आधी दुरुस्त करा; पुढची batch कधी, आठवड्याला किती तास हे नाही | hero आणि overview |
| **मेहनत (Effort)** | "100% Online + Engagement-based" | आठवड्याचा वेळ, सत्रांची वेळ (time zone) | overview details |

---

## 4. सुधारणांची यादी — ICE प्राधान्याने

Weighted ICE = (Impact × 2 + Confidence × 1.5 + Ease) ÷ 4.5

| क्रम | सुधारणा | I | C | E | गुण |
|---|---|---|---|---|---|
| 1 | तुटलेल्या / दिशाभूल करणाऱ्या लिंक दुरुस्त करा (404 कार्ड्स, Brochure, View profile, `/contact` बटणे पेजवरच्या फॉर्मकडे) | 6 | 9 | 10 | **7.9** |
| 2 | कालावधीची विसंगती (8–12 महिने vs 6 महिने) दुरुस्त करा | 5 | 9 | 10 | **7.4** |
| 3 | सर्व CTA एकाच नावाने ("Talk to an Advisor") आणि एकाच ठिकाणी (पेजवरचा फॉर्म) | 7 | 7 | 9 | **7.4** |
| 4 | फॉर्मखाली पुरावा आणि आश्वासन: "Advisor 1 कामकाजाच्या दिवसात उत्तर देतात · spam नाही" + rating चा स्रोत | 7 | 7 | 9 | **7.4** |
| 5 | मोबाइलवर खाली चिकटलेले "Talk to an Advisor" बटण (आता फॉर्म पेजच्या शेवटी आहे) | 8 | 6 | 7 | **7.1** |
| 6 | Hero मध्ये कालावधी, स्वरूप, पुढची batch आणि किंमत/scholarship | 7 | 6 | 9 | **7.1** |
| 7 | खरे testimonials (पूर्ण नाव, फोटो, कंपनी, विशिष्ट निकाल) आणि एक hero जवळ | 7 | 8 | 5 | **6.9** |
| 8 | खरे brochure PDF (हवे तर email घेऊन — lead magnet) | 6 | 6 | 6 | **6.0** |
| 9 | Stock फोटोंऐवजी खरे cohort / mentor फोटो | 5 | 6 | 5 | **5.3** |
| 10 | बटणांचे रंग / शैली | 2 | 2 | 10 | **3.8** |

> 1–4 हे "test" नाहीत, तर थेट दुरुस्त्या (fixes) आहेत: त्या चुका आहेत, त्यांना A/B टेस्टची गरज नाही. A/B टेस्टिंग 5 पासून पुढे सुरू करावे.

---

## 5. पहिल्या A/B टेस्ट्स (धाडसी बदल — "no meek tweaks")

**टेस्ट A — Hero offer**
- *Hypothesis:* जर आम्ही hero मध्ये कालावधी, स्वरूप, पुढची batch आणि "USD 8,000 · scholarship up to 25%" दाखवून "Talk to an Advisor" हे एकच मुख्य बटण ठेवले, तर `lead_submit` दर वाढेल, कारण Timing आणि Price या शंका पहिल्या स्क्रीनवरच दूर होतात.
- *Primary metric:* प्रति visitor `lead_submit`. *Guardrail:* bounce rate, `form_start` दर.

**टेस्ट B — फॉर्मजवळ पुरावा**
- *Hypothesis:* जर आम्ही फॉर्मखाली एक पूर्ण-नावाचे testimonial, rating चा स्रोत आणि उत्तराची वेळ दाखवली, तर `form_start → lead_submit` पूर्णत्व दर वाढेल, कारण फॉर्म भरण्याच्या क्षणी Trust ही शंका सर्वात जास्त असते.

**नियम (पद्धतीनुसार):**
- 95% confidence, 80% power; सॅम्पल साईज आधीच ठरवा.
- किमान 1–2 आठवडे (एक पूर्ण व्यावसायिक चक्र) चालवा; मध्येच निकाल पाहून थांबवू नका.
- अंदाज: 5% conversion वर 20% वाढ ओळखायला प्रत्येक version ला सुमारे **25,000 visitors**; 50% वाढीसाठी सुमारे **4,000**.
- ट्रॅफिक कमी असेल तर लहान बदल टेस्ट करू नका — मोठे बदल करा (वरील टेस्ट A सारखे).
- Multivariate testing फक्त दरमहा 100k+ visitors झाल्यावर.

---

## 6. संशोधन योजना (अंदाज नको, शोधा)

1. **Exit survey — एकच प्रश्न:** "आज advisor शी बोलण्यापासून तुम्हाला काय थांबवत आहे?"
2. **Advisor कॉल नोट्स:** प्रत्येक कॉलमध्ये विचारलेले प्रश्न आणि शंका नोंदवा — हीच खरी objections यादी.
3. **Lead फॉर्ममधील "Message":** लोक काय विचारतात ते आठवड्याला वाचा.
4. वरून आलेल्या शंका Big 5 मध्ये वर्गीकृत करून O/CO टेबल अपडेट करा.

---

## 7. मोजमाप (पायरी 1 मध्ये तयार)

| Event | कधी | उपयोग |
|---|---|---|
| `cta_click` | कोणतेही CTA बटण दाबल्यावर (label + section सह) | कोणते बटण आणि कोणता विभाग काम करतो |
| `form_start` | फॉर्ममध्ये पहिल्यांदा click केल्यावर | फॉर्मपर्यंत किती लोक पोहोचतात |
| `lead_submit` | lead यशस्वी पोहोचल्यावर (form + page सह) | **मुख्य conversion** |
| `lead_error` | पाठवणे अयशस्वी झाल्यावर | तांत्रिक गळती |

**चालू करण्यासाठी:** `.env.local` मध्ये `NEXT_PUBLIC_GTM_ID` (Google Tag Manager) आणि `LEAD_WEBHOOK_URL` (CRM / Zapier / email) भरा. तपशील `.env.example` मध्ये आहे.

---

## 8. Learnings log (प्रत्येक टेस्टनंतर भरा)

| टेस्ट | Hypothesis | निकाल | काय शिकलो | कुठे लागू |
|---|---|---|---|---|
| | | | | |

> "A failed test that teaches you something is more valuable than a winning test you don't understand."
