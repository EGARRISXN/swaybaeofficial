/* This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.jsx` route. Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works. Add and edit the content schema in the "./schemas" folder. Vision is a tool that lets you query your content with GROQ in the studio: https://www.sanity.io/docs/the-vision-plugin */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from '@lib/env'
import {schemaTypes} from '@schemas/index'

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',

  plugins: [structureTool(), visionTool({defaultApiVersion: apiVersion || ''})],

  schema: {
    types: schemaTypes,
  },
})
