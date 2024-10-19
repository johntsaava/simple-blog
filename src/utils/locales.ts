const namespaces = {
  ka: {
    title: 'მარტივი ბლოგი',
    home: 'მთავარი',
    about: 'ჩვენს შესახებ',
    copyRight: 'ყველა უფლება დაცულია.',
    heroTitle: 'ლორემ იპსუმ გაცომებული პროცესიებით იქაც სპეციალობაზეც ტეტიურად ღრმად გაუტოლა ბევრ.',
    heroDescription:
      'ქვეითად გავაკეთებთო გვიგვინებითა ბაღად ნამიან გავაკეთებინე. მდაბალი მიდგა წყალწაღებულს ნამიან მაიცა გაცომებული გათხვირულმა, შეგვეპარება ჰშვენის გაიშოტა წვერს, ზედმეტისგან ოთხცხენიანი.',
    homeTitle: 'ლორემ იპსუმ გაცომებული პროცესიებით იქაც სპეციალობაზეც ტეტიურად ღრმად გაუტოლა ბევრ.',
    homeDescription:
      'ეამბორეო მოხელეებისა შეაყენა ვედროთი გავაკეთებინე ასეულს. ასეულს განათლებული მეკობრეობისათვის იქაც, ოყრაყი, გავაკეთებთო მოხელეებისა ქონშია უცოლშვილო ემხრობიან ბიძები გალაფული, დათოსაც დაიჯერებდით. ქვეითად გავაკეთებთო გვიგვინებითა ბაღად ნამიან გავაკეთებინე. მდაბალი მიდგა წყალწაღებულს ნამიან მაიცა გაცომებული გათხვირულმა, შეგვეპარება ჰშვენის გაიშოტა წვერს, ზედმეტისგან ოთხცხენიანი. მენახირედ ოყრაყი ყრილობები გენიალობამ ნამიან, ტეტიურად შეკითხვაში დანამომარჯვებულ ბევრ, გეგმის დაანებებს გალაფული. იძიებდა მიდგა ხსებებაზე გალაფული სიახლე დააგვირგვინა გამოტანილ ოთხცხენიანი ჩიქორთული უცოლშვილო ბაღად, ევსებოდა გათხვირულმა უიმედობა ელიტური. ხსებებაზე ემხრობიან შეაყენა დანამომარჯვებულ კარისა დაიჯერებდით, ზაბრისკი ყრილობები ელიტური.',
    aboutDescription:
      'ქვეითად გავაკეთებთო გვიგვინებითა ბაღად ნამიან გავაკეთებინე. მდაბალი მიდგა წყალწაღებულს ნამიან მაიცა გაცომებული გათხვირულმა, შეგვეპარება ჰშვენის გაიშოტა წვერს, ზედმეტისგან ოთხცხენიანი.',
  },
  en: {
    title: 'Simple blog',
    home: 'Home',
    about: 'About',
    copyRight: 'All rights reserved.',
    heroTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    heroDescription:
      'Ea soluta commodi quam exercitationem tempore molestias illo accusamus, quisquam aliquam eaque tenetur error tempora culpa, illum expedita delectus distinctio, numquam nihil.',
    homeTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    homeDescription:
      'Ea soluta commodi quam exercitationem tempore molestias illo accusamus, quisquam aliquam eaque tenetur error tempora culpa, illum expedita delectus distinctio, numquam nihil.',
    aboutDescription:
      'Ea soluta commodi quam exercitationem tempore molestias illo accusamus, quisquam aliquam eaque tenetur error tempora culpa, illum expedita delectus distinctio, numquam nihil.',
  },
};

export const locales = Object.keys(namespaces);

export function getTranslation(lang?: string) {
  if (!lang || !locales.includes(lang)) {
    throw new Error('unknown locale');
  }

  const selectedLocale = namespaces[lang as keyof typeof namespaces];

  return (key: keyof (typeof namespaces)['en']) => {
    return selectedLocale[key];
  };
}
