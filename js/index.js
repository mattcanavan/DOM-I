const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// #### Create selectors to point your data into elements
// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images. Use the IDs to update src path content
// #### Update the HTML with the JSON data
// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

// **** Updating hrefs in nav
let headerLinks = document.querySelectorAll('a')
// headerLinksArray = Array.from(headerLinks)
for (let i = 0; i < headerLinks.length; i++){
  headerLinks[i].textContent = `${siteContent["nav"][`nav-item-${i+1}`]}` //nav-item-x starts at index 1, so 0+1 = 1
}

// **** Updating class "cta"

let h1 = document.querySelector('h1')
h1.textContent = `${siteContent["cta"]["h1"]}`

let ctaButton = document.querySelector('button')
ctaButton. textContent = `${siteContent["cta"]["button"]}`

let ctaImgSrc = document.querySelector("#cta-img")
ctaImgSrc.setAttribute('src', siteContent["cta"]["img-src"])

// **** Updating class "main-section"

//Top Content
let topConentItem = document.querySelector(".top-content")

topConentItem.children[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"]
topConentItem.children[0].querySelector('p').textContent = siteContent["main-content"]["features-content"]

topConentItem.children[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"]
topConentItem.children[1].querySelector('p').textContent = siteContent["main-content"]["about-content"]

//Middle Image
let middleImg = document.querySelector("#middle-img")
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//Bottom Content
let bottomContentItem = document.querySelector(".bottom-content")

bottomContentItem.children[0].querySelector('h4').textContent = siteContent["main-content"]["services-h4"]
bottomContentItem.children[0].querySelector('p').textContent = siteContent["main-content"]["services-content"]

bottomContentItem.children[1].querySelector('h4').textContent = siteContent["main-content"]["product-h4"]
bottomContentItem.children[1].querySelector('p').textContent = siteContent["main-content"]["product-content"]

bottomContentItem.children[2].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"]
bottomContentItem.children[2].querySelector('p').textContent = siteContent["main-content"]["vision-content"]
//// ****

//Contact
let contactSection = document.querySelector('.contact')

contactSection.querySelector('h4').textContent = siteContent['contact']["contact-h4"]

contactSectionPs = contactSection.querySelectorAll('p')
contactSectionPs[0].textContent = siteContent['contact']["address"]
contactSectionPs[1].textContent = siteContent['contact']['phone']
contactSectionPs[2].textContent = siteContent['contact']["email"]

//Footer
let footerSection = document.querySelector('footer')
footerSection.textContent = siteContent['footer']['copyright']