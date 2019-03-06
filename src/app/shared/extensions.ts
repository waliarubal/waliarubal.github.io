import { DomSanitizer } from "@angular/platform-browser";

export class Extensions {

    private static readonly BING_MAP_API_KEY: string = "AvTFCCjxuskfSOPXwR1nbvErOs7It3nBDr-vigU6Bwj1PGL9KlkQHF_5QcMwj3Uv";

    static GetMapImageUrl(latitude: number, longitude: number): string {
        let url = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${latitude},${longitude}/15?mapSize=1280,680&pushpin=${latitude},${longitude}&format=png&mapMetadata=0&key=${this.BING_MAP_API_KEY}`;
        return url;
    }
}