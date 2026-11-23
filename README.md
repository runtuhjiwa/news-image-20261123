[![Competition](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![Rank](https://make.fun/badge/news-image-20261123/runtuhjiwa/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![Reward](https://make.fun/badge/news-image-20261123/runtuhjiwa/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

# news-image-20261123

Sum up 23 November 2026's world news in one image — a make.fun entry.

`entry.png` is a five-panel news-magazine front page ("THE WORLD — Monday, 23 November 2026") summing up the day's five biggest world stories. `main.ts` copies it to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png`) and validates the PNG magic bytes.

## The five stories

1. **Ukraine sinks Russian warship off Libya** — President Zelenskyy announced that seven Ukrainian sea drones sank the Russian corvette Merkury at Benghazi naval base, also hitting the cargo ship MV Angara and destroying a Ka-27 helicopter.
2. **NATO in emergency session** — NATO's North Atlantic Council meets in Brussels after three Russian Kh-101 cruise missiles entered Polish airspace and crashed in south-east Poland.
3. **Iran vows "every means"** — Iran vows to use every means against the U.S. blockade after Trump warned tankers that try to break it will be sunk.
4. **COP31 talks collapse** — UN climate talks in Antalya, Turkey ended with no deal, the longest UN climate summit ever, after the final text omitted fossil fuels.
5. **Democrats win 258 House seats** — Democrats secure at least 258 U.S. House seats, their largest majority since 1992, after Rep. Virginia Foxx conceded to Democrat Chuck Hubbard in North Carolina's 5th District following a recount.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`.
