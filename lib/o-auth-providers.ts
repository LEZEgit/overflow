// This file was only created to extend the reusability of the code later (if we add more social auth providers)

export const SUPPORTED_OAUTH_PROVIDERS = ["github", "google"] as const;

export type SupportedOAuthProvider = (typeof SUPPORTED_OAUTH_PROVIDERS)[number];

export const SUPPORTED_OAUTH_PROVIDER_DETAILS : Record<
    SupportedOAuthProvider,
    {name: string; icon: string}
> ={
     github: {
        name: "GitHub",
        icon: "GitHub-icon"
     },
     google: {
        name: "Google", 
        icon: "Google-icon"
     }
}
