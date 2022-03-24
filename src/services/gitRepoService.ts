import axios from 'axios'
import { CustomError } from '../utils/customError'
import { FORBIDDEN } from '../constant/errorCodes'

import 'dotenv/config'

export const fetchGitRepoList = async (
    page: number,
    order: string,
    search: string,
    per_page: string,
    sort: string
) => {
    console.log('iiiiiiiiiiiii')

    const config = {
        headers: {
            Authorization: `Token ${process.env.GITHUB_ACCESS_KEY}`,
        },
    }

    const url = `https://api.github.com/search/code?q=${search}+in:file&page=${page}&per_page=${per_page}&order=${order}&sort=${sort}`

    try {
        return await axios.get(url, config)
    } catch (e: any) {
        console.log('error')
    }
}
