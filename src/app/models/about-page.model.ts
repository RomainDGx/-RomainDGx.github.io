export interface IAboutArticle {
    icon: string;
    title: string;
    content: string;
};

export interface IAboutPageData {
    elements: Array<IAboutArticle>;
};
