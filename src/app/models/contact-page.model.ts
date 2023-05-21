export interface IContactPageData {
    email: string;
    links: Array<{
        icon: string;
        iconColor: string;
        url: string;
        username: string;
        tooltipTitle: string;
    }>;
};
