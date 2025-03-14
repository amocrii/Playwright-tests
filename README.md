# **🚀 TypeScript + Playwright + Cucumber Test Automation**

## 📌 Project Overview

This project is a test automation framework built using:

Playwright: For browser automation.

Cucumber: For behavior-driven development (BDD) with Gherkin syntax.

TypeScript: For type safety and better maintainability.

It allows running tests in multiple browsers (Chromium, Firefox, WebKit) and supports dynamic configurations via .env.

## 📦 Installation

Ensure you have Node.js (v20 or later) installed. Then, run:  

```ts
npm install
```

This installs all dependencies, including Playwright and Cucumber.

To install Playwright browsers, run:  

```ts
npx playwright install
```

## ⚙️ Configuration

Environment Variables (.env)

You can define test settings in a .env file:  

```ts
BROWSER=chromium  # Options: chromium, firefox, webkit  
HEADLESS=true      # Run tests in headless mode  
BASE_URL=https://example.com  # Replace with your URL
```

## ▶️ Running Tests

### 1. Run All Tests

```ts
npx cucumber-js
```

### 2. Run a Specific Feature File

```ts
npx cucumber-js features/filters.feature
```


## 📸 Capture Screenshots on Failure

Screenshots are saved in the screenshots/ folder.

## 📊 Reports

The test execution report is saved in test-results/ folder.