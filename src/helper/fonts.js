import localFont from "next/font/local";

const fixture = localFont({
    src: [
      {
        path: "../../public/fonts/fixture-bold.otf",
        weight: "600",
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

  const rethinkSans = localFont({
    src: [
      {
        path: "../../public/fonts/rethinkSans-regular.ttf",
        weight: "400",
      },
    ],
    variable: "--font-rethinkSans",
  });
  const inter = localFont({
    src: [
      {
        path: "../../public/fonts/inter_18pt-light.ttf",
        weight: "400",
      },
    ],
    variable: "--font-inter",
  });

  export{fixture, poppins, rethinkSans,inter};