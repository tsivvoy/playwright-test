import { test, expect } from '@playwright/test'
import { v4 as uuidv4 } from 'uuid'
import { Config } from '../../api/dogBreed/index'
import { default as dogBreed } from '../../fixtures/dogBreed.json'

const imageId = uuidv4()
const subId = `my-user-${uuidv4().slice(0, 8)}`

const data = {
  image_id: imageId,
  sub_id: subId,
}

// test('Happy path - successfully create a favourite', async ({ request }) => {
//   const response = await request.post(`${Config.API_URL}/favourites`, {
//     data
//   })

//   console.log(await response.text())

//   expect(response.status()).toBe(200)
//   const responseBody = await response.json()
  
//   expect(responseBody).toEqual(dogBreed.favourites[0].success.responses[0].body)
// })

test('Negative path - invalid data', async ({ request }) => {
  const response = await request.post(`${Config.API_URL}/favourites`, {
    data: ''
  })

  console.log(await response.text())

  expect(response.status()).toBe(400)
  const responseBody = await response.json()
  expect(responseBody).toEqual({
    message: "INVALID_DATA"
  })
})
