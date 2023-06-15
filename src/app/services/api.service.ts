import { Observable } from "rxjs";
import { IContactPageData } from "../models/contact-page.model";
import { IAboutArticle } from "../models/about-page.model";
import { DateTime } from 'luxon';
import { IExpertise } from "../models/expertise.model";
import { IProject } from "../models/project.model";
import { ISkill } from '../models/skills.model';

export abstract class ApiService {
    public abstract getSkills(): Observable<ISkill[]>;
    public abstract getExpertisePageData(): Observable<IExpertise[]>;
    public abstract getProjectsPageData(): Observable<IProject[]>;
    public abstract getAboutPageData(): Observable<IAboutArticle[]>;
    public abstract getContactPageData(): Observable<IContactPageData>;
}

export class LocalApiService extends ApiService {

    public override getSkills(): Observable<ISkill[]> {
        return new Observable<ISkill[]>(subscribe => {
            subscribe.next([
                {
                    type: 'hardSkill',
                    name: 'Expertise en C#/.Net',
                    synopsis: "Lors de ma formation dans le domaine du développement logiciel, j'ai découvert l'environnement .Net et le C#. Je me suis pris d'intérêt pour cette technologie et ai continué d'approfondir ma maîtrise de cette dernière jusqu'à en faire mon outil de travail principal.",
                    detail: `
<p>Après avoir découvert le C# durant mes études à <a href="https://www.intechinfo.fr/" target="_blank">INTECH</a>, je suis allé faire mon alternance dans l'entreprise <a href="https://www.signature.one/" target="_blank">Signature One</a> qui utilise cette technologie comme base pour développer ses logiciels. J'ai donc pu continuer d'approfondir ma maîtrise du C# dans un contexte professionnel, avec notamment l'apprentissage de l'utilisation de ce denier avec des méthodes d'avantage professionnelles et industrielles.</p>
<p>J'ai eu l'occasion tout au long de ma formation en entreprise de travailler sur des projets ambitieux et demandant de trouver des solutions efficaces et performantes, suivant bien souvent une architecture de client/serveur ayant pour backend un ou plusieurs serveurs ASP.Net Core. C'est notamment le cas pour le projet Mosaïc où j'ai pu travailler et contribuer à la conception du logiciel et son implémentation en C#. Ce fut pour moi une expérience très enrichissante. À l'heure actuelle la solution fonctionne en production et me permet de voir fonctionner dans un contexte concert le travail de conception et de développement que j'y ai apporté.</p>
<p>À cette heure, je peux constater que j'ai acquis une certaine maîtrise de cette technologie, me permettant de trouver des solutions techniques aux différentes problématiques qui me sont posées, mais aussi de pouvoir analyser un code déjà existant de de trouver les sources de bug et y apporter une solution efficace.</p>
<p>Je suis pleinement conscient de ne pas parfaitement maîtriser cette technologie, mais c'est en me confrontant à de nouvelles problématiques et en devant concevoir des systèmes toujours plus performants, que je continue à apprendre et m'améliorer.</p>`
                },
                {
                    type: 'hardSkill',
                    name: 'Développment front-end',
                    synopsis: "Le front-end et notamment le Web est un domaine très étendu, avec de nombreuses technologies nécessitant énormément de connaissances. Ça peut faire peur dit comme ça, mais c'est au contraire une bonne raison pour un passionné comme moi de développement de s'y pencher. C'est en suivant cette voie que je me retrouve aujourd'hui à travailler sur de nombreux projets nécessitant une interface Web, et ça me plaît !",
                    detail: `
<p>Je me suis toujours demandé comment fonctionnent les sites Web. Que signifiait ce text étrange que je voyais en faisant Ctrl + U sur mon navigateur ?</p>
<p>C'est en entrant à <a href="https://www.intechinfo.fr/" target="_blank">INTECH</a> que j'ai appris comment fonctionnent les pages Web, tout d'abord avec l'HTML, du CSS et le JavaScript. J'aimais me lancer des défis en créant des pages belles, bien structurées et dynamiques grâce à mes comptétances nouvellement acquises.</p>
<p>Au cours de ma formation j'ai découvert les Single-Page Application (SPA) et toute la puissance qu'elles apportent aux sites Web. C'est à ce moment-là que ma vision du fonctionnement du front-end a complètement changé. Depuis, j'ai intégré cette dimension mon quotidien, aussi bien durant mes études que dans mon travail en alternance. J'ai notamment travaillé avec Angular et Vue.js sur de multiples projets au sein de mon entreprise, tels que le projet Mosaïc, ainsi que sur de nombreux autres projets nécessitant de nouvelles fonctionnalités.</p>
<p>Ces projets étant parfois anciens, cela demande un véritable travaille d'adaptation pour travailler avec d'anciennes versions et philosophies de frameworks front-end. Malgré les diffcuiltés que cela peut présenter, je saisis toujours l'occasion d'apprendre de nouvelles choses et de renforcer ma maîtrise de ces outils.</p>
<p>Un bon exemple de mon niveau est ce portfolio que j'ai réalisé en Anglar, en utilisant toutes les bonnes pratiques que j'ai apprises en entreprise.</p>`
                },
                {
                    type: 'hardSkill',
                    name: 'Architecture logicielle',
                    synopsis: `<p>L'un des domaines que je trouve les plus intéressants du développement informatique est l'architecture logicelle. En effet, cela requiert une bonne analyse du problème afin d'y apporter une solution adaptée. Cela demande aussi d'avoir une bonne expérience et de maîtriser les différents patterns de conception.</p>
                    <p>Étant très soucieux de la qualité de mon code et recherchant constamment comment m'améliorer, c'est pour moi un challenge permanent.</p>`,
                    detail: `
<p>Lors de mes débuts en développement, je faisais mes applications de manière très verticales et peu organisée. Plus ces projets devenaient complexes, plus le fonctionnement était compliqué à maintenir et faire évoluer. C'est à partir de ces premières expériences que j'ai commencé à m'intéresser à la meilleure manière d'organiser mon code et son fonctionnement pour le rendre plus agréalble à développer, à faire évoluer et à relire après-coup.</p>
<p>J'ai eu l'occasion pendant ma scolarité à <a href="https://www.intechinfo.fr/" target="_blank">INTECH</a>, de bénéficier des conseils et de l'éxpérience de mes enseignants et des différents intervenants, le tout me permettant d'apprendre les différentes méthodes utilisées en entreprise. Mais ma faim ne s'arrête pas là ! En effet, recherchant constamment comment je pourrais améliorer la qualité de mon code, je n'éhiste pas à me documenter par le biais de blogs et sites tels que <a href="https://refactoring.guru/" target="_blank">Refactoring Guru</a>, de piocher les idées intéressantes du <a href="https://www.oreilly.com/library/view/clean-code-a/9780136083238/" target="_blank">Clean Code</a> ou encore de créér un code <a href="https://en.wikipedia.org/wiki/SOLID" target="_blank">SOLID</a>.</p>
<p>Cette expérience acquise me permet, notamment dans mon travail en entreprise de créer du code maintenable, mais aussi de déméler le sac de nœuds que peut être une base de code ayant vu défiler plusieurs générations de développeurs.</p>
<p>Dès que je le peux, notamment sur les nouveaux projets, je tiens à mettre en place tout de suite une approche propre, puissante et adaptée aux besoin.</p>`
                },
                {
                    type: 'softSkill',
                    name: 'Communiation',
                    synopsis: `<p>"La communication est la clé qui ouvre toutes les portes du succès. C'est par le partage efficace des idées, des émotions et des connaissances que nous pouvons créer des liens, résoudre des problèmes et construire un avenir meilleur."</p><p>Cette citation montre l'importance qu'à la communication à mes yeux.</p>`,
                    detail: `
<p>Ce n'est pas parce que je passe mes journées à communiquer avec des machines, que je dois arrêter de communiquer avec mes semblables. Cela peut faire sourire, mais il y a encore trop de personnes qui voient le développeur au travers du stéréotype de l'informaticien isolé dans son coin. Or ce n'est pas vrai, bien au contraire !</p>
<p>C'est en réalisant mes premiers projets informatique en équipe durant ma scolarité à <a href="https://www.intechinfo.fr/" target="_blank">INTECH</a> que je me suis rendu compte de l'importance qu'à la communication dans le bon déroulement d'un projet. En effet il est important pour l'organisation, la transmission de connaîssances et autres brain storming, de bien communiquer avec son équipe.</p>
<p>Ayant appris de mes expériences passées, je tiens actuellement en entreprise, à garder une comunication fluide et constante avec les responsables de projet et les clients afin de ne pas tomber dans les travers d'une mauvaise internprétation d'une demande. C'est ce qui me permet aujourd'hui de d'avancer à bon rythme sur mes tâches.</p>`
                },
                {
                    type: 'softSkill',
                    name: 'Gestion de projet',
                    synopsis: "<p>Le bon déroulement d'un projet demande avant tout une bonne gestion de ce dernier, que ce soit les délais, les différentes tâches à réaliser ou encore échanger avec les clients pour avoir leurs retours.</p><p>Je possède actuellement une certaine expérience vis à vis de la gestion de projet grâces à mes nombreux projets étudiants et professionnels.</p>",
                    detail: `
<p>Durant mes années étudiantes à <a href="https://www.intechinfo.fr/" target="_blank">INTECH</a>, j'ai eu l'occasion de travailler en équipe sur de nombreux projets. Un exercice assez difficile auquel je me suis confronté plusieurs fois est la gestion de projet. En effet, cela demande une grande rigueur et une bonne communication entre moi, les membres de l'équipe et les autres parties prenantes.</p>
<p>Mon expérience la plus marquante était sur un projet "La Légion du sourire", dans lequel je tenais le rôle de chef de projet, me demandant de coordonner toutes les actions de mon équipe. Ce projet avait pour but d'organiser une collecte de fond pour l'association carritative <a href="https://lespetitssoldats.org/" target="_lank">Les Petits Soldats</a>. J'ai été confronté à de nombreuses difficultés, comme obtenir l'intérêt du publique visé, des discfonctionnements matériels et le facteur humain. Au final ce projet à été une réussite avec un une collecte de plusieurs centains d'euros. Plus personnellement ce projet m'a permis d'engranger beaucoup d'expérience, notamment sur la gestion de l'imprévu.</p>
<p>Fort de cet expérience accumulée durant mes études, je n'ai pas eu de soucis à prendre en main mes projets lors de mon alternance chez <a href="https://www.signature.one/" target="_blank">Signature One</a>. Je travaille sereinement avec toute l'équipe technique et suis même en contact avec les clients pour receuillir leurs avis.</p>`
                },
                {
                    type: 'softSkill',
                    name: 'Curiosité',
                    synopsis: "<p>Selon moi la curiosité est une qualité importante pour qui veut devenir un développeur expérimenté et aguéri. L'envie de savoir comment les choses fonctionnement, chercher la meilleure façon de concevoir ses application et vouloir élargir son domaine d'expertise. Voici les motivations qui me poussent à me documenter et développer même sur mon temps personnel.</p>",
                    detail: `
<p>Depuis le milieu de mes années aux lycée je me passionne pour l'informatique, un domaine si vaste dans lequel on ne peut pas tout connaître. Mais c'est dans le but de comprendre de meux en mieux comment tout ceci fonctionne que je me suis lancé dans des études en informatique et plus particulièrement dans le développement.</p>
<p>En effet, la multiplicité des langages de programmation, les nombreux protocoles qui régissent ce domaine et l'infini possiblité de création et d'évolution pîquent ma curiosité au plus haut point ! J'en profites donc pour en apprendre un peu plus tous les jours. Cela me permet aujourd'hui d'être très à l'aise dans mon travaille de développeur full stack.</p>
<p>Lorsque j'ai intégré l'entreprise <a href="https://www.signature.one/" target="_blank">Signature One</a>, ce fut pour un réel challenge, notamment parce qu'ils utilisent une stack qu'il développement en interne, donc je ne pouvais pas aussi facilement apprendre qu'en lisant de la documentation sur internet. C'est à force de lecture de code et de questions à l'équipe de développement que je suis finalement parvenu à prendre en main les outils et packages développés par l'entreprise.</p>
`
                }
            ]);
        });
    }

