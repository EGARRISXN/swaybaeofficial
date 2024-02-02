/* This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.jsx` route */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

import {apiVersion, dataset, projectId} from './env'
import {schemaTypes} from './schemas'

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || 'i9qt6ktn',
  dataset: dataset || 'production',

  // Add and edit the content schema in the "./schemas" folder

  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin

    visionTool({defaultApiVersion: apiVersion || '2024-02-01'}),
  ],
  schema: {
    types: schemaTypes,
  },
})
