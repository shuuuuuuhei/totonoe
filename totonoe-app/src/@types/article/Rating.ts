export type RatingScore = {
    totonoi_score: number,
    relax_score: number,
    price_score: number,
    service_score: number,
    ambience_score: number,
}

export interface RatingProperty {
    id: keyof RatingScore
    name: string
}

export type RatingOptionProps = {
    id: keyof RatingScore,
}