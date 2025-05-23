const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "./assets/public/images/ideas.svg" },
    { text: "Concepts", imgPath: "./assets/public/images/concepts.svg" },
    { text: "Designs", imgPath: "./assets/public/images/designs.svg" },
    { text: "Code", imgPath: "./assets/public/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 70, suffix: "+", label: "Satisfied Clients" },
    { value: 15, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/assets/public/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "assets/public/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "assets/public/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "assets/public/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/assets/public/images/logos/react.png",

    },
    {
      name: "Python Developer",
      imgPath: "/assets/public/images/logos/python.svg",

    },
    {
      name: "Backend Developer",
      imgPath: "/assets/public/images/logos/node.png",

    },
    {
      name: "Interactive Developer",
      imgPath: "/assets/public/images/logos/three.png",

    },
    {
      name: "Project Manager",
      imgPath: "/assets/public/images/logos/git.svg",

    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
       review: "Taha’s work at Arhab LLC is nothing short of exceptional. He's technical skills in the field of electrical and tech made him an important asset. He was able to understand the end customers requirements and find a product and distributor that fullfilled their needs.",
      imgPath: "/assets/public/images/exp3.png",
      logoPath: "/assets/public/images/arhab-nobg.png",
      title: "Contracting Agent",
      date: "May 2024 - November 2024",
      responsibilities: [
        "Find Opportunities to work on and specifically read the requirements",
        "Being a perfectionist and meeting the end customers technical requirements exactly.",
        "Coordinated with the manufacturer to make sure the product was delivered.",
      ],
    },
    {
      review: "Taha's Abillity to seamlessly communicate with clients and learn about their requirements is impressive. He is then able to convey the clients ideas to his team members and work on the projects.",
      imgPath: "/assets/public/images/exp2.png",
      logoPath: "/assets/public/images/Google Sites.png",
      title: "WordPress and google sites (Leads and sales)",
      date: "November 2023 - March 2024",
      responsibilities: [
        "Seamlessly get the clients requirements.",
        "Communicate the requirements to the team members.",
        "Work and collaborate with the team to make a website that satisfied the client.",
      ],
    },
    {
      review: "Taha's has brought us successs using his technicalities and experience in latest technologies. His web scrapping bot has helped us in creating amazing things.",
      imgPath: "/assets/public/images/exp1.png",
      logoPath: "/assets/public/images/wordpress.png",
      title: "WordPress Developer",
      date: "January 2023 - August 2023",
      responsibilities: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/assets/public/images/wordpress.png",
    },
    {
      name: "logo2",
      imgPath: "/assets/public/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/assets/public/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Taha. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/assets/public/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Taha was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/assets/public/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Taha was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Taha's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Taha is the ideal partner.",
      imgPath: "/assets/public/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Taha was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/assets/public/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Taha’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/assets/public/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Taha was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/assets/public/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url:"#",
      imgPath: "/assets/public/images/insta.png",
    },
    {
      name: "fb",
      url:"#",
      imgPath: "/assets/public/images/fb.png",
    },
    {
      name: "x",
      url:"#",
      imgPath: "/assets/public/images/x.png",
    },
    {
      name: "linkedin",
      url:"#",
      imgPath: "/assets/public/images/linkedin.png",
    },
  ];

  const techStack2 = [
    {
      imgPath:"/assets/public/images/logos/node.png",
      name:"Node.Js",
    },
    {
      imgPath:"/assets/public/images/logos/react.png",
      name:"React",
    },
    {
      imgPath:"/assets/public/images/logos/python.svg",
      name:"Python",
    },
  ]
  
  export {
    techStack2,
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };