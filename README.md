# Copy Relative Path with Line Number

A simple Visual Studio Code extension that allows you to copy the relative path of the current file along with the line number to the clipboard. It also replaces any '@' characters in the path with spaces.

## Features

- Copy the relative path of the current file with the line number to the clipboard.
- Replace '@' characters in the path with spaces.
- Works in multi-root workspaces.

## Usage

1. Open a file in Visual Studio Code.
2. Position your cursor on the line you want to copy the line number from.
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the command palette.
4. Search for and select "Copy Relative Path with Line Number".
5. The relative path with the line number will be copied to your clipboard, ready to be pasted anywhere.

Example output: `src/tests/MyProject.UnitTests/SomeFeatureTests.cs:42`

## Installation

You can install this extension from the Visual Studio Code Marketplace, or by manually installing the `.vsix` file.

## Contributing

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements.

## License

MIT