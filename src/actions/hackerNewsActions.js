import { getMethod } from "../helper/api"
import API_URL_CONSTANTS from "../constants/apiUrlConstants"

export const getHackerNewsData = async (pageNo) => {
    var hackerNews = []
    var hackerNewsId = []
    var hackerNewsVotes = []
    try {
        var hackerNewsResponse = await getMethod(API_URL_CONSTANTS.HACKER_NEWS, "", { page: pageNo, hitsPerPage: 10 })
        console.log("hackerNewsResponse", hackerNewsResponse)
        if (((hackerNewsResponse || {}).data || {}).hits) {
            hackerNews = hackerNewsResponse.data.hits
            hackerNewsResponse.data.hits.map(news => {
                if (news.objectID) {
                    hackerNewsId.push(news.objectID)
                    var point = news.points ? news.points : 0
                    hackerNewsVotes.push(point)
                }
            })
        }
        return { hackerNews, hackerNewsId, hackerNewsVotes }
    } catch (error) {
        return error
    }
}