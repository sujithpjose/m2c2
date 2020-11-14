export interface MenuItem {
    nav: string;
    label: string;
    disabled: boolean;
}

export const Menu: MenuItem[] = [
    // {
    //     nav: "home",
    //     label: "HOME",
    //     disabled: false
    // },
    {
        nav: "movie",
        label: "MOVIES",
        disabled: false
    },
    {
        nav: "review",
        label: "REVIEWS",
        disabled: true
    },
    {
        nav: "news",
        label: "NEWS",
        disabled: true
    },
]