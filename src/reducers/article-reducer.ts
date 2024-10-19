type Translation = Record<string, string>;

export type Article = {
  id: number;
  imageSrc: string;
  title: Translation;
  description: Translation;
};

export const articlesInitialState: Article[] = [
  {
    id: 1,
    imageSrc: 'https://via.assets.so/img.jpg?w=300&h=300&tc=white&bg=lightgrey',
    title: {
      ka: 'ინოვაციური ტექნოლოგიები და მათი გავლენა მომავალზე',
      en: 'Innovative Technologies and Their Impact on the Future',
    },
    description: {
      ka: 'ტექნოლოგიების განვითარება სწრაფად იცვლის სამყაროს. ინოვაციები, როგორიცაა ხელოვნური ინტელექტი, ბლოკჩეინი და მობილური აპლიკაციები, განაპირობებენ ახალ შესაძლებლობებს და გამოწვევებს.',
      en: 'The rapid advancement of technology is transforming the world. Innovations like artificial intelligence, blockchain, and mobile applications are opening up new opportunities and challenges.',
    },
  },
];

export type ArticlesAction = {
  type: 'ADD_ARTICLE';
  payload: Article;
};

export function articlesReducer(state: Article[], action: ArticlesAction) {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return [...state, action.payload];
  }
}
