# Low-Level Design Practice

A collection of TypeScript exercises for learning low-level design principles and common design patterns.

## Projects

| Project | Description |
| --- | --- |
| [Delivery App Design](./Delivery-App-Design/) | Models restaurants, carts, orders, users, and strategy-based payments. |
| [Document Editor](./DocumentEditor/) | Models document elements, rendering, and interchangeable persistence implementations. |
| [Factory Pattern](./factory-pattern/) | Demonstrates centralized object creation using the Factory pattern. |
| [Strategy Pattern](./strategy-pattern/) | Demonstrates interchangeable payment algorithms selected at runtime. |

## Getting Started

Each project manages its own TypeScript configuration and dependencies. Open a project directory and install its packages:

```bash
cd Delivery-App-Design
npm install
```

Projects with a start script can then be run with:

```bash
npm start
```

For projects without a start script, compile and run their entry point directly:

```bash
npx tsc
node dist/index.js
```

The Strategy Pattern entry point is `dist/payment-processor.js` instead of `dist/index.js`.