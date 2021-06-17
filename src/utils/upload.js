/* --------------------------------------------------------
 * Author Trần Đức Tiến
 * Email ductienas@gmail.com
 * Phone 0972970075
 *
 * Created: 2018-09-18 10:09:32
 *------------------------------------------------------- */

import AuthStorage from 'src/utils/auth-storage';
import URL from 'src/constants/urls';
import { notification } from 'antd';

// import 'isomorphic-unfetch';

const { API_URL } = URL;

const upload = (file, next = f => f, nextErr = f => f) => {
	const { name, renameFile, type } = file;

	const options = {
		method: 'POST',
		body: JSON.stringify({
			fileName: renameFile || name,
			contentType: type,
		}),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	};

	// set token
	if (AuthStorage.loggedIn) {
		options.headers.Authorization = AuthStorage.token;
	}

	fetch(API_URL + '/containers/get-signed-url', options)
		.then(response => {
			return response.status === 204 || response.statusText === 'No Content'
				? {}
				: response.json();
		})
		.then(res => {
			if (res.error) {
				throw res.error;
			} else {
				const optionsS3 = {
					method: 'PUT',
					body: file,
					headers: {
						'Content-Type': type,
					},
				};

				return fetch(res.singedUrl, optionsS3)
					.then(response => {
						if (response.status === 200) {
							notification.success({
								message: 'Uploaded',
								description: 'Uploaded successfully.',
							});
							return next(res);
						}

						return nextErr(response);
					})
					.catch(err => {
						console.log('err upload s3', err);
						notification.error({
							message: 'Error',
							description:
								'Please try again. Make sure you are uploading a valid file. (Err upload s3)' +
								err,
						});
						return nextErr(err);
					});
			}
		})
		.catch(err => {
			console.log('err upload api', err);
			notification.error({
				message: 'Error',
				description:
					'Please try again. Make sure you are uploading a valid file. (Err upload api)' +
					err,
			});
			return nextErr(err);
		});
};

export default upload;
