import _ from 'lodash';

const englishContent = {
  home: {
    firstRowBtn: 'Work With Us',
    ourPartners: 'Our Partners',
    secondBannerHeading: 'Current Events',
    Events: [{
      'event_name': '',
      'from_date': '',
      'to_date': '',
      'event_location': ''
    }],
    thirdBannerHeading: 'Changemaker’s Program',
    thirdBannerHeadingDescription: 'Change begins at home and we want to be able to bring about grassroot level changes through our program. The Changemaker’s program exclusively focuses on creating academic engagements for C-Hub in the city.',
    thirdBannerSubHeading: 'Who can join the Changemaker’s Program ?',
    thirdBannerBeAChangeButton: 'Be a Change Maker',
    testimonials: {
      heading: 'Testimonials',
      testimonials: [{
        name: 'Janani Krishnan',
        image: './images/home/testimonials/Janani_K.png',
        subHeading: 'Through C-Hub, I got to work with all the stratas of administration and it kindled my creativity.',
        description: 'Getting to work with Chub was a great opportunity on my way, who is aspiring to get into the sector of public administration. Various activities of the Greater Chennai Corporation that I got involved on behalf of the Chub, were catering to the real time needs and the recent covid situation was a major part of it. Through this, I got to work with all the stratas of administration within the system. Chub is a place that kindled my creativity and also enabled me to envision an idealistic and a developed society. It turned to be a platform that challenged my skills and knowledge and led me to aid to the welfare of the citizens of Greater Chennai Corporation, in all possible spheres.'
      },
      {
        name: 'Jeffin Pious J',
        image: './images/home/testimonials/Jeffin_P_J.png',
        subHeading: 'C-hub have always encouraged new ideas to be pitched in. I worked on real life tasks that impacts Chennai. ',
        description: 'I have been part of this ecosystem for 5 months and I got opportunities to learn in various domains. I got a chance to work on various real life tasks like optimising the COVID response of Chennai, solid waste management tools etc. The Greater Chennai Corporation and the C-HUB have always encouraged the feasible ideas pitched in. The fellow interns make the working atmosphere comfortable and they are helpful.  I also got chances to work on the field and gain knowledge from concerned officials.'
      },
      {
        name: 'Madhumeetha B',
        image: './images/home/testimonials/Madhumeetha_B.png',
        subHeading: 'Being a citizen of this wonderful city, I am grateful for having this chance to do some good for my Madras.',
        description: 'I have had the chance to understand from the inside how urban governance works during my time at the Chennai Innovation Hub. I could also work on finding solutions for real time problems through different types of projects. I have been working on different focus areas including Combating Covid -19, setting up the Chennai Innovation Hub, Transport for all etc. Being a citizen of this wonderful city, I am grateful for having this chance to do some good for my Madras. I have had the wonderful opportunity of working with the City Innovation Officer alongside the Pioneering team in facilitating the Innovation ecosystem for my city.'
      },
      {
        name: 'Sandip Prakash B',
        image: './images/home/testimonials/Sandip_P_B.png',
        subHeading: 'C-hub is a key mix of exciting, stimulating and challenging work for inventive leaders.',
        description: 'The key mix of exciting, stimulating and challenging work for inventive leaders. Building systems for COVID-19 war room, the Chennai innovation hub, playing a part in vaccine portal and burial ground management etc to directly impact the city is an exhilarating experience.'
      }
      ]
    }
  },
  aboutUs: {
    firstRowHeader: 'About Us',
    firstRowSubHeade: [
      'Innovate.',
      'Sustain.',
      'Enable.'
    ],
    firstRowContent: '<span>C-Hub (Chennai-Hub)</span><b> is the first of its kind innovation Hub set up by the Greater Chennai Corporation. This is an attempt to foster and promote innovation across different verticals. It harps on the need for Academia, Industries and GCC to work together to encourage good and innovative ideas.</b><br><br>A multidisciplinary team will be put together in order to approach problems through a holistic lens. The innovation hub will host stakeholders from different verticals to be part of this platform. It is an inclusive platform which will attempt to solve social, environmental and urban problems in the city together with its citizens.<br><br>A new paradigm is required that essentially brings urban stakeholders to collectively provide the know-how to urban challenges ensuring their expertise and perspective is reflected in urban solutioning for the future. A coming together of these critical stakeholders, termed as the Quadruple Helix, can aid in active flow of ideas and information to create both value and reduce risks, in essence, creating an ‘innovation value-network’ that spills benefits across the urban ecosystem gearing our cities for the future.<br>',
    firstRowParagraph: [
      'C-Hub (Chennai-Hub) is the first of its kind innovation Hub set up by the Greater Chennai Corporation. This is an attempt to foster and promote innovation across different verticals. It harps on the need for Academia, Industries and GCC to work together to encourage good and innovative ideas.',
      'A multidisciplinary team will be put together in order to approach problems through a holistic lens. The innovation hub will host stakeholders from different verticals to be part of this platform. It is an inclusive platform which will attempt to solve social, environmental and urban problems in the city together with its citizens.',
      'A new paradigm is required that essentially brings urban stakeholders to collectively provide the know-how to urban challenges ensuring their expertise and perspective is reflected in urban solutioning for the future. A coming together of these critical stakeholders, termed as the Quadruple Helix, can aid in active flow of ideas and information to create both value and reduce risks, in essence, creating an ‘innovation value-network’ that spills benefits across the urban ecosystem gearing our cities for the future.'
    ],
    secondRowHeader: 'Core Functions',
    secondRowData: [
      'Enable and sustain the discovery and deployment of innovation to tackle urban challenges',
      'Increasing economic growth',
      'Enhance quality of life and ensure sustainability in processes'
    ],
    thirdRowHeader: 'Team',
    thirdRowData: [
      'Chief Innovation Officer',
      'Advisory Committee',
      'Educational Institutions',
      'The Greater Chennai Corporation'
    ],
    thirdRowImage1: 'style = width: 160px; height: 160px;',
    thirdRowImage2: '',
    thirdRowImage3: '',
    thirdRowImage4: '',
    fourthRowHeader: 'Mission',
    fourthRowData: [
      { content: 'A cross-boundary collaborative regime instituted to decide on innovation pathways.', image: './images/aboutUs/boundary.png' },
      { content: 'Building partnerships between the quadruple helix (QH) of stakeholders into an ecosystem for know-how solutioning.', image: './images/aboutUs/partnership.png' }
    ],
    fifthRowHeader: 'Vision',
    fifthRowData: [
      { content: 'To become the largest think tank in the Country in the next three years.', image: './images/aboutUs/country.png' },
      { content: 'To successfully establish Proof of concept by piloting in Chennai.', image: './images/aboutUs/success.png' },
      { content: 'To create a working template that can be adapted by other cities in Tamil Nadu.', image: './images/aboutUs/template.png' },
      { content: 'To be a platform for intersectionality of academics, entrepreneurship and the Chennai Corporation.', image: './images/aboutUs/platform.png' }
    ],
    sixthRowHeader: 'Values',
    sixthRowData: [
      { content: 'Collaboration', image: './images/aboutUs/collaboration.png' },
      { content: 'Fairness', image: './images/aboutUs/fair-trade.png' },
      { content: 'Learning', image: './images/aboutUs/knowledge.png' },
      { content: 'Openness', image: './images/aboutUs/businessmen.png' },
      { content: 'Excellence', image: './images/aboutUs/excellence.png' },
      { content: 'Efficient', image: './images/aboutUs/time-management.png' },
      { content: 'Challenge Status Quo', image: './images/aboutUs/flag.png' },
    ],
    team: {
      leadershipHeader: 'Leadership Team',
      commissioner: 'Gagandeep Singh Bedi, I.A.S',
      commDesignation: 'Principal Secretary / Commissioner /Special Officer',
      deptCommissioner: 'M.S.Prasanth, I.A.S',
      dcDesignation: 'Deputy Commissioner (Works)',
      ceo: 'Mr.Raj Cherubal',
      ceoDesignation: 'CEO, Chennai Smart City Limited',
      coreTeamHeader: 'Core Team',
      cio: 'M.P. Azhagu Pandia Raja',
      cioDesignation: 'City Innovation Officer',
      cdo: 'Senthilkumaran Murugesan',
      cdoDesignation: 'City Data Officer'
    }
  },
  subNav: {
    home: 'Home',
    aboutUs: 'About Us',
    council: 'Council',
    workWithUs: 'Work with Us',
    events: 'Events',
    projects: 'Projects',
    faq: 'FAQ',
    contactUs: 'Contact Us'
  },
  council: {
    firstRowHeader: 'Council',
    firstRowSubHeader: 'Experience breeds Perspectives',
    firstRowDescription: 'C-hub wants to create teams with experienced individuals who have a specialization in the chosen verticals. The Advisory councils will constitute a team of experts from different verticals. C-Hub will support, empower, foster and advance ideas to next level.',
    secondRowHeader: 'The Chennai Innovation Hub will work on various verticals like',
    thirdRowHeader: 'Join Advisory Council',
    thirdRowDescription: 'Do you consider yourself an industry leader? Would you like to be part of the change? Have you always wanted to be at the crux of the changemaking process? Join the Advisory council.',
    thirdRowSubHeader: 'Council’s Responsibilities',
    thirdRowData: [
      'Formulate the structure and the annual plan for the respective verticals.',
      'Make connections and network across verticals to keep up with trends.',
      'Mentoring individuals / Start-ups throughout the evolution of the idea.',
      'Co-create solutions : Provide/ Facilitate resources to aid in problem solving.',
      'Identifying ideas and Capacitu building.',
      'Recommend specific solutions based on the subject matter.'
    ],
    fourthRowHeader: 'How to Apply ?',
    fourthRowSubHeader1: 'Submit your Application',
    fourthRowDescription1: 'Interested Individuals can write to the C-hub team at “ chub.gcc@gmail.com “with the subject line “ Interested to apply for the ( Name of the vertical) advisory council ”.',
    fourthRowSubHeader2: 'Get Shortlisted',
    fourthRowDescription2: 'Shortlisted candidates will be invited to share their ideas with the C-hub Leadership team',
    fourthRowSubHeader3: 'Join the Council',
    fourthRowDescription3: 'Selected candidates will be introduced to the rest of their peers in order to formulate the structure and approach of their verticals',
  },
  workWithUs: {
    bannerTitle: 'Work with Us',
    bannerSubTitle: 'Collaborate with Chennai Innovation Hub and get an opportunity to work on various projects across verticals.',
    mailContent: 'Mail us at',
    mailId: 'chub.gcc@gmail.com',
    categories: [
      {
        title: 'Council',
        image: '',
        description: 'Change begins at home and we want to be able to bring about grassroot level changes through our program. Academic entities must very much be a part of the innovation conversation and it is for this reason, we wanted to create an exclusive program where we encourage our students to integrate this city’s future with their own.<br><br>The Changemaker’s program exclusively focuses on creating academic engagements for C-Hub in the city. This program will focus on establishing and building connections with the colleges in Chennai. This wing will be open to collaborate with colleges to foster innovation at grassroot level. Final year students pursuing their Bachelor’s can use existing problem statements put out by the Greater Chennai Corporation for their final year projects. The data sets and appropriate resources will be available for the PhD students to carry out their research along with the Greater Chennai Corporation. The Changemaker’s program also invites students enrolled in NSS/NCC programs to participate in social work listed as part of their curriculum.',
        subTitle: 'Want to be a change maker or know one? <br>It is time to take action!',
        participants: [
          {
            participantTitle: 'Students',
            participantImage: './images/workWithUs/student.png',
            steps: [
              'Student who wants to join include your name, age, current education experience and your motivation to join the program and Write to us with the subject line <span>"Interested in the Changemaker Program"</span>',
              'Final year Bachelor’s student who would like to work with us for your thesis can write to is with the subject line <span>"Interested to carry out Bachelor thesis project with GCC"</span>',
              'PhD students who want to collaborate on your research can write to us with the subject line <span>"Interested to work on my PhD thesis with GCC"</span>'
            ]
          },
          {
            participantTitle: 'Colleges and Universities',
            participantImage: './images/workWithUs/institute.png',
            steps: [
              'Schools/Universities who are interested in setting up innovation hub in their campus can write to us with the subject line <span>"Interested to set up an Innovation Hub in (school/university’s name)"</span>',
              'For any other relevant enquiries or ideas for collaboration write to us with the subject line <span>"Interested to Collaborate with GCC through the Changemaker’s program"</span>'
            ]
          }
        ]
      },
      {
        title: 'Changemaker’s Program',
        image: './images/workWithUs/changeMaker.png',
        description: 'Change begins at home and we want to be able to bring about grassroot level changes through our program. Academic entities must very much be a part of the innovation conversation and it is for this reason, we wanted to create an exclusive program where we encourage our students to integrate this city’s future with their own.<br><br>The Changemaker’s program exclusively focuses on creating academic engagements for C-Hub in the city. This program will focus on establishing and building connections with the colleges in Chennai. This wing will be open to collaborate with colleges to foster innovation at grassroot level. Final year students pursuing their Bachelor’s can use existing problem statements put out by the Greater Chennai Corporation for their final year projects. The data sets and appropriate resources will be available for the PhD students to carry out their research along with the Greater Chennai Corporation. The Changemaker’s program also invites students enrolled in NSS/NCC programs to participate in social work listed as part of their curriculum.',
        subTitle: 'Want to be a change maker or know one? <br>It is time to take action!',
        participants: [
          {
            participantTitle: 'Volunteers',
            participantImage: '',
            steps: [
              'Student who wants to join include your name, age, current education experience and your motivation to join the program and Write to us with the subject line <span>"Interested in the Changemaker Program"</span>',
              'Final year Bachelor’s student who would like to work with us for your thesis can write to is with the subject line <span>"Interested to carry out Bachelor thesis project with GCC"</span>',
              'PhD students who want to collaborate on your research can write to us with the subject line <span>"Interested to work on my PhD thesis with GCC"</span>'
            ]
          },
          {
            participantTitle: 'Startup',
            participantImage: '',
            steps: [
              'Student who wants to join include your name, age, current education experience and your motivation to join the program and Write to us with the subject line <span>"Interested in the Changemaker Program"</span>',
              'Final year Bachelor’s student who would like to work with us for your thesis can write to is with the subject line <span>"Interested to carry out Bachelor thesis project with GCC"</span>',
              'PhD students who want to collaborate on your research can write to us with the subject line <span>"Interested to work on my PhD thesis with GCC"</span>'
            ]
          },
          {
            participantTitle: 'Students',
            participantImage: './images/workWithUs/student.png',
            steps: [
              'Student who wants to join include your name, age, current education experience and your motivation to join the program and Write to us with the subject line <span>"Interested in the Changemaker Program"</span>',
              'Final year Bachelor’s student who would like to work with us for your thesis can write to is with the subject line <span>"Interested to carry out Bachelor thesis project with GCC"</span>',
              'PhD students who want to collaborate on your research can write to us with the subject line <span>"Interested to work on my PhD thesis with GCC"</span>'
            ]
          },
          {
            participantTitle: 'Colleges and Universities',
            participantImage: './images/workWithUs/institute.png',
            steps: [
              'Schools/Universities who are interested in setting up innovation hub in their campus can write to us with the subject line <span>"Interested to set up an Innovation Hub in (school/university’s name)"</span>',
              'For any other relevant enquiries or ideas for collaboration write to us with the subject line <span>"Interested to Collaborate with GCC through the Changemaker’s program"</span>'
            ]
          }
        ]
      }, {
        title: 'Hackathons',
        image: './images/workWithUs/hackathon.png',
        description: 'Hackathons are the best way to bring together brains and brawns in helping a community solve problems that matter. The problem statements will be formulated by the leadership team at the C-hub. The participating teams will have the opportunity to also pitch their ideas to other investors in networking events conducted by the Greater Chennai Corporation. The winning ideas that are relevant and implementable by the GCC will be absorbed and the teams are welcome to work with the Corporation to realize these ideas. This platform would be a great way for the citizens and the government to work together in solving real time problems across the said verticals. This event would promote collaboration and will be a way towards looking at bringing different stakeholders to approach any problem through a holistic lens.',
        subTitle: 'How to Join ?',
        participants: [
          {
            steps: [
              'Interested to participate in our upcoming hackathon?  <a href="https://www.google.com/" target="_blank">Register <img alt="Register" src="./images/workWithUs/register.png"></a>',
              'Interested in co-hosting a Hackthon with GCC? Write to us with the Subject line <span>"Interested to Co-host Hackathon with GCC"</span> ',
              'Are you interested to formulate problem statements with the GCC? Write to us with the Subject line <span>"Interested to work with GCC for Hackathon Problem statements"</span>',
              'For any other partnerships: Please write to us with the subject line <span>"Partnership:Hackathon"</span> ',
            ]
          }
        ]
      }, {
        title: 'Networking Events',
        image: './images/workWithUs/networking.png',
        description: 'The power of a community is deciphered through the network its established. This crisis and the last ones were good examples to explain how we have always showed up as a city for one another. It is time we make this networking and creating meaningful connections a habit. The Greater Chennai Corporation will organize Networking events which will help all the stakeholders in the ecosystem make meaningful connections. This will foster collaborations, allow all of us to share our ideas and make improvements together.',
        subTitle: 'How to Join ?',
        participants: [
          {
            steps: [
              'Do you want to host a Networking event at your venue? Write to us with subject line as <span>"Partnerships: Networking Event"</span>',
              'Do you want to curate a networking event with us? Write to us with subject line as <span>"Interested to Curate Networking event with GCC"</span>'
            ]
          }
        ]
      }, {
        title: 'Research & Development',
        image: './images/workWithUs/research.png',
        description: 'Research and development is an important activity that allows any entity to continuously iterate and make improvements. This horizontal collaborates on research and development with institutions specializing in science, technology and management. The Greater Chennai Corporation can support partners in various capacities right from sharing data, resources relevant for the said research. Institutions will be encouraged to approach the Greater Chennai Corporation for partnerships.',
        subTitle: 'How to Join ?',
        participants: [
          {
            steps: [
              'Write to us to become a Partner with subject line <span>"Partnerships: Research and Development"</span>'
            ]
          }
        ]
      }, {
        title: 'Internships & Fellowships',
        image: './images/workWithUs/internship.png',
        description: 'The greater chennai Corporation invites students to apply for internships and fellowships at the C-hub. The GCC offers both paid and unpaid internships based on the profiles of the students. Students in their final year of College with an internship requirement can choose to work with the GCC on the ongoing projects. Interns will be engaged in real time projects for them in order to create an experiential internship. Interns are welcome to work with any of the departments working out of the GCC.Depending on the experience of the individuals, an appropriate stipend can be arranged.This experience will allow interns to understand real time working of the system and support them to be part of the system. This experience will also open up a network and new avenues that can be explored.',
        subTitle: 'How to Join ?',
        participants: [
          {
            steps: [
              'Want to intern with us? Write to us with your experience and interests along with your resume with the Subject line <span>"Interested to Intern with GCC"</span>'
            ]
          }
        ]
      }
    ],
  },
  projects: {
    firstRowHeaders: 'Projects',
    firstRowDescription: 'Get to know about all the projects that have been developed in collaboration with Chennai Innovation Hub.',
    secondRowContent: {
      completed: [
        { title: 'GCC Corona Monitoring Application', host: 'Greater Chennai Corporation', image: './images/projects/corona.png' },
        { title: 'Madras Waste Exchange', host: 'Greater Chennai Corporation', image: './images/projects/default_image.png' },
        { title: 'Home Quarantine and Isolation Management System (HQIMS)', host: 'Greater Chennai Corporation', image: './images/projects/default_image.png' },
        { title: 'GCC Revenue League', host: 'Greater Chennai Corporation', image: './images/projects/default_image.png' },
        { title: 'Covid Tele Counselling Process Optimization', host: 'Greater Chennai Corporation', image: './images/projects/covid_vaccination.jpg' }
      ],
      ongoing: [
        { title: 'Shelter for Urban Incubators', host: 'Greater Chennai Corporation', image: './images/projects/shelter.png' },
        { title: 'Burial Ground Management System', host: 'Greater Chennai Corporation', image: './images/projects/default_image.png' },
      ]
    },
    thirdRowHeader: 'Interested in Collaborating with C-Hub ?',
    thirdRowButton: 'Work With Us'
  },
  faq: {
    firstRowHeader: 'Frequently Asked Questions',
    faqSplit1QuestionsAndAnswers: [
      {
        question: 'What can we offer ?',
        answer: 'Chennai Innovation Hub offers various opportunities like',
        answerPoints: [
          'Platform to pitch and mentor your idea.',
          'Enable real time data sharing.',
          'Provide existing society to work and implement the project.',
          'Partnerships and outreach for ecosystem enablement.',
          'Capacity enhancement and knowledge services.',
          'Change management and thought leadership.',
          'Advisory on innovation specialisation & responsive regulation for different verticals.',
          'City will act as a living laboratory to build POC.'
        ],
        readMore: 'google.com'
      },
      {
        question: 'Who are we?',
        answer: 'We are innovation enablers, accelerators for new ideas/start-ups and enhance incubation who are focussed to solve real world problems through a holistic cross disciplinary approach.',
      },
      {
        question: 'Why c-hub?',
        answer: 'As a part of the greater chennai corporation we have access to the real time data. If the project aligns with the corporation, it can even absorb it to make it a chennai corporation entity. Our council of advisory bodies consists of world leaders in every field. We support and collaborate and aid any individual determined to solve a societal problem to ensure a win-win situation. We provide a networking platform to pitch. Also, C-Hub can build & test proof of concept and connect you with potential incubators and investors.',
      },
      {
        question: 'Why do I need to be part of this?',
        answer: 'Being part of the c-hub enables you to deal with problems at the grassroot level. Besides, it helps you to make a difference in society with infrastructure, dataset, office access.',

      },
      {
        question: 'How can I be a part of this?',
        answer: 'As a student you can be an intern at the C-Hub. If you’re a PhD scholar working in solving the corporation problem to impact people, you can collaborate with GCC to get access and data for accurate analysis. As a startup founder, C-hub provides a platform to pilot your project, build PoC and connect you with potential incubators and investors. As a subject matter expert, you can work hand in hand with dignitaries as a pillar of support to the corporation to solve and achieve sustainable development goals.',
      },
      {
        question: 'Can I intern part-time /remotely?',
        answer: 'No, this is not in place yet.',
      },
      {
        question: 'I’m a part of an educational institution. How can we contribute?',
        answer: 'We are open to collaboration with young minds. Please mail us at chub.gcc@gmail.com to know more.',
      },
      {
        question: 'How will the educational institution benefit?',
        answer: 'We will sign a MoU with the institutions that may lead to future collaborations and research works.',
      }
    ],
    faqSplit2QuestionsAndAnswers: [
      {
        question: 'Will I get a certificate post completion of my internship or workshop or project?',
        answer: 'Yes, you definitely would get a certificate.',
      },
      {
        question: 'How can I get funding from the GCC?',
        answer: 'Funding is decided on a case by case basis at the discretion of the GCC and advisory council. If the student or professional is working on problems that the corporation is focussing on, the GCC will consider funding and collaboration. Please mail chub.gcc@gmail.com for further details.',
      },
      {
        question: 'Who is a part of the advisory council?',
        answer: 'Advisory council consists of professionals and experts from various fields. For eg the technical advisory council consists of market leaders of subject matter expert from the technology space who would carry decades of experience.',
      },
      {
        question: 'Can I be a part of the advisory council?',
        answer: 'Yes. We request you to send your resume and an interest statement (500 words max) on why you should be selected to chub.gcc@gmail.com. It will be carefully reviewed by our expert committee before intimating you about the decision. The council is on pro bono basis.',
        readMore: 'google.com'

      },
      {
        question: 'I’m a working professional. Can I still be a part of the advisory council?',
        answer: 'Yes you can. In fact, we require 3hours per month of your time and expertise for our projects on a pro bono basis.',
      },
      {
        question: 'What is the minimum qualification to be a part of the C-hub?',
        answer: 'There is absolutely no minimum qualification. Are you someone who looks to challenge the status quo? If yes, we need you.',
      },
      {
        question: 'I haven’t been a part of innovation but want to gain exposure.',
        answer: 'We are a group of like minded individuals from different verticals looking to redefine the world. You can be a part of the workshops, events, hackathons and career fairs. For further information mail us chub.gcc@gmail.com.',
      },
      {
        question: 'Where are you located?',
        answer: 'We are located on the second floor of Ripon Building, Greater Chennai Corporation.',
      }
    ]
  },
  events: {
    firstRowHeader: 'Events',
    firstEventData: [
      {
        name: 'Hackathon',
        header: 'Smart City Hackathon',
        image: './images/events/smart-city-hackathon.png',
        description: 'The GCC Hackathon is an initiative by the Greater Chennai Corporation(GCC) and Chennai Smart City Limited in finding solutions for Urban problems for the City of Chennai together with its citizens. The Chennai Innovation Hub (CHUB)  will conduct Hackthons in various themes like Education, Health and Wellness, Urban Planning, Entrepreneurship, Innovation, Governance, City Beautification, Accessibility & Inclusivity, Heritage & Arts, Transport etc. These Hackathons are open to everyone and winning ideas  have a chance of getting adapted into solutions by the Greater Chennai Corporation. These hackathons are a great way to network and co create meaningful solutions for Namma Madras. Watch out this space for updates. For further queries mail us at “chub.gcc@gmail.com” .',
        eventDateTeamSizeText: 'Team Size',
        eventDateTeanSize: 'To be Announced Shortly',
        eventDateRegistrationFeeText: 'Registration',
        eventDateRegistrationFee: 'Link to be Updated Shortly',
        eventDateDateText: 'Date',
        eventDateDate: 'To be Announced Shortly',
        eventDateTimeText: 'Time',
        eventDateTime: 'To be Announced Shortly',
        eventDateLocationText: 'Location',
        eventDateLocation: 'Information Center, Egmore, Chennai - 600002'
      }
    ],
    firstRowButton: 'Contact Us'
  },
  footer: {
    firstColumnHeader: 'Chennai Innovation Hub',
    firstColumnAddress: [
      'No 53, Raja Muthiah Rd,',
      ' Kannappar Thidal, Periyamet,',
      ' Chennai, Tamil Nadu 600003'
    ],
    secondColumnHeader: 'Helpful Links',
    secondColumnFirstRow: 'Sitemap',
    secondColumnSecondRow: 'Disclaimer',
    secondColumnThirdRow: 'Privacy Policy',
    secondColumnFourthRow: 'Contact Us'
  },
  disclaimer:[
    'Chennai Innovation Hub (C-HUB) provides information and other services through its website as a service to those interested in C-HUB and/or Chennai Innovation Hub. Attempt is made to provide comprehensive access to content and services related to a wide variety of subjects of interest to visitors. Continuous efforts are made to add new content and services to the site.',
    'While every effort is made to ensure that the information provided is accurate, C-HUB does not guarantee the accuracy, authenticity and completeness of the information and services provided. The content is provided on "as is" basis, as a general guidance to users. The visitors to the website are assumed to access the content and services at their own will and not hold C-HUB responsible for any liability arising out of the use of the content & services, explicit or implicit, provided in the website.'
  ],
  privacyPolicy:[
    'This website is designed, developed and maintained by <<MRC>>. for the Chennai Innovation Hub (C-HUB). These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.',
    'The Information posted on this website could include hypertext links to external websites. The Chennai Innovation Hub (C-HUB) is providing these links and pointers solely for your information and convenience. When you select a link to an outside website, you are leaving "Chennai Innovation Hub (C-HUB)" site and are subject to the privacy and security policies of the owners / sponsors of the outside website.'
  ],
  shared: {
    corporationTitle: 'Greater Chennai Corporation',
    comingSoon: 'Coming Soon'
  }
};

