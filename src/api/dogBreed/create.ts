import { APIRequestContext } from '@playwright/test'
import { Config } from './config'

interface PostResponse {
  message: string
  id: string
}

export const create = async (request: APIRequestContext, imageId: string, subId: string): Promise<PostResponse> => {
  const url = `${Config.API_URL}/favourites`
  const data = {
    image_id: imageId,
    sub_id: subId,
  }

  const response = await request.post(url, {
    headers: Config.getHeaders(),
    data,
  })

  if (!response.ok()) {
    throw new Error(`Failed to create favourite: ${response.status()} ${response.statusText()}`)
  }

  return await response.json() as PostResponse
}
