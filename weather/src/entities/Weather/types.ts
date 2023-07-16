export interface IWeatherGeoData {
    name: string
    local_names: Record<string, string>,
    lat: number,
    lon: number,
    country: string,
    state: string
}