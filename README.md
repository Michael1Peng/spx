# SPX - Scheme Proxy

A simple tool that allows proxying of URLs with custom schemes. Useful for cases when you don't have the ability to use the original URL because of limitations (e.g., URLs on Notion).

## Features

- Create proxy URLs for custom scheme URLs
- Auto-redirect mode for immediate redirection
- Manual mode for user-initiated redirection
- Copy generated URLs to clipboard

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/spx-new.git
cd spx-new
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter a custom scheme URL in the input field
2. Select the activation type:
   - **Auto**: Automatically redirects to the URL when opened
   - **Manual**: Shows a button for the user to click to navigate to the URL
3. Click "Copy" to copy the generated URL to your clipboard
4. Share the URL with others

## Project Structure

The project follows a clean code architecture with the following structure:

```
spx-new/
├── app/                  # Next.js app directory
│   ├── 0/                # Manual redirect pages
│   ├── 1/                # Auto redirect pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── ui/               # UI components
│   └── Footer.tsx        # Footer component
├── utils/                # Utility functions
│   ├── clipboard.ts      # Clipboard utilities
│   ├── constants.ts      # Application constants
│   ├── redirect.ts       # Redirection utilities
│   └── url.ts            # URL utilities
├── public/               # Static assets
└── ...                   # Configuration files
```

## Clean Code Principles

This project follows clean code principles:

- **Single Responsibility**: Each component and function has a single responsibility
- **DRY (Don't Repeat Yourself)**: Common functionality is extracted into utility functions
- **Meaningful Names**: Variables, functions, and components have descriptive names
- **Small Functions**: Functions are kept small and focused
- **Consistent Formatting**: Code follows consistent formatting and style
- **Comments**: Comments explain "why" not "what"
- **Error Handling**: Proper error handling for clipboard operations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework used
- [Vercel](https://vercel.com/) - Deployment platform
