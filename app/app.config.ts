export default defineAppConfig({
  appName: 'Srijits Personal Website ',
  appDescription: 'Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by HugoRCD',
  profilePicture: '/assets/srijit.webp',
  footerName: 'Srijit Ghosh',
  email: 'mail@srijit.co',
  twitterUsername: '@cheeseblock011',
  phone: '(+91) 94 77 03 78 96`',
  openGraphImage: 'https://canvas.hrcd.fr/social-preview.jpg',
  socials: {
    github: 'https://github.com/DevSrijit',
    twitter: 'https://twitter.com/cheeseblock011',
    linkedin: 'https://www.linkedin.com/in/DevSrijit',
    instagram: 'https://www.instagram.com/cheeseblock011',
    spotify: 'https://open.spotify.com/user/31x7pj57ad5xav7b47q5mk6mctwu',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
