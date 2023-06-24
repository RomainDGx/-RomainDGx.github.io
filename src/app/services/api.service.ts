import { Observable } from "rxjs";
import { DateTime } from 'luxon';
import { IExpertise } from "../models/expertise.model";
import { AppData } from '../models/model';

export abstract class ApiService {
    public abstract getData(): Observable<AppData>;
}

export class LocalApiService extends ApiService {

    private readonly _data = new Observable<AppData>(subscribe => {

        const data: AppData = {
            name: 'Romain Delorme-Glorieux',
            repository: 'https://github.com/RomainDGx/RomainDGx.github.io',
            creationYear: 2023,
            home: {
                job: 'Développeur full stack .NET',
                punchline: "En tant qu'expert en architecture logicielle dans le développement full stack, je suis en mesure de créer des solutions adaptées aux différents besoins."
            },
            skills: [
                {
                    type: 'hardSkill',
                    name: 'Expertise en C#/.NET',
                    synopsis: "Lors de ma formation dans le domaine du <b>développement logiciel</b>, j'ai découvert l'environnement <b>.NET</b> et le <b>C#</b>. Je me suis pris d'intérêt pour cette technologie et ai continué d'approfondir ma maîtrise de cette dernière jusqu'à en faire <b>mon outil de travail principal</b>.",
                    detail: `
<h3><b>De l'école à l'entreprise</b></h3>
<p>Après avoir découvert le <a href="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" target="_blank">C#</a> durant mes études à <a href="https://www.intechinfo.fr/" target="_blank">INTECH</a>, je suis allé faire mon alternance dans l'entreprise <a href="https://www.signature.one/" target="_blank">Signature One</a> qui utilise cette technologie comme base pour développer ses logiciels. J'ai donc pu continuer d'<b>approfondir ma maîtrise</b> du C# dans un <b>contexte professionnel</b>, avec notamment l'apprentissage de l'utilisation de ce dernier avec des méthodes davantage <b>professionnelles et industrielles</b>.</p>
<h3><b>Utilisation en entreprise</b></h3>
<p>J'ai eu l'occasion tout au long de ma formation en entreprise de travailler sur des projets ambitieux et demandant de trouver <b>des solutions efficaces et performantes</b>, suivant bien souvent une architecture de <b>client/serveur</b> ayant pour backend un ou plusieurs serveurs <b>ASP.NET Core</b>. C'est notamment le cas pour le projet Mosaïc où j'ai pu travailler et contribuer à la <b>conception</b> du logiciel et son implémentation en C#. Ce fut pour moi une expérience très enrichissante. À l'heure actuelle, la solution fonctionne en production et me permet de voir fonctionner dans un contexte concert le travail de conception et de développement que j'y ai apporté.</p>
<h3><b>Retour sur mon expertise</b></h3>
<p>À cette heure, je peux constater que j'ai acquis une certaine <b>maîtrise de cette technologie</b>, me permettant de trouver des <b>solutions techniques</b> aux différentes problématiques qui me sont posées, mais aussi de pouvoir <b>analyser</b> un code déjà existant de de <b>trouver les sources</b> de bug et y apporter une solution efficace.</p>
<p>Je suis pleinement conscient de ne pas parfaitement maîtriser cette technologie, mais c'est en me confrontant à de nouvelles problématiques et en devant concevoir des systèmes toujours plus performants, que je <b>continue à apprendre et à m'améliorer</b>.</p>`
                },
                {
                    type: 'hardSkill',
                    name: 'Développment front-end',
                    synopsis: "Le front-end et notamment le Web est un domaine très étendu, avec de nombreuses technologies nécessitant énormément de connaissances. Ça peut faire peur dit comme ça, mais c'est au contraire une bonne raison pour <b>un passionné</b> comme moi de développement de s'y pencher. C'est en suivant cette voie que je me retrouve aujourd'hui à travailler sur de <b>nombreux projets</b> nécessitant une interface Web, et ça me plaît !",
                    detail: `
<p>Je me suis toujours demandé comment fonctionnent les sites Web. Que signifiait ce texte étrange que je voyais en faisant Ctrl+U sur mon navigateur ?</p>
<h3><b>Introduction au Web</b></h3>
<p>C'est en entrant à <a href="https://www.intechinfo.fr/" target="_blank">INTECH</a> que j'ai appris comment fonctionnent les pages Web, tout d'abord avec l'HTML, du CSS et le JavaScript. J'aimais <b>me lancer des défis</b> en créant de belles pages, bien structurées et <b>dynamiques</b> grâce à mes comptétences nouvellement acquises.</p>
<h3><b>Expériences en entreprise</b></h3>
<p>Au cours de ma formation, j'ai découvert les <b>Single-Page Application</b> (SPA) et toute la puissance qu'elles apportent aux sites Web. C'est à ce moment-là que ma vision du fonctionnement du front-end a complètement changé. Depuis, j'ai <b>intégré cette dimension mon quotidien</b>, aussi bien durant mes études que dans mon travail en alternance. J'ai notamment travaillé avec <b>Angular</b> et <b>Vue.js</b> sur de multiples projets au sein de mon entreprise, tels que le projet Mosaïc, ainsi que sur de nombreux autres projets nécessitant de nouvelles fonctionnalités.</p>
<p>Ces projets étant parfois anciens, cela demande un véritable travail d'<b>adaptation</b> pour travailler avec d'anciennes versions et philosophies de frameworks front-end. Malgré les difficultés que cela peut présenter, je saisis toujours l'occasion d'apprendre de nouvelles choses et de renforcer ma maîtrise de ces outils.</p>
<p>Un bon exemple de mon niveau est ce portfolio que j'ai réalisé en Angular, en utilisant toutes <b>les bonnes pratiques</b> que j'ai apprises en entreprise.</p>`
                },
                {
                    type: 'hardSkill',
                    name: 'Architecture logicielle',
                    synopsis: `<p>L'un des domaines que je trouve les plus <b>intéressants</b> du développement informatique est <b>l'architecture logicielle</b>. En effet, cela requiert une bonne <b>analyse</b> du problème afin d'y apporter une <b>solution adaptée</b>. Cela demande aussi d'avoir une bonne expérience et de maîtriser les différents <b>patterns de conception</b>.</p>
                    <p>Étant très soucieux de la qualité de mon code et recherchant constamment <b>comment m'améliorer</b>, c'est pour moi un challenge permanent.</p>`,
                    detail: `
<h3><b>Du chaos à l'organisation</b></h3>
<p>Lors de mes débuts en développement, je faisais mes applications de manière très verticales et peu organisée. Plus ces projets devenaient complexes, plus le fonctionnement était compliqué à maintenir et faire évoluer. C'est à partir de ces premières expériences que j'ai commencé à m'intéresser à la meilleure manière d'<b>organiser mon code</b> et son fonctionnement pour le rendre plus <b>agréable à développer</b>, à faire <b>évoluer</b> et à relire après-coup.</p>
<h3><b>Apprentissage de méthodes professionnelles</b></h3>
<p>J'ai eu l'occasion pendant ma scolarité à <a href="https://www.intechinfo.fr/" target="_blank">INTECH</a>, de bénéficier des conseils et de l'expérience de mes enseignants et des différents intervenants, le tout me permettant d'apprendre les différentes <b>méthodes utilisées en entreprise</b>. Mais ma faim ne s'arrête pas là ! En effet, recherchant constamment comment je pourrais <b>améliorer la qualité de mon code</b>, je n'héiste pas à <b>me documenter</b> par le biais de blogs et sites tels que <a href="https://refactoring.guru/" target="_blank">Refactoring Guru</a>, de piocher les idées intéressantes du <a href="https://www.oreilly.com/library/view/clean-code-a/9780136083238/" target="_blank">Clean Code</a> ou encore de créer un code <a href="https://en.wikipedia.org/wiki/SOLID" target="_blank">SOLID</a>.</p>
<h3><b>Appropriation et restitution au quotidien</b></h3>
<p>Cette expérience acquise me permet, notamment dans mon travail en entreprise de <b>créer du code maintenable</b>, mais aussi de démêler le sac de nœuds d'une base de code ayant vu défiler plusieurs générations de développeurs.</p>
<p>Dès que je le peux, notamment sur les nouveaux projets, je tiens à mettre en place tout de suite une approche propre, puissante et adaptée aux besoins.</p>`
                },
                {
                    type: 'softSkill',
                    name: 'Communication',
                    synopsis: `<p>"La communication est <b>la clé</b> qui ouvre toutes les portes du succès. C'est par le <b>partage efficace des idées</b>, des émotions et des connaissances que nous pouvons créer des liens, <b>résoudre des problèmes</b> et construire un avenir meilleur."</p><p>Cette citation montre l'<b>importance</b> qu'à la communication à mes yeux.</p>`,
                    detail: `
<p>Ce n'est pas parce que je passe mes journées à communiquer avec des machines, que je dois arrêter de communiquer avec mes semblables. Cela peut faire sourire, mais il y a encore trop de personnes qui voient le développeur au travers du stéréotype de l'informaticien isolé dans son coin. Or, ce n'est pas vrai, bien au contraire !</p>
<h3><b>Parler c'est avancer !</b></h3>
<p>C'est en réalisant mes premiers projets informatiques en équipe durant ma scolarité à <a href="https://www.intechinfo.fr/" target="_blank">INTECH</a> que je me suis rendu compte de l'<b>importance</b> qu'à la communication dans le <b>bon déroulement d'un projet</b>. En effet, il est important pour l'<b>organisation</b>, la transmission de connaissances et autres brainstormings, de bien <b>communiquer avec son équipe</b>.</p>
<p>Ayant appris de mes expériences passées, je tiens actuellement en entreprise, à garder une <b>communication fluide et constante</b> avec les responsables de projet et les clients afin de ne pas tomber dans les travers d'une mauvaise interprétation d'une demande. C'est ce qui me permet aujourd'hui d'<b>avancer à bon rythme</b> sur mes tâches.</p>`
                },
                {
                    type: 'softSkill',
                    name: 'Gestion de projet',
                    synopsis: "<p>Le bon déroulement d'un projet demande avant tout une <b>bonne gestion</b> de ce dernier, que ce soit les délais, les différentes tâches à réaliser ou encore échanger avec les clients pour avoir leurs retours.</p><p>Je possède actuellement une certaine <b>expérience</b> vis à vis de la gestion de projet grâce à <b>mes nombreux projets</b> étudiants et professionnels.</p>",
                    detail: `
<h3><b>Premières expériences à l'école</b></h3>
<p>Durant mes années étudiantes à <a href="https://www.intechinfo.fr/" target="_blank">INTECH</a>, j'ai eu l'occasion de travailler en équipe sur de <b>nombreux projets</b>. Un exercice assez difficile auquel je me suis confronté plusieurs fois est la gestion de projet. En effet, cela demande une grande <b>rigueur</b> et une <b>bonne communication</b> entre moi, les membres de l'équipe et les autres parties prenantes.</p>
<p>Mon expérience la plus marquante était sur un projet "La Légion du sourire", dans lequel je tenais le rôle de <b>chef de projet</b>, me demandant de <b>coordonner</b> toutes les actions de mon équipe. Ce projet avait pour but d'organiser une collecte de fonds pour l'association caritative <a href="https://lespetitssoldats.org/" target="_lank">Les Petits Soldats</a>. J'ai été confronté à de nombreuses difficultés, comme obtenir l'intérêt du public visé, des dysfonctionnements matériels et le facteur humain. Au final, ce projet a été une réussite avec une collecte de plusieurs centaines d'euros. Plus personnellement, ce projet m'a permis d'engranger <b>beaucoup d'expérience</b>, notamment sur <b>la gestion de l'imprévu</b>.</p>
<h3><b>Maîtrise en entreprise</b></h3>
<p>Fort de cette expérience accumulée durant mes études, je n'ai pas eu de soucis à <b>prendre en main mes projets</b> lors de mon alternance chez <a href="https://www.signature.one/" target="_blank">Signature One</a>. Je travaille sereinement avec toute l'équipe technique et suis même en contact avec les clients pour recueillir leurs avis.</p>`
                },
                {
                    type: 'softSkill',
                    name: 'Curiosité',
                    synopsis: "<p>Selon moi, la curiosité est une <b>qualité importante</b> pour qui veut devenir un <b>développeur expérimenté</b> et aguerri. L'envie de savoir comment les choses fonctionnement, chercher la meilleure façon de concevoir ses applications et de vouloir élargir son domaine d'expertise. Voici les motivations qui me poussent à <b>me documenter</b> et à développer même sur mon temps personnel.</p>",
                    detail: `
<h3><b>Découverte du développement au lycée</b></h3>
<p>Depuis le milieu de mes années au lycée, je me <b>passionne pour l'informatique</b>, un domaine si vaste dans lequel on ne peut pas tout connaître. Mais c'est dans le but de <b>comprendre</b> de mieux en mieux comment tout ceci fonctionne que je me suis lancé dans des études en informatique et plus particulièrement dans <b>le développement</b>.</p>
<h3><b>Une passion au quotidien</b></h3>
<p>En effet, la multiplicité des langages de programmation, les nombreux protocoles qui régissent ce domaine et <b>l'infinie possibilité</b> de création et d'évolution piquent ma curiosité au plus haut point ! J'en profite donc pour <b>en apprendre un peu plus tous les jours</b>. Cela me permet aujourd'hui d'être très <b>à l'aise dans mon travail</b> de développeur full stack.</p>
<h3><b>Moteur en entreprise</b></h3>
<p>Lorsque j'ai intégré l'entreprise <a href="https://www.signature.one/" target="_blank">Signature One</a>, ce fut pour un réel <b>challenge</b>, notamment parce qu'ils utilisent une stack qu'il développement en interne, donc je ne pouvais pas aussi facilement apprendre qu'en lisant de la documentation sur Internet. C'est à force de <b>lecture de code</b> et de questions à l'équipe de développement que je suis finalement parvenu à <b>prendre en main</b> les outils et packages développés par l'entreprise.</p>`
                }
            ],
            projects: [
                {
                    name: 'Mosaïc',
                    image: '/assets/mosaic.png',
                    tags: [
                        'C#',
                        'ASP.NET Core',
                        'Angular',
                        'SQL Server',
                        'Temps réel'
                    ],
                    content: `
<p>Mosaïc est une <b>solution d'affichage dynamique</b> sur écrans par le biais de <b>Raspberry PI</b>,
le tout piloté par un serveur central. Cette application est dotée d'une interface Web pour les utilisateurs.</p>
<p>Ceci est l'un des projets les plus <b>ambitieux</b> sur lequel j'ai pu travailler. En effet, cette solution est composée de <b>plusieurs serveurs</b> et un grand nombre de clients, le tout travaillant en <b>temps réel</b> pour afficher le contenu souhaité.</p>`,
                    details: `
<h3><b>Un challenge dès le début</b></h3>
<p>Lorsque je suis rentré en stage dans l'entreprise <a href="https://www.signature.one/" target="_blank">Signature One</a>, on m'a mis sur la solution Mosaïc. Cette solution a été initiée par l'équipe de développeur avant mon arrivé. Cela m'a donc demandé un certain <b>travail de prise en main</b> de la base de code et de son fonctionnement. Lorsque l'on arrive dans un nouveau projet, d'autant plus dans un nouveau contexte de travail tel qu'une nouvelle entreprise, il n'est pas facile de comprendre la façon de développer dans cette dernière. Cela est d'autant plus vrai pour moi, qu'à Signature, ils travaillent avec des outils et méthodes propres à eux.</p>
<h3><b>La bonne approche</b></h3>
<p>J'ai commencé à ajouter les fonctionnalités que l'on me demandait en me basant sur la façon dont se sont pris les autres développeurs. Ce fut une bonne approche, car j'ai pu intégrer leur façon de développer, mieux comprendre comment fonctionne la stack technique de l'entreprise et <b>créer du code homogène</b> avec le reste de la solution.</p>
<h3><b>Bilan très positif</b></h3>
<p>Je suis fier de ce que j'ai apporté à ce projet, cela comprend un <b>gros travail de refactoring</b> sur l'API REST et requêtes SQL où j'ai ajouté un sérieux cran de <b>sécurité</b> et ai <b>standardisé</b> la façon dont les données sont récupérées.</p>
<p>J'ai aussi pu travailler sur un <b>client léger</b> qui aura pour mission de fonctionner sur des Rapsberry PI. À mon arrivé, ce client était très limité dans son fonctionnement, j'ai donc travaillé sur <b>l'architecture de son logiciel</b>. Afin que ce dernier puisse communiquer avec le serveur central de la solution, j'ai mis en place un <b>protocole de communication</b> basé sur des messages envoyés via MQTT. Dans le cas où il y aurait des problèmes techniques, j'ai ajouté tout un <b>mécanisme de résilience</b> afin qu'il n'y ait jamais de coupure visible par l'utilisateur.</p>`
                },
                {
                    name: 'CK Database',
                    image: '/assets/PackageIcon.png',
                    tags: [
                        'C#',
                        'SQL',
                        'Package nuget',
                        'Architecture logicielle'
                    ],
                    content: `
<p>Mon entreprise développe un écosystème pour base de données autour d'une philosophie, <b>le package first</b>.
L'idée étant qu'en ajoutant des packages dans un projet, ces derniers installent tout ce dont ils ont besoin pour fonctionner, ainsi cela rend le développement d'applications bien plus rapide.</p>
<p>Ce principe est notamment utilisé pour le projet CK Database, <b>un ORM</b> chargé d'instancier un modèle de base de données. En effet, on y retrouve un ensemble de package qui vont apporter leurs <b>concepts </b>à la base de données, par le biais de table, procédures et altération du modèle de base apporté dans les packages parents.</p>`,
                    details: `
<h3><b>Première rencontre</b></h3>
<p>En arrivant en stage à <a href="https://www.signature.one/" target="_blank">Signature One</a>, j'ai remarqué une utilisation plutôt singulière du SQL, en me penchant sur le sujet, notamment lors de mes travaux sur la solution Mosaïc, je me suis rendu compte que leur façon de travailler avec la base de données est assez peu commune pour que je ne me sois jamais confronté à cette dernière durant mes études. Ce fut pour moi <b>un réel challenge</b> que de me plonger dans l'utilisation des packages de CK Database. Il m'a fallu poser de nombreuses questions à mes collègues et regarder en détail la base de code qui constitue ce projet.</p>
<h3><b>Travail sur des évolutions</b></h3>
<p>À force de persévérance, j'ai fini par suffisamment prendre en main ce projet pour me permettre de l'utiliser dans les autres projets de l'entreprise.</p>
<p>Au cours de mon alternance, on m'a demandé d'<b>ajouter des concepts</b> à ce projet, qui se répercutent sous forme de nouveaux packages. J'ai donc développé les projets suivants : le <a target="_blank" href="https://github.com/signature-opensource/CK-DB-Workspace">CK.DB.Workspace</a>, le <a target="_blank" href="https://github.com/signature-opensource/CK-DB-User-UserBanned/tree/develop">CK.DB.User.UserBanned</a>, le <a target="_blank" href="https://github.com/signature-opensource/CK-DB-User-UserBanned/tree/develop">CK.DB.User.UserPassword.Banned</a>, et encore d'autres projets sur des dépôts privés de l'entreprise.</p>
<h3><b>Retour sur un bug</b></h3>
<p>Lors de mon travail sur le package CK.DB.User.UserPassword.Banned et plus précisément à l'implémentation des tests unitaires, je me suis rendu compte que plusieurs tests ne passaient pas alors que mon implémentation était correcte, j'ai donc pris <b>l'initiative d'analyser</b> le fonctionnement de package duquel dépend celui que j'étais en train d'implémenter, le CK.DB.User.UserPassword. Après analyse, je me suis rendu compte d'un bug caché qui n'avait pas été relevé par les autres développeurs. Je me suis donc empressé de le <b>corriger et de faire une merge request</b> afin que ce dernier soit fixé sur tous les projets de l'entreprise qui utilisent ce package.<br/>J'étais très fier d'avoir trouvé ce bug qui traînait depuis des années et j'étais encore plus fier de constater que mes tests unitaires soient suffisamment pertinents pour relever ce problème.</p>
<h3><b>Maîtrse du projet</b></h3>
<p>Je peux donc dire qu'aujourd'hui je maîtrise suffisamment ce projet pour y contribuer en ajoutant de nouveaux composants le tout dans la même philosophie. J'ai aussi pris suffisamment de recul pour trouver de potentiels bugs dans le code existant.</p>`
                },
                {
                    name: 'Portfolio',
                    image: '/assets/portfolio.png',
                    tags: [
                        'Angular',
                        'NG-ZORRO',
                        'GitHub Pages',
                        'TypeScript',
                        'Less'
                    ],
                    content: `
<p>Ce portfolio est un exemple concret de ce que je suis capable de produire en termes de SPA. Je l'ai développé en <b>Angular</b>, avec l'aide de la librairie <b>NG-ZORRO</b>. Le tout hébergé via le service <b>GitHub Pages</b>.</p>
<p>J'ai tenu à le développer avec des <b>pratiques professionnelles</b> et d'une façon le rendant facile à faire évoluer.</p>`,
                    link: 'https://github.com/RomainDGx/RomainDGx.github.io',
                    details: `
<h3><b>Un devoir noté</b></h3>
<p>Ayant été <b>étudiant en cinquième année</b> à <a href="https://www.intechinfo.fr/" target="_blank">INTECH</a>, un travail demandé pour valider mon <b>titre d'expert en ingénierie du logiciel</b> est de produire mon propre portfolio. Ayant l'expérience du développement Web grâce à mes <b>deux années en alternance</b> à <a href="https://www.signature.one/" target="_blank">Signature One</a>, j'ai donc réalisé un portfolio avec les pratiques qui rythme mon quotidien en entreprise.</p>
<h3><b>Une mise en place profesionnelle</b></h3>
<p>J'ai voulu faire un vrai projet qui servira de vitrine sur mes <b>capacités à développer un site Web dynamique</b>, responsive et agréable à utiliser. J'ai donc utilisé le <b>framwork Angular</b>, utile pour la puissance et les <b>patterns de développement</b> qui y sont implémentés, tels que l'<b>Injection de Dépendance</b>. La solution la plus simple pour déployer et héberger mon portfolio est l'utilisation des <b>GitHub Pages</b>. Ce fut pour moi <b>l'occasion d'apprendre</b> à m'en servir. À la mise en place de ces dernières.</p>
<h3><b>Un résultat propre</b></h3>
<p>Ce qui me rend fier de ce portfolio, c'est la façon suffisamment <b>dynamique</b> dont il est conçu. Je peux rajouter un nouvel article ou encore faire une correction, sans avoir besoin de retoucher tout le code source. Je peux aussi rajouter de nouvelles sections, ces dernières viendraient <b>s'intégrer tel des plug-in</b> sans avoir à modifier la mécanique de navigation.</p>`
                },
                {
                    name: 'Bot Sakuya',
                    image: '/assets/error_418.png',
                    tags: [
                        'Node.js',
                        'TypeScript',
                        'Bot Discord',
                        'Architecture logicielle'
                    ],
                    content: `
<p>Passionné de programmation, je n'hésite pas à développer pour des <b>projets personnels</b> !</p>
<p>Étant membre de la communauté francophone autour de la série de jeux Touhou Project, j'ai <b>développé un bot</b> destiné à créer de l'activité sur le serveur Discord de cette dernière.</p>
<p>J'ai pris plaisir à apprendre comment <b>communiquer avec l'API</b> de Discord et développer une application qui serait amusante à utiliser.</p>`,
                    link: 'https://cloud2.touhou-online.net/Poisson/SakuyaBot',
                    details: `
<h3><b>Un projet fun mais sérieux</b></h3>
<p>J'ai tenu pour ce projet visant à créer de l'animation de l'amusement pour ses utilisateurs, à le <b>développer dans une démarche professionnelle</b> et tout aussi sérieuse que mes projets en entreprise. En effet, lorsque qu'il s'agit de développer une application, je tiens à ce qu'elle fonctionne au mieux et répondant aux <b>bonnes pratiques</b> que je m'efforce d'utiliser tel qu'une constitution <a href="https://en.wikipedia.org/wiki/SOLID" target="_blank">SOLID</a>, <b>dynamique</b> et facile à faire évoluer.</p>
<h3><b>Tout dans l'expérience utilisateur</b></h3>
<p>Dans le cas d'un tel projet, qui sera notamment utilisé par le biais d'entrées textuelles, je sais que je dois <b>m'attendre à des erreurs</b>, voir des tentatives de le faire dysfonctionner, c'est pourquoi j'ai tenu à le rendre strict sur l'analyse des entrées.<br/> L'une des fonctionnalités desquelles je suis le plus fier est une utilisation de la <a href="https://en.wikipedia.org/wiki/Levenshtein_distance" target="_blank">Distance de Levenshtein</a>, me permettant de <b>prendre en compte les erreurs</b> de frappe et trouve ce que l'utilisateur voulais dire. Tout ceci dans le but de rendre <b>son utilisation plus agréable</b>.</p>
<h3><b>Évolution et amélioration en continue</b></h3>
<p>Je travaille actuellement sur une nouvelle version de ce projet en mettant en place de <b>nouveaux patterns de conception</b> le rendant encore <b>plus facile à faire évoluer</b>. Notamment avec une philosophie de commandes qui viendraient s'ajouter au reste de l'application tels des <b>plug-in</b>, donc sans avoir à impacter l'existant pour s'intégrer.<br/>Avec ceci viendront s'ajouter de nouvelles fonctionnalités, rendant le bot d'avantage amusant et agréable à utiliser.</p>`
                }
            ],
            about: [
                {
                    icon: 'user',
                    title: 'Qui je suis ?',
                    content: `
Je m'appelle Romain Delorme-Glorieux, j'ai ${DateTime.fromObject({ year: 2000, month: 12, day: 26 }, { zone: 'Europe/Paris' }).diffNow().negate().toFormat('yy')} ans et je suis <b>développeur logiciel</b>.<br/>
Grâce à mes années d'études et de pratique dans le domaine de l'informatique, j'ai acquis une certaine maîtrise sur de nombreuses technologies et outils. Notamment sur mes technologies de prédilection : l'environnement <b>.NET</b> et le langage <b>C#</b>.`
                },
                {
                    icon: 'heart',
                    title: 'Hobbies et passions',
                    content: `
<p><b>Plongée sous-marine</b> : J'aime le calme et la beauté des milieux marins, être spectateur de cet autre monde a pour moi quelque chose de relaxant.</p>
<p><b>Culture japonaise</b> : Je rêve de visiter ce pays et je suis passionné d'animation japonaise pour les messages profonds et les réflexions qu'elle peuvent susciter.</p>
<p><b>Jeux vidéo</b> : Quand je joue, je recherche plus qu'un bon gameplay : une histoire prenante et une direction artistique à couper le souffle.</p>`
                },
                {
                    icon: 'tool',
                    title: 'Côté travail',
                    content: `
<p>Je suis avant tout passionné de programmation et d'<b>architecture logicielle</b>. Il est important pour moi que je puisse travailler sur ces sujets dans mon quotidien en entreprise afin d'être épanoui dans ce que je fais.</p>
<p>Pour moi, l'entreprise et tout particulièrement dans une équipe de développeurs, <b>la communication</b> est très importante. En effet, c'est par ce biais que l'on peut se comprendre mutuellement, et être plus efficace dans notre travail.</p>`
                }
            ],
            contact: {
                links: [
                    {
                        icon: 'github',
                        iconColor: 'black',
                        url: 'https://github.com/RomainDGx',
                        username: 'RomainDGx',
                        tooltipTitle: 'Voir mon GitHub'
                    },
                    {
                        icon: 'gitlab',
                        iconColor: '#e24329',
                        url: 'https://gitlab.com/RomainDGx',
                        username: 'RomainDGx',
                        tooltipTitle: 'Voir mon GitLab'
                    }
                ]
            },
            path: [
                {
                    from: DateTime.fromObject({ year: 2021, month: 9 }),
                    title: 'Alternance de 2 ans',
                    location: '<a href="https://www.signature.one/" target="_blank">Signature One</a>',
                    content: "<Travail>Développement de multiples solutions logicielles interne à l'entreprise.<br/>Ajout de fonctionnalités sur des projets clients et résolution de bugs en production.<br/>(Développement full stack)</p>"
                },
                {
                    from: DateTime.fromObject({ year: 2021, month: 3 }),
                    to: DateTime.fromObject({ year: 2021, month: 8 }),
                    title: 'Stage en entreprise',
                    location: '<a href="https://www.signature.one/" target="_blank">Signature One</a>',
                    content: "<p>Développement des solutions Code Center et Mosaïc.<br/>(Développement full stack)</p>"
                },
                {
                    at: DateTime.fromObject({ year: 2020, month: 2 }),
                    title: "Développement d'un émulateur",
                    location: '<a href="https://www.signature.one/" target="_blank">Signature One</a>',
                    content: "<p>Développement d'un logiciel en C# pour émuler le comportement de balances, afin de facilier les tests des logiciels de l'entreprise.<br/>(Architecture logicielle et développement d'application lourde)</p>"
                },
                {
                    from: DateTime.fromObject({ year: 2018, month: 9 }),
                    title: 'Études à INTECH',
                    location: '<a href="https://www.intechinfo.fr/" target="_blank">INTECH</a> du groupe <a href="https://www.esiea.fr/" target="_blank">ESIEA</a>',
                    content: '<p>Études suppérieures en BAC+5 en ingénierie du logiciel.</p>'
                },
                {
                    at: DateTime.fromObject({ year: 2018, month: 6 }),
                    title: 'Baccalauréat scientifique',
                    location: '<a href="http://www.lycee-vangogh.fr/" target="_blank">Lycée Van Gogh</a>',
                    content: 'Baccalauréat scientifique avec spécialité informatique et sciences du numérique.'
                }
            ],
            expertises: [
                {
                    icons: [
                        '/assets/icon/c--4.svg',
                        '/assets/icon/dot-net-core-7.svg',
                    ],
                    title: 'Environnement .NET',
                    content: `
<p>Depuis maintenant ${DateTime.fromObject({ year: 2019, month: 9 }, { zone: 'Europe/Paris' }).diffNow().negate().toFormat('y')} ans,
je travaille régulièrement avec le langage <b>C#</b>. Je l'ai notamment utilisé à travers l'environnement <b>.NET Core</b> pour développer
des applications backend avec le framework <b>ASP.NET Core</b>.</p>
<p>J'ai pour habitude de développer sur <b>Visual Studio</b>. Je possède maintenant une bonne maîtrise de cet IDE
et des différents outils qu'il propose pour aider au développement et au débogage.</p>`
                },
                {
                    icons: [
                        '/assets/icon/angular-icon-1.svg',
                        '/assets/icon/vue-js-1.svg',
                        '/assets/icon/typescript.svg',
                        '/assets/icon/nodejs-1.svg'
                    ],
                    title: 'Autour de JavaScript',
                    content: `
Tout au long des mes études de développement informatique, et durant mes expériences professionnelles, j'ai souvent travaillé
avec l'écosystème autour de <b>JavaScript</b>. J'ai eu l'occasion de développer des applications backend avec <b>Node.js</b>,
mais aussi beaucoup de SPA sur de l'<b>Angular 12 et +</b> et du <b>Vue.js</b>, avec l'utilisation de <b>TypeScript</b>.`
                },
                {
                    icons: [
                        '/assets/icon/microsoft-sql-server-1.svg',
                        '/assets/icon/postgresql.svg',
                        '/assets/icon/mysql-3.svg'
                    ],
                    title: 'Côté base de données',
                    content: `
<p>Pendant mes études, j'ai eu l'occasion d'apprendre le fonctionnement du <b>SQL</b>,
notamment avec l'utilisation des bases de données que sont <b>MySQL</b> et <b>PosgreSQL</b>.</p>
<p>À la suite, pendant ma formation, j'ai beaucoup travaillé avec <b>Microsoft SQL Server</b>
où j'ai pu utiliser des fonctionnalités avancées du langage.</p>
<p>J'ai utilisé les interfaces que sont <b>pgAdmin</b> et <b>SQL Server Management Studio</b>
pour communiquer avec les bases de données.</p>`
                },
                {
                    icons: [
                        '/assets/icon/git.svg',
                        '/assets/icon/github-icon-1.svg',
                        '/assets/icon/gitlab.svg'
                    ],
                    title: 'Workflow',
                    content: `
<p>J'ai pris pour habitude que tous les projets sur lesquels je travaille aient un <b>Git</b>.
Je suis donc parfaitement rodé à l'utilisation de cet outil : utilisation des branches,
travail en parallèle, release sur master/develop, merge conlict.</p>
<p>J'utilise couramment les plateformes que sont <b>GitHub</b> et <b>GitLab</b> pour héberger mes projets
et les dépôts d'entreprise.</p>`
                },
                {
                    icons: [
                        '/assets/icon/stack-overflow.svg',
                        '/assets/icon/google-g-2015.svg',
                        '/assets/icon/openai-2.svg'
                    ],
                    title: 'Recherche et documentation',
                    content: `
<p>Le milieu de développement informatique est déjà très complexe et il continue d'évoluer.
Il est évidemment que personne ne peut tout connaître. Pour s'en sortir, il est donc important
de savoir se documenter, mais aussi de chercher aux bons endroits pour trouver les meilleures
solutions aux problèmes que l'on rencontre. Mes meilleurs amis dans ce cas-là sont <b>Stack overflow</b>,
Google et les pages de documentation.</p>`
                }
            ]
        };

        subscribe.next(data);
    });

    public override getData(): Observable<AppData> {
        return this._data;
    }
};
