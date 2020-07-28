# GitHub Dark Mode

The Dark Mode for GitHub.com

<html>
<body>
  <style>
    @keyframes aniBefore {
      0% { opacity: 1 }
      100% { opacity: 0 }
    }
    .before, .after {
        position: relative;
        top: 0;
    }
    .before {
      transform: translateY(-100%);
      animation: aniBefore 2.5s;
      animation-fill-mode: forwards;
    }
  </style>
  <img src="./screenshots/screenshot-1.png" class="after">
  <img src="./screenshots/screenshot-0.png" class="before">
</body>
</html>

## Installation

To install the extenstion, you need to keep "Developer mode" of your browser is on then start installation.

1. Clone this repository.
2. Go to the browser's extension settings.
3. Click "Load Unpacked" button.
4. Select the cloned repository and confirm.
5. Turn on the added extension "GitHub Dark Mode".
6. Refresh the opened GitHub.com tabs.
