import React from "react";

import { cn } from "@/lib/cn";

import { NAV_LINKS } from "../../config/nav";
import { NavItem } from "./nav-item";

export function Nav({
  className,
  activeId,
}: {
  className?: string;
  activeId?: string | null;
}) {
  return (
    <nav className={cn("flex items-center gap-3", className)}>
      {NAV_LINKS.map(({ title, href }) => {
        const itemId = href?.split("#")[1] ?? "";
        const active = itemId === activeId;

        return (
          <NavItem key={href} href={href} active={active}>
            {title}
          </NavItem>
        );
      })}
    </nav>
  );
}
