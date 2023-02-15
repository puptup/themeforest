import { members } from "@assets/members";

const descriptionEn =
  "Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. At vero eos et accusamus et iusto odio dignissimos ducimus.";

const descriptionRu =
  "С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки дальнейших направлений развития. Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу.";

const links = {
  twitter: "https://twitter.com/elonmusk",
  linkedin: "https://www.linkedin.com/in/kiryl-kashavar-1a91951a9/",
  facebook: "https://www.facebook.com/zuck",
};

export const membersCards = {
  en: [
    {
      id: "1",
      image: members.sargis,
      role: "Data analyst",
      name: "Sargis Grigor",
      description: descriptionEn,
      links,
    },
    {
      id: "2",
      image: members.bagrat,
      role: "Data engineer",
      name: "Bagrat Leo",
      description: descriptionEn,
      links,
    },
    {
      id: "3",
      image: members.gor,
      role: "Data analyst",
      name: "Gor Sargis",
      description: descriptionEn,
      links,
    },
    {
      id: "4",
      image: members.mari,
      role: "Data analyst",
      name: "Maral Mari",
      description: descriptionEn,
      links,
    },
    {
      id: "5",
      image: members.hacob,
      role: "Data engineer",
      name: "Hakob Jirair",
      description: descriptionEn,
      links,
    },
    {
      id: "6",
      image: members.eva,
      role: "Data scientist ",
      name: "Eva Vosgi",
      description: descriptionEn,
      links,
    },
    {
      id: "7",
      image: members.marine,
      role: "Data scientist",
      name: "Kohar Marine",
      description: descriptionEn,
      links,
    },
    {
      id: "8",
      image: members.ararat,
      role: "Data analyst",
      name: "Ararat Ohannes",
      description: descriptionEn,
      links,
    },
    {
      id: "9",
      image: members.eduard,
      role: "Data scientist",
      name: "Eduard Vosgi",
      description: descriptionEn,
      links,
    },
  ],

  ru: [
    {
      id: "1",
      image: members.sargis,
      role: "Аналитик данных",
      name: "Саргис Григор",
      description: descriptionRu,
      links,
    },
    {
      id: "2",
      image: members.bagrat,
      role: "Инженер",
      name: "Баграт Лео",
      description: descriptionRu,
      links,
    },
    {
      id: "3",
      image: members.gor,
      role: "Аналитик данных",
      name: "Гор Саргис",
      description: descriptionRu,
      links,
    },
    {
      id: "4",
      image: members.mari,
      role: "Аналитик данных",
      name: "Марал Мари",
      description: descriptionRu,
      links,
    },
    {
      id: "5",
      image: members.hacob,
      role: "Инженер",
      name: "Якоб Жираир",
      description: descriptionRu,
      links,
    },
    {
      id: "6",
      image: members.eva,
      role: "Специалист по данным",
      name: "Ева Восги",
      description: descriptionRu,
      links,
    },
    {
      id: "7",
      image: members.marine,
      role: "Специалист по данным",
      name: "Кохар Мари",
      description: descriptionRu,
      links,
    },
    {
      id: "8",
      image: members.ararat,
      role: "Аналитик данных",
      name: "Арарат Оханнес",
      description: descriptionRu,
      links,
    },
    {
      id: "9",
      image: members.eduard,
      role: "Специалист по данным",
      name: "Эдуарт Восги",
      description: descriptionRu,
      links,
    },
  ],
};
