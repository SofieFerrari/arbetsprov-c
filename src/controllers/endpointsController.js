import expressListEndpoints from "express-list-endpoints"

export const displayEndpoints = (app) => (req, res, next) => {
	try {
		const endpoints = expressListEndpoints(app)
		res.json(endpoints)
	} catch (error) {
		next(error)
	}
}
