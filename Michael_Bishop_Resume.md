# Michael Bishop

Web-Janitor-Consulting

howdy@michaelbishop.me | (813) 508-3758 | Tampa, FL

[GitHub](https://github.com/miklb) · [tampamonitor.com](https://tampamonitor.com)

## Summary

I build data pipelines and interactive visualizations from public records to make local government more transparent. My current work focuses on Hillsborough County civic data — election results, voter turnout, city council proceedings, property records, and campaign finance — published as open-source tools and standalone web maps. I use LLMs (GitHub Copilot, Claude) daily as development tools and help organizations adopt AI-augmented workflows. Two decades of open-source contribution, web development, and community organizing ground everything I build.

## Tools & Technologies

- **Data Processing**: Python, SQLite, Datasette, pdfplumber, CSV/JSON/GeoJSON pipelines
- **Geospatial & Visualization**: MapLibre GL JS, PMTiles, Protomaps, GDAL/ogr2ogr, tippecanoe, ArcGIS REST APIs
- **Web**: HTML/CSS, JavaScript/Node.js, Web Components, Eleventy, Jekyll
- **Infrastructure**: GitHub Actions, Cloudflare Pages/R2/Workers, shell scripting
- **WordPress**: Theme/plugin development, WooCommerce, multisite, headless CMS, REST API
- **AI-Augmented Development**: GitHub Copilot and Claude for code generation and architectural planning. Experienced building custom Copilot agents, domain-specific skills, and instruction files to guide AI behavior in project-specific workflows.
- **Workflow**: Git/GitHub, VS Code, macOS, semantic markup, accessibility-first development

## Civic Data & Tampa Monitor

[Tampa Monitor](https://tampamonitor.com) is a Tampa-focused civic transparency project I run, covering city council proceedings, development applications, and local events. I also build county-wide data tools for Hillsborough County — election visualization, property research, and campaign finance analysis — with an eye toward expanding coverage beyond the city.

**Election Data & Maps** — Pipeline that processes Hillsborough County Supervisor of Elections CSV and PDF files into structured JSON, then renders interactive precinct-level choropleth maps for voter turnout, candidate results, and partisan swing. Maps use MapLibre GL JS with PMTiles vector tiles — standalone HTML files, no server required. Deployed to Cloudflare Pages with tile data on R2.

**Meeting Transparency** ([meetings.tampamonitor.com](https://meetings.tampamonitor.com)) — Scrapes Tampa City Council agendas from the city's Hyland OnBase system, processes meeting transcripts (named entity recognition, case normalization), and synchronizes with YouTube video recordings. 57+ meetings stored in SQLite with full-text search. Automated nightly via GitHub Actions. Published as a static Eleventy site with accessibility reviewed to WCAG 2.1 AA.

**Development Coordination** ([dev-coord.tampamonitor.com](https://dev-coord.tampamonitor.com)) — Datasette instance tracking City of Tampa development applications, auto-updated nightly from the city's ArcGIS endpoint via GitHub Actions.

**City Events** — Built an iCal feed generator for City of Tampa events using their JSON API. City Technology & Innovation staff contributed improvements back to the project. Runs as a daily GitHub Action.

**Property Research** — YAML-driven pipeline querying the Hillsborough County Property Appraiser API. Four-phase ETL (search, enrich, geometries, assemble) with rate limiting, checkpointing, and GeoJSON output.

**Campaign Finance** — Import and analysis tools for Florida Division of Elections contribution data. SQLite database with normalized schema and Flask-based reporting interface.

## Open Source & Community

- **IndieWeb**: Built [jekyll-indieweb](https://github.com/miklb/jekyll-indieweb) (60+ stars), an IndieWeb quick-start for Jekyll. Created Eleventy templates and contributed to WordPress IndieWeb plugins. Active advocate for the [open web](https://indieweb.org) and web standards.
- **Hurricane Response**: Joined technologists responding to Hurricane Irma (2017). Built shelter tracking and disaster response mapping tools with Code for Tampa Bay (Code for America brigade), working with FEMA and Red Cross. Invited to speak at **GitHub Connect 2019** about the work and use of GitHub's tools in civic crisis response.
- **Habari**: Project Member Committee for the open-source object-oriented PHP publishing platform.
- **WordPress**: Administrator of the official WordPress.org support forums (2005–2006). Continued contributor and advocate.
- **Web Components**: Built [`pull-quote`](https://github.com/miklb/pull-quote) and [`web-share-button`](https://github.com/miklb/web-share-button) HTML web components.

## Employment History

**Web-Janitor-Consulting / Freelance Developer**
_2016–present_

Independent consulting focused on civic data systems, WordPress development, and AI-augmented workflows. Current work centers on Tampa Monitor (see above).

- Custom WordPress plugin development using third-party APIs (REST and SOAP) for scheduled data updates on e-commerce sites.
- WordPress multisite architecture, including an internal style guide tool for a design agency.
- Site migrations, front-end performance tuning, and DevOps.
- Introduced Git/GitHub workflows and coding standards for client development teams.

**Sparxoo**
_2019–2020_

WordPress engineer working with high-profile, high-traffic clients including e-commerce and WooCommerce sites.

- Refactored webpack build tooling, reducing page load times by seconds.
- Optimized PHP database queries for improved performance on high-traffic sites.
- Began standardizing Docker workflows across hosting platforms.
- Built custom functionality with Advanced Custom Fields and custom content types. Managed plugin update schedules and testing.

**Knock Knock Factory**
_2011–2012_

WordPress contractor with branding/marketing startup. Extensive use of custom post types and taxonomies. Direct client interaction from discovery through delivery.

**Kinetic Knowledge**
_2009–2011_

Sole WordPress developer for a distributed company managing 300+ sites on WordPress Multisite. Responsible for all development, VPS management, and escalated support. Migrated the entire Multisite database between hosting providers. Built a plugin to aggregate job listings across sites into an XML feed for Indeed.

**The Complete Website**
_2007–2009_

Senior WordPress developer. Created theme frameworks and a plugin repository for rapid site development. Established security practices for the team.

**Freelance WordPress Developer**
_2005–2007_

Customization, troubleshooting, and launches for small business WordPress sites.

**Apple Computers**
_2003–2004_

Retail Mac specialist — sales, training, and leading workshops on macOS.

**Culinary Professional**
_1990–2015_

Executive chef and chef de cuisine roles at multiple restaurants, including the Tampa Convention Center. Managed kitchen staffs up to 15. Responsibilities included hiring, menu development, food costing, inventory control, and scheduling.

## Education

Hillsborough Community College, 2003–2005 — Web design and business management curriculum

---

## LinkedIn About

I build data pipelines and interactive maps from public records to make local government more transparent — election results, city council proceedings, property data, and campaign finance for Hillsborough County, Florida.

My current project is Tampa Monitor (tampamonitor.com), where I scrape, process, and publish civic data as open-source tools. That includes automated meeting transparency for Tampa City Council (agendas, transcripts synced to YouTube video, full-text search), precinct-level election maps, a Datasette instance tracking development applications, and an iCal feed for city events that the City of Tampa's own tech staff contributed back to.

I use GitHub Copilot and Claude daily — not just for code generation, but for architectural planning and building custom AI agents and instruction files that guide LLM behavior in domain-specific workflows. I can help organizations adopt these tools practically, not theoretically.

Before civic data, I spent 15+ years in WordPress development — managing 300+ sites on Multisite, building custom plugins against third-party APIs, and optimizing high-traffic e-commerce sites. Before that, I was an executive chef. The throughline is systems thinking, whether it's a kitchen or a data pipeline.

I'm an open web advocate, IndieWeb contributor, and was invited to speak at GitHub Connect 2019 about disaster response mapping work I did with Code for America, FEMA, and the Red Cross after Hurricane Irma.

Based in Tampa. Open to civic tech, nonprofit, and government consulting.
