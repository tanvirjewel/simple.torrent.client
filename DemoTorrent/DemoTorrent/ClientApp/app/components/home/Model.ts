export class Movie {
    constructor(public id?: number,
        public title?: string,
        public title_long?: string,
        public year?: number,
        public rating?: number,
        public runtime?: number,
        public genres?: Array<string>,
        public language?: string,
        public background_image?: string,
        public small_cover_image?: string,
        public medium_cover_image?: string,
        public torrents?: Array<Torrent>) {

    }
}


export class Torrent {
    constructor(public url?: string,
        public quality?: string,
        public seeds?: number,
        public peers?: number,
        public size?: string,
        public download_count?: string,
        public date_uploaded?: any) {

    }

}