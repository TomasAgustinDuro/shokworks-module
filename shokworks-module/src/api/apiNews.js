export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2025-11-17&to=2025-11-17&sortBy=popularity",
      {
        headers: {
          "X-Api-Key": process.env.NEWS_API_KEY,
        },
      }
    );

    const data = await response.json();

    if (!data.articles) {
      return res.status(500).json({ error: data.message || "No articles" });
    }

    const formatted = data.articles.slice(0, 5).map((item) => ({
      img: item.urlToImage,
      title: item.title,
      text: (item.description || "").slice(0, 50) + "...",
    }));

    return res.status(200).json(formatted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
