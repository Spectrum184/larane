module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        layout: 'calc(100vh - 144px)',
      },
      height: {
        'chat-page': 'calc(100vh - 80px)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
