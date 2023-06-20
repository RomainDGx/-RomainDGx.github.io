import { ISkill } from './skills.model';
import { IProject } from './project.model';
import { IAboutArticle } from './about-page.model';
import { IContactPageData } from './contact-page.model';
import { IExpertise } from './expertise.model';

export interface AppData {
    name: string;
    creationYear: number;
    repository?: string;
    home: { job: string; };
    skills: ISkill[];
    projects: IProject[];
    about: IAboutArticle[];
    contact: IContactPageData;
    expertises: IExpertise[];
};
