import { Client } from '@notionhq/client'
import 'dotenv/config'
import { spawn } from "child_process";

const DATABASE_ID = '066daa9a7abb4c029724323209c85ca6'

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
})

async function main() {
	const articles = await fetchArticles()

	const randomArticle = articles[getRandomArticleIndex(articles.length)]

	spawn('open', [randomArticle.properties.URL.url])
}

function getRandomArticleIndex(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max); // The maximum is exclusive
}

async function fetchArticles() {
	let artciles = []

	let cursor
	while (cursor !== null) {
		const results = await query(cursor)
		cursor = results.next_cursor
		artciles = artciles.concat(results.results)
	}

	return artciles
}

async function query(cursor) {
	return await notion.databases.query({
		database_id: DATABASE_ID,
		page_size: 100,
		start_cursor: cursor,
		sorts: [{
			timestamp: 'created_time',
			direction: 'ascending',
		}],
		filter: {
			and: [
				{
					property: "Category",
					multi_select: {
						does_not_contain: "Tool",
					},
				},
				{
					property: "Category",
					multi_select: {
						does_not_contain: "Service",
					},
				},
				{
					property: "Category",
					multi_select: {
						does_not_contain: "Book",
					},
				},
				{
					property: "Category",
					multi_select: {
						does_not_contain: "Note",
					},
				},
				{
					property: "Category",
					multi_select: {
						does_not_contain: "Course",
					},
				},
				{
					property: "Category",
					multi_select: {
						does_not_contain: "CheatSheet",
					},
				},
				{
					property: "Category",
					multi_select: {
						does_not_contain: "Framework/Library",
					},
				},
				{
					property: "Category",
					multi_select: {
						does_not_contain: "Game",
					},
				},
			]
		}
	})
}

main()
