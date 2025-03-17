import type { CollectionConfig } from "payload";

export const ContactPage: CollectionConfig = {
  slug: "contactPage",
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
          type: "text",
          required: true,
          defaultValue: "Thank you for your message! I will get back to you soon.",
        },
        {
          name: "error",
          type: "text",
          required: true,
          defaultValue: "Something went wrong. Please try again.",
        },
      ],
    },
  ],
};
