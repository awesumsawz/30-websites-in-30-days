import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  fields: [
    {
      name: "shortName",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "intro",
      type: "textarea",
      required: true,
    },
    {
      name: "listTitle",
      type: "text",
      required: true,
      defaultValue: "Key Features",
    },
    {
      name: "listItems",
      type: "array",
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "tldr",
      type: "textarea",
      required: true,
    },
    {
      name: "ctaBox",
      type: "group",
      fields: [
        {
          name: "ctaTitle",
          type: "text",
          required: true,
          defaultValue: "Let's build something awesome!",
        },
        {
          name: "ctaText",
          type: "textarea",
          required: true,
          defaultValue: "I like building cool stuff. If you have a project in mind, let's talk!",
        },
        {
          name: "ctaButtonText",
          type: "text",
          required: true,
          defaultValue: "Get in touch",
        },
        {
          name: "ctaButtonLink",
          type: "text",
          required: true,
          defaultValue: "/contact",
        },
      ],
    },
  ],
};