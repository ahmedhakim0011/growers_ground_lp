# Garden data expansion (2026-11-05)

Follows finding 2 of `audit-2026-11-05.md`. Nothing was committed, pushed or deployed.

| Metro | Before | After | Named | Indexable (10+) | Sources |
|---|---|---:|---:|---|---|
| New York | 18 | 644 | 601 | Yes, as before | NYC Parks GreenThumb (549 active records), OpenStreetMap |
| Los Angeles | 20 | 55 | 23 | Yes, as before | OpenStreetMap |
| Atlanta | 1 | 62 | 59 | **Newly** | Atlanta Regional Commission (55 records, dated 2016), OpenStreetMap |
| Houston | 3 | 23 | 5 | **Newly** | OpenStreetMap |
| Dallas-Fort Worth | 1 | 7 | 4 | No, still noindex | OpenStreetMap |
| Miami | 0 | 0 | 0 | No, still noindex | No usable source found |

"Named" is the count in the page's A to Z list. Unnamed pins appear on the map only.

## Sources used

| Source | Licence | Evidence read |
|---|---|---|
| [GreenThumb Garden Info](https://data.cityofnewyork.us/d/p78i-pat6) | NYC Open Data: no licence requirement or use restrictions; the city may require source, version and changes to be identified | [NYC Admin Code 23-502(d)](https://nycadmincode.readthedocs.io/t23/c05/index.html), read on a third-party mirror. nyc.gov terms pages returned 403/404 |
| [Gardens, Farms and Orchards in Atlanta Region](https://www.arcgis.com/home/item.html?id=4c73946aa6e6464daf94c9df8046b0f6) | CC BY 4.0 | Licence field on the item |
| OpenStreetMap, via Overpass | [ODbL](https://www.openstreetmap.org/copyright) | Stated in each response |

## Method

- Every pin in `public/data/cities/<slug>.json` for the six metros has `sources` and `refs` (for example `nyc-greenthumb:XGT095`, `osm:way/123`). `launch-content/data/<slug>-merged.json` also holds addresses, upstream sources and the review log.
- OpenStreetMap was thin because the old query missed the common tag `leisure=garden` + `garden:type=community`. The new query includes it.
- GreenThumb: status Active only. 32 records without lat/lon use the centroid of their dataset polygon. Three OpenStreetMap pins matching closed or inactive GreenThumb records were dropped.
- Atlanta: Type Garden, community subtype, Atlanta address, inside the metro box.
- Duplicates: same name within 1.5 km, similar name within 400 m, unnamed within 60 m, or different names from different sources within 20 m. Rows of one official dataset are never merged with each other. New York: 257 merged. Los Angeles: 8. Atlanta: 6.

## Sources rejected

Listed with reasons in `launch-content/config/open-data-sources.json`: City of Dallas GIS layers (official, but no reuse grant), Houston's legacy portal (blocked, licence unread), and several LA, Miami and Houston ArcGIS uploads by students or researchers with no licence.

## Known limits

- **Atlanta data is from 2016.** The page shows the date, but most of the 62 are decade-old records. 29 more are held off the site until checked: 28 whose names do not read as gardens, plus Westview, whose land a campaign page says was put up for sale. They are listed in `launch-content/config/open-data-sources.json` under `heldForReview`.
- **Houston is indexable but thin:** 5 named gardens out of 23.
- **Dallas-Fort Worth covers the City of Dallas only**, as the metro config does. Fort Worth has 2 OpenStreetMap pins, which would make 9, still under 10.
- **Miami covers the City of Miami only.** Miami-Dade County has 2 OpenStreetMap pins.
- **New York page weight:** 417 KB HTML, 74 KB gzipped.
- **Supabase seeding is unchanged** and still reads only `-osm.json`, so the app does not get these records.
- `launch-content` is not a git repo and its `data/` is gitignored, so merged files live only on this machine. The committed record is `public/data/cities/`.

## Local sections

Atlanta's existing section was re-checked against its official page on 2026-11-05. Houston's existing section could not be re-checked: houstontx.gov timed out for curl and was refused by the browser. No sections were added for Dallas-Fort Worth or Miami because they did not become indexable.
