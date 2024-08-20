import dotenv from 'dotenv'

dotenv.config()

export class Config {
  static API_URL = process.env.API_URL ?? ''
  static API_KEY = process.env.API_KEY ?? ''

  static getHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'x-api-key': Config.API_KEY,
    }
  }
}
