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
      name: "formEnabled",
      type: "checkbox",
      required: true,
      defaultValue: true,
    },
    {
      name: "messages",
      type: "group",
      fields: [
        {
          name: "success",
          type: "textarea",
          required: true,
        },
        {
          name: "error",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};