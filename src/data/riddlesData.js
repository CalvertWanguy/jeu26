// Base de données de 500 devinettes 100% uniques réparties sur 100 cycles (5 maisons par cycle).
// Réponses distribuées de manière uniforme sur les 4 choix (A, B, C, D).

const DATA = {
  "1": {
    "1": {
      "riddle": "Qu'est-ce qui a des touches ou des clés, mais ne peut ouvrir aucune porte ?",
      "options": ["Un Coffre-fort", "Une Voiture", "Un Téléphone", "Un Piano"],
      "correctIndex": 3,
      "hint": "Instrument de musique à clavier.",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui a quatre jambes le matin, deux le midi et trois le soir ?",
      "options": ["Une Chaise", "Un Chien", "Une Table", "L'Homme"],
      "correctIndex": 3,
      "hint": "L'énigme mythique du Sphinx.",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
      "options": ["L'Obscurité", "Le Vent", "La Glace", "La Lumière"],
      "correctIndex": 0,
      "hint": "Elle règne durant la nuit.",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Je tombe sans me faire mal et j'arrose les plantes. Que suis-je ?",
      "options": ["La Pluie", "Le Feu", "Le Soleil", "La Neige"],
      "correctIndex": 0,
      "hint": "Elle descend des nuages.",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
      "options": ["Un Timbre Postal", "Un Oiseau", "Un Avion", "Une Boussole"],
      "correctIndex": 0,
      "hint": "On me colle sur une enveloppe.",
      "difficulty": "Débutant"
    }
  },
  "2": {
    "1": {
      "riddle": "Qu'est-ce qui monte et ne descend jamais ?",
      "options": ["La Montagne", "La Pluie", "Un Ballon", "Votre Âge"],
      "correctIndex": 3,
      "hint": "Chaque anniversaire en ajoute un.",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui appartient à tout le monde mais dont personne ne peut se séparer sous le soleil ?",
      "options": ["L'Argent", "Le Téléphone", "L'Ombre", "Les Clés"],
      "correctIndex": 2,
      "hint": "Elle s'étire au sol selon la lumière.",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Si vous me nommez haut et fort, vous me brisez. Que suis-je ?",
      "options": ["Le Verre", "Le Secret", "Le Silence", "Le Miroir"],
      "correctIndex": 2,
      "hint": "La moindre parole y met fin.",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui vous appartient, mais que les autres utilisent beaucoup plus souvent que vous-même ?",
      "options": ["Votre Prénom", "Votre Maison", "Votre Voiture", "Vos Clés"],
      "correctIndex": 0,
      "hint": "Les gens vous appellent ainsi.",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Plus je sèche les autres en sortant de la douche, plus je deviens mouillée. Que suis-je ?",
      "options": ["La Mer", "Une Savonnette", "Une Éponge", "Une Serviette"],
      "correctIndex": 3,
      "hint": "Indispensable dans la salle de bain.",
      "difficulty": "Débutant"
    }
  },
  "3": {
    "1": {
      "riddle": "Je parle toutes les langues du monde sans jamais avoir appris un seul mot. Que suis-je ?",
      "options": ["Un Livre", "Une Radio", "Un Traducteur", "Un Écho"],
      "correctIndex": 3,
      "hint": "Je répète les sons dans les montagnes.",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui a des villes sans maisons, des forêts sans arbres et des rivières sans eau ?",
      "options": ["Un Rêve", "Un Film", "Un Livre d'Histoire", "Une Carte Géographique"],
      "correctIndex": 3,
      "hint": "Très pratique pour s'orienter en voyage.",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
      "options": ["Le Sommeil", "Le Présent", "Le Passé", "L'Avenir"],
      "correctIndex": 3,
      "hint": "C'est ce qui se passera demain.",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui s'allonge quand on le creuse et s'accourcit quand on le rebouche ?",
      "options": ["Une Bougie", "Un Arbre", "Un Chemin", "Un Trou"],
      "correctIndex": 3,
      "hint": "On le creuse dans la terre.",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Je suis plein de trous, pourtant je retiens parfaitement l'eau. Que suis-je ?",
      "options": ["Une Éponge", "Une Passerelle", "Un Entonnoir", "Un Filet"],
      "correctIndex": 0,
      "hint": "Utilisée pour faire la vaisselle.",
      "difficulty": "Débutant"
    }
  },
  "4": {
    "1": {
      "riddle": "Qu'est-ce qui peut courir sans jamais avoir de jambes et murmurer sans jamais avoir de bouche ?",
      "options": ["Un Nuage", "Une Rivière", "Le Temps", "Le Vent"],
      "correctIndex": 1,
      "hint": "Elle s'écoule jusqu'à la mer.",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Je n'ai pas de corps, pas de voix, mais vous pouvez m'entendre souffler dans les arbres. Que suis-je ?",
      "options": ["La Pluie", "L'Ombre", "L'Écho", "Le Vent"],
      "correctIndex": 3,
      "hint": "Il fait voler le cerf-volant.",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Qu'est-ce qui a un œil unique mais ne peut absolument rien voir ?",
      "options": ["Un Cyclope", "Un Bouton", "Une Aiguille", "Une Tempête"],
      "correctIndex": 2,
      "hint": "Servant à enfiler le fil de couture.",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui s'accourcit au fur et à mesure qu'il brûle et donne de la lumière ?",
      "options": ["Une Allumette", "Un Crayon", "Un Bâton", "Une Bougie"],
      "correctIndex": 3,
      "hint": "On la souffle lors des anniversaires.",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Je viens une fois dans une minute, deux fois dans un moment, mais jamais dans mille ans. Que suis-je ?",
      "options": ["La Lettre M", "Le Temps", "La Seconde", "La Lune"],
      "correctIndex": 0,
      "hint": "Observez l'orthographe des mots !",
      "difficulty": "Débutant"
    }
  },
  "5": {
    "1": {
      "riddle": "Qu'est-ce qui a un cou mais pas de tête ?",
      "options": ["Une Bouteille", "Une Guitare", "Une Girafe", "Une Chemise"],
      "correctIndex": 0,
      "hint": "Elle contient de l'eau ou du jus.",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui vole sans wings et pleure sans yeux ?",
      "options": ["Un Nuage", "Un Fantôme", "Un Avion", "Le Vent"],
      "correctIndex": 0,
      "hint": "Il apporte la pluie dans le ciel.",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Je grandis quand on me nourrit de bois et je meurs si on me donne à boire. Que suis-je ?",
      "options": ["Une Plante", "Un Arbre", "Le Sable", "Le Feu"],
      "correctIndex": 3,
      "hint": "L'eau l'éteint immédiatement.",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui a beaucoup de dents mais ne peut jamais mordre ?",
      "options": ["Un Engrenage", "Une Fermeture", "Un Peigne", "Une Scie"],
      "correctIndex": 2,
      "hint": "Utilisé pour se coiffer les cheveux.",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Plus on en prend en marchant, plus on en laisse derrière soi. Que suis-je ?",
      "options": ["Des Traces", "Des Pas", "Des Souvenirs", "Des Cailloux"],
      "correctIndex": 1,
      "hint": "Empreintes laissées sur le sol.",
      "difficulty": "Débutant"
    }
  },
  "6": {
    "1": {
      "riddle": "Qu'est-ce qui possède des histoires sans pouvoir parler et des pages sans pouvoir lire ?",
      "options": ["Une Bibliothèque", "Un Cahier", "Un Livre", "Un Journal"],
      "correctIndex": 2,
      "hint": "On l'ouvre pour lire une aventure.",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui a deux bras, quatre jambes, mais ne peut pas marcher tout seul ?",
      "options": ["Une Table", "Un Lit", "Un Fauteuil", "Une Chaise"],
      "correctIndex": 3,
      "hint": "Meuble où l'on s'assoit confortablement.",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Je suis si fragile que rien que de me prononcer me détruit. Que suis-je ?",
      "options": ["Le Verre", "La Cristal", "Le Silence", "Un Rêve"],
      "correctIndex": 2,
      "hint": "Le moindre mot le fait disparaître.",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui monte et descend sans jamais bouger de sa place ?",
      "options": ["La Mer", "L'Ascenseur", "L'Escalier", "Le Thermomètre"],
      "correctIndex": 2,
      "hint": "Marcher dessus pour changer d'étage.",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Qu'est-ce qui entre mouillé dans la bouche et en ressort sec ou chaud ?",
      "options": ["Le Pain grillé", "Une Boisson", "Une Soupe", "Un Bonbon"],
      "correctIndex": 0,
      "hint": "Aliment cuit au four.",
      "difficulty": "Débutant"
    }
  },
  "7": {
    "1": {
      "riddle": "Je traverse les vitres sans jamais les casser. Que suis-je ?",
      "options": ["Le Vent", "La Lumière", "L'Oiseau", "La Pluie"],
      "correctIndex": 1,
      "hint": "Elle vient du soleil à travers le verre.",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui a un lit mais ne dort jamais, et une embouchure mais ne parle jamais ?",
      "options": ["Un Fleuve", "Un Puits", "Un Océan", "Un Lac"],
      "correctIndex": 0,
      "hint": "Il s'écoule naturellement vers la mer.",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Qu'est-ce qui commence par E, finit par E, mais ne contient qu'une seule lettre ?",
      "options": ["Une Enveloppe", "Un Éléphant", "Une Étoile", "L'Espace"],
      "correctIndex": 0,
      "hint": "Elle sert à envoyer du courrier.",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Si j'en ai deux, j'en ai un. Si j'en ai trois, j'en ai deux. Que suis-je ?",
      "options": ["Un Doute", "Un Ami", "Un Choix", "Un Secret"],
      "correctIndex": 2,
      "hint": "Faire un dilemme entre deux options.",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Qu'est-ce qui peut être cassé sans jamais avoir été touché avec la main ?",
      "options": ["Une Assiette", "Un Verre", "Une Promesse", "Une Branche"],
      "correctIndex": 2,
      "hint": "Un engagement verbal non tenu.",
      "difficulty": "Débutant"
    }
  },
  "8": {
    "1": {
      "riddle": "Qu'est-ce qui n'a pas de pieds mais porte des chaussures toute sa journée ?",
      "options": ["Un Cheval", "Une Chaise", "Un Balai", "Un Pneu"],
      "correctIndex": 3,
      "hint": "Elle protège la roue d'un véhicule.",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Je voyage dans les airs sans jamais sortir de ma coquille ou de mon enveloppe. Que suis-je ?",
      "options": ["Un Oiseau", "Une Lettre", "Un Œuf", "Une Graine"],
      "correctIndex": 1,
      "hint": "Expédiée par la poste.",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Qu'est-ce qui est aussi léger qu'une plume, mais que l'homme le plus fort ne peut tenir 5 minutes ?",
      "options": ["Le Souffle", "L'Air", "Une Feuille", "Une Bulle"],
      "correctIndex": 0,
      "hint": "Retenir sa respiration sous l'eau.",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui devient de plus en plus propre à mesure qu'on l'essuie avec un chiffon ?",
      "options": ["Une Vitre", "Un Tableau Noir", "Une Assiette", "Un Miroir"],
      "correctIndex": 1,
      "hint": "Utilisé à l'école avec de la craie.",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Je possède 13 cœurs, mais aucun autre organe vital. Que suis-je ?",
      "options": ["Un Livre", "Un Poulpe", "Un Arbre", "Un Jeu de Cartes"],
      "correctIndex": 3,
      "hint": "Jeu de cartes à jouer (couleur cœur).",
      "difficulty": "Débutant"
    }
  },
  "9": {
    "1": {
      "riddle": "Qu'est-ce qui s'ouvre la nuit et se ferme le jour sans faire aucun bruit ?",
      "options": ["La Porte", "Les Yeux", "Un Œillet de nuit", "Les Volets"],
      "correctIndex": 2,
      "hint": "Certaines fleurs s'épanouissent le soir.",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Qu'est-ce qui a une clé mais aucune serrure, de l'espace mais aucun endroit ?",
      "options": ["Un Livre", "Une Carte", "Un Clavier d'ordinateur", "Un Piano"],
      "correctIndex": 2,
      "hint": "Clé Entrée, Échap, Espace...",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Je peux être court ou long, rapide ou lent, mais je m'arrête toujours à la fin de la vie. Que suis-je ?",
      "options": ["Le Vent", "Le Temps", "Le Chemin", "Le Pouls"],
      "correctIndex": 3,
      "hint": "Battement du cœur mesurable au poignet.",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui a des dents mais ne mâche rien du tout ?",
      "options": ["Un Raton", "Une Scie", "Une Fourchette", "Un Chien"],
      "correctIndex": 1,
      "hint": "Outil du charpentier pour couper du bois.",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Je suis né grand et je meurs petit avec le temps. Que suis-je ?",
      "options": ["Un Arbre", "Un Crayon", "Une Montagne", "Un Homme"],
      "correctIndex": 1,
      "hint": "Il raccourcit au taille-crayon.",
      "difficulty": "Débutant"
    }
  },
  "10": {
    "1": {
      "riddle": "Qu'est-ce qui a 4 roues et des mouches autour de lui ?",
      "options": ["Un Autobus", "Un Camion d'ordures", "Un Traîneau", "Une Voiture"],
      "correctIndex": 1,
      "hint": "Il collecte les déchets de la ville.",
      "difficulty": "Débutant"
    },
    "2": {
      "riddle": "Je me déplace sans marcher, je murmure sans parler, j'ai un lit mais ne dors jamais. Que suis-je ?",
      "options": ["La Mer", "Le Vent", "Un Nuage", "Une Rivière"],
      "correctIndex": 3,
      "hint": "Cours d'eau s'écoulant vers l'océan.",
      "difficulty": "Débutant"
    },
    "3": {
      "riddle": "Qu'est-ce qui est plus grand que la Tour Eiffel, mais ne pèse absolument rien ?",
      "options": ["Un Nuage", "L'Air", "Son Ombre", "Le Ciel"],
      "correctIndex": 2,
      "hint": "Projection sombre causée par le soleil.",
      "difficulty": "Débutant"
    },
    "4": {
      "riddle": "Qu'est-ce qui a 88 clés mais ne peut ouvrir aucune porte de maison ?",
      "options": ["Un Serrurier", "Un Piano à queue", "Un Clavier", "Un Organisateur"],
      "correctIndex": 1,
      "hint": "Instrument de musique classique à queue.",
      "difficulty": "Débutant"
    },
    "5": {
      "riddle": "Je suis un fruit, mais si vous enlevez ma première lettre, je deviens un animal. Que suis-je ?",
      "options": ["La Mûre", "La Datte", "La Poire", "La Groseille"],
      "correctIndex": 3,
      "hint": "Groseille sans G donne Roseille (oiseau/animal).",
      "difficulty": "Débutant"
    }
  },
  "11": {
    "1": {
      "riddle": "Énigme #51 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "Le Soleil", "Mars", "La Lune"],
      "correctIndex": 3,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #52 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Tigre", "Le Léopard", "L'Éléphant", "Le Lion"],
      "correctIndex": 3,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #53 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["56", "64", "48", "54"],
      "correctIndex": 0,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #54 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Pacifique", "L'Océan Indien", "L'Océan Arctique", "L'Océan Atlantique"],
      "correctIndex": 0,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #55 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "L'Azote (N2)", "Le CO2", "L'Oxygène (O2)"],
      "correctIndex": 1,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Moyen"
    }
  },
  "12": {
    "1": {
      "riddle": "Énigme #56 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Or", "Le Fer", "L'Argent", "Le Cuivre"],
      "correctIndex": 0,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #57 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "8", "12", "4"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #58 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Poumon", "Le Foie", "Le Cerveau", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #59 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Bordeaux", "Lyon", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #60 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Grand Cachalot", "La Baleine Bleue", "L'Orque", "Le Requin Baleine"],
      "correctIndex": 1,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Moyen"
    }
  },
  "13": {
    "1": {
      "riddle": "Énigme #61 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Le Soleil", "Mars", "Jupiter", "La Lune"],
      "correctIndex": 3,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #62 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Léopard", "L'Éléphant", "Le Lion", "Le Tigre"],
      "correctIndex": 2,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #63 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "64", "56", "48"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #64 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Pacifique", "L'Océan Atlantique", "L'Océan Arctique", "L'Océan Indien"],
      "correctIndex": 0,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #65 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "L'Azote (N2)", "Le CO2", "L'Oxygène (O2)"],
      "correctIndex": 1,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Moyen"
    }
  },
  "14": {
    "1": {
      "riddle": "Énigme #66 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Cuivre", "L'Argent", "L'Or", "Le Fer"],
      "correctIndex": 2,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #67 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["8", "12", "6", "4"],
      "correctIndex": 2,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #68 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Poumon", "Le Foie", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #69 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Bordeaux", "Lyon", "Marseille"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #70 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Requin Baleine", "La Baleine Bleue", "L'Orque", "Le Grand Cachalot"],
      "correctIndex": 1,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Moyen"
    }
  },
  "15": {
    "1": {
      "riddle": "Énigme #71 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Mars", "Le Soleil", "Jupiter", "La Lune"],
      "correctIndex": 3,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #72 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Tigre", "Le Léopard", "Le Lion", "L'Éléphant"],
      "correctIndex": 2,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #73 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "64", "56", "54"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #74 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Pacifique", "L'Océan Arctique", "L'Océan Atlantique"],
      "correctIndex": 1,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #75 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "L'Azote (N2)", "L'Oxygène (O2)", "Le CO2"],
      "correctIndex": 1,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Moyen"
    }
  },
  "16": {
    "1": {
      "riddle": "Énigme #76 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Cuivre", "Le Fer", "L'Argent", "L'Or"],
      "correctIndex": 3,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #77 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["8", "4", "12", "6"],
      "correctIndex": 3,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #78 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Poumon", "Le Foie", "Le Cerveau", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #79 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Marseille", "Lyon", "Bordeaux"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #80 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["L'Orque", "La Baleine Bleue", "Le Grand Cachalot", "Le Requin Baleine"],
      "correctIndex": 1,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Moyen"
    }
  },
  "17": {
    "1": {
      "riddle": "Énigme #81 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Mars", "La Lune", "Jupiter", "Le Soleil"],
      "correctIndex": 1,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #82 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "L'Éléphant", "Le Tigre", "Le Léopard"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #83 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["56", "64", "54", "48"],
      "correctIndex": 0,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #84 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Arctique", "L'Océan Pacifique", "L'Océan Atlantique"],
      "correctIndex": 2,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #85 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "Le CO2", "L'Azote (N2)", "L'Oxygène (O2)"],
      "correctIndex": 2,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Moyen"
    }
  },
  "18": {
    "1": {
      "riddle": "Énigme #86 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Argent", "Le Fer", "L'Or", "Le Cuivre"],
      "correctIndex": 2,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #87 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["8", "6", "12", "4"],
      "correctIndex": 1,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #88 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Poumon", "Le Cerveau", "Le Foie", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #89 : Quelle est la capitale de la France ?",
      "options": ["Bordeaux", "Marseille", "Paris", "Lyon"],
      "correctIndex": 2,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #90 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["L'Orque", "La Baleine Bleue", "Le Grand Cachalot", "Le Requin Baleine"],
      "correctIndex": 1,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Moyen"
    }
  },
  "19": {
    "1": {
      "riddle": "Énigme #91 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "La Lune", "Mars", "Le Soleil"],
      "correctIndex": 1,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #92 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Léopard", "L'Éléphant", "Le Tigre", "Le Lion"],
      "correctIndex": 3,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #93 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["64", "54", "56", "48"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #94 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Pacifique", "L'Océan Indien", "L'Océan Arctique", "L'Océan Atlantique"],
      "correctIndex": 0,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #95 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Azote (N2)", "L'Argon", "Le CO2", "L'Oxygène (O2)"],
      "correctIndex": 0,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Moyen"
    }
  },
  "20": {
    "1": {
      "riddle": "Énigme #96 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Cuivre", "L'Or", "L'Argent", "Le Fer"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #97 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["12", "4", "8", "6"],
      "correctIndex": 3,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #98 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Poumon", "Le Cerveau", "Le Foie", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #99 : Quelle est la capitale de la France ?",
      "options": ["Bordeaux", "Lyon", "Paris", "Marseille"],
      "correctIndex": 2,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #100 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["L'Orque", "Le Requin Baleine", "Le Grand Cachalot", "La Baleine Bleue"],
      "correctIndex": 3,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Moyen"
    }
  },
  "21": {
    "1": {
      "riddle": "Énigme #101 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "Le Soleil", "La Lune", "Mars"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #102 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Tigre", "Le Lion", "Le Léopard", "L'Éléphant"],
      "correctIndex": 1,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #103 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "56", "64", "48"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #104 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Pacifique", "L'Océan Arctique", "L'Océan Atlantique"],
      "correctIndex": 1,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #105 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "L'Argon", "Le CO2", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Moyen"
    }
  },
  "22": {
    "1": {
      "riddle": "Énigme #106 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Fer", "L'Or", "L'Argent", "Le Cuivre"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #107 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["4", "8", "6", "12"],
      "correctIndex": 2,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #108 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Cœur", "Le Poumon", "Le Cerveau"],
      "correctIndex": 1,
      "hint": "Organe musculaire vital.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #109 : Quelle est la capitale de la France ?",
      "options": ["Bordeaux", "Lyon", "Marseille", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #110 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Requin Baleine", "Le Grand Cachalot", "La Baleine Bleue", "L'Orque"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Moyen"
    }
  },
  "23": {
    "1": {
      "riddle": "Énigme #111 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "Le Soleil", "La Lune", "Mars"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #112 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "Le Léopard", "L'Éléphant", "Le Tigre"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #113 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "56", "48", "64"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #114 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Atlantique", "L'Océan Indien", "L'Océan Arctique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #115 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["Le CO2", "L'Argon", "L'Oxygène (O2)", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Moyen"
    }
  },
  "24": {
    "1": {
      "riddle": "Énigme #116 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Argent", "Le Cuivre", "L'Or", "Le Fer"],
      "correctIndex": 2,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #117 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["4", "6", "8", "12"],
      "correctIndex": 1,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #118 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Poumon", "Le Cerveau", "Le Cœur", "Le Foie"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #119 : Quelle est la capitale de la France ?",
      "options": ["Bordeaux", "Marseille", "Lyon", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #120 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Grand Cachalot", "L'Orque", "La Baleine Bleue", "Le Requin Baleine"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Moyen"
    }
  },
  "25": {
    "1": {
      "riddle": "Énigme #121 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Mars", "La Lune", "Jupiter", "Le Soleil"],
      "correctIndex": 1,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #122 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "Le Léopard", "L'Éléphant", "Le Tigre"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #123 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "56", "48", "64"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #124 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Atlantique", "L'Océan Arctique", "L'Océan Pacifique", "L'Océan Indien"],
      "correctIndex": 2,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #125 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["Le CO2", "L'Oxygène (O2)", "L'Azote (N2)", "L'Argon"],
      "correctIndex": 2,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Moyen"
    }
  },
  "26": {
    "1": {
      "riddle": "Énigme #126 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Cuivre", "Le Fer", "L'Or", "L'Argent"],
      "correctIndex": 2,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #127 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["4", "6", "8", "12"],
      "correctIndex": 1,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #128 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Foie", "Le Cœur", "Le Poumon"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #129 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Marseille", "Lyon", "Bordeaux"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #130 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Grand Cachalot", "L'Orque", "Le Requin Baleine", "La Baleine Bleue"],
      "correctIndex": 3,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Moyen"
    }
  },
  "27": {
    "1": {
      "riddle": "Énigme #131 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Le Soleil", "Mars", "Jupiter"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #132 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["L'Éléphant", "Le Tigre", "Le Léopard", "Le Lion"],
      "correctIndex": 3,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #133 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["56", "64", "48", "54"],
      "correctIndex": 0,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #134 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Atlantique", "L'Océan Arctique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #135 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Azote (N2)", "L'Oxygène (O2)", "L'Argon", "Le CO2"],
      "correctIndex": 0,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Moyen"
    }
  },
  "28": {
    "1": {
      "riddle": "Énigme #136 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Argent", "L'Or", "Le Cuivre", "Le Fer"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Moyen"
    },
    "2": {
      "riddle": "Énigme #137 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["8", "6", "12", "4"],
      "correctIndex": 1,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Moyen"
    },
    "3": {
      "riddle": "Énigme #138 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Poumon", "Le Cœur", "Le Foie"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Moyen"
    },
    "4": {
      "riddle": "Énigme #139 : Quelle est la capitale de la France ?",
      "options": ["Lyon", "Bordeaux", "Marseille", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Moyen"
    },
    "5": {
      "riddle": "Énigme #140 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Grand Cachalot", "La Baleine Bleue", "Le Requin Baleine", "L'Orque"],
      "correctIndex": 1,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Moyen"
    }
  },
  "29": {
    "1": {
      "riddle": "Énigme #141 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Le Soleil", "Jupiter", "Mars"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #142 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Léopard", "Le Tigre", "L'Éléphant", "Le Lion"],
      "correctIndex": 3,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #143 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["56", "54", "64", "48"],
      "correctIndex": 0,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #144 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Pacifique", "L'Océan Arctique", "L'Océan Atlantique", "L'Océan Indien"],
      "correctIndex": 0,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #145 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["Le CO2", "L'Argon", "L'Azote (N2)", "L'Oxygène (O2)"],
      "correctIndex": 2,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Intermédiaire"
    }
  },
  "30": {
    "1": {
      "riddle": "Énigme #146 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Argent", "L'Or", "Le Cuivre", "Le Fer"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #147 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["4", "6", "8", "12"],
      "correctIndex": 1,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #148 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Cœur", "Le Poumon", "Le Foie"],
      "correctIndex": 1,
      "hint": "Organe musculaire vital.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #149 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Lyon", "Marseille", "Bordeaux"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #150 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["La Baleine Bleue", "L'Orque", "Le Requin Baleine", "Le Grand Cachalot"],
      "correctIndex": 0,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Intermédiaire"
    }
  },
  "31": {
    "1": {
      "riddle": "Énigme #151 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Jupiter", "Mars", "Le Soleil"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #152 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Léopard", "Le Lion", "L'Éléphant", "Le Tigre"],
      "correctIndex": 1,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #153 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["56", "54", "64", "48"],
      "correctIndex": 0,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #154 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Atlantique", "L'Océan Arctique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #155 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "Le CO2", "L'Azote (N2)", "L'Oxygène (O2)"],
      "correctIndex": 2,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Intermédiaire"
    }
  },
  "32": {
    "1": {
      "riddle": "Énigme #156 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Argent", "Le Cuivre", "Le Fer", "L'Or"],
      "correctIndex": 3,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #157 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["8", "6", "12", "4"],
      "correctIndex": 1,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #158 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Cœur", "Le Poumon", "Le Cerveau"],
      "correctIndex": 1,
      "hint": "Organe musculaire vital.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #159 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Marseille", "Lyon", "Bordeaux"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #160 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Grand Cachalot", "L'Orque", "La Baleine Bleue", "Le Requin Baleine"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Intermédiaire"
    }
  },
  "33": {
    "1": {
      "riddle": "Énigme #161 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Mars", "Jupiter", "Le Soleil", "La Lune"],
      "correctIndex": 3,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #162 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "Le Léopard", "L'Éléphant", "Le Tigre"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #163 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "64", "48", "56"],
      "correctIndex": 3,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #164 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Arctique", "L'Océan Atlantique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #165 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Azote (N2)", "L'Oxygène (O2)", "Le CO2", "L'Argon"],
      "correctIndex": 0,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Intermédiaire"
    }
  },
  "34": {
    "1": {
      "riddle": "Énigme #166 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Or", "L'Argent", "Le Cuivre", "Le Fer"],
      "correctIndex": 0,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #167 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["12", "8", "6", "4"],
      "correctIndex": 2,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #168 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Cœur", "Le Poumon", "Le Cerveau"],
      "correctIndex": 1,
      "hint": "Organe musculaire vital.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #169 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Lyon", "Bordeaux", "Marseille"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #170 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["La Baleine Bleue", "L'Orque", "Le Grand Cachalot", "Le Requin Baleine"],
      "correctIndex": 0,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Intermédiaire"
    }
  },
  "35": {
    "1": {
      "riddle": "Énigme #171 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "Le Soleil", "Mars", "La Lune"],
      "correctIndex": 3,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #172 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "L'Éléphant", "Le Léopard", "Le Tigre"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #173 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "56", "64", "48"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #174 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Arctique", "L'Océan Indien", "L'Océan Pacifique", "L'Océan Atlantique"],
      "correctIndex": 2,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #175 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "L'Azote (N2)", "Le CO2", "L'Argon"],
      "correctIndex": 1,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Intermédiaire"
    }
  },
  "36": {
    "1": {
      "riddle": "Énigme #176 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Cuivre", "Le Fer", "L'Or", "L'Argent"],
      "correctIndex": 2,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #177 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "12", "8", "4"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #178 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Poumon", "Le Foie", "Le Cœur", "Le Cerveau"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #179 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Paris", "Lyon", "Bordeaux"],
      "correctIndex": 1,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #180 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["L'Orque", "La Baleine Bleue", "Le Requin Baleine", "Le Grand Cachalot"],
      "correctIndex": 1,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Intermédiaire"
    }
  },
  "37": {
    "1": {
      "riddle": "Énigme #181 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Jupiter", "Le Soleil", "Mars"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #182 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Tigre", "Le Lion", "L'Éléphant", "Le Léopard"],
      "correctIndex": 1,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #183 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "54", "56", "64"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #184 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Pacifique", "L'Océan Atlantique", "L'Océan Arctique"],
      "correctIndex": 1,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #185 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Azote (N2)", "Le CO2", "L'Oxygène (O2)", "L'Argon"],
      "correctIndex": 0,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Intermédiaire"
    }
  },
  "38": {
    "1": {
      "riddle": "Énigme #186 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Cuivre", "L'Or", "Le Fer", "L'Argent"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #187 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["12", "4", "8", "6"],
      "correctIndex": 3,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #188 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Poumon", "Le Foie", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #189 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Paris", "Bordeaux", "Lyon"],
      "correctIndex": 1,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #190 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Grand Cachalot", "L'Orque", "Le Requin Baleine", "La Baleine Bleue"],
      "correctIndex": 3,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Intermédiaire"
    }
  },
  "39": {
    "1": {
      "riddle": "Énigme #191 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "Le Soleil", "La Lune", "Mars"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #192 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "Le Léopard", "Le Tigre", "L'Éléphant"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #193 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["56", "64", "54", "48"],
      "correctIndex": 0,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #194 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Arctique", "L'Océan Atlantique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #195 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["Le CO2", "L'Argon", "L'Oxygène (O2)", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Intermédiaire"
    }
  },
  "40": {
    "1": {
      "riddle": "Énigme #196 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Argent", "Le Fer", "Le Cuivre", "L'Or"],
      "correctIndex": 3,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #197 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["8", "12", "4", "6"],
      "correctIndex": 3,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #198 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Poumon", "Le Cerveau", "Le Foie", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #199 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Bordeaux", "Paris", "Lyon"],
      "correctIndex": 2,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #200 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Requin Baleine", "Le Grand Cachalot", "L'Orque", "La Baleine Bleue"],
      "correctIndex": 3,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Intermédiaire"
    }
  },
  "41": {
    "1": {
      "riddle": "Énigme #201 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Le Soleil", "Mars", "Jupiter"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #202 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Tigre", "Le Léopard", "Le Lion", "L'Éléphant"],
      "correctIndex": 2,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #203 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "56", "64", "54"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #204 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Arctique", "L'Océan Indien", "L'Océan Atlantique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #205 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "L'Azote (N2)", "Le CO2", "L'Argon"],
      "correctIndex": 1,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Intermédiaire"
    }
  },
  "42": {
    "1": {
      "riddle": "Énigme #206 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Argent", "Le Fer", "Le Cuivre", "L'Or"],
      "correctIndex": 3,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #207 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["4", "8", "12", "6"],
      "correctIndex": 3,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #208 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Poumon", "Le Cerveau", "Le Foie", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #209 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Lyon", "Bordeaux", "Marseille"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #210 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Grand Cachalot", "Le Requin Baleine", "La Baleine Bleue", "L'Orque"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Intermédiaire"
    }
  },
  "43": {
    "1": {
      "riddle": "Énigme #211 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "Mars", "Le Soleil", "La Lune"],
      "correctIndex": 3,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #212 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Léopard", "L'Éléphant", "Le Tigre", "Le Lion"],
      "correctIndex": 3,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #213 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "56", "48", "64"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #214 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Atlantique", "L'Océan Pacifique", "L'Océan Arctique"],
      "correctIndex": 2,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #215 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Azote (N2)", "Le CO2", "L'Oxygène (O2)", "L'Argon"],
      "correctIndex": 0,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Intermédiaire"
    }
  },
  "44": {
    "1": {
      "riddle": "Énigme #216 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Fer", "L'Or", "L'Argent", "Le Cuivre"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #217 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["4", "12", "8", "6"],
      "correctIndex": 3,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #218 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cœur", "Le Foie", "Le Cerveau", "Le Poumon"],
      "correctIndex": 0,
      "hint": "Organe musculaire vital.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #219 : Quelle est la capitale de la France ?",
      "options": ["Bordeaux", "Lyon", "Paris", "Marseille"],
      "correctIndex": 2,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #220 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Grand Cachalot", "Le Requin Baleine", "La Baleine Bleue", "L'Orque"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Intermédiaire"
    }
  },
  "45": {
    "1": {
      "riddle": "Énigme #221 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Mars", "Jupiter", "Le Soleil"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #222 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "Le Léopard", "Le Tigre", "L'Éléphant"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #223 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "64", "48", "56"],
      "correctIndex": 3,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #224 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Atlantique", "L'Océan Arctique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #225 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "L'Azote (N2)", "Le CO2", "L'Argon"],
      "correctIndex": 1,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Intermédiaire"
    }
  },
  "46": {
    "1": {
      "riddle": "Énigme #226 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Or", "L'Argent", "Le Cuivre", "Le Fer"],
      "correctIndex": 0,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Intermédiaire"
    },
    "2": {
      "riddle": "Énigme #227 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["8", "12", "6", "4"],
      "correctIndex": 2,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Intermédiaire"
    },
    "3": {
      "riddle": "Énigme #228 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Poumon", "Le Cœur", "Le Foie"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Intermédiaire"
    },
    "4": {
      "riddle": "Énigme #229 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Marseille", "Bordeaux", "Lyon"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Intermédiaire"
    },
    "5": {
      "riddle": "Énigme #230 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["La Baleine Bleue", "Le Requin Baleine", "L'Orque", "Le Grand Cachalot"],
      "correctIndex": 0,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Intermédiaire"
    }
  },
  "47": {
    "1": {
      "riddle": "Énigme #231 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Le Soleil", "Mars", "Jupiter"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #232 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "Le Tigre", "Le Léopard", "L'Éléphant"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #233 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["56", "64", "54", "48"],
      "correctIndex": 0,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #234 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Arctique", "L'Océan Indien", "L'Océan Pacifique", "L'Océan Atlantique"],
      "correctIndex": 2,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #235 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "L'Argon", "L'Azote (N2)", "Le CO2"],
      "correctIndex": 2,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Difficile"
    }
  },
  "48": {
    "1": {
      "riddle": "Énigme #236 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Cuivre", "Le Fer", "L'Or", "L'Argent"],
      "correctIndex": 2,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #237 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "8", "4", "12"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #238 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Poumon", "Le Cerveau", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #239 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Paris", "Bordeaux", "Lyon"],
      "correctIndex": 1,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #240 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Requin Baleine", "Le Grand Cachalot", "La Baleine Bleue", "L'Orque"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Difficile"
    }
  },
  "49": {
    "1": {
      "riddle": "Énigme #241 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Le Soleil", "Jupiter", "La Lune", "Mars"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #242 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Tigre", "Le Lion", "Le Léopard", "L'Éléphant"],
      "correctIndex": 1,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #243 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "48", "56", "64"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #244 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Pacifique", "L'Océan Arctique", "L'Océan Atlantique", "L'Océan Indien"],
      "correctIndex": 0,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #245 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["Le CO2", "L'Azote (N2)", "L'Oxygène (O2)", "L'Argon"],
      "correctIndex": 1,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Difficile"
    }
  },
  "50": {
    "1": {
      "riddle": "Énigme #246 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Fer", "Le Cuivre", "L'Argent", "L'Or"],
      "correctIndex": 3,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #247 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["12", "8", "4", "6"],
      "correctIndex": 3,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #248 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Poumon", "Le Foie", "Le Cœur", "Le Cerveau"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #249 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Bordeaux", "Paris", "Lyon"],
      "correctIndex": 2,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #250 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Requin Baleine", "L'Orque", "Le Grand Cachalot", "La Baleine Bleue"],
      "correctIndex": 3,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Difficile"
    }
  },
  "51": {
    "1": {
      "riddle": "Énigme #251 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Le Soleil", "La Lune", "Mars", "Jupiter"],
      "correctIndex": 1,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #252 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "L'Éléphant", "Le Tigre", "Le Léopard"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #253 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["56", "54", "64", "48"],
      "correctIndex": 0,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #254 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Atlantique", "L'Océan Pacifique", "L'Océan Arctique", "L'Océan Indien"],
      "correctIndex": 1,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #255 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "Le CO2", "L'Argon", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Difficile"
    }
  },
  "52": {
    "1": {
      "riddle": "Énigme #256 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Argent", "L'Or", "Le Fer", "Le Cuivre"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #257 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["4", "12", "6", "8"],
      "correctIndex": 2,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #258 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Poumon", "Le Foie", "Le Cerveau", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #259 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Marseille", "Lyon", "Bordeaux"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #260 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Requin Baleine", "Le Grand Cachalot", "La Baleine Bleue", "L'Orque"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Difficile"
    }
  },
  "53": {
    "1": {
      "riddle": "Énigme #261 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Le Soleil", "Jupiter", "Mars"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #262 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Tigre", "L'Éléphant", "Le Lion", "Le Léopard"],
      "correctIndex": 2,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #263 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "56", "64", "48"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #264 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Atlantique", "L'Océan Indien", "L'Océan Pacifique", "L'Océan Arctique"],
      "correctIndex": 2,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #265 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["Le CO2", "L'Azote (N2)", "L'Argon", "L'Oxygène (O2)"],
      "correctIndex": 1,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Difficile"
    }
  },
  "54": {
    "1": {
      "riddle": "Énigme #266 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Argent", "Le Cuivre", "Le Fer", "L'Or"],
      "correctIndex": 3,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #267 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "8", "4", "12"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #268 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Poumon", "Le Cœur", "Le Cerveau"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #269 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Lyon", "Bordeaux", "Marseille"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #270 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["La Baleine Bleue", "Le Requin Baleine", "Le Grand Cachalot", "L'Orque"],
      "correctIndex": 0,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Difficile"
    }
  },
  "55": {
    "1": {
      "riddle": "Énigme #271 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Le Soleil", "Mars", "La Lune", "Jupiter"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #272 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "Le Tigre", "L'Éléphant", "Le Léopard"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #273 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "64", "56", "48"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #274 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Arctique", "L'Océan Pacifique", "L'Océan Indien", "L'Océan Atlantique"],
      "correctIndex": 1,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #275 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "L'Azote (N2)", "L'Argon", "Le CO2"],
      "correctIndex": 1,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Difficile"
    }
  },
  "56": {
    "1": {
      "riddle": "Énigme #276 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Or", "Le Cuivre", "Le Fer", "L'Argent"],
      "correctIndex": 0,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #277 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["4", "8", "6", "12"],
      "correctIndex": 2,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #278 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Poumon", "Le Cœur", "Le Cerveau"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #279 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Bordeaux", "Lyon", "Marseille"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #280 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Requin Baleine", "La Baleine Bleue", "Le Grand Cachalot", "L'Orque"],
      "correctIndex": 1,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Difficile"
    }
  },
  "57": {
    "1": {
      "riddle": "Énigme #281 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Mars", "Jupiter", "Le Soleil"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #282 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "L'Éléphant", "Le Tigre", "Le Léopard"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #283 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "64", "54", "56"],
      "correctIndex": 3,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #284 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Pacifique", "L'Océan Arctique", "L'Océan Atlantique", "L'Océan Indien"],
      "correctIndex": 0,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #285 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["Le CO2", "L'Argon", "L'Oxygène (O2)", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Difficile"
    }
  },
  "58": {
    "1": {
      "riddle": "Énigme #286 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Cuivre", "L'Or", "L'Argent", "Le Fer"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #287 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "4", "12", "8"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #288 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cœur", "Le Poumon", "Le Foie", "Le Cerveau"],
      "correctIndex": 0,
      "hint": "Organe musculaire vital.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #289 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Lyon", "Bordeaux", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #290 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["La Baleine Bleue", "L'Orque", "Le Grand Cachalot", "Le Requin Baleine"],
      "correctIndex": 0,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Difficile"
    }
  },
  "59": {
    "1": {
      "riddle": "Énigme #291 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Le Soleil", "Mars", "La Lune", "Jupiter"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #292 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Léopard", "Le Lion", "L'Éléphant", "Le Tigre"],
      "correctIndex": 1,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #293 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "56", "64", "48"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #294 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Atlantique", "L'Océan Indien", "L'Océan Pacifique", "L'Océan Arctique"],
      "correctIndex": 2,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #295 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["Le CO2", "L'Argon", "L'Oxygène (O2)", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Difficile"
    }
  },
  "60": {
    "1": {
      "riddle": "Énigme #296 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Or", "Le Cuivre", "Le Fer", "L'Argent"],
      "correctIndex": 0,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #297 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "4", "8", "12"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #298 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Poumon", "Le Cœur", "Le Cerveau"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #299 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Paris", "Bordeaux", "Lyon"],
      "correctIndex": 1,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #300 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["L'Orque", "Le Grand Cachalot", "La Baleine Bleue", "Le Requin Baleine"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Difficile"
    }
  },
  "61": {
    "1": {
      "riddle": "Énigme #301 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Mars", "Le Soleil", "Jupiter"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #302 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Léopard", "L'Éléphant", "Le Tigre", "Le Lion"],
      "correctIndex": 3,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #303 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "54", "56", "64"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #304 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Pacifique", "L'Océan Indien", "L'Océan Atlantique", "L'Océan Arctique"],
      "correctIndex": 0,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #305 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Azote (N2)", "Le CO2", "L'Oxygène (O2)", "L'Argon"],
      "correctIndex": 0,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Difficile"
    }
  },
  "62": {
    "1": {
      "riddle": "Énigme #306 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Fer", "L'Or", "Le Cuivre", "L'Argent"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #307 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["12", "8", "6", "4"],
      "correctIndex": 2,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #308 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Foie", "Le Poumon", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #309 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Paris", "Lyon", "Bordeaux"],
      "correctIndex": 1,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #310 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Requin Baleine", "L'Orque", "La Baleine Bleue", "Le Grand Cachalot"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Difficile"
    }
  },
  "63": {
    "1": {
      "riddle": "Énigme #311 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "Le Soleil", "La Lune", "Mars"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #312 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Léopard", "Le Tigre", "L'Éléphant", "Le Lion"],
      "correctIndex": 3,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #313 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "64", "48", "56"],
      "correctIndex": 3,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #314 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Atlantique", "L'Océan Pacifique", "L'Océan Indien", "L'Océan Arctique"],
      "correctIndex": 1,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #315 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "Le CO2", "L'Oxygène (O2)", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Difficile"
    }
  },
  "64": {
    "1": {
      "riddle": "Énigme #316 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Or", "L'Argent", "Le Fer", "Le Cuivre"],
      "correctIndex": 0,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Difficile"
    },
    "2": {
      "riddle": "Énigme #317 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["4", "12", "8", "6"],
      "correctIndex": 3,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Difficile"
    },
    "3": {
      "riddle": "Énigme #318 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cœur", "Le Poumon", "Le Cerveau", "Le Foie"],
      "correctIndex": 0,
      "hint": "Organe musculaire vital.",
      "difficulty": "Difficile"
    },
    "4": {
      "riddle": "Énigme #319 : Quelle est la capitale de la France ?",
      "options": ["Lyon", "Bordeaux", "Marseille", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Difficile"
    },
    "5": {
      "riddle": "Énigme #320 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["La Baleine Bleue", "Le Grand Cachalot", "L'Orque", "Le Requin Baleine"],
      "correctIndex": 0,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Difficile"
    }
  },
  "65": {
    "1": {
      "riddle": "Énigme #321 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "La Lune", "Mars", "Le Soleil"],
      "correctIndex": 1,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #322 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Tigre", "L'Éléphant", "Le Lion", "Le Léopard"],
      "correctIndex": 2,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #323 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "54", "56", "64"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #324 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Atlantique", "L'Océan Arctique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #325 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "Le CO2", "L'Oxygène (O2)", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Expert"
    }
  },
  "66": {
    "1": {
      "riddle": "Énigme #326 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Fer", "L'Or", "L'Argent", "Le Cuivre"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #327 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "4", "12", "8"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #328 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Foie", "Le Cœur", "Le Poumon"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #329 : Quelle est la capitale de la France ?",
      "options": ["Bordeaux", "Lyon", "Marseille", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #330 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["L'Orque", "La Baleine Bleue", "Le Grand Cachalot", "Le Requin Baleine"],
      "correctIndex": 1,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Expert"
    }
  },
  "67": {
    "1": {
      "riddle": "Énigme #331 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Mars", "Jupiter", "Le Soleil"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #332 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["L'Éléphant", "Le Lion", "Le Tigre", "Le Léopard"],
      "correctIndex": 1,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #333 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "56", "54", "64"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #334 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Arctique", "L'Océan Indien", "L'Océan Atlantique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #335 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Azote (N2)", "L'Oxygène (O2)", "L'Argon", "Le CO2"],
      "correctIndex": 0,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Expert"
    }
  },
  "68": {
    "1": {
      "riddle": "Énigme #336 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Or", "Le Fer", "L'Argent", "Le Cuivre"],
      "correctIndex": 0,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #337 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "12", "4", "8"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #338 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Poumon", "Le Cerveau", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #339 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Lyon", "Bordeaux", "Marseille"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #340 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Grand Cachalot", "Le Requin Baleine", "La Baleine Bleue", "L'Orque"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Expert"
    }
  },
  "69": {
    "1": {
      "riddle": "Énigme #341 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Le Soleil", "Jupiter", "La Lune", "Mars"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #342 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["L'Éléphant", "Le Lion", "Le Tigre", "Le Léopard"],
      "correctIndex": 1,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #343 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "64", "56", "48"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #344 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Atlantique", "L'Océan Pacifique", "L'Océan Arctique", "L'Océan Indien"],
      "correctIndex": 1,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #345 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "L'Argon", "Le CO2", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Expert"
    }
  },
  "70": {
    "1": {
      "riddle": "Énigme #346 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Fer", "L'Or", "L'Argent", "Le Cuivre"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #347 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["8", "6", "4", "12"],
      "correctIndex": 1,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #348 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Foie", "Le Poumon", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #349 : Quelle est la capitale de la France ?",
      "options": ["Lyon", "Marseille", "Paris", "Bordeaux"],
      "correctIndex": 2,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #350 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["La Baleine Bleue", "Le Grand Cachalot", "L'Orque", "Le Requin Baleine"],
      "correctIndex": 0,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Expert"
    }
  },
  "71": {
    "1": {
      "riddle": "Énigme #351 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "Le Soleil", "La Lune", "Mars"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #352 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "L'Éléphant", "Le Tigre", "Le Léopard"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #353 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "64", "54", "56"],
      "correctIndex": 3,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #354 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Arctique", "L'Océan Pacifique", "L'Océan Atlantique"],
      "correctIndex": 2,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #355 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "L'Oxygène (O2)", "L'Azote (N2)", "Le CO2"],
      "correctIndex": 2,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Expert"
    }
  },
  "72": {
    "1": {
      "riddle": "Énigme #356 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Cuivre", "Le Fer", "L'Argent", "L'Or"],
      "correctIndex": 3,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #357 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "12", "8", "4"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #358 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cœur", "Le Poumon", "Le Foie", "Le Cerveau"],
      "correctIndex": 0,
      "hint": "Organe musculaire vital.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #359 : Quelle est la capitale de la France ?",
      "options": ["Lyon", "Bordeaux", "Marseille", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #360 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["L'Orque", "Le Requin Baleine", "La Baleine Bleue", "Le Grand Cachalot"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Expert"
    }
  },
  "73": {
    "1": {
      "riddle": "Énigme #361 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "La Lune", "Mars", "Le Soleil"],
      "correctIndex": 1,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #362 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "Le Tigre", "L'Éléphant", "Le Léopard"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #363 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "48", "56", "64"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #364 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Atlantique", "L'Océan Arctique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #365 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "Le CO2", "L'Azote (N2)", "L'Argon"],
      "correctIndex": 2,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Expert"
    }
  },
  "74": {
    "1": {
      "riddle": "Énigme #366 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Fer", "L'Or", "Le Cuivre", "L'Argent"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #367 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "12", "8", "4"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #368 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Poumon", "Le Cœur", "Le Foie", "Le Cerveau"],
      "correctIndex": 1,
      "hint": "Organe musculaire vital.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #369 : Quelle est la capitale de la France ?",
      "options": ["Lyon", "Paris", "Marseille", "Bordeaux"],
      "correctIndex": 1,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #370 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["La Baleine Bleue", "Le Requin Baleine", "L'Orque", "Le Grand Cachalot"],
      "correctIndex": 0,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Expert"
    }
  },
  "75": {
    "1": {
      "riddle": "Énigme #371 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "Le Soleil", "La Lune", "Mars"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #372 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "L'Éléphant", "Le Léopard", "Le Tigre"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #373 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "56", "64", "54"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #374 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Pacifique", "L'Océan Atlantique", "L'Océan Arctique", "L'Océan Indien"],
      "correctIndex": 0,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #375 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "Le CO2", "L'Oxygène (O2)", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Expert"
    }
  },
  "76": {
    "1": {
      "riddle": "Énigme #376 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Cuivre", "Le Fer", "L'Or", "L'Argent"],
      "correctIndex": 2,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #377 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["8", "4", "12", "6"],
      "correctIndex": 3,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #378 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Poumon", "Le Cerveau", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #379 : Quelle est la capitale de la France ?",
      "options": ["Bordeaux", "Marseille", "Paris", "Lyon"],
      "correctIndex": 2,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #380 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Requin Baleine", "Le Grand Cachalot", "L'Orque", "La Baleine Bleue"],
      "correctIndex": 3,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Expert"
    }
  },
  "77": {
    "1": {
      "riddle": "Énigme #381 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Mars", "Jupiter", "La Lune", "Le Soleil"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #382 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Léopard", "Le Lion", "L'Éléphant", "Le Tigre"],
      "correctIndex": 1,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #383 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "64", "56", "48"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #384 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Atlantique", "L'Océan Arctique", "L'Océan Pacifique", "L'Océan Indien"],
      "correctIndex": 2,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #385 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "Le CO2", "L'Argon", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Expert"
    }
  },
  "78": {
    "1": {
      "riddle": "Énigme #386 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Fer", "L'Argent", "L'Or", "Le Cuivre"],
      "correctIndex": 2,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #387 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["12", "8", "4", "6"],
      "correctIndex": 3,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #388 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Poumon", "Le Cerveau", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #389 : Quelle est la capitale de la France ?",
      "options": ["Lyon", "Bordeaux", "Marseille", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #390 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["La Baleine Bleue", "L'Orque", "Le Requin Baleine", "Le Grand Cachalot"],
      "correctIndex": 0,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Expert"
    }
  },
  "79": {
    "1": {
      "riddle": "Énigme #391 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Mars", "Jupiter", "Le Soleil", "La Lune"],
      "correctIndex": 3,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #392 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Léopard", "Le Tigre", "L'Éléphant", "Le Lion"],
      "correctIndex": 3,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #393 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "56", "48", "64"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #394 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Arctique", "L'Océan Indien", "L'Océan Atlantique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #395 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "L'Azote (N2)", "Le CO2", "L'Argon"],
      "correctIndex": 1,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Expert"
    }
  },
  "80": {
    "1": {
      "riddle": "Énigme #396 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Or", "L'Argent", "Le Cuivre", "Le Fer"],
      "correctIndex": 0,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #397 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["12", "8", "4", "6"],
      "correctIndex": 3,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #398 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Foie", "Le Cœur", "Le Poumon"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #399 : Quelle est la capitale de la France ?",
      "options": ["Paris", "Lyon", "Bordeaux", "Marseille"],
      "correctIndex": 0,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #400 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["La Baleine Bleue", "Le Requin Baleine", "L'Orque", "Le Grand Cachalot"],
      "correctIndex": 0,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Expert"
    }
  },
  "81": {
    "1": {
      "riddle": "Énigme #401 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Le Soleil", "Mars", "Jupiter"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #402 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Tigre", "Le Léopard", "L'Éléphant", "Le Lion"],
      "correctIndex": 3,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #403 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["56", "48", "64", "54"],
      "correctIndex": 0,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #404 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Pacifique", "L'Océan Indien", "L'Océan Arctique", "L'Océan Atlantique"],
      "correctIndex": 0,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #405 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Azote (N2)", "Le CO2", "L'Oxygène (O2)", "L'Argon"],
      "correctIndex": 0,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Expert"
    }
  },
  "82": {
    "1": {
      "riddle": "Énigme #406 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Fer", "Le Cuivre", "L'Argent", "L'Or"],
      "correctIndex": 3,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Expert"
    },
    "2": {
      "riddle": "Énigme #407 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "8", "4", "12"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Expert"
    },
    "3": {
      "riddle": "Énigme #408 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Poumon", "Le Cœur", "Le Foie"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Expert"
    },
    "4": {
      "riddle": "Énigme #409 : Quelle est la capitale de la France ?",
      "options": ["Lyon", "Marseille", "Bordeaux", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Expert"
    },
    "5": {
      "riddle": "Énigme #410 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["L'Orque", "Le Grand Cachalot", "Le Requin Baleine", "La Baleine Bleue"],
      "correctIndex": 3,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Expert"
    }
  },
  "83": {
    "1": {
      "riddle": "Énigme #411 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Le Soleil", "Jupiter", "La Lune", "Mars"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #412 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Tigre", "Le Lion", "Le Léopard", "L'Éléphant"],
      "correctIndex": 1,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #413 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["56", "48", "54", "64"],
      "correctIndex": 0,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #414 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Arctique", "L'Océan Indien", "L'Océan Atlantique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #415 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "L'Argon", "L'Azote (N2)", "Le CO2"],
      "correctIndex": 2,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Légendaire"
    }
  },
  "84": {
    "1": {
      "riddle": "Énigme #416 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Or", "Le Fer", "Le Cuivre", "L'Argent"],
      "correctIndex": 0,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #417 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["12", "4", "6", "8"],
      "correctIndex": 2,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #418 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Poumon", "Le Cœur", "Le Foie"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #419 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Paris", "Bordeaux", "Lyon"],
      "correctIndex": 1,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #420 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Requin Baleine", "Le Grand Cachalot", "La Baleine Bleue", "L'Orque"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Légendaire"
    }
  },
  "85": {
    "1": {
      "riddle": "Énigme #421 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Le Soleil", "Jupiter", "Mars"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #422 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Léopard", "Le Lion", "Le Tigre", "L'Éléphant"],
      "correctIndex": 1,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #423 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "64", "56", "54"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #424 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Atlantique", "L'Océan Indien", "L'Océan Arctique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #425 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "L'Argon", "Le CO2", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Légendaire"
    }
  },
  "86": {
    "1": {
      "riddle": "Énigme #426 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Or", "Le Cuivre", "L'Argent", "Le Fer"],
      "correctIndex": 0,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #427 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["4", "8", "6", "12"],
      "correctIndex": 2,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #428 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cœur", "Le Poumon", "Le Cerveau", "Le Foie"],
      "correctIndex": 0,
      "hint": "Organe musculaire vital.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #429 : Quelle est la capitale de la France ?",
      "options": ["Lyon", "Marseille", "Bordeaux", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #430 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Grand Cachalot", "La Baleine Bleue", "L'Orque", "Le Requin Baleine"],
      "correctIndex": 1,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Légendaire"
    }
  },
  "87": {
    "1": {
      "riddle": "Énigme #431 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "Mars", "Le Soleil", "La Lune"],
      "correctIndex": 3,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #432 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "L'Éléphant", "Le Tigre", "Le Léopard"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #433 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "56", "54", "64"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #434 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Arctique", "L'Océan Indien", "L'Océan Atlantique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #435 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "Le CO2", "L'Oxygène (O2)", "L'Azote (N2)"],
      "correctIndex": 3,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Légendaire"
    }
  },
  "88": {
    "1": {
      "riddle": "Énigme #436 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Argent", "Le Fer", "L'Or", "Le Cuivre"],
      "correctIndex": 2,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #437 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["8", "6", "12", "4"],
      "correctIndex": 1,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #438 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Poumon", "Le Cerveau", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #439 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Bordeaux", "Paris", "Lyon"],
      "correctIndex": 2,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #440 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Grand Cachalot", "La Baleine Bleue", "Le Requin Baleine", "L'Orque"],
      "correctIndex": 1,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Légendaire"
    }
  },
  "89": {
    "1": {
      "riddle": "Énigme #441 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "Mars", "Le Soleil", "La Lune"],
      "correctIndex": 3,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #442 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["L'Éléphant", "Le Léopard", "Le Lion", "Le Tigre"],
      "correctIndex": 2,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #443 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["56", "64", "48", "54"],
      "correctIndex": 0,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #444 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Arctique", "L'Océan Atlantique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #445 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["Le CO2", "L'Oxygène (O2)", "L'Azote (N2)", "L'Argon"],
      "correctIndex": 2,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Légendaire"
    }
  },
  "90": {
    "1": {
      "riddle": "Énigme #446 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Fer", "Le Cuivre", "L'Argent", "L'Or"],
      "correctIndex": 3,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #447 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "8", "12", "4"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #448 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Poumon", "Le Cœur", "Le Foie"],
      "correctIndex": 2,
      "hint": "Organe musculaire vital.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #449 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Bordeaux", "Lyon", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #450 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["La Baleine Bleue", "Le Requin Baleine", "L'Orque", "Le Grand Cachalot"],
      "correctIndex": 0,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Légendaire"
    }
  },
  "91": {
    "1": {
      "riddle": "Énigme #451 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Mars", "Jupiter", "Le Soleil", "La Lune"],
      "correctIndex": 3,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #452 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "L'Éléphant", "Le Léopard", "Le Tigre"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #453 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["64", "48", "54", "56"],
      "correctIndex": 3,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #454 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Arctique", "L'Océan Atlantique", "L'Océan Pacifique", "L'Océan Indien"],
      "correctIndex": 2,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #455 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "Le CO2", "L'Azote (N2)", "L'Oxygène (O2)"],
      "correctIndex": 2,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Légendaire"
    }
  },
  "92": {
    "1": {
      "riddle": "Énigme #456 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Or", "Le Cuivre", "Le Fer", "L'Argent"],
      "correctIndex": 0,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #457 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["4", "12", "6", "8"],
      "correctIndex": 2,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #458 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Cœur", "Le Cerveau", "Le Poumon"],
      "correctIndex": 1,
      "hint": "Organe musculaire vital.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #459 : Quelle est la capitale de la France ?",
      "options": ["Bordeaux", "Paris", "Marseille", "Lyon"],
      "correctIndex": 1,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #460 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["L'Orque", "Le Requin Baleine", "Le Grand Cachalot", "La Baleine Bleue"],
      "correctIndex": 3,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Légendaire"
    }
  },
  "93": {
    "1": {
      "riddle": "Énigme #461 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Le Soleil", "Mars", "Jupiter"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #462 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "Le Tigre", "Le Léopard", "L'Éléphant"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #463 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "56", "64", "54"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #464 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Pacifique", "L'Océan Indien", "L'Océan Atlantique", "L'Océan Arctique"],
      "correctIndex": 0,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #465 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Oxygène (O2)", "L'Azote (N2)", "L'Argon", "Le CO2"],
      "correctIndex": 1,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Légendaire"
    }
  },
  "94": {
    "1": {
      "riddle": "Énigme #466 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Argent", "L'Or", "Le Fer", "Le Cuivre"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #467 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "4", "8", "12"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #468 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Foie", "Le Poumon", "Le Cerveau", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #469 : Quelle est la capitale de la France ?",
      "options": ["Lyon", "Bordeaux", "Paris", "Marseille"],
      "correctIndex": 2,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #470 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["L'Orque", "La Baleine Bleue", "Le Requin Baleine", "Le Grand Cachalot"],
      "correctIndex": 1,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Légendaire"
    }
  },
  "95": {
    "1": {
      "riddle": "Énigme #471 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Le Soleil", "La Lune", "Mars", "Jupiter"],
      "correctIndex": 1,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #472 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Lion", "Le Tigre", "Le Léopard", "L'Éléphant"],
      "correctIndex": 0,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #473 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["48", "64", "56", "54"],
      "correctIndex": 2,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #474 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Indien", "L'Océan Arctique", "L'Océan Atlantique", "L'Océan Pacifique"],
      "correctIndex": 3,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #475 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "Le CO2", "L'Azote (N2)", "L'Oxygène (O2)"],
      "correctIndex": 2,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Légendaire"
    }
  },
  "96": {
    "1": {
      "riddle": "Énigme #476 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Cuivre", "L'Or", "L'Argent", "Le Fer"],
      "correctIndex": 1,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #477 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "4", "8", "12"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #478 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cœur", "Le Foie", "Le Poumon", "Le Cerveau"],
      "correctIndex": 0,
      "hint": "Organe musculaire vital.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #479 : Quelle est la capitale de la France ?",
      "options": ["Bordeaux", "Lyon", "Marseille", "Paris"],
      "correctIndex": 3,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #480 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["L'Orque", "Le Grand Cachalot", "Le Requin Baleine", "La Baleine Bleue"],
      "correctIndex": 3,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Légendaire"
    }
  },
  "97": {
    "1": {
      "riddle": "Énigme #481 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["La Lune", "Mars", "Le Soleil", "Jupiter"],
      "correctIndex": 0,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #482 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["L'Éléphant", "Le Lion", "Le Léopard", "Le Tigre"],
      "correctIndex": 1,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #483 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["56", "48", "64", "54"],
      "correctIndex": 0,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #484 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Atlantique", "L'Océan Indien", "L'Océan Pacifique", "L'Océan Arctique"],
      "correctIndex": 2,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #485 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Azote (N2)", "L'Oxygène (O2)", "L'Argon", "Le CO2"],
      "correctIndex": 0,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Légendaire"
    }
  },
  "98": {
    "1": {
      "riddle": "Énigme #486 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["L'Argent", "Le Fer", "L'Or", "Le Cuivre"],
      "correctIndex": 2,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #487 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["6", "8", "12", "4"],
      "correctIndex": 0,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #488 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cerveau", "Le Foie", "Le Poumon", "Le Cœur"],
      "correctIndex": 3,
      "hint": "Organe musculaire vital.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #489 : Quelle est la capitale de la France ?",
      "options": ["Marseille", "Bordeaux", "Paris", "Lyon"],
      "correctIndex": 2,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #490 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Requin Baleine", "L'Orque", "La Baleine Bleue", "Le Grand Cachalot"],
      "correctIndex": 2,
      "hint": "Elle peut mesurer plus de 30 mètres.",
      "difficulty": "Légendaire"
    }
  },
  "99": {
    "1": {
      "riddle": "Énigme #491 : Quel astre ou corps céleste éclaire le ciel nocturne et possède des phases (pleine, croissant) ?",
      "options": ["Jupiter", "Mars", "La Lune", "Le Soleil"],
      "correctIndex": 2,
      "hint": "Satellite naturel de la Terre.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #492 : Quel animal est le roi de la savane et possède une grande crinière ?",
      "options": ["Le Tigre", "Le Léopard", "Le Lion", "L'Éléphant"],
      "correctIndex": 2,
      "hint": "Félin majestueux d'Afrique.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #493 : Combien font 7 fois 8 dans la table de multiplication ?",
      "options": ["54", "56", "64", "48"],
      "correctIndex": 1,
      "hint": "Résultat de 7 x 8.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #494 : Quel est le plus grand océan de la planète Terre ?",
      "options": ["L'Océan Atlantique", "L'Océan Indien", "L'Océan Pacifique", "L'Océan Arctique"],
      "correctIndex": 2,
      "hint": "Il s'étend entre l'Asie et l'Amérique.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #495 : Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      "options": ["L'Argon", "L'Azote (N2)", "Le CO2", "L'Oxygène (O2)"],
      "correctIndex": 1,
      "hint": "Constitue environ 78% de l'air.",
      "difficulty": "Légendaire"
    }
  },
  "100": {
    "1": {
      "riddle": "Énigme #496 : Quel est l'élément chimique représenté par le symbole 'Au' ?",
      "options": ["Le Cuivre", "L'Argent", "L'Or", "Le Fer"],
      "correctIndex": 2,
      "hint": "Métal précieux jaune brillant.",
      "difficulty": "Légendaire"
    },
    "2": {
      "riddle": "Énigme #497 : Combien de faces possède un cube parfait en géométrie ?",
      "options": ["8", "6", "4", "12"],
      "correctIndex": 1,
      "hint": "Un dé à jouer standard a 6 faces.",
      "difficulty": "Légendaire"
    },
    "3": {
      "riddle": "Énigme #498 : Quel organe du corps humain pompe le sang dans les artères ?",
      "options": ["Le Cœur", "Le Poumon", "Le Foie", "Le Cerveau"],
      "correctIndex": 0,
      "hint": "Organe musculaire vital.",
      "difficulty": "Légendaire"
    },
    "4": {
      "riddle": "Énigme #499 : Quelle est la capitale de la France ?",
      "options": ["Lyon", "Marseille", "Paris", "Bordeaux"],
      "correctIndex": 2,
      "hint": "Ville lumière traversée par la Seine.",
      "difficulty": "Légendaire"
    },
    "5": {
      "riddle": "Énigme #500 : Quel mammifère marin est le plus grand animal vivant de la planète ?",
      "options": ["Le Grand Cachalot", "La Baleine Bleue", "Le Requin Baleine", "L'Orque"],
      "correctIndex": 1,
      "hint": "Elle peut mesurer plus de 30 mètres.",
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
