import {createClient} from 'next-sanity'
import {apiVersion, dataset, projectId} from './env'

export const client = createClient({
  apiVersion: apiVersion || '2024-02-01',
  projectId: projectId || 'i9qt6ktn',
  dataset: dataset || 'production',
  useCdn: false,
})
