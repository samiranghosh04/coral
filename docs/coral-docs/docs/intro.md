---
sidebar_position: 1
---

# Introduction

**Coral** is a modern experimental fullstack meta-framework for React applications, currently in early experimental development. Built on top of well-established open source technologies like React, TanStack Router, and Vinxi, Coral aims to provide a clean, flexible, and extensible foundation for building production-grade applications, without locking developers into any specific hosting provider, platform, or deployment model.

Unlike many frameworks that prioritize convention over control or impose rigid architectural patterns, Coral emphasizes clarity, minimalism, and developer autonomy. It is designed to be lightweight, transparent, and progressively adaptable, suitable for both rapid prototyping and long-term evolution.

## Motivation

The modern JavaScript and TypeScript ecosystem offers a wide range of tools for building fullstack applications. However, developers often face a choice between:

- Frameworks that are heavily opinionated or tied to commercial platforms
- Boilerplates that offer flexibility but little structure or scalability
- Solutions that require deep internal knowledge to customize or extend

Coral was created to address the following needs:

- A React-first fullstack framework that remains decoupled from any vendor infrastructure
- A system that builds on proven tools without reinventing core primitives
- An approach that values transparency and avoids unnecessary abstraction
- A framework that can scale over time, without becoming increasingly opaque or inflexible

## Coral: Current Feature Set (Pre-Alpha)

### Overview

Coral is currently in pre-alpha and provides a focused, minimal set of core features aimed at enabling fullstack development without overwhelming complexity. These features form the foundation for future iterations and emphasize clarity, extensibility, and developer control.

### Feature Highlights

#### Static Asset Support

Coral includes a conventional `public/` directory that allows you to serve static files without additional setup. This makes it easy to deliver images, fonts, and other assets as part of your project.

#### Server Functions and API Routes

You can define server-side logic in a centralized API handler (`src/api.ts`). Basic route matching and HTTP method handling are already built in, making it easy to get started with API endpoints or custom backend behavior.

#### File-Based Client Routing

Coral uses [TanStack Router](https://tanstack.com/router) for client-side routing. Routing follows filesystem conventions and supports scalable, nested routes with minimal configuration.

#### React-Only Rendering Pipeline

All rendering in Coral uses standard React patterns. There are no custom JSX transforms or proprietary rendering layers. If you know React, you know how rendering works in Coral.

---

## Philosophy and Design Principles

Coral is guided by a few clear principles that shape how the framework works and evolves.

### 1. Freedom by Design

Coral avoids prescribing a specific deployment model, rendering strategy, or hosting provider. You can deploy your application to any environment—whether Node.js, edge functions, or serverless runtimes. The framework is built to be infrastructure-agnostic, giving you full control over how and where you ship your code.

### 2. Familiar Foundations

Rather than inventing new abstractions, Coral integrates widely adopted libraries that already solve important problems well. React, TanStack Router, and Vinxi are used in a modular and coherent way. This means you can rely on existing community knowledge and tooling without needing to learn a new ecosystem.

### 3. Simplicity Over Convention

Coral provides useful defaults and consistent patterns, but avoids hardcoded conventions that are difficult to work around. The goal is to let developers inspect and understand what the framework is doing, without requiring deep knowledge of internal mechanics.

### 4. Practical Evolution

Coral is still in active development and follows an iterative, feedback-driven roadmap. The focus is not on checking every feature box early, but on building a framework that is correct, composable, and easy to maintain. Future features will be added thoughtfully, prioritizing developer experience and long-term clarity.

## Project Status

Coral is currently in a pre-alpha stage. The framework is functional and usable for experimentation and internal tools, but it is not yet recommended for production applications. Breaking changes may occur frequently, and several major features are under active development.

The project as of now is maintained by a single developer and is evolving rapidly. Feedback, experimentation, and community involvement are welcomed as Coral matures toward a more stable release.

## Roadmap (Planned Features)

Planned improvements and upcoming capabilities which are under consideration include:

- Server-side rendering (SSR) support
- True Static site generation (SSG)
- Environment variable support
- File-based API route generation
- Adapter architecture for api protocols (under consideration and will be looked into and added if devs need it)
- Testing integration (unit (e2e is under consideration for later)) with automatic test file generation
- Dedicated backend template for advanced use cases (e.g., Express, Hono) (under consideration)
- Documentation site generated using Coral itself, once SSG is available (I'm using Docusaurus for now)
- An ISR layer is under consideration for later.

These features are not yet complete, and timelines may vary depending on the development cycle and implementation complexity. Some of the aforementioned features may be reconsidered based on what the community needs.



## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
