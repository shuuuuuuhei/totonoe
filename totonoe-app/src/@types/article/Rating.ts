export type RatingScore = {
    totonoi_score: number|undefined,
    relax_score: number|undefined,
    price_score: number|undefined,
    service_score: number|undefined,
    ambience_score: number|undefined,
}

export interface RatingProperty {
    id: keyof RatingScore
    name: string
}

export type RatingOptionProps = {
    id: keyof RatingScore,
}