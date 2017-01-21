## A website template for grantmakers  

We built this free website template to help foundations and donor-advised-funds improve their online presence.  

If you have a site that was built over three years ago you're in the right place. The template is fully responsive and can be hosted (and maintained) for no cost.  

#### Screenshots  

![Screenshot](https://raw.githubusercontent.com/smartergiving/foundation-website-template/gh-pages/assets/images/readme-screenshots/responsive.png "Screenshot")  

The project has two primary goals:

1. **Simple**  

  - This template is powerful but can also be used by funders of any size. If you don't have much information to share (yet!), that's ok. The template can grow as your public information grows.  

  - Of interest to family foundations, we chose a technology stack that is robust enough to handle a major foundation's traffic, yet is well within reach of the young hacker in your family.  

1. **Open**  
  - This template is 100% open source.   

  - For smaller foundations, it's meant to be 100% maintenance free.  
   
#### Purpose  

Our mission at [SmarterGiving](https://smartergiving.org) is to advance the openness of the philanthropic world through accessible technology.  

We want to make it as simple as possible to share whatever grantmaking information you're comfortable sharing.  

#### Future  

We're actively working on integrating historically popular grant specs like Foundation Center's [hGrant](http://foundationcenter.org/grantmakers/hgrant.html) while pushing those standards to incorporate the realities of the modern funder.  

## Getting Started  

1. **Create a new repo**: Create a new repo within your [Github organization](https://github.com/nonprofit) account by clicking on the green "New Repository" button. This will be found on your main profile page, e.g. `https://github.com/your-org-name`.  

2. **Name the repo**: On the second screen, choose a simple name for the repo. For example, if the foundation name is The Smith Family Charitable Trust, just name the repo `smith`.  

3. **Select settings**: Choose public or private. If you're unfamiliar with any of the settings we recommend leaving them as is.  

4. **Import the main template**: On the next screen, scroll to the bottom of the page and locate the gray "Import code" button. Enter `https://github.com/smartergiving/foundation-website-template.git` into the box and click the green "Begin import" button.  

5. **View the site**: Your new site is now live at `https://your-org-name.github.io/repo-name`, where `repo-name` is the repo name you chose in Step 2.

*Note: The template will not be styled properly until you edit the `_config.yml` file. See Step 1 in the Usage instructions below.*

## Usage  

For those familiar with Jekyll and Github Pages, the template is fully compatible with the `github-pages` gem (i.e. does not use any plugins).  

1. **Config File**: Enter your foundation's information in the appropriate fields in `_config.yml`. At the very least, be sure to change the `baseurl` field from `foundation-website-template` to the name of your repo.  

2. **Navigation**: If you need to change the left handed navigation links, you'll need to adjust the HTML found in `_includes/nav.html`. Create new pages in the `pages/` directory to match any new links you create. Be sure to use lowercase and hyphens in the filenames if needed (e.g. use `our-story.md`).

3. **Editing Pages**: All website pages are found under the `/pages` directory *except* the main home page, which can be edited via the `index.html` file.

4. **Featured Projects**: The featured project cards are found in the `_featured-cards/` directory. Images are found in `assets/images/featured-cards/`. To change an image, simply replace the existing files (e.g. upload a new `card3.jpg` for the lower left image, but do not change the filename from `card3.jpg`).

5. **Grants Database**: See full instructions below.  

6. **Colors**: Change the primary accent color by adjusting `/assets/css/_sass/skel/_vars.scss` [(link)](https://github.com/smartergiving/foundation-website-template/blob/gh-pages/assets/css/_sass/skel/_vars.scss#L30) 

## Grants Database  

The template contains a built-in grants database inspired by those found on large foundation websites. Just upload your annual lists of grants and the template will handle the rest.

#### Option A: Default CSV *(Recommended)*

1. **Upload Location:** [`_data/grants/`](https://github.com/smartergiving/foundation-website-template/tree/gh-pages/_data/grants)

1. **File Naming:** Each file must represent a single year and be named for that year (e.g. `2016.csv`)

1. **Format:** CSV format using [this template](https://github.com/smartergiving/foundation-website-template/blob/gh-pages/_data/templates/csv_template_for_grants_database.csv)

#### Option B: Form 990PF

1. Find your XML-based Form 990PF [here](http://data.philly.com/datasets/irs990/)

1. Convert to JSON format [here](http://codebeautify.org/xmltojson)

1. Name the file for that tax year (e.g. `2014.json`)

1. Upload to [`_data/grants/`](https://github.com/smartergiving/foundation-website-template/tree/gh-pages/_data/grants)

#### Option C: Custom CSV

1. Use your existing grants list in CSV format. We recommend validating your CSV file using [this free tool](http://csvlint.io/). The first row should contain the header names.

1. **Change Setting:** Change the default `db_table_source_type` setting from `template` to `custom`. The setting can be found in  [`pages/grantees.html`](https://github.com/smartergiving/foundation-website-template/blob/gh-pages/pages/grantees.html#L5).

1. **Upload Location:** [`_data/grants/`](https://github.com/smartergiving/foundation-website-template/tree/gh-pages/_data/grants)

1. **File Naming:** Each file must represent a single year and be named for that year (e.g. `2016.csv`)

1. **Note:** The search function is not yet compatible with custom CSVs

## License & Credits  

#### Credits  

Design  
  - Strata template by [HTML5 UP](https://html5up.net)
  - Author [@n33co](https://twitter.com/n33co)
  - Free for personal and commercial use under the [CCA 3.0 license](http://html5up.net/license)
  
Grants Database & Jekyll Template  
  - Author [SmarterGiving](https://smartergiving.org/)
  - Free for personal and commercial use under the [Common Public Application License (CPAL)](https://opensource.org/licenses/cpal_1.0)
  - Attribution link required

Assets  
  - Demo Images: [Unsplash](http://unsplash.com)  
  - Icons: [Font Awesome](http://fortawesome.github.com/Font-Awesome)  

Other  
  - [jQuery](http://jquery.com)
  - html5shiv.js (@afarkas @jdalton @jon_neal @rem)
  - [CSS3 Pie](http://css3pie.com)
  - Background-size polyfill [@louisremi](github.com/louisremi)
  - [Respond.js](http://j.mp/respondjs)
  - [Skel](skel.io)  

#### License

&copy; [SmarterGiving](https://smartergiving.org/) under [Common Public Attribution License 1.0 (CPAL)](https://opensource.org/licenses/cpal_1.0):

The "human-readable" version of CPAL would read like this:  

  - This software is open source and can be freely used, modified, and distributed.  
  
  - This software can be used for commercial purposes.  
  
  - Attribution to the authorship of this software on the site front-end in the form of hyperlink is required.
  
  - Attribution to the authorship of this software on the site front-end in the form of hyperlink can be waived with permission of the original author.  
  
