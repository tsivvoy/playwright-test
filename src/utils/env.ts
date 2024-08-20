import * as dotenv from 'dotenv'
import * as path from 'path'

export function loadEnv(env: string) {
  dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) })
}
