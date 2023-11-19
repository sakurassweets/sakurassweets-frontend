import * as Yup from 'yup';

export const validateEmail = () => {
  return Yup.string()
    .email('Невірний формат електронної пошти')
    .required('Електронна пошта обов’язкова до заповнення')
    .test('subdomainNoUnderscore', 'Субдомен не може містити нижнє тире', (value) => {
      const [, subdomain] = value.split('@')[0].split('.');
      return !/_/.test(subdomain);
    })
    .test(
      'domainRequirements',
      'Домен повинен мати як мінімум 2 букви і як максимум 6 букв. Домен не може містити будь-яких спеціальних символів чи цифр',
      (value) => {
        if (value) {
          const domainPart = value.split('@')[1];
          if (domainPart) {
            const [, domain] = domainPart.split('.');
            return /^[a-zA-Z]{2,6}$/.test(domain);
          }
        }
      }
    )
    .test(
      'hasNoConsecutiveSpecialChars',
      'Електронна пошта не може містити два або більше спеціальних символів підряд',
      (value) => {
        return !/[-_.]{2,}/.test(value);
      }
    )
    .test(
      'noLeadingOrTrailingSpecialChars',
      'Частина електронної пошти не може починатись або закінчуватись спеціальним символом',
      (value) => {
        return !/^[-_.].*|.*[-_.]$/.test(value);
      }
    )
    .test(
      'nameAndSubdomainContainNonNumeric',
      'Ім`я та субдомен повинні містити хоча б один не числовий символ',
      (value) => {
        const [name, subdomain] = value.split('@')[0].split('.');
        return !/^\d+$/.test(name) && !/^\d+$/.test(subdomain);
      }
    )
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      'Електронна пошта може містити тільки такі спеціальні символи "-", "_", "."'
    );
};

export const validatePassword = () => {
  return Yup.string()
    .trim('Пароль не може містити пробіли')
    .strict(true)
    .required('Пароль обов’язковий до заповнення')
    .matches(/[A-Z]/, 'Пароль повинен містити принаймні одну велику літеру')
    .matches(/[a-z]/, 'Пароль повинен містити принаймні одну малу літеру')
    .matches(/[0-9]/, 'Пароль повинен містити принаймні одну цифру (0-9)')
    .min(8, 'Пароль повинен бути не менше 8 символів')
    .max(40, 'Пароль повинен бути не більше 40 символів');
};

export const validateConfirmPassword = () => {
  return Yup.string()
    .strict(true)
    .required('Пароль обов’язковий до заповнення')
    .oneOf([Yup.ref('password')], 'Паролі повинні співпадати');
};
