import { Observable } from "rxjs";
import { IContactPageData } from "../models/contact-page.model";

export abstract class ApiService {
    public abstract getContactPageData(): Observable<IContactPageData>;
}

export class LocalApiService extends ApiService {
    public override getContactPageData(): Observable<IContactPageData> {
        return new Observable<IContactPageData>(subscribe => {
            subscribe.next({
                email: 'delormeglorieux@gmail.com',
                links: [
                    {
                        icon: 'github',
                        url: 'https://github.com/RomainDGx',
                        username: 'RomainDGx'
                    },
                    {
                        icon: 'gitlab',
                        url: 'https://gitlab.com/RomainDGx',
                        username: 'RomainDGx'
                    }
                ]
            });
        });
    }
};
