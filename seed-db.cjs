const fs = require('fs');
const path = require('path');

fetch('https://api.spaceflightnewsapi.net/v4/articles?limit=1000')
  .then((res) => res.json())
  .then((res) => {
    const data = {
      articles: res.results.map((item) => ({
        id: String(item.id),
        imageSrc: item.image_url,
        title: {
          ka: item.title,
          en: item.title,
        },
        description: {
          ka: item.summary,
          en: item.summary,
        },
      })),
    };
    fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(data, null, 2), 'utf8', (err) => {
      if (err) {
        console.log('File write failed:', err);
        return;
      }
      console.log('Data written to db.json');
    });
  });
