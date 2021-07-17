import Router from 'next/router';
import { useEffect } from 'react';

import useBeforeUnload from 'react-use/lib/useBeforeUnload';

const useWarnIfUnsavedChanges = (unsavedChanges, message = 'You have unsaved changes, are you sure?') => {
	useBeforeUnload(unsavedChanges, message);

	useEffect(() => {
		const routeChangeStart = (url, opts) => {
			if (unsavedChanges) {
				// eslint-disable-next-line no-alert
				const r = window.confirm(message);

				if (!r) {
					Router.events.emit('routeChangeError');
					// Router.replace(Router, Router.asPath, { shallow: true });
					// eslint-disable-next-line no-throw-literal
					throw 'Abort route change. Please ignore this error.';
				}
			}
		};

		Router.events.on('routeChangeStart', routeChangeStart);

		return () => {
			Router.events.off('routeChangeStart', routeChangeStart);
		};
	}, [message, unsavedChanges]);
};

export default useWarnIfUnsavedChanges;
