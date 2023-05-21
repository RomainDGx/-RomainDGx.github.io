import { Observable } from "rxjs";
import { IContactPageData } from "../models/contact-page.model";
import { IAboutPageData } from "../models/about-page.model";
import { DateTime } from 'luxon';

export abstract class ApiService {
    public abstract getAboutPageData(): Observable<IAboutPageData>;
    public abstract getContactPageData(): Observable<IContactPageData>;
}

export class LocalApiService extends ApiService {

    public override getAboutPageData(): Observable<IAboutPageData> {
        return new Observable<IAboutPageData>(subscribe => {
            subscribe.next({
                elements: [
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
                ]
            });
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
