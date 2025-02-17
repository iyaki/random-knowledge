import { fetchArticles } from './notion.js';

export async function getRandomArticle() {
	const articles = await fetchArticles()

	return articles[getRandomArticleIndex(articles.length)]
}

function getRandomArticleIndex(max) {
	return Math.floor(Math.random() * max); // The minimun is zero and maximum is exclusive
}
