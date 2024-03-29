export default [
  {
    id: 1,
    title: "Penguinos",
    description: "Un site/API qui affiche des images aléatoires de pingouins",
    image:
      "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    link: "http://penguinos.xyz",
    linktext: "Demo",
    stack: ["Python", "Flask", "Regex", "API"],
    details:
      "Penguinos est un site et une API créé avec Flask (framework web pour python) qui scrap des images de pingouins sur Yahoo Image en utilisant les librairies request, beautifoulsoup et les affiche au chargement de la page, une api est aussi disponible pour récupérer les images en json avec des informations sur l'image.",
    skills: ["Parsing", "Flask", "Regex", "Scraping"],
  },
  {
    id: 2,
    title: "Spotistats",
    description:
      "Un site web Flask qui affiche les statistiques (chansons et artistes les plus écoutés) de votre compte Spotify",
    image:
      "https://cdn.discordapp.com/attachments/897109830395895858/1065979580210483201/image.png",
    link: "",
    linktext: "",
    stack: ["Flask", "HTML/CSS", "API", "Python"],
    details:
      "Spotistats est un site web Flask qui affiche les statistiques (chansons et artistes les plus écoutés) de votre compte Spotify, il utilise l'API de Spotify pour récupérer les données et les affiche sur une page web.",
    skills: ["Flask", "API", "Python"],
  },
  {
    id: 3,
    title: "Discord token listener",
    description:
      "Un outil Javascript qui écoute et enregistre les messages Discord avec un token",
    image:
      "https://cdn.discordapp.com/attachments/897109830395895858/1065979580210483201/image.png",
    link: "https://google.com",
    linktext: "Github",
    stack: ["Javascript", "Discord", "Bot", "API"],
    details:
      "Discord token listener est un outil Javascript qui écoute et enregistre les messages Discord avec un token, il utilise l'API de Discord pour récupérer les messages et les enregistre dans un fichier texte.",
    skills: ["Javascript", "API", "Discord"],
  },
  {
    id: 4,
    title: "Minishell",
    description: "Une copie du shell bash réalisé C",
    image: "https://static.javatpoint.com/linux/images/linux-bash.png",
    link: "https://github.com/tiballion/minishell",
    linktext: "Github",
    stack: ["Shell", "Bash", "C", "Systeme"],
    details:
      "Minishell est une copie du shell bash réalisé C, il utilise les fonctions de la librairie C pour executer les commandes et les arguments.",
    skills: ["C", "API Système", "Bash"],
  },
  {
    id: 5,
    title: "Moovy",
    description:
      "Un site web Symfony qui permet de rechercher des séries et films",
    image:
      "https://media.discordapp.net/attachments/990664077871284246/1067813136972922900/image.png?width=2062&height=1138",
    link: "https://moovy.pluviaux.fr",
    linktext: "Demo",
    stack: ["Symfony", "HTML/CSS", "API", "PHP"],
    details:
      "Moovy est un site web Symfony qui permet de rechercher des séries et films, il utilise l'API de IMDB pour récupérer les données et les affiche sur une page web.",
    skills: ["Symfony", "API", "PHP"],
  },
  {
    id: 6,
    title: "Google Author Search",
    description:
      "Une API Google qui vous permet de rechercher des livres avec un auteur donné",
    image:
      "https://media.discordapp.net/attachments/913699588291043379/1069561135717683220/image.png?width=2160&height=1094",
    link: "https://googleauthor.vercel.app",
    linktext: "Demo",
    stack: ["React", "Axios", "API"],
    details:
      "Une API Google qui vous permet de rechercher des livres avec un auteur donné, elle utilise l'API de Google pour récupérer les données et les affiche sur une page web.",
    skills: ["React", "Google API", "Parsing"],
  },
]
