// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	if (req.method === 'POST') {
		res.status(200).json({
			statusCode: 200,
			result: { success: true },
		});
	} else {
		res.status(404).json({ message: 'Api is not found' });
	}
}