const tamilContent = {
  home: {
    firstRowBtn: 'எங்களுடன் வேலை செய்யுங்கள்',
    ourPartners: 'Our Partners',
    secondBannerHeading: 'தற்போதைய நிகழ்வுகள்',
    Events: [{
      'event_name': '',
      'from_date': '',
      'to_date': '',
      'event_location': ''
    }],
    thirdBannerHeading: 'ேஞ்ச்மேக்கரின் திட்டம்',
    thirdBannerHeadingDescription: 'ாற்றம் வீட்டிலேயே தொடங்குகிறது, மேலும் எங்கள் திட்டத்தின் மூலம் அடிமட்ட அளவிலான மாற்றங்களைக் கொண்டு வர விரும்புகிறோம். சேஞ்ச்மேக்கரின் திட்டம் நகரத்தில் சி-ஹப்பிற்கான கல்வி ஈடுபாடுகளை உருவாக்குவதில் மட்டுமே கவனம் செலுத்துகிறது.',
    thirdBannerSubHeading: 'சேஞ்ச்மேக்கரின் திட்டத்தில் யார் சேரலாம்?',
    thirdBannerBeAChangeButton: 'ஒரு மாற்றத்தை உருவாக்குபவராக இருங்கள்',
    testimonials: {
      heading: 'Testimonials',
      testimonials: [{
        name: 'Janani Krishnan',
        subHeading: 'Through C-Hub, I got to work with all the stratas of administration and it kindled my creativity.',
        description: 'Getting to work with Chub was a great opportunity on my way, who is aspiring to get into the sector of public administration. Various activities of the Greater Chennai Corporation that I got involved on behalf of the Chub, were catering to the real time needs and the recent covid situation was a major part of it. Through this, I got to work with all the stratas of administration within the system. Chub is a place that kindled my creativity and also enabled me to envision an idealistic and a developed society. It turned to be a platform that challenged my skills and knowledge and led me to aid to the welfare of the citizens of Greater Chennai Corporation, in all possible spheres.'
      },
      {
        name: 'Jeffin Pious J',
        subHeading: 'C-hub have always encouraged new ideas to be pitched in. I worked on real life tasks that impacts Chennai. ',
        description: 'I have been part of this ecosystem for 5 months and I got opportunities to learn in various domains. I got a chance to work on various real life tasks like optimising the COVID response of Chennai, solid waste management tools etc. The Greater Chennai Corporation and the C-HUB have always encouraged the feasible ideas pitched in. The fellow interns make the working atmosphere comfortable and they are helpful.  I also got chances to work on the field and gain knowledge from concerned officials.'
      },
      {
        name: 'Madhumeetha B',
        subHeading: 'Being a citizen of this wonderful city, I am grateful for having this chance to do some good for my Madras.',
        description: 'I have had the chance to understand from the inside how urban governance works during my time at the Chennai Innovation Hub. I could also work on finding solutions for real time problems through different types of projects. I have been working on different focus areas including Combating Covid -19, setting up the Chennai Innovation Hub, Transport for all etc. Being a citizen of this wonderful city, I am grateful for having this chance to do some good for my Madras. I have had the wonderful opportunity of working with the City Innovation Officer alongside the Pioneering team in facilitating the Innovation ecosystem for my city.'
      },
      {
        name: 'Sandip Prakash B',
        subHeading: 'C-hub is a key mix of exciting, stimulating and challenging work for inventive leaders.',
        description: 'The key mix of exciting, stimulating and challenging work for inventive leaders. Building systems for COVID-19 war room, the Chennai innovation hub, playing a part in vaccine portal and burial ground management etc to directly impact the city is an exhilarating experience.'
      }
      ]
    }
  },
  aboutUs: {
    firstRowHeader: 'எங்களை பற்றி',
    firstRowSubHeade: [
      'புதுமை..',
      'நிலைத்திருங்கள்.',
      'இயக்கு.'
    ],
    firstRowContent: '<span>C-Hub (Chennai-Hub)</span><b> கிரேட்டர் சென்னை கார்ப்பரேஷன் அமைத்த அதன் முதல் கண்டுபிடிப்பு மையமாகும். வெவ்வேறு செங்குத்துகளில் புதுமைகளை வளர்ப்பதற்கும் ஊக்குவிப்பதற்கும் இது ஒரு முயற்சி. நல்ல மற்றும் புதுமையான யோசனைகளை ஊக்குவிக்க அகாடெமியா, இண்டஸ்ட்ரீஸ் மற்றும் ஜி.சி.சி ஆகியவை ஒன்றிணைந்து செயல்பட வேண்டியதன் அவசியத்தை இது உணர்த்துகிறது. </ B> <br> <br> ஒரு முழுமையான லென்ஸ் மூலம் சிக்கல்களை அணுகுவதற்காக ஒரு பல்வகைக் குழு ஒன்று சேர்க்கப்படும். கண்டுபிடிப்பு மையம் இந்த தளத்தின் ஒரு பகுதியாக வெவ்வேறு செங்குத்துகளிலிருந்து பங்குதாரர்களை வழங்கும். இது ஒரு உள்ளடக்கிய தளமாகும், இது நகரத்தில் உள்ள சமூக, சுற்றுச்சூழல் மற்றும் நகர்ப்புற பிரச்சினைகளை அதன் குடிமக்களுடன் சேர்ந்து தீர்க்க முயற்சிக்கும். <br> <br> ஒரு புதிய முன்னுதாரணம் தேவைப்படுகிறது, இது நகர்ப்புற பங்குதாரர்களை கூட்டாக நகர்ப்புற சவால்களுக்கு எவ்வாறு அறிவை வழங்க வேண்டும்? அவர்களின் நிபுணத்துவம் மற்றும் முன்னோக்கை உறுதிப்படுத்துவது எதிர்காலத்திற்கான நகர்ப்புற தீர்வுகளில் பிரதிபலிக்கிறது. நான்கு முக்கியமான ஹெலிக்ஸ் என அழைக்கப்படும் இந்த முக்கியமான பங்குதாரர்களின் ஒன்றிணைவு, மதிப்பு மற்றும் அபாயங்களை இரண்டையும் உருவாக்குவதற்கான யோசனைகள் மற்றும் தகவல்களின் செயலில் ஓட்டத்திற்கு உதவக்கூடும், சாராம்சத்தில், நகர்ப்புற சுற்றுச்சூழல் அமைப்பு முழுவதும் நன்மைகளை பரப்பும் ஒரு புதுமை மதிப்பு-வலையமைப்பை உருவாக்குகிறது. எதிர்காலத்திற்கான எங்கள் நகரங்கள்.<br>',
    firstRowParagraph: [
      'C-Hub (Chennai-Hub) கிரேட்டர் சென்னை கார்ப்பரேஷன் அமைத்த அதன் முதல் கண்டுபிடிப்பு மையமாகும். வெவ்வேறு செங்குத்துகளில் புதுமைகளை வளர்ப்பதற்கும் ஊக்குவிப்பதற்கும் இது ஒரு முயற்சி. நல்ல மற்றும் புதுமையான யோசனைகளை ஊக்குவிக்க அகாடெமியா, இண்டஸ்ட்ரீஸ் மற்றும் ஜி.சி.சி ஆகியவை இணைந்து செயல்பட வேண்டியதன் அவசியத்தை இது விளக்குகிறது.',
      'ஒரு முழுமையான லென்ஸ் மூலம் சிக்கல்களை அணுகுவதற்காக ஒரு பல்வகைக் குழு ஒன்று சேர்க்கப்படும். கண்டுபிடிப்பு மையம் இந்த தளத்தின் ஒரு பகுதியாக வெவ்வேறு செங்குத்துகளிலிருந்து பங்குதாரர்களை வழங்கும். இது ஒரு உள்ளடக்கிய தளமாகும், இது நகரத்தில் உள்ள சமூக, சுற்றுச்சூழல் மற்றும் நகர்ப்புற பிரச்சினைகளை அதன் குடிமக்களுடன் சேர்ந்து தீர்க்க முயற்சிக்கும்.',
      'ஒரு புதிய முன்னுதாரணம் தேவைப்படுகிறது, இது நகர்ப்புற பங்குதாரர்களுக்கு அவர்களின் நிபுணத்துவத்தையும் முன்னோக்கையும் உறுதிசெய்வதற்கான நகர்ப்புற சவால்களுக்கான அறிவை கூட்டாக வழங்குவதற்காக எதிர்காலத்தில் நகர்ப்புற தீர்வுகளில் பிரதிபலிக்கிறது. நான்கு முக்கியமான ஹெலிக்ஸ் என அழைக்கப்படும் இந்த முக்கியமான பங்குதாரர்களின் ஒன்றிணைவு, மதிப்பு மற்றும் அபாயங்களை இரண்டையும் உருவாக்குவதற்கான யோசனைகள் மற்றும் தகவல்களின் செயலில் ஓட்டத்திற்கு உதவக்கூடும், சாராம்சத்தில், நகர்ப்புற சுற்றுச்சூழல் அமைப்பு முழுவதும் நன்மைகளை பரப்பும் ஒரு  "ுதுமை மதிப்பு-வலையமைப்பை" உருவாக்குகிறது. எதிர்காலத்திற்கான எங்கள் நகரங்கள்.'
    ],
    secondRowHeader: 'முக்கிய செயல்பாடுகள்',
    secondRowData: [
      'நகர்ப்புற சவால்களைச் சமாளிக்க புதுமைகளின் கண்டுபிடிப்பு மற்றும் வரிசைப்படுத்தலை இயக்கவும் பராமரிக்கவும்',
      'பொருளாதார வளர்ச்சியை அதிகரித்தல்',
      'வாழ்க்கைத் தரத்தை மேம்படுத்துதல் மற்றும் செயல்முறைகளில் நீடித்த தன்மையை உறுதி செய்தல்'
    ],
    thirdRowHeader: 'அணி',
    thirdRowData: [
      'தலைமை கண்டுபிடிப்பு அதிகாரி',
      'ஆலோசனை குழு',
      'கல்வி நிறுவனங்கள்',
      'கிரேட்டர் சென்னை கார்ப்பரேஷன்'
    ],
    thirdRowImage1: 'style = width: 160px; height: 160px;',
    thirdRowImage2: '',
    thirdRowImage3: '',
    thirdRowImage4: '',
    fourthRowHeader: 'மிஷன்',
    fourthRowData: [
      { content: 'கண்டுபிடிப்பு பாதைகளை தீர்மானிக்க ஒரு குறுக்கு எல்லை கூட்டு ஆட்சி நிறுவப்பட்டது.', image: './images/aboutUs/boundary.png' },
      { content: 'அறிவை எவ்வாறு தீர்ப்பதற்கான ஒரு சுற்றுச்சூழல் அமைப்பில் பங்குதாரர்களின் நான்கு மடங்கு ஹெலிக்ஸ் (கியூஎச்) இடையே கூட்டாண்மைகளை உருவாக்குதல்.', image: './images/aboutUs/partnership.png' }
    ],
    fifthRowHeader: 'பார்வை',
    fifthRowData: [
      { content: 'அடுத்த மூன்று ஆண்டுகளில் நாட்டின் மிகப்பெரிய சிந்தனைக் குழுவாக மாறுவது.', image: './images/aboutUs/country.png' },
      { content: 'சென்னையில் பைலட் செய்வதன் மூலம் கருத்து ஆதாரத்தை வெற்றிகரமாக நிறுவுதல்.', image: './images/aboutUs/success.png' },
      { content: 'தமிழ்நாட்டின் பிற நகரங்களால் மாற்றியமைக்கக்கூடிய ஒரு வேலை வார்ப்புருவை உருவாக்குதல்.', image: './images/aboutUs/template.png' },
      { content: 'கல்வியாளர்கள், தொழில்முனைவோர் மற்றும் சென்னை கார்ப்பரேஷன் ஆகியவற்றின் குறுக்குவெட்டுக்கான தளமாக இருக்க வேண்டும்.', image: './images/aboutUs/platform.png' }
    ],
    sixthRowHeader: 'மதிப்புகள்',
    sixthRowData: [
      { content: 'இணைந்து', image: './images/aboutUs/collaboration.png' },
      { content: 'நேர்மை', image: './images/aboutUs/fair-trade.png' },
      { content: 'கற்றல்', image: './images/aboutUs/knowledge.png' },
      { content: 'திறந்த தன்மை', image: './images/aboutUs/businessmen.png' },
      { content: 'சிறப்பானது', image: './images/aboutUs/excellence.png' },
      { content: 'திறமையானது', image: './images/aboutUs/time-management.png' },
      { content: 'சவால் நிலை', image: './images/aboutUs/flag.png' },
    ],
    team: {
      leadershipHeader: 'Leadership Team',
      commissioner: 'Gagandeep Singh Bedi, I.A.S',
      commDesignation: 'Principal Secretary / Commissioner /Special Officer',
      deptCommissioner: 'M.S.Prasanth, I.A.S',
      dcDesignation: 'Deputy Commissioner (Works)',
      ceo: 'Mr.Raj Cherubal',
      ceoDesignation: 'CEO, Chennai Smart City Limited',
      coreTeamHeader: 'Core Team',
      cio: 'M.P. Azhagu Pandia Raja',
      cioDesignation: 'City Innovation Officer',
      cdo: 'Senthilkumaran Murugesan',
      cdoDesignation: 'City Data Officer'
    }
  },
  subNav: {
    home: 'முகப்பு',
    aboutUs: 'சென்னை மாநகராட்சியைப் பற்றி',
    council: 'மன்றம்',
    workWithUs: 'எங்களுடன் வேலை செய்யுங்கள்',
    events: 'நிகழ்வுகள்',
    projects: 'திட்டங்கள்',
    faq: 'FAQ',
    contactUs: 'எங்களை தொடர்பு கொள்ள'
  },
  council: {
    firstRowHeader: 'சபை',
    firstRowSubHeader: 'அனுபவம் இனப்பெருக்கம்',
    firstRowDescription: 'தேர்ந்தெடுக்கப்பட்ட செங்குத்துகளில் நிபுணத்துவம் பெற்ற அனுபவம் வாய்ந்த நபர்களுடன் குழுக்களை உருவாக்க சி-ஹப் விரும்புகிறது. ஆலோசனைக் குழுக்கள் வெவ்வேறு செங்குத்துகளைச் சேர்ந்த நிபுணர்களின் குழுவை அமைக்கும். சி-ஹப் அடுத்த நிலைக்கு யோசனைகளை ஆதரிக்கும், அதிகாரம் அளிக்கும், வளர்க்கும் மற்றும் முன்னேறும்.',
    secondRowHeader: 'சென்னை கண்டுபிடிப்பு மையம் போன்ற பல்வேறு செங்குத்துகளில் வேலை செய்யும்',
    thirdRowHeader: 'ஆலோசனைக் குழுவில் சேரவும்',
    thirdRowDescription: 'உங்களை ஒரு தொழில் தலைவராக கருதுகிறீர்களா? மாற்றத்தின் ஒரு பகுதியாக நீங்கள் இருக்க விரும்புகிறீர்களா? மாற்றத்தை உருவாக்கும் செயல்முறையின் உச்சத்தில் நீங்கள் எப்போதும் இருக்க விரும்புகிறீர்களா? ஆலோசனைக் குழுவில் சேரவும்.',
    thirdRowSubHeader: '',
    thirdRowData: [
      'அந்தந்த செங்குத்துகளுக்கான கட்டமைப்பு மற்றும் ஆண்டு திட்டத்தை உருவாக்குங்கள்.',
      'போக்குகளைத் தொடர செங்குத்துகளில் இணைப்புகள் மற்றும் நெட்வொர்க்கை உருவாக்கவும்.',
      'யோசனையின் பரிணாமம் முழுவதும் தனிநபர்கள் / ஸ்டார்ட்-அப்களை வழிநடத்துதல்.',
      'தீர்வுகளை இணை உருவாக்குதல்: சிக்கலைத் தீர்ப்பதற்கு உதவ வளங்களை வழங்குதல் / எளிதாக்குதல்.',
      'யோசனைகளை அடையாளம் காண்பது மற்றும் கேபசிட்டு கட்டிடம்.',
      'பொருள் அடிப்படையில் குறிப்பிட்ட தீர்வுகளை பரிந்துரைக்கவும்.'
    ],
    fourthRowHeader: 'எப்படி விண்ணப்பிப்பது ?',
    fourthRowSubHeader1: 'உங்கள் விண்ணப்பத்தை சமர்ப்பிக்கவும்',
    fourthRowDescription1: 'ஆர்வமுள்ள நபர்கள் "chub.gcc@gmail.com" இல் சி-ஹப் குழுவுக்கு "(செங்குத்து பெயர்) ஆலோசனைக் குழுவிற்கு விண்ணப்பிக்க ஆர்வம்" என்ற தலைப்புடன் எழுதலாம்.',
    fourthRowSubHeader2: 'குறுகியப்பட்டியலைப் பெறுங்கள்',
    fourthRowDescription2: 'பட்டியலிடப்பட்ட வேட்பாளர்கள் தங்கள் கருத்துக்களை சி-ஹப் தலைமைக் குழுவுடன் பகிர்ந்து கொள்ள அழைக்கப்படுவார்கள்',
    fourthRowSubHeader3: 'சபையில் சேரவும்',
    fourthRowDescription3: 'தேர்ந்தெடுக்கப்பட்ட வேட்பாளர்கள் தங்கள் செங்குத்துகளின் கட்டமைப்பையும் அணுகுமுறையையும் வகுப்பதற்காக மீதமுள்ள சகாக்களுக்கு அறிமுகப்படுத்தப்படுவார்கள்',
  },
  workWithUs: {
    bannerTitle: 'எங்களுடன் வேலை செய்யுங்கள்',
    bannerSubTitle: 'சென்னை கண்டுபிடிப்பு மையத்துடன் ஒத்துழைத்து, செங்குத்துகளில் பல்வேறு திட்டங்களில் பணிபுரியும் வாய்ப்பைப் பெறுங்கள்.',
    mailContent: 'எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்',
    mailId: 'chub.gcc@gmail.com',
    categories: [
      {
        title: 'சேஞ்ச்மேக்கரின் திட்டம்',
        image: './images/workWithUs/changeMaker.png',
        description: 'மாற்றம் வீட்டிலேயே தொடங்குகிறது, மேலும் எங்கள் திட்டத்தின் மூலம் அடிமட்ட அளவிலான மாற்றங்களைக் கொண்டு வர விரும்புகிறோம். கல்வி நிறுவனங்கள் புதுமை உரையாடலின் ஒரு பகுதியாக இருக்க வேண்டும், இந்த காரணத்திற்காகவே, இந்த நகரத்தின் எதிர்காலத்தை அவர்களுடன் ஒருங்கிணைக்க எங்கள் மாணவர்களை ஊக்குவிக்கும் ஒரு பிரத்யேக திட்டத்தை உருவாக்க நாங்கள் விரும்பினோம். <br> <br> சேஞ்ச்மேக்கரின் திட்டம் பிரத்தியேகமாக நகரத்தில் சி-ஹப்பிற்கான கல்வி ஈடுபாடுகளை உருவாக்குவதில் கவனம் செலுத்துகிறது. இந்த திட்டம் சென்னையில் உள்ள கல்லூரிகளுடன் தொடர்புகளை ஏற்படுத்துதல் மற்றும் உருவாக்குவது குறித்து கவனம் செலுத்தும். அடிமட்ட மட்டத்தில் புதுமைகளை வளர்ப்பதற்கு பள்ளிகளுடன் ஒத்துழைக்க இந்த பிரிவு திறந்திருக்கும். இறுதி ஆண்டு மாணவர்கள் தங்கள் இளங்கலைப் படிப்பைத் தொடர்ந்தால், கிரேட்டர் சென்னை கார்ப்பரேஷன் வெளியிட்டுள்ள சிக்கல் அறிக்கைகளை அவர்களின் இறுதி ஆண்டு திட்டங்களுக்கு பயன்படுத்தலாம். கிரேட்டர் சென்னை கார்ப்பரேஷனுடன் சேர்ந்து பிஎச்.டி மாணவர்கள் தங்கள் ஆராய்ச்சியை மேற்கொள்ள தரவு தொகுப்புகள் மற்றும் பொருத்தமான ஆதாரங்கள் கிடைக்கும். சேஞ்ச்மேக்கரின் திட்டம் என்எஸ்எஸ் / என்சிசி திட்டங்களில் சேர்ந்த மாணவர்களை அவர்களின் பாடத்திட்டத்தின் ஒரு பகுதியாக பட்டியலிடப்பட்ட சமூகப் பணிகளில் பங்கேற்க அழைக்கிறது.',
        subTitle: 'மாற்றத்தை உருவாக்குபவராக இருக்க விரும்புகிறீர்களா அல்லது ஒன்றை அறிய விரும்புகிறீர்களா? <br> நடவடிக்கை எடுக்க வேண்டிய நேரம் இது!',
        participants: [
          {
            participantTitle: 'மாணவர்கள்',
            participantImage: './images/workWithUs/student.png',
            steps: [
              'சேர விரும்பும் மாணவர் உங்கள் பெயர், வயது, தற்போதைய கல்வி அனுபவம் மற்றும் திட்டத்தில் சேர உந்துதல் மற்றும் <span> "சேஞ்ச்மேக்கர் திட்டத்தில் ஆர்வமுள்ளவர்" </span> என்ற பாட வரியுடன் எங்களுக்கு எழுதுங்கள்',
              'உங்கள் ஆய்வறிக்கையில் எங்களுடன் பணியாற்ற விரும்பும் இறுதி ஆண்டு இளங்கலை மாணவர் எழுதலாம் <span> "ஜி.சி.சி உடன் இளங்கலை ஆய்வறிக்கை திட்டத்தை மேற்கொள்ள ஆர்வம்" </span>',
              'உங்கள் ஆராய்ச்சியில் ஒத்துழைக்க விரும்பும் பி.எச்.டி மாணவர்கள் <span> "ஜி.சி.சி உடன் எனது பிஎச்.டி ஆய்வறிக்கையில் பணியாற்ற ஆர்வமாக உள்ளனர்" </span>'
            ]
          },
          {
            participantTitle: 'பள்ளிகள் மற்றும் பல்கலைக்கழகங்கள்',
            participantImage: './images/workWithUs/institute.png',
            steps: [
              'தங்கள் வளாகத்தில் புதுமை மையத்தை அமைப்பதில் ஆர்வமுள்ள பள்ளிகள் / பல்கலைக்கழகங்கள் <span> "ஒரு கண்டுபிடிப்பு மையத்தை (பள்ளி / கல்லூரியின் பெயர்) அமைக்க ஆர்வமாக உள்ளன" </span> ',
              'வேறு ஏதேனும் தொடர்புடைய விசாரணைகள் அல்லது ஒத்துழைப்புக்கான யோசனைகளுக்கு <span> "சேஞ்ச்மேக்கரின் திட்டத்தின் மூலம் ஜி.சி.சி உடன் ஒத்துழைக்க ஆர்வமாக உள்ளது" </span>'
            ]
          }
        ]
      }, {
        title: 'ஹேக்கத்தான்கள்',
        image: './images/workWithUs/hackathon.png',
        description: 'ஒரு சமூகத்திற்கு முக்கியமான சிக்கல்களைத் தீர்க்க உதவுவதில் மூளை மற்றும் ப்ரான்ஸை ஒன்றிணைப்பதற்கான சிறந்த வழி ஹாகாதான்கள். சி-ஹப்பில் தலைமைக் குழுவால் சிக்கல் அறிக்கைகள் வகுக்கப்படும். கிரேட்டர் சென்னை கார்ப்பரேஷன் நடத்திய நெட்வொர்க்கிங் நிகழ்வுகளில் பங்கேற்கும் அணிகள் தங்கள் கருத்துக்களை மற்ற முதலீட்டாளர்களிடமும் வழங்குவதற்கான வாய்ப்பைப் பெறும். ஜி.சி.சி யால் பொருத்தமான மற்றும் செயல்படுத்தக்கூடிய வெற்றிகரமான யோசனைகள் உள்வாங்கப்படும், மேலும் இந்த யோசனைகளை உணர நிறுவனத்துடன் இணைந்து பணியாற்ற அணிகள் வரவேற்கப்படுகின்றன. இந்த தளம் குடிமக்களும் அரசாங்கமும் ஒன்றிணைந்து செயல்படுவதற்கான சிறந்த வழியாகும். இந்த நிகழ்வு ஒத்துழைப்பை ஊக்குவிக்கும் மற்றும் ஒரு முழுமையான லென்ஸ் மூலம் எந்தவொரு பிரச்சினையையும் அணுக வெவ்வேறு பங்குதாரர்களைக் கொண்டுவருவதற்கான ஒரு வழியாகும்.',
        subTitle: 'சேர எப்படி?',
        participants: [
          {
            steps: [
              'எங்கள் வரவிருக்கும் ஹேக்கத்தானில் பங்கேற்க ஆர்வமா?  <a href="https://www.google.com/" target="_blank">பதிவு <img alt="Register" src="./images/workWithUs/register.png"></a>',
              'ஜி.சி.சி உடன் ஹாக்தானை ஹோஸ்ட் செய்ய ஆர்வமா? பொருள் வரியுடன் எங்களுக்கு எழுதுங்கள் <span>"ஜி.சி.சி உடன் இணை ஹோஸ்ட் ஹாகாதனுக்கு ஆர்வம்"</span> ',
              'ஜி.சி.சி உடன் சிக்கல் அறிக்கைகளை வகுக்க நீங்கள் ஆர்வமாக உள்ளீர்களா? பொருள் வரியுடன் எங்களுக்கு எழுதுங்கள் <span>"ஹாகாதான் சிக்கல் அறிக்கைகளுக்கு ஜி.சி.சி உடன் பணிபுரிய ஆர்வம்"</span>',
              'வேறு எந்த கூட்டாண்மைக்கும்: தயவுசெய்து பொருள் வரியுடன் எங்களுக்கு எழுதுங்கள் <span>"கூட்டு: ஹாகாதான்"</span> ',
            ]
          }
        ]
      }, {
        title: 'நெட்வொர்க்கிங் நிகழ்வுகள்',
        image: './images/workWithUs/networking.png',
        description: 'ஒரு சமூகத்தின் சக்தி அது நிறுவப்பட்ட நெட்வொர்க் மூலம் புரிந்து கொள்ளப்படுகிறது. இந்த நெருக்கடியும் கடைசி விஷயங்களும் ஒருவருக்கொருவர் நகரமாக நாம் எப்போதுமே எப்படிக் காட்டியிருக்கிறோம் என்பதை விளக்குவதற்கு நல்ல எடுத்துக்காட்டுகள். இந்த நெட்வொர்க்கிங் மற்றும் அர்த்தமுள்ள இணைப்புகளை ஒரு பழக்கமாக உருவாக்குவதற்கான நேரம் இது. கிரேட்டர் சென்னை கார்ப்பரேஷன் நெட்வொர்க்கிங் நிகழ்வுகளை ஏற்பாடு செய்யும், இது சுற்றுச்சூழல் அமைப்பில் உள்ள அனைத்து பங்குதாரர்களுக்கும் அர்த்தமுள்ள இணைப்புகளை ஏற்படுத்த உதவும். இது ஒத்துழைப்புகளை வளர்க்கும், நம் அனைவரையும் எங்கள் யோசனைகளைப் பகிர்ந்து கொள்ளவும் மேம்பாடுகளைச் செய்யவும் அனுமதிக்கும்.',
        subTitle: 'சேர எப்படி?',
        participants: [
          {
            steps: [
              'உங்கள் இடத்தில் ஒரு நெட்வொர்க்கிங் நிகழ்வை நடத்த விரும்புகிறீர்களா? பொருள் வரியுடன் எங்களுக்கு எழுதுங்கள் <span>"கூட்டாண்மை: நெட்வொர்க்கிங் நிகழ்வு"</span>',
              'எங்களுடன் ஒரு நெட்வொர்க்கிங் நிகழ்வை நிர்வகிக்க விரும்புகிறீர்களா? பொருள் வரியுடன் எங்களுக்கு எழுதுங்கள் <span>"ஜி.சி.சி உடன் நெட்வொர்க்கிங் நிகழ்வை நிர்வகிக்க ஆர்வம்"</span>'
            ]
          }
        ]
      }, {
        title: 'ஆராய்ச்சி மற்றும் மேம்பாடு',
        image: './images/workWithUs/research.png',
        description: 'ஆராய்ச்சி மற்றும் மேம்பாடு என்பது ஒரு முக்கியமான செயலாகும், இது எந்தவொரு நிறுவனத்தையும் தொடர்ச்சியாக மீண்டும் செயல்படுத்தவும் மேம்பாடுகளை செய்யவும் அனுமதிக்கிறது. இந்த கிடைமட்டம் அறிவியல், தொழில்நுட்பம் மற்றும் நிர்வாகத்தில் நிபுணத்துவம் பெற்ற நிறுவனங்களுடன் ஆராய்ச்சி மற்றும் மேம்பாட்டுடன் ஒத்துழைக்கிறது. கிரேட்டர் சென்னை கார்ப்பரேஷன் தரவுகளைப் பகிர்வதிலிருந்து பல்வேறு திறன்களில் கூட்டாளர்களை ஆதரிக்க முடியும், கூறப்பட்ட ஆராய்ச்சிக்கு பொருத்தமான வளங்கள். கூட்டாண்மைக்காக கிரேட்டர் சென்னை கார்ப்பரேஷனை அணுக நிறுவனங்கள் ஊக்குவிக்கப்படும்.',
        subTitle: 'சேர எப்படி?',
        participants: [
          {
            steps: [
              'பொருள் வரியுடன் ஒரு கூட்டாளராக மாற எங்களுக்கு எழுதுங்கள் <span>"கூட்டாண்மை: ஆராய்ச்சி மற்றும் மேம்பாடு"</span>'
            ]
          }
        ]
      }, {
        title: 'இன்டர்ன்ஷிப் & பெலோஷிப்',
        image: './images/workWithUs/internship.png',
        description: 'பெரிய சென்னை கார்ப்பரேஷன் சி-ஹப்பில் இன்டர்ன்ஷிப் மற்றும் பெல்லோஷிப்பிற்கு விண்ணப்பிக்க மாணவர்களை அழைக்கிறது. ஜி.சி.சி மாணவர்களின் சுயவிவரங்களின் அடிப்படையில் கட்டண மற்றும் செலுத்தப்படாத இன்டர்ன்ஷிப்பை வழங்குகிறது. இன்டர்ன்ஷிப் தேவை கொண்ட கல்லூரியின் இறுதி ஆண்டு மாணவர்கள், ஜி.சி.சி உடன் இணைந்து செயல்படும் திட்டங்களில் பணியாற்ற தேர்வு செய்யலாம். ஒரு அனுபவமிக்க இன்டர்ன்ஷிப்பை உருவாக்குவதற்காக இன்டர்ன்ஸ் அவர்களுக்கான நிகழ்நேர திட்டங்களில் ஈடுபடுவார். ஜி.சி.சியில் பணிபுரியும் எந்தவொரு துறையுடனும் பணிபுரிய பயிற்சியாளர்கள் வரவேற்கப்படுகிறார்கள். தனிநபர்களின் அனுபவத்தைப் பொறுத்து, பொருத்தமான உதவித்தொகையை ஏற்பாடு செய்யலாம். இந்த அனுபவம் பயிற்சியாளர்களுக்கு கணினியின் நிகழ்நேர செயல்பாட்டைப் புரிந்துகொள்வதற்கும் அவர்களை அங்கம் வகிப்பதற்கும் உதவும். அமைப்பின். இந்த அனுபவம் ஒரு நெட்வொர்க் மற்றும் ஆராயக்கூடிய புதிய வழிகளையும் திறக்கும்.',
        subTitle: 'சேர எப்படி?',
        participants: [
          {
            steps: [
              'எங்களுடன் பயிற்சி பெற வேண்டுமா? பொருள் அனுபவத்துடன் உங்கள் விண்ணப்பத்துடன் உங்கள் அனுபவம் மற்றும் ஆர்வங்களுடன் எங்களுக்கு எழுதுங்கள் <span>"ஜி.சி.சி உடன் பயிற்சி பெற ஆர்வம்"</span>'
            ]
          }
        ]
      }
    ],
  },
  projects: {
    firstRowHeaders: 'திட்டங்கள்',
    firstRowDescription: 'சென்னை கண்டுபிடிப்பு மையத்துடன் இணைந்து உருவாக்கப்பட்டுள்ள அனைத்து திட்டங்களையும் பற்றி அறிந்து கொள்ளுங்கள்.',
    secondRowContent: {
      completed: [
        { 
          title: 'GCC Corona Monitoring Application', 
          host: 'Greater Chennai Corporation', 
          image: './images/projects/corona.png' },
        { 
          title: 'Madras Waste Exchange', 
          host: 'Greater Chennai Corporation', 
          image: './images/projects/default_image.png' },
        { 
          title: 'Home Quarantine and Isolation Management System (HQIMS)', 
          host: 'Greater Chennai Corporation', 
          image: './images/projects/default_image.png' },
        { 
          title: 'GCC Revenue League', 
          host: 'Greater Chennai Corporation', 
          image: './images/projects/default_image.png' },
        { 
          title: 'Covid Tele Counselling Process Optimization', 
          host: 'Greater Chennai Corporation', 
          image: './images/projects/covid_vaccination.jpg' }
      ],
      ongoing: [
        { title: 'Shelter for Urban Incubators', host: 'Greater Chennai Corporation', image: './images/projects/shelter.png' },
        { title: 'Burial Ground Management System', host: 'Greater Chennai Corporation', image: './images/projects/default_image.png' },
      ]
    },
    thirdRowHeader: 'சி-ஹப் உடன் ஒத்துழைக்க ஆர்வமா ?',
    thirdRowButton: 'எங்களுடன் வேலை செய்யுங்கள்'
  },
  faq: {
    firstRowHeader: 'Frequently Asked Questions',
    faqSplit1QuestionsAndAnswers: [
      {
        question: 'நாம் என்ன வழங்க முடியும்?',
        answer: 'சென்னை புதுமை மையம் போன்ற பல்வேறு வாய்ப்புகளை வழங்குகிறது',
        answerPoints: [
          'உங்கள் யோசனையைத் தேர்வுசெய்து வழிகாட்டும் தளம்.',
          'நிகழ்நேர தரவு பகிர்வை இயக்கு.',
          'திட்டத்தை செயல்படுத்தவும் செயல்படுத்தவும் இருக்கும் சமூகத்தை வழங்கவும்.',
          'சுற்றுச்சூழல் செயலாக்கத்திற்கான கூட்டாண்மை மற்றும் மேம்பாடு.',
          'திறன் மேம்பாடு மற்றும் அறிவு சேவைகள்.',
          'மேலாண்மை மற்றும் சிந்தனைத் தலைமையை மாற்றவும்.',
          'வெவ்வேறு செங்குத்துகளுக்கான புதுமை நிபுணத்துவம் மற்றும் பதிலளிக்கக்கூடிய ஒழுங்குமுறை பற்றிய ஆலோசனை.',
          'பிஓசி உருவாக்க நகரம் ஒரு வாழ்க்கை ஆய்வகமாக செயல்படும்.'
        ],
        readMore: 'google.com'
      },
      {
        question: 'நாம் யார்?',
        answer: 'நாங்கள் புதுமை செய்பவர்கள், புதிய யோசனைகள் / தொடக்கங்களுக்கான முடுக்கிகள் மற்றும் ஒரு முழுமையான குறுக்கு ஒழுங்கு அணுகுமுறை மூலம் உண்மையான உலகப் பிரச்சினைகளைத் தீர்க்க கவனம் செலுத்துகின்ற அடைகாக்கும் தன்மையை மேம்படுத்துகிறோம்.',
      },
      {
        question: 'ஏன் சி-ஹப்?',
        answer: 'பெரிய சென்னை நிறுவனத்தின் ஒரு பகுதியாக, நிகழ்நேர தரவை அணுகுவோம். இந்த திட்டம் கார்ப்பரேஷனுடன் இணைந்தால், அதை ஒரு சென்னை கார்ப்பரேஷன் நிறுவனமாக மாற்றுவதற்கு கூட அதை உள்வாங்க முடியும். எங்கள் ஆலோசனைக் குழுக்களின் சபை ஒவ்வொரு துறையிலும் உலகத் தலைவர்களைக் கொண்டுள்ளது. ஒரு வெற்றி-வெற்றி சூழ்நிலையை உறுதி செய்வதற்காக ஒரு சமூக சிக்கலை தீர்க்க தீர்மானிக்கப்பட்ட எந்தவொரு நபருக்கும் நாங்கள் ஆதரவளித்து ஒத்துழைக்கிறோம், உதவுகிறோம். நாங்கள் ஒரு நெட்வொர்க்கிங் தளத்தை வழங்குகிறோம். மேலும், சி-ஹப் கருத்துருவின் சான்றுகளை உருவாக்கலாம் மற்றும் சோதிக்கலாம் மற்றும் சாத்தியமான காப்பகங்கள் மற்றும் முதலீட்டாளர்களுடன் உங்களை இணைக்க முடியும்.',
      },
      {
        question: 'நான் ஏன் இதன் ஒரு பகுதியாக இருக்க வேண்டும்?',
        answer: 'சி-ஹப்பின் ஒரு பகுதியாக இருப்பது அடிமட்ட மட்டத்தில் சிக்கல்களைச் சமாளிக்க உங்களுக்கு உதவுகிறது. தவிர, உள்கட்டமைப்பு, தரவுத்தொகுப்பு, அலுவலக அணுகல் ஆகியவற்றுடன் சமூகத்தில் ஒரு மாற்றத்தை ஏற்படுத்த இது உங்களுக்கு உதவுகிறது.',
      },
      {
        question: 'இதில் நான் எவ்வாறு ஒரு பகுதியாக இருக்க முடியும்?',
        answer: 'ஒரு மாணவராக நீங்கள் சி-ஹப்பில் இன்டர்ன் ஆகலாம். நீங்கள் மக்களை பாதிக்கும் வகையில் கார்ப்பரேஷன் சிக்கலைத் தீர்ப்பதில் பணிபுரியும் பி.எச்.டி அறிஞராக இருந்தால், துல்லியமான பகுப்பாய்விற்கான அணுகல் மற்றும் தரவைப் பெற ஜி.சி.சி உடன் ஒத்துழைக்கலாம். ஒரு தொடக்க நிறுவனராக, சி-ஹப் உங்கள் திட்டத்தை இயக்குவதற்கும், பி.ஓ.சி.யை உருவாக்குவதற்கும், சாத்தியமான காப்பகங்கள் மற்றும் முதலீட்டாளர்களுடன் உங்களை இணைப்பதற்கும் ஒரு தளத்தை வழங்குகிறது. ஒரு பொருள் வல்லுநராக, நிலையான அபிவிருத்தி இலக்குகளை தீர்க்கவும் அடையவும் நிறுவனத்திற்கு ஆதரவின் தூணாக நீங்கள் பிரமுகர்களுடன் கைகோர்த்து செயல்படலாம்.',
      },
      {
        question: 'நான் பகுதிநேர / தொலைதூர பயிற்சி பெறலாமா?',
        answer: 'இல்லை, இது இன்னும் இடத்தில் இல்லை.',
      },
      {
        question: 'நான் ஒரு கல்வி நிறுவனத்தின் ஒரு பகுதி. நாம் எவ்வாறு பங்களிக்க முடியும்?',
        answer: 'நாங்கள் இளம் மனதுடன் ஒத்துழைக்க திறந்திருக்கிறோம். மேலும் அறிய chub.gcc@gmail.com இல் எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்.',
      },
      {
        question: 'கல்வி நிறுவனம் எவ்வாறு பயனடைகிறது?',
        answer: 'எதிர்கால ஒத்துழைப்பு மற்றும் ஆராய்ச்சி பணிகளுக்கு வழிவகுக்கும் நிறுவனங்களுடன் புரிந்துணர்வு ஒப்பந்தத்தில் கையெழுத்திடுவோம்.',
      }
    ],
    faqSplit2QuestionsAndAnswers: [
      {
        question: 'எனது இன்டர்ன்ஷிப் அல்லது பட்டறை அல்லது திட்டத்தின் நிறைவு சான்றிதழ் பதவி கிடைக்குமா?',
        answer: 'ஆம், நீங்கள் நிச்சயமாக ஒரு சான்றிதழைப் பெறுவீர்கள்.',
      },
      {
        question: 'ஜி.சி.சி யிலிருந்து நான் எவ்வாறு நிதி பெற முடியும்?',
        answer: 'ஜி.சி.சி மற்றும் ஆலோசனைக் குழுவின் விருப்பப்படி வழக்கு அடிப்படையில் நிதி தீர்மானிக்கப்படுகிறது. நிறுவனம் கவனம் செலுத்தும் சிக்கல்களில் மாணவர் அல்லது தொழில்முறை நிபுணர் பணியாற்றினால், ஜி.சி.சி நிதி மற்றும் ஒத்துழைப்பைக் கருத்தில் கொள்ளும். மேலும் விவரங்களுக்கு chub.gcc@gmail.com க்கு மின்னஞ்சல் செய்யவும்.',
      },
      {
        question: 'ஆலோசனைக் குழுவின் ஒரு பகுதி யார்?',
        answer: 'ஆலோசனைக் குழுவில் பல்வேறு துறைகளைச் சேர்ந்த வல்லுநர்கள் மற்றும் நிபுணர்கள் உள்ளனர். எ.கா. தொழில்நுட்ப ஆலோசனைக் குழுவில் பல தசாப்த கால அனுபவங்களைக் கொண்டிருக்கும் தொழில்நுட்ப இடத்திலிருந்து பொருள் வல்லுநரின் சந்தை தலைவர்கள் உள்ளனர்.',
      },
      {
        question: 'நான் ஆலோசனைக் குழுவின் ஒரு பகுதியாக இருக்க முடியுமா?',
        answer: 'ஆம். நீங்கள் ஏன் chub.gcc@gmail.com க்கு தேர்வு செய்யப்பட வேண்டும் என்பதற்கான உங்கள் விண்ணப்பத்தையும் வட்டி அறிக்கையையும் (அதிகபட்சம் 500 வார்த்தைகள்) அனுப்புமாறு கேட்டுக்கொள்கிறோம். முடிவைப் பற்றி உங்களுக்குத் தெரிவிக்கும் முன் எங்கள் நிபுணர் குழுவால் இது கவனமாக மதிப்பாய்வு செய்யப்படும். சபை சார்பு போனோ அடிப்படையில் உள்ளது.',
        readMore: 'google.com'

      },
      {
        question: 'நான் ஒரு தொழில்முறை நிபுணர். நான் இன்னும் ஆலோசனைக் குழுவின் ஒரு பகுதியாக இருக்க முடியுமா?',
        answer: 'ஆமாம் உன்னால் முடியும். உண்மையில், எங்கள் திட்டங்களுக்கு உங்கள் நேரத்திற்கு 3 மணிநேரம் மற்றும் நிபுணத்துவம் தேவை.',
      },
      {
        question: 'சி-ஹப்பின் ஒரு பகுதியாக இருக்க குறைந்தபட்ச தகுதி என்ன?',
        answer: 'குறைந்தபட்ச தகுதி இல்லை. நீங்கள் அந்தஸ்தை சவால் செய்ய விரும்பும் ஒருவரா? ஆம் என்றால், எங்களுக்கு நீங்கள் தேவை.',
      },
      {
        question: 'நான் புதுமையின் ஒரு பகுதியாக இல்லை, ஆனால் வெளிப்பாட்டைப் பெற விரும்புகிறேன்.',
        answer: 'நாங்கள் உலகத்தை மறுவரையறை செய்ய விரும்பும் வெவ்வேறு செங்குத்துகளில் இருந்து ஒத்த எண்ணம் கொண்ட தனிநபர்களின் குழு. நீங்கள் பட்டறைகள், நிகழ்வுகள், ஹேக்கத்தான்கள் மற்றும் தொழில் கண்காட்சிகளில் ஒரு பகுதியாக இருக்கலாம். மேலதிக தகவல்களுக்கு chub.gcc@gmail.com என்ற மின்னஞ்சல் முகவரிக்கு அனுப்பவும்.',
      },
      {
        question: 'நீ எங்கு வசிக்கிறாய்?',
        answer: 'கிரேட்டர் சென்னை கார்ப்பரேஷனின் ரிப்பன் கட்டிடத்தின் இரண்டாவது மாடியில் நாங்கள் இருக்கிறோம்.',
      }
    ]
  },
  events: {
    firstRowHeader: 'நிகழ்வுகள்',
    firstEventData: [
      {
        name: 'ஹாகாதான்',
        header: 'ஸ்மார்ட் சிட்டி ஹாகாதான்',
        image: './images/events/smart-city-hackathon.png',
        description: 'ஜி.சி.சி ஹாகாதான் கிரேட்டர் சென்னை கார்ப்பரேஷன் (ஜி.சி.சி) மற்றும் சென்னை ஸ்மார்ட் சிட்டி லிமிடெட் ஆகியவற்றின் முன்முயற்சியாகும், இது சென்னை நகரத்திற்கான நகர்ப்புற பிரச்சினைகளுக்கு அதன் குடிமக்களுடன் சேர்ந்து தீர்வு காணும். சென்னை கண்டுபிடிப்பு மையம் (CHUB) கல்வி, சுகாதாரம் மற்றும் ஆரோக்கியம், நகர திட்டமிடல், தொழில்முனைவோர், புதுமை, ஆளுகை, நகர அழகுபடுத்தல், அணுகல் மற்றும் உள்ளடக்கம், பாரம்பரியம் மற்றும் கலை, போக்குவரத்து போன்ற பல்வேறு கருப்பொருள்களில் ஹாக்தான்களை நடத்துகிறது. இந்த ஹாக்தான்கள் அனைவருக்கும் திறந்திருக்கும் வென்ற யோசனைகள் கிரேட்டர் சென்னை கார்ப்பரேஷனால் தீர்வுகளைத் தழுவுவதற்கான வாய்ப்பைக் கொண்டுள்ளன. இந்த ஹேக்கத்தான்கள் நெட்வொர்க் மற்றும் இணை மெட்ராஸுக்கு அர்த்தமுள்ள தீர்வுகளை உருவாக்குவதற்கான சிறந்த வழியாகும். புதுப்பிப்புகளுக்கு இந்த இடத்தைப் பாருங்கள். மேலும் கேள்விகளுக்கு எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள் “chub.gcc@gmail.com” .',
        eventDateTeamSizeText: 'அணி அளவு',
        eventDateTeanSize: 'விரைவில் அறிவிக்கப்பட வேண்டும்',
        eventDateRegistrationFeeText: 'பதிவு',
        eventDateRegistrationFee: 'விரைவில் புதுப்பிக்கப்பட வேண்டிய இணைப்பு',
        eventDateDateText: 'தேதி',
        eventDateDate: 'விரைவில் அறிவிக்கப்பட வேண்டும்',
        eventDateTimeText: 'நேரம்',
        eventDateTime: 'விரைவில் அறிவிக்கப்பட வேண்டும்',
        eventDateLocationText: 'இடம்',
        eventDateLocation: 'தகவல் மையம், எக்மோர், சென்னை - 600002'
      }
    ],
    firstRowButton: 'எங்களை தொடர்பு கொள்ள'
  },
  footer: {
    firstColumnHeader: 'சென்னை கண்டுபிடிப்பு மையம்',
    firstColumnAddress: [
      'எண் 53, ராஜா முத்தியா சாலை,',
      'கண்ணப்பர் திடால், பெரியமேட்,',
      'சென்னை, தமிழ்நாடு 600003'
    ],
    secondColumnHeader: 'பயனுள்ள இணைப்புகள்',
    secondColumnFirstRow: 'தள வரைபடம்',
    secondColumnSecondRow: 'மறுப்பு',
    secondColumnThirdRow: 'தனியுரிமைக் கொள்கை',
    secondColumnFourthRow: 'எங்களை தொடர்பு கொள்ள'
  },
  disclaimer: [
    'சென்னை புதுமை மையம் (சி-ஹப்) தனது வலைத்தளத்தின் மூலம் சி-ஹப் மற்றும் / அல்லது சென்னை புதுமை மையத்தில் ஆர்வமுள்ளவர்களுக்கு ஒரு சேவையாக தகவல் மற்றும் பிற சேவைகளை வழங்குகிறது. பார்வையாளர்களுக்கு ஆர்வமுள்ள பல்வேறு விஷயங்களுடன் தொடர்புடைய உள்ளடக்கம் மற்றும் சேவைகளுக்கு விரிவான அணுகலை வழங்க முயற்சி மேற்கொள்ளப்படுகிறது. தளத்தில் புதிய உள்ளடக்கம் மற்றும் சேவைகளைச் சேர்க்க தொடர்ச்சியான முயற்சிகள் மேற்கொள்ளப்படுகின்றன. ',
    'வழங்கப்பட்ட தகவல்கள் துல்லியமானவை என்பதை உறுதிப்படுத்த ஒவ்வொரு முயற்சியும் மேற்கொள்ளப்பட்டாலும், வழங்கப்பட்ட தகவல் மற்றும் சேவைகளின் துல்லியம், நம்பகத்தன்மை மற்றும் முழுமையை சி-ஹப் உத்தரவாதம் அளிக்காது. பயனர்களுக்கு பொதுவான வழிகாட்டியாக, உள்ளடக்கம் "உள்ளபடி" அடிப்படையில் வழங்கப்படுகிறது. வலைத்தளத்திற்கு வருபவர்கள் தங்கள் விருப்பப்படி உள்ளடக்கம் மற்றும் சேவைகளை அணுகுவதாகக் கருதப்படுகிறார்கள், மேலும் வலைத்தளத்தில் வழங்கப்பட்ட உள்ளடக்கம் மற்றும் சேவைகளின் பயன்பாடு அல்லது வெளிப்படையான அல்லது மறைமுகமான எந்தவொரு பொறுப்பிற்கும் சி-ஹப் பொறுப்பேற்க மாட்டார்கள். '
  ],
  privacyPolicy:[
  'இந்த வலைத்தளம் <<MRC>> ஆல் வடிவமைக்கப்பட்டுள்ளது, உருவாக்கப்பட்டது மற்றும் பராமரிக்கப்படுகிறது. சென்னை கண்டுபிடிப்பு மையத்திற்கு (சி-ஹப்). இந்த விதிமுறைகள் மற்றும் நிபந்தனைகள் இந்திய சட்டங்களின்படி நிர்வகிக்கப்படுகின்றன. இந்த விதிமுறைகள் மற்றும் நிபந்தனைகளின் கீழ் எழும் எந்தவொரு சர்ச்சையும் இந்திய நீதிமன்றங்களின் அதிகார எல்லைக்கு உட்பட்டதாக இருக்கும். ',
    'இந்த இணையதளத்தில் வெளியிடப்பட்ட தகவல்களில் வெளிப்புற வலைத்தளங்களுக்கான ஹைபர்டெக்ஸ்ட் இணைப்புகள் இருக்கலாம். சென்னை கண்டுபிடிப்பு மையம் (சி-ஹப்) இந்த இணைப்புகள் மற்றும் சுட்டிகளை உங்கள் தகவல் மற்றும் வசதிக்காக மட்டுமே வழங்குகிறது. நீங்கள் ஒரு வெளிப்புற வலைத்தளத்திற்கான இணைப்பைத் தேர்ந்தெடுக்கும்போது, ​​நீங்கள் "சென்னை புதுமை மையம் (சி-ஹப்)" தளத்தை விட்டு வெளியேறுகிறீர்கள், மேலும் வெளிப்புற வலைத்தளத்தின் உரிமையாளர்கள் / ஆதரவாளர்களின் தனியுரிமை மற்றும் பாதுகாப்புக் கொள்கைகளுக்கு உட்பட்டுள்ளீர்கள். '
  ],
  shared: {
    corporationTitle: 'Greater Chennai Corporation',
    comingSoon: 'விரைவில்'
  }
};

const translate = (contentPath, values) => {
  const language = window.sessionStorage.getItem('language');
  const contentToBePicked = language === 'tamil' ? tamilContent : englishContent;
  const content = _.get(contentToBePicked, contentPath, null);
  if (content instanceof Array) {
    return content.map(item => (values && item ? _.template(item)(values) : item));
  }
  return values && content ? _.template(content)(values) : content;
};

export default {
  t: translate,
};
