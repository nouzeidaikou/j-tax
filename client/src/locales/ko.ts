export default {
  nav: {
    home: '홈',
    about: '탈퇴일시금 소개',
    taxRefund: '소득세 환급',
    process: '신청 방법',
    testimonials: '후기',
    faq: 'FAQ'
  },
  header: {
    brandName1: '일본후생연금',
    brandName2: '대행',
    contactBtn: '상담 신청'
  },
  hero: {
    title1: '일본후생연금',
    title2: '탈퇴일시금',
    title3: '청구대행서비스',
    description: '일본에서 연금을 납부하셨다면, 탈퇴 후 환급 받을 수 있습니다. 복잡한 절차, 저희가 대신해 드립니다.',
    calculateBtn: '환급금 계산하기',
    applyBtn: '지금 바로 신청하기'
  },
  calculator: {
    title: '탈퇴일시금 계산기',
    description: '평균보수액과 후생연금 납부월수를 입력하시면 예상 탈퇴일시금을 계산해드립니다.',
    averageSalary: '평균보수액 (엔)',
    salaryPlaceholder: '예: 250000',
    salaryHelp: '일본에서 받은 월 평균 급여',
    paymentMonths: '후생연금 납부월수',
    monthsPlaceholder: '예: 36',
    monthsHelp: '후생연금에 납부한 총 개월 수',
    calculateBtn: '계산하기',
    resultTitle: '예상 탈퇴일시금',
    currency: '엔',
    disclaimer: '이 금액은 예상치이며, 실제 지급액은 일본 연금기구의 심사에 따라 달라질 수 있습니다.',
    consultBtn: '상담 신청하기',
    rateTableTitle: '지급률 참고표',
    table: {
      period: '납부 기간',
      months: '계산에 사용되는 수',
      rate: '지급률',
      monthRange: '{{range}}개월'
    },
    errors: {
      missingInputs: '평균보수액과 납부월수를 모두 입력해주세요.',
      invalidInputs: '유효한 숫자를 입력해주세요.',
      minimumMonths: '납부월수는 최소 6개월 이상이어야 합니다.'
    }
  },
  about: {
    title: '탈퇴일시금이란?',
    description: '일본 후생연금에 6개월 이상 가입했던 외국인이 일본을 떠날 때 받을 수 있는 일시금입니다.',
    eligibilityTitle: '탈퇴일시금 신청 자격',
    eligibility: {
      foreigner: '일본 국적을 가지고 있지 않은 외국인',
      sixMonths: '후생연금에 6개월(한 달 이상) 이상 가입한 이력이 있는 자',
      noJapanAddress: '일본에 주소를 가지고 있지 않은 자',
      noPensionRights: '연금을 받을 권리를 가지고 있지 않은 자',
      twoYears: '일본을 출국 후 2년 이내에 신청'
    },
    notesTitle: '신청 시 유의사항',
    note1: '탈퇴일시금을 받으면 해당 기간의 연금 가입 이력이 소멸됩니다. 일본에 재입국하여 일하게 될 가능성이 있다면, 신중히 결정하시기 바랍니다.',
    note2: '또한, 탈퇴일시금에서 20.42%의 소득세가 원천징수되지만, 이 중 일부는 환급받을 수 있습니다.'
  },
  taxRefund: {
    title: '소득세 환급이란?',
    description: '탈퇴일시금 수령 시 원천징수된 세금의 일부를 환급받을 수 있습니다.',
    processTitle: '원천징수 환급 절차',
    processDescription: '탈퇴일시금 지급 시 20.42%의 소득세가 원천징수됩니다. 그러나 한일 조세조약에 따라 원천징수세액의 최대 10%까지만 과세될 수 있으므로, 나머지 금액은 환급받을 수 있습니다.',
    lumpSum: '탈퇴일시금',
    exampleAmount: '예시 금액',
    withholdingAmount: '원천징수액 (20.42%)',
    afterWithholding: '원천징수 후 수령액',
    refundableAmount: '환급 가능 금액',
    withholding: '원천징수액',
    taxableAmount: '과세 적용액 (10%)',
    eligibilityTitle: '환급 신청 자격',
    eligibility: {
      received: '탈퇴일시금을 수령한 한국 국적자',
      nonResident: '일본 거주자가 아닌 자',
      koreanResident: '한국에 거주 중인 자'
    },
    documentsTitle: '필요 서류',
    documents: {
      residenceCertificate: '거주자증명서 (한국 세무서 발급)',
      refundRequest: '환급청구서',
      paymentStatement: '지급명세서 원본',
      passport: '여권 사본'
    },
    consultBtn: '환급 상담 신청'
  },
  process: {
    title: '신청 방법 및 준비 서류',
    description: '복잡한 탈퇴일시금 및 소득세 환급 절차를 저희가 도와드립니다.',
    applicationTitle: '탈퇴일시금 신청 절차',
    steps: {
      step1: {
        title: '무료 상담 및 견적',
        description: '웹사이트 상담 양식이나 전화로 연락해 주시면, 탈퇴일시금 및 소득세 환급 예상 금액을 무료로 계산해 드립니다.'
      },
      step2: {
        title: '필요 서류 준비',
        description: '탈퇴일시금 신청에 필요한 서류와 작성 방법에 대해 상세히 안내해 드립니다.'
      },
      step3: {
        title: '서류 제출 및 신청',
        description: '준비된 서류를 바탕으로 일본 연금기구에 탈퇴일시금을 신청해 드립니다.'
      },
      step4: {
        title: '탈퇴일시금 수령',
        description: '심사가 완료되면 지정하신 계좌로 탈퇴일시금이 입금됩니다. (약 2-3개월 소요)'
      },
      step5: {
        title: '소득세 환급 신청',
        description: '탈퇴일시금 수령 후, 원천징수된 세금의 일부를 환급받을 수 있도록 일본 세무서에 신청해 드립니다.'
      }
    },
    documentsTitle: '필요 서류 체크리스트',
    lumpSumDocsTitle: '탈퇴일시금 신청 서류',
    taxRefundDocsTitle: '소득세 환급 신청 서류',
    documents: {
      lumpSum: {
        form: '탈퇴일시금 청구서 (양식 C-23)',
        passport: '여권 사본 (일본 출국 스탬프가 찍힌 페이지 포함)',
        pensionBook: '연금수첩 사본',
        noAddress: '일본 내 주소가 없음을 증명하는 서류 (주민표 제표기재사항증명서)',
        bankAccount: '본인 명의 은행 계좌 정보'
      },
      taxRefund: {
        form: '환급 신청서 (양식 별표 V(2) 10)',
        residence: '거주자증명서 (한국 세무서 발급)',
        statement: '지급명세서 원본',
        authorization: '위임장 (대행 신청 시)',
        bankAccount: '본인 명의 은행 계좌 정보'
      }
    }
  },
  testimonials: {
    title: '고객 후기',
    description: '저희 서비스를 이용하신 고객님들의 생생한 후기를 확인해보세요.',
    testimonial1: {
      text: '일본에서 3년간 일하다 귀국했는데, 연금 환급 절차가 복잡해서 걱정했어요. 이 서비스를 통해 모든 서류 작업을 도움 받았고, 예상보다 많은 금액을 환급받았습니다!',
      name: '김** 님',
      location: '도쿄 3년 근무'
    },
    testimonial2: {
      text: '일본어를 잘 몰라 탈퇴일시금 신청이 어려웠는데, 전문가의 도움으로 수월하게 진행했습니다. 소득세 환급까지 한 번에 해결해 주셔서 정말 감사합니다.',
      name: '박** 님',
      location: '오사카 2년 근무'
    },
    testimonial3: {
      text: '5년 간의 일본 생활을 마치고 귀국했는데, 탈퇴일시금과 소득세 환급을 통해 예상보다 많은 금액을 돌려받았습니다. 친절하고 전문적인 서비스에 매우 만족합니다.',
      name: '이** 님',
      location: '후쿠오카 5년 근무'
    }
  },
  faq: {
    title: '자주 묻는 질문',
    description: '탈퇴일시금 및 소득세 환급에 관한 궁금증을 해결해 드립니다.',
    questions: {
      q1: '탈퇴일시금은 언제 신청해야 하나요?',
      q2: '탈퇴일시금 금액은 어떻게 결정되나요?',
      q3: '탈퇴일시금에 소득세가 부과되나요?',
      q4: '소득세 환급은 어떻게 신청하나요?',
      q5: '대행 서비스 비용은 얼마인가요?'
    },
    answers: {
      a1: '탈퇴일시금은 일본에서 출국 후 2년 이내에 신청해야 합니다. 출국 전에는 신청할 수 없으며, 2년이 지나면 신청 자격이 상실됩니다. 가능한 빨리 신청하시는 것이 좋습니다.',
      a2: '탈퇴일시금 금액은 평균 보수액(월급)과 납부 기간에 따라 결정됩니다. 계산식은 평균 보수액 × 지급률이며, 지급률은 납부 기간에 따라 다릅니다. 정확한 금액은 저희 웹사이트의 계산기를 통해 확인하실 수 있습니다.',
      a3: '네, 탈퇴일시금에는 20.42%의 소득세가 원천징수됩니다. 하지만 한일 조세조약에 따라 원천징수된 세금의 일부를 환급받을 수 있습니다. 저희 서비스는 탈퇴일시금 신청과 함께 소득세 환급 신청도 대행해 드립니다.',
      a4: '소득세 환급은 탈퇴일시금을 받은 후, 환급 신청서와 함께 필요 서류를 일본 세무서에 제출하여 신청합니다. 필요한 서류로는 환급 신청서, 거주자증명서(한국 세무서 발급), 지급명세서 원본 등이 있습니다. 저희 서비스를 이용하시면 모든 과정을 대행해 드립니다.',
      a5: '서비스 비용은 개인의 상황과 신청 내용에 따라 다를 수 있습니다. 탈퇴일시금 신청만 대행하는 경우와 소득세 환급까지 함께 대행하는 경우의 비용이 다릅니다. 정확한 비용은 무료 상담을 통해 안내해 드리고 있으니, 부담 없이 문의해 주세요.'
    },
    moreQuestions: '더 궁금한 점이 있으신가요?',
    contactLink: '1:1 상담 신청하기'
  },
  contact: {
    title: '상담 및 신청',
    description: '전문 상담사가 개인 맞춤형 상담을 제공해 드립니다. 무료 상담을 통해 예상 환급액을 확인해보세요.',
    form: {
      title: '무료 상담 신청',
      name: '이름',
      namePlaceholder: '홍길동',
      email: '이메일',
      emailPlaceholder: 'example@email.com',
      phone: '연락처',
      phonePlaceholder: '010-1234-5678',
      workPeriod: '일본 근무 기간',
      workPeriodPlaceholder: '예: 2018년 3월 ~ 2021년 2월',
      message: '문의 내용',
      messagePlaceholder: '궁금한 점이나 문의사항을 자유롭게 작성해주세요.',
      agreement: '개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며, 제3자에게 제공되지 않습니다.',
      submit: '무료 상담 신청하기',
      submitting: '제출 중...',
      successTitle: '상담 신청 완료',
      successMessage: '상담 신청이 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.',
      errorTitle: '오류 발생',
      errorMessage: '상담 신청 중 오류가 발생했습니다. 다시 시도해 주세요.',
      agreeRequired: '개인정보 수집 및 이용에 동의해야 합니다.'
    },
    info: {
      title: '연락처 정보',
      phone: '전화 상담',
      hours: '평일 09:00 - 18:00',
      email: '이메일 문의',
      office: '사무실 위치',
      address: '서울특별시 강남구 테헤란로 123, 4층'
    },
    features: {
      title: '빠른 서비스 특징',
      free: '무료 상담 및 맞춤형 견적',
      combined: '탈퇴일시금과 소득세 환급 동시 처리',
      documents: '복잡한 서류 대행 작성 및 번역',
      dedicated: '1:1 전담 상담사 배정',
      updates: '진행 상황 실시간 업데이트'
    },
    kakaoBtn: '카카오톡 상담하기'
  },
  footer: {
    brandName: '일본후생연금 탈퇴일시금 청구대행서비스',
    description: '일본 후생연금 탈퇴일시금 및 소득세 환급 전문 서비스',
    serviceTitle: '서비스 안내',
    contactTitle: '문의 및 상담',
    companyTitle: '회사 정보',
    links: {
      about: '탈퇴일시금이란?',
      taxRefund: '소득세 환급',
      process: '신청 방법',
      calculator: '환급금 계산기',
      faq: '자주 묻는 질문'
    },
    contact: {
      phone: '전화',
      email: '이메일',
      kakao: '카카오톡',
      hours: '운영시간',
      hoursValue: '평일 09:00 - 18:00'
    },
    company: {
      name: '상호',
      nameValue: '일본후생연금 탈퇴일시금 청구대행서비스',
      representative: '대표',
      representativeValue: '홍길동',
      businessNumber: '사업자등록번호',
      address: '주소',
      addressValue: '서울특별시 강남구 테헤란로 123, 4층',
      privacy: '개인정보처리방침',
      terms: '이용약관'
    },
    copyright: '2023 일본후생연금 탈퇴일시금 청구대행서비스. All rights reserved.'
  }
};
