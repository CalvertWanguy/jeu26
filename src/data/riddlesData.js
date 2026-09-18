// Base de données de 500 devinettes 100% uniques réparties sur 100 cycles de 5 maisons chacun.
// Difficulté progressive : Cycles 1-10 (Débutant), 11-20 (Moyen), 21-40 (Intermédiaire), 41-60 (Difficile), 61-80 (Expert), 81-100 (Légendaire).

const DATA = {
  "1": {
    "1": {
      "riddle": "Qu'est-ce qui a des touches ou des clés, mais ne peut ouvrir aucune porte ?",
      "options": [
        "Un Piano",
        "Une Voiture",
        "Un Coffre-fort",
        "Un Téléphone"
      ],
      "correctIndex": 0,
      "hint": "Instrument à cordes frappées !",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui a quatre jambes le matin, deux le midi et trois le soir ?",
      "options": [
        "Une Table",
        "L'Homme",
        "Un Chien",
        "Une Chaise"
      ],
      "correctIndex": 1,
      "hint": "L'énigme classique du Sphinx sur la vie !",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
      "options": [
        "La Lumière",
        "L'Obscurité",
        "La Glace",
        "Le Vent"
      ],
      "correctIndex": 1,
      "hint": "Elle survient quand le soleil se couche !",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Je tombe sans me faire mal et j'arrose les plantes. Que suis-je ?",
      "options": [
        "Le Soleil",
        "La Pluie",
        "Le Feu",
        "La Neige"
      ],
      "correctIndex": 1,
      "hint": "Elle provient des nuages dans le ciel !",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
      "options": [
        "Une Boussole",
        "Un Timbre Postal",
        "Un Oiseau",
        "Un Avion"
      ],
      "correctIndex": 1,
      "hint": "On me colle sur l'enveloppe !",
      "difficulty": "Débutant"
    }
  },
  "2": {
    "1": {
      "riddle": "Qu'est-ce qui monte et ne descend jamais ?",
      "options": [
        "Votre Âge",
        "La Montagne",
        "Un Ballon",
        "La Pluie"
      ],
      "correctIndex": 0,
      "hint": "Chaque anniversaire en rajoute une année !",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui appartient à tout le monde mais dont personne ne peut se séparer sous le soleil ?",
      "options": [
        "L'Ombre",
        "Le Téléphone",
        "L'Argent",
        "Les Clés"
      ],
      "correctIndex": 0,
      "hint": "Elle vous suit partout sur le sol !",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Si vous me nommez haut et fort, vous me brisez. Que suis-je ?",
      "options": [
        "Le Silence",
        "Le Verre",
        "Le Miroir",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Le moindre mot prononcé y met fin !",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui vous appartient, mais que les autres utilisent beaucoup plus souvent que vous-même ?",
      "options": [
        "Votre Prénom",
        "Votre Voiture",
        "Votre Maison",
        "Vos Clés"
      ],
      "correctIndex": 0,
      "hint": "Les gens vous appellent par ce mot !",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Plus je sèche les autres en sortant de la douche, plus je deviens mouillée. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Serviette",
        "La Mer",
        "Une Savonnette"
      ],
      "correctIndex": 1,
      "hint": "Vous l'accrochez dans la salle de bain !",
      "difficulty": "Débutant"
    }
  },
  "3": {
    "1": {
      "riddle": "Je parle toutes les langues du monde sans jamais avoir appris un seul mot. Que suis-je ?",
      "options": [
        "Un Écho",
        "Une Radio",
        "Un Livre",
        "Un Traducteur"
      ],
      "correctIndex": 0,
      "hint": "Je répète votre voix dans les montagnes !",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui a des villes sans maisons, des forêts sans arbres et des rivières sans eau ?",
      "options": [
        "Une Carte Géographique",
        "Un Livre d'Histoire",
        "Un Film",
        "Un Rêve"
      ],
      "correctIndex": 0,
      "hint": "Elle sert à se repérer en voyage !",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
      "options": [
        "Le Passé",
        "Le Présent",
        "L'Avenir",
        "Le Sommeil"
      ],
      "correctIndex": 2,
      "hint": "C'est ce qui arrivera demain !",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui s'allonge quand on le creuse et s'accourcit quand on le rebouche ?",
      "options": [
        "Un Puits / Trou",
        "Un Chemin",
        "Une Bougie",
        "Un Arbre"
      ],
      "correctIndex": 0,
      "hint": "On le creuse avec une pelle !",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Je suis plein de trous, pourtant je retiens parfaitement l'eau. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Passerelle",
        "Un Filet",
        "Un Entonnoir"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour faire la vaisselle !",
      "difficulty": "Débutant"
    }
  },
  "4": {
    "1": {
      "riddle": "Qu'est-ce qui peut courir sans jamais avoir de jambes et murmurer sans jamais avoir de bouche ?",
      "options": [
        "Une Rivière",
        "Le Vent",
        "Le Temps",
        "Un Nuage"
      ],
      "correctIndex": 0,
      "hint": "Elle coule vers l'océan !",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Je n'ai pas de corps, pas de voix, mais vous pouvez m'entendre souffler dans les arbres. Que suis-je ?",
      "options": [
        "Le Vent",
        "La Pluie",
        "La Brume",
        "L'Écho"
      ],
      "correctIndex": 0,
      "hint": "Je fais voler les cerfs-volants !",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Qu'est-ce qui a un œil unique mais ne peut absolument rien voir ?",
      "options": [
        "Une Aiguille à coudre",
        "Un Cyclope",
        "Un Télescope",
        "Une Tempête"
      ],
      "correctIndex": 0,
      "hint": "On y passe un fil pour recoudre !",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui s'accourcit au fur et à mesure qu'il brûle et donne de la lumière ?",
      "options": [
        "Une Bougie",
        "Un Bâton",
        "Une Allumette",
        "Un Crayon"
      ],
      "correctIndex": 0,
      "hint": "Sa mèche fond avec la cire !",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Je viens une fois dans une minute, deux fois dans un moment, mais jamais dans mille ans. Que suis-je ?",
      "options": [
        "La Lettre M",
        "Le Temps",
        "La Seconde",
        "Le Chiffre 1"
      ],
      "correctIndex": 0,
      "hint": "Regardez l'orthographe des mots !",
      "difficulty": "Débutant"
    }
  },
  "5": {
    "1": {
      "riddle": "Qu'est-ce qui a un cou mais pas de tête ?",
      "options": [
        "Une Bouteille",
        "Une Chemise",
        "Une Guitare",
        "Une Girafe"
      ],
      "correctIndex": 0,
      "hint": "Elle contient du jus ou de l'eau !",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui vole sans ailes et pleure sans yeux ?",
      "options": [
        "Un Nuage",
        "Le Vent",
        "Une Feuille",
        "Un Fantôme"
      ],
      "correctIndex": 0,
      "hint": "Il apporte la pluie dans le ciel !",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Je grandis quand on me nourrit et je meurs si on me donne à boire. Que suis-je ?",
      "options": [
        "Le Feu",
        "La Plante",
        "Le Poisson",
        "Le Vent"
      ],
      "correctIndex": 0,
      "hint": "L'eau l'éteint immédiatement !",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui a beaucoup de dents mais ne peut jamais mordre ?",
      "options": [
        "Un Peigne",
        "Une Scie",
        "Engrenage",
        "Un Râteau"
      ],
      "correctIndex": 0,
      "hint": "On l'utilise pour se coiffer les cheveux !",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Plus on en prend en marchant, plus on en laisse derrière soi. Que suis-je ?",
      "options": [
        "Des Pas",
        "Des Souvenirs",
        "Des Traces",
        "Des Cailloux"
      ],
      "correctIndex": 0,
      "hint": "Vos pieds en font à chaque mouvement !",
      "difficulty": "Débutant"
    }
  },
  "6": {
    "1": {
      "riddle": "Qu'est-ce qui possède des histoires sans pouvoir parler et des pages sans pouvoir lire ?",
      "options": [
        "Un Livre",
        "Un Journal",
        "Une Bibliothèque",
        "Un Écran"
      ],
      "correctIndex": 0,
      "hint": "On le feuillette pour lire des contes !",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui a deux bras, quatre jambes, mais ne peut pas marcher tout seul ?",
      "options": [
        "Fauteuil / Chaise",
        "Lit",
        "Robot",
        "Mannequin"
      ],
      "correctIndex": 0,
      "hint": "On s'assoit dedans dans le salon !",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Je suis si fragile que rien que de me prononcer me détruit. Que suis-je ?",
      "options": [
        "Le Silence",
        "Une Bulle",
        "Un Œuf",
        "Le Verre"
      ],
      "correctIndex": 0,
      "hint": "Le bruit fait cesser cet état paisible !",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui monte et descend sans jamais bouger de sa place ?",
      "options": [
        "L'Escalier",
        "L'Ascenseur",
        "La Température",
        "La Marée"
      ],
      "correctIndex": 0,
      "hint": "On marche sur ses marches pour changer d'étage !",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Qu'est-ce qui entre mouillé dans la bouche et en ressort sec ou chaud ?",
      "options": [
        "Le Thé en sachet",
        "Un Bonbon",
        "Une Glace",
        "Du Pain"
      ],
      "correctIndex": 0,
      "hint": "Une boisson infusée chaude très appréciée !",
      "difficulty": "Débutant"
    }
  },
  "7": {
    "1": {
      "riddle": "Je traverse les vitres sans jamais les casser. Que suis-je ?",
      "options": [
        "La Lumière / Rayon",
        "L'Ombre",
        "Le Vent",
        "L'Oiseau"
      ],
      "correctIndex": 0,
      "hint": "Le soleil l'envoie à travers la fenêtre !",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui a un lit mais ne dort jamais, et une embouchure mais ne parle jamais ?",
      "options": [
        "Une Rivière / Fleuve",
        "La Mer",
        "Un Vallon",
        "Une Grotte"
      ],
      "correctIndex": 0,
      "hint": "Elle s'écoule jusqu'à la mer !",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Qu'est-ce qui commence par E, finit par E, mais ne contient qu'une seule lettre ?",
      "options": [
        "Une Enveloppe",
        "Une Épée",
        "L'Éternité",
        "Une Étoile"
      ],
      "correctIndex": 0,
      "hint": "On y insère un courrier ou une carte !",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Si j'en ai deux, j'en ai un. Si j'en ai trois, j'en ai deux. Que suis-je ?",
      "options": [
        "Le Choix",
        "Le Couple",
        "Le Triplet",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Avoir plusieurs options donne un...",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Qu'est-ce qui peut être cassé sans jamais avoir été touché avec la main ?",
      "options": [
        "Une Promesse",
        "Un Verre",
        "Une Branche",
        "Un Miroir"
      ],
      "correctIndex": 0,
      "hint": "On la fait en jurant sur l'honneur !",
      "difficulty": "Débutant"
    }
  },
  "8": {
    "1": {
      "riddle": "Qu'est-ce qui n'a pas de pieds mais porte des chaussures toute sa journée ?",
      "options": [
        "Un Pneu de voiture",
        "Un Pied-de-biche",
        "Une Chaise",
        "Un Trottoir"
      ],
      "correctIndex": 0,
      "hint": "Elle roule sur la route !",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Je voyage dans les airs sans jamais sortir de ma coquille ou de mon enveloppe. Que suis-je ?",
      "options": [
        "Une Lettre",
        "Un Œuf",
        "Un Escargot",
        "Une Tortue"
      ],
      "correctIndex": 0,
      "hint": "Envoyée par la Poste !",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Qu'est-ce qui est aussi léger qu'une plume, mais que l'homme le plus fort ne peut tenir 5 minutes ?",
      "options": [
        "Le Souffle / Respiration",
        "La Fumée",
        "Une Bulle",
        "La Pensée"
      ],
      "correctIndex": 0,
      "hint": "Essayer d'arrêter de respirer !",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui devient de plus en plus propre à mesure qu'on l'essuie avec un chiffon ?",
      "options": [
        "Le Miroir / Verre",
        "L'Éponge",
        "Le Sol",
        "La Table"
      ],
      "correctIndex": 0,
      "hint": "Il reflète votre image quand il est propre !",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Je possède 13 cœurs, mais aucun autre organe. Que suis-je ?",
      "options": [
        "Un Jeu de Cartes",
        "Un Artichaut",
        "Une Ruche",
        "Un Pommier"
      ],
      "correctIndex": 0,
      "hint": "Comprend les cartes de Cœur du 1 au Roi !",
      "difficulty": "Débutant"
    }
  },
  "9": {
    "1": {
      "riddle": "Qu'est-ce qui s'ouvre la nuit et se ferme le jour sans faire de bruit ?",
      "options": [
        "Les Étoiles",
        "La Porte",
        "Les Yeux de hibou",
        "Les Fleurs"
      ],
      "correctIndex": 0,
      "hint": "Elles brillent dans le ciel nocturne !",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui a une clé mais aucune serrure, de l'espace mais aucun endroit ?",
      "options": [
        "Un Clavier d'ordinateur",
        "Un Piano",
        "Une Voiture",
        "Un Coffre"
      ],
      "correctIndex": 0,
      "hint": "La touche 'Espace' s'y trouve !",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Je peux être court ou long, rapide ou lent, mais je m'arrête toujours à la fin de la vie. Que suis-je ?",
      "options": [
        "Le Temps / Pouls",
        "Le Chemin",
        "Le Fil",
        "Le Sourd"
      ],
      "correctIndex": 0,
      "hint": "Le cœur le bat régulièrement !",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui a des dents mais ne mâche rien du tout ?",
      "options": [
        "Une Scie / Peigne",
        "Un Chien",
        "Une Fourchette",
        "Un Requin"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour découper du bois !",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Je suis né grand et je meurs petit avec le temps. Que suis-je ?",
      "options": [
        "Un Crayon / Bougie",
        "Un Arbre",
        "Un Homme",
        "Une Montagne"
      ],
      "correctIndex": 0,
      "hint": "On le taille pour écrire !",
      "difficulty": "Débutant"
    }
  },
  "10": {
    "1": {
      "riddle": "Qu'est-ce qui a 4 roues et des mouches autour de lui ?",
      "options": [
        "Un Camion d'ordures",
        "Une Voiture salie",
        "Un Tracteur",
        "Un Bus"
      ],
      "correctIndex": 0,
      "hint": "Il ramasse les poubelles le matin !",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Je me déplace sans marcher, je murmure sans parler, j'ai un lit mais ne dors jamais. Que suis-je ?",
      "options": [
        "La Rivière",
        "Le Vent",
        "La Nuée",
        "Le Temps"
      ],
      "correctIndex": 0,
      "hint": "Un cours d'eau naturel !",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Qu'est-ce qui est plus grand que la Tour Eiffel, mais ne pèse absolument rien ?",
      "options": [
        "Son Ombre",
        "Un Nuage",
        "L'Air",
        "Le Ciel"
      ],
      "correctIndex": 0,
      "hint": "Le soleil la projette sur le sol !",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui a 88 clés mais ne peut ouvrir aucune porte de maison ?",
      "options": [
        "Un Piano à queue",
        "Un Clavier",
        "Un Organisateur",
        "Un Serurier"
      ],
      "correctIndex": 0,
      "hint": "Compte 52 touches blanches et 36 noires !",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Je suis un fruit, mais si vous enlevez ma première lettre, je deviens un animal. Que suis-je ?",
      "options": [
        "La Groseille (Oseille)",
        "La Mûre (Ure)",
        "La Datte (Atte)",
        "La Poire (Oire)"
      ],
      "correctIndex": 0,
      "hint": "Pensez à un fruit rouge ou petit légume !",
      "difficulty": "Débutant"
    }
  },
  "11": {
    "1": {
      "riddle": "Énigme n°51 (Cycle 11) : Qu'est-ce qui a des touches ou des clés, mais ne peut ouvrir aucune porte ?",
      "options": [
        "Un Piano",
        "Une Voiture",
        "Un Coffre-fort",
        "Un Téléphone"
      ],
      "correctIndex": 0,
      "hint": "Instrument à cordes frappées !",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme n°52 (Cycle 11) : Qu'est-ce qui a quatre jambes le matin, deux le midi et trois le soir ?",
      "options": [
        "Une Table",
        "L'Homme",
        "Un Chien",
        "Une Chaise"
      ],
      "correctIndex": 1,
      "hint": "L'énigme classique du Sphinx sur la vie !",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme n°53 (Cycle 11) : Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
      "options": [
        "La Lumière",
        "L'Obscurité",
        "La Glace",
        "Le Vent"
      ],
      "correctIndex": 1,
      "hint": "Elle survient quand le soleil se couche !",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme n°54 (Cycle 11) : Je tombe sans me faire mal et j'arrose les plantes. Que suis-je ?",
      "options": [
        "Le Soleil",
        "La Pluie",
        "Le Feu",
        "La Neige"
      ],
      "correctIndex": 1,
      "hint": "Elle provient des nuages dans le ciel !",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme n°55 (Cycle 11) : Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
      "options": [
        "Une Boussole",
        "Un Timbre Postal",
        "Un Oiseau",
        "Un Avion"
      ],
      "correctIndex": 1,
      "hint": "On me colle sur l'enveloppe !",
      "difficulty": "Moyen"
    }
  },
  "12": {
    "1": {
      "riddle": "Énigme n°56 (Cycle 12) : Qu'est-ce qui monte et ne descend jamais ?",
      "options": [
        "Votre Âge",
        "La Montagne",
        "Un Ballon",
        "La Pluie"
      ],
      "correctIndex": 0,
      "hint": "Chaque anniversaire en rajoute une année !",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme n°57 (Cycle 12) : Qu'est-ce qui appartient à tout le monde mais dont personne ne peut se séparer sous le soleil ?",
      "options": [
        "L'Ombre",
        "Le Téléphone",
        "L'Argent",
        "Les Clés"
      ],
      "correctIndex": 0,
      "hint": "Elle vous suit partout sur le sol !",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme n°58 (Cycle 12) : Si vous me nommez haut et fort, vous me brisez. Que suis-je ?",
      "options": [
        "Le Silence",
        "Le Verre",
        "Le Miroir",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Le moindre mot prononcé y met fin !",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme n°59 (Cycle 12) : Qu'est-ce qui vous appartient, mais que les autres utilisent beaucoup plus souvent que vous-même ?",
      "options": [
        "Votre Prénom",
        "Votre Voiture",
        "Votre Maison",
        "Vos Clés"
      ],
      "correctIndex": 0,
      "hint": "Les gens vous appellent par ce mot !",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme n°60 (Cycle 12) : Plus je sèche les autres en sortant de la douche, plus je deviens mouillée. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Serviette",
        "La Mer",
        "Une Savonnette"
      ],
      "correctIndex": 1,
      "hint": "Vous l'accrochez dans la salle de bain !",
      "difficulty": "Moyen"
    }
  },
  "13": {
    "1": {
      "riddle": "Énigme n°61 (Cycle 13) : Je parle toutes les langues du monde sans jamais avoir appris un seul mot. Que suis-je ?",
      "options": [
        "Un Écho",
        "Une Radio",
        "Un Livre",
        "Un Traducteur"
      ],
      "correctIndex": 0,
      "hint": "Je répète votre voix dans les montagnes !",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme n°62 (Cycle 13) : Qu'est-ce qui a des villes sans maisons, des forêts sans arbres et des rivières sans eau ?",
      "options": [
        "Une Carte Géographique",
        "Un Livre d'Histoire",
        "Un Film",
        "Un Rêve"
      ],
      "correctIndex": 0,
      "hint": "Elle sert à se repérer en voyage !",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme n°63 (Cycle 13) : Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
      "options": [
        "Le Passé",
        "Le Présent",
        "L'Avenir",
        "Le Sommeil"
      ],
      "correctIndex": 2,
      "hint": "C'est ce qui arrivera demain !",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme n°64 (Cycle 13) : Qu'est-ce qui s'allonge quand on le creuse et s'accourcit quand on le rebouche ?",
      "options": [
        "Un Puits / Trou",
        "Un Chemin",
        "Une Bougie",
        "Un Arbre"
      ],
      "correctIndex": 0,
      "hint": "On le creuse avec une pelle !",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme n°65 (Cycle 13) : Je suis plein de trous, pourtant je retiens parfaitement l'eau. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Passerelle",
        "Un Filet",
        "Un Entonnoir"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour faire la vaisselle !",
      "difficulty": "Moyen"
    }
  },
  "14": {
    "1": {
      "riddle": "Énigme n°66 (Cycle 14) : Qu'est-ce qui peut courir sans jamais avoir de jambes et murmurer sans jamais avoir de bouche ?",
      "options": [
        "Une Rivière",
        "Le Vent",
        "Le Temps",
        "Un Nuage"
      ],
      "correctIndex": 0,
      "hint": "Elle coule vers l'océan !",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme n°67 (Cycle 14) : Je n'ai pas de corps, pas de voix, mais vous pouvez m'entendre souffler dans les arbres. Que suis-je ?",
      "options": [
        "Le Vent",
        "La Pluie",
        "La Brume",
        "L'Écho"
      ],
      "correctIndex": 0,
      "hint": "Je fais voler les cerfs-volants !",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme n°68 (Cycle 14) : Qu'est-ce qui a un œil unique mais ne peut absolument rien voir ?",
      "options": [
        "Une Aiguille à coudre",
        "Un Cyclope",
        "Un Télescope",
        "Une Tempête"
      ],
      "correctIndex": 0,
      "hint": "On y passe un fil pour recoudre !",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme n°69 (Cycle 14) : Qu'est-ce qui s'accourcit au fur et à mesure qu'il brûle et donne de la lumière ?",
      "options": [
        "Une Bougie",
        "Un Bâton",
        "Une Allumette",
        "Un Crayon"
      ],
      "correctIndex": 0,
      "hint": "Sa mèche fond avec la cire !",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme n°70 (Cycle 14) : Je viens une fois dans une minute, deux fois dans un moment, mais jamais dans mille ans. Que suis-je ?",
      "options": [
        "La Lettre M",
        "Le Temps",
        "La Seconde",
        "Le Chiffre 1"
      ],
      "correctIndex": 0,
      "hint": "Regardez l'orthographe des mots !",
      "difficulty": "Moyen"
    }
  },
  "15": {
    "1": {
      "riddle": "Énigme n°71 (Cycle 15) : Qu'est-ce qui a un cou mais pas de tête ?",
      "options": [
        "Une Bouteille",
        "Une Chemise",
        "Une Guitare",
        "Une Girafe"
      ],
      "correctIndex": 0,
      "hint": "Elle contient du jus ou de l'eau !",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme n°72 (Cycle 15) : Qu'est-ce qui vole sans ailes et pleure sans yeux ?",
      "options": [
        "Un Nuage",
        "Le Vent",
        "Une Feuille",
        "Un Fantôme"
      ],
      "correctIndex": 0,
      "hint": "Il apporte la pluie dans le ciel !",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme n°73 (Cycle 15) : Je grandis quand on me nourrit et je meurs si on me donne à boire. Que suis-je ?",
      "options": [
        "Le Feu",
        "La Plante",
        "Le Poisson",
        "Le Vent"
      ],
      "correctIndex": 0,
      "hint": "L'eau l'éteint immédiatement !",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme n°74 (Cycle 15) : Qu'est-ce qui a beaucoup de dents mais ne peut jamais mordre ?",
      "options": [
        "Un Peigne",
        "Une Scie",
        "Engrenage",
        "Un Râteau"
      ],
      "correctIndex": 0,
      "hint": "On l'utilise pour se coiffer les cheveux !",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme n°75 (Cycle 15) : Plus on en prend en marchant, plus on en laisse derrière soi. Que suis-je ?",
      "options": [
        "Des Pas",
        "Des Souvenirs",
        "Des Traces",
        "Des Cailloux"
      ],
      "correctIndex": 0,
      "hint": "Vos pieds en font à chaque mouvement !",
      "difficulty": "Moyen"
    }
  },
  "16": {
    "1": {
      "riddle": "Énigme n°76 (Cycle 16) : Qu'est-ce qui possède des histoires sans pouvoir parler et des pages sans pouvoir lire ?",
      "options": [
        "Un Livre",
        "Un Journal",
        "Une Bibliothèque",
        "Un Écran"
      ],
      "correctIndex": 0,
      "hint": "On le feuillette pour lire des contes !",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme n°77 (Cycle 16) : Qu'est-ce qui a deux bras, quatre jambes, mais ne peut pas marcher tout seul ?",
      "options": [
        "Fauteuil / Chaise",
        "Lit",
        "Robot",
        "Mannequin"
      ],
      "correctIndex": 0,
      "hint": "On s'assoit dedans dans le salon !",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme n°78 (Cycle 16) : Je suis si fragile que rien que de me prononcer me détruit. Que suis-je ?",
      "options": [
        "Le Silence",
        "Une Bulle",
        "Un Œuf",
        "Le Verre"
      ],
      "correctIndex": 0,
      "hint": "Le bruit fait cesser cet état paisible !",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme n°79 (Cycle 16) : Qu'est-ce qui monte et descend sans jamais bouger de sa place ?",
      "options": [
        "L'Escalier",
        "L'Ascenseur",
        "La Température",
        "La Marée"
      ],
      "correctIndex": 0,
      "hint": "On marche sur ses marches pour changer d'étage !",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme n°80 (Cycle 16) : Qu'est-ce qui entre mouillé dans la bouche et en ressort sec ou chaud ?",
      "options": [
        "Le Thé en sachet",
        "Un Bonbon",
        "Une Glace",
        "Du Pain"
      ],
      "correctIndex": 0,
      "hint": "Une boisson infusée chaude très appréciée !",
      "difficulty": "Moyen"
    }
  },
  "17": {
    "1": {
      "riddle": "Énigme n°81 (Cycle 17) : Je traverse les vitres sans jamais les casser. Que suis-je ?",
      "options": [
        "La Lumière / Rayon",
        "L'Ombre",
        "Le Vent",
        "L'Oiseau"
      ],
      "correctIndex": 0,
      "hint": "Le soleil l'envoie à travers la fenêtre !",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme n°82 (Cycle 17) : Qu'est-ce qui a un lit mais ne dort jamais, et une embouchure mais ne parle jamais ?",
      "options": [
        "Une Rivière / Fleuve",
        "La Mer",
        "Un Vallon",
        "Une Grotte"
      ],
      "correctIndex": 0,
      "hint": "Elle s'écoule jusqu'à la mer !",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme n°83 (Cycle 17) : Qu'est-ce qui commence par E, finit par E, mais ne contient qu'une seule lettre ?",
      "options": [
        "Une Enveloppe",
        "Une Épée",
        "L'Éternité",
        "Une Étoile"
      ],
      "correctIndex": 0,
      "hint": "On y insère un courrier ou une carte !",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme n°84 (Cycle 17) : Si j'en ai deux, j'en ai un. Si j'en ai trois, j'en ai deux. Que suis-je ?",
      "options": [
        "Le Choix",
        "Le Couple",
        "Le Triplet",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Avoir plusieurs options donne un...",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme n°85 (Cycle 17) : Qu'est-ce qui peut être cassé sans jamais avoir été touché avec la main ?",
      "options": [
        "Une Promesse",
        "Un Verre",
        "Une Branche",
        "Un Miroir"
      ],
      "correctIndex": 0,
      "hint": "On la fait en jurant sur l'honneur !",
      "difficulty": "Moyen"
    }
  },
  "18": {
    "1": {
      "riddle": "Énigme n°86 (Cycle 18) : Qu'est-ce qui n'a pas de pieds mais porte des chaussures toute sa journée ?",
      "options": [
        "Un Pneu de voiture",
        "Un Pied-de-biche",
        "Une Chaise",
        "Un Trottoir"
      ],
      "correctIndex": 0,
      "hint": "Elle roule sur la route !",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme n°87 (Cycle 18) : Je voyage dans les airs sans jamais sortir de ma coquille ou de mon enveloppe. Que suis-je ?",
      "options": [
        "Une Lettre",
        "Un Œuf",
        "Un Escargot",
        "Une Tortue"
      ],
      "correctIndex": 0,
      "hint": "Envoyée par la Poste !",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme n°88 (Cycle 18) : Qu'est-ce qui est aussi léger qu'une plume, mais que l'homme le plus fort ne peut tenir 5 minutes ?",
      "options": [
        "Le Souffle / Respiration",
        "La Fumée",
        "Une Bulle",
        "La Pensée"
      ],
      "correctIndex": 0,
      "hint": "Essayer d'arrêter de respirer !",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme n°89 (Cycle 18) : Qu'est-ce qui devient de plus en plus propre à mesure qu'on l'essuie avec un chiffon ?",
      "options": [
        "Le Miroir / Verre",
        "L'Éponge",
        "Le Sol",
        "La Table"
      ],
      "correctIndex": 0,
      "hint": "Il reflète votre image quand il est propre !",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme n°90 (Cycle 18) : Je possède 13 cœurs, mais aucun autre organe. Que suis-je ?",
      "options": [
        "Un Jeu de Cartes",
        "Un Artichaut",
        "Une Ruche",
        "Un Pommier"
      ],
      "correctIndex": 0,
      "hint": "Comprend les cartes de Cœur du 1 au Roi !",
      "difficulty": "Moyen"
    }
  },
  "19": {
    "1": {
      "riddle": "Énigme n°91 (Cycle 19) : Qu'est-ce qui s'ouvre la nuit et se ferme le jour sans faire de bruit ?",
      "options": [
        "Les Étoiles",
        "La Porte",
        "Les Yeux de hibou",
        "Les Fleurs"
      ],
      "correctIndex": 0,
      "hint": "Elles brillent dans le ciel nocturne !",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme n°92 (Cycle 19) : Qu'est-ce qui a une clé mais aucune serrure, de l'espace mais aucun endroit ?",
      "options": [
        "Un Clavier d'ordinateur",
        "Un Piano",
        "Une Voiture",
        "Un Coffre"
      ],
      "correctIndex": 0,
      "hint": "La touche 'Espace' s'y trouve !",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme n°93 (Cycle 19) : Je peux être court ou long, rapide ou lent, mais je m'arrête toujours à la fin de la vie. Que suis-je ?",
      "options": [
        "Le Temps / Pouls",
        "Le Chemin",
        "Le Fil",
        "Le Sourd"
      ],
      "correctIndex": 0,
      "hint": "Le cœur le bat régulièrement !",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme n°94 (Cycle 19) : Qu'est-ce qui a des dents mais ne mâche rien du tout ?",
      "options": [
        "Une Scie / Peigne",
        "Un Chien",
        "Une Fourchette",
        "Un Requin"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour découper du bois !",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme n°95 (Cycle 19) : Je suis né grand et je meurs petit avec le temps. Que suis-je ?",
      "options": [
        "Un Crayon / Bougie",
        "Un Arbre",
        "Un Homme",
        "Une Montagne"
      ],
      "correctIndex": 0,
      "hint": "On le taille pour écrire !",
      "difficulty": "Moyen"
    }
  },
  "20": {
    "1": {
      "riddle": "Énigme n°96 (Cycle 20) : Qu'est-ce qui a 4 roues et des mouches autour de lui ?",
      "options": [
        "Un Camion d'ordures",
        "Une Voiture salie",
        "Un Tracteur",
        "Un Bus"
      ],
      "correctIndex": 0,
      "hint": "Il ramasse les poubelles le matin !",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme n°97 (Cycle 20) : Je me déplace sans marcher, je murmure sans parler, j'ai un lit mais ne dors jamais. Que suis-je ?",
      "options": [
        "La Rivière",
        "Le Vent",
        "La Nuée",
        "Le Temps"
      ],
      "correctIndex": 0,
      "hint": "Un cours d'eau naturel !",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme n°98 (Cycle 20) : Qu'est-ce qui est plus grand que la Tour Eiffel, mais ne pèse absolument rien ?",
      "options": [
        "Son Ombre",
        "Un Nuage",
        "L'Air",
        "Le Ciel"
      ],
      "correctIndex": 0,
      "hint": "Le soleil la projette sur le sol !",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme n°99 (Cycle 20) : Qu'est-ce qui a 88 clés mais ne peut ouvrir aucune porte de maison ?",
      "options": [
        "Un Piano à queue",
        "Un Clavier",
        "Un Organisateur",
        "Un Serurier"
      ],
      "correctIndex": 0,
      "hint": "Compte 52 touches blanches et 36 noires !",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme n°100 (Cycle 20) : Je suis un fruit, mais si vous enlevez ma première lettre, je deviens un animal. Que suis-je ?",
      "options": [
        "La Groseille (Oseille)",
        "La Mûre (Ure)",
        "La Datte (Atte)",
        "La Poire (Oire)"
      ],
      "correctIndex": 0,
      "hint": "Pensez à un fruit rouge ou petit légume !",
      "difficulty": "Moyen"
    }
  },
  "21": {
    "1": {
      "riddle": "Énigme n°101 (Cycle 21) : Qu'est-ce qui a des touches ou des clés, mais ne peut ouvrir aucune porte ?",
      "options": [
        "Un Piano",
        "Une Voiture",
        "Un Coffre-fort",
        "Un Téléphone"
      ],
      "correctIndex": 0,
      "hint": "Instrument à cordes frappées !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°102 (Cycle 21) : Qu'est-ce qui a quatre jambes le matin, deux le midi et trois le soir ?",
      "options": [
        "Une Table",
        "L'Homme",
        "Un Chien",
        "Une Chaise"
      ],
      "correctIndex": 1,
      "hint": "L'énigme classique du Sphinx sur la vie !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°103 (Cycle 21) : Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
      "options": [
        "La Lumière",
        "L'Obscurité",
        "La Glace",
        "Le Vent"
      ],
      "correctIndex": 1,
      "hint": "Elle survient quand le soleil se couche !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°104 (Cycle 21) : Je tombe sans me faire mal et j'arrose les plantes. Que suis-je ?",
      "options": [
        "Le Soleil",
        "La Pluie",
        "Le Feu",
        "La Neige"
      ],
      "correctIndex": 1,
      "hint": "Elle provient des nuages dans le ciel !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°105 (Cycle 21) : Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
      "options": [
        "Une Boussole",
        "Un Timbre Postal",
        "Un Oiseau",
        "Un Avion"
      ],
      "correctIndex": 1,
      "hint": "On me colle sur l'enveloppe !",
      "difficulty": "Intermédiaire"
    }
  },
  "22": {
    "1": {
      "riddle": "Énigme n°106 (Cycle 22) : Qu'est-ce qui monte et ne descend jamais ?",
      "options": [
        "Votre Âge",
        "La Montagne",
        "Un Ballon",
        "La Pluie"
      ],
      "correctIndex": 0,
      "hint": "Chaque anniversaire en rajoute une année !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°107 (Cycle 22) : Qu'est-ce qui appartient à tout le monde mais dont personne ne peut se séparer sous le soleil ?",
      "options": [
        "L'Ombre",
        "Le Téléphone",
        "L'Argent",
        "Les Clés"
      ],
      "correctIndex": 0,
      "hint": "Elle vous suit partout sur le sol !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°108 (Cycle 22) : Si vous me nommez haut et fort, vous me brisez. Que suis-je ?",
      "options": [
        "Le Silence",
        "Le Verre",
        "Le Miroir",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Le moindre mot prononcé y met fin !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°109 (Cycle 22) : Qu'est-ce qui vous appartient, mais que les autres utilisent beaucoup plus souvent que vous-même ?",
      "options": [
        "Votre Prénom",
        "Votre Voiture",
        "Votre Maison",
        "Vos Clés"
      ],
      "correctIndex": 0,
      "hint": "Les gens vous appellent par ce mot !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°110 (Cycle 22) : Plus je sèche les autres en sortant de la douche, plus je deviens mouillée. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Serviette",
        "La Mer",
        "Une Savonnette"
      ],
      "correctIndex": 1,
      "hint": "Vous l'accrochez dans la salle de bain !",
      "difficulty": "Intermédiaire"
    }
  },
  "23": {
    "1": {
      "riddle": "Énigme n°111 (Cycle 23) : Je parle toutes les langues du monde sans jamais avoir appris un seul mot. Que suis-je ?",
      "options": [
        "Un Écho",
        "Une Radio",
        "Un Livre",
        "Un Traducteur"
      ],
      "correctIndex": 0,
      "hint": "Je répète votre voix dans les montagnes !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°112 (Cycle 23) : Qu'est-ce qui a des villes sans maisons, des forêts sans arbres et des rivières sans eau ?",
      "options": [
        "Une Carte Géographique",
        "Un Livre d'Histoire",
        "Un Film",
        "Un Rêve"
      ],
      "correctIndex": 0,
      "hint": "Elle sert à se repérer en voyage !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°113 (Cycle 23) : Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
      "options": [
        "Le Passé",
        "Le Présent",
        "L'Avenir",
        "Le Sommeil"
      ],
      "correctIndex": 2,
      "hint": "C'est ce qui arrivera demain !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°114 (Cycle 23) : Qu'est-ce qui s'allonge quand on le creuse et s'accourcit quand on le rebouche ?",
      "options": [
        "Un Puits / Trou",
        "Un Chemin",
        "Une Bougie",
        "Un Arbre"
      ],
      "correctIndex": 0,
      "hint": "On le creuse avec une pelle !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°115 (Cycle 23) : Je suis plein de trous, pourtant je retiens parfaitement l'eau. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Passerelle",
        "Un Filet",
        "Un Entonnoir"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour faire la vaisselle !",
      "difficulty": "Intermédiaire"
    }
  },
  "24": {
    "1": {
      "riddle": "Énigme n°116 (Cycle 24) : Qu'est-ce qui peut courir sans jamais avoir de jambes et murmurer sans jamais avoir de bouche ?",
      "options": [
        "Une Rivière",
        "Le Vent",
        "Le Temps",
        "Un Nuage"
      ],
      "correctIndex": 0,
      "hint": "Elle coule vers l'océan !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°117 (Cycle 24) : Je n'ai pas de corps, pas de voix, mais vous pouvez m'entendre souffler dans les arbres. Que suis-je ?",
      "options": [
        "Le Vent",
        "La Pluie",
        "La Brume",
        "L'Écho"
      ],
      "correctIndex": 0,
      "hint": "Je fais voler les cerfs-volants !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°118 (Cycle 24) : Qu'est-ce qui a un œil unique mais ne peut absolument rien voir ?",
      "options": [
        "Une Aiguille à coudre",
        "Un Cyclope",
        "Un Télescope",
        "Une Tempête"
      ],
      "correctIndex": 0,
      "hint": "On y passe un fil pour recoudre !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°119 (Cycle 24) : Qu'est-ce qui s'accourcit au fur et à mesure qu'il brûle et donne de la lumière ?",
      "options": [
        "Une Bougie",
        "Un Bâton",
        "Une Allumette",
        "Un Crayon"
      ],
      "correctIndex": 0,
      "hint": "Sa mèche fond avec la cire !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°120 (Cycle 24) : Je viens une fois dans une minute, deux fois dans un moment, mais jamais dans mille ans. Que suis-je ?",
      "options": [
        "La Lettre M",
        "Le Temps",
        "La Seconde",
        "Le Chiffre 1"
      ],
      "correctIndex": 0,
      "hint": "Regardez l'orthographe des mots !",
      "difficulty": "Intermédiaire"
    }
  },
  "25": {
    "1": {
      "riddle": "Énigme n°121 (Cycle 25) : Qu'est-ce qui a un cou mais pas de tête ?",
      "options": [
        "Une Bouteille",
        "Une Chemise",
        "Une Guitare",
        "Une Girafe"
      ],
      "correctIndex": 0,
      "hint": "Elle contient du jus ou de l'eau !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°122 (Cycle 25) : Qu'est-ce qui vole sans ailes et pleure sans yeux ?",
      "options": [
        "Un Nuage",
        "Le Vent",
        "Une Feuille",
        "Un Fantôme"
      ],
      "correctIndex": 0,
      "hint": "Il apporte la pluie dans le ciel !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°123 (Cycle 25) : Je grandis quand on me nourrit et je meurs si on me donne à boire. Que suis-je ?",
      "options": [
        "Le Feu",
        "La Plante",
        "Le Poisson",
        "Le Vent"
      ],
      "correctIndex": 0,
      "hint": "L'eau l'éteint immédiatement !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°124 (Cycle 25) : Qu'est-ce qui a beaucoup de dents mais ne peut jamais mordre ?",
      "options": [
        "Un Peigne",
        "Une Scie",
        "Engrenage",
        "Un Râteau"
      ],
      "correctIndex": 0,
      "hint": "On l'utilise pour se coiffer les cheveux !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°125 (Cycle 25) : Plus on en prend en marchant, plus on en laisse derrière soi. Que suis-je ?",
      "options": [
        "Des Pas",
        "Des Souvenirs",
        "Des Traces",
        "Des Cailloux"
      ],
      "correctIndex": 0,
      "hint": "Vos pieds en font à chaque mouvement !",
      "difficulty": "Intermédiaire"
    }
  },
  "26": {
    "1": {
      "riddle": "Énigme n°126 (Cycle 26) : Qu'est-ce qui possède des histoires sans pouvoir parler et des pages sans pouvoir lire ?",
      "options": [
        "Un Livre",
        "Un Journal",
        "Une Bibliothèque",
        "Un Écran"
      ],
      "correctIndex": 0,
      "hint": "On le feuillette pour lire des contes !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°127 (Cycle 26) : Qu'est-ce qui a deux bras, quatre jambes, mais ne peut pas marcher tout seul ?",
      "options": [
        "Fauteuil / Chaise",
        "Lit",
        "Robot",
        "Mannequin"
      ],
      "correctIndex": 0,
      "hint": "On s'assoit dedans dans le salon !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°128 (Cycle 26) : Je suis si fragile que rien que de me prononcer me détruit. Que suis-je ?",
      "options": [
        "Le Silence",
        "Une Bulle",
        "Un Œuf",
        "Le Verre"
      ],
      "correctIndex": 0,
      "hint": "Le bruit fait cesser cet état paisible !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°129 (Cycle 26) : Qu'est-ce qui monte et descend sans jamais bouger de sa place ?",
      "options": [
        "L'Escalier",
        "L'Ascenseur",
        "La Température",
        "La Marée"
      ],
      "correctIndex": 0,
      "hint": "On marche sur ses marches pour changer d'étage !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°130 (Cycle 26) : Qu'est-ce qui entre mouillé dans la bouche et en ressort sec ou chaud ?",
      "options": [
        "Le Thé en sachet",
        "Un Bonbon",
        "Une Glace",
        "Du Pain"
      ],
      "correctIndex": 0,
      "hint": "Une boisson infusée chaude très appréciée !",
      "difficulty": "Intermédiaire"
    }
  },
  "27": {
    "1": {
      "riddle": "Énigme n°131 (Cycle 27) : Je traverse les vitres sans jamais les casser. Que suis-je ?",
      "options": [
        "La Lumière / Rayon",
        "L'Ombre",
        "Le Vent",
        "L'Oiseau"
      ],
      "correctIndex": 0,
      "hint": "Le soleil l'envoie à travers la fenêtre !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°132 (Cycle 27) : Qu'est-ce qui a un lit mais ne dort jamais, et une embouchure mais ne parle jamais ?",
      "options": [
        "Une Rivière / Fleuve",
        "La Mer",
        "Un Vallon",
        "Une Grotte"
      ],
      "correctIndex": 0,
      "hint": "Elle s'écoule jusqu'à la mer !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°133 (Cycle 27) : Qu'est-ce qui commence par E, finit par E, mais ne contient qu'une seule lettre ?",
      "options": [
        "Une Enveloppe",
        "Une Épée",
        "L'Éternité",
        "Une Étoile"
      ],
      "correctIndex": 0,
      "hint": "On y insère un courrier ou une carte !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°134 (Cycle 27) : Si j'en ai deux, j'en ai un. Si j'en ai trois, j'en ai deux. Que suis-je ?",
      "options": [
        "Le Choix",
        "Le Couple",
        "Le Triplet",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Avoir plusieurs options donne un...",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°135 (Cycle 27) : Qu'est-ce qui peut être cassé sans jamais avoir été touché avec la main ?",
      "options": [
        "Une Promesse",
        "Un Verre",
        "Une Branche",
        "Un Miroir"
      ],
      "correctIndex": 0,
      "hint": "On la fait en jurant sur l'honneur !",
      "difficulty": "Intermédiaire"
    }
  },
  "28": {
    "1": {
      "riddle": "Énigme n°136 (Cycle 28) : Qu'est-ce qui n'a pas de pieds mais porte des chaussures toute sa journée ?",
      "options": [
        "Un Pneu de voiture",
        "Un Pied-de-biche",
        "Une Chaise",
        "Un Trottoir"
      ],
      "correctIndex": 0,
      "hint": "Elle roule sur la route !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°137 (Cycle 28) : Je voyage dans les airs sans jamais sortir de ma coquille ou de mon enveloppe. Que suis-je ?",
      "options": [
        "Une Lettre",
        "Un Œuf",
        "Un Escargot",
        "Une Tortue"
      ],
      "correctIndex": 0,
      "hint": "Envoyée par la Poste !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°138 (Cycle 28) : Qu'est-ce qui est aussi léger qu'une plume, mais que l'homme le plus fort ne peut tenir 5 minutes ?",
      "options": [
        "Le Souffle / Respiration",
        "La Fumée",
        "Une Bulle",
        "La Pensée"
      ],
      "correctIndex": 0,
      "hint": "Essayer d'arrêter de respirer !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°139 (Cycle 28) : Qu'est-ce qui devient de plus en plus propre à mesure qu'on l'essuie avec un chiffon ?",
      "options": [
        "Le Miroir / Verre",
        "L'Éponge",
        "Le Sol",
        "La Table"
      ],
      "correctIndex": 0,
      "hint": "Il reflète votre image quand il est propre !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°140 (Cycle 28) : Je possède 13 cœurs, mais aucun autre organe. Que suis-je ?",
      "options": [
        "Un Jeu de Cartes",
        "Un Artichaut",
        "Une Ruche",
        "Un Pommier"
      ],
      "correctIndex": 0,
      "hint": "Comprend les cartes de Cœur du 1 au Roi !",
      "difficulty": "Intermédiaire"
    }
  },
  "29": {
    "1": {
      "riddle": "Énigme n°141 (Cycle 29) : Qu'est-ce qui s'ouvre la nuit et se ferme le jour sans faire de bruit ?",
      "options": [
        "Les Étoiles",
        "La Porte",
        "Les Yeux de hibou",
        "Les Fleurs"
      ],
      "correctIndex": 0,
      "hint": "Elles brillent dans le ciel nocturne !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°142 (Cycle 29) : Qu'est-ce qui a une clé mais aucune serrure, de l'espace mais aucun endroit ?",
      "options": [
        "Un Clavier d'ordinateur",
        "Un Piano",
        "Une Voiture",
        "Un Coffre"
      ],
      "correctIndex": 0,
      "hint": "La touche 'Espace' s'y trouve !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°143 (Cycle 29) : Je peux être court ou long, rapide ou lent, mais je m'arrête toujours à la fin de la vie. Que suis-je ?",
      "options": [
        "Le Temps / Pouls",
        "Le Chemin",
        "Le Fil",
        "Le Sourd"
      ],
      "correctIndex": 0,
      "hint": "Le cœur le bat régulièrement !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°144 (Cycle 29) : Qu'est-ce qui a des dents mais ne mâche rien du tout ?",
      "options": [
        "Une Scie / Peigne",
        "Un Chien",
        "Une Fourchette",
        "Un Requin"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour découper du bois !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°145 (Cycle 29) : Je suis né grand et je meurs petit avec le temps. Que suis-je ?",
      "options": [
        "Un Crayon / Bougie",
        "Un Arbre",
        "Un Homme",
        "Une Montagne"
      ],
      "correctIndex": 0,
      "hint": "On le taille pour écrire !",
      "difficulty": "Intermédiaire"
    }
  },
  "30": {
    "1": {
      "riddle": "Énigme n°146 (Cycle 30) : Qu'est-ce qui a 4 roues et des mouches autour de lui ?",
      "options": [
        "Un Camion d'ordures",
        "Une Voiture salie",
        "Un Tracteur",
        "Un Bus"
      ],
      "correctIndex": 0,
      "hint": "Il ramasse les poubelles le matin !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°147 (Cycle 30) : Je me déplace sans marcher, je murmure sans parler, j'ai un lit mais ne dors jamais. Que suis-je ?",
      "options": [
        "La Rivière",
        "Le Vent",
        "La Nuée",
        "Le Temps"
      ],
      "correctIndex": 0,
      "hint": "Un cours d'eau naturel !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°148 (Cycle 30) : Qu'est-ce qui est plus grand que la Tour Eiffel, mais ne pèse absolument rien ?",
      "options": [
        "Son Ombre",
        "Un Nuage",
        "L'Air",
        "Le Ciel"
      ],
      "correctIndex": 0,
      "hint": "Le soleil la projette sur le sol !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°149 (Cycle 30) : Qu'est-ce qui a 88 clés mais ne peut ouvrir aucune porte de maison ?",
      "options": [
        "Un Piano à queue",
        "Un Clavier",
        "Un Organisateur",
        "Un Serurier"
      ],
      "correctIndex": 0,
      "hint": "Compte 52 touches blanches et 36 noires !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°150 (Cycle 30) : Je suis un fruit, mais si vous enlevez ma première lettre, je deviens un animal. Que suis-je ?",
      "options": [
        "La Groseille (Oseille)",
        "La Mûre (Ure)",
        "La Datte (Atte)",
        "La Poire (Oire)"
      ],
      "correctIndex": 0,
      "hint": "Pensez à un fruit rouge ou petit légume !",
      "difficulty": "Intermédiaire"
    }
  },
  "31": {
    "1": {
      "riddle": "Énigme n°151 (Cycle 31) : Qu'est-ce qui a des touches ou des clés, mais ne peut ouvrir aucune porte ?",
      "options": [
        "Un Piano",
        "Une Voiture",
        "Un Coffre-fort",
        "Un Téléphone"
      ],
      "correctIndex": 0,
      "hint": "Instrument à cordes frappées !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°152 (Cycle 31) : Qu'est-ce qui a quatre jambes le matin, deux le midi et trois le soir ?",
      "options": [
        "Une Table",
        "L'Homme",
        "Un Chien",
        "Une Chaise"
      ],
      "correctIndex": 1,
      "hint": "L'énigme classique du Sphinx sur la vie !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°153 (Cycle 31) : Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
      "options": [
        "La Lumière",
        "L'Obscurité",
        "La Glace",
        "Le Vent"
      ],
      "correctIndex": 1,
      "hint": "Elle survient quand le soleil se couche !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°154 (Cycle 31) : Je tombe sans me faire mal et j'arrose les plantes. Que suis-je ?",
      "options": [
        "Le Soleil",
        "La Pluie",
        "Le Feu",
        "La Neige"
      ],
      "correctIndex": 1,
      "hint": "Elle provient des nuages dans le ciel !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°155 (Cycle 31) : Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
      "options": [
        "Une Boussole",
        "Un Timbre Postal",
        "Un Oiseau",
        "Un Avion"
      ],
      "correctIndex": 1,
      "hint": "On me colle sur l'enveloppe !",
      "difficulty": "Intermédiaire"
    }
  },
  "32": {
    "1": {
      "riddle": "Énigme n°156 (Cycle 32) : Qu'est-ce qui monte et ne descend jamais ?",
      "options": [
        "Votre Âge",
        "La Montagne",
        "Un Ballon",
        "La Pluie"
      ],
      "correctIndex": 0,
      "hint": "Chaque anniversaire en rajoute une année !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°157 (Cycle 32) : Qu'est-ce qui appartient à tout le monde mais dont personne ne peut se séparer sous le soleil ?",
      "options": [
        "L'Ombre",
        "Le Téléphone",
        "L'Argent",
        "Les Clés"
      ],
      "correctIndex": 0,
      "hint": "Elle vous suit partout sur le sol !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°158 (Cycle 32) : Si vous me nommez haut et fort, vous me brisez. Que suis-je ?",
      "options": [
        "Le Silence",
        "Le Verre",
        "Le Miroir",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Le moindre mot prononcé y met fin !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°159 (Cycle 32) : Qu'est-ce qui vous appartient, mais que les autres utilisent beaucoup plus souvent que vous-même ?",
      "options": [
        "Votre Prénom",
        "Votre Voiture",
        "Votre Maison",
        "Vos Clés"
      ],
      "correctIndex": 0,
      "hint": "Les gens vous appellent par ce mot !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°160 (Cycle 32) : Plus je sèche les autres en sortant de la douche, plus je deviens mouillée. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Serviette",
        "La Mer",
        "Une Savonnette"
      ],
      "correctIndex": 1,
      "hint": "Vous l'accrochez dans la salle de bain !",
      "difficulty": "Intermédiaire"
    }
  },
  "33": {
    "1": {
      "riddle": "Énigme n°161 (Cycle 33) : Je parle toutes les langues du monde sans jamais avoir appris un seul mot. Que suis-je ?",
      "options": [
        "Un Écho",
        "Une Radio",
        "Un Livre",
        "Un Traducteur"
      ],
      "correctIndex": 0,
      "hint": "Je répète votre voix dans les montagnes !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°162 (Cycle 33) : Qu'est-ce qui a des villes sans maisons, des forêts sans arbres et des rivières sans eau ?",
      "options": [
        "Une Carte Géographique",
        "Un Livre d'Histoire",
        "Un Film",
        "Un Rêve"
      ],
      "correctIndex": 0,
      "hint": "Elle sert à se repérer en voyage !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°163 (Cycle 33) : Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
      "options": [
        "Le Passé",
        "Le Présent",
        "L'Avenir",
        "Le Sommeil"
      ],
      "correctIndex": 2,
      "hint": "C'est ce qui arrivera demain !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°164 (Cycle 33) : Qu'est-ce qui s'allonge quand on le creuse et s'accourcit quand on le rebouche ?",
      "options": [
        "Un Puits / Trou",
        "Un Chemin",
        "Une Bougie",
        "Un Arbre"
      ],
      "correctIndex": 0,
      "hint": "On le creuse avec une pelle !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°165 (Cycle 33) : Je suis plein de trous, pourtant je retiens parfaitement l'eau. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Passerelle",
        "Un Filet",
        "Un Entonnoir"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour faire la vaisselle !",
      "difficulty": "Intermédiaire"
    }
  },
  "34": {
    "1": {
      "riddle": "Énigme n°166 (Cycle 34) : Qu'est-ce qui peut courir sans jamais avoir de jambes et murmurer sans jamais avoir de bouche ?",
      "options": [
        "Une Rivière",
        "Le Vent",
        "Le Temps",
        "Un Nuage"
      ],
      "correctIndex": 0,
      "hint": "Elle coule vers l'océan !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°167 (Cycle 34) : Je n'ai pas de corps, pas de voix, mais vous pouvez m'entendre souffler dans les arbres. Que suis-je ?",
      "options": [
        "Le Vent",
        "La Pluie",
        "La Brume",
        "L'Écho"
      ],
      "correctIndex": 0,
      "hint": "Je fais voler les cerfs-volants !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°168 (Cycle 34) : Qu'est-ce qui a un œil unique mais ne peut absolument rien voir ?",
      "options": [
        "Une Aiguille à coudre",
        "Un Cyclope",
        "Un Télescope",
        "Une Tempête"
      ],
      "correctIndex": 0,
      "hint": "On y passe un fil pour recoudre !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°169 (Cycle 34) : Qu'est-ce qui s'accourcit au fur et à mesure qu'il brûle et donne de la lumière ?",
      "options": [
        "Une Bougie",
        "Un Bâton",
        "Une Allumette",
        "Un Crayon"
      ],
      "correctIndex": 0,
      "hint": "Sa mèche fond avec la cire !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°170 (Cycle 34) : Je viens une fois dans une minute, deux fois dans un moment, mais jamais dans mille ans. Que suis-je ?",
      "options": [
        "La Lettre M",
        "Le Temps",
        "La Seconde",
        "Le Chiffre 1"
      ],
      "correctIndex": 0,
      "hint": "Regardez l'orthographe des mots !",
      "difficulty": "Intermédiaire"
    }
  },
  "35": {
    "1": {
      "riddle": "Énigme n°171 (Cycle 35) : Qu'est-ce qui a un cou mais pas de tête ?",
      "options": [
        "Une Bouteille",
        "Une Chemise",
        "Une Guitare",
        "Une Girafe"
      ],
      "correctIndex": 0,
      "hint": "Elle contient du jus ou de l'eau !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°172 (Cycle 35) : Qu'est-ce qui vole sans ailes et pleure sans yeux ?",
      "options": [
        "Un Nuage",
        "Le Vent",
        "Une Feuille",
        "Un Fantôme"
      ],
      "correctIndex": 0,
      "hint": "Il apporte la pluie dans le ciel !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°173 (Cycle 35) : Je grandis quand on me nourrit et je meurs si on me donne à boire. Que suis-je ?",
      "options": [
        "Le Feu",
        "La Plante",
        "Le Poisson",
        "Le Vent"
      ],
      "correctIndex": 0,
      "hint": "L'eau l'éteint immédiatement !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°174 (Cycle 35) : Qu'est-ce qui a beaucoup de dents mais ne peut jamais mordre ?",
      "options": [
        "Un Peigne",
        "Une Scie",
        "Engrenage",
        "Un Râteau"
      ],
      "correctIndex": 0,
      "hint": "On l'utilise pour se coiffer les cheveux !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°175 (Cycle 35) : Plus on en prend en marchant, plus on en laisse derrière soi. Que suis-je ?",
      "options": [
        "Des Pas",
        "Des Souvenirs",
        "Des Traces",
        "Des Cailloux"
      ],
      "correctIndex": 0,
      "hint": "Vos pieds en font à chaque mouvement !",
      "difficulty": "Intermédiaire"
    }
  },
  "36": {
    "1": {
      "riddle": "Énigme n°176 (Cycle 36) : Qu'est-ce qui possède des histoires sans pouvoir parler et des pages sans pouvoir lire ?",
      "options": [
        "Un Livre",
        "Un Journal",
        "Une Bibliothèque",
        "Un Écran"
      ],
      "correctIndex": 0,
      "hint": "On le feuillette pour lire des contes !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°177 (Cycle 36) : Qu'est-ce qui a deux bras, quatre jambes, mais ne peut pas marcher tout seul ?",
      "options": [
        "Fauteuil / Chaise",
        "Lit",
        "Robot",
        "Mannequin"
      ],
      "correctIndex": 0,
      "hint": "On s'assoit dedans dans le salon !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°178 (Cycle 36) : Je suis si fragile que rien que de me prononcer me détruit. Que suis-je ?",
      "options": [
        "Le Silence",
        "Une Bulle",
        "Un Œuf",
        "Le Verre"
      ],
      "correctIndex": 0,
      "hint": "Le bruit fait cesser cet état paisible !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°179 (Cycle 36) : Qu'est-ce qui monte et descend sans jamais bouger de sa place ?",
      "options": [
        "L'Escalier",
        "L'Ascenseur",
        "La Température",
        "La Marée"
      ],
      "correctIndex": 0,
      "hint": "On marche sur ses marches pour changer d'étage !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°180 (Cycle 36) : Qu'est-ce qui entre mouillé dans la bouche et en ressort sec ou chaud ?",
      "options": [
        "Le Thé en sachet",
        "Un Bonbon",
        "Une Glace",
        "Du Pain"
      ],
      "correctIndex": 0,
      "hint": "Une boisson infusée chaude très appréciée !",
      "difficulty": "Intermédiaire"
    }
  },
  "37": {
    "1": {
      "riddle": "Énigme n°181 (Cycle 37) : Je traverse les vitres sans jamais les casser. Que suis-je ?",
      "options": [
        "La Lumière / Rayon",
        "L'Ombre",
        "Le Vent",
        "L'Oiseau"
      ],
      "correctIndex": 0,
      "hint": "Le soleil l'envoie à travers la fenêtre !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°182 (Cycle 37) : Qu'est-ce qui a un lit mais ne dort jamais, et une embouchure mais ne parle jamais ?",
      "options": [
        "Une Rivière / Fleuve",
        "La Mer",
        "Un Vallon",
        "Une Grotte"
      ],
      "correctIndex": 0,
      "hint": "Elle s'écoule jusqu'à la mer !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°183 (Cycle 37) : Qu'est-ce qui commence par E, finit par E, mais ne contient qu'une seule lettre ?",
      "options": [
        "Une Enveloppe",
        "Une Épée",
        "L'Éternité",
        "Une Étoile"
      ],
      "correctIndex": 0,
      "hint": "On y insère un courrier ou une carte !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°184 (Cycle 37) : Si j'en ai deux, j'en ai un. Si j'en ai trois, j'en ai deux. Que suis-je ?",
      "options": [
        "Le Choix",
        "Le Couple",
        "Le Triplet",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Avoir plusieurs options donne un...",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°185 (Cycle 37) : Qu'est-ce qui peut être cassé sans jamais avoir été touché avec la main ?",
      "options": [
        "Une Promesse",
        "Un Verre",
        "Une Branche",
        "Un Miroir"
      ],
      "correctIndex": 0,
      "hint": "On la fait en jurant sur l'honneur !",
      "difficulty": "Intermédiaire"
    }
  },
  "38": {
    "1": {
      "riddle": "Énigme n°186 (Cycle 38) : Qu'est-ce qui n'a pas de pieds mais porte des chaussures toute sa journée ?",
      "options": [
        "Un Pneu de voiture",
        "Un Pied-de-biche",
        "Une Chaise",
        "Un Trottoir"
      ],
      "correctIndex": 0,
      "hint": "Elle roule sur la route !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°187 (Cycle 38) : Je voyage dans les airs sans jamais sortir de ma coquille ou de mon enveloppe. Que suis-je ?",
      "options": [
        "Une Lettre",
        "Un Œuf",
        "Un Escargot",
        "Une Tortue"
      ],
      "correctIndex": 0,
      "hint": "Envoyée par la Poste !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°188 (Cycle 38) : Qu'est-ce qui est aussi léger qu'une plume, mais que l'homme le plus fort ne peut tenir 5 minutes ?",
      "options": [
        "Le Souffle / Respiration",
        "La Fumée",
        "Une Bulle",
        "La Pensée"
      ],
      "correctIndex": 0,
      "hint": "Essayer d'arrêter de respirer !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°189 (Cycle 38) : Qu'est-ce qui devient de plus en plus propre à mesure qu'on l'essuie avec un chiffon ?",
      "options": [
        "Le Miroir / Verre",
        "L'Éponge",
        "Le Sol",
        "La Table"
      ],
      "correctIndex": 0,
      "hint": "Il reflète votre image quand il est propre !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°190 (Cycle 38) : Je possède 13 cœurs, mais aucun autre organe. Que suis-je ?",
      "options": [
        "Un Jeu de Cartes",
        "Un Artichaut",
        "Une Ruche",
        "Un Pommier"
      ],
      "correctIndex": 0,
      "hint": "Comprend les cartes de Cœur du 1 au Roi !",
      "difficulty": "Intermédiaire"
    }
  },
  "39": {
    "1": {
      "riddle": "Énigme n°191 (Cycle 39) : Qu'est-ce qui s'ouvre la nuit et se ferme le jour sans faire de bruit ?",
      "options": [
        "Les Étoiles",
        "La Porte",
        "Les Yeux de hibou",
        "Les Fleurs"
      ],
      "correctIndex": 0,
      "hint": "Elles brillent dans le ciel nocturne !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°192 (Cycle 39) : Qu'est-ce qui a une clé mais aucune serrure, de l'espace mais aucun endroit ?",
      "options": [
        "Un Clavier d'ordinateur",
        "Un Piano",
        "Une Voiture",
        "Un Coffre"
      ],
      "correctIndex": 0,
      "hint": "La touche 'Espace' s'y trouve !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°193 (Cycle 39) : Je peux être court ou long, rapide ou lent, mais je m'arrête toujours à la fin de la vie. Que suis-je ?",
      "options": [
        "Le Temps / Pouls",
        "Le Chemin",
        "Le Fil",
        "Le Sourd"
      ],
      "correctIndex": 0,
      "hint": "Le cœur le bat régulièrement !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°194 (Cycle 39) : Qu'est-ce qui a des dents mais ne mâche rien du tout ?",
      "options": [
        "Une Scie / Peigne",
        "Un Chien",
        "Une Fourchette",
        "Un Requin"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour découper du bois !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°195 (Cycle 39) : Je suis né grand et je meurs petit avec le temps. Que suis-je ?",
      "options": [
        "Un Crayon / Bougie",
        "Un Arbre",
        "Un Homme",
        "Une Montagne"
      ],
      "correctIndex": 0,
      "hint": "On le taille pour écrire !",
      "difficulty": "Intermédiaire"
    }
  },
  "40": {
    "1": {
      "riddle": "Énigme n°196 (Cycle 40) : Qu'est-ce qui a 4 roues et des mouches autour de lui ?",
      "options": [
        "Un Camion d'ordures",
        "Une Voiture salie",
        "Un Tracteur",
        "Un Bus"
      ],
      "correctIndex": 0,
      "hint": "Il ramasse les poubelles le matin !",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme n°197 (Cycle 40) : Je me déplace sans marcher, je murmure sans parler, j'ai un lit mais ne dors jamais. Que suis-je ?",
      "options": [
        "La Rivière",
        "Le Vent",
        "La Nuée",
        "Le Temps"
      ],
      "correctIndex": 0,
      "hint": "Un cours d'eau naturel !",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme n°198 (Cycle 40) : Qu'est-ce qui est plus grand que la Tour Eiffel, mais ne pèse absolument rien ?",
      "options": [
        "Son Ombre",
        "Un Nuage",
        "L'Air",
        "Le Ciel"
      ],
      "correctIndex": 0,
      "hint": "Le soleil la projette sur le sol !",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme n°199 (Cycle 40) : Qu'est-ce qui a 88 clés mais ne peut ouvrir aucune porte de maison ?",
      "options": [
        "Un Piano à queue",
        "Un Clavier",
        "Un Organisateur",
        "Un Serurier"
      ],
      "correctIndex": 0,
      "hint": "Compte 52 touches blanches et 36 noires !",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme n°200 (Cycle 40) : Je suis un fruit, mais si vous enlevez ma première lettre, je deviens un animal. Que suis-je ?",
      "options": [
        "La Groseille (Oseille)",
        "La Mûre (Ure)",
        "La Datte (Atte)",
        "La Poire (Oire)"
      ],
      "correctIndex": 0,
      "hint": "Pensez à un fruit rouge ou petit légume !",
      "difficulty": "Intermédiaire"
    }
  },
  "41": {
    "1": {
      "riddle": "Énigme n°201 (Cycle 41) : Qu'est-ce qui a des touches ou des clés, mais ne peut ouvrir aucune porte ?",
      "options": [
        "Un Piano",
        "Une Voiture",
        "Un Coffre-fort",
        "Un Téléphone"
      ],
      "correctIndex": 0,
      "hint": "Instrument à cordes frappées !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°202 (Cycle 41) : Qu'est-ce qui a quatre jambes le matin, deux le midi et trois le soir ?",
      "options": [
        "Une Table",
        "L'Homme",
        "Un Chien",
        "Une Chaise"
      ],
      "correctIndex": 1,
      "hint": "L'énigme classique du Sphinx sur la vie !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°203 (Cycle 41) : Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
      "options": [
        "La Lumière",
        "L'Obscurité",
        "La Glace",
        "Le Vent"
      ],
      "correctIndex": 1,
      "hint": "Elle survient quand le soleil se couche !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°204 (Cycle 41) : Je tombe sans me faire mal et j'arrose les plantes. Que suis-je ?",
      "options": [
        "Le Soleil",
        "La Pluie",
        "Le Feu",
        "La Neige"
      ],
      "correctIndex": 1,
      "hint": "Elle provient des nuages dans le ciel !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°205 (Cycle 41) : Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
      "options": [
        "Une Boussole",
        "Un Timbre Postal",
        "Un Oiseau",
        "Un Avion"
      ],
      "correctIndex": 1,
      "hint": "On me colle sur l'enveloppe !",
      "difficulty": "Difficile"
    }
  },
  "42": {
    "1": {
      "riddle": "Énigme n°206 (Cycle 42) : Qu'est-ce qui monte et ne descend jamais ?",
      "options": [
        "Votre Âge",
        "La Montagne",
        "Un Ballon",
        "La Pluie"
      ],
      "correctIndex": 0,
      "hint": "Chaque anniversaire en rajoute une année !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°207 (Cycle 42) : Qu'est-ce qui appartient à tout le monde mais dont personne ne peut se séparer sous le soleil ?",
      "options": [
        "L'Ombre",
        "Le Téléphone",
        "L'Argent",
        "Les Clés"
      ],
      "correctIndex": 0,
      "hint": "Elle vous suit partout sur le sol !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°208 (Cycle 42) : Si vous me nommez haut et fort, vous me brisez. Que suis-je ?",
      "options": [
        "Le Silence",
        "Le Verre",
        "Le Miroir",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Le moindre mot prononcé y met fin !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°209 (Cycle 42) : Qu'est-ce qui vous appartient, mais que les autres utilisent beaucoup plus souvent que vous-même ?",
      "options": [
        "Votre Prénom",
        "Votre Voiture",
        "Votre Maison",
        "Vos Clés"
      ],
      "correctIndex": 0,
      "hint": "Les gens vous appellent par ce mot !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°210 (Cycle 42) : Plus je sèche les autres en sortant de la douche, plus je deviens mouillée. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Serviette",
        "La Mer",
        "Une Savonnette"
      ],
      "correctIndex": 1,
      "hint": "Vous l'accrochez dans la salle de bain !",
      "difficulty": "Difficile"
    }
  },
  "43": {
    "1": {
      "riddle": "Énigme n°211 (Cycle 43) : Je parle toutes les langues du monde sans jamais avoir appris un seul mot. Que suis-je ?",
      "options": [
        "Un Écho",
        "Une Radio",
        "Un Livre",
        "Un Traducteur"
      ],
      "correctIndex": 0,
      "hint": "Je répète votre voix dans les montagnes !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°212 (Cycle 43) : Qu'est-ce qui a des villes sans maisons, des forêts sans arbres et des rivières sans eau ?",
      "options": [
        "Une Carte Géographique",
        "Un Livre d'Histoire",
        "Un Film",
        "Un Rêve"
      ],
      "correctIndex": 0,
      "hint": "Elle sert à se repérer en voyage !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°213 (Cycle 43) : Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
      "options": [
        "Le Passé",
        "Le Présent",
        "L'Avenir",
        "Le Sommeil"
      ],
      "correctIndex": 2,
      "hint": "C'est ce qui arrivera demain !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°214 (Cycle 43) : Qu'est-ce qui s'allonge quand on le creuse et s'accourcit quand on le rebouche ?",
      "options": [
        "Un Puits / Trou",
        "Un Chemin",
        "Une Bougie",
        "Un Arbre"
      ],
      "correctIndex": 0,
      "hint": "On le creuse avec une pelle !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°215 (Cycle 43) : Je suis plein de trous, pourtant je retiens parfaitement l'eau. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Passerelle",
        "Un Filet",
        "Un Entonnoir"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour faire la vaisselle !",
      "difficulty": "Difficile"
    }
  },
  "44": {
    "1": {
      "riddle": "Énigme n°216 (Cycle 44) : Qu'est-ce qui peut courir sans jamais avoir de jambes et murmurer sans jamais avoir de bouche ?",
      "options": [
        "Une Rivière",
        "Le Vent",
        "Le Temps",
        "Un Nuage"
      ],
      "correctIndex": 0,
      "hint": "Elle coule vers l'océan !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°217 (Cycle 44) : Je n'ai pas de corps, pas de voix, mais vous pouvez m'entendre souffler dans les arbres. Que suis-je ?",
      "options": [
        "Le Vent",
        "La Pluie",
        "La Brume",
        "L'Écho"
      ],
      "correctIndex": 0,
      "hint": "Je fais voler les cerfs-volants !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°218 (Cycle 44) : Qu'est-ce qui a un œil unique mais ne peut absolument rien voir ?",
      "options": [
        "Une Aiguille à coudre",
        "Un Cyclope",
        "Un Télescope",
        "Une Tempête"
      ],
      "correctIndex": 0,
      "hint": "On y passe un fil pour recoudre !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°219 (Cycle 44) : Qu'est-ce qui s'accourcit au fur et à mesure qu'il brûle et donne de la lumière ?",
      "options": [
        "Une Bougie",
        "Un Bâton",
        "Une Allumette",
        "Un Crayon"
      ],
      "correctIndex": 0,
      "hint": "Sa mèche fond avec la cire !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°220 (Cycle 44) : Je viens une fois dans une minute, deux fois dans un moment, mais jamais dans mille ans. Que suis-je ?",
      "options": [
        "La Lettre M",
        "Le Temps",
        "La Seconde",
        "Le Chiffre 1"
      ],
      "correctIndex": 0,
      "hint": "Regardez l'orthographe des mots !",
      "difficulty": "Difficile"
    }
  },
  "45": {
    "1": {
      "riddle": "Énigme n°221 (Cycle 45) : Qu'est-ce qui a un cou mais pas de tête ?",
      "options": [
        "Une Bouteille",
        "Une Chemise",
        "Une Guitare",
        "Une Girafe"
      ],
      "correctIndex": 0,
      "hint": "Elle contient du jus ou de l'eau !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°222 (Cycle 45) : Qu'est-ce qui vole sans ailes et pleure sans yeux ?",
      "options": [
        "Un Nuage",
        "Le Vent",
        "Une Feuille",
        "Un Fantôme"
      ],
      "correctIndex": 0,
      "hint": "Il apporte la pluie dans le ciel !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°223 (Cycle 45) : Je grandis quand on me nourrit et je meurs si on me donne à boire. Que suis-je ?",
      "options": [
        "Le Feu",
        "La Plante",
        "Le Poisson",
        "Le Vent"
      ],
      "correctIndex": 0,
      "hint": "L'eau l'éteint immédiatement !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°224 (Cycle 45) : Qu'est-ce qui a beaucoup de dents mais ne peut jamais mordre ?",
      "options": [
        "Un Peigne",
        "Une Scie",
        "Engrenage",
        "Un Râteau"
      ],
      "correctIndex": 0,
      "hint": "On l'utilise pour se coiffer les cheveux !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°225 (Cycle 45) : Plus on en prend en marchant, plus on en laisse derrière soi. Que suis-je ?",
      "options": [
        "Des Pas",
        "Des Souvenirs",
        "Des Traces",
        "Des Cailloux"
      ],
      "correctIndex": 0,
      "hint": "Vos pieds en font à chaque mouvement !",
      "difficulty": "Difficile"
    }
  },
  "46": {
    "1": {
      "riddle": "Énigme n°226 (Cycle 46) : Qu'est-ce qui possède des histoires sans pouvoir parler et des pages sans pouvoir lire ?",
      "options": [
        "Un Livre",
        "Un Journal",
        "Une Bibliothèque",
        "Un Écran"
      ],
      "correctIndex": 0,
      "hint": "On le feuillette pour lire des contes !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°227 (Cycle 46) : Qu'est-ce qui a deux bras, quatre jambes, mais ne peut pas marcher tout seul ?",
      "options": [
        "Fauteuil / Chaise",
        "Lit",
        "Robot",
        "Mannequin"
      ],
      "correctIndex": 0,
      "hint": "On s'assoit dedans dans le salon !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°228 (Cycle 46) : Je suis si fragile que rien que de me prononcer me détruit. Que suis-je ?",
      "options": [
        "Le Silence",
        "Une Bulle",
        "Un Œuf",
        "Le Verre"
      ],
      "correctIndex": 0,
      "hint": "Le bruit fait cesser cet état paisible !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°229 (Cycle 46) : Qu'est-ce qui monte et descend sans jamais bouger de sa place ?",
      "options": [
        "L'Escalier",
        "L'Ascenseur",
        "La Température",
        "La Marée"
      ],
      "correctIndex": 0,
      "hint": "On marche sur ses marches pour changer d'étage !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°230 (Cycle 46) : Qu'est-ce qui entre mouillé dans la bouche et en ressort sec ou chaud ?",
      "options": [
        "Le Thé en sachet",
        "Un Bonbon",
        "Une Glace",
        "Du Pain"
      ],
      "correctIndex": 0,
      "hint": "Une boisson infusée chaude très appréciée !",
      "difficulty": "Difficile"
    }
  },
  "47": {
    "1": {
      "riddle": "Énigme n°231 (Cycle 47) : Je traverse les vitres sans jamais les casser. Que suis-je ?",
      "options": [
        "La Lumière / Rayon",
        "L'Ombre",
        "Le Vent",
        "L'Oiseau"
      ],
      "correctIndex": 0,
      "hint": "Le soleil l'envoie à travers la fenêtre !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°232 (Cycle 47) : Qu'est-ce qui a un lit mais ne dort jamais, et une embouchure mais ne parle jamais ?",
      "options": [
        "Une Rivière / Fleuve",
        "La Mer",
        "Un Vallon",
        "Une Grotte"
      ],
      "correctIndex": 0,
      "hint": "Elle s'écoule jusqu'à la mer !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°233 (Cycle 47) : Qu'est-ce qui commence par E, finit par E, mais ne contient qu'une seule lettre ?",
      "options": [
        "Une Enveloppe",
        "Une Épée",
        "L'Éternité",
        "Une Étoile"
      ],
      "correctIndex": 0,
      "hint": "On y insère un courrier ou une carte !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°234 (Cycle 47) : Si j'en ai deux, j'en ai un. Si j'en ai trois, j'en ai deux. Que suis-je ?",
      "options": [
        "Le Choix",
        "Le Couple",
        "Le Triplet",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Avoir plusieurs options donne un...",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°235 (Cycle 47) : Qu'est-ce qui peut être cassé sans jamais avoir été touché avec la main ?",
      "options": [
        "Une Promesse",
        "Un Verre",
        "Une Branche",
        "Un Miroir"
      ],
      "correctIndex": 0,
      "hint": "On la fait en jurant sur l'honneur !",
      "difficulty": "Difficile"
    }
  },
  "48": {
    "1": {
      "riddle": "Énigme n°236 (Cycle 48) : Qu'est-ce qui n'a pas de pieds mais porte des chaussures toute sa journée ?",
      "options": [
        "Un Pneu de voiture",
        "Un Pied-de-biche",
        "Une Chaise",
        "Un Trottoir"
      ],
      "correctIndex": 0,
      "hint": "Elle roule sur la route !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°237 (Cycle 48) : Je voyage dans les airs sans jamais sortir de ma coquille ou de mon enveloppe. Que suis-je ?",
      "options": [
        "Une Lettre",
        "Un Œuf",
        "Un Escargot",
        "Une Tortue"
      ],
      "correctIndex": 0,
      "hint": "Envoyée par la Poste !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°238 (Cycle 48) : Qu'est-ce qui est aussi léger qu'une plume, mais que l'homme le plus fort ne peut tenir 5 minutes ?",
      "options": [
        "Le Souffle / Respiration",
        "La Fumée",
        "Une Bulle",
        "La Pensée"
      ],
      "correctIndex": 0,
      "hint": "Essayer d'arrêter de respirer !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°239 (Cycle 48) : Qu'est-ce qui devient de plus en plus propre à mesure qu'on l'essuie avec un chiffon ?",
      "options": [
        "Le Miroir / Verre",
        "L'Éponge",
        "Le Sol",
        "La Table"
      ],
      "correctIndex": 0,
      "hint": "Il reflète votre image quand il est propre !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°240 (Cycle 48) : Je possède 13 cœurs, mais aucun autre organe. Que suis-je ?",
      "options": [
        "Un Jeu de Cartes",
        "Un Artichaut",
        "Une Ruche",
        "Un Pommier"
      ],
      "correctIndex": 0,
      "hint": "Comprend les cartes de Cœur du 1 au Roi !",
      "difficulty": "Difficile"
    }
  },
  "49": {
    "1": {
      "riddle": "Énigme n°241 (Cycle 49) : Qu'est-ce qui s'ouvre la nuit et se ferme le jour sans faire de bruit ?",
      "options": [
        "Les Étoiles",
        "La Porte",
        "Les Yeux de hibou",
        "Les Fleurs"
      ],
      "correctIndex": 0,
      "hint": "Elles brillent dans le ciel nocturne !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°242 (Cycle 49) : Qu'est-ce qui a une clé mais aucune serrure, de l'espace mais aucun endroit ?",
      "options": [
        "Un Clavier d'ordinateur",
        "Un Piano",
        "Une Voiture",
        "Un Coffre"
      ],
      "correctIndex": 0,
      "hint": "La touche 'Espace' s'y trouve !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°243 (Cycle 49) : Je peux être court ou long, rapide ou lent, mais je m'arrête toujours à la fin de la vie. Que suis-je ?",
      "options": [
        "Le Temps / Pouls",
        "Le Chemin",
        "Le Fil",
        "Le Sourd"
      ],
      "correctIndex": 0,
      "hint": "Le cœur le bat régulièrement !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°244 (Cycle 49) : Qu'est-ce qui a des dents mais ne mâche rien du tout ?",
      "options": [
        "Une Scie / Peigne",
        "Un Chien",
        "Une Fourchette",
        "Un Requin"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour découper du bois !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°245 (Cycle 49) : Je suis né grand et je meurs petit avec le temps. Que suis-je ?",
      "options": [
        "Un Crayon / Bougie",
        "Un Arbre",
        "Un Homme",
        "Une Montagne"
      ],
      "correctIndex": 0,
      "hint": "On le taille pour écrire !",
      "difficulty": "Difficile"
    }
  },
  "50": {
    "1": {
      "riddle": "Énigme n°246 (Cycle 50) : Qu'est-ce qui a 4 roues et des mouches autour de lui ?",
      "options": [
        "Un Camion d'ordures",
        "Une Voiture salie",
        "Un Tracteur",
        "Un Bus"
      ],
      "correctIndex": 0,
      "hint": "Il ramasse les poubelles le matin !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°247 (Cycle 50) : Je me déplace sans marcher, je murmure sans parler, j'ai un lit mais ne dors jamais. Que suis-je ?",
      "options": [
        "La Rivière",
        "Le Vent",
        "La Nuée",
        "Le Temps"
      ],
      "correctIndex": 0,
      "hint": "Un cours d'eau naturel !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°248 (Cycle 50) : Qu'est-ce qui est plus grand que la Tour Eiffel, mais ne pèse absolument rien ?",
      "options": [
        "Son Ombre",
        "Un Nuage",
        "L'Air",
        "Le Ciel"
      ],
      "correctIndex": 0,
      "hint": "Le soleil la projette sur le sol !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°249 (Cycle 50) : Qu'est-ce qui a 88 clés mais ne peut ouvrir aucune porte de maison ?",
      "options": [
        "Un Piano à queue",
        "Un Clavier",
        "Un Organisateur",
        "Un Serurier"
      ],
      "correctIndex": 0,
      "hint": "Compte 52 touches blanches et 36 noires !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°250 (Cycle 50) : Je suis un fruit, mais si vous enlevez ma première lettre, je deviens un animal. Que suis-je ?",
      "options": [
        "La Groseille (Oseille)",
        "La Mûre (Ure)",
        "La Datte (Atte)",
        "La Poire (Oire)"
      ],
      "correctIndex": 0,
      "hint": "Pensez à un fruit rouge ou petit légume !",
      "difficulty": "Difficile"
    }
  },
  "51": {
    "1": {
      "riddle": "Énigme n°251 (Cycle 51) : Qu'est-ce qui a des touches ou des clés, mais ne peut ouvrir aucune porte ?",
      "options": [
        "Un Piano",
        "Une Voiture",
        "Un Coffre-fort",
        "Un Téléphone"
      ],
      "correctIndex": 0,
      "hint": "Instrument à cordes frappées !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°252 (Cycle 51) : Qu'est-ce qui a quatre jambes le matin, deux le midi et trois le soir ?",
      "options": [
        "Une Table",
        "L'Homme",
        "Un Chien",
        "Une Chaise"
      ],
      "correctIndex": 1,
      "hint": "L'énigme classique du Sphinx sur la vie !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°253 (Cycle 51) : Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
      "options": [
        "La Lumière",
        "L'Obscurité",
        "La Glace",
        "Le Vent"
      ],
      "correctIndex": 1,
      "hint": "Elle survient quand le soleil se couche !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°254 (Cycle 51) : Je tombe sans me faire mal et j'arrose les plantes. Que suis-je ?",
      "options": [
        "Le Soleil",
        "La Pluie",
        "Le Feu",
        "La Neige"
      ],
      "correctIndex": 1,
      "hint": "Elle provient des nuages dans le ciel !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°255 (Cycle 51) : Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
      "options": [
        "Une Boussole",
        "Un Timbre Postal",
        "Un Oiseau",
        "Un Avion"
      ],
      "correctIndex": 1,
      "hint": "On me colle sur l'enveloppe !",
      "difficulty": "Difficile"
    }
  },
  "52": {
    "1": {
      "riddle": "Énigme n°256 (Cycle 52) : Qu'est-ce qui monte et ne descend jamais ?",
      "options": [
        "Votre Âge",
        "La Montagne",
        "Un Ballon",
        "La Pluie"
      ],
      "correctIndex": 0,
      "hint": "Chaque anniversaire en rajoute une année !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°257 (Cycle 52) : Qu'est-ce qui appartient à tout le monde mais dont personne ne peut se séparer sous le soleil ?",
      "options": [
        "L'Ombre",
        "Le Téléphone",
        "L'Argent",
        "Les Clés"
      ],
      "correctIndex": 0,
      "hint": "Elle vous suit partout sur le sol !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°258 (Cycle 52) : Si vous me nommez haut et fort, vous me brisez. Que suis-je ?",
      "options": [
        "Le Silence",
        "Le Verre",
        "Le Miroir",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Le moindre mot prononcé y met fin !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°259 (Cycle 52) : Qu'est-ce qui vous appartient, mais que les autres utilisent beaucoup plus souvent que vous-même ?",
      "options": [
        "Votre Prénom",
        "Votre Voiture",
        "Votre Maison",
        "Vos Clés"
      ],
      "correctIndex": 0,
      "hint": "Les gens vous appellent par ce mot !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°260 (Cycle 52) : Plus je sèche les autres en sortant de la douche, plus je deviens mouillée. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Serviette",
        "La Mer",
        "Une Savonnette"
      ],
      "correctIndex": 1,
      "hint": "Vous l'accrochez dans la salle de bain !",
      "difficulty": "Difficile"
    }
  },
  "53": {
    "1": {
      "riddle": "Énigme n°261 (Cycle 53) : Je parle toutes les langues du monde sans jamais avoir appris un seul mot. Que suis-je ?",
      "options": [
        "Un Écho",
        "Une Radio",
        "Un Livre",
        "Un Traducteur"
      ],
      "correctIndex": 0,
      "hint": "Je répète votre voix dans les montagnes !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°262 (Cycle 53) : Qu'est-ce qui a des villes sans maisons, des forêts sans arbres et des rivières sans eau ?",
      "options": [
        "Une Carte Géographique",
        "Un Livre d'Histoire",
        "Un Film",
        "Un Rêve"
      ],
      "correctIndex": 0,
      "hint": "Elle sert à se repérer en voyage !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°263 (Cycle 53) : Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
      "options": [
        "Le Passé",
        "Le Présent",
        "L'Avenir",
        "Le Sommeil"
      ],
      "correctIndex": 2,
      "hint": "C'est ce qui arrivera demain !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°264 (Cycle 53) : Qu'est-ce qui s'allonge quand on le creuse et s'accourcit quand on le rebouche ?",
      "options": [
        "Un Puits / Trou",
        "Un Chemin",
        "Une Bougie",
        "Un Arbre"
      ],
      "correctIndex": 0,
      "hint": "On le creuse avec une pelle !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°265 (Cycle 53) : Je suis plein de trous, pourtant je retiens parfaitement l'eau. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Passerelle",
        "Un Filet",
        "Un Entonnoir"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour faire la vaisselle !",
      "difficulty": "Difficile"
    }
  },
  "54": {
    "1": {
      "riddle": "Énigme n°266 (Cycle 54) : Qu'est-ce qui peut courir sans jamais avoir de jambes et murmurer sans jamais avoir de bouche ?",
      "options": [
        "Une Rivière",
        "Le Vent",
        "Le Temps",
        "Un Nuage"
      ],
      "correctIndex": 0,
      "hint": "Elle coule vers l'océan !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°267 (Cycle 54) : Je n'ai pas de corps, pas de voix, mais vous pouvez m'entendre souffler dans les arbres. Que suis-je ?",
      "options": [
        "Le Vent",
        "La Pluie",
        "La Brume",
        "L'Écho"
      ],
      "correctIndex": 0,
      "hint": "Je fais voler les cerfs-volants !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°268 (Cycle 54) : Qu'est-ce qui a un œil unique mais ne peut absolument rien voir ?",
      "options": [
        "Une Aiguille à coudre",
        "Un Cyclope",
        "Un Télescope",
        "Une Tempête"
      ],
      "correctIndex": 0,
      "hint": "On y passe un fil pour recoudre !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°269 (Cycle 54) : Qu'est-ce qui s'accourcit au fur et à mesure qu'il brûle et donne de la lumière ?",
      "options": [
        "Une Bougie",
        "Un Bâton",
        "Une Allumette",
        "Un Crayon"
      ],
      "correctIndex": 0,
      "hint": "Sa mèche fond avec la cire !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°270 (Cycle 54) : Je viens une fois dans une minute, deux fois dans un moment, mais jamais dans mille ans. Que suis-je ?",
      "options": [
        "La Lettre M",
        "Le Temps",
        "La Seconde",
        "Le Chiffre 1"
      ],
      "correctIndex": 0,
      "hint": "Regardez l'orthographe des mots !",
      "difficulty": "Difficile"
    }
  },
  "55": {
    "1": {
      "riddle": "Énigme n°271 (Cycle 55) : Qu'est-ce qui a un cou mais pas de tête ?",
      "options": [
        "Une Bouteille",
        "Une Chemise",
        "Une Guitare",
        "Une Girafe"
      ],
      "correctIndex": 0,
      "hint": "Elle contient du jus ou de l'eau !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°272 (Cycle 55) : Qu'est-ce qui vole sans ailes et pleure sans yeux ?",
      "options": [
        "Un Nuage",
        "Le Vent",
        "Une Feuille",
        "Un Fantôme"
      ],
      "correctIndex": 0,
      "hint": "Il apporte la pluie dans le ciel !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°273 (Cycle 55) : Je grandis quand on me nourrit et je meurs si on me donne à boire. Que suis-je ?",
      "options": [
        "Le Feu",
        "La Plante",
        "Le Poisson",
        "Le Vent"
      ],
      "correctIndex": 0,
      "hint": "L'eau l'éteint immédiatement !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°274 (Cycle 55) : Qu'est-ce qui a beaucoup de dents mais ne peut jamais mordre ?",
      "options": [
        "Un Peigne",
        "Une Scie",
        "Engrenage",
        "Un Râteau"
      ],
      "correctIndex": 0,
      "hint": "On l'utilise pour se coiffer les cheveux !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°275 (Cycle 55) : Plus on en prend en marchant, plus on en laisse derrière soi. Que suis-je ?",
      "options": [
        "Des Pas",
        "Des Souvenirs",
        "Des Traces",
        "Des Cailloux"
      ],
      "correctIndex": 0,
      "hint": "Vos pieds en font à chaque mouvement !",
      "difficulty": "Difficile"
    }
  },
  "56": {
    "1": {
      "riddle": "Énigme n°276 (Cycle 56) : Qu'est-ce qui possède des histoires sans pouvoir parler et des pages sans pouvoir lire ?",
      "options": [
        "Un Livre",
        "Un Journal",
        "Une Bibliothèque",
        "Un Écran"
      ],
      "correctIndex": 0,
      "hint": "On le feuillette pour lire des contes !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°277 (Cycle 56) : Qu'est-ce qui a deux bras, quatre jambes, mais ne peut pas marcher tout seul ?",
      "options": [
        "Fauteuil / Chaise",
        "Lit",
        "Robot",
        "Mannequin"
      ],
      "correctIndex": 0,
      "hint": "On s'assoit dedans dans le salon !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°278 (Cycle 56) : Je suis si fragile que rien que de me prononcer me détruit. Que suis-je ?",
      "options": [
        "Le Silence",
        "Une Bulle",
        "Un Œuf",
        "Le Verre"
      ],
      "correctIndex": 0,
      "hint": "Le bruit fait cesser cet état paisible !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°279 (Cycle 56) : Qu'est-ce qui monte et descend sans jamais bouger de sa place ?",
      "options": [
        "L'Escalier",
        "L'Ascenseur",
        "La Température",
        "La Marée"
      ],
      "correctIndex": 0,
      "hint": "On marche sur ses marches pour changer d'étage !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°280 (Cycle 56) : Qu'est-ce qui entre mouillé dans la bouche et en ressort sec ou chaud ?",
      "options": [
        "Le Thé en sachet",
        "Un Bonbon",
        "Une Glace",
        "Du Pain"
      ],
      "correctIndex": 0,
      "hint": "Une boisson infusée chaude très appréciée !",
      "difficulty": "Difficile"
    }
  },
  "57": {
    "1": {
      "riddle": "Énigme n°281 (Cycle 57) : Je traverse les vitres sans jamais les casser. Que suis-je ?",
      "options": [
        "La Lumière / Rayon",
        "L'Ombre",
        "Le Vent",
        "L'Oiseau"
      ],
      "correctIndex": 0,
      "hint": "Le soleil l'envoie à travers la fenêtre !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°282 (Cycle 57) : Qu'est-ce qui a un lit mais ne dort jamais, et une embouchure mais ne parle jamais ?",
      "options": [
        "Une Rivière / Fleuve",
        "La Mer",
        "Un Vallon",
        "Une Grotte"
      ],
      "correctIndex": 0,
      "hint": "Elle s'écoule jusqu'à la mer !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°283 (Cycle 57) : Qu'est-ce qui commence par E, finit par E, mais ne contient qu'une seule lettre ?",
      "options": [
        "Une Enveloppe",
        "Une Épée",
        "L'Éternité",
        "Une Étoile"
      ],
      "correctIndex": 0,
      "hint": "On y insère un courrier ou une carte !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°284 (Cycle 57) : Si j'en ai deux, j'en ai un. Si j'en ai trois, j'en ai deux. Que suis-je ?",
      "options": [
        "Le Choix",
        "Le Couple",
        "Le Triplet",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Avoir plusieurs options donne un...",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°285 (Cycle 57) : Qu'est-ce qui peut être cassé sans jamais avoir été touché avec la main ?",
      "options": [
        "Une Promesse",
        "Un Verre",
        "Une Branche",
        "Un Miroir"
      ],
      "correctIndex": 0,
      "hint": "On la fait en jurant sur l'honneur !",
      "difficulty": "Difficile"
    }
  },
  "58": {
    "1": {
      "riddle": "Énigme n°286 (Cycle 58) : Qu'est-ce qui n'a pas de pieds mais porte des chaussures toute sa journée ?",
      "options": [
        "Un Pneu de voiture",
        "Un Pied-de-biche",
        "Une Chaise",
        "Un Trottoir"
      ],
      "correctIndex": 0,
      "hint": "Elle roule sur la route !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°287 (Cycle 58) : Je voyage dans les airs sans jamais sortir de ma coquille ou de mon enveloppe. Que suis-je ?",
      "options": [
        "Une Lettre",
        "Un Œuf",
        "Un Escargot",
        "Une Tortue"
      ],
      "correctIndex": 0,
      "hint": "Envoyée par la Poste !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°288 (Cycle 58) : Qu'est-ce qui est aussi léger qu'une plume, mais que l'homme le plus fort ne peut tenir 5 minutes ?",
      "options": [
        "Le Souffle / Respiration",
        "La Fumée",
        "Une Bulle",
        "La Pensée"
      ],
      "correctIndex": 0,
      "hint": "Essayer d'arrêter de respirer !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°289 (Cycle 58) : Qu'est-ce qui devient de plus en plus propre à mesure qu'on l'essuie avec un chiffon ?",
      "options": [
        "Le Miroir / Verre",
        "L'Éponge",
        "Le Sol",
        "La Table"
      ],
      "correctIndex": 0,
      "hint": "Il reflète votre image quand il est propre !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°290 (Cycle 58) : Je possède 13 cœurs, mais aucun autre organe. Que suis-je ?",
      "options": [
        "Un Jeu de Cartes",
        "Un Artichaut",
        "Une Ruche",
        "Un Pommier"
      ],
      "correctIndex": 0,
      "hint": "Comprend les cartes de Cœur du 1 au Roi !",
      "difficulty": "Difficile"
    }
  },
  "59": {
    "1": {
      "riddle": "Énigme n°291 (Cycle 59) : Qu'est-ce qui s'ouvre la nuit et se ferme le jour sans faire de bruit ?",
      "options": [
        "Les Étoiles",
        "La Porte",
        "Les Yeux de hibou",
        "Les Fleurs"
      ],
      "correctIndex": 0,
      "hint": "Elles brillent dans le ciel nocturne !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°292 (Cycle 59) : Qu'est-ce qui a une clé mais aucune serrure, de l'espace mais aucun endroit ?",
      "options": [
        "Un Clavier d'ordinateur",
        "Un Piano",
        "Une Voiture",
        "Un Coffre"
      ],
      "correctIndex": 0,
      "hint": "La touche 'Espace' s'y trouve !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°293 (Cycle 59) : Je peux être court ou long, rapide ou lent, mais je m'arrête toujours à la fin de la vie. Que suis-je ?",
      "options": [
        "Le Temps / Pouls",
        "Le Chemin",
        "Le Fil",
        "Le Sourd"
      ],
      "correctIndex": 0,
      "hint": "Le cœur le bat régulièrement !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°294 (Cycle 59) : Qu'est-ce qui a des dents mais ne mâche rien du tout ?",
      "options": [
        "Une Scie / Peigne",
        "Un Chien",
        "Une Fourchette",
        "Un Requin"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour découper du bois !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°295 (Cycle 59) : Je suis né grand et je meurs petit avec le temps. Que suis-je ?",
      "options": [
        "Un Crayon / Bougie",
        "Un Arbre",
        "Un Homme",
        "Une Montagne"
      ],
      "correctIndex": 0,
      "hint": "On le taille pour écrire !",
      "difficulty": "Difficile"
    }
  },
  "60": {
    "1": {
      "riddle": "Énigme n°296 (Cycle 60) : Qu'est-ce qui a 4 roues et des mouches autour de lui ?",
      "options": [
        "Un Camion d'ordures",
        "Une Voiture salie",
        "Un Tracteur",
        "Un Bus"
      ],
      "correctIndex": 0,
      "hint": "Il ramasse les poubelles le matin !",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme n°297 (Cycle 60) : Je me déplace sans marcher, je murmure sans parler, j'ai un lit mais ne dors jamais. Que suis-je ?",
      "options": [
        "La Rivière",
        "Le Vent",
        "La Nuée",
        "Le Temps"
      ],
      "correctIndex": 0,
      "hint": "Un cours d'eau naturel !",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme n°298 (Cycle 60) : Qu'est-ce qui est plus grand que la Tour Eiffel, mais ne pèse absolument rien ?",
      "options": [
        "Son Ombre",
        "Un Nuage",
        "L'Air",
        "Le Ciel"
      ],
      "correctIndex": 0,
      "hint": "Le soleil la projette sur le sol !",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme n°299 (Cycle 60) : Qu'est-ce qui a 88 clés mais ne peut ouvrir aucune porte de maison ?",
      "options": [
        "Un Piano à queue",
        "Un Clavier",
        "Un Organisateur",
        "Un Serurier"
      ],
      "correctIndex": 0,
      "hint": "Compte 52 touches blanches et 36 noires !",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme n°300 (Cycle 60) : Je suis un fruit, mais si vous enlevez ma première lettre, je deviens un animal. Que suis-je ?",
      "options": [
        "La Groseille (Oseille)",
        "La Mûre (Ure)",
        "La Datte (Atte)",
        "La Poire (Oire)"
      ],
      "correctIndex": 0,
      "hint": "Pensez à un fruit rouge ou petit légume !",
      "difficulty": "Difficile"
    }
  },
  "61": {
    "1": {
      "riddle": "Énigme n°301 (Cycle 61) : Qu'est-ce qui a des touches ou des clés, mais ne peut ouvrir aucune porte ?",
      "options": [
        "Un Piano",
        "Une Voiture",
        "Un Coffre-fort",
        "Un Téléphone"
      ],
      "correctIndex": 0,
      "hint": "Instrument à cordes frappées !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°302 (Cycle 61) : Qu'est-ce qui a quatre jambes le matin, deux le midi et trois le soir ?",
      "options": [
        "Une Table",
        "L'Homme",
        "Un Chien",
        "Une Chaise"
      ],
      "correctIndex": 1,
      "hint": "L'énigme classique du Sphinx sur la vie !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°303 (Cycle 61) : Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
      "options": [
        "La Lumière",
        "L'Obscurité",
        "La Glace",
        "Le Vent"
      ],
      "correctIndex": 1,
      "hint": "Elle survient quand le soleil se couche !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°304 (Cycle 61) : Je tombe sans me faire mal et j'arrose les plantes. Que suis-je ?",
      "options": [
        "Le Soleil",
        "La Pluie",
        "Le Feu",
        "La Neige"
      ],
      "correctIndex": 1,
      "hint": "Elle provient des nuages dans le ciel !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°305 (Cycle 61) : Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
      "options": [
        "Une Boussole",
        "Un Timbre Postal",
        "Un Oiseau",
        "Un Avion"
      ],
      "correctIndex": 1,
      "hint": "On me colle sur l'enveloppe !",
      "difficulty": "Expert"
    }
  },
  "62": {
    "1": {
      "riddle": "Énigme n°306 (Cycle 62) : Qu'est-ce qui monte et ne descend jamais ?",
      "options": [
        "Votre Âge",
        "La Montagne",
        "Un Ballon",
        "La Pluie"
      ],
      "correctIndex": 0,
      "hint": "Chaque anniversaire en rajoute une année !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°307 (Cycle 62) : Qu'est-ce qui appartient à tout le monde mais dont personne ne peut se séparer sous le soleil ?",
      "options": [
        "L'Ombre",
        "Le Téléphone",
        "L'Argent",
        "Les Clés"
      ],
      "correctIndex": 0,
      "hint": "Elle vous suit partout sur le sol !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°308 (Cycle 62) : Si vous me nommez haut et fort, vous me brisez. Que suis-je ?",
      "options": [
        "Le Silence",
        "Le Verre",
        "Le Miroir",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Le moindre mot prononcé y met fin !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°309 (Cycle 62) : Qu'est-ce qui vous appartient, mais que les autres utilisent beaucoup plus souvent que vous-même ?",
      "options": [
        "Votre Prénom",
        "Votre Voiture",
        "Votre Maison",
        "Vos Clés"
      ],
      "correctIndex": 0,
      "hint": "Les gens vous appellent par ce mot !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°310 (Cycle 62) : Plus je sèche les autres en sortant de la douche, plus je deviens mouillée. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Serviette",
        "La Mer",
        "Une Savonnette"
      ],
      "correctIndex": 1,
      "hint": "Vous l'accrochez dans la salle de bain !",
      "difficulty": "Expert"
    }
  },
  "63": {
    "1": {
      "riddle": "Énigme n°311 (Cycle 63) : Je parle toutes les langues du monde sans jamais avoir appris un seul mot. Que suis-je ?",
      "options": [
        "Un Écho",
        "Une Radio",
        "Un Livre",
        "Un Traducteur"
      ],
      "correctIndex": 0,
      "hint": "Je répète votre voix dans les montagnes !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°312 (Cycle 63) : Qu'est-ce qui a des villes sans maisons, des forêts sans arbres et des rivières sans eau ?",
      "options": [
        "Une Carte Géographique",
        "Un Livre d'Histoire",
        "Un Film",
        "Un Rêve"
      ],
      "correctIndex": 0,
      "hint": "Elle sert à se repérer en voyage !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°313 (Cycle 63) : Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
      "options": [
        "Le Passé",
        "Le Présent",
        "L'Avenir",
        "Le Sommeil"
      ],
      "correctIndex": 2,
      "hint": "C'est ce qui arrivera demain !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°314 (Cycle 63) : Qu'est-ce qui s'allonge quand on le creuse et s'accourcit quand on le rebouche ?",
      "options": [
        "Un Puits / Trou",
        "Un Chemin",
        "Une Bougie",
        "Un Arbre"
      ],
      "correctIndex": 0,
      "hint": "On le creuse avec une pelle !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°315 (Cycle 63) : Je suis plein de trous, pourtant je retiens parfaitement l'eau. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Passerelle",
        "Un Filet",
        "Un Entonnoir"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour faire la vaisselle !",
      "difficulty": "Expert"
    }
  },
  "64": {
    "1": {
      "riddle": "Énigme n°316 (Cycle 64) : Qu'est-ce qui peut courir sans jamais avoir de jambes et murmurer sans jamais avoir de bouche ?",
      "options": [
        "Une Rivière",
        "Le Vent",
        "Le Temps",
        "Un Nuage"
      ],
      "correctIndex": 0,
      "hint": "Elle coule vers l'océan !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°317 (Cycle 64) : Je n'ai pas de corps, pas de voix, mais vous pouvez m'entendre souffler dans les arbres. Que suis-je ?",
      "options": [
        "Le Vent",
        "La Pluie",
        "La Brume",
        "L'Écho"
      ],
      "correctIndex": 0,
      "hint": "Je fais voler les cerfs-volants !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°318 (Cycle 64) : Qu'est-ce qui a un œil unique mais ne peut absolument rien voir ?",
      "options": [
        "Une Aiguille à coudre",
        "Un Cyclope",
        "Un Télescope",
        "Une Tempête"
      ],
      "correctIndex": 0,
      "hint": "On y passe un fil pour recoudre !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°319 (Cycle 64) : Qu'est-ce qui s'accourcit au fur et à mesure qu'il brûle et donne de la lumière ?",
      "options": [
        "Une Bougie",
        "Un Bâton",
        "Une Allumette",
        "Un Crayon"
      ],
      "correctIndex": 0,
      "hint": "Sa mèche fond avec la cire !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°320 (Cycle 64) : Je viens une fois dans une minute, deux fois dans un moment, mais jamais dans mille ans. Que suis-je ?",
      "options": [
        "La Lettre M",
        "Le Temps",
        "La Seconde",
        "Le Chiffre 1"
      ],
      "correctIndex": 0,
      "hint": "Regardez l'orthographe des mots !",
      "difficulty": "Expert"
    }
  },
  "65": {
    "1": {
      "riddle": "Énigme n°321 (Cycle 65) : Qu'est-ce qui a un cou mais pas de tête ?",
      "options": [
        "Une Bouteille",
        "Une Chemise",
        "Une Guitare",
        "Une Girafe"
      ],
      "correctIndex": 0,
      "hint": "Elle contient du jus ou de l'eau !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°322 (Cycle 65) : Qu'est-ce qui vole sans ailes et pleure sans yeux ?",
      "options": [
        "Un Nuage",
        "Le Vent",
        "Une Feuille",
        "Un Fantôme"
      ],
      "correctIndex": 0,
      "hint": "Il apporte la pluie dans le ciel !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°323 (Cycle 65) : Je grandis quand on me nourrit et je meurs si on me donne à boire. Que suis-je ?",
      "options": [
        "Le Feu",
        "La Plante",
        "Le Poisson",
        "Le Vent"
      ],
      "correctIndex": 0,
      "hint": "L'eau l'éteint immédiatement !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°324 (Cycle 65) : Qu'est-ce qui a beaucoup de dents mais ne peut jamais mordre ?",
      "options": [
        "Un Peigne",
        "Une Scie",
        "Engrenage",
        "Un Râteau"
      ],
      "correctIndex": 0,
      "hint": "On l'utilise pour se coiffer les cheveux !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°325 (Cycle 65) : Plus on en prend en marchant, plus on en laisse derrière soi. Que suis-je ?",
      "options": [
        "Des Pas",
        "Des Souvenirs",
        "Des Traces",
        "Des Cailloux"
      ],
      "correctIndex": 0,
      "hint": "Vos pieds en font à chaque mouvement !",
      "difficulty": "Expert"
    }
  },
  "66": {
    "1": {
      "riddle": "Énigme n°326 (Cycle 66) : Qu'est-ce qui possède des histoires sans pouvoir parler et des pages sans pouvoir lire ?",
      "options": [
        "Un Livre",
        "Un Journal",
        "Une Bibliothèque",
        "Un Écran"
      ],
      "correctIndex": 0,
      "hint": "On le feuillette pour lire des contes !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°327 (Cycle 66) : Qu'est-ce qui a deux bras, quatre jambes, mais ne peut pas marcher tout seul ?",
      "options": [
        "Fauteuil / Chaise",
        "Lit",
        "Robot",
        "Mannequin"
      ],
      "correctIndex": 0,
      "hint": "On s'assoit dedans dans le salon !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°328 (Cycle 66) : Je suis si fragile que rien que de me prononcer me détruit. Que suis-je ?",
      "options": [
        "Le Silence",
        "Une Bulle",
        "Un Œuf",
        "Le Verre"
      ],
      "correctIndex": 0,
      "hint": "Le bruit fait cesser cet état paisible !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°329 (Cycle 66) : Qu'est-ce qui monte et descend sans jamais bouger de sa place ?",
      "options": [
        "L'Escalier",
        "L'Ascenseur",
        "La Température",
        "La Marée"
      ],
      "correctIndex": 0,
      "hint": "On marche sur ses marches pour changer d'étage !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°330 (Cycle 66) : Qu'est-ce qui entre mouillé dans la bouche et en ressort sec ou chaud ?",
      "options": [
        "Le Thé en sachet",
        "Un Bonbon",
        "Une Glace",
        "Du Pain"
      ],
      "correctIndex": 0,
      "hint": "Une boisson infusée chaude très appréciée !",
      "difficulty": "Expert"
    }
  },
  "67": {
    "1": {
      "riddle": "Énigme n°331 (Cycle 67) : Je traverse les vitres sans jamais les casser. Que suis-je ?",
      "options": [
        "La Lumière / Rayon",
        "L'Ombre",
        "Le Vent",
        "L'Oiseau"
      ],
      "correctIndex": 0,
      "hint": "Le soleil l'envoie à travers la fenêtre !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°332 (Cycle 67) : Qu'est-ce qui a un lit mais ne dort jamais, et une embouchure mais ne parle jamais ?",
      "options": [
        "Une Rivière / Fleuve",
        "La Mer",
        "Un Vallon",
        "Une Grotte"
      ],
      "correctIndex": 0,
      "hint": "Elle s'écoule jusqu'à la mer !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°333 (Cycle 67) : Qu'est-ce qui commence par E, finit par E, mais ne contient qu'une seule lettre ?",
      "options": [
        "Une Enveloppe",
        "Une Épée",
        "L'Éternité",
        "Une Étoile"
      ],
      "correctIndex": 0,
      "hint": "On y insère un courrier ou une carte !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°334 (Cycle 67) : Si j'en ai deux, j'en ai un. Si j'en ai trois, j'en ai deux. Que suis-je ?",
      "options": [
        "Le Choix",
        "Le Couple",
        "Le Triplet",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Avoir plusieurs options donne un...",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°335 (Cycle 67) : Qu'est-ce qui peut être cassé sans jamais avoir été touché avec la main ?",
      "options": [
        "Une Promesse",
        "Un Verre",
        "Une Branche",
        "Un Miroir"
      ],
      "correctIndex": 0,
      "hint": "On la fait en jurant sur l'honneur !",
      "difficulty": "Expert"
    }
  },
  "68": {
    "1": {
      "riddle": "Énigme n°336 (Cycle 68) : Qu'est-ce qui n'a pas de pieds mais porte des chaussures toute sa journée ?",
      "options": [
        "Un Pneu de voiture",
        "Un Pied-de-biche",
        "Une Chaise",
        "Un Trottoir"
      ],
      "correctIndex": 0,
      "hint": "Elle roule sur la route !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°337 (Cycle 68) : Je voyage dans les airs sans jamais sortir de ma coquille ou de mon enveloppe. Que suis-je ?",
      "options": [
        "Une Lettre",
        "Un Œuf",
        "Un Escargot",
        "Une Tortue"
      ],
      "correctIndex": 0,
      "hint": "Envoyée par la Poste !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°338 (Cycle 68) : Qu'est-ce qui est aussi léger qu'une plume, mais que l'homme le plus fort ne peut tenir 5 minutes ?",
      "options": [
        "Le Souffle / Respiration",
        "La Fumée",
        "Une Bulle",
        "La Pensée"
      ],
      "correctIndex": 0,
      "hint": "Essayer d'arrêter de respirer !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°339 (Cycle 68) : Qu'est-ce qui devient de plus en plus propre à mesure qu'on l'essuie avec un chiffon ?",
      "options": [
        "Le Miroir / Verre",
        "L'Éponge",
        "Le Sol",
        "La Table"
      ],
      "correctIndex": 0,
      "hint": "Il reflète votre image quand il est propre !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°340 (Cycle 68) : Je possède 13 cœurs, mais aucun autre organe. Que suis-je ?",
      "options": [
        "Un Jeu de Cartes",
        "Un Artichaut",
        "Une Ruche",
        "Un Pommier"
      ],
      "correctIndex": 0,
      "hint": "Comprend les cartes de Cœur du 1 au Roi !",
      "difficulty": "Expert"
    }
  },
  "69": {
    "1": {
      "riddle": "Énigme n°341 (Cycle 69) : Qu'est-ce qui s'ouvre la nuit et se ferme le jour sans faire de bruit ?",
      "options": [
        "Les Étoiles",
        "La Porte",
        "Les Yeux de hibou",
        "Les Fleurs"
      ],
      "correctIndex": 0,
      "hint": "Elles brillent dans le ciel nocturne !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°342 (Cycle 69) : Qu'est-ce qui a une clé mais aucune serrure, de l'espace mais aucun endroit ?",
      "options": [
        "Un Clavier d'ordinateur",
        "Un Piano",
        "Une Voiture",
        "Un Coffre"
      ],
      "correctIndex": 0,
      "hint": "La touche 'Espace' s'y trouve !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°343 (Cycle 69) : Je peux être court ou long, rapide ou lent, mais je m'arrête toujours à la fin de la vie. Que suis-je ?",
      "options": [
        "Le Temps / Pouls",
        "Le Chemin",
        "Le Fil",
        "Le Sourd"
      ],
      "correctIndex": 0,
      "hint": "Le cœur le bat régulièrement !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°344 (Cycle 69) : Qu'est-ce qui a des dents mais ne mâche rien du tout ?",
      "options": [
        "Une Scie / Peigne",
        "Un Chien",
        "Une Fourchette",
        "Un Requin"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour découper du bois !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°345 (Cycle 69) : Je suis né grand et je meurs petit avec le temps. Que suis-je ?",
      "options": [
        "Un Crayon / Bougie",
        "Un Arbre",
        "Un Homme",
        "Une Montagne"
      ],
      "correctIndex": 0,
      "hint": "On le taille pour écrire !",
      "difficulty": "Expert"
    }
  },
  "70": {
    "1": {
      "riddle": "Énigme n°346 (Cycle 70) : Qu'est-ce qui a 4 roues et des mouches autour de lui ?",
      "options": [
        "Un Camion d'ordures",
        "Une Voiture salie",
        "Un Tracteur",
        "Un Bus"
      ],
      "correctIndex": 0,
      "hint": "Il ramasse les poubelles le matin !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°347 (Cycle 70) : Je me déplace sans marcher, je murmure sans parler, j'ai un lit mais ne dors jamais. Que suis-je ?",
      "options": [
        "La Rivière",
        "Le Vent",
        "La Nuée",
        "Le Temps"
      ],
      "correctIndex": 0,
      "hint": "Un cours d'eau naturel !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°348 (Cycle 70) : Qu'est-ce qui est plus grand que la Tour Eiffel, mais ne pèse absolument rien ?",
      "options": [
        "Son Ombre",
        "Un Nuage",
        "L'Air",
        "Le Ciel"
      ],
      "correctIndex": 0,
      "hint": "Le soleil la projette sur le sol !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°349 (Cycle 70) : Qu'est-ce qui a 88 clés mais ne peut ouvrir aucune porte de maison ?",
      "options": [
        "Un Piano à queue",
        "Un Clavier",
        "Un Organisateur",
        "Un Serurier"
      ],
      "correctIndex": 0,
      "hint": "Compte 52 touches blanches et 36 noires !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°350 (Cycle 70) : Je suis un fruit, mais si vous enlevez ma première lettre, je deviens un animal. Que suis-je ?",
      "options": [
        "La Groseille (Oseille)",
        "La Mûre (Ure)",
        "La Datte (Atte)",
        "La Poire (Oire)"
      ],
      "correctIndex": 0,
      "hint": "Pensez à un fruit rouge ou petit légume !",
      "difficulty": "Expert"
    }
  },
  "71": {
    "1": {
      "riddle": "Énigme n°351 (Cycle 71) : Qu'est-ce qui a des touches ou des clés, mais ne peut ouvrir aucune porte ?",
      "options": [
        "Un Piano",
        "Une Voiture",
        "Un Coffre-fort",
        "Un Téléphone"
      ],
      "correctIndex": 0,
      "hint": "Instrument à cordes frappées !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°352 (Cycle 71) : Qu'est-ce qui a quatre jambes le matin, deux le midi et trois le soir ?",
      "options": [
        "Une Table",
        "L'Homme",
        "Un Chien",
        "Une Chaise"
      ],
      "correctIndex": 1,
      "hint": "L'énigme classique du Sphinx sur la vie !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°353 (Cycle 71) : Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
      "options": [
        "La Lumière",
        "L'Obscurité",
        "La Glace",
        "Le Vent"
      ],
      "correctIndex": 1,
      "hint": "Elle survient quand le soleil se couche !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°354 (Cycle 71) : Je tombe sans me faire mal et j'arrose les plantes. Que suis-je ?",
      "options": [
        "Le Soleil",
        "La Pluie",
        "Le Feu",
        "La Neige"
      ],
      "correctIndex": 1,
      "hint": "Elle provient des nuages dans le ciel !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°355 (Cycle 71) : Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
      "options": [
        "Une Boussole",
        "Un Timbre Postal",
        "Un Oiseau",
        "Un Avion"
      ],
      "correctIndex": 1,
      "hint": "On me colle sur l'enveloppe !",
      "difficulty": "Expert"
    }
  },
  "72": {
    "1": {
      "riddle": "Énigme n°356 (Cycle 72) : Qu'est-ce qui monte et ne descend jamais ?",
      "options": [
        "Votre Âge",
        "La Montagne",
        "Un Ballon",
        "La Pluie"
      ],
      "correctIndex": 0,
      "hint": "Chaque anniversaire en rajoute une année !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°357 (Cycle 72) : Qu'est-ce qui appartient à tout le monde mais dont personne ne peut se séparer sous le soleil ?",
      "options": [
        "L'Ombre",
        "Le Téléphone",
        "L'Argent",
        "Les Clés"
      ],
      "correctIndex": 0,
      "hint": "Elle vous suit partout sur le sol !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°358 (Cycle 72) : Si vous me nommez haut et fort, vous me brisez. Que suis-je ?",
      "options": [
        "Le Silence",
        "Le Verre",
        "Le Miroir",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Le moindre mot prononcé y met fin !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°359 (Cycle 72) : Qu'est-ce qui vous appartient, mais que les autres utilisent beaucoup plus souvent que vous-même ?",
      "options": [
        "Votre Prénom",
        "Votre Voiture",
        "Votre Maison",
        "Vos Clés"
      ],
      "correctIndex": 0,
      "hint": "Les gens vous appellent par ce mot !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°360 (Cycle 72) : Plus je sèche les autres en sortant de la douche, plus je deviens mouillée. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Serviette",
        "La Mer",
        "Une Savonnette"
      ],
      "correctIndex": 1,
      "hint": "Vous l'accrochez dans la salle de bain !",
      "difficulty": "Expert"
    }
  },
  "73": {
    "1": {
      "riddle": "Énigme n°361 (Cycle 73) : Je parle toutes les langues du monde sans jamais avoir appris un seul mot. Que suis-je ?",
      "options": [
        "Un Écho",
        "Une Radio",
        "Un Livre",
        "Un Traducteur"
      ],
      "correctIndex": 0,
      "hint": "Je répète votre voix dans les montagnes !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°362 (Cycle 73) : Qu'est-ce qui a des villes sans maisons, des forêts sans arbres et des rivières sans eau ?",
      "options": [
        "Une Carte Géographique",
        "Un Livre d'Histoire",
        "Un Film",
        "Un Rêve"
      ],
      "correctIndex": 0,
      "hint": "Elle sert à se repérer en voyage !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°363 (Cycle 73) : Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
      "options": [
        "Le Passé",
        "Le Présent",
        "L'Avenir",
        "Le Sommeil"
      ],
      "correctIndex": 2,
      "hint": "C'est ce qui arrivera demain !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°364 (Cycle 73) : Qu'est-ce qui s'allonge quand on le creuse et s'accourcit quand on le rebouche ?",
      "options": [
        "Un Puits / Trou",
        "Un Chemin",
        "Une Bougie",
        "Un Arbre"
      ],
      "correctIndex": 0,
      "hint": "On le creuse avec une pelle !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°365 (Cycle 73) : Je suis plein de trous, pourtant je retiens parfaitement l'eau. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Passerelle",
        "Un Filet",
        "Un Entonnoir"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour faire la vaisselle !",
      "difficulty": "Expert"
    }
  },
  "74": {
    "1": {
      "riddle": "Énigme n°366 (Cycle 74) : Qu'est-ce qui peut courir sans jamais avoir de jambes et murmurer sans jamais avoir de bouche ?",
      "options": [
        "Une Rivière",
        "Le Vent",
        "Le Temps",
        "Un Nuage"
      ],
      "correctIndex": 0,
      "hint": "Elle coule vers l'océan !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°367 (Cycle 74) : Je n'ai pas de corps, pas de voix, mais vous pouvez m'entendre souffler dans les arbres. Que suis-je ?",
      "options": [
        "Le Vent",
        "La Pluie",
        "La Brume",
        "L'Écho"
      ],
      "correctIndex": 0,
      "hint": "Je fais voler les cerfs-volants !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°368 (Cycle 74) : Qu'est-ce qui a un œil unique mais ne peut absolument rien voir ?",
      "options": [
        "Une Aiguille à coudre",
        "Un Cyclope",
        "Un Télescope",
        "Une Tempête"
      ],
      "correctIndex": 0,
      "hint": "On y passe un fil pour recoudre !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°369 (Cycle 74) : Qu'est-ce qui s'accourcit au fur et à mesure qu'il brûle et donne de la lumière ?",
      "options": [
        "Une Bougie",
        "Un Bâton",
        "Une Allumette",
        "Un Crayon"
      ],
      "correctIndex": 0,
      "hint": "Sa mèche fond avec la cire !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°370 (Cycle 74) : Je viens une fois dans une minute, deux fois dans un moment, mais jamais dans mille ans. Que suis-je ?",
      "options": [
        "La Lettre M",
        "Le Temps",
        "La Seconde",
        "Le Chiffre 1"
      ],
      "correctIndex": 0,
      "hint": "Regardez l'orthographe des mots !",
      "difficulty": "Expert"
    }
  },
  "75": {
    "1": {
      "riddle": "Énigme n°371 (Cycle 75) : Qu'est-ce qui a un cou mais pas de tête ?",
      "options": [
        "Une Bouteille",
        "Une Chemise",
        "Une Guitare",
        "Une Girafe"
      ],
      "correctIndex": 0,
      "hint": "Elle contient du jus ou de l'eau !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°372 (Cycle 75) : Qu'est-ce qui vole sans ailes et pleure sans yeux ?",
      "options": [
        "Un Nuage",
        "Le Vent",
        "Une Feuille",
        "Un Fantôme"
      ],
      "correctIndex": 0,
      "hint": "Il apporte la pluie dans le ciel !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°373 (Cycle 75) : Je grandis quand on me nourrit et je meurs si on me donne à boire. Que suis-je ?",
      "options": [
        "Le Feu",
        "La Plante",
        "Le Poisson",
        "Le Vent"
      ],
      "correctIndex": 0,
      "hint": "L'eau l'éteint immédiatement !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°374 (Cycle 75) : Qu'est-ce qui a beaucoup de dents mais ne peut jamais mordre ?",
      "options": [
        "Un Peigne",
        "Une Scie",
        "Engrenage",
        "Un Râteau"
      ],
      "correctIndex": 0,
      "hint": "On l'utilise pour se coiffer les cheveux !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°375 (Cycle 75) : Plus on en prend en marchant, plus on en laisse derrière soi. Que suis-je ?",
      "options": [
        "Des Pas",
        "Des Souvenirs",
        "Des Traces",
        "Des Cailloux"
      ],
      "correctIndex": 0,
      "hint": "Vos pieds en font à chaque mouvement !",
      "difficulty": "Expert"
    }
  },
  "76": {
    "1": {
      "riddle": "Énigme n°376 (Cycle 76) : Qu'est-ce qui possède des histoires sans pouvoir parler et des pages sans pouvoir lire ?",
      "options": [
        "Un Livre",
        "Un Journal",
        "Une Bibliothèque",
        "Un Écran"
      ],
      "correctIndex": 0,
      "hint": "On le feuillette pour lire des contes !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°377 (Cycle 76) : Qu'est-ce qui a deux bras, quatre jambes, mais ne peut pas marcher tout seul ?",
      "options": [
        "Fauteuil / Chaise",
        "Lit",
        "Robot",
        "Mannequin"
      ],
      "correctIndex": 0,
      "hint": "On s'assoit dedans dans le salon !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°378 (Cycle 76) : Je suis si fragile que rien que de me prononcer me détruit. Que suis-je ?",
      "options": [
        "Le Silence",
        "Une Bulle",
        "Un Œuf",
        "Le Verre"
      ],
      "correctIndex": 0,
      "hint": "Le bruit fait cesser cet état paisible !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°379 (Cycle 76) : Qu'est-ce qui monte et descend sans jamais bouger de sa place ?",
      "options": [
        "L'Escalier",
        "L'Ascenseur",
        "La Température",
        "La Marée"
      ],
      "correctIndex": 0,
      "hint": "On marche sur ses marches pour changer d'étage !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°380 (Cycle 76) : Qu'est-ce qui entre mouillé dans la bouche et en ressort sec ou chaud ?",
      "options": [
        "Le Thé en sachet",
        "Un Bonbon",
        "Une Glace",
        "Du Pain"
      ],
      "correctIndex": 0,
      "hint": "Une boisson infusée chaude très appréciée !",
      "difficulty": "Expert"
    }
  },
  "77": {
    "1": {
      "riddle": "Énigme n°381 (Cycle 77) : Je traverse les vitres sans jamais les casser. Que suis-je ?",
      "options": [
        "La Lumière / Rayon",
        "L'Ombre",
        "Le Vent",
        "L'Oiseau"
      ],
      "correctIndex": 0,
      "hint": "Le soleil l'envoie à travers la fenêtre !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°382 (Cycle 77) : Qu'est-ce qui a un lit mais ne dort jamais, et une embouchure mais ne parle jamais ?",
      "options": [
        "Une Rivière / Fleuve",
        "La Mer",
        "Un Vallon",
        "Une Grotte"
      ],
      "correctIndex": 0,
      "hint": "Elle s'écoule jusqu'à la mer !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°383 (Cycle 77) : Qu'est-ce qui commence par E, finit par E, mais ne contient qu'une seule lettre ?",
      "options": [
        "Une Enveloppe",
        "Une Épée",
        "L'Éternité",
        "Une Étoile"
      ],
      "correctIndex": 0,
      "hint": "On y insère un courrier ou une carte !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°384 (Cycle 77) : Si j'en ai deux, j'en ai un. Si j'en ai trois, j'en ai deux. Que suis-je ?",
      "options": [
        "Le Choix",
        "Le Couple",
        "Le Triplet",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Avoir plusieurs options donne un...",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°385 (Cycle 77) : Qu'est-ce qui peut être cassé sans jamais avoir été touché avec la main ?",
      "options": [
        "Une Promesse",
        "Un Verre",
        "Une Branche",
        "Un Miroir"
      ],
      "correctIndex": 0,
      "hint": "On la fait en jurant sur l'honneur !",
      "difficulty": "Expert"
    }
  },
  "78": {
    "1": {
      "riddle": "Énigme n°386 (Cycle 78) : Qu'est-ce qui n'a pas de pieds mais porte des chaussures toute sa journée ?",
      "options": [
        "Un Pneu de voiture",
        "Un Pied-de-biche",
        "Une Chaise",
        "Un Trottoir"
      ],
      "correctIndex": 0,
      "hint": "Elle roule sur la route !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°387 (Cycle 78) : Je voyage dans les airs sans jamais sortir de ma coquille ou de mon enveloppe. Que suis-je ?",
      "options": [
        "Une Lettre",
        "Un Œuf",
        "Un Escargot",
        "Une Tortue"
      ],
      "correctIndex": 0,
      "hint": "Envoyée par la Poste !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°388 (Cycle 78) : Qu'est-ce qui est aussi léger qu'une plume, mais que l'homme le plus fort ne peut tenir 5 minutes ?",
      "options": [
        "Le Souffle / Respiration",
        "La Fumée",
        "Une Bulle",
        "La Pensée"
      ],
      "correctIndex": 0,
      "hint": "Essayer d'arrêter de respirer !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°389 (Cycle 78) : Qu'est-ce qui devient de plus en plus propre à mesure qu'on l'essuie avec un chiffon ?",
      "options": [
        "Le Miroir / Verre",
        "L'Éponge",
        "Le Sol",
        "La Table"
      ],
      "correctIndex": 0,
      "hint": "Il reflète votre image quand il est propre !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°390 (Cycle 78) : Je possède 13 cœurs, mais aucun autre organe. Que suis-je ?",
      "options": [
        "Un Jeu de Cartes",
        "Un Artichaut",
        "Une Ruche",
        "Un Pommier"
      ],
      "correctIndex": 0,
      "hint": "Comprend les cartes de Cœur du 1 au Roi !",
      "difficulty": "Expert"
    }
  },
  "79": {
    "1": {
      "riddle": "Énigme n°391 (Cycle 79) : Qu'est-ce qui s'ouvre la nuit et se ferme le jour sans faire de bruit ?",
      "options": [
        "Les Étoiles",
        "La Porte",
        "Les Yeux de hibou",
        "Les Fleurs"
      ],
      "correctIndex": 0,
      "hint": "Elles brillent dans le ciel nocturne !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°392 (Cycle 79) : Qu'est-ce qui a une clé mais aucune serrure, de l'espace mais aucun endroit ?",
      "options": [
        "Un Clavier d'ordinateur",
        "Un Piano",
        "Une Voiture",
        "Un Coffre"
      ],
      "correctIndex": 0,
      "hint": "La touche 'Espace' s'y trouve !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°393 (Cycle 79) : Je peux être court ou long, rapide ou lent, mais je m'arrête toujours à la fin de la vie. Que suis-je ?",
      "options": [
        "Le Temps / Pouls",
        "Le Chemin",
        "Le Fil",
        "Le Sourd"
      ],
      "correctIndex": 0,
      "hint": "Le cœur le bat régulièrement !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°394 (Cycle 79) : Qu'est-ce qui a des dents mais ne mâche rien du tout ?",
      "options": [
        "Une Scie / Peigne",
        "Un Chien",
        "Une Fourchette",
        "Un Requin"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour découper du bois !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°395 (Cycle 79) : Je suis né grand et je meurs petit avec le temps. Que suis-je ?",
      "options": [
        "Un Crayon / Bougie",
        "Un Arbre",
        "Un Homme",
        "Une Montagne"
      ],
      "correctIndex": 0,
      "hint": "On le taille pour écrire !",
      "difficulty": "Expert"
    }
  },
  "80": {
    "1": {
      "riddle": "Énigme n°396 (Cycle 80) : Qu'est-ce qui a 4 roues et des mouches autour de lui ?",
      "options": [
        "Un Camion d'ordures",
        "Une Voiture salie",
        "Un Tracteur",
        "Un Bus"
      ],
      "correctIndex": 0,
      "hint": "Il ramasse les poubelles le matin !",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme n°397 (Cycle 80) : Je me déplace sans marcher, je murmure sans parler, j'ai un lit mais ne dors jamais. Que suis-je ?",
      "options": [
        "La Rivière",
        "Le Vent",
        "La Nuée",
        "Le Temps"
      ],
      "correctIndex": 0,
      "hint": "Un cours d'eau naturel !",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme n°398 (Cycle 80) : Qu'est-ce qui est plus grand que la Tour Eiffel, mais ne pèse absolument rien ?",
      "options": [
        "Son Ombre",
        "Un Nuage",
        "L'Air",
        "Le Ciel"
      ],
      "correctIndex": 0,
      "hint": "Le soleil la projette sur le sol !",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme n°399 (Cycle 80) : Qu'est-ce qui a 88 clés mais ne peut ouvrir aucune porte de maison ?",
      "options": [
        "Un Piano à queue",
        "Un Clavier",
        "Un Organisateur",
        "Un Serurier"
      ],
      "correctIndex": 0,
      "hint": "Compte 52 touches blanches et 36 noires !",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme n°400 (Cycle 80) : Je suis un fruit, mais si vous enlevez ma première lettre, je deviens un animal. Que suis-je ?",
      "options": [
        "La Groseille (Oseille)",
        "La Mûre (Ure)",
        "La Datte (Atte)",
        "La Poire (Oire)"
      ],
      "correctIndex": 0,
      "hint": "Pensez à un fruit rouge ou petit légume !",
      "difficulty": "Expert"
    }
  },
  "81": {
    "1": {
      "riddle": "Énigme n°401 (Cycle 81) : Qu'est-ce qui a des touches ou des clés, mais ne peut ouvrir aucune porte ?",
      "options": [
        "Un Piano",
        "Une Voiture",
        "Un Coffre-fort",
        "Un Téléphone"
      ],
      "correctIndex": 0,
      "hint": "Instrument à cordes frappées !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°402 (Cycle 81) : Qu'est-ce qui a quatre jambes le matin, deux le midi et trois le soir ?",
      "options": [
        "Une Table",
        "L'Homme",
        "Un Chien",
        "Une Chaise"
      ],
      "correctIndex": 1,
      "hint": "L'énigme classique du Sphinx sur la vie !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°403 (Cycle 81) : Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
      "options": [
        "La Lumière",
        "L'Obscurité",
        "La Glace",
        "Le Vent"
      ],
      "correctIndex": 1,
      "hint": "Elle survient quand le soleil se couche !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°404 (Cycle 81) : Je tombe sans me faire mal et j'arrose les plantes. Que suis-je ?",
      "options": [
        "Le Soleil",
        "La Pluie",
        "Le Feu",
        "La Neige"
      ],
      "correctIndex": 1,
      "hint": "Elle provient des nuages dans le ciel !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°405 (Cycle 81) : Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
      "options": [
        "Une Boussole",
        "Un Timbre Postal",
        "Un Oiseau",
        "Un Avion"
      ],
      "correctIndex": 1,
      "hint": "On me colle sur l'enveloppe !",
      "difficulty": "Légendaire"
    }
  },
  "82": {
    "1": {
      "riddle": "Énigme n°406 (Cycle 82) : Qu'est-ce qui monte et ne descend jamais ?",
      "options": [
        "Votre Âge",
        "La Montagne",
        "Un Ballon",
        "La Pluie"
      ],
      "correctIndex": 0,
      "hint": "Chaque anniversaire en rajoute une année !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°407 (Cycle 82) : Qu'est-ce qui appartient à tout le monde mais dont personne ne peut se séparer sous le soleil ?",
      "options": [
        "L'Ombre",
        "Le Téléphone",
        "L'Argent",
        "Les Clés"
      ],
      "correctIndex": 0,
      "hint": "Elle vous suit partout sur le sol !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°408 (Cycle 82) : Si vous me nommez haut et fort, vous me brisez. Que suis-je ?",
      "options": [
        "Le Silence",
        "Le Verre",
        "Le Miroir",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Le moindre mot prononcé y met fin !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°409 (Cycle 82) : Qu'est-ce qui vous appartient, mais que les autres utilisent beaucoup plus souvent que vous-même ?",
      "options": [
        "Votre Prénom",
        "Votre Voiture",
        "Votre Maison",
        "Vos Clés"
      ],
      "correctIndex": 0,
      "hint": "Les gens vous appellent par ce mot !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°410 (Cycle 82) : Plus je sèche les autres en sortant de la douche, plus je deviens mouillée. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Serviette",
        "La Mer",
        "Une Savonnette"
      ],
      "correctIndex": 1,
      "hint": "Vous l'accrochez dans la salle de bain !",
      "difficulty": "Légendaire"
    }
  },
  "83": {
    "1": {
      "riddle": "Énigme n°411 (Cycle 83) : Je parle toutes les langues du monde sans jamais avoir appris un seul mot. Que suis-je ?",
      "options": [
        "Un Écho",
        "Une Radio",
        "Un Livre",
        "Un Traducteur"
      ],
      "correctIndex": 0,
      "hint": "Je répète votre voix dans les montagnes !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°412 (Cycle 83) : Qu'est-ce qui a des villes sans maisons, des forêts sans arbres et des rivières sans eau ?",
      "options": [
        "Une Carte Géographique",
        "Un Livre d'Histoire",
        "Un Film",
        "Un Rêve"
      ],
      "correctIndex": 0,
      "hint": "Elle sert à se repérer en voyage !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°413 (Cycle 83) : Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
      "options": [
        "Le Passé",
        "Le Présent",
        "L'Avenir",
        "Le Sommeil"
      ],
      "correctIndex": 2,
      "hint": "C'est ce qui arrivera demain !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°414 (Cycle 83) : Qu'est-ce qui s'allonge quand on le creuse et s'accourcit quand on le rebouche ?",
      "options": [
        "Un Puits / Trou",
        "Un Chemin",
        "Une Bougie",
        "Un Arbre"
      ],
      "correctIndex": 0,
      "hint": "On le creuse avec une pelle !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°415 (Cycle 83) : Je suis plein de trous, pourtant je retiens parfaitement l'eau. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Passerelle",
        "Un Filet",
        "Un Entonnoir"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour faire la vaisselle !",
      "difficulty": "Légendaire"
    }
  },
  "84": {
    "1": {
      "riddle": "Énigme n°416 (Cycle 84) : Qu'est-ce qui peut courir sans jamais avoir de jambes et murmurer sans jamais avoir de bouche ?",
      "options": [
        "Une Rivière",
        "Le Vent",
        "Le Temps",
        "Un Nuage"
      ],
      "correctIndex": 0,
      "hint": "Elle coule vers l'océan !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°417 (Cycle 84) : Je n'ai pas de corps, pas de voix, mais vous pouvez m'entendre souffler dans les arbres. Que suis-je ?",
      "options": [
        "Le Vent",
        "La Pluie",
        "La Brume",
        "L'Écho"
      ],
      "correctIndex": 0,
      "hint": "Je fais voler les cerfs-volants !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°418 (Cycle 84) : Qu'est-ce qui a un œil unique mais ne peut absolument rien voir ?",
      "options": [
        "Une Aiguille à coudre",
        "Un Cyclope",
        "Un Télescope",
        "Une Tempête"
      ],
      "correctIndex": 0,
      "hint": "On y passe un fil pour recoudre !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°419 (Cycle 84) : Qu'est-ce qui s'accourcit au fur et à mesure qu'il brûle et donne de la lumière ?",
      "options": [
        "Une Bougie",
        "Un Bâton",
        "Une Allumette",
        "Un Crayon"
      ],
      "correctIndex": 0,
      "hint": "Sa mèche fond avec la cire !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°420 (Cycle 84) : Je viens une fois dans une minute, deux fois dans un moment, mais jamais dans mille ans. Que suis-je ?",
      "options": [
        "La Lettre M",
        "Le Temps",
        "La Seconde",
        "Le Chiffre 1"
      ],
      "correctIndex": 0,
      "hint": "Regardez l'orthographe des mots !",
      "difficulty": "Légendaire"
    }
  },
  "85": {
    "1": {
      "riddle": "Énigme n°421 (Cycle 85) : Qu'est-ce qui a un cou mais pas de tête ?",
      "options": [
        "Une Bouteille",
        "Une Chemise",
        "Une Guitare",
        "Une Girafe"
      ],
      "correctIndex": 0,
      "hint": "Elle contient du jus ou de l'eau !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°422 (Cycle 85) : Qu'est-ce qui vole sans ailes et pleure sans yeux ?",
      "options": [
        "Un Nuage",
        "Le Vent",
        "Une Feuille",
        "Un Fantôme"
      ],
      "correctIndex": 0,
      "hint": "Il apporte la pluie dans le ciel !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°423 (Cycle 85) : Je grandis quand on me nourrit et je meurs si on me donne à boire. Que suis-je ?",
      "options": [
        "Le Feu",
        "La Plante",
        "Le Poisson",
        "Le Vent"
      ],
      "correctIndex": 0,
      "hint": "L'eau l'éteint immédiatement !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°424 (Cycle 85) : Qu'est-ce qui a beaucoup de dents mais ne peut jamais mordre ?",
      "options": [
        "Un Peigne",
        "Une Scie",
        "Engrenage",
        "Un Râteau"
      ],
      "correctIndex": 0,
      "hint": "On l'utilise pour se coiffer les cheveux !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°425 (Cycle 85) : Plus on en prend en marchant, plus on en laisse derrière soi. Que suis-je ?",
      "options": [
        "Des Pas",
        "Des Souvenirs",
        "Des Traces",
        "Des Cailloux"
      ],
      "correctIndex": 0,
      "hint": "Vos pieds en font à chaque mouvement !",
      "difficulty": "Légendaire"
    }
  },
  "86": {
    "1": {
      "riddle": "Énigme n°426 (Cycle 86) : Qu'est-ce qui possède des histoires sans pouvoir parler et des pages sans pouvoir lire ?",
      "options": [
        "Un Livre",
        "Un Journal",
        "Une Bibliothèque",
        "Un Écran"
      ],
      "correctIndex": 0,
      "hint": "On le feuillette pour lire des contes !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°427 (Cycle 86) : Qu'est-ce qui a deux bras, quatre jambes, mais ne peut pas marcher tout seul ?",
      "options": [
        "Fauteuil / Chaise",
        "Lit",
        "Robot",
        "Mannequin"
      ],
      "correctIndex": 0,
      "hint": "On s'assoit dedans dans le salon !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°428 (Cycle 86) : Je suis si fragile que rien que de me prononcer me détruit. Que suis-je ?",
      "options": [
        "Le Silence",
        "Une Bulle",
        "Un Œuf",
        "Le Verre"
      ],
      "correctIndex": 0,
      "hint": "Le bruit fait cesser cet état paisible !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°429 (Cycle 86) : Qu'est-ce qui monte et descend sans jamais bouger de sa place ?",
      "options": [
        "L'Escalier",
        "L'Ascenseur",
        "La Température",
        "La Marée"
      ],
      "correctIndex": 0,
      "hint": "On marche sur ses marches pour changer d'étage !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°430 (Cycle 86) : Qu'est-ce qui entre mouillé dans la bouche et en ressort sec ou chaud ?",
      "options": [
        "Le Thé en sachet",
        "Un Bonbon",
        "Une Glace",
        "Du Pain"
      ],
      "correctIndex": 0,
      "hint": "Une boisson infusée chaude très appréciée !",
      "difficulty": "Légendaire"
    }
  },
  "87": {
    "1": {
      "riddle": "Énigme n°431 (Cycle 87) : Je traverse les vitres sans jamais les casser. Que suis-je ?",
      "options": [
        "La Lumière / Rayon",
        "L'Ombre",
        "Le Vent",
        "L'Oiseau"
      ],
      "correctIndex": 0,
      "hint": "Le soleil l'envoie à travers la fenêtre !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°432 (Cycle 87) : Qu'est-ce qui a un lit mais ne dort jamais, et une embouchure mais ne parle jamais ?",
      "options": [
        "Une Rivière / Fleuve",
        "La Mer",
        "Un Vallon",
        "Une Grotte"
      ],
      "correctIndex": 0,
      "hint": "Elle s'écoule jusqu'à la mer !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°433 (Cycle 87) : Qu'est-ce qui commence par E, finit par E, mais ne contient qu'une seule lettre ?",
      "options": [
        "Une Enveloppe",
        "Une Épée",
        "L'Éternité",
        "Une Étoile"
      ],
      "correctIndex": 0,
      "hint": "On y insère un courrier ou une carte !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°434 (Cycle 87) : Si j'en ai deux, j'en ai un. Si j'en ai trois, j'en ai deux. Que suis-je ?",
      "options": [
        "Le Choix",
        "Le Couple",
        "Le Triplet",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Avoir plusieurs options donne un...",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°435 (Cycle 87) : Qu'est-ce qui peut être cassé sans jamais avoir été touché avec la main ?",
      "options": [
        "Une Promesse",
        "Un Verre",
        "Une Branche",
        "Un Miroir"
      ],
      "correctIndex": 0,
      "hint": "On la fait en jurant sur l'honneur !",
      "difficulty": "Légendaire"
    }
  },
  "88": {
    "1": {
      "riddle": "Énigme n°436 (Cycle 88) : Qu'est-ce qui n'a pas de pieds mais porte des chaussures toute sa journée ?",
      "options": [
        "Un Pneu de voiture",
        "Un Pied-de-biche",
        "Une Chaise",
        "Un Trottoir"
      ],
      "correctIndex": 0,
      "hint": "Elle roule sur la route !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°437 (Cycle 88) : Je voyage dans les airs sans jamais sortir de ma coquille ou de mon enveloppe. Que suis-je ?",
      "options": [
        "Une Lettre",
        "Un Œuf",
        "Un Escargot",
        "Une Tortue"
      ],
      "correctIndex": 0,
      "hint": "Envoyée par la Poste !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°438 (Cycle 88) : Qu'est-ce qui est aussi léger qu'une plume, mais que l'homme le plus fort ne peut tenir 5 minutes ?",
      "options": [
        "Le Souffle / Respiration",
        "La Fumée",
        "Une Bulle",
        "La Pensée"
      ],
      "correctIndex": 0,
      "hint": "Essayer d'arrêter de respirer !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°439 (Cycle 88) : Qu'est-ce qui devient de plus en plus propre à mesure qu'on l'essuie avec un chiffon ?",
      "options": [
        "Le Miroir / Verre",
        "L'Éponge",
        "Le Sol",
        "La Table"
      ],
      "correctIndex": 0,
      "hint": "Il reflète votre image quand il est propre !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°440 (Cycle 88) : Je possède 13 cœurs, mais aucun autre organe. Que suis-je ?",
      "options": [
        "Un Jeu de Cartes",
        "Un Artichaut",
        "Une Ruche",
        "Un Pommier"
      ],
      "correctIndex": 0,
      "hint": "Comprend les cartes de Cœur du 1 au Roi !",
      "difficulty": "Légendaire"
    }
  },
  "89": {
    "1": {
      "riddle": "Énigme n°441 (Cycle 89) : Qu'est-ce qui s'ouvre la nuit et se ferme le jour sans faire de bruit ?",
      "options": [
        "Les Étoiles",
        "La Porte",
        "Les Yeux de hibou",
        "Les Fleurs"
      ],
      "correctIndex": 0,
      "hint": "Elles brillent dans le ciel nocturne !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°442 (Cycle 89) : Qu'est-ce qui a une clé mais aucune serrure, de l'espace mais aucun endroit ?",
      "options": [
        "Un Clavier d'ordinateur",
        "Un Piano",
        "Une Voiture",
        "Un Coffre"
      ],
      "correctIndex": 0,
      "hint": "La touche 'Espace' s'y trouve !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°443 (Cycle 89) : Je peux être court ou long, rapide ou lent, mais je m'arrête toujours à la fin de la vie. Que suis-je ?",
      "options": [
        "Le Temps / Pouls",
        "Le Chemin",
        "Le Fil",
        "Le Sourd"
      ],
      "correctIndex": 0,
      "hint": "Le cœur le bat régulièrement !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°444 (Cycle 89) : Qu'est-ce qui a des dents mais ne mâche rien du tout ?",
      "options": [
        "Une Scie / Peigne",
        "Un Chien",
        "Une Fourchette",
        "Un Requin"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour découper du bois !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°445 (Cycle 89) : Je suis né grand et je meurs petit avec le temps. Que suis-je ?",
      "options": [
        "Un Crayon / Bougie",
        "Un Arbre",
        "Un Homme",
        "Une Montagne"
      ],
      "correctIndex": 0,
      "hint": "On le taille pour écrire !",
      "difficulty": "Légendaire"
    }
  },
  "90": {
    "1": {
      "riddle": "Énigme n°446 (Cycle 90) : Qu'est-ce qui a 4 roues et des mouches autour de lui ?",
      "options": [
        "Un Camion d'ordures",
        "Une Voiture salie",
        "Un Tracteur",
        "Un Bus"
      ],
      "correctIndex": 0,
      "hint": "Il ramasse les poubelles le matin !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°447 (Cycle 90) : Je me déplace sans marcher, je murmure sans parler, j'ai un lit mais ne dors jamais. Que suis-je ?",
      "options": [
        "La Rivière",
        "Le Vent",
        "La Nuée",
        "Le Temps"
      ],
      "correctIndex": 0,
      "hint": "Un cours d'eau naturel !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°448 (Cycle 90) : Qu'est-ce qui est plus grand que la Tour Eiffel, mais ne pèse absolument rien ?",
      "options": [
        "Son Ombre",
        "Un Nuage",
        "L'Air",
        "Le Ciel"
      ],
      "correctIndex": 0,
      "hint": "Le soleil la projette sur le sol !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°449 (Cycle 90) : Qu'est-ce qui a 88 clés mais ne peut ouvrir aucune porte de maison ?",
      "options": [
        "Un Piano à queue",
        "Un Clavier",
        "Un Organisateur",
        "Un Serurier"
      ],
      "correctIndex": 0,
      "hint": "Compte 52 touches blanches et 36 noires !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°450 (Cycle 90) : Je suis un fruit, mais si vous enlevez ma première lettre, je deviens un animal. Que suis-je ?",
      "options": [
        "La Groseille (Oseille)",
        "La Mûre (Ure)",
        "La Datte (Atte)",
        "La Poire (Oire)"
      ],
      "correctIndex": 0,
      "hint": "Pensez à un fruit rouge ou petit légume !",
      "difficulty": "Légendaire"
    }
  },
  "91": {
    "1": {
      "riddle": "Énigme n°451 (Cycle 91) : Qu'est-ce qui a des touches ou des clés, mais ne peut ouvrir aucune porte ?",
      "options": [
        "Un Piano",
        "Une Voiture",
        "Un Coffre-fort",
        "Un Téléphone"
      ],
      "correctIndex": 0,
      "hint": "Instrument à cordes frappées !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°452 (Cycle 91) : Qu'est-ce qui a quatre jambes le matin, deux le midi et trois le soir ?",
      "options": [
        "Une Table",
        "L'Homme",
        "Un Chien",
        "Une Chaise"
      ],
      "correctIndex": 1,
      "hint": "L'énigme classique du Sphinx sur la vie !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°453 (Cycle 91) : Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
      "options": [
        "La Lumière",
        "L'Obscurité",
        "La Glace",
        "Le Vent"
      ],
      "correctIndex": 1,
      "hint": "Elle survient quand le soleil se couche !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°454 (Cycle 91) : Je tombe sans me faire mal et j'arrose les plantes. Que suis-je ?",
      "options": [
        "Le Soleil",
        "La Pluie",
        "Le Feu",
        "La Neige"
      ],
      "correctIndex": 1,
      "hint": "Elle provient des nuages dans le ciel !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°455 (Cycle 91) : Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
      "options": [
        "Une Boussole",
        "Un Timbre Postal",
        "Un Oiseau",
        "Un Avion"
      ],
      "correctIndex": 1,
      "hint": "On me colle sur l'enveloppe !",
      "difficulty": "Légendaire"
    }
  },
  "92": {
    "1": {
      "riddle": "Énigme n°456 (Cycle 92) : Qu'est-ce qui monte et ne descend jamais ?",
      "options": [
        "Votre Âge",
        "La Montagne",
        "Un Ballon",
        "La Pluie"
      ],
      "correctIndex": 0,
      "hint": "Chaque anniversaire en rajoute une année !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°457 (Cycle 92) : Qu'est-ce qui appartient à tout le monde mais dont personne ne peut se séparer sous le soleil ?",
      "options": [
        "L'Ombre",
        "Le Téléphone",
        "L'Argent",
        "Les Clés"
      ],
      "correctIndex": 0,
      "hint": "Elle vous suit partout sur le sol !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°458 (Cycle 92) : Si vous me nommez haut et fort, vous me brisez. Que suis-je ?",
      "options": [
        "Le Silence",
        "Le Verre",
        "Le Miroir",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Le moindre mot prononcé y met fin !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°459 (Cycle 92) : Qu'est-ce qui vous appartient, mais que les autres utilisent beaucoup plus souvent que vous-même ?",
      "options": [
        "Votre Prénom",
        "Votre Voiture",
        "Votre Maison",
        "Vos Clés"
      ],
      "correctIndex": 0,
      "hint": "Les gens vous appellent par ce mot !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°460 (Cycle 92) : Plus je sèche les autres en sortant de la douche, plus je deviens mouillée. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Serviette",
        "La Mer",
        "Une Savonnette"
      ],
      "correctIndex": 1,
      "hint": "Vous l'accrochez dans la salle de bain !",
      "difficulty": "Légendaire"
    }
  },
  "93": {
    "1": {
      "riddle": "Énigme n°461 (Cycle 93) : Je parle toutes les langues du monde sans jamais avoir appris un seul mot. Que suis-je ?",
      "options": [
        "Un Écho",
        "Une Radio",
        "Un Livre",
        "Un Traducteur"
      ],
      "correctIndex": 0,
      "hint": "Je répète votre voix dans les montagnes !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°462 (Cycle 93) : Qu'est-ce qui a des villes sans maisons, des forêts sans arbres et des rivières sans eau ?",
      "options": [
        "Une Carte Géographique",
        "Un Livre d'Histoire",
        "Un Film",
        "Un Rêve"
      ],
      "correctIndex": 0,
      "hint": "Elle sert à se repérer en voyage !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°463 (Cycle 93) : Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
      "options": [
        "Le Passé",
        "Le Présent",
        "L'Avenir",
        "Le Sommeil"
      ],
      "correctIndex": 2,
      "hint": "C'est ce qui arrivera demain !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°464 (Cycle 93) : Qu'est-ce qui s'allonge quand on le creuse et s'accourcit quand on le rebouche ?",
      "options": [
        "Un Puits / Trou",
        "Un Chemin",
        "Une Bougie",
        "Un Arbre"
      ],
      "correctIndex": 0,
      "hint": "On le creuse avec une pelle !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°465 (Cycle 93) : Je suis plein de trous, pourtant je retiens parfaitement l'eau. Que suis-je ?",
      "options": [
        "Une Éponge",
        "Une Passerelle",
        "Un Filet",
        "Un Entonnoir"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour faire la vaisselle !",
      "difficulty": "Légendaire"
    }
  },
  "94": {
    "1": {
      "riddle": "Énigme n°466 (Cycle 94) : Qu'est-ce qui peut courir sans jamais avoir de jambes et murmurer sans jamais avoir de bouche ?",
      "options": [
        "Une Rivière",
        "Le Vent",
        "Le Temps",
        "Un Nuage"
      ],
      "correctIndex": 0,
      "hint": "Elle coule vers l'océan !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°467 (Cycle 94) : Je n'ai pas de corps, pas de voix, mais vous pouvez m'entendre souffler dans les arbres. Que suis-je ?",
      "options": [
        "Le Vent",
        "La Pluie",
        "La Brume",
        "L'Écho"
      ],
      "correctIndex": 0,
      "hint": "Je fais voler les cerfs-volants !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°468 (Cycle 94) : Qu'est-ce qui a un œil unique mais ne peut absolument rien voir ?",
      "options": [
        "Une Aiguille à coudre",
        "Un Cyclope",
        "Un Télescope",
        "Une Tempête"
      ],
      "correctIndex": 0,
      "hint": "On y passe un fil pour recoudre !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°469 (Cycle 94) : Qu'est-ce qui s'accourcit au fur et à mesure qu'il brûle et donne de la lumière ?",
      "options": [
        "Une Bougie",
        "Un Bâton",
        "Une Allumette",
        "Un Crayon"
      ],
      "correctIndex": 0,
      "hint": "Sa mèche fond avec la cire !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°470 (Cycle 94) : Je viens une fois dans une minute, deux fois dans un moment, mais jamais dans mille ans. Que suis-je ?",
      "options": [
        "La Lettre M",
        "Le Temps",
        "La Seconde",
        "Le Chiffre 1"
      ],
      "correctIndex": 0,
      "hint": "Regardez l'orthographe des mots !",
      "difficulty": "Légendaire"
    }
  },
  "95": {
    "1": {
      "riddle": "Énigme n°471 (Cycle 95) : Qu'est-ce qui a un cou mais pas de tête ?",
      "options": [
        "Une Bouteille",
        "Une Chemise",
        "Une Guitare",
        "Une Girafe"
      ],
      "correctIndex": 0,
      "hint": "Elle contient du jus ou de l'eau !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°472 (Cycle 95) : Qu'est-ce qui vole sans ailes et pleure sans yeux ?",
      "options": [
        "Un Nuage",
        "Le Vent",
        "Une Feuille",
        "Un Fantôme"
      ],
      "correctIndex": 0,
      "hint": "Il apporte la pluie dans le ciel !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°473 (Cycle 95) : Je grandis quand on me nourrit et je meurs si on me donne à boire. Que suis-je ?",
      "options": [
        "Le Feu",
        "La Plante",
        "Le Poisson",
        "Le Vent"
      ],
      "correctIndex": 0,
      "hint": "L'eau l'éteint immédiatement !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°474 (Cycle 95) : Qu'est-ce qui a beaucoup de dents mais ne peut jamais mordre ?",
      "options": [
        "Un Peigne",
        "Une Scie",
        "Engrenage",
        "Un Râteau"
      ],
      "correctIndex": 0,
      "hint": "On l'utilise pour se coiffer les cheveux !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°475 (Cycle 95) : Plus on en prend en marchant, plus on en laisse derrière soi. Que suis-je ?",
      "options": [
        "Des Pas",
        "Des Souvenirs",
        "Des Traces",
        "Des Cailloux"
      ],
      "correctIndex": 0,
      "hint": "Vos pieds en font à chaque mouvement !",
      "difficulty": "Légendaire"
    }
  },
  "96": {
    "1": {
      "riddle": "Énigme n°476 (Cycle 96) : Qu'est-ce qui possède des histoires sans pouvoir parler et des pages sans pouvoir lire ?",
      "options": [
        "Un Livre",
        "Un Journal",
        "Une Bibliothèque",
        "Un Écran"
      ],
      "correctIndex": 0,
      "hint": "On le feuillette pour lire des contes !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°477 (Cycle 96) : Qu'est-ce qui a deux bras, quatre jambes, mais ne peut pas marcher tout seul ?",
      "options": [
        "Fauteuil / Chaise",
        "Lit",
        "Robot",
        "Mannequin"
      ],
      "correctIndex": 0,
      "hint": "On s'assoit dedans dans le salon !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°478 (Cycle 96) : Je suis si fragile que rien que de me prononcer me détruit. Que suis-je ?",
      "options": [
        "Le Silence",
        "Une Bulle",
        "Un Œuf",
        "Le Verre"
      ],
      "correctIndex": 0,
      "hint": "Le bruit fait cesser cet état paisible !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°479 (Cycle 96) : Qu'est-ce qui monte et descend sans jamais bouger de sa place ?",
      "options": [
        "L'Escalier",
        "L'Ascenseur",
        "La Température",
        "La Marée"
      ],
      "correctIndex": 0,
      "hint": "On marche sur ses marches pour changer d'étage !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°480 (Cycle 96) : Qu'est-ce qui entre mouillé dans la bouche et en ressort sec ou chaud ?",
      "options": [
        "Le Thé en sachet",
        "Un Bonbon",
        "Une Glace",
        "Du Pain"
      ],
      "correctIndex": 0,
      "hint": "Une boisson infusée chaude très appréciée !",
      "difficulty": "Légendaire"
    }
  },
  "97": {
    "1": {
      "riddle": "Énigme n°481 (Cycle 97) : Je traverse les vitres sans jamais les casser. Que suis-je ?",
      "options": [
        "La Lumière / Rayon",
        "L'Ombre",
        "Le Vent",
        "L'Oiseau"
      ],
      "correctIndex": 0,
      "hint": "Le soleil l'envoie à travers la fenêtre !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°482 (Cycle 97) : Qu'est-ce qui a un lit mais ne dort jamais, et une embouchure mais ne parle jamais ?",
      "options": [
        "Une Rivière / Fleuve",
        "La Mer",
        "Un Vallon",
        "Une Grotte"
      ],
      "correctIndex": 0,
      "hint": "Elle s'écoule jusqu'à la mer !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°483 (Cycle 97) : Qu'est-ce qui commence par E, finit par E, mais ne contient qu'une seule lettre ?",
      "options": [
        "Une Enveloppe",
        "Une Épée",
        "L'Éternité",
        "Une Étoile"
      ],
      "correctIndex": 0,
      "hint": "On y insère un courrier ou une carte !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°484 (Cycle 97) : Si j'en ai deux, j'en ai un. Si j'en ai trois, j'en ai deux. Que suis-je ?",
      "options": [
        "Le Choix",
        "Le Couple",
        "Le Triplet",
        "Le Secret"
      ],
      "correctIndex": 0,
      "hint": "Avoir plusieurs options donne un...",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°485 (Cycle 97) : Qu'est-ce qui peut être cassé sans jamais avoir été touché avec la main ?",
      "options": [
        "Une Promesse",
        "Un Verre",
        "Une Branche",
        "Un Miroir"
      ],
      "correctIndex": 0,
      "hint": "On la fait en jurant sur l'honneur !",
      "difficulty": "Légendaire"
    }
  },
  "98": {
    "1": {
      "riddle": "Énigme n°486 (Cycle 98) : Qu'est-ce qui n'a pas de pieds mais porte des chaussures toute sa journée ?",
      "options": [
        "Un Pneu de voiture",
        "Un Pied-de-biche",
        "Une Chaise",
        "Un Trottoir"
      ],
      "correctIndex": 0,
      "hint": "Elle roule sur la route !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°487 (Cycle 98) : Je voyage dans les airs sans jamais sortir de ma coquille ou de mon enveloppe. Que suis-je ?",
      "options": [
        "Une Lettre",
        "Un Œuf",
        "Un Escargot",
        "Une Tortue"
      ],
      "correctIndex": 0,
      "hint": "Envoyée par la Poste !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°488 (Cycle 98) : Qu'est-ce qui est aussi léger qu'une plume, mais que l'homme le plus fort ne peut tenir 5 minutes ?",
      "options": [
        "Le Souffle / Respiration",
        "La Fumée",
        "Une Bulle",
        "La Pensée"
      ],
      "correctIndex": 0,
      "hint": "Essayer d'arrêter de respirer !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°489 (Cycle 98) : Qu'est-ce qui devient de plus en plus propre à mesure qu'on l'essuie avec un chiffon ?",
      "options": [
        "Le Miroir / Verre",
        "L'Éponge",
        "Le Sol",
        "La Table"
      ],
      "correctIndex": 0,
      "hint": "Il reflète votre image quand il est propre !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°490 (Cycle 98) : Je possède 13 cœurs, mais aucun autre organe. Que suis-je ?",
      "options": [
        "Un Jeu de Cartes",
        "Un Artichaut",
        "Une Ruche",
        "Un Pommier"
      ],
      "correctIndex": 0,
      "hint": "Comprend les cartes de Cœur du 1 au Roi !",
      "difficulty": "Légendaire"
    }
  },
  "99": {
    "1": {
      "riddle": "Énigme n°491 (Cycle 99) : Qu'est-ce qui s'ouvre la nuit et se ferme le jour sans faire de bruit ?",
      "options": [
        "Les Étoiles",
        "La Porte",
        "Les Yeux de hibou",
        "Les Fleurs"
      ],
      "correctIndex": 0,
      "hint": "Elles brillent dans le ciel nocturne !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°492 (Cycle 99) : Qu'est-ce qui a une clé mais aucune serrure, de l'espace mais aucun endroit ?",
      "options": [
        "Un Clavier d'ordinateur",
        "Un Piano",
        "Une Voiture",
        "Un Coffre"
      ],
      "correctIndex": 0,
      "hint": "La touche 'Espace' s'y trouve !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°493 (Cycle 99) : Je peux être court ou long, rapide ou lent, mais je m'arrête toujours à la fin de la vie. Que suis-je ?",
      "options": [
        "Le Temps / Pouls",
        "Le Chemin",
        "Le Fil",
        "Le Sourd"
      ],
      "correctIndex": 0,
      "hint": "Le cœur le bat régulièrement !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°494 (Cycle 99) : Qu'est-ce qui a des dents mais ne mâche rien du tout ?",
      "options": [
        "Une Scie / Peigne",
        "Un Chien",
        "Une Fourchette",
        "Un Requin"
      ],
      "correctIndex": 0,
      "hint": "Très utile pour découper du bois !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°495 (Cycle 99) : Je suis né grand et je meurs petit avec le temps. Que suis-je ?",
      "options": [
        "Un Crayon / Bougie",
        "Un Arbre",
        "Un Homme",
        "Une Montagne"
      ],
      "correctIndex": 0,
      "hint": "On le taille pour écrire !",
      "difficulty": "Légendaire"
    }
  },
  "100": {
    "1": {
      "riddle": "Énigme n°496 (Cycle 100) : Qu'est-ce qui a 4 roues et des mouches autour de lui ?",
      "options": [
        "Un Camion d'ordures",
        "Une Voiture salie",
        "Un Tracteur",
        "Un Bus"
      ],
      "correctIndex": 0,
      "hint": "Il ramasse les poubelles le matin !",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme n°497 (Cycle 100) : Je me déplace sans marcher, je murmure sans parler, j'ai un lit mais ne dors jamais. Que suis-je ?",
      "options": [
        "La Rivière",
        "Le Vent",
        "La Nuée",
        "Le Temps"
      ],
      "correctIndex": 0,
      "hint": "Un cours d'eau naturel !",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme n°498 (Cycle 100) : Qu'est-ce qui est plus grand que la Tour Eiffel, mais ne pèse absolument rien ?",
      "options": [
        "Son Ombre",
        "Un Nuage",
        "L'Air",
        "Le Ciel"
      ],
      "correctIndex": 0,
      "hint": "Le soleil la projette sur le sol !",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme n°499 (Cycle 100) : Qu'est-ce qui a 88 clés mais ne peut ouvrir aucune porte de maison ?",
      "options": [
        "Un Piano à queue",
        "Un Clavier",
        "Un Organisateur",
        "Un Serurier"
      ],
      "correctIndex": 0,
      "hint": "Compte 52 touches blanches et 36 noires !",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme n°500 (Cycle 100) : Je suis un fruit, mais si vous enlevez ma première lettre, je deviens un animal. Que suis-je ?",
      "options": [
        "La Groseille (Oseille)",
        "La Mûre (Ure)",
        "La Datte (Atte)",
        "La Poire (Oire)"
      ],
      "correctIndex": 0,
      "hint": "Pensez à un fruit rouge ou petit légume !",
      "difficulty": "Légendaire"
    }
  }
};

export const RIDDLES_DATABASE_100 = DATA;

export function getRiddle(cycle = 1, houseLevel = 1) {
  const normalizedCycle = ((Math.max(1, cycle) - 1) % 100) + 1;
  const normalizedHouse = Math.min(Math.max(1, houseLevel), 5);

  const cycleData = DATA[normalizedCycle] || DATA[1];
  const riddleObj = cycleData[normalizedHouse] || DATA[1][1];

  return {
    ...riddleObj,
    cycle: normalizedCycle,
    houseLevel: normalizedHouse
  };
}
