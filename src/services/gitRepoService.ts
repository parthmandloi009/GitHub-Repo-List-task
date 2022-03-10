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
    const config = {
        headers: {
            Authorization: `Token ${process.env.GITHUB_ACCESS_KEY}`,
        },
    }

    const url = `${process.env.GIT_URL}?q=${search}+in:file&page=${page}&per_page=${per_page}&order=${order}&sort=${sort}`

    try {
        const data = await axios.get(url, config)
        return data
    } catch (e: any) {
        throw new CustomError(e.message, FORBIDDEN)
    }
}
