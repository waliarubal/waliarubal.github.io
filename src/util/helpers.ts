export function calculateAge(birthday: Date): number {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function loadScript(url: string): void {
    let script = document.createElement('script');
    script.src = url;
    script.async = false;
    document.body.appendChild(script);
}