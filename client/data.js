const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));

const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
};

module.exports = {
  comments: {
    popular: [
      {
        id: 1,
        user: {
          fullName: "Виталий Калоев",
          avatar:
            "https://mobimg.b-cdn.net/v3/fetch/e4/e44247a6410817630007b47c7945f5ff.jpeg",
        },
        text: "Теперь, каждое рабочее утро после кровати я перекладываюсь туда спать еще на часок. Ну и...",
        post: {
          title: "Какая у вас дома ванна?",
        },
        // @ts-ignore
        createdAt: new Intl.DateTimeFormat("sv-SE", options).format(date),
      },
      {
        id: 2,
        user: {
          fullName: "Никита Джигурда",
          avatar:
            "https://leonardo.osnova.io/806743bd-0444-5849-bac3-a023e8b27efe/-/scale_crop/64x64/-/format/webp/",
        },
        text: "Теперь, каждое рабочее утро после кровати я перекладываюсь туда спать еще на часок. Ну и...",
        post: {
          title: "Какая у вас дома ванна?",
        },
        // @ts-ignore
        createdAt: new Intl.DateTimeFormat("sv-SE", options).format(date),
      },
      {
        id: 3,
        user: {
          fullName: "Василий Уткин",
          avatar:
            "https://leonardo.osnova.io/49d86359-d58e-5e53-83f6-9599be1e1bb5/-/scale_crop/64x64/-/format/webp/",
        },
        text: "Теперь, каждое рабочее утро после кровати я перекладываюсь туда спать еще на часок. Ну и...",
        post: {
          title: "Какая у вас дома ванна?",
        },
        // @ts-ignore
        createdAt: new Intl.DateTimeFormat("sv-SE", options).format(date),
      },
    ],
    new: [
      {
        id: 2,
        user: {
          fullName: "Никита Джигурда",
          avatar:
            "https://leonardo.osnova.io/806743bd-0444-5849-bac3-a023e8b27efe/-/scale_crop/64x64/-/format/webp/",
        },
        text: "Теперь, каждое рабочее утро после кровати я перекладываюсь туда спать еще на часок. Ну и...",
        post: {
          title: "Какая у вас дома ванна?",
        },
        // @ts-ignore
        createdAt: new Intl.DateTimeFormat("sv-SE", options).format(date),
      },
      {
        id: 3,
        user: {
          fullName: "Василий Уткин",
          avatar:
            "https://leonardo.osnova.io/49d86359-d58e-5e53-83f6-9599be1e1bb5/-/scale_crop/64x64/-/format/webp/",
        },
        text: "Теперь, каждое рабочее утро после кровати я перекладываюсь туда спать еще на часок. Ну и...",
        post: {
          title: "Какая у вас дома ванна?",
        },
        // @ts-ignore
        createdAt: new Intl.DateTimeFormat("sv-SE", options).format(date),
      },
      {
        id: 1,
        user: {
          fullName: "Виталий Калоев",
          avatar:
            "https://mobimg.b-cdn.net/v3/fetch/e4/e44247a6410817630007b47c7945f5ff.jpeg",
        },
        text: "Теперь, каждое рабочее утро после кровати я перекладываюсь туда спать еще на часок. Ну и...",
        post: {
          title: "Какая у вас дома ванна?",
        },
        // @ts-ignore
        createdAt: new Intl.DateTimeFormat("sv-SE", options).format(date),
      },
    ],
  },
};
