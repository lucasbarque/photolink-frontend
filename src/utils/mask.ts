export default class Mask {
  static custom = (text: string, mask: (string | RegExp)[]) => {
    const maskedText = [];
    let lastText = 0;
    let lastMask = 0;

    if (text) {
      while (
        lastText < text.length ||
        (text.length > mask.length && lastMask < mask.length)
      ) {
        const currentMask = mask[lastMask];
        if (typeof currentMask === 'string') {
          maskedText.push(currentMask);

          lastMask += 1;
        } else if (
          typeof text[lastText] === 'string' &&
          currentMask instanceof RegExp &&
          currentMask.test(text[lastText])
        ) {
          maskedText.push(text[lastText]);

          lastText += 1;
          lastMask += 1;
        } else {
          lastText += 1;
          lastMask += 1;
        }
      }
    }

    return maskedText.join('');
  };

  static phone(text: string) {
    if (!text || text.length === 0) {
      return '';
    }

    const phoneMask = [
      '(',
      /[0-9]/g,
      /[0-9]/g,
      ')',
      ' ',
      /[0-9]/g,
      /[0-9]/g,
      /[0-9]/g,
      /[0-9]/g,
      /[0-9]/g,
      '-',
      /[0-9]/g,
      /[0-9]/g,
      /[0-9]/g,
      /[0-9]/g,
    ];

    return Mask.custom(Mask.numbers(text.substring(0, 15)), phoneMask);

    // return text.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  static numbers(text: string) {
    return (text ? text.toString() : '').replace(/[^0-9]/g, '');
  }

  static cpf(value: string) {
    if (value.length === 0) {
      return '';
    }

    const cpfMask = [
      /[0-9]/g,
      /[0-9]/g,
      /[0-9]/g,
      '.',
      /[0-9]/g,
      /[0-9]/g,
      /[0-9]/g,
      '.',
      /[0-9]/g,
      /[0-9]/g,
      /[0-9]/g,
      '-',
      /[0-9]/g,
      /[0-9]/g,
    ];

    return Mask.custom(Mask.numbers(value.substring(0, 14)), cpfMask);
  }

  static date(text: string) {
    if (text.length === 0) {
      return '';
    }

    const dateMask = [
      /[0-9]/g,
      /[0-9]/g,
      '/',
      /[0-9]/g,
      /[0-9]/g,
      '/',
      /[0-9]/g,
      /[0-9]/g,
      /[0-9]/g,
      /[0-9]/g,
    ];

    return Mask.custom(Mask.numbers(text.substring(0, 14)), dateMask);
  }

  static unMaskCPF(cpf: string) {
    return cpf.replace(/\D/g, '');
  }

  static cep(text: string) {
    const mask = [
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      '-',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
    ];

    return Mask.custom(Mask.numbers(text.substring(0, 9)), mask);
  }

  static partialHiddenEmail(text: string) {
    if (text.length === 0) {
      return '';
    }

    const NAME_VISIBLE_CHARACTERS = 2;

    const createHiderMask = (
      textReference: string,
      visibleCharacter: number,
    ) => {
      const whichLetters = textReference.slice(
        0,
        textReference.length - visibleCharacter,
      );

      const mask = whichLetters.replace(/[a-zA-Z0-9 ]/gi, '*');

      return mask;
    };

    const emailAdress = text.split('@');

    const nameEmail = emailAdress[0];

    const secondPart = emailAdress[1].split('.');
    const providerEmail = secondPart[0];

    const dotRegister = `${secondPart[1]}${
      secondPart[2] ? '.' + secondPart[2] : ''
    }${secondPart[3] ? '.' + secondPart[3] : ''}`;

    const providerVisibleCharacters = providerEmail.length - 3;

    const beforeAt = `${nameEmail.substring(
      0,
      NAME_VISIBLE_CHARACTERS,
    )}${createHiderMask(nameEmail, NAME_VISIBLE_CHARACTERS)}`;

    const afterAt = `${providerEmail.substring(0, 1)}${createHiderMask(
      providerEmail,
      providerVisibleCharacters,
    )}${providerEmail.substring(
      providerVisibleCharacters + 1,
      providerEmail.length,
    )}`;

    return `${beforeAt}@${afterAt}.${dotRegister}`;
  }

  static partialHiddenPhone(text: string) {
    if (text.length === 0) {
      return '';
    }

    const isCellphone = text.length === 11;

    if (isCellphone) {
      return text
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '*****-$2')
        .replace(/(-\d{4})(\d+?)$/, '$1');
    }
    return text
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '****-$2')
      .replace(/(-\d{4})(\d+?)$/, '$1');
  }

  static cnpj(text: string) {
    if (!text) {
      return '';
    }
    const mask = [
      /[0-9]/,
      /[0-9]/,
      '.',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      '.',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      '/',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      '-',
      /[0-9]/,
      /[0-9]/,
    ];

    return Mask.custom(Mask.numbers(text.substring(0, 18)), mask);
  }

  static noSpecialChars(text: string) {
    return text.replace(/[^a-zA-Z0-9 ]/g, '');
  }

  static cpfCnpj(text: string) {
    if (/[a-zA-Z]/.test(text)) {
      return text;
    }

    const filtered = Mask.noSpecialChars(text);

    if (filtered && filtered.length <= 11) {
      return Mask.cpf(filtered);
    }

    return Mask.cnpj(filtered);
  }

  static unmask(value: string) {
    return value.replace(' ', '');
  }
}
