import type { Lang } from "@/lib/types";
import { fr, type Dict } from "./fr";
import { ar } from "./ar";

const DICTS: Record<Lang, Dict> = { fr, ar };
export const getDict = (lang: Lang): Dict => DICTS[lang];
export type { Dict };
