const namespaces = {
  ka: {
    image: 'სურათი',
    nameKa: 'სათაური ქართულად',
    nameEn: 'სათაური ინგლისურად',
    descriptionKa: 'აღწერა ქართულად',
    descriptionEn: 'აღწერა ინგლისურად',
    create: 'დამატება',
    title: 'მარტივი ბლოგი',
    home: 'მთავარი',
    about: 'ჩვენს შესახებ',
    copyRight: 'ყველა უფლება დაცულია.',
    heroTitle: 'გამარჯობა და კეთილი იყოს თქვენი მობრძანება!',
    heroDescription:
      'ჩვენი მარტივი ბლოგი გთავაზობთ საინტერესო სტატიებს და განახლებებს სხვადასხვა თემებზე. დარჩით ჩვენთან და აღმოაჩინეთ ახალი შთაბეჭდილებები!',
    aboutDescription:
      'ჩვენი მიზანია შევქმნათ პლატფორმა, სადაც მომხმარებლებს შეუძლიათ გამოხატონ საკუთარი აზრი და გაეცნონ უახლეს ინფორმაციას. ბლოგი განკუთვნილია ყველა ასაკის მკითხველისთვის, ვინც დაინტერესებულია თანამედროვე საკითხებით.',
  },
  en: {
    image: 'Image',
    nameKa: 'Title in Georgian',
    nameEn: 'Title in English',
    descriptionKa: 'Description in Georgian',
    descriptionEn: 'Description in English',
    create: 'Create',
    title: 'Simple Blog',
    home: 'Home',
    about: 'About Us',
    copyRight: 'All rights reserved.',
    heroTitle: 'Welcome to Our Simple Blog!',
    heroDescription:
      'Our blog offers insightful articles and updates on a wide range of topics. Stay with us and discover fresh perspectives!',
    aboutDescription:
      'Our goal is to create a platform where users can express their thoughts and stay informed on the latest news. This blog is designed for readers of all ages who are interested in modern topics and discussions.',
  },
};

export const locales = Object.keys(namespaces);

export const defaultLocale = 'ka';

export function getTranslation(lang?: string) {
  if (!lang || !locales.includes(lang)) {
    throw new Error('unknown locale');
  }

  const selectedNamespace = namespaces[lang as keyof typeof namespaces];

  return (key: keyof (typeof namespaces)['ka']) => {
    return selectedNamespace[key];
  };
}