    public override getExpertisePageData(): Observable<IExpertise[]> {
        return new Observable<IExpertise[]>(subscribe => {
            subscribe.next([
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
            ]);
        });
    }

    public override getProjectsPageData(): Observable<IProject[]> {
        return new Observable<IProject[]>(subscribe => {
            subscribe.next([
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
<p>Signature Mosaïc est une solution d'affichage dynamique sur écrans par le biais de Raspberry PI,
le tout piloté par un serveur central. Cette application est dotée d'une interface web pour les utilisateurs.</p>
<p>Ceci est l'un des projets les plus ambitieux sur lesquel j'ai pu travailler. En effet, cette solution
est composée de plusieurs serveurs et un grand nombre de clients, le tout travaillant en temps réel pour
afficher le contenu souhaité.</p>`,
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
L'idée étant qu'en ajoutant des packages dans un projet, ces derniers installent tout ce dont
ils ont besoin pour fonctionner, ainsi cela rend le développment d'applications bien plus rapide.</p>
<p>Je participe activement au développement de cet écosystème en créant des packages qui viennent rajouter des concepts :
<a target="_blank" href="https://github.com/signature-opensource/CK-DB-Workspace">CK.DB.Workspace</a>,
<a target="_blank" href="https://github.com/signature-opensource/CK-DB-User-UserBanned/tree/develop">CK.DB.User.UserBanned</a>,
<a target="_blank" href="https://github.com/signature-opensource/CK-DB-User-UserBanned/tree/develop">CK.DB.User.Password.Banned</a>,
CK.DB.WebPage.</p>`
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
<p>Ce portfolio est un exemple concret de ce que je suis capable de produire en terme de SPA.
Je l'ai développé en <b>Angular</b>, avec l'aide de la librairie <b>NG-ZORRO</b>. Le tout hébergé
via le service <b>GitHub Page</b>.</p>
<p>J'ai tenu à le développer de avec des pratiques professionnelles et d'une façon le rendant
facile à faire évoluer.</p>`,
                    link: 'https://github.com/RomainDGx/RomainDGx.github.io'
                },
                {
                    name: 'Bot Sakuya',
                    image: '/assets/error_418.png',
                    tags: [
                        'Node.js',
                        'TypeScript',
                        'Bot Discord',
                    ],
                    content: `
<p>Passionné de programmation, je n'hésite pas à développer pour des projets personnels !</p>
<p>Étant membre de la communauté francophone autour de la série de jeux Touhou Project, j'ai développé un bot destiné
à créer de l'activité sur le serveur Discord de cette dernière.</p>
<p>J'ai pris plaisir à apprendre comment communiquer avec l'API de Discord et développer une
application qui serait amusante à utiliser.</p>`,
                    link: 'https://cloud2.touhou-online.net/Poisson/SakuyaBot'
                }
            ]);
        });
    }

    public override getAboutPageData(): Observable<IAboutArticle[]> {
        return new Observable<IAboutArticle[]>(subscribe => {
            subscribe.next([
                {
                    icon: 'user',
                    title: 'Qui je suis ?',
                    content: `
Je m'appelle Romain Delorme-Glorieux, j'ai ${DateTime.fromObject({ year: 2000, month: 12, day: 26 }, { zone: 'Europe/Paris' }).diffNow().negate().toFormat('yy')} ans et je suis <b>développeur logiciel</b>.<br/>
Grâce à mes années d'études et de pratique dans le domaine de l'informatique, j'ai acquis une certaine maîtrise sur de nombreuses technologies et outils. Notamment sur mes technologies de prédilection : l'environnement <b>.Net</b> et le langage <b>C#</b>.`
                },
                {
                    icon: 'heart',
                    title: 'Hobbies et passions',
                    content: `
<p><b>Plongée sous-marine</b> : J'aime le calme et la beauté des milieux marins, être spectateur de cet autre monde a pour moi quelque chose de relaxant.</p>
<p><b>Culture japonaise</b> : Je rêve de visiter ce pays et je suis passionné d'animation japonaise pour les messages profonds et les réflexions qu'elle peuvent susciter.</p>
<p><b>Jeux vidéos</b> : Quand je joue, je recherche plus qu'un bon gameplay : une histoire prenante et une direction artistique à couper le souffle.</p>`
                },
                {
                    icon: 'tool',
                    title: 'Côté travail',
                    content: `
<p>Je suis avant tout passionné de programmation et d'<b>architecture logicielle</b>. Il est important pour moi que je puisse travailler sur ces sujets dans mon quotidien en entreprise afin d'être épanoui dans ce que je fais.</p>
<p>Pour moi, l'entreprise et tout particulièrement dans une équipe de développeurs, <b>la communication</b> est très importante. En effet c'est par ce biais que l'on peut se comprendre mutuellement, et être plus efficace dans notre travail.</p>`
                }
            ]);
        });
    }

    public override getContactPageData(): Observable<IContactPageData> {
        return new Observable<IContactPageData>(subscribe => {
            subscribe.next({
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
            });
        });
    }
};
