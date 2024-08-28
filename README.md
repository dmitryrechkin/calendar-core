# Calendar Core

**Calendar Core is a TypeScript library that provides essential classes, interfaces, and tools for managing and processing calendar-related events and availability within domain-driven and AI applications.** This package offers a comprehensive set of abstractions to streamline the creation, retrieval, and management of calendar events and availability checks.

## Installation

Install the package using pnpm:

```bash
pnpm add @dmitryrechkin/calendar-core
```

## Features

- **Unified Calendar Interfaces**: Define consistent interfaces for handling calendar-related actions, such as creating, retrieving, and deleting events, and checking availability.
- **AI Integration Ready**: Tools designed to integrate seamlessly into AI workflows, with structured validation using Zod to ensure accurate data handling.
- **Extensible and Reusable**: Easily extend the provided base classes and interfaces to cater to specific calendar management needs.

## Rationale

The `@dmitryrechkin/calendar-core` package is designed to provide a consistent and extensible foundation for managing calendar workflows in TypeScript applications. By using well-defined interfaces and tools, developers can efficiently integrate calendar capabilities into their domain-driven designs and AI-driven processes. The library also leverages Zod for schema validation, ensuring that the data being processed meets the expected structure.

## Installation & Setup

Install the package using pnpm:

```bash
pnpm add @dmitryrechkin/calendar-core
```

Ensure that your project is set up to handle TypeScript and supports ES modules, as this library is built with modern JavaScript standards.

## Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests. Before submitting, please ensure your code passes all linting and unit tests.

You can run unit tests using:

```bash
pnpm test
```