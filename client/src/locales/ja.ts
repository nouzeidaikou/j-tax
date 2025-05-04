export default {
  nav: {
    home: 'ホーム',
    about: '脱退一時金とは',
    taxRefund: '所得税還付',
    process: '申請方法',
    testimonials: 'お客様の声',
    faq: 'よくある質問'
  },
  header: {
    brandName1: '日本厚生年金',
    brandName2: '代行',
    contactBtn: '無料相談'
  },
  hero: {
    title1: '日本厚生年金',
    title2: '脱退一時金',
    title3: '請求代行サービス',
    description: '日本で年金を納付された方は、帰国後に脱退一時金を受け取ることができます。複雑な手続きを私たちがサポートします。',
    calculateBtn: '還付金を計算する',
    applyBtn: '今すぐ申請する'
  },
  calculator: {
    title: '脱退一時金計算機',
    description: '平均標準報酬額と厚生年金納付月数を入力すると、予想される脱退一時金額を計算します。',
    averageSalary: '平均標準報酬額 (円)',
    salaryPlaceholder: '例: 250000',
    salaryHelp: '日本での月平均給与',
    paymentMonths: '厚生年金納付月数',
    monthsPlaceholder: '例: 36',
    monthsHelp: '厚生年金に納付した総月数',
    calculateBtn: '計算する',
    resultTitle: '予想脱退一時金',
    currency: '円',
    disclaimer: 'この金額は予想額であり、実際の支給額は日本年金機構の審査により異なる場合があります。',
    consultBtn: '相談を申し込む',
    rateTableTitle: '支給率表',
    table: {
      period: '納付期間',
      months: '支給率計算に用いる数',
      rate: '支給率',
      monthRange: '{{range}}ヶ月'
    },
    errors: {
      missingInputs: '平均標準報酬額と納付月数を入力してください。',
      invalidInputs: '有効な数値を入力してください。',
      minimumMonths: '納付月数は最低6ヶ月以上である必要があります。'
    }
  },
  about: {
    title: '脱退一時金とは？',
    description: '日本の厚生年金に6ヶ月以上加入していた外国人が、日本を離れる際に受け取ることができる一時金です。',
    eligibilityTitle: '脱退一時金の申請資格',
    eligibility: {
      foreigner: '日本国籍を持っていない外国人',
      sixMonths: '厚生年金に6ヶ月以上加入した履歴がある者',
      noJapanAddress: '日本に住所を持っていない者',
      noPensionRights: '年金を受ける権利を持っていない者',
      twoYears: '日本出国後2年以内に申請'
    },
    notesTitle: '申請時の注意事項',
    note1: '脱退一時金を受け取ると、その期間の年金加入履歴が消滅します。日本に再入国して働く可能性がある場合は、慎重に決断してください。',
    note2: 'また、脱退一時金には20.42％の所得税が源泉徴収されますが、その一部は還付を受けることができます。'
  },
  taxRefund: {
    title: '所得税還付とは？',
    description: '脱退一時金を受け取る際に源泉徴収された税金の一部を還付することができます。',
    processTitle: '源泉徴収還付手続き',
    processDescription: '脱退一時金の支給時に20.42％の所得税が源泉徴収されます。しかし、日韓租税条約により源泉徴収税額の最大10％までしか課税されないため、残りの金額は還付を受けることができます。',
    lumpSum: '脱退一時金',
    exampleAmount: '例示金額',
    withholdingAmount: '源泉徴収額 (20.42%)',
    afterWithholding: '源泉徴収後受取額',
    refundableAmount: '還付可能額',
    withholding: '源泉徴収額',
    taxableAmount: '課税適用額 (10%)',
    eligibilityTitle: '還付申請資格',
    eligibility: {
      received: '脱退一時金を受け取った韓国国籍者',
      nonResident: '日本の居住者ではない者',
      koreanResident: '韓国に居住している者'
    },
    documentsTitle: '必要書類',
    documents: {
      residenceCertificate: '居住者証明書（韓国税務署発行）',
      refundRequest: '還付請求書',
      paymentStatement: '支払調書原本',
      passport: 'パスポートコピー'
    },
    consultBtn: '還付相談を申し込む'
  },
  process: {
    title: '申請方法と準備書類',
    description: '複雑な脱退一時金および所得税還付の手続きをサポートします。',
    applicationTitle: '脱退一時金申請手続き',
    steps: {
      step1: {
        title: '無料相談と見積もり',
        description: 'ウェブサイトの相談フォームまたは電話でご連絡いただければ、脱退一時金および所得税還付の予想金額を無料で計算いたします。'
      },
      step2: {
        title: '必要書類の準備',
        description: '脱退一時金の申請に必要な書類と記入方法について詳しくご案内いたします。'
      },
      step3: {
        title: '書類提出と申請',
        description: '準備された書類をもとに、日本年金機構へ脱退一時金を申請いたします。'
      },
      step4: {
        title: '脱退一時金の受け取り',
        description: '審査完了後、指定された口座に脱退一時金が振り込まれます。（約2〜3ヶ月かかります）'
      },
      step5: {
        title: '所得税還付申請',
        description: '脱退一時金受け取り後、源泉徴収された税金の一部を還付できるよう日本の税務署に申請いたします。'
      }
    },
    documentsTitle: '必要書類チェックリスト',
    lumpSumDocsTitle: '脱退一時金申請書類',
    taxRefundDocsTitle: '所得税還付申請書類',
    documents: {
      lumpSum: {
        form: '脱退一時金請求書（様式C-23）',
        passport: 'パスポートコピー（日本出国スタンプのページを含む）',
        pensionBook: '年金手帳コピー',
        noAddress: '日本国内に住所がないことを証明する書類（住民票除票記載事項証明書）',
        bankAccount: '本人名義の銀行口座情報'
      },
      taxRefund: {
        form: '還付申請書（様式別表V(2) 10）',
        residence: '居住者証明書（韓国税務署発行）',
        statement: '支払調書原本',
        authorization: '委任状（代行申請の場合）',
        bankAccount: '本人名義の銀行口座情報'
      }
    }
  },
  testimonials: {
    title: 'お客様の声',
    description: '当サービスをご利用いただいたお客様の生の声をご紹介します。',
    testimonial1: {
      text: '日本で3年間働いて帰国しましたが、年金還付の手続きが複雑で心配でした。このサービスでは全ての書類作業をサポートしていただき、予想より多い金額を還付していただきました！',
      name: 'キム様',
      location: '東京で3年勤務'
    },
    testimonial2: {
      text: '日本語があまり分からず脱退一時金の申請が難しかったのですが、専門家のサポートでスムーズに進めることができました。所得税還付まで一度に解決していただき、本当にありがとうございました。',
      name: 'パク様',
      location: '大阪で2年勤務'
    },
    testimonial3: {
      text: '5年間の日本生活を終えて帰国しましたが、脱退一時金と所得税還付で予想以上の金額を返してもらいました。親切で専門的なサービスに大変満足しています。',
      name: 'イ様',
      location: '福岡で5年勤務'
    }
  },
  faq: {
    title: 'よくある質問',
    description: '脱退一時金および所得税還付に関するご質問にお答えします。',
    questions: {
      q1: '脱退一時金はいつ申請すべきですか？',
      q2: '脱退一時金の金額はどのように決まりますか？',
      q3: '脱退一時金に所得税はかかりますか？',
      q4: '所得税還付はどのように申請しますか？',
      q5: '代行サービスの費用はいくらですか？'
    },
    answers: {
      a1: '脱退一時金は日本出国後2年以内に申請する必要があります。出国前には申請できず、2年が経過すると申請資格を失います。できるだけ早く申請されることをお勧めします。',
      a2: '脱退一時金の金額は平均標準報酬額（月給）と納付期間によって決まります。計算式は「平均標準報酬額×支給率」で、支給率は納付期間によって異なります。正確な金額は当ウェブサイトの計算機でご確認いただけます。',
      a3: 'はい、脱退一時金には20.42％の所得税が源泉徴収されます。しかし、日韓租税条約により源泉徴収された税金の一部を還付することができます。当サービスでは脱退一時金の申請と合わせて所得税還付申請も代行いたします。',
      a4: '所得税還付は脱退一時金を受け取った後、還付申請書と必要書類を日本の税務署に提出して申請します。必要な書類には還付申請書、居住者証明書（韓国税務署発行）、支払調書原本などがあります。当サービスをご利用いただければ、すべての手続きを代行いたします。',
      a5: 'サービス費用は個人の状況と申請内容によって異なります。脱退一時金の申請のみを代行する場合と、所得税還付も合わせて代行する場合で費用が異なります。正確な費用は無料相談を通じてご案内していますので、お気軽にお問い合わせください。'
    },
    moreQuestions: 'さらに質問がありますか？',
    contactLink: '1:1相談を申し込む'
  },
  contact: {
    title: '相談と申し込み',
    description: '専門のコンサルタントがパーソナライズされた相談を提供します。無料相談で予想還付額をご確認ください。',
    form: {
      title: '無料相談申し込み',
      name: 'お名前',
      namePlaceholder: '山田太郎',
      email: 'メールアドレス',
      emailPlaceholder: 'example@email.com',
      phone: '電話番号',
      phonePlaceholder: '080-1234-5678',
      workPeriod: '日本の勤務期間',
      workPeriodPlaceholder: '例: 2018年3月～2021年2月',
      message: 'お問い合わせ内容',
      messagePlaceholder: '質問や問い合わせ事項を自由に記入してください。',
      agreement: '個人情報の収集および利用に同意します。収集された情報は相談目的でのみ使用され、第三者に提供されません。',
      submit: '無料相談を申し込む',
      submitting: '送信中...',
      successTitle: '相談申し込み完了',
      successMessage: '相談申し込みが正常に受け付けられました。早急にご連絡いたします。',
      errorTitle: 'エラーが発生しました',
      errorMessage: '相談申し込み中にエラーが発生しました。もう一度お試しください。',
      agreeRequired: '個人情報の収集および利用に同意する必要があります。'
    },
    info: {
      title: '連絡先情報',
      phone: '電話相談',
      hours: '平日09:00～18:00',
      email: 'メール問い合わせ',
      office: 'オフィス所在地',
      address: 'ソウル特別市江南区テヘラン路123、4階'
    },
    features: {
      title: 'サービスの特徴',
      free: '無料相談とカスタマイズされた見積もり',
      combined: '脱退一時金と所得税還付の同時処理',
      documents: '複雑な書類代行作成と翻訳',
      dedicated: '1:1専任コンサルタント配属',
      updates: '進行状況のリアルタイム更新'
    },
    kakaoBtn: 'カカオトークで相談する'
  },
  footer: {
    brandName: '日本厚生年金脱退一時金請求代行サービス',
    description: '日本厚生年金脱退一時金および所得税還付専門サービス',
    serviceTitle: 'サービス案内',
    contactTitle: 'お問い合わせ',
    companyTitle: '会社情報',
    links: {
      about: '脱退一時金とは？',
      taxRefund: '所得税還付',
      process: '申請方法',
      calculator: '還付金計算機',
      faq: 'よくある質問'
    },
    contact: {
      phone: '電話',
      email: 'メール',
      kakao: 'カカオトーク',
      hours: '営業時間',
      hoursValue: '平日09:00～18:00'
    },
    company: {
      name: '会社名',
      nameValue: '日本厚生年金脱退一時金請求代行サービス',
      representative: '代表者',
      representativeValue: 'ホン・ギルドン',
      businessNumber: '事業者登録番号',
      address: '住所',
      addressValue: 'ソウル特別市江南区テヘラン路123、4階',
      privacy: 'プライバシーポリシー',
      terms: '利用規約'
    },
    copyright: '2023 日本厚生年金脱退一時金請求代行サービス. All rights reserved.'
  }
};
