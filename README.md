# Portfolio Website By LWC!

Hi! this is simple portfolio website powered by LWC.

# Screenshots
![Home Page](https://raw.githubusercontent.com/shivamkapasia0/myPortfolio/main/myPortfolio%20SS/HomePage.png)

![Home Dark Mode](https://github.com/shivamkapasia0/myPortfolio/blob/main/myPortfolio%20SS/darkModeHomePage.png?raw=true)

![Skill Page](https://github.com/shivamkapasia0/myPortfolio/blob/main/myPortfolio%20SS/skillsPage.png?raw=true)

![Dark Mode Skills Page](https://github.com/shivamkapasia0/myPortfolio/blob/main/myPortfolio%20SS/darkModeSkillsPage.png?raw=true)

![Contact Me](https://github.com/shivamkapasia0/myPortfolio/blob/main/myPortfolio%20SS/contactMePage.png?raw=true)

![Dark Mode Contact Page](https://github.com/shivamkapasia0/myPortfolio/blob/main/myPortfolio%20SS/darkModeCOntactPage.png?raw=true)
# How To Setup ?
You can just install the [myPortfolio](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2w000009J8al&isdtp=p1) app in your org and simply follow below steps:

## Setup Your Site

 - Go to sites under Digital Experiences 
 - Select you existing template or create new one(Build Your Own Template) 
 - Drag myPortfolio to body  section from components 
 - Now go to theme section and click on Edit CSS
   and paste below code:

```
.siteforceContentArea{
        margin: -1%;
}

.comm-content-header{
    margin-bottom: -2rem;
        margin-top: -3rem;
        padding-top: 2rem;
}
.siteforceContentArea .comm-layout-column:not(:empty) {
    padding-top: var(--lwc-layoutVerticalPadding,2.75rem);
    padding-bottom: var(--lwc-layoutVerticalPadding,0.75rem);
}

.comm-content-footer{
    display: none;
}
```
For more help refer to [screenshots](https://github.com/shivamkapasia0/myPortfolio/tree/main/myPortfolio%20SS) folder for site setup.
