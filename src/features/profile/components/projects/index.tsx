import { Accordion as AccordionPrimitive } from "radix-ui";

import { CollapsibleList } from "@/components/collapsible-list";

import { PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

export function Projects() {
  return (
    <Panel id="projects" className="scroll-mt-22">
      <PanelHeader>
        <PanelTitle>
          Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({PROJECTS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <AccordionPrimitive.Root
        type="single"
        defaultValue="portfolio-website"
        collapsible
      >
        <CollapsibleList
          items={PROJECTS}
          renderItem={(item) => <ProjectItem project={item} />}
        />
      </AccordionPrimitive.Root>
    </Panel>
  );
}
