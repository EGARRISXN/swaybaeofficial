/* This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.jsx` route. Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works. Add and edit the content schema in the "./schemas" folder. Vision is a tool that lets you query your content with GROQ in the studio: https://www.sanity.io/docs/the-vision-plugin */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'
import {youtubeInput} from 'sanity-plugin-youtube-input'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {projectId, dataset, apiVersion, googleYoutubeApiKey} from './utils/env.js'
import {schemaTypes} from './schemas/index.js'

export default defineConfig({
  name: 'default',
  basePath: '/studio',
  projectId: projectId || 'i9qt6ktn',
  dataset: dataset || 'production',

  plugins: [
    structureTool(),
    media(),
    visionTool({defaultApiVersion: apiVersion || '2024-02-01'}),
    youtubeInput({apiKey: googleYoutubeApiKey}),
    unsplashImageAsset(),
  ],

  schema: {
    types: schemaTypes,
  },
})
