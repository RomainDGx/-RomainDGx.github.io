import { Observable } from "rxjs";
import { IContactPageData } from "../models/contact-page.model";
import { IAboutArticle } from "../models/about-page.model";
import { DateTime } from 'luxon';
import { IExpertise } from "../models/expertise.model";
import { IProject } from "../models/project.model";

export abstract class ApiService {
    public abstract getExpertisePageData(): Observable<IExpertise[]>;
    public abstract getProjectsPageData(): Observable<IProject[]>;
    public abstract getAboutPageData(): Observable<IAboutArticle[]>;
    public abstract getContactPageData(): Observable<IContactPageData>;
}

export class LocalApiService extends ApiService {

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
<p>J'ai pour habutide de développer sur <b>Visual Studio</b>. Je possède maintenant une bonne maîtrise de cet IDE
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
<p>J'utilise couramment les plateformes que sont <b>GitHub</b> et <b>GitLab</b> pour hébeger mes projets
et les repositories d'entreprise.</p>`
                },
                {
                    icons: [
                        '/assets/icon/stack-overflow.svg',
                        '/assets/icon/google-g-2015.svg',
                    ],
                    title: 'Recherche et documentation',
                    content: `
<p>Le milieu de développement informatique est déjà très complexe et il continue d'évoluer.
Il est évidement que personne ne peut tout connaître. Pour s'en sortir, il est donc important
de savoir se documenter, mais aussi de chercher aux bons endroits pour trouver les meilleures
solutions aux problèmes que l'on rencontre. Mes meilleurs amis dans ce cas là sont <b>Stack overflow</b>,
Goolge et les pages de documentation.</p>`
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
le tout piloté par un serveur central. Cette appllication est doté d'une interface web pour les utilisateurs.</p>
<p>Ceci est l'un des projets les plus ambitieux sur lesquels j'ai pu travailler. En effet, cette solution
est composé de plusieurs serveurs et un grand nombre de clients, le tout travaillant en temps réel pour
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
<p>Je participe activement au développements de cet écosystème en créant des packages qui viennent rajouter des concepts :
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
applications qui serait amusante à utiliser.</p>`,
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
<p><b>Culture japonaise</b> : Je rêve de visiter ce pays et je suis passionné d'animation japonaise pour les messages profonds et les reflexion qu'elle peut susciter.</p>
<p><b>Jeux vidéos</b> : Quand je joue, je recherche plus qu'un bon gameplay : une histoire prenante et une direction artistique à couper le souffle.</p>`
                },
                {
                    icon: 'tool',
                    title: 'Côté travail',
                    content: `
<p>Je suis avant tout passionné de programmation et d'<b>architecture logicielle</b>. Il est important pour moi que je puisse travailler sur ces sujets dans mon quotidien en entreprise afin d'être épanoui dans ce que je fais.</p>
<p>Pour moi, l'entreprise et tout particulièrement dans une équipe de développeur, <b>la communication</b> est très importante. En effet c'est par ce biais que l'on peut se comprendre mutuellement, et être plus efficace dans notre travail.</p>`
                }
            ]);
        });
    }

    public override getContactPageData(): Observable<IContactPageData> {
        return new Observable<IContactPageData>(subscribe => {
            subscribe.next({
                email: 'delormeglorieux@gmail.com',
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
