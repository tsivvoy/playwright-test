import { test, expect } from '@playwright/test'
import { create } from '../../api/dogBreed/index'
import { v4 as uuidv4 } from 'uuid'
import { default as dogBreed } from '../../fixtures/dogBreed.json'

test('should successfully create a favourite', async ({ request }) => {
  const imageId = uuidv4()
  const subId = `my-user-${uuidv4().slice(0, 8)}`

  try {
    const response = await create(request, imageId, subId)
    console.log(response)

    expect(response.message).toBe(dogBreed.favourites[0].success.responses[0].body.message)
    expect(response).toHaveProperty('id')
  } catch (error) {
    console.error('Error in creating favourite:', error)
    throw error
  }
})
