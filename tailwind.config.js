/** @type {import('tailwindcss').Config} */
module.exports = {
  /* This code block is configuring the `daisyui` plugin to define a custom theme called `mytheme` with
  a single color value for the `neutral` color. The `neutral` color is set to `#74CB48`. This custom
  theme can then be used in the application's styling. */
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         neutral: "#74CB48"
  //       }
  //     }
  //   ]
  // },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")]
};
