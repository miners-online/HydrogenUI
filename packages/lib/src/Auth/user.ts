import type { User as BAUser } from "better-auth";

export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public avatarUrl?: string
    ) {}

    getInitials(): string {
        const names = this.name.split(" ");
        const initials = names.map((n) => n.charAt(0).toUpperCase()).join("");
        return initials;
    }
}

export function createUserFromBetterAuth(baSession: BAUser): User {
    const name = baSession.name?.trim()?.length ? baSession.name.trim() : "Unknown User";
    const email = baSession.email?.trim()?.length ? baSession.email.trim() : "unknown@example.com";
    return new User(
        baSession.id,
        name,
        email,
        baSession.image ? baSession.image : undefined
    );
}
