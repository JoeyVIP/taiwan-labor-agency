import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-change-in-production',
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
        },
      ],
    },
    {
      slug: 'company-info',
      admin: {
        useAsTitle: 'companyName',
      },
      fields: [
        {
          name: 'companyName',
          type: 'text',
          required: true,
          label: '公司名稱',
        },
        {
          name: 'slogan',
          type: 'text',
          label: '標語',
        },
        {
          name: 'description',
          type: 'textarea',
          label: '公司簡介',
        },
        {
          name: 'phone',
          type: 'text',
          label: '聯絡電話',
        },
        {
          name: 'email',
          type: 'email',
          label: '聯絡 Email',
        },
        {
          name: 'address',
          type: 'text',
          label: '公司地址',
        },
      ],
    },
    {
      slug: 'services',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: '服務名稱',
        },
        {
          name: 'description',
          type: 'richText',
          label: '服務說明',
          editor: slateEditor({}),
        },
        {
          name: 'features',
          type: 'array',
          label: '服務特色',
          fields: [
            {
              name: 'feature',
              type: 'text',
              label: '特色項目',
            },
          ],
        },
      ],
    },
    {
      slug: 'cases',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: '案例標題',
        },
        {
          name: 'category',
          type: 'select',
          label: '類別',
          options: [
            { label: '看護工', value: 'caregiver' },
            { label: '工廠移工', value: 'factory' },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
          label: '案例說明',
        },
        {
          name: 'result',
          type: 'textarea',
          label: '成果',
        },
      ],
    },
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/taiwan-labor-agency',
  }),
  editor: slateEditor({}),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
