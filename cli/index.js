#!/usr/bin/env node

import fs from "fs";
import path from "path";
import minimist from "minimist";
import degit from "degit";
import kleur from "kleur";

// -----------------------------
// Parse CLI args
// -----------------------------
const args = minimist(process.argv.slice(2));

const folderName = args._[0];
let templateArg = args.template || args.t;

// Support flags like --csr-tanstack
if (!templateArg) {
  if (args["csr-tanstack"]) {
    templateArg = "csr-tanstack-basic";
  }
}

// -----------------------------
// Validations
// -----------------------------
if (!folderName) {
  console.log(kleur.red("❌ Please provide a project name"));
  process.exit(1);
}

// Template map
const TEMPLATE_MAP = {
  "csr-tanstack-basic":
    "samiranghosh04/coral/templates/csr-tanstack-basic"
};

const templateRepo = TEMPLATE_MAP[templateArg];

if (!templateRepo) {
  console.log(kleur.red("❌ Invalid or missing template"));
  console.log(kleur.yellow("Available templates:"));
  Object.keys(TEMPLATE_MAP).forEach((t) =>
    console.log("  -", t)
  );
  process.exit(1);
}

// -----------------------------
// Resolve target directory
// -----------------------------
const targetDir =
  folderName === "."
    ? process.cwd()
    : path.join(process.cwd(), folderName);

// Create folder if needed
if (folderName !== ".") {
  if (fs.existsSync(targetDir)) {
    console.log(kleur.red("❌ Folder already exists"));
    process.exit(1);
  }
  fs.mkdirSync(targetDir, { recursive: true });
}

// -----------------------------
// Download template
// -----------------------------
async function run() {
  console.log(kleur.blue(`📦 Creating project in ${targetDir}`));
  console.log(kleur.gray(`Using template: ${templateArg}`));

  const emitter = degit(templateRepo, {
    cache: false,
    force: true,
    verbose: false
  });

  try {
    await emitter.clone(targetDir);
  } catch (err) {
    console.error(kleur.red("❌ Failed to download template"));
    console.error(err);
    process.exit(1);
  }

  // -----------------------------
  // Update package.json name
  // -----------------------------
  const pkgPath = path.join(targetDir, "package.json");

  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

      pkg.name =
        folderName === "."
          ? path.basename(process.cwd())
          : folderName;

      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    } catch {
      console.log(kleur.yellow("⚠️ Could not update package.json"));
    }
  }

  // -----------------------------
  // Success output
  // -----------------------------
  console.log(kleur.green("\n✅ Project created successfully!\n"));

  console.log("Next steps:");
  if (folderName !== ".") {
    console.log(`  cd ${folderName}`);
  }
  console.log("  npm install");
  console.log("  npm run dev\n");
}

run();