import type { PageContent } from "@/lib/types";
import { core } from "./core";
import { hubs } from "./hubs";
import { gynecology } from "./gynecology";
import { pregnancy } from "./pregnancy";
import { ultrasound } from "./ultrasound";
import { fertility } from "./fertility";
import { conditions } from "./conditions";
import { legal } from "./legal";

export const fr: Record<string, PageContent> = { ...core, ...hubs, ...gynecology, ...pregnancy, ...ultrasound, ...fertility, ...conditions, ...legal };
