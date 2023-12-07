// MenuItem.tsx
import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface MenuItemProps {
  link: string;
  children: React.ReactNode;
}

export const MenuItems: React.FC<MenuItemProps> = ({ link, children }) => (
  <Link href={link}>
    <Text
      color={"#3B4856"}
      fontWeight={400}
      fontSize={"16px"}
      cursor={"pointer"}
      _hover={{ color: "#DD005C" }}
    >
      {children}
    </Text>
  </Link>
);
