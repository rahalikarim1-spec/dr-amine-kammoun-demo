# Internal linking strategy

Linking follows **topic relationships**, not keyword anchors. Anchors are the natural page names ("échographie gynécologique", "frottis cervico-utérin"…). Local phrases (gynécologue à Ain Zaghouan Nord, proche de l'Aouina, près de La Soukra, accessible depuis Lac 2) appear only on the local page, the areas hub, the cabinet page and the home page, in running prose.

## Clusters
| Hub | Children (→ grandchildren) |
|---|---|
| Gynécologie `/fr/gynecologie/` | Consultation gynécologique · Consultation de routine · Dépistage (→ Frottis) · Troubles du cycle (→ Règles irrégulières, Règles douloureuses) · Douleurs pelviennes · Ménopause · Contraception · Infections |
| Grossesse `/fr/grossesse-obstetrique/` | Suivi de grossesse (→ 1er, 2e, 3e trimestre) · Consultation grossesse · Grossesse à risque · Préparation à l'accouchement · Suivi après accouchement |
| Échographie `/fr/echographie/` | Gynécologique · Obstétricale · 3D/4D |
| Fertilité `/fr/fertilite/` | Infertilité féminine · Bilan · Troubles de l'ovulation · PMA |
| Pathologies `/fr/pathologies-gynecologiques/` | Endométriose · SOPK · Kyste ovarien · Fibrome (+ cross-listed: douleurs pelviennes, troubles du cycle, ménopause) |
| Local | Gynécologue Ain Zaghouan Nord → Zones desservies |

## Navigation model (simple front end, deep architecture)
Header and mobile drawer expose **5 entries only** (curated in `src/config/navigation.ts`, ≤6 children each): *Le docteur* (profile, publications, cabinet) · *Gynécologie* · *Grossesse* · *Informations* (échographie, fertilité, pathologies, FAQ) · *Contact* (rendez-vous, Ain Zaghouan Nord, L'Aouina, zones). Everything else is reached via hubs, breadcrumbs, contextual links, "À lire aussi" blocks and the full footer (all 5 hubs, doctor, publications, both local pages, areas, legal). No page was removed or de-linked.

## Entity chain (doctor → specialty → topics → geography → contact)
Doctor ⇄ Publications · Doctor → Gynécologie / Grossesse hubs → child articles → Local pages (Ain Zaghouan Nord, L'Aouina) → Contact / Rendez-vous. The Aouina page links to: primary local page, doctor, gynécologie, grossesse, échographie, fertilité, pathologies, areas, appointment, contact. Back-links to it: home (chips + doctor card), header/footer, primary local page, areas hub, cabinet, doctor, contact, and the gynécologie / grossesse / échographie / fertilité hubs (`related`). Anchors are varied and natural ("l'Aouina", "depuis l'Aouina", page label in cards).

## Link types (all implemented)
1. **Hierarchy** — breadcrumbs on every page (child → parent chain), hub → child cards, cross-listed cards in the conditions hub.
2. **Contextual** — inline links in the copy using `[[page-id|anchor]]` (3–7 distinct targets per article, enforced by `npm run validate`).
3. **Related** — `related` in the registry (3–7 curated pages), rendered as "À lire aussi" cards. Includes siblings and cross-cluster links (endométriose → douleurs pelviennes, échographie gynécologique, consultation, infertilité).
4. **Conversion** — every content page has the CTA card (call / appointment); the sitewide header, footer, sticky mobile bar do the rest.
5. **Sitewide** — header dropdowns (hubs + their children), footer columns. Kept to natural labels; no exact-match keyword anchors.

## Rules for new pages
- Add the page to `registry.ts` with a parent, 3–7 `related`, `sources`, and both language contents.
- Link **to** it from its hub (automatic), from ≥2 sibling/related pages, and from at least one contextual paragraph.
- One intent per URL: check the table in `SEO-ARCHITECTURE.md` before creating a near-duplicate.
- Run `npm run validate -- --graph` to see inbound-link counts; orphan = error, "only reachable through sitewide navigation" = warning.
