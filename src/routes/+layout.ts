export const prerender = false
export async function load({ url }) {
	return {
		url: url.pathname
	}
}
