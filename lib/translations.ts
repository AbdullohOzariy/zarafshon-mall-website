export type Lang = "uz" | "ru";

export const translations = {
  uz: {
    nav: {
      about: "Markaz haqida",
      floors: "Qavatlar",
      conditions: "Shartlar",
      advantages: "Afzalliklar",
      contact: "Aloqa",
      apply: "Ariza yuborish",
    },
    hero: {
      badge: "2026-yil sentabr — Grand Opening",
      title: "Biznesingizni zamonaviy darajaga",
      titleHighlight: "olib chiqing.",
      subtitle:
        "Shahardagi eng yirik savdo markazi.",
      cta: "Hamkorlik taklifi",
      ctaSecondary: "Ko'proq ma'lumot",
      address: "Zarafshon shahri, 13-kichik tuman, 104a",
    },
    stats: {
      title: "Raqamlarda",
      items: [
        { value: "4", label: "Qavat" },
        { value: "2026", label: "Ochilish yili" },
        { value: "1–3", label: "Oy remont kanikuli" },
        { value: "3–5", label: "Yil ijara muddati" },
      ],
    },
    floors: {
      title: "Qavatlar tuzilishi",
      subtitle:
        "Har bir qavatda turli yo'nalishdagi brendlar uchun joy mavjud",
      items: [
        {
          floor: "Podval (−1)",
          icon: "🛋️",
          description: "Uy-ro'zg'or, maishiy texnika va jihozlar, gilam va mebel",
          tags: ["Mebel", "Maishiy texnika", "Gilam"],
        },
        {
          floor: "1-qavat",
          icon: "🛒",
          description:
            "Supermarket, kundalik ehtiyojlar, kosmetika, dorixona, xizmatlar va kafe",
          tags: ["Supermarket", "Kosmetika", "Dorixona", "Kafe"],
        },
        {
          floor: "2-qavat",
          icon: "👗",
          description: "Moda va kiyim-kechak, sport, aksessuarlar",
          tags: ["Moda", "Sport", "Aksessuarlar"],
        },
        {
          floor: "3-qavat",
          icon: "🎮",
          description:
            "Oilaviy dam olish, food court, bolalar o'yingohlar, VR zona",
          tags: ["Food Court", "Bolalar o'yingoh", "VR Zona"],
        },
      ],
    },
    conditions: {
      title: "Hamkorlik shartlari",
      subtitle: "Shaffof va qulay shart-sharoitlar",
      items: [
        {
          label: "Ijara muddati",
          value: "3 yoki 5 yil",
          note: "Sizning afzalligingizga ko'ra",
        },
        {
          label: "Ijara narxi",
          value: "O'zaro kelishuv",
          note: "Joy va maydoniga qarab belgilanadi",
        },
        {
          label: "Remont kanikuli",
          value: "1–3 oy",
          note: "Ta'mirlash davrida ijara to'lanmaydi",
        },
        {
          label: "Depozit",
          value: "Kelishuv asosida",
          note: "Moslashuvchan shartlar",
        },
        {
          label: "Kommunal to'lovlar",
          value: "Alohida hisob",
          note: "Alohida hisob-kitob qilinadi",
        },
        {
          label: "Joy tanlash",
          value: "Talabingizdan",
          note: "Maydoni va qavati Sizning talabingizga ko'ra",
        },
      ],
    },
    advantages: {
      title: "Nima uchun Zarafshon Mall?",
      subtitle: "Brendingiz uchun eng qulay muhit",
      items: [
        {
          icon: "📍",
          title: "Qulay joylashuv",
          desc: "Aholi gavjum hudud, qulay transport infratuzilmasi",
        },
        {
          icon: "🚗",
          title: "Keng avtoturargohi",
          desc: "Ko'p sig'imli bepul avtoturargohi",
        },
        {
          icon: "👨‍👩‍👧‍👦",
          title: "Yuqori trafik",
          desc: "Maqsadli auditoriya va katta mijozlar oqimi",
        },
        {
          icon: "🏗️",
          title: "Zamonaviy bino",
          desc: "2026-yilda qurilgan zamonaviy infratuzilma",
        },
        {
          icon: "🤝",
          title: "Shaffof shartlar",
          desc: "Moslashuvchan ijara shartlari va remont kanikuli",
        },
        {
          icon: "📈",
          title: "Marketing qo'llab-quvvatlash",
          desc: "Mall darajasida marketing va reklama imkoniyatlari",
        },
      ],
    },
    contact: {
      title: "Hamkorlikni boshlaylik",
      subtitle:
        "Ariza qoldiring — mutaxassislarimiz siz bilan tez orada bog'lanadi",
      form: {
        name: "Kompaniya nomi",
        namePlaceholder: "Kompaniyangiz nomi",
        phone: "Telefon raqam",
        phonePlaceholder: "+998 __ ___ __ __",
        category: "Faoliyat turi",
        categoryPlaceholder: "Masalan: Moda, Oziq-ovqat...",
        area: "Kerakli maydon (m²)",
        areaPlaceholder: "Masalan: 50",
        message: "Qo'shimcha ma'lumot",
        messagePlaceholder: "Savollaringiz yoki izohlaringiz...",
        submit: "Ariza yuborish",
        submitting: "Yuborilmoqda...",
        success: "Arizangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.",
      },
      info: {
        title: "Bog'lanish ma'lumotlari",
        address: "Zarafshon shahri, 13-kichik tuman, 104a",
        phones: ["+998 99 494-80-88", "+998 93 885-66-06"],
        email: "info@zarafshonmall.uz",
        website: "zarafshonmall.uz",
      },
    },
    footer: {
      tagline: "Savdo va Ko'ngilochar Markazi",
      rights: "© 2024 Zarafshon Mall. Barcha huquqlar himoyalangan.",
      company: "MODERN TRADING SERVICE MChJ",
    },
  },

  ru: {
    nav: {
      about: "О центре",
      floors: "Этажи",
      conditions: "Условия",
      advantages: "Преимущества",
      contact: "Контакты",
      apply: "Подать заявку",
    },
    hero: {
      badge: "Сентябрь 2026 — Большое открытие",
      title: "Выведите свой бизнес на",
      titleHighlight: "современный уровень.",
      subtitle:
        "Крупнейший торговый центр города.",
      cta: "Предложение о сотрудничестве",
      ctaSecondary: "Узнать больше",
      address: "г. Зарафшан, 13-й микрорайон, 104а",
    },
    stats: {
      title: "В цифрах",
      items: [
        { value: "4", label: "Этажа" },
        { value: "2026", label: "Год открытия" },
        { value: "1–3", label: "Мес. арендные каникулы" },
        { value: "3–5", label: "Лет срок аренды" },
      ],
    },
    floors: {
      title: "Структура этажей",
      subtitle: "На каждом этаже есть место для брендов разного направления",
      items: [
        {
          floor: "Подвал (−1)",
          icon: "🛋️",
          description: "Товары для дома, бытовая техника, ковры и мебель",
          tags: ["Мебель", "Техника", "Ковры"],
        },
        {
          floor: "1-й этаж",
          icon: "🛒",
          description:
            "Супермаркет, товары повседневного спроса, косметика, аптека, сервисы и кафе",
          tags: ["Супермаркет", "Косметика", "Аптека", "Кафе"],
        },
        {
          floor: "2-й этаж",
          icon: "👗",
          description: "Мода и одежда, спорт, аксессуары",
          tags: ["Мода", "Спорт", "Аксессуары"],
        },
        {
          floor: "3-й этаж",
          icon: "🎮",
          description: "Семейный отдых, фудкорт, детские площадки, VR-зона",
          tags: ["Фудкорт", "Детская зона", "VR-зона"],
        },
      ],
    },
    conditions: {
      title: "Условия сотрудничества",
      subtitle: "Прозрачные и выгодные условия",
      items: [
        {
          label: "Срок аренды",
          value: "3 или 5 лет",
          note: "По вашему усмотрению",
        },
        {
          label: "Арендная ставка",
          value: "По договорённости",
          note: "Зависит от площади и расположения",
        },
        {
          label: "Арендные каникулы",
          value: "1–3 месяца",
          note: "Аренда не взимается в период ремонта",
        },
        {
          label: "Депозит",
          value: "По договорённости",
          note: "Гибкие условия",
        },
        {
          label: "Коммунальные платежи",
          value: "Отдельный счёт",
          note: "Рассчитываются отдельно",
        },
        {
          label: "Выбор помещения",
          value: "По вашим требованиям",
          note: "Площадь и этаж — по вашим запросам",
        },
      ],
    },
    advantages: {
      title: "Почему Zarafshon Mall?",
      subtitle: "Идеальная среда для вашего бренда",
      items: [
        {
          icon: "📍",
          title: "Удобное расположение",
          desc: "Густонаселённый район, развитая транспортная инфраструктура",
        },
        {
          icon: "🚗",
          title: "Большая парковка",
          desc: "Бесплатная парковка большой вместимости",
        },
        {
          icon: "👨‍👩‍👧‍👦",
          title: "Высокий трафик",
          desc: "Целевая аудитория и большой поток покупателей",
        },
        {
          icon: "🏗️",
          title: "Современное здание",
          desc: "Современная инфраструктура, построенная в 2026 году",
        },
        {
          icon: "🤝",
          title: "Прозрачные условия",
          desc: "Гибкие условия аренды и арендные каникулы",
        },
        {
          icon: "📈",
          title: "Маркетинговая поддержка",
          desc: "Возможности маркетинга и рекламы на уровне торгового центра",
        },
      ],
    },
    contact: {
      title: "Начнём сотрудничество",
      subtitle: "Оставьте заявку — наши специалисты свяжутся с вами в ближайшее время",
      form: {
        name: "Название компании",
        namePlaceholder: "Название вашей компании",
        phone: "Номер телефона",
        phonePlaceholder: "+998 __ ___ __ __",
        category: "Вид деятельности",
        categoryPlaceholder: "Например: Мода, Продукты...",
        area: "Необходимая площадь (м²)",
        areaPlaceholder: "Например: 50",
        message: "Дополнительная информация",
        messagePlaceholder: "Ваши вопросы или комментарии...",
        submit: "Отправить заявку",
        submitting: "Отправляется...",
        success: "Ваша заявка принята! Мы свяжемся с вами в ближайшее время.",
      },
      info: {
        title: "Контактная информация",
        address: "г. Зарафшан, 13-й микрорайон, 104а",
        phones: ["+998 99 494-80-88", "+998 93 885-66-06"],
        email: "info@zarafshonmall.uz",
        website: "zarafshonmall.uz",
      },
    },
    footer: {
      tagline: "Торгово-развлекательный центр",
      rights: "© 2024 Zarafshon Mall. Все права защищены.",
      company: "ООО «MODERN TRADING SERVICE»",
    },
  },
};
