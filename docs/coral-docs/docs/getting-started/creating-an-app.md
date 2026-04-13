Here’s a **clean rewrite** of your doc with:

* ✅ CLI as the **primary (first-class) method**
* ✅ Manual method updated to point to **`templates/` instead of `core/`**
* ✅ Structure kept professional and consistent

---

# Creating an App

Coral is currently in an early experimental stage, and a CLI tool is now available to scaffold new applications quickly. Developers can either use the CLI for a streamlined setup or manually create a project if they prefer more control.

---

## Option 1: Use the CLI (Recommended)

The fastest way to get started is by using the Coral CLI, which scaffolds a new project from predefined templates.

Run the following command:

```bash
npx create-coral-app my-app --template csr-tanstack
```

### What this does

* Creates a new project directory (if not using `.`)
* Copies the selected template from the Coral repository
* Sets up a working Coral application structure

---

## Option 2: Manual Setup

If you prefer to set things up manually, you can still create a Coral application by copying a template from the repository.

### Step 1: Copy a Template

Coral’s repository contains starter templates under the `templates/` directory.

To begin:

* Clone the Coral repository
* Navigate to the `templates/` folder
* Copy a template (e.g. `csr-tanstack-basic`) into a new project directory

These templates include all required setup for a working Coral application, including routing, server functions, and configuration.

---

### Step 2: Install Dependencies

Once the template has been copied, navigate to your project directory and install dependencies:

```bash
npm install
```

This will install Coral's dependencies, which may include:

* `react` and `react-dom`
* `@tanstack/router`
* `vinxi`
* `@vinxi/server-functions`

You can inspect the `package.json` to customize versions or add additional dependencies.

---

### Step 3: Start the Development Server

Run the development server using:

```bash
npm run dev
```

If that does not work out try :

```bash
npx vinxi dev
```

---

### What Happens During Development

#### 1. Dev Server Initialization

Vinxi starts both client and server environments with:

* Fullstack rendering
* File-based routing
* Hot module replacement
* API handling

---

#### 2. Generated Artifacts

During development, Coral generates internal files:

##### `.tanstack/`

A temporary directory containing routing metadata and build artifacts. This should be ignored in version control.

##### `routeTree.gen.ts`

A generated file representing your route structure. It enables:

* Type-safe routing
* Optimized builds

> Do not manually edit these files—they are automatically managed.

---

### Step 4: Verify the Application

Open your browser at:

```text
http://localhost:3000/
```

(Port may vary depending on configuration.)

You should see a working Coral application with routing and starter components.

---

## Future Improvements

The Coral CLI is currently in an early alpha stage and will continue to evolve. Planned improvements include:

* Expanded template support
* Interactive prompts
* Configurable project scaffolding
* Built-in testing and routing presets
* Automatic generation of project structure and utilities

---

## Recommendation

For most users, the CLI is the preferred way to get started due to its simplicity and speed. Manual setup remains available for advanced use cases or deeper customization.