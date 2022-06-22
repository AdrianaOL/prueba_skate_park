const {
	SkatersGet,
	SkatersPost,
	SkatersPut,
	SkatersDelete,
} = require('./queries')

const getSkaters = async (req, res) => {
	try {
		const Skaters = await SkatersGet()
		res.json(Skaters)
	} catch (error) {
		console.log(error)
	}
}

const postSkaters = async (req, res) => {
	const body = req.body
	try {
		const response = await SkatersPost(body)
		res.json(response)
	} catch (error) {
		console.log(error)
	}
}

const putSkaters = async (req, res) => {
	const { id } = req.params
	const body = req.body
	try {
		const response = await SkatersPut(body, id)
		res.json(response)
	} catch (error) {
		console.log(error)
	}
}

const deleteCourse = async (req, res) => {
	const { id } = req.params
	try {
		const response = await SkatersDelete(id)
		res.json(response)
	} catch (error) {
		console.log(error)
	}
}

module.exports = { getSkaters, postSkaters, putSkaters, deleteCourse }