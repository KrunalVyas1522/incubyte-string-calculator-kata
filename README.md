# String Calculator Kata

Incubyte assessment submission — Krunal Vyas

## Setup

```bash
npm install
npm test
```

## Approach

Followed TDD strictly throughout — wrote each test before touching the implementation, committed after each red/green/refactor step. Watched the Uncle Bob video before starting, which helped me stay disciplined about not writing ahead.

Started simple (empty string, single number) and let the design emerge from the tests rather than planning it upfront. The delimiter extraction ended up as a separate function naturally once the custom delimiter cases came in.

One thing I was deliberate about: keeping the main `add()` function readable at a glance. The helper functions (`parseDelimiter`, `escape`) exist to keep that top-level function clean, not to show off abstraction.
