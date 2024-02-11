const projectsData = [
    {
        name: "ConvoHub",
        img: "https://images.pexels.com/photos/15927820/pexels-photo-15927820/free-photo-of-cards-and-decorations-for-the-lunar-new-year.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description:
            "Crafted a dynamic chat application for seamless single and group conversations, featuring video calls, voice calls, and file transfers. Elevates user engagement with smart AI integration, ensuring advanced capabilities and contextual responses for an enhanced chat experience.",
        technologies: "ReactJS, NodeJS, ExpressJS, MongoDB, TailwindCSS, WebSockets, JWT, Redux, PWA",
        repo_link: "https://github.com/ShivanshAr97/ChatApplication",
        url: "https://github.com/ShivanshAr97/ChatApplication",
    },
    {
        name: "DoodleDash",
        img: "https://images.pexels.com/photos/15927820/pexels-photo-15927820/free-photo-of-cards-and-decorations-for-the-lunar-new-year.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description:
            "Developed an interactive online drawing game inspired by skribble.io, allowing users to draw in real-time on a shared board. Players engage in a fun guessing experience as they decipher each other's drawings to identify the hidden word.",
        technologies: " ReactJS, TailwindCSS, NodeJS, ExpressJS, MongoDB, SocketIO, ContextAPI",
        repo_link: "https://github.com/ShivanshAr97/skribble",
        url: "https://github.com/ShivanshAr97/skribble",
    },
    {
        name: "StreamVista",
        img: "https://images.pexels.com/photos/15927820/pexels-photo-15927820/free-photo-of-cards-and-decorations-for-the-lunar-new-year.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description:
            "A dynamic live video/streaming platform with channel creation, video uploads, user profile customization, and community features like live chat, comments, likes, and subscriptions. Explore history, engage in a personalized experience with playlists, tags, and a search system, while anticipating future video recommendations as the content library expands.",
        technologies: "ReactJS, TailwindCSS, NodeJS, ExpressJS, MongoDB, WebRTC, Cloudinary, Nodemailer",
        repo_link: "https://github.com/ShivanshAr97/Youtube",
        url: "https://github.com/ShivanshAr97/Youtube",
    },
    {
        name: 'Cubicle Carnival',
        img: "https://images.pexels.com/photos/15927820/pexels-photo-15927820/free-photo-of-cards-and-decorations-for-the-lunar-new-year.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "a platform where you can reduce your stress and tiredness by playing some easy yet addictive games like Wordle, 2048, Pong, Hangman and Tic-Tac-Toe. It also has features like Jokes on your boss' name to flush out the anger. Also provides soothing music and other sources to learn new skills like reading books, learning new language, learn cooking, learn astronomy and other trending skills and to celebrate other connections.",
        technologies: 'HTML, CSS and JavaScript, ReactJS, TailwindCSS',
        repo_link: 'https://github.com/ShivanshAr97/workathon',
        url: 'https://www.cubiclecarnival.co/'
    },
    {
        name: 'FitBuddy',
        img: "https://images.pexels.com/photos/15927820/pexels-photo-15927820/free-photo-of-cards-and-decorations-for-the-lunar-new-year.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: 'A one stop destination to make you fit. It provide options like diet and workout recommendation, BMI calculation, food and water tracking, online trainers, shopping products.',
        technologies: 'ReactJS, TailwindCSS, Redux',
        repo_link: 'https://github.com/ShivanshAr97/FitBuddy',
        url: 'https://fit-buddy-olive.vercel.app/'
    },
    {
        name: 'Time Capsule',
        img: "https://images.pexels.com/photos/15927820/pexels-photo-15927820/free-photo-of-cards-and-decorations-for-the-lunar-new-year.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: 'An exclusive blogging platform offering user authentication for login/register functionality. Authors gain privileged access to create, edit, and delete their blogs, ensuring a secure and personalized content management experience.',
        technologies: 'ReactJS, NodeJS, ExpressJS, MongoDB',
        repo_link: 'https://github.com/ShivanshAr97/BlogProject',
        url: 'https://blog-frontend-two-rho.vercel.app/'
    },
    {
        name: 'File Transfer',
        img: "https://images.pexels.com/photos/15927820/pexels-photo-15927820/free-photo-of-cards-and-decorations-for-the-lunar-new-year.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: 'A secure file transfer platform where users can share files with password protection, ensuring confidential and controlled access to sensitive information.',
        technologies: 'ReactJS, NodeJS, ExpressJS, MongoDB',
        repo_link: 'https://github.com/ShivanshAr97/file-transfer',
        url: 'https://file-transfer-dusky.vercel.app/'
    },
    {
        name: 'YouTube Helper',
        img: "https://images.pexels.com/photos/15927820/pexels-photo-15927820/free-photo-of-cards-and-decorations-for-the-lunar-new-year.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: 'Pose inquiries about a YouTube video, and receive comprehensive details instantly. Explore video content, metadata, and relevant information effortlessly through interactive questions.',
        technologies: 'Python, Google Gemini Pro, Langchain',
        repo_link: 'https://github.com/ShivanshAr97/YouTubeLLM',
        url: 'https://youtubellm.streamlit.app/'
    },
    {
        name: 'ContriHub',
        img: "https://images.pexels.com/photos/15927820/pexels-photo-15927820/free-photo-of-cards-and-decorations-for-the-lunar-new-year.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: 'Discover trending repositories and find beginner-friendly issues on this platform. Connect with diverse skill sets, compete on the leaderboard, and elevate your open-source journey.',
        technologies: 'ReactJS, TailwindCSS, Firebase',
        repo_link: 'https://github.com/ShivanshAr97/hackfest',
        url: 'https://hackfest-60bfd.web.app/'
    },
    {
        name: 'PexelsClone',
        img: "https://images.pexels.com/photos/15927820/pexels-photo-15927820/free-photo-of-cards-and-decorations-for-the-lunar-new-year.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: 'A Pexels clone offering a curated collection of high-quality, royalty-free images. Seamlessly browse, search, and download captivating visuals for various projects with a user-friendly interface.',
        technologies: 'NextJS, TailwindCSS, Pexels API',
        repo_link: 'https://github.com/ShivanshAr97/PexelsClone',
        url: 'https://github.com/ShivanshAr97/PexelsClone'
    },
    {
        name: 'Movie recommender system',
        img: "https://images.pexels.com/photos/15927820/pexels-photo-15927820/free-photo-of-cards-and-decorations-for-the-lunar-new-year.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: 'Python, Google Gemini Pro, Langchain',
        technologies: 'A movie recommender system powered by Langchain, providing personalized film suggestions based on user preferences and behavioral patterns. Enhance your cinematic experience with tailored movie recommendations.',
        repo_link: 'https://github.com/ShivanshAr97/recommender-systems',
        url: 'https://reelinsights.streamlit.app/'
    }

];

export default projectsData