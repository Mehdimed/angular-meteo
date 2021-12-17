export class Meteo {
    ville!: string;
    pays!: string;
    temperature!: number;
    description!: string;
    icon!: string;
    coord!: {
        lat: number;
        lon: number
    }
}