import { defineConfig } from "vocs";

export default defineConfig({
  title: "Docs",
  sidebar: [
    {
      text: "Earnings",
      items: [
        {
          text: "Getting Started",
          link: "/earnings/getting-started",
        },
        {
          text: "Example",
          link: "/earnings/example",
        },
      ],
    },
    {
      text: "Creator",
      items: [
        {
          text: "Getting Started",
          link: "/creator/getting-started",
        },
        {
          text: "Example",
          link: "/creator/example",
        },
      ],
    },
  ],
});
