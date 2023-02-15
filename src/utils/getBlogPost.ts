import { Language } from "@localization";

type BlogPost =
  | {
      type: "text";
      value: string;
    }
  | {
      type: "quote";
      value: string;
    };

type Posts = {
  ru: BlogPost[];
  en: BlogPost[];
};

const blogPost: Posts = {
  en: [
    {
      type: "text",
      value:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus consectetur eros non iaculis. “Vivamus lectus enim, convallis nec dapibus vel, semper id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”. \n Ut sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi, sed blandit. \n Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero.`",
    },
    {
      type: "quote",
      value:
        "“Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”",
    },
    {
      type: "text",
      value:
        "Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.   Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit, et mattis tortor placerat eget. \n Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.",
    },
  ],

  ru: [
    {
      type: "text",
      value:
        "Равным образом новая модель организационной деятельности требуют определения и уточнения форм развития. Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение дальнейших направлений развития. \n Таким образом укрепление и развитие структуры требуют от нас анализа направлений прогрессивного развития. Не следует, однако забывать, что новая модель организационной деятельности способствует подготовки и реализации систем массового участия. \n Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный эксперимент проверки существенных финансовых и административных условий. С другой стороны дальнейшее развитие различных форм деятельности.",
    },
    {
      type: "quote",
      value:
        "“Повседневная практика показывает, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным”",
    },
    {
      type: "text",
      value:
        "Повседневная практика показывает, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. \n Таким образом дальнейшее развитие различных форм деятельности позволяет оценить значение соответствующий условий активизации.  Таким образом дальнейшее развитие различных форм деятельности.  Таким образом дальнейшее развитие различных форм",
    },
  ],
};

export const getBlogPost = (lang: Language) => {
  return blogPost[lang];
};
