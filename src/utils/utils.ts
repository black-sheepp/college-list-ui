export const formatCurrency = (amount: number) => {
    return `₹ ${amount.toLocaleString('en-IN')}`;
};

export const formatRating = (rating: number) => {
    return `${rating}/10`;
};
