import type { Project } from "./types";

// Content ported from the original static site (see the legacy-static branch).
export const projects: Project[] = [
  {
    "slug": "df-patient-portal",
    "legacyPath": "/patientPortal.html",
    "title": "Dragonfly Patient Portal",
    "shortTitle": "DF Patient Portal",
    "featured": true,
    "summary": "This app was created as an alternative to the existing templating ecommerce site in order to fully customize every aspect and enhance patients experience from the beginning to end.",
    "description": [
      "This app was created as an alternative to the existing templating ecommerce site in order to fully customize every aspect and enhance patients experience from the beginning to end.",
      "The team consisted of three developers. For my part, I initially created the initial wireframes that were used to help plan out the entire workflow with med/high fidelity mockups. After the wireframes and mockups were approved I progressed to helping integrate the front-end while the aws integration was being setup. Once aws was up and running I began to integrate slowly small changes in the backend, building out necessary tables and connections while also integrating with external apis such as Onfleet, Drip, and MJ Freeway.",
      "As the project continued, the team dwindled to two developers where I continued to improve and have a hand in almost every aspect/ feature whether it was creating Lambda functions, integration of new POS system, or new features build out.",
      "Currently, the app is in the 2 MVP where new features are added ranging from analytics, sales and promotions, or recommendation engine while also tweaking existing features."
    ],
    "tech": [
      "Next.js",
      "AWS",
      "DynamoDB",
      "GraphQL",
      "SES",
      "SNS",
      "S3",
      "Lambda",
      "MJ Freeway",
      "Onfleet",
      "Drip",
      "Adobe XD",
      "Tailwind CSS",
      "Redux State Mgmt",
      "QR Reader",
      "Geo Location",
      "Ticket Printing",
      "PWA"
    ],
    "timeline": [
      "8 months (first MVP)",
      "2 months (2nd UI)",
      "Ongoing (3rd UI)"
    ],
    "links": [
      {
        "href": "https://www.dragonflywellness.com",
        "label": "See Live"
      }
    ],
    "hero": {
      "src": "/img/projects/DF_portal_header.png",
      "alt": "Dragonfly Patient Portal on desktop and mobile",
      "width": 531,
      "height": 531
    },
    "card": {
      "image": "/img/projects/DF_patient_portal.png",
      "fit": "cover"
    },
    "gallery": [
      {
        "title": "Wireframes",
        "src": "/img/DF_portal_wireframe.png",
        "alt": "dragonfly patient portal wireframes",
        "width": 1962,
        "height": 1064
      },
      {
        "title": "Home Page - 2nd UI",
        "src": "/img/landing_page_2.webp",
        "alt": "dragonfly patient portal home page",
        "width": 1986,
        "height": 1606
      },
      {
        "title": "Products Page - 2nd UI",
        "src": "/img/products-2.webp",
        "alt": "dragonfly patient portal products page",
        "width": 1972,
        "height": 1610
      },
      {
        "title": "Product Page - 2nd UI",
        "src": "/img/pdp.webp",
        "alt": "dragonfly patient portal product page",
        "width": 1984,
        "height": 1598
      },
      {
        "title": "Profile Page - 2nd UI",
        "src": "/img/profile.webp",
        "alt": "dragonfly patient portal profile page",
        "width": 1978,
        "height": 1610
      },
      {
        "title": "Become Patient - 2nd UI",
        "src": "/img/become_patient.webp",
        "alt": "dragonfly patient portal become a patient page",
        "width": 1986,
        "height": 1500
      },
      {
        "title": "Community - 2nd UI",
        "src": "/img/community.webp",
        "alt": "dragonfly patient portal community page",
        "width": 1008,
        "height": 1602
      },
      {
        "title": "Admin - 2nd UI",
        "src": "/img/admin.webp",
        "alt": "dragonfly patient portal admin page",
        "width": 1586,
        "height": 1468
      },
      {
        "title": "1st MVP Login",
        "src": "/img/DF_portal_login.png",
        "alt": "dragonfly patient portal login",
        "width": 1742,
        "height": 1562
      },
      {
        "title": "Mgmt Console",
        "src": "/img/DF_portal_mgmt_console.png",
        "alt": "dragonfly patient portal mgmt console",
        "width": 1190,
        "height": 1444
      },
      {
        "title": "Fulfillment Mgmt",
        "src": "/img/DF_portal_fulfill_mgmt.png",
        "alt": "dragonfly portal fulfillment mgmt",
        "width": 1924,
        "height": 1538
      },
      {
        "title": "Order Mgmt",
        "src": "/img/DF_portal_order_mgmt.png",
        "alt": "dragonfly portal order mgmt",
        "width": 1888,
        "height": 1558
      },
      {
        "title": "Sales Analytics",
        "src": "/img/DF_mgmt_sales.png",
        "alt": "dragonfly portal sales analytics",
        "width": 950,
        "height": 1388
      },
      {
        "title": "1st MVP Patient Dashboard",
        "src": "/img/DF_portal_patient_dash.png",
        "alt": "dragonfly portal patient dashboard",
        "width": 2318,
        "height": 1444
      },
      {
        "title": "1st MVP Products Page",
        "src": "/img/DF_portal_products.png",
        "alt": "dragonfly portal products page",
        "width": 962,
        "height": 1480
      },
      {
        "title": "1st MVP Patient Checkout",
        "src": "/img/DF_portal_checkout.png",
        "alt": "dragonfly portal patient checkout",
        "width": 964,
        "height": 1540
      }
    ]
  },
  {
    "slug": "utah-grown",
    "legacyPath": "/utahgrown.html",
    "title": "Utah Grown",
    "shortTitle": "Utah Grown",
    "featured": true,
    "summary": "This is a SPA(single page app) that was created to help educate and facilitate the ease of acquiring a medical cannabis card in Utah required to purchase cannabis legally.",
    "description": [
      "This is a SPA(single page app) that was created to help educate and facilitate the ease of acquiring a medical cannabis card in Utah required to purchase cannabis legally.",
      "After reviewing the needs, it was determined to use NextJS on the front-end coupled with AWS incognito, dynamodb, and s3 storage along with integration of Acuity scheduling api and Drip crm."
    ],
    "tech": [
      "Next.js",
      "AWS",
      "DynamoDB",
      "GraphQL",
      "Tailwind CSS",
      "Acuity",
      "Drip",
      "S3"
    ],
    "timeline": [
      "1 Month"
    ],
    "links": [
      {
        "href": "https://utahgrown.co",
        "label": "See Live"
      }
    ],
    "hero": {
      "src": "/img/projects/ugBrand.webp",
      "alt": "Utah Grown home snippet",
      "width": 531,
      "height": 531
    },
    "card": {
      "image": "/img/projects/UtahGrownLogoWhiteBorder.webp",
      "fit": "contain",
      "backdrop": "/img/projects/utahgrownbgheader.webp"
    },
    "gallery": [
      {
        "title": "Intro Section",
        "src": "/img/ugSPA.webp",
        "alt": "Utah Grown coa home",
        "width": 1428,
        "height": 1412
      },
      {
        "title": "Info/ FAQs",
        "src": "/img/ugSPA1.webp",
        "alt": "Info / faqs",
        "width": 1478,
        "height": 1406
      },
      {
        "title": "About",
        "src": "/img/ugAbout.webp",
        "alt": "About",
        "width": 1568,
        "height": 1210
      },
      {
        "title": "Admin Login",
        "src": "/img/ugAdminLogin.webp",
        "alt": "Admin login",
        "width": 1392,
        "height": 534
      },
      {
        "title": "Admin",
        "src": "/img/ugAdmin.webp",
        "alt": "Admin overview",
        "width": 1478,
        "height": 1256
      }
    ]
  },
  {
    "slug": "betty-medicine",
    "legacyPath": "/betty.html",
    "title": "Betty Medicine",
    "shortTitle": "Betty Medicine",
    "featured": false,
    "summary": "This site was created as an informational site for Betty Medicine. This site is based in wix.",
    "description": [
      "This site was created as an informational site for Betty Medicine. This site is based in wix.",
      "For my part, I added a backend component connected to AWS to allow admin to upload COAs that are needed to regularly be updated per compliance. I created a complete login/ registration process through AWS cognito, s3 for pdf storage and retrieval, and DynamoDB to store COA misc data."
    ],
    "tech": [
      "Next.js",
      "AWS",
      "DynamoDB",
      "GraphQL",
      "Tailwind CSS",
      "S3"
    ],
    "timeline": [
      "1 week"
    ],
    "links": [
      {
        "href": "https://www.bettymedicine.com/",
        "label": "See Live"
      }
    ],
    "hero": {
      "src": "/img/projects/BettyHeader.webp",
      "alt": "Betty Medicine home snippet",
      "width": 531,
      "height": 531
    },
    "card": {
      "image": "/img/projects/betty.webp",
      "fit": "cover"
    },
    "gallery": [
      {
        "title": "COA Page",
        "src": "/img/bettyCOAS.webp",
        "alt": "Betty coa home",
        "width": 2948,
        "height": 1614
      },
      {
        "title": "Login",
        "src": "/img/bettyLogin.webp",
        "alt": "Betty login",
        "width": 2970,
        "height": 1466
      },
      {
        "title": "COA Creation",
        "src": "/img/bettycoaCreation.webp",
        "alt": "Betty coa creation",
        "width": 2924,
        "height": 1518
      },
      {
        "title": "COA Edit",
        "src": "/img/bettycoaEdit.webp",
        "alt": "Betty coa edit",
        "width": 2946,
        "height": 1586
      }
    ]
  },
  {
    "slug": "df-wholesale",
    "legacyPath": "/dragonflyWholesale.html",
    "title": "Dragonfly Wholesale",
    "shortTitle": "DF Wholesale",
    "featured": false,
    "summary": "This site was the first project I was assigned to when I started at SAPA Investment Group, which is the parent company over many smaller companies covering gastronomy, construction, and cannabis. The project was my first time using Next JS and AWS integration.",
    "description": [
      "This site was the first project I was assigned to when I started at SAPA Investment Group, which is the parent company over many smaller companies covering gastronomy, construction, and cannabis. The project was my first time using Next JS and AWS integration.",
      "The site was meant for a wholesale e-commerce platform for their medical cannabis company, Dragonfly Processing. It involved bringing in their external database Katana via API, storing local user data with DynamoDB and GraphQL, Redux to persist cart data, Nodemailer to communicate email, Tailwind CSS as the css framework, and S3 file storage for COA uploads.",
      "The process involved creating an initial wireframe to be used as an guideline for development."
    ],
    "tech": [
      "Next.js",
      "AWS",
      "DynamoDB",
      "GraphQL",
      "Katana",
      "Nodemailer",
      "Adobe XD",
      "Tailwind CSS",
      "Redux",
      "S3"
    ],
    "timeline": [
      "2 months"
    ],
    "links": [],
    "hero": {
      "src": "/img/projects/DF_wholesale_header.png",
      "alt": "DF wholesale login snippet",
      "width": 531,
      "height": 531
    },
    "card": {
      "image": "/img/projects/DF_wholesale_1.png",
      "fit": "cover",
      "color": "#FFFEF2"
    },
    "gallery": [
      {
        "title": "Wireframe",
        "src": "/img/df_wholesale_wireframe.png",
        "alt": "dragonfly wholesale wireframe",
        "width": 1498,
        "height": 1636
      },
      {
        "title": "Dashboard",
        "src": "/img/DF_wholesale_dashboard.png",
        "alt": "dragonfly wholesale dashboard",
        "width": 2878,
        "height": 1582
      },
      {
        "title": "Orders History",
        "src": "/img/DF_wholesale_orders_snippet.png",
        "alt": "dragonfly wholesale order history",
        "width": 2928,
        "height": 1296
      },
      {
        "title": "Acct Details",
        "src": "/img/DF_wholesale_acctDetails.png",
        "alt": "dragonfly wholesale acct details",
        "width": 2750,
        "height": 1532
      }
    ]
  },
  {
    "slug": "sapa-directory",
    "legacyPath": "/sapaDirectory.html",
    "title": "SAPA Employee Directory",
    "shortTitle": "SAPA Directory",
    "featured": false,
    "summary": "I was tasked to create a possible alternative to using an outside timecard service to save money. After completing the simple timecard functionality I added onto it with a employee directory along with job postings and opportunity to connect with Slack.",
    "description": [
      "I was tasked to create a possible alternative to using an outside timecard service to save money. After completing the simple timecard functionality I added onto it with a employee directory along with job postings and opportunity to connect with Slack.",
      "The project used AWS, DynamoDB, and GraphQL to store user data and authenticate users through registration. S3 was used to store and retrieve users saved image icons, resume pdfs and images.",
      "In the end the company decided go in another direction and use their existing 3rd party platform as the onboarding of employees would be too much and not worth the difficulties."
    ],
    "tech": [
      "Next.js",
      "AWS",
      "DynamoDB",
      "GraphQL",
      "Tailwind CSS",
      "S3"
    ],
    "timeline": [
      "1 month"
    ],
    "links": [],
    "hero": {
      "src": "/img/projects/SAPA_directory_header.png",
      "alt": "SAPA Directory Snippet",
      "width": 531,
      "height": 531
    },
    "card": {
      "image": "/img/projects/SAPA_Logo_white_opt.png",
      "fit": "contain",
      "color": "#1F1D2C"
    },
    "gallery": [
      {
        "title": "Admin Directory",
        "src": "/img/SAPA_directory_home.png",
        "alt": "SAPA Directory Homepage",
        "width": 2036,
        "height": 1472
      },
      {
        "title": "Login",
        "src": "/img/SAPA_directory_login.png",
        "alt": "SAPA Directory Login",
        "width": 2934,
        "height": 1520
      },
      {
        "title": "Job Postings",
        "src": "/img/SAPA_directory_jobs.png",
        "alt": "SAPA Directory Job Postings",
        "width": 1990,
        "height": 1378
      },
      {
        "title": "Time Card",
        "src": "/img/SAPA_directory_timecard.png",
        "alt": "SAPA Time Card",
        "width": 1978,
        "height": 1318
      },
      {
        "title": "Time Stamps",
        "src": "/img/SAPA_directory_timestamps.png",
        "alt": "SAPA Time stamps",
        "width": 1984,
        "height": 1318
      },
      {
        "title": "Profile",
        "src": "/img/SAPA_directory_profile.png",
        "alt": "SAPA Profile",
        "width": 2010,
        "height": 1460
      }
    ]
  },
  {
    "slug": "df-processing",
    "legacyPath": "/dragonflyProcessing.html",
    "title": "Dragonfly Processing",
    "shortTitle": "DF Processing",
    "featured": false,
    "summary": "This site was created as an informational site for Dragonfly Processing. The site incorporates a large amount of Threejs for animated 3d computer graphics.",
    "description": [
      "This site was created as an informational site for Dragonfly Processing. The site incorporates a large amount of Threejs for animated 3d computer graphics.",
      "For my part, I added a backend component connected to AWS to allow admin to upload COAs that are needed to regularly be updated per compliance. I created a complete login/ registration process through AWS cognito, s3 for pdf storage and retrieval, and DynamoDB to store COA misc data. I also integrated an external newsletter subscription api service called Drip."
    ],
    "tech": [
      "Next.js",
      "AWS",
      "DynamoDB",
      "GraphQL",
      "Tailwind CSS",
      "S3",
      "Three.js",
      "Drip"
    ],
    "timeline": [
      "2 months (backend integration: 2 weeks)"
    ],
    "links": [
      {
        "href": "https://www.dragonflyprocessing.com/",
        "label": "See Live"
      }
    ],
    "hero": {
      "src": "/img/projects/DF_processing_header.png",
      "alt": "DF Processing home snippet",
      "width": 531,
      "height": 531
    },
    "card": {
      "image": "/img/projects/DF_processing.png",
      "fit": "cover",
      "color": "#FFFEF2"
    },
    "gallery": [
      {
        "title": "COA Page",
        "src": "/img/DF_processing_home.png",
        "alt": "dragonfly processing coa home",
        "width": 2796,
        "height": 1420
      },
      {
        "title": "Login",
        "src": "/img/DF_processing_login.png",
        "alt": "dragonfly processing login",
        "width": 2638,
        "height": 1224
      },
      {
        "title": "COA Creation",
        "src": "/img/DF_processing_creation.png",
        "alt": "dragonfly processing coa creation",
        "width": 2724,
        "height": 1272
      },
      {
        "title": "COA Edit",
        "src": "/img/DF_processing_edit.png",
        "alt": "dragonfly processing coa edit",
        "width": 2558,
        "height": 1260
      },
      {
        "title": "Drip Newsletter Integration",
        "src": "/img/DF_processing_drip.png",
        "alt": "dragonfly processing drip integration",
        "width": 2312,
        "height": 1362
      }
    ]
  },
  {
    "slug": "choredoor",
    "legacyPath": "/choredoor.html",
    "title": "ChoreDoor",
    "shortTitle": "ChoreDoor",
    "featured": true,
    "summary": "This site was created for a small startup that was wanting to create a property management subscription service; complete with customizeable add-ons with both an interactive customer, contractor, and admin portal.",
    "description": [
      "This site was created for a small startup that was wanting to create a property management subscription service; complete with customizeable add-ons with both an interactive customer, contractor, and admin portal.",
      "The project evolved into allowing live geolocation of potential clients for contractors with in-app chat communication and recurring service to customers with different service tiers.",
      "The process was broken down to stages: \n \n1- Gathering Information\n2- Planning\n3- Design & Content creation\n4- Coding\n5- Testing & Launch"
    ],
    "tech": [
      "React",
      "Sass",
      "Bootstrap",
      "Firebase",
      "Stripe",
      "Google Geolocation",
      "Adobe XD",
      "Redux"
    ],
    "timeline": [
      "6 months"
    ],
    "links": [
      {
        "href": "https://home-subscription.web.app",
        "label": "See Live"
      }
    ],
    "hero": {
      "src": "/img/projects/choreDoorHeader.png",
      "alt": "kitchen image",
      "width": 531,
      "height": 531
    },
    "card": {
      "image": "/img/projects/CD_Horizontal_whiteFont.png",
      "fit": "contain",
      "color": "#1789C4"
    },
    "gallery": [
      {
        "title": "Gathering Information",
        "src": "/img/choredoor_gathering.png",
        "alt": "choredoor information document",
        "width": 2284,
        "height": 1762
      },
      {
        "title": "Styleguides/ Icons",
        "src": "/img/choredoor_style.png",
        "alt": "choredoor icons/styleguides",
        "width": 1826,
        "height": 1620
      },
      {
        "title": "Wireframes",
        "src": "/img/choredoor_wireframe.png",
        "alt": "choredoor wireframes",
        "width": 1526,
        "height": 906
      },
      {
        "title": "Dashboard",
        "src": "/img/choredoor_dashboard.png",
        "alt": "choredoor_dashboard",
        "width": 2988,
        "height": 1638
      }
    ]
  },
  {
    "slug": "amazon-clone",
    "legacyPath": "/amazonClone.html",
    "title": "Amazon Clone",
    "shortTitle": "Amazon Clone",
    "featured": false,
    "summary": "This site is a fully functioning e-commerce site using login, checkout, and order history.",
    "description": [
      "This site is a fully functioning e-commerce site using login, checkout, and order history.",
      "I did this project independently to enhance my experience with the use of React JS along with a different type of DB. I implemented the backend with Firebase DB and functions along with Stripe to process credit cards."
    ],
    "tech": [
      "Visual Studio",
      "HTML5",
      "CSS3",
      "Stripe",
      "Firebase",
      "React"
    ],
    "timeline": [
      "2 Weeks"
    ],
    "links": [
      {
        "href": "https://clone-c91ab.web.app/",
        "label": "See Live"
      }
    ],
    "hero": {
      "src": "/img/projects/Amazon-clip.png",
      "alt": "amazon logo",
      "width": 531,
      "height": 531
    },
    "card": {
      "image": "/img/projects/amazon-logo_opt.png",
      "fit": "contain"
    },
    "gallery": [
      {
        "title": "Sign-in Example",
        "src": "/img/amazon-signIn.PNG",
        "alt": "amazon signin",
        "width": 441,
        "height": 477
      },
      {
        "title": "Shopping Cart Example",
        "src": "/img/amazon-shoppingCart.PNG",
        "alt": "amazon shopping cart",
        "width": 1875,
        "height": 807
      }
    ]
  },
  {
    "slug": "aarons-recipes",
    "legacyPath": "/aaronRecipes.html",
    "title": "Aaron's Recipes",
    "shortTitle": "Aaron's Recipes",
    "featured": false,
    "summary": "The purpose of this project was to show the creation of a ReactJS app from a wireframe created along with MongoDB database to store and retrieve information using recipes. The application allows only admin that are successfully logged in to create, update, and delete recipes.",
    "description": [
      "The purpose of this project was to show the creation of a ReactJS app from a wireframe created along with MongoDB database to store and retrieve information using recipes. The application allows only admin that are successfully logged in to create, update, and delete recipes."
    ],
    "tech": [
      "Visual Studio",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Sass",
      "Figma",
      "MongoDB",
      "React"
    ],
    "timeline": [
      "1.5 Week"
    ],
    "links": [
      {
        "href": "https://github.com/aaronjwhipple87/reactjs-recipes",
        "label": "See GitHub Repo"
      }
    ],
    "hero": {
      "src": "/img/projects/cookbook.png",
      "alt": "screenshot of text adventure game",
      "width": 531,
      "height": 531
    },
    "card": {
      "image": "/img/projects/cookbook.jpg",
      "fit": "cover"
    },
    "gallery": [
      {
        "title": "Figma Wireframe",
        "src": "/img/wireframe-snippet.PNG",
        "alt": "recipe wireframe",
        "width": 748,
        "height": 707
      },
      {
        "title": "Development Pre-Production",
        "src": "/img/recipes-final.PNG",
        "alt": "single recipe",
        "width": 636,
        "height": 846
      }
    ]
  },
  {
    "slug": "sinless-treats",
    "legacyPath": "/sinless.html",
    "title": "Sinless Treats",
    "shortTitle": "Sinless Treats",
    "featured": false,
    "summary": "The site was built for a client that wanted a more custom type of Shopify experience. It was my first time dealing with Shopify's e-commerce platform and Liquid, a template language written in Ruby.",
    "description": [
      "The site was built for a client that wanted a more custom type of Shopify experience. It was my first time dealing with Shopify's e-commerce platform and Liquid, a template language written in Ruby."
    ],
    "tech": [
      "Shopify",
      "Liquid",
      "Adobe XD"
    ],
    "timeline": [
      "1.5 Week"
    ],
    "links": [],
    "hero": {
      "src": "/img/projects/sinlessHeader.png",
      "alt": "screenshot of Sinless Treats",
      "width": 531,
      "height": 531
    },
    "card": {
      "image": "/img/projects/sinless_opt.png",
      "fit": "contain"
    },
    "gallery": [
      {
        "title": "Home Page",
        "src": "/img/projects/sinless1.PNG",
        "alt": "amazon signin",
        "width": 1804,
        "height": 737
      },
      {
        "title": "Product Item",
        "src": "/img/projects/sinless2.PNG",
        "alt": "amazon signin",
        "width": 1486,
        "height": 806
      },
      {
        "title": "Products Page",
        "src": "/img/projects/sinless3.PNG",
        "alt": "amazon signin",
        "width": 1832,
        "height": 845
      }
    ]
  },
  {
    "slug": "attigo",
    "legacyPath": "/attigo.html",
    "title": "Attigo",
    "shortTitle": "Attigo",
    "featured": false,
    "summary": "This is one of my most recent projects that I picked from the 99Designs site which is a creative free lance competition site that brings designers and prospective businessses together.",
    "description": [
      "This is one of my most recent projects that I picked from the 99Designs site which is a creative free lance competition site that brings designers and prospective businessses together.",
      "The business, a managament consulting firm based in San Francisco, provided the content, logo, and the overall theme that they were wanting to represent to potential clients coming to the site. My job was to take what they had in mind on paper and bring it to life.",
      "After looking through what the business wanted and didn't want I went about creating the colors and fonts I wanted to use. The company had provided a logo, to which I based off my color pallet. To create a stunning impression for first-time visitors to each page I decided to incorporate large city skylines of San Francisco which would set the stage for the rest of the content.",
      "I am most proud of keeping the same theme of business and cityscapes throughout with the use of sharp angles, complementing colors, and subtle animations."
    ],
    "tech": [
      "Visual Studio",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Sass"
    ],
    "timeline": [
      "2 Weeks"
    ],
    "links": [
      {
        "href": "/Whipple_Attigo/index.html",
        "label": "See Live"
      }
    ],
    "hero": {
      "src": "/img/projects/sanfran2.png",
      "alt": "san francisco skyline",
      "width": 500,
      "height": 500
    },
    "card": {
      "image": "/img/projects/sanfran.jpg",
      "fit": "cover"
    },
    "gallery": [
      {
        "title": "Attigo Content Layout",
        "src": "/img/attigo_content-snippet.PNG",
        "alt": "Attigo content preview",
        "width": 660,
        "height": 522
      },
      {
        "title": "Attigo Logo",
        "src": "/img/attigo_logo_snippet.PNG",
        "alt": "Attigo logo preview",
        "width": 569,
        "height": 464
      },
      {
        "title": "Attigo 99Designs Entry Page",
        "src": "/img/attigo_99Design_snippet.PNG",
        "alt": "Attigo 99Designs Snippet",
        "width": 1420,
        "height": 745
      }
    ]
  },
  {
    "slug": "budget-rite",
    "legacyPath": "/budgetRite.html",
    "title": "Budget Rite",
    "shortTitle": "Budget Rite",
    "featured": false,
    "summary": "This site is a budget application that is meant for a consumer to be able to create, update, delete numerous budgets based on their own personal goals. In addition to creating individual unique budgets, a consumer can track their expenses, bills, income, and savings.",
    "description": [
      "This site is a budget application that is meant for a consumer to be able to create, update, delete numerous budgets based on their own personal goals. In addition to creating individual unique budgets, a consumer can track their expenses, bills, income, and savings.",
      "This site is my capstone project for my senior year. Including myself, and two others we worked to plan, stage, and implement everything from the front-end to the back-end. I am very proud of how we were able to work as a team using good communication throughout the process to create a magnificent site.",
      "The process was broken down to stages: \n \n1- Gathering Information\n2- Planning\n3- Design & Content creation\n4- Coding\n5- Testing & Launch"
    ],
    "tech": [
      "PhpStorm",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bulma",
      "PHP",
      "Sass",
      "MySQL",
      "Figma",
      "GitHub"
    ],
    "timeline": [
      "3 months"
    ],
    "links": [
      {
        "href": "https://github.com/aaronjwhipple87/budget-rite",
        "label": "See GitHub Repo"
      }
    ],
    "hero": {
      "src": "/img/projects/budget2.png",
      "alt": "calculator and spreadsheet",
      "width": 500,
      "height": 500
    },
    "card": {
      "image": "/img/projects/budget.jpg",
      "fit": "cover"
    },
    "gallery": [
      {
        "title": "Gathering Information",
        "src": "/img/budget_gathering_snippet.PNG",
        "alt": "information document",
        "width": 399,
        "height": 320
      },
      {
        "title": "Styleguides",
        "src": "/img/budget_styleguide.PNG",
        "alt": "budget rite styleguides",
        "width": 685,
        "height": 609
      },
      {
        "title": "Wireframes",
        "src": "/img/budget_wireframe.PNG",
        "alt": "budget rite wireframes",
        "width": 708,
        "height": 376
      },
      {
        "title": "Sitemap",
        "src": "/img/budget_sitemap.PNG",
        "alt": "budget rite sitemap",
        "width": 1171,
        "height": 499
      }
    ]
  },
  {
    "slug": "rent-own-homes",
    "legacyPath": "/rhp.html",
    "title": "Rent Own Homes Pro",
    "shortTitle": "Rent Own Homes",
    "featured": false,
    "summary": "The company specializes in helping everyday people afford purchasing\n their own home through renting. I wanted to create an inviting feeling to put the\n potential clients at ease through warm tones and colors. The site's purpose is to clarify\n any confusion to the process along with inform them of up-to-date potential properties\n and help give them feedback from former clients",
    "description": [
      "The company specializes in helping everyday people afford purchasing\n their own home through renting. I wanted to create an inviting feeling to put the\n potential clients at ease through warm tones and colors. The site's purpose is to clarify\n any confusion to the process along with inform them of up-to-date potential properties\n and help give them feedback from former clients",
      "To create an inviting atmosphere I included a nice large image of a home as the\n backdrop. I improved the text flow more by incorporating several icons and\n vector images. To ensure all the content and different sections flowed together I incorporated different background colors for each section. Some unique\n feature were used throughout such as an accordion design, card images for the different properties,\n slideshow for testimonials, or use of vector images."
    ],
    "tech": [
      "Visual Studio",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Sass"
    ],
    "timeline": [
      "1 Week"
    ],
    "links": [
      {
        "href": "/Whipple_RHP_Project/index.html",
        "label": "See Live"
      }
    ],
    "hero": {
      "src": "/img/projects/rhp2.png",
      "alt": "image of house",
      "width": 500,
      "height": 500
    },
    "card": {
      "image": "/img/projects/rhp-opt.jpg",
      "fit": "cover"
    },
    "gallery": [
      {
        "title": "Slideshow Example",
        "src": "/img/testim_snippet.PNG",
        "alt": "carousel example",
        "width": 1226,
        "height": 764
      },
      {
        "title": "Card Example",
        "src": "/img/prop_snippet.PNG",
        "alt": "card example",
        "width": 1174,
        "height": 781
      },
      {
        "title": "Accordion Example",
        "src": "/img/accord_snippet.PNG",
        "alt": "accordion example",
        "width": 1200,
        "height": 768
      }
    ]
  },
  {
    "slug": "cg-solutions",
    "legacyPath": "/cgSolutions.html",
    "title": "CG Solutions",
    "shortTitle": "CG Solutions",
    "featured": false,
    "summary": "This company's emphasis is all about home remodeling and surveying, whether\n involving landscape design, having an addition done, or creating a completely new\n home from scratch. To create a more inviting experience and set the theme throughout the site, I used calm earthy tones and colors along with home interior and 2D renderings of some projects done for clients.",
    "description": [
      "This company's emphasis is all about home remodeling and surveying, whether\n involving landscape design, having an addition done, or creating a completely new\n home from scratch. To create a more inviting experience and set the theme throughout the site, I used calm earthy tones and colors along with home interior and 2D renderings of some projects done for clients.",
      "After meeting with the client to get an idea of what their expectations were, I decided\n to try and find out who their target market was. I created a survey to help gauge the\n market and from there a persona to help focus what the content should be geared\n toward.",
      "I narrowed down the target market through the use of surveys and creating a\n persona. Then I created a sitemap showing the flow of the different pages that would be\n included in the site. After getting approval from the client of the sitemap, I proceeded\n to create a rough draft of the written content of the site. Once the content was approved\n I proceeded to create low-fidelity mockups with wireframes along with a mood board\n showing the colors, images, and fonts I was planning on using.",
      "The final step prior to actual coding the site was creating a high-fidelity mockup\n showing what the site would look like in the end."
    ],
    "tech": [
      "Visual Studio",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "Sass",
      "Adobe XD"
    ],
    "timeline": [
      "3 Weeks"
    ],
    "links": [
      {
        "href": "/CG_Solutions/index.html",
        "label": "See Live"
      }
    ],
    "hero": {
      "src": "/img/projects/cg-solutions2.png",
      "alt": "2d render of house",
      "width": 500,
      "height": 500
    },
    "card": {
      "image": "/img/projects/cg-solutions.png",
      "fit": "cover"
    },
    "gallery": [
      {
        "title": "Survey",
        "src": "/img/survey_snippet.PNG",
        "alt": "survey",
        "width": 670,
        "height": 665
      },
      {
        "title": "Persona",
        "src": "/img/persona_snippet.png",
        "alt": "persona",
        "width": 370,
        "height": 242
      },
      {
        "title": "Mood Board",
        "src": "/img/mood_board_snippet.PNG",
        "alt": "mood board",
        "width": 1021,
        "height": 730
      },
      {
        "title": "Sitemap",
        "src": "/img/sitemap_snippet.png",
        "alt": "sitemap",
        "width": 698,
        "height": 238
      },
      {
        "title": "Mobile Wireframes",
        "src": "/img/cg_mobile.PNG",
        "alt": "mobile wireframes",
        "width": 656,
        "height": 921
      },
      {
        "title": "High Fidelity Mockup",
        "src": "/img/cg_wireframe.PNG",
        "alt": "high fidelity mockup",
        "width": 658,
        "height": 925
      }
    ]
  },
  {
    "slug": "trainer-iphone-app",
    "legacyPath": "/trainerApp.html",
    "title": "Trainer iPhone App",
    "shortTitle": "Trainer iPhone App",
    "featured": false,
    "summary": "The purpose of this project was to create an iPhone app that would enable an exercise\n trainer/ coach to be able to give their clients remote programming. The expectation\n from the instructor was to implement a create, delete, and update app with the use of\n multiple windows.",
    "description": [
      "The purpose of this project was to create an iPhone app that would enable an exercise\n trainer/ coach to be able to give their clients remote programming. The expectation\n from the instructor was to implement a create, delete, and update app with the use of\n multiple windows.",
      "This project was my first time involving the use of Swift and Xcode. I really liked how simple and straightforward the design was through Apple's exclusive Xcode. Compared to other coding languages it seemed very seemless. The downside to such a new coding language is that it is frequently changing. Prior to this course and project I didn't consider Iphone Apps very interesting, but have since been very intrigued by their potential.",
      "Some difficulties I faced were creating several different databases\n to store workouts, clients info, and trainers info. The project was a success despite the\n many difficulties."
    ],
    "tech": [
      "Xcode",
      "Swift",
      "SQLite",
      "YouTube"
    ],
    "timeline": [
      "2 Weeks"
    ],
    "links": [
      {
        "href": "https://youtu.be/HAKOt1lIP-o",
        "label": "See Demo Walkthrough"
      }
    ],
    "hero": {
      "src": "/img/projects/trainer-app2.png",
      "alt": "athletic trainer",
      "width": 500,
      "height": 500
    },
    "card": {
      "image": "/img/projects/trainer-app.jpg",
      "fit": "cover"
    },
    "gallery": [
      {
        "title": "Client Preview",
        "src": "/img/client_snippet.PNG",
        "alt": "Client Snippet",
        "width": 759,
        "height": 585
      },
      {
        "title": "Adding Workout Preview",
        "src": "/img/workout_snippet.PNG",
        "alt": "Adding Workout Preview",
        "width": 798,
        "height": 585
      },
      {
        "title": "Demo Setup",
        "src": "/img/demos_snippet.PNG",
        "alt": "Demo Preview",
        "width": 803,
        "height": 586
      }
    ]
  },
  {
    "slug": "online-blog",
    "legacyPath": "/blog.html",
    "title": "Online Blog",
    "shortTitle": "Online Blog",
    "featured": false,
    "summary": "The main purpose of this project was to be able to show how through the combination of PHP, HTML, and MySQL a user can interact on the front-end with the server on the back-end.",
    "description": [
      "The main purpose of this project was to be able to show how through the combination of PHP, HTML, and MySQL a user can interact on the front-end with the server on the back-end.",
      "A user can create, update, or delete a blog that is stored on a database through a server, communicated through PHP language. Prior to this project, I had some experience dealing with PHP, but limited interaction with HTML. I am very proud how I was able to take a simple idea and implement it.",
      "This project peaked my interest greatly in the world of back-end coding, not just PHP. Since this project, I continue to search out new learning opportunities to advance my knowledge in the aspect of back-end development."
    ],
    "tech": [
      "PhpStorm",
      "HTML5",
      "CSS3",
      "Bulma",
      "PHP",
      "MySQL"
    ],
    "timeline": [
      "2 Weeks"
    ],
    "links": [],
    "hero": {
      "src": "/img/projects/blog2.png",
      "alt": "image of block letters spelling blog",
      "width": 500,
      "height": 500
    },
    "card": {
      "image": "/img/projects/blog.jpg",
      "fit": "contain"
    },
    "gallery": [
      {
        "title": "Backend Preview",
        "src": "/img/backend_snippet.PNG",
        "alt": "backend preview",
        "width": 1456,
        "height": 676
      },
      {
        "title": "Create Blog",
        "src": "/img/create_snippet.PNG",
        "alt": "create blog example",
        "width": 797,
        "height": 522
      },
      {
        "title": "Delete Blog",
        "src": "/img/delete_snippet.PNG",
        "alt": "delete blog example",
        "width": 700,
        "height": 214
      },
      {
        "title": "Update Blog",
        "src": "/img/update_snippet.PNG",
        "alt": "update blog example",
        "width": 765,
        "height": 567
      }
    ]
  },
  {
    "slug": "bmw-enthusiast",
    "legacyPath": "/bmw.html",
    "title": "BMW M Class Enthusiast",
    "shortTitle": "BMW Enthusiast",
    "featured": false,
    "summary": "The purpose of this project was to be introduced to the use of mockups to help in\n planning and creating projects more effectively. This project was my first time using a\n mockup software to stage and plan a website. Prior to the use of mockups it was very\n difficult and frustrating to change things after coding a site. The hardest part with this\n project was learning how to use Adobe software, but have since noticed how using the\n mockup software is essential in the planning stage.",
    "description": [
      "The purpose of this project was to be introduced to the use of mockups to help in\n planning and creating projects more effectively. This project was my first time using a\n mockup software to stage and plan a website. Prior to the use of mockups it was very\n difficult and frustrating to change things after coding a site. The hardest part with this\n project was learning how to use Adobe software, but have since noticed how using the\n mockup software is essential in the planning stage."
    ],
    "tech": [
      "WebStorm",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Adobe XD"
    ],
    "timeline": [
      "1 Week"
    ],
    "links": [
      {
        "href": "/BMW_Enthusiast/index.html",
        "label": "See Live"
      }
    ],
    "hero": {
      "src": "/img/projects/bmw2.png",
      "alt": "yellow bmw car",
      "width": 500,
      "height": 500
    },
    "card": {
      "image": "/img/projects/bmw.jpg",
      "fit": "cover"
    },
    "gallery": [
      {
        "title": "Style Guide",
        "src": "/img/styleguide_snippet.PNG",
        "alt": "style guide example",
        "width": 694,
        "height": 821
      },
      {
        "title": "Home Mockup",
        "src": "/img/home_mockup.PNG",
        "alt": "home mockup example",
        "width": 346,
        "height": 876
      },
      {
        "title": "Mobile Mockup",
        "src": "/img/mobile_mockup.PNG",
        "alt": "mobile mockup example",
        "width": 117,
        "height": 685
      }
    ]
  },
  {
    "slug": "rock-paper-scissors",
    "legacyPath": "/rps.html",
    "title": "Rock Paper Scissors Game",
    "shortTitle": "Rock Paper Scissors",
    "featured": false,
    "summary": "The purpose of this project was to be able to show the implementation of Vue\n JavaScript involving HTML and CSS. The project is a simple rock, paper, scissors game\n against the computer. The first to a score of 10 wins. The player can restart the game at\n anytime. As the player chooses it's chose a prompt text shows what the computer\n chose and the result between the two. The game keeps a constant log of the score till\n the end.",
    "description": [
      "The purpose of this project was to be able to show the implementation of Vue\n JavaScript involving HTML and CSS. The project is a simple rock, paper, scissors game\n against the computer. The first to a score of 10 wins. The player can restart the game at\n anytime. As the player chooses it's chose a prompt text shows what the computer\n chose and the result between the two. The game keeps a constant log of the score till\n the end.",
      "Vue JavaScript is a JavaScript framework that is meant to be able to handle quick responsive single page applications. Rather than having to get a response from the server (back-end), everything is held on the front-end making for much quicker responsiveness. The most difficult part of Vue is implementing it's small semantic differences between regular javascript."
    ],
    "tech": [
      "WebStorm",
      "HTML5",
      "CSS3",
      "Foundation",
      "Vue.js"
    ],
    "timeline": [
      "1 Week"
    ],
    "links": [
      {
        "href": "/RPS/index.html",
        "label": "See Live"
      }
    ],
    "hero": {
      "src": "/img/projects/rps2.png",
      "alt": "illustration of a rock paper and scissor",
      "width": 500,
      "height": 500
    },
    "card": {
      "image": "/img/projects/rock-paper-scissors-flat-icons_opt.png",
      "fit": "contain"
    },
    "gallery": [
      {
        "title": "Home Snippet",
        "src": "/img/rps.PNG",
        "alt": "home Snippet",
        "width": 1462,
        "height": 715
      }
    ]
  },
  {
    "slug": "text-adventure",
    "legacyPath": "/textAdventure.html",
    "title": "Text Adventure",
    "shortTitle": "Text Adventure",
    "featured": false,
    "summary": "The purpose of this project was to show the use of Python language in an interactive\n game giving the player different choices simulating going through a house. The\n difficulty of the project was implementing several different files and functions into one\n single program. It was very gratifying to see the final piece working much like old 80's\n and 90's games.",
    "description": [
      "The purpose of this project was to show the use of Python language in an interactive\n game giving the player different choices simulating going through a house. The\n difficulty of the project was implementing several different files and functions into one\n single program. It was very gratifying to see the final piece working much like old 80's\n and 90's games."
    ],
    "tech": [
      "PyCharm",
      "Python"
    ],
    "timeline": [
      "1 Week"
    ],
    "links": [
      {
        "href": "https://github.com/aaronjwhipple87/textAdventure",
        "label": "See GitHub Repo"
      }
    ],
    "hero": {
      "src": "/img/projects/text-adventure2.png",
      "alt": "screenshot of text adventure game",
      "width": 500,
      "height": 500
    },
    "card": {
      "image": "/img/projects/text-adventure.PNG",
      "fit": "cover"
    },
    "gallery": [
      {
        "title": "Image Example",
        "src": "/img/textImage_snippet.PNG",
        "alt": "image example",
        "width": 384,
        "height": 294
      },
      {
        "title": "Intro Example",
        "src": "/img/textIntro_snippet.PNG",
        "alt": "intro example",
        "width": 575,
        "height": 329
      }
    ]
  }
];

