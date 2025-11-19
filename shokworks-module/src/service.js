export const getInfo = async () => {
  try {
    const response = await fetch("/api/news");
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};
