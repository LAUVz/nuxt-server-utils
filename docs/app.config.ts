export default defineAppConfig({
  docus: {
    title: "Nuxt Server Utils",
    description: "A collection of utility functions for Nuxt API development.",
    image:
      "https://raw.githubusercontent.com/LAUVz/nuxt-server-utils/main/.github/nuxt-server-utils.png",
    socials: {
      twitter: "LAUVz",
      github: "LAUVz/nuxt-server-utils",
    },
    github: {
      dir: "docs/content",
      branch: "main",
      repo: "nuxt-server-utils",
      owner: "LAUVz",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      iconLinks: [
        {
          href: "https://henrijskons.eu",
          icon: "solar:user-bold-duotone",
        },
      ],
    },
  },
});
