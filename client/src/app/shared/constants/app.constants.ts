
export interface Language {
    name: string,
    value: string
}

export interface AppConstants {
    languageKeys: Language[]
}

export const APP_CONSTANTS = {
    languageKeys: [
        {
            name: 'Malayalam',
            value: 'ml'
        },
        {
            name: 'Tamil',
            value: 'ta'
        },
        {
            name: 'Telugu',
            value: 'te'
        },
        {
            name: 'Hindi',
            value: 'hi'
        },
        {
            name: 'English',
            value: 'en'
        },
    ]
};

export const HTTP_CONSTANTS = {

}
