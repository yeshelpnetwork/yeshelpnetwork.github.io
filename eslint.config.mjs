import next from 'eslint-config-next';

export default [
  ...next,
  {
    rules: {
      // Adjust as needed
      '@next/next/no-img-element': 'off'
    }
  }
];


