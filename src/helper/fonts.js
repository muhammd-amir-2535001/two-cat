import localFont from "next/font/local";

const fixture = localFont({
    src: [
      {
        path: "../../public/fonts/fixture-bold.otf",
        weight: "900",
      },
    ],
    variable: "--font-fixture",
  });
  
  const poppins = localFont({
    src: [
      {
        path: "../../public/fonts/poppins.ttf",
        weight: "300",
      },
    ],
    variable: "--font-poppins",
  });


  export{fixture, poppins};