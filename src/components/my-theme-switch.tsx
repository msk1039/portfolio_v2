"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import Image from "next/image";
import { useTheme } from "next-themes";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";

import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/use-meta-color";
import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { resolvedTheme, setTheme } = useTheme();
  const { setMetaColor } = useMetaColor();
  const [mounted, setMounted] = useState(false);
  
  // Force light theme on first load and set up mounted state
  useEffect(() => {
    // Always set to light theme on initial load
    setTheme("light");
    setMetaColor(META_THEME_COLORS.light);
    setMounted(true);
  }, []);

  const handleToggle = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setMetaColor(
      resolvedTheme === "dark"
        ? META_THEME_COLORS.light
        : META_THEME_COLORS.dark
    );
  }, [resolvedTheme, setTheme, setMetaColor]);

  // Simple light-themed placeholder during SSR/mounting
  if (!mounted) {
    return (
      <div className="group overflow-hidden relative peer bg-[#346288] focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-[32px] w-[64px] shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 inset-shadow-sm inset-shadow-black/50">
        <div className="flex items-center justify-center bg-blue pointer-events-none w-[100px] h-[80px] rounded-full ring-0 transition-transform duration-200 translate-x-[-25px] z-10">
            <div className="bg-white/10 dark:bg-gray-200/10 min-w-[80px] min-h-[80px] rounded-full flex items-center justify-center z-10">
            <div className="bg-white/30 dark:bg-gray-200/30 min-w-[65px] min-h-[60px] rounded-full flex items-center justify-center">
              <div className="bg-white/40 dark:bg-gray-200/40 min-w-[50px] min-h-[40px] rounded-full flex items-center justify-center">
                <div className="transition-all duration-200 bg-[#f0ce53] group-data-[state=unchecked]:shadow-[inset_0_0_5px_1px_rgba(255,255,255,0.5)] group-data-[state=checked]:shadow-[inset_0_0_5px_2px_rgba(100,100,100,0.3)] min-w-[28px] min-h-[28px] rounded-full flex items-center justify-center drop-shadow-xl/30">
                
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                >
                    {resolvedTheme === "dark" ? 
                        // Dark mode - Moon icon
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /> : 
                        // Light mode - Sun icon
                        <>
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        </>
                    }
                </svg>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "group overflow-hidden relative peer data-[state=checked]:bg-[#1c2130] data-[state=unchecked]:bg-[#346288] focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[32px] w-[64px] shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 inset-shadow-sm inset-shadow-black/50",
        className
      )}
      checked={resolvedTheme === "dark"}
      onCheckedChange={handleToggle}
      {...props}
    >
      <Image 
        src="/cloud.png" 
        alt="Day Icon"
        width={100}
        height={100}
        priority={true}
        className={cn(
          "pointer-events-none opacity-50 absolute top-[-10px] left-[20px] z-0 transition-transform duration-200 group-data-[state=checked]:translate-y-[80px] group-data-[state=unchecked]:translate-y-0"
        )}
      />
      <Image 
        src="/stars.png" 
        alt="Night Icon"
        width={50}
        height={50}
        priority={true}
        className={cn(
          "pointer-events-none opacity-70 absolute top-[5px] left-[-10px] z-0 transition-transform duration-200 group-data-[state=unchecked]:translate-y-[-80px] group-data-[state=checked]:translate-y-0"
        )}
      />
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "flex items-center justify-center bg-blue pointer-events-none w-[100px] h-[80px] rounded-full ring-0 transition-transform duration-200 data-[state=checked]:translate-x-[calc(64px-57px)] data-[state=unchecked]:translate-x-[-25px] z-10"
        )}
      >
        {props.children || (
          <div className="bg-white/10 dark:bg-gray-200/10 min-w-[80px] min-h-[80px] rounded-full flex items-center justify-center z-10">
            <div className="bg-white/30 dark:bg-gray-200/30 min-w-[65px] min-h-[60px] rounded-full flex items-center justify-center">
              <div className="bg-white/40 dark:bg-gray-200/40 min-w-[50px] min-h-[40px] rounded-full flex items-center justify-center">
                <div className="transition-all duration-200 group-data-[state=unchecked]:bg-[#f0ce53] group-data-[state=checked]:bg-slate-200 group-data-[state=unchecked]:shadow-[inset_0_0_5px_1px_rgba(255,255,255,0.5)] group-data-[state=checked]:shadow-[inset_0_0_5px_2px_rgba(100,100,100,0.3)] min-w-[28px] min-h-[28px] rounded-full flex items-center justify-center drop-shadow-xl/30">
                
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                >
                    {resolvedTheme === "dark" ? 
                        // Dark mode - Moon icon
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /> : 
                        // Light mode - Sun icon
                        <>
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        </>
                    }
                </svg>

                </div>
              </div>
            </div>
          </div>
        )}
      </SwitchPrimitive.Thumb>
      <span className="sr-only">Toggle Theme</span>
    </SwitchPrimitive.Root>
  );
}

// For theme transitions
const globalStyles = `
  html {
    transition: background-color 200ms ease-in-out, 
                color 200ms ease-in-out;
  }
`;

// Add global styles outside component to avoid multiple creations
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.textContent = globalStyles;
  document.head.appendChild(styleEl);
}

export { Switch };