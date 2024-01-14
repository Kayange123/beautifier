import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.EXPO_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.EXPO_PUBLIC_SANITY_DATASET,
  },
})
