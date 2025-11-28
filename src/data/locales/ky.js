export default {
  code: "ky",

  week: {
    dow: 1,
    doy: 4,
  },

  buttonText: {
    today: "Бүгүн",
    month: "Ай",
    week: "Жума",
    day: "Күн",
    list: "Күн тартиби",
  },

  allDayText: "Күн бою",
  moreLinkText(n) {
    return `Дагы ${n}`;
  },
  noEventsText: "Иш-чара жок",

  weekText: "Жум.",
  weekTextLong: "Жума",

  dayNamesShort: ["Дш", "Шш", "Шр", "Бш", "Жм", "Иш", "Жк"],

  dayNames: ["Дүйшөмбү", "Шейшемби", "Шаршемби", "Бейшемби", "Жума", "Ишемби", "Жекшемби"],

  dayHeaderFormat: {
    weekday: "short",
  },
};
