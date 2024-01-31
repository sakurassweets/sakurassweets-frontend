# Sakuras Sweets

Welcome to the Sakuras Sweets! Below are instructions on setting up and running the project locally

## Technology stack used
### Build with:
<img src="https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white&style=ShieldStyle" /> <img src="https://img.shields.io/badge/React-4FACDF?logo=react&logoColor=white&style=ShieldStyle" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white&style=ShieldStyle" /> <img src="https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white&style=ShieldStyle" /> <img src="https://img.shields.io/badge/CSS-2971A3?logo=css3&logoColor=ColorName&style=ShieldStyle" /> <img src="https://img.shields.io/badge/Node.js-38883D?logo=node.js&logoColor=white&style=ShieldStyle" />
<img src="https://img.shields.io/badge/WebPack-3178c6?logo=webpack&logoColor=ColorName&style=ShieldStyle" />
### Version Control and Development Tools used:
<img src="https://img.shields.io/badge/Git-DC4936?logo=git&logoColor=white&style=ShieldStyle" /> <img src="https://img.shields.io/badge/GitHub-1A1C1E?logo=github&logoColor=white&style=ShieldStyle" /> <img src="https://img.shields.io/badge/Visual Studio Code-0C72C5?logo=visual studio code&logoColor=white&style=ShieldStyle" />

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

### Installation
1. Clone the repository: `git clone https://github.com/sakurassweets/sakurassweets-frontend.gitt`
2. Navigate to the project directory: `cd sakura-project`
3. Install dependencies: `npm install`

## Available Scripts

### Development
Run the project in development mode.
```
$ npm run dev
```
- `npm run build ` - build the project for production.
- `npm run lint` - run ESLint to check and fix linting issues.
- `npm run preview` - preview the production build locally.
- `npm run serve` - serve the production build locally.
- `npm run format:fix` - fix formatting issues using Prettier.

## Code Styles

### React Components Declaration


```tsx

interface MyExampleProps {
  children: React.ReactNode;
  title: string;
}

export const MyExample: React.FC<MyExampleProps> = ({ children, title }) => {
  return (
    <div className={classes.container}>
      <h4>{title}</h4>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

```

## Git Workflow

### Git Branch

The branches should look like this template: 
```
number-task-short-description
```

Example:
```
SAK-5-refactor-layout
```


### Git Commit

The commit should look like this template:
```
type-of-commit: Short description
- Change
- Change
- ..
```

Types of commit: 

- fix: Fix of something.
- feat: New feature.
- refactor: Fix of something + New feature or Refactoring, Сode improvement, etc.
- build: Related to the project build (Docker, nginx, config, etc).
- docs: Update documentation or comments in the code.

Example:
```
refactor: Refactored layout
- Rename and refactored header
- Changed and refactored footer
```

### Git Pull Request

The name of pull request should look like this template: 
```
number-task short-description
```

Example:
```
SAK-5 Refactored Layout
```

We have a template on Github to describe the pull request, it looks like this: 
```
Implement:

-  Some change:
    - Some subchange
-  ..
-  ..


This is a:

- [x] 🍕 Feature
- [x] 🐛 Bug Fix
- [x] 📝 Documentation Update
- [x] 🎨 Style
- [x] 🧑‍💻 Code Refactor
- [x] 🔥 Performance Improvements
- [x] ✅ Test
- [x] 🤖 Build
- [x] Other

```

You need to select the appropriate items and remove unnecessary ones.