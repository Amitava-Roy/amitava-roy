/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "blob-pink": "blobPink 10s  infinite",
        "blob-violet": "blobViolet 10s infinite",
        "rocket-animation": "rocket 3s infinite",
        "card-animation": "card 300ms linear",
      },
      keyframes: {
        blobPink: {
          "0%": { top: "0", left: "0" },
          "25%": {
            top: "0",
            left: "100%",
            transform: "translateX(-100%)",
          },
          "50%": {
            top: "100%",
            left: "100%",
            transform:
              "translateY(-100%) translateX(-100%)",
          },
          "75%": {
            top: "100%",
            left: "0",
            transform: "translateY(-100%)",
          },
          "100%": { top: "0", left: "0" },
        },
        blobViolet: {
          "0%": { bottom: "0", right: "0" },
          "25%": {
            bottom: "0",
            right: "100%",
            transform: "translateX(100%)",
          },
          "50%": {
            bottom: "100%",
            right: "100%",
            transform: "translateX(100%) translateY(100%)",
          },
          "75%": {
            bottom: "100%",
            right: "0",
            transform: "translateY(100%)",
          },
          "100%": { bottom: "0", right: "0" },
        },
        rocket: {
          "0%,100%": {
            transform: "translateY(10%) translateX(-10%)",
          },
          "50%": {
            transform: "translateY(-10%) translateX(10%)",
          },
        },
        card: {
          "0%": {
            transform: "scale(0.8)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
