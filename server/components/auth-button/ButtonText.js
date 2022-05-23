/* @flow */

export type htmlTemplateProps = {|
    lang : string,
|};

const logInWithPaypalTextByCountry = {
    ar:      '',
    bg:      '',
    cs:      '',
    da:      '',
    de:      '',
    el:      '',
    en:      'Log in with Paypal',
    es:      'Iniciar sesión con Paypal',
    et:      '',
    fi:      '',
    fr:      'Connectez-vous avec Paypal',
    he:      '',
    hu:      '',
    id:      '',
    it:      '',
    ja:      '',
    ko:      '',
    lt:      '',
    lv:      '',
    ms:      '',
    nl:      '',
    no:      '',
    pl:      '',
    pt:      '',
    ro:      '',
    ru:      '',
    si:      '',
    sk:      '',
    sl:      '',
    sq:      '',
    sv:      '',
    th:      '',
    tl:      '',
    tr:      '',
    vi:      '',
    zh:      '',
    zh_Hant: ''
};

export const buttonLabelsByLanguage = ({ lang } : htmlTemplateProps) : string => logInWithPaypalTextByCountry[lang] || logInWithPaypalTextByCountry.en;
