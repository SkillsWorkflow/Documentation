To update the algolia search:
1. Create a folder (if it does not exist) named algolia-crawler.
2. Add 2 files - .env and config.json
   1. .env - sets the APPLICATION_ID and API_KEY. Get it from https://www.algolia.com/account/api-keys/
   2. .config
   3. {
        "index_name": "sw_documentation",
        "start_urls": [
            "https://documentation.skillsworkflow.com/"
        ],
        "selectors": {
            "lvl0": {
                "selector": ".theme-doc-sidebar-menu .menu__link--active",
                "global": true,
                "default_value": "Documentação"
            },
            "lvl1": "main h1",
            "lvl2": "main h2",
            "lvl3": "main h3",
            "lvl4": "main h4",
            "lvl5": "main h5",
            "text": "main p, main li, main table td"
        },
        "js_render": true,
        "rateLimit": 8
    }
3. run the following comand: docker run -it --env-file=.env -e "CONFIG=$(cat config.json | jq -r tostring)" algolia/docsearch-scraper
