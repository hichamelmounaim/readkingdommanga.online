---
name: update-chapters
description: >-
  Automated skill and helper script to seamlessly update the website's manga chapter list using a scraped JSON file, rebuild the sitemap, and run verification builds.
---

# update-chapters

## Overview
This skill provides an automated utility to update the website's complete chapter dataset, dynamically rebuild the SEO sitemap with all chapter pages, and run production compile checks. It prevents manual file transfers, syntax slips, and domain inconsistencies.

## Dependencies
None. This is a fully self-contained Node.js utility script tailored to this repository.

## Quick Start
To import and apply a newly scraped Kingdom chapter JSON file:

```bash
node scripts/update-chapters.cjs --file path/to/scraped-file.json
```

*Example:*
```bash
node scripts/update-chapters.cjs --file scraped_czvwfo-kingdom.json
```

## Utility Scripts
The script `/scripts/update-chapters.cjs` takes a single parameter:
*   `--file`: Path to the input scraped JSON file (can be a relative path or an absolute path).

### Script Execution Workflow
When executed, the script automatically handles the following sequence:
1.  **Existence Check**: Validates that the specified JSON file exists.
2.  **Schema Check**: Parses the JSON to verify that it contains a valid structure (a root object containing a `chapters` array).
3.  **Deploy Asset**: Overwrites `/public/scraped_czvwfo-kingdom.json` with the new data.
4.  **Rebuild Sitemap**: Programmatically triggers `/scripts/generate-sitemap.cjs` to build the new sitemap representing all 879+ chapters.
5.  **Build Verification**: Runs `npm run build` locally to guarantee the site compiles with no errors before you upload or deploy the code.

## Common Mistakes

> [!WARNING]
> **Incorrect JSON Schema**: Make sure the input JSON contains the standard scraped keys: `chapter_number`, `chapter_title`, and `image_urls`. If these are missing, the script will reject the update.

> [!CAUTION]
> **Compilation Errors**: If you modify any frontend code before running this command and introduce a TypeScript error, the build check step of the script will catch it and halt, keeping the deployment safe. Ensure any code changes are clean before updating chapters.
