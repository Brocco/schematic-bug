# Steps to reproduce

- run `npm install`
- run `npm run build`
- run `cd real`
- run with dry-run `schematics ../src/collection.json:rename --dry-run`
- note it succeeds
- run without dry-run `schematics ../src/collection.json:rename --dry-run=false`
- note it fails