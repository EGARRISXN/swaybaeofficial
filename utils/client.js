import {createClient} from 'next-sanity'
import {apiVersion, dataset, projectId} from './env.js'

export const client = createClient({
  apiVersion: apiVersion || '',
  projectId: projectId || '',
  dataset: dataset || '',
  useCdn: false,
})
