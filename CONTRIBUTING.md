# Contributing to Coral

Thank you for your interest in contributing to Coral!

Coral is an experimental, modern meta-framework designed to make fullstack development as smooth as possible. We're working towards a production-ready OSS release candidate, and your contributions are invaluable in making that happen.

## Current Status

**Important**: Coral is currently in an experimental phase and is expected to have breaking changes frequently. We're actively iterating on the API and architecture as we work towards stabilization.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [How to Contribute](#how-to-contribute)
- [Coding Guidelines](#coding-guidelines)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)
- [Community](#community)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git

### Development Setup

1. **Fork and clone the repository**

   ```bash
   git clone https://github.com/your-username/coral.git
   cd coral
   ```

2. **Navigate to the core folder and install dependencies**

   ```bash
   cd core
   npm install
   ```

3. **Start the development server**

   ```bash
   npx vinxi dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the development server running.

## Project Structure

```
coral/
├── core/                    # Main framework code
│   ├── index.html          # SPA entry point
│   ├── app.config.ts       # Vinxi app configuration
│   ├── public/             # Static content (images, etc.)
│   ├── src/
│   │   ├── index.tsx       # Client entry point (React + TanStack Router)
│   │   ├── api.ts          # HTTP handler
│   │   ├── getPosts.ts     # Server function example
│   │   ├── routes/         # File-based routes powered by TanStack Router
│   │   │   ├── __root.tsx
│   │   │   ├── index.tsx
│   │   │   ├── posts.tsx
│   │   │   └── about.tsx
│   │   └── components/
│   │       ├── Counter.tsx
│   │       └── PostList.tsx
│   ├── .tanstack/          # Generated TanStack Router files
│   ├── routeTree.gen.ts    # Auto-generated route tree
│   └── package.json
├── docs/                   # Documentation
├── examples/               # Example projects
├── cli/                    # CLI
└── README.md
```

## How to Contribute

### Types of Contributions We Welcome

1. **Bug Reports**: Help us identify and fix issues
2. **Feature Requests**: Suggest new features or improvements  
3. **Code Contributions**: Bug fixes, new features, performance improvements
4. **Documentation**: Improve docs, add examples, write tutorials
5. **Testing**: Add tests, improve test coverage
6. **Community**: Help answer questions, review PRs

### Areas of Focus

Since we're working towards a production-ready release, we're particularly interested in contributions related to:

- **Stability**: Bug fixes and reliability improvements
- **Developer Experience**: Better error messages, improved tooling
- **Performance**: Optimizations for build time and runtime
- **Documentation**: Clear guides and examples
- **Testing**: Comprehensive test coverage
- **TypeScript**: Better type safety and inference

## Coding Guidelines

### Code Style

- Use **TypeScript** for all new code
- Follow the existing code formatting (we recommend using Prettier)
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused

### Framework Principles

Coral is built around these core principles:

- **Zero-config DX**: Things should work out of the box
- **Type Safety**: Leverage TypeScript for better DX
- **Performance**: Fast builds and runtime performance
- **Simplicity**: Avoid over-engineering, keep APIs clean
- **Compatibility**: Work well with the existing ecosystem

### File Naming Conventions

- Use **PascalCase** for React components (`Counter.tsx`)
- Use **camelCase** for utilities and functions (`getPosts.ts`)
- Use **kebab-case** for routes when needed
- Use descriptive names that explain the purpose

## Testing

Currently, testing infrastructure is being developed. As we add testing capabilities:

- Write tests for new features
- Ensure existing tests pass
- Add integration tests for critical paths
- Test across different environments when possible

```bash
# Once testing is set up
npm test
```

## Submitting Changes

### Pull Request Process

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

2. **Make your changes**
   - Follow the coding guidelines
   - Add/update tests if applicable
   - Update documentation if needed

3. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   # or
   git commit -m "fix: resolve issue with..."
   ```

4. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Use a clear, descriptive title
   - Describe what your changes do and why
   - Reference any related issues
   - Include screenshots for UI changes

### Commit Message Format

We follow conventional commits:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

### PR Guidelines

- Keep PRs focused and atomic
- Include a clear description of changes
- Add screenshots for visual changes
- Be responsive to feedback
- Ensure CI passes (once set up)

## Reporting Issues

### Before Submitting an Issue

1. Check if the issue already exists
2. Make sure you're using the latest version
3. Try to reproduce the issue with minimal steps

### Issue Template

When reporting bugs, please include:

- **Environment**: OS, Node.js version, npm/yarn version
- **Coral Version**: Which version you're using
- **Steps to Reproduce**: Clear, minimal steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Additional Context**: Screenshots, error messages, etc.

## Community

### Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For questions and community chat (coming soon)

### Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation

## Acknowledgments

Coral is inspired by many amazing projects and developers. We're grateful to the entire open-source community that makes projects like this possible.

Special thanks to the teams behind Vinxi, React, TanStack Router, Vite, and all the other tools that make Coral possible.

---

## License

By contributing to Coral, you agree that your contributions will be licensed under the same license as the project (MIT).

---

**Happy Contributing!**

Remember, since Coral is experimental, don't be afraid to suggest bold ideas or challenge existing patterns. Your fresh perspective could be exactly what we need to make Coral amazing!