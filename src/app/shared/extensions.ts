export class Extensions {

    static Join(separator: string, ...parts: any[]): string {
        let joinedString: string = ' ';
        parts.forEach(part => joinedString += `${part}${separator} `);
        return joinedString.length > 0 ? `${joinedString.substr(0, joinedString.length - (separator.length + ' '.length))}` : '';
    }
}