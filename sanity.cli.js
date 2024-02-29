import {defineCliConfig} from 'sanity/cli'
import {id, set} from '@/sanity/lib/api'

export default defineCliConfig({
  api: {
    projectId: id,
    dataset: set,
  },
})
