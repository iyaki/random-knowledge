import { Client } from '@notionhq/client'

const DATABASE_ID = '066daa9a7abb4c029724323209c85ca6'

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
})

export async function fetchArticles() {
	let articles = []

	let cursor
	while (cursor !== null) {
		const results = await query(cursor)
		cursor = results.next_cursor
		articles = articles.concat(results.results)
	}

	return articles
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
