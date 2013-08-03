var portfolio = {


    /**
     * ABOUT PAGE
     */
	about:{

        /**
         * Main content that will be displayed on the about section of the website.
         * Just some bullshit about who I am, where I cam from, and hopefully where I'm heading.
         */
        bio:  'My name is James Sheldon. I am a web developer, programmer, and an early adopter. ' +
              'I work out of my home office in Calgary as a freelance developer, where I make a living creating things on the Internet. ' +
              'As a developer, I am passionate about innovation, clean code, usability, and pushing the limits of the browser. '+
              'My specialty is building rich internet applications using HTML, CSS, and Javascript. '+
              'With the ever changing landscape of Javascript, HTML5 and CSS3 I pride myself on striking a balance between ' +
              'dancing on the bleeding edge of innovation and respecting conventions of the past. ' +
              'I attended Mount Royal College and did the whole Bachelor of Communications thing. ' +
              'Since then I have had some interesting experiences working in house, for an ad agency, investor relations company, ' +
              'software studio, and interactive shop as well as freelancing on my own. I collect keyboards, and battle a small ' +
              'addiction to video games. In the summers I love to hang out on patios and in the winters I snowboard ' +
              'and volunteer for the Special Olympics as a swimming coach. I have a demon child of a puppy named Maple, ' +
              'who I love as much as the syrup. I was recently married to my beautiful wife Chelsea and we are expecting our ' +
              'first born very shortly and we are both very exciting about starting that chapter of our lives.',

        /**
         * This will show as a subsection of the about 'page'.
         * Pretty much just a duplicate of what is already on my linked in page.
         */
        experience : [
            {
                employer: 'Sajak & Farki',
                position: 'Frontend Developer',
                description: 'As a frontend developer for Sajak & Farki I was responsible for building Javascript centric applications. Admin dashboards, social media campaigns, and Facebook applications were my primary focus. Aside from my day to day duties, I was responsible for establishing build, development and quality assurance standards.',
                startDate: '10/01/2012',
                endDate: '08/01/2013'
            },
            {
                employer: 'Non Linear Creations',
                position: 'Developer',
                description: 'Worked closely with a large team of internal and external stakeholders to deliver a performance indicator dashboard for a 10,000+ employee engineering firm. I was responsible for designing and building the front end experience of the SharePoint 2010 portal. This was an agile project where I was working remotely with team members over all of North America. The project was a tremendous success and learning opportunity.',
                startDate: '01/01/2012',
                endDate: '07/01/2012'
            },
            {
                employer: 'BMIR (Formerly Bryan Mills Iradesso)',
                position: 'Web Solutions Specialist',
                description: 'Managed a team of developers and designers primarily focused on investor relations and corporate communication projects. Executions included social media initiatives, public websites, corporate intranets, mobile applications, and content managements systems. Played a key role in responding to RFP’s and attending high-level pitch meetings with an emphasis on providing technical direction and strategic insight. Worked closely with clients/stakeholders and project team members to gather, analyze, and document functional/business requirements. Produced information architecture deliverables(including defining site structure, navigation and page layout) by creating site maps and high fidelity wire frames, writing use cases and UI specifications, assessing interface usability, and managing content inventories.',
                startDate: '10/01/2010',
                endDate: '02/01/2012'
            },
            {
                employer: 'ZGM (Formerly Zero Gravity Inc.)',
                position: 'Lead Web Developer',
                description: 'Lead a small team of developers on projects ranging from simple websites to enterprise applications. Was responsible for creating development processes, coding standards, mentoring and training junior developers, gathering and compiling project and prototyping applications.Developed a custom CMS tool that implemented technologies such as .NET4, LINQ to SQL, Entity Framework, ASP .NET MVC, jQuery, etc. Integrated with third party services including, Twitter, Facebook, Google Maps, Chase and Moneris payment gateways, and OpenID.',
                startDate: '02/01/2007',
                endDate: '09/01/2010'
            },
            {
                employer: 'Sprung Instant Structures',
                position: 'Web Developer / Graphic Designer',
                description: 'Built a custom photo management system that allowed users the ability to upload and categorize photos that could easily be shared with all marketing staff on an international scale. Responsible for building and maintaining the company website.>Other responsibilities include: Flash/Actionscript Development, Database Design and Architecture, General Advertising, Email Marketing, Traditional and Large Format Print Design, CD ROM, DVD Production, Video.',
                startDate: '05/01/2004',
                endDate: '02/01/2007'
            },
            {
                employer: 'James Sheldon Design + Developement',
                position: 'Freelance Web Developer / Graphic Designer',
                description: 'Independent freelance web developer working for small to medium sized businesses. Specializing in frontend developement, JavaScript developement, and application development.',
                startDate: '01/01/2002',
                endDate: 'Present'
            }
        ],

        /**
         * Not sure if this is really needed, probably would show this as a content underneath the bio on the about page.
         */
        interests: ['Snowboarding', 'Music', 'Graphic Design', 'Web Development', 'Photography', 'Cooking', 'Video Games', 'Guitar', 'Hiking']

    },

    /**
     * SKILLS PAGE
     * Each skill has a name, years of experience and optionally a list of projects or
     * experiments that illustrate experience in that skill.
     * Will group skills based on area of interest (server side, client side, other).
     */
    skills: {
        server:[
            {
                name: 'node.js',
                years: '1.5 years experience',
                projects: [],
                experiments: []
            },
            {
                name: 'Ruby on Rails',
                years: '1 years experience',
                projects: [],
                experiments: []
            },
            {
                name: 'ASP.NET (C#/VB)',
                years: '7 years experience',
                projects: [],
                experiments: []
            },
            {
                name: 'PHP',
                years: '3 years experience',
                projects: [],
                experiments: []
            },
            {
                name: 'MSSQL',
                years: '7 years experience',
                projects: [],
                experiments: []
            },
            {
                name: 'MYSQL',
                years: '3 years experience',
                projects: [],
                experiments: []
            },
            {
                name: 'MongoDB',
                years: '1 year experience',
                projects: [],
                expiriments: []
            }
        ],

        client:[
            {
                name: 'HTML',
                years: '11 years experience'
            },
            {
                name: 'CSS',
                years: '9 years experience'
            },
            {
                name: 'Javascript',
                years: '5 years experience'
            },
            {
                name: 'Actionscript',
                years: '6 years experience'
            }
        ],

        other:[
            {
                name: 'IA/UX/Wireframing',
                years: '3 years experience'
            },
            {
                name: 'GIT',
                years: '2 years experience'
            },
            {
                name: 'SVN',
                years: '4 years experience'
            }

        ]
    },

    /**
     * WORK PAGE
     * This section is just to communicate the type of work I've already done, etc.
     */
	work: {

        /**
         * This is where I will talk about my areas of focus and proficiencies.
         * This will likely be the type of projects that I', looking to land and will try and
         * brand/market myself towards these focus areas. Description will likely be 1-3 paragraphs at the most.
         */
        focus: [
            {
                name: 'Single Page Applications',
                description: ''
            },
            {
                name: 'Javascript/CSS Animation',
                description: ''
            },
            {
                name: 'Mobile & Tablet Applications',
                description: ''
            },
            {
                name: 'Facebook Tabs/Applications',
                description: ''
            },
            {
                name: 'Dashboards and Administration Tools',
                description: ''
            }

        ],

        /**
         * Straight forward portfolio listing.  Each entry will contain a few photos (screen shots).
         * Who I was working for at the time,
         * URL if it's still up,
         * Date (not sure about this one)
         * Skills used on the project,
         * Description will be a statement about what my involvement was for the project.
         * The description is the most important since the visuals likely don't belong to me.
         */
        portfolio:[
            {
                title: 'Burts Bees - Adopt-a-bee',
                description: '',
                employer: 'Sajak & Farki',
                url:'',
                date :'',
                skills: [],
                photos:[
                    {
                        path: '',
                        url :'',
                        alt: ''
                    }
                ]
            },
            {
                title: 'Hidden Valley Ranch - Tourney of Taste',
                description: '',
                employer: 'Sajak & Farki',
                url:'http://www.facebook.com/HiddenValleyRanchCanada/app_580010588699494',
                date :'',
                skills: [],
                photos:[
                    {
                        path: '',
                        url :'',
                        alt: ''
                    }
                ]
            },
            {
                title: 'Spot the Beaver - M2i',
                description: '',
                employer: 'Sajak & Farki',
                url:'http://www.facebook.com/sobowyyc/app_294993850634387',
                date :'',
                skills: [],
                photos:[
                    {
                        path: '',
                        url :'',
                        alt: ''
                    }
                ]
            },
            {
                title: 'Science Alberta - Hidden Objects',
                description: ''
                employer: 'Sajak & Farki',
                url:'',
                date :'',
                skills: [],
                photos:[
                    {
                        path: '',
                        url :'',
                        alt: ''
                    }
                ]
            },
            {
                title: 'Scott Land & Lease',
                description: '',
                employer: 'BMIR',
                url:'http://www.scottland.ca/',
                date :'',
                skills: [],
                photos:[
                    {
                        path: '',
                        url :'',
                        alt: ''
                    }
                ]
            },
            {
                title: 'Wings of Hope',
                description: '',
                employer: 'BMIR',
                url:'http://www.wings-of-hope.com/',
                date :'',
                skills: [],
                photos:[
                    {
                        path: '',
                        url :'',
                        alt: ''
                    }
                ]
            },
            {
                title: 'Newalta Sustainability Report',
                description: '',
                employer: 'BMIR',
                url:'http://www.newaltasustainability.com/2011/en/',
                date :'',
                skills: [],
                photos:[
                    {
                        path: '',
                        url :'',
                        alt: ''
                    }
                ]
            },
            {
                title: 'Bow Valley Club',
                description: '',
                employer: 'ZGM',
                url:'http://www.bowvalleyclub.com/',
                date :'',
                skills: [],
                photos:[
                    {
                        path: '',
                        url :'',
                        alt: ''
                    }
                ]
            },
            {
                title: 'Riverside Spa',
                description: '',
                employer: 'Freelance',
                url:'http://www.riversidespa.ca/',
                date :'',
                skills: [],
                photos:[
                    {
                        path: '',
                        url :'',
                        alt: ''
                    }
                ]
            },
            {
                title: 'Petrobank',
                description: '',
                employer: 'BMIR',
                url:'http://www.petrobank.com/',
                date :'',
                skills: ['CakePHP (Custom CMS)', 'PHP', 'jQuery'],
                photos:[
                    {
                        path: '',
                        url :'',
                        alt: ''
                    }
                ]
            }


        ],

        /**
         * A big part of a developers hireability centers around there approach to project management, and their process for completing work.
         * This section will be used to talk about process and speciic practices I buy into.  The purpose of this section is to contrast  myself
         * against developers with limited exposure to process. (fresh out of school guys).
         * Description will be a paragraph, with hopefully a link off to a more indepth blog post (in the future).
         */
        practices: [
            {
                name: 'Continuous Integration',
                description: ''
            },
            {
                name: 'Automated Deployments',
                description: ''
            },
        ]
    },

    /**
     * PLAY PAGE
     * This section is where I will be doing a lot of research and development by doing code expirements and open sourcing them.
     * Writing block posts in the opions section that will talk mostly about the current state of the industry and potentially to illustrate
     * competencies.
     * The inspiration section will serve as a personal repository for third party resources and inspiration.
     * Just to show that I respect the community and to illustrate that I'm aware of what's happening.
     */
    play: {

        /**
         * Likely short blog posts
         */
        opinions: [],

        /**
         * Collection of links with a shorty description about each.
         */
        inspiration: [],

        /**
         * Code playground where I will develope and open source proof of concepts.
         * Not sure on how I wanna build this out quite yet.
         */
        expiriments:[]

    }
	
}