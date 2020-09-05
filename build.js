const fs = require('fs')

const styles = fs.readFileSync('./styles/styles.css', { encoding: 'utf8' })

const release = `// The entrance of the extension, will run when \`document\` is ready

// The anonymous function: \`( (params) => {} )(params)\`
((darkModeIsOn) => {
    if (darkModeIsOn) {
        // The local variables, only available in this anonymous function, so that it won't affect the operation of other scripts.
        var body = document.body;
        var style = document.createElement('style');
        // Set \`style.innerHTML\` to the compressed [CSS](../styles/styles.css).
        style.innerHTML = \`${styles}\`;
        // Append to <body>
        body.appendChild(style);

        // If at Explore page
        if (window.location.href.match('https://github.com/explore*') || window.location.href.match('https://github.com/topics*')) {
            // Select the white background and replace it
            document.querySelector(".border-bottom.border-gray-light").setAttribute("style", "");
            // Set \`explorePageTopicsGradientMaskSelector\` to the selector of the recommandation list
            var explorePageTopicsGradientMaskSelector = '[style="background: linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0));"]';
            // Edit its mask then
            for (
                let ele = document.querySelector(explorePageTopicsGradientMaskSelector);
                document.querySelector(explorePageTopicsGradientMaskSelector);
                ele = document.querySelector(explorePageTopicsGradientMaskSelector)
            ) {
                ele.style.background = "linear-gradient(to top, rgb(31 35 39), rgb(31 35 39 / 0))"
            }
            // If on topic page
            if (window.location.href.match('https://github.com/topics*')) {
                document.querySelector('[style="background-color: #fcfdfd;"]').style.backgroundColor = '#1F2327';
            }
        }

        console.log('GitHub Dark Mode initialized')
    } else {
        console.log("GitHub Dark Mode is off because your browser isn't in dark mode")
    }
})((() => {
    if (window.matchMedia('(prefers-color-scheme)').media == 'not all') {
        console.log("GitHub Dark Mode didn't launch because your browser doesn't support dark mode");
        return false
    } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
})());`

fs.writeFileSync('./js/index.js', release, { encoding: 'utf8' })
