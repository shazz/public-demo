import type { Project } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'
export const project2: Partial<Project> = {
  title: 'Reviving efficiency with Spider Software',
  slug: 'software',
  _status: 'published',
  publishedDate: '2023-09-30T23:00:00.000Z',
  meta: {
    title: 'Reviving efficiency with Spider Software',
    description:
      'Discover how our latest software release boosted efficiency, reduced road blocks and drove remarkable growth in the tech industry.',
    image: '{{IMAGE-1}}',
  },
  hero: {
    richText: convertSlateToLexical([
      {
        children: [
          {
            text: 'Discover how our latest software release boosted efficiency, reduced road blocks and drove remarkable growth in the tech industry.',
          },
        ],
        type: 'p',
      },
    ]) as any,
    media: '{{IMAGE-1}}',
  },
  layout: [
    {
      blockType: 'content',
      blockName: 'Overview',
      columns: [
        {
          size: 'full',
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Software Development',
                },
              ],
              type: 'h6',
            },
          ]) as any,
        },
        {
          size: 'twoThirds',
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'We take immense pride in our commitment to delivering exceptional software solutions tailored to our clients unique needs. Our collaboration with the client on the development of Spider Software is a testament to our dedication to innovation and client success.',
                },
              ],
              type: 'h3',
            },
          ]) as any,
          link: {
            reference: {
              relationTo: 'pages',
              value: '',
            },
            url: '',
            label: '',
          },
        },
        {
          size: 'oneThird',
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Digital Pioneer Prize `23',
                },
              ],
              type: 'h6',
            },
            {
              children: [
                {
                  text: 'Innovation Excellence Award `23',
                },
              ],
              type: 'h6',
            },
            {
              children: [
                {
                  text: 'Top 10 Forbes Software `23',
                },
              ],
              type: 'h6',
            },
          ]) as any,
          enableLink: true,
          link: {
            reference: {
              relationTo: 'pages',
              value: '',
            },
            type: 'custom',
            appearance: 'primary',
            url: 'payloadcms.com',
            label: 'View on GitHub',
          },
        },
      ],
    },
    {
      blockType: 'contentMedia',
      blockName: 'Challenges',
      mediaPosition: 'left',
      richText: convertSlateToLexical([
        {
          children: [
            {
              text: 'The Challenge',
            },
          ],
          type: 'h6',
        },
        {
          children: [
            {
              text: 'They faced operational inefficiencies resulting in increased costs and reduced productivity.',
            },
          ],
          type: 'h3',
        },
        {
          children: [
            {
              text: 'Our client, a prominent player in the tech industry, presented us with a formidable challenge. Their need was clear - a customized software solution to streamline operations, foster collaboration, and drive sustainable growth.',
            },
          ],
        },
      ]) as any,
      media: '{{IMAGE-3}}',
    },
    {
      blockType: 'contentMedia',
      blockName: 'Solution',
      mediaPosition: 'right',
      richText: convertSlateToLexical([
        {
          children: [
            {
              text: 'The Solution',
            },
          ],
          type: 'h6',
        },
        {
          children: [
            {
              text: 'Spider Software, an innovative platform purpose-built to tackle their specific pain points.',
            },
          ],
          type: 'h3',
        },
        {
          children: [
            {
              text: 'Our team of seasoned software engineers and designers enthusiastically embarked on crafting a tailor-made solution for the client. Spider Software introduced automated workflows and process optimization, dramatically reducing manual errors and enhancing efficiency.',
            },
          ],
        },
      ]) as any,
      media: '{{IMAGE-4}}',
    },
    {
      blockType: 'content',
      blockName: 'Testimonial',
      columns: [
        {
          size: 'full',
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Testimonial',
                },
              ],
              type: 'h2',
            },
            {
              children: [
                {
                  text: '"Our expectations were exceeded with Spider Software. The team understood our unique challenges and delivered a solution that has revolutionized our operations. We simply could not be happier with the results." - CEO, Spider Software',
                },
              ],
              type: 'h5',
            },
          ]) as any,
        },
      ],
    },
    {
      blockType: 'mediaBlock',
      blockName: 'Outro Image',
      media: '{{IMAGE-2}}',
    },
    {
      blockType: 'content',
      blockName: 'Reflection',
      columns: [
        {
          size: 'full',
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Reflection',
                },
              ],
              type: 'h2',
            },
            {
              children: [
                {
                  text: 'The success story of Spider Software serves as a testament to our unwavering commitment to innovation and client-centric solutions. We are immensely proud of the transformative impact it has had on the client operations and the tech industry as a whole.',
                },
              ],
            },
            {
              children: [
                {
                  text: 'At the forefront of digital innovation, Spider Software demonstrates our ability to create solutions that empower organizations to excel and thrive in the digital age. If you are seeking a partner to drive digital transformation, streamline operations, and elevate your industry standing, reach out to us today. Let us collaborate on your next success story, just like Spider Software.',
                },
              ],
            },
          ]) as any,
        },
      ],
    },
  ],
  relatedProjects: [], // this is populated by the seed script
}
