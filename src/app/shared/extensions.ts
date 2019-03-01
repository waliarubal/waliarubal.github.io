export class Extensions {

    static Join(joiningChar: string = ',', ...parts: any[]): string {
        let joinedString = '';
        parts.forEach(part => joinedString += `${part}${joiningChar} `);
        return joinedString.length > 0 ? joinedString.substr(0, joinedString.length - (joiningChar.length + 1)) : '';
    }
}