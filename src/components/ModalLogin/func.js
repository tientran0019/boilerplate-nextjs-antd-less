/* eslint-disable no-use-before-define */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-02-23 22:24:56
*------------------------------------------------------- */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Modal } from 'antd';

import LoginForm from 'src/components/Forms/LoginForm';

import AuthStorage from 'src/utils/auth-storage';

import wrapperStore from 'src/redux';

export const destroyFns = [];

const FormLogin = wrapperStore.withRedux(LoginForm);

export default function open(config) {
	// Modal.destroyAll();

	if (AuthStorage.loggedIn) {
		return;
	}

	const div = document.createElement('div');
	document.body.appendChild(div);
	let currentConfig = { ...config, close, visible: true };

	function destroy(...args) {
		const unmountResult = ReactDOM.unmountComponentAtNode(div);
		if (unmountResult && div.parentNode) {
			div.parentNode.removeChild(div);
		}
		const triggerCancel = args.some(param => param && param.triggerCancel);
		if (config.onCancel && triggerCancel) {
			config.onCancel(...args);
		}
		for (let i = 0; i < destroyFns.length; i++) {
			const fn = destroyFns[i];
			if (fn === close) {
				destroyFns.splice(i, 1);
				break;
			}
		}
	}

	function render({ okText, cancelText, prefixCls: customizePrefixCls, ...props }) {
		setTimeout(() => {
			const attr = {
				...props,
				footer: null,
				title: null,
				closable: false,
				destroyOnClose: true,
				forceRender: true,
				onCancel: close,
			};

			ReactDOM.render(
				<Modal
					{...attr}
					style={{
						maxWidth: 420,
					}}
				>
					<FormLogin
						{...attr}
						onDestroy={destroy}
						onUpdate={update}
					/>
				</Modal>,
				div,
			);
		});
	}

	function close(...args) {
		currentConfig = {
			...currentConfig,
			visible: false,
			afterClose: () => {
				if (typeof config.afterClose === 'function') {
					config.afterClose();
				}
				destroy.apply(this, args);
			},
		};
		render(currentConfig);
	}

	function update(configUpdate) {
		if (typeof configUpdate === 'function') {
			currentConfig = configUpdate(currentConfig);
		} else {
			currentConfig = {
				...currentConfig,
				...configUpdate,
			};
		}
		render(currentConfig);
	}

	render(currentConfig);

	destroyFns.push(close);

	return {
		close,
		update,
	};
}
