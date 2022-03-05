<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">


<h3 align="center">Legogram</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/heranYang93/Leg-it"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/heranYang93/Leg-it">View Demo</a>
    ·
    <a href="https://github.com/heranYang93/Leg-it/issues">Report Bug</a>
    ·
    <a href="https://github.com/heranYang93/Leg-it/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Through a combination of an exceptional concept with great technological delivery through industry standard tools, the logogram app was created to meet the demand and maintain an ethos that bares close relation to that of Lego’s. 

Legogram is the perfect platform for users to come together and share their passion for the Lego empire. A lot of functionality around providing features to promote collaboration and communication have been purposely implemented to boost the sense of community on the app.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Javascript](https://www.javascript.com/)
- [Handlebars](https://handlebarsjs.com/)
- [Express](https://expressjs.com/)
- [Cloudinary](https://cloudinary.com/)
- [multer](https://www.npmjs.com/package/multer)
- [MySQL](https://www.mysql.com/)
- [Heroku](https://www.heroku.com/)
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/default.asp)
- [Bulma](https://bulma.io/)


<p align="right">(<a href="#top">back to top</a>)</p>

## npm libaries

```javascript
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const helpers = require('./utils/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
```

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project
locally. To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:heranYang93/Leg-it.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the server
   ```js
   nodemon server
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional
screenshots, code examples and demos work well in this space. You may also link
to more resources.

### Sign Up Page 
- The sign up page, like the sign in page, has a great animation which was implemented from design.
![Alt text](public\images\signup_lego.PNG "signup")

### Homepage
- The Homepage has a very sleek grid layout that is powered by Bulma and responsive design plus a very handy navigation bar to switch from page to page.
![Alt text](public\images\legogramhome.png "homepage")

### Tags Page 
- Legogram has a brilliant tags feature which allows users to search for specific categories of posts and tag their own posts too. 
![Alt text](public\images\legotags.png "tags") 


_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to
learn, inspire, and create. Any contributions you make are **greatly
appreciated**.

If you have a suggestion that would make this better, please fork the repo and
create a pull request. You can also simply open an issue with the tag
"enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## Hosting

| Project                            |  Note-Taker URL                                       |
|------------------------------------|-------------------------------------------------------|
|  Legogram                          | <https://legogram.herokuapp.com/>                     |

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Muhammad Daaboul](https://github.com/moedaaboul)
- [Iler Amross Watson](https://github.com/Iler22)
- [Heran Yang](https://github.com/heranYang93)
- [Eoin Harkin](https://github.com/HarkyDev)
- [Mbongeni Ngwenya](https://github.com/Allan-Ngwenya)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!--[contributors-shield]:
  https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]:
  https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]:
  https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]:
  https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]:
  https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]:
  https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]:
  https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]:
  https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png-->
