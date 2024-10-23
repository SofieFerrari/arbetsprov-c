export const handleError = (err, req, res, next) => {
	res.status(500).json({ message: "Internal server error" })
}
