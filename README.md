# Node.js Project

A Node.js project with automated code quality checks and testing.

## Features

- Automated code quality checks using GitHub Actions
- ESLint for code linting
- Automated testing
- CodeQL security analysis
- Node.js 18.x support

## Prerequisites

- Node.js 18.x
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm start
```

## Development

### Code Quality

The project uses several tools to maintain code quality:

- **ESLint**: For code linting and style enforcement
- **Tests**: Automated test suite
- **CodeQL**: Security analysis

These checks run automatically on:
- Every push to the `main` branch
- Every pull request targeting the `main` branch

### Available Scripts

- `npm run lint`: Run ESLint
- `npm test`: Run tests
- `npm start`: Start the development server

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run the test suite and linting
4. Submit a pull request

## License

[Add your license information here] 
