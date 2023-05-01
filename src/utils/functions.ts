import moment from "moment";

const smoothScroll = (e: any, path: string) => {
  let scroll = document.getElementById(path);
  e.preventDefault();
  scroll && scroll.scrollIntoView({ behavior: "smooth", block: "start" });
};

function generateGreetings() {
  let currentHour = moment().hour();

  if (currentHour >= 3 && currentHour < 12) {
    return "Bom dia";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Boa tarde";
  } else if (currentHour >= 18 || currentHour < 3) {
    return "Boa noite";
  } else {
    return "Olá";
  }
}

export const functions = {
  smoothScroll,
  generateGreetings,
};
