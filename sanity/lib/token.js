// This file is used to store the Sanity API read token. It is used in the server to fetch data from the Sanity API. It is also used to taint the token so that it is not passed to the client.
import 'server-only'

import {experimental_taintUniqueValue} from 'react'

export const token = process.env.SANITY_API_READ_TOKEN

if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN')
}

experimental_taintUniqueValue(
  'Do not pass the sanity API read token to the client.',
  process,
  token,
)
