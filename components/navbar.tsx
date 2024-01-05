'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import Image from "next/image";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";

import { useState } from "react";

export const Navbar = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<NextUINavbar maxWidth="xl" position="sticky" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}  isBordered>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
					<Image src={"/Logo_Globtermic_without_text.png"} alt="logo of compagnie" height={40} width={40}/>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<ul className="hidden md:flex gap-4 justify-start ml-2">
					<ButtonGroup>
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink passHref legacyBehavior href={item.href}>
								<Button variant="light">
									{item.label}
								</Button>
							</NextLink>
						</NavbarItem>
					))}
					</ButtonGroup>
				</ul>
			</NavbarContent>
			<NavbarContent
				className="flex md:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="md:hidden"
				/>
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
					
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<NextLink passHref legacyBehavior href={item.href}>
								<Button variant="light" onPress={() => setIsMenuOpen(false)}>
									{item.label}
								</Button>
							</NextLink>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
