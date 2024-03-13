import {createClient} from '@sanity/client'
import {id, set, apiVersion} from './api'

export const client = createClient({
  projectId: id,
  dataset: set,
  apiVersion: apiVersion,
  useCdn: true,
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
})
