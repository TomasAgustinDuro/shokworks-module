// Creo aqui la llamada a la API

export const getInfo = async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2025-11-17&to=2025-11-17&sortBy=popularity&apiKey=37421d253b5a43dba71a7c602ee5e696"
    );

    const data = await response.json();

    const shortData = data.articles.slice(0, 5).map((item) => ({
      img: item.urlToImage,
      title: item.title,
      text: item.description.slice(0, 50) + "...",
    }));

    return shortData;
  } catch (error) {
    console.log("error", error);
  }
};
