import moment from 'moment';

moment.locale('en', {
	week: {
		dow: 1,
	},
});

moment.prototype.formatCustom = function (date) { // eslint-disable-line
	const diff = moment().diff(this, 'days');
	if (diff < 5) {
		return this.fromNow();
	}
	return this.format('MM-DD-YYYY HH:mm');
};

export default moment;
