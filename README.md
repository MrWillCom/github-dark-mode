# GitHub Dark Mode

The Dark Mode for GitHub.com

**Before:**

![The original light theme](./screenshots/screenshot-0.png)

**After:**

![When dark mode is on](./screenshots/screenshot-1.png)

## Installation

### From Browser Extension Store

1. Install this extension from:
    - [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/mkmlkegjpmlpmdddbibkainphcilpagm)
    - [Firefox Browser Add-ons](https://addons.mozilla.org/addon/github-dark-mode/)
2. Turn on the installed extension "GitHub Dark Mode".
3. Turn on the system control dark mode.
4. Refresh the open GitHub.com tabs.

### Form Source Code

To install the extension, you need to keep "Developer mode" of your browser is on then start installation.

1. Clone this repository.
2. Run `npm run dev` or `node build.js` in the repository.
3. Go to the browser's extension settings.
4. Click "Load Unpacked" button.
5. Select the cloned repository and confirm.
6. Turn on the added extension "GitHub Dark Mode".
7. Turn on the system control dark mode.
8. Refresh the open GitHub.com tabs.

## Contributing

If you want to develop this extension, you need to add the style sheets at the end of [styles.css](./styles/styles.css).

styles.css looks like this:

```css
@media (prefers-color-scheme: dark) {
    ... {
        ...
    }
    ... {
        ...
    }
    /* Your new style sheets here. */
}
```

If you found something wrong when you are using this extension, just [submit an issue](https://github.com/MrWillCom/github-dark-mode/issues/new).

### Scripts

Here is some scripts to help you develop this extension, they supports PowerShell and Bash as well so that you can use them on all platforms.

- [`build`](./scripts/build.ps1) - Pack extension to a ZIP file
- [`cbuild`](./scripts/cbuild.ps1) - **Force** pack extension to a ZIP file
- [`pack-souce-code`](./scripts/pack-souce-code.ps1) - pack all the source code to a ZIP file
- [`cpack-souce-code`](./scripts/cpack-souce-code.ps1) - **Force** pack all the source code to a ZIP file
- [`unzip-release`](./scripts/unzip-release.ps1) - unpack the packed release.zip

### Third Party Versions

- [aeilot/github-dark-mode-safari](https://github.com/aeilot/github-dark-mode-safari)
