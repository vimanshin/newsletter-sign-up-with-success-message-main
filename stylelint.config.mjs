// Сначала идут переменные и свойства, затем вложенные селекторы и в конце адаптивные правила.
const contentOrder = [
  'dollar-variables',
  'custom-properties',
  'declarations',
  'rules',
  'at-rules',
];

/**
 * @see https://stylelint.io/user-guide/configure/
 * @type {import('stylelint').Config}
 */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  ignoreFiles: ['dist/**', 'node_modules/**'],
  rules: {
    // Запрещаем !important, чтобы каскад оставался предсказуемым.
    'declaration-no-important': true,

    // Сохраняем стандартное CSS-значение currentColor в принятом написании.
    'value-keyword-case': ['lower', { ignoreKeywords: ['currentColor'] }],

    // Prettier корректно форматирует CSS font shorthand вида 18px/145%.
    // SCSS-правило ошибочно принимает этот слеш за математический оператор.
    'scss/operator-no-unspaced': null,

    // Сохраняем mobile-first структуру: базовые стили, вложенные правила, @media.
    'order/order': [contentOrder, { unspecified: 'bottom' }],
  },
};
