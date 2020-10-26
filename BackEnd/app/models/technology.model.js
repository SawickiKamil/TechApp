module.exports = mongoose => {
    const Technology = mongoose.model(
        "technology",
        mongoose.Schema(
            {
                name: String,
                language: String,
                description: String,
                initRelease: Number,
            },
        )
    );
    return Technology;
};