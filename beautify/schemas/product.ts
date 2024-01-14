import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'productTitle',
      title: 'Product Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bgImage',
      title: 'Background image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          {title: 'Body Lotion', value: 'bodyLotion'},
          {title: 'Perfumes', value: 'perfumes'},
          {title: 'Face Wash', value: 'faceWash'},
          {title: 'Mouth Clenser', value: 'mouthClenser'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
      description: 'Price of the product in Tsh',
    }),
  ],
})
