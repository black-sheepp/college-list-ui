interface UserReviews {
	rating: number;
	reviews_count: number;
	highlight: string;
}

interface Ranking {
	national_rank: number;
	source: string;
	year: number;
}

interface Institution {
	id: number;
	rank: number;
	name: string;
	location: string;
	approved: string;
	course: string;
	cutoff: string;
	fees: number;
	average_placement: number;
	highest_placement: number;
	user_reviews: UserReviews;
	ranking: Ranking;
	featured: boolean;
}
