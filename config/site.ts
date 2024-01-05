export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Globtermic",
	description: "Official Website of Globtermic",
	navItems: [
	{
		label: "Home",
		href: "/",
	},
    {
      label: "Models",
      href: "/models",
    },
    {
      label: "Project",
      href: "/project",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    }
	],
	navMenuItems: [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Models",
		href: "/models",
	},
	{
		label: "Project",
		href: "/project",
	},
	{
		label: "About",
		href: "/about",
	},
	{
		label: "Contact",
		href: "/contact",
	}
	],
	links: {
	// 	github: "https://github.com/nextui-org/nextui",
	// 	twitter: "https://twitter.com/getnextui",
	// 	docs: "https://nextui.org",
	// 	discord: "https://discord.gg/9b6yyZKmH4",
    // sponsor: "https://patreon.com/jrgarciadev"
	},
};
