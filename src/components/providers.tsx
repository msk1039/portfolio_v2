"use client";

import { AppProgressProvider } from "@bprogress/next";
import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/sonner";

import { PostHogProvider } from "./posthog-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider
        enableSystem
        disableTransitionOnChange
        enableColorScheme
        storageKey="chanhdai.theme"
        defaultTheme="system"
        attribute="class"
      >
        <AppProgressProvider
          color="#2563eb"
          height="2px"
          delay={500}
          options={{ showSpinner: false }}
        >
          <PostHogProvider>{children}</PostHogProvider>
        </AppProgressProvider>

        <Toaster />
      </ThemeProvider>
    </JotaiProvider>
  );
}
