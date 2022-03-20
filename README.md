# Awesome HNS

[![Add to Homescreen](https://img.shields.io/badge/Skynet-Add%20To%20Homescreen-00c65e?logo=skynet&labelColor=0d0d0d)](https://homescreen.hns.siasky.net/#/skylink/AQAMPvP84IanjHdyWhexuvt7A5xwAk1q0MLEr4tHFQxeKA)

## Overview

Awesome HNS is a website created for the HandyCon 2022 Website Race ([Announcement Tweet](https://twitter.com/hnsfund/status/1504189264711454720)).

The website features awesome websites that resolve with a Handshake domain. Excluded are dlinks and single domain sales pages.

## Features

So far Awesome HNS is a basic one-page website that features simple cards for the featured websites. Each card includes a screenshot of the website, the website title, description and a button/link to visit the page. The featured website can also be visited by clicking the preview screenshot.

More websites will be added with time.

The order of the featured websites is randomized and changes each time the page is reloaded. So far, no ranking mechanism has been implemented.

## Missing website?

If your website is missing or you know of a website that is missing, please open an issue on this GitHub Repo with the tag "missing website" and we will be sure to add it to the list.

## Tech Stack

The Website is written in HTML, CSS and JS and uploaded automatically to Sia Skynet with a GitHub action and supports Homescreen ([Adding Homescreen Support and Uploading automatically](https://docs.skynetlabs.com/integrations/homescreen/adding-homescreen-support-to-an-app)).

The build tool used is Parcel ([ParcelJs](https://parceljs.org/)).

The website is hosted on the Handshake domain [AwesomeHNS](http://awesomehns/).

The data for the featured websites comes from the data.json file that stores all necessary information (title, URL, description and URL to screenshot).

## Future ideas

There are many features that could be additionally implemented after the completion of the website race. Here are some features that I could think of:

- Add a feature site for each domain/website
- Add a ranking/voting system (stars or likes)
- Have a website vs. website game where users can vote for the best websites
- Add a hot and new page
- Have monthly or yearly competitions and prices for the best websites
- Incorporate website categories

If you have additional ideas, please open an issue and let me know what you would love to see.
