import products from "./items.json";
const articles = products.articles;
const categories = articles.map(articles => articles.category);
export const uniqueCategories = [...new Set(categories)];
export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = id
                ? articles.find((item) => item.id === id)
                : articles;
            resolve(product);
        }, 2000);
    });
};
export const getFetchByCat = (cat) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = cat
                ? articles.filter((items) => items.category.toLowerCase() === cat)
                : articles;
            resolve(product);
        }, 2000);
    });
};
