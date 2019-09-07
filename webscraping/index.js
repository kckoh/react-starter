var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs')
request('https://comic.naver.com/webtoon/weekday.nhn', function(err, resp, html) {
        var a = []
        if (!err){
          const $ = cheerio.load(html);
           $('.col_inner .thumb').each((i, elem) => {
             a[i] = { "_id": i,
                    "title": $(elem).find('a img').attr('title'),
                    "img": $(elem).find('a img').attr('src')
            }


    });
    console.log(a)

    let data = JSON.stringify(a, null, 2);
    fs.writeFileSync('webtoonData.json', data);

      }
});

