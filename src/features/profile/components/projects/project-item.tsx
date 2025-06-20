"use client"
import { ArrowUpRightIcon, ChevronDownIcon, CodeXmlIcon } from "lucide-react";
import Image from "next/image";
// import { CldImage } from 'next-cloudinary';
import { Accordion as AccordionPrimitive } from "radix-ui";
import React from "react";

// import { Markdown } from "@/components/markdown";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";
import VideoDialog from "@/components/VideoDialog"
import { UTM_PARAMS } from "@/config/site";
import { cn } from "@/lib/cn";
import { addQueryParams } from "@/utils/url";

import { Project } from "../../types/projects";


export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  return (
    <AccordionPrimitive.Item value={project.id} asChild>
      <div className={cn("flex items-center max-w-full", className)}>
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.title}
            width={32}
            height={32}
            quality={100}
            className="mx-4 flex size-6 shrink-0"
          />
        ) : (
          <div
            className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 text-muted-foreground shadow-xs dark:bg-zinc-900"
            aria-hidden="true"
          >
            <CodeXmlIcon className="size-4" />
          </div>
        )}

        <div className="flex-1 border-l border-dashed border-grid min-w-0"> {/* Added min-w-0 here */}
          <AccordionPrimitive.Trigger className="group/project flex w-full items-center justify-between gap-4 px-2 py-4 text-left select-none [&[data-state=open]_.lucide-chevron-down]:rotate-180">
            <div>
              <h3 className="mb-1 flex items-center gap-1 font-heading text-lg leading-snug font-medium text-balance decoration-ring underline-offset-4 group-hover/project:underline">
                {project.title}
                <a
                  className="flex size-6 shrink-0 items-center justify-center text-muted-foreground"
                  href={addQueryParams(project.link, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener"
                >
                  <ArrowUpRightIcon className="pointer-events-none size-4" />
                  <span className="sr-only">Open</span>
                </a>
              </h3>

              <p className="font-mono text-sm text-muted-foreground">
                {project.time}
              </p>
            </div>

            <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-300" />
          </AccordionPrimitive.Trigger>

          <AccordionPrimitive.Content className="space-y-4 overflow-hidden transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            {project?.description && (
              <Prose className="px-2">
                {project?.description}
              </Prose>
            )}

            {Array.isArray(project.tags) && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 px-2 pb-4">
                {project.tags.map((skill, index) => (
                  <Tag key={index}>{skill}</Tag>
                ))}
              </div>
            )}


          </AccordionPrimitive.Content>
          {Array.isArray(project.screenshots) && project.screenshots.length > 0 && (
            <div className="px-2 pb-4 overflow-hidden md:max-w-2xl ">
              <div className="flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="flex-shrink-0 relative w-[200px] min-h-[120px]">
                    {(screenshot.endsWith('.mp4')|| screenshot.endsWith('.mov')) ? (
                      <div className="group border-offgray-300/40 dark:border-offgray-700/40 relative h-auto w-full overflow-hidden rounded border">
                        {/* <video
                          // autoPlay
                          loop
                          muted
                          playsInline
                          width={1178}
                          height={754}
                          className="w-full"
                        >
                          <source src={process.env.LANDING_VIDEO} type="video/mp4" />
                        </video> */}
                        <Image
                        src={project.thumbnails?.[screenshot]?.thumbnailUrl || ''}
                        width={400}
                        height={400}
                        alt="Demo Image"
                        />
                        <div className="absolute inset-0 bg-black/40 [mask-image:linear-gradient(to_top,_#ffffff,_transparent)]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
                          <VideoDialog
                            videoUrl={screenshot}
                            trigger={
                              <button
                                type="button"
                                aria-label="Play video"
                                className="w-16 h-16 rounded-full relative overflow-hidden flex items-center justify-center shadow-xl shadow-black/60 bg-blue-600 bg-gradient-to-t from-black to-gray-900 outline-4 outline-blue-300/20 hover:outline-blue-300/40 hover:outline-[6px] hover:scale-105 transition-all cursor-pointer"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-6 h-6 text-white"
                                >
                                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                </svg>
                              </button>
                            }
                          />
                        </div>
                      </div>


                    ) : (
                      <Image
                        src={screenshot}
                        alt={`Screenshot ${index + 1} of ${project.title}`}
                        fill
                        sizes="400px"
                        className="rounded-md border object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHXKL3fQAAAABJRU5ErkJggg=="
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AccordionPrimitive.Item>
  );
}
