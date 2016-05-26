## A website template for grantmakers  

We built this free website template to help foundations and donor-advised-funds improve their online presence.  

If you have a site that was built over three years ago you're in the right place. The template is fully responsive and can be hosted (and maintained) for no cost.  

#### Screenshots  

![Screenshot](https://raw.githubusercontent.com/smartergiving/foundation-website-template/master/assets/images/readme-screenshots/responsive.png "Screenshot")  

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

## Usage  

For those familiar with Jekyll and Github Pages, the template is fully compatible with the `github-pages` gem (i.e. does not use any plugins).  

1. **Config File**: Enter your foundation's information in the appropriate fields in `_config.yml`. Do not remove any fields, simply leave them blank if not needed (e.g. twitter profile).

2. **Navigation**: If you need to change the left handed navigation links, you'll need to adjust the HTML found in `_includes/nav.html`. Create new pages in the `pages/` directory to match any new links you create. Be sure to use lowercase and hyphens in the filenames if needed (e.g. use `our-story.md`).

3. **Editing Pages**: All website pages are found under the `/pages` directory *except* the main home page, which can be edited via the `index.html` file.

4. **Featured Projects**: The featured project cards are found in the `_featured-cards/` directory. Images are found in `assets/images/featured-cards/`. To change an image, simply replace the existing files (e.g. upload a new `card3.jpg` for the lower left image, but do not change the filename from `card3.jpg`).

4. **Grants Database**: See full instructions below.

## Grants Database  

The template contains a built-in grants database inspired by those found on large foundation websites. Just upload your annual lists of grants and the template will handle the rest.

1. **Upload Location**: `_data/grants/`

2. **Format**: CSV format using [this template](https://github.com/smartergiving/foundation-website-template/blob/master/_data/templates/csv_template_for_grants_database.csv).

3. **File Naming**: Each file must represent a single year and be named for that year (e.g. `2016.csv`).

## License & Credits  

#### Credits  

Design  
  - Strata template by [HTML5 UP](https://html5up.net)
  - Author [@n33co](https://twitter.com/n33co)
  - Free for personal and commercial use under the [CCA 3.0 license](http://html5up.net/license)
  
Grants Database & Jekyll Template  
  - [SmarterGiving](https://smartergiving.org/)

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

&copy; [SmarterGiving](https://smartergiving.org/) under the MIT License (MIT):

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
