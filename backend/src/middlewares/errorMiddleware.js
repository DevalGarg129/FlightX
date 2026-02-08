// Route Not Found
export const notFound = (req, res, next) => {
    res.status(404).json({
        message: `Route not Found ${req.originalUrl}`,
    });
};

//Main Error handler
export const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        message: err.message || "Server error",
    });
};