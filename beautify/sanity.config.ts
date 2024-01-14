import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'beautify',

  projectId: process.env.EXPO_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.EXPO_PUBLIC_SANITY_DATASET as string,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
