// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	if (req.method === 'POST') {
		const { body: { email, password } = {} } = req;

		if (email !== 'admin@gmail.com' || password !== 'admin123') {
			return res.status(403).json({ message: 'Email or password is not correct' });
		}

		res.status(200).json({
			statusCode: 200,
			result: {
				created: '2021-06-19T10:23:18.855Z',
				id: 'xD1x2ulUbNBKpClwHceJKDGjxa7hyMHQlH03EA4gVDV2hDdGZvfFybyHRR1RQGz6Lom',
				ttl: 31556926,
				user: {
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
				userId: '5aa2b060ccec81437a61ec0f',
			},
		});
	} else {
		res.status(404).json({ message: 'Api is not found' });
	}
}
