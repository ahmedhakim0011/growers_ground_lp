// Pings IndexNow (Bing, Yandex, etc.) with every URL in the live sitemap.
// Usage: npm run indexnow   (run after a deploy)
const HOST = "www.growersground.com";
const KEY = "b151c415968dac96262c778111d6f4e9";

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, status ${res.status}`);
