// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	res.status(200).json({
		statusCode: 200,
		result: {
			avatar: 'https://i.pravatar.cc/150?img=37',
			birthDate: '1989-12-31T17:00:00.000Z',
			branch: 'all',
			createdAt: '2018-03-09T16:03:43.959Z',
			email: 'admin@gmail.com',
			fullName: 'admin',
			gender: 'male',
			id: '5aa2b060ccec81437a61ec0f',
			phone: '123123123',
			status: 'active',
			updatedAt: '2019-10-30T01:10:33.400Z',
		},
	});
}
