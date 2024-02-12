const yargs = require('yargs')

const options = yargs
	.command('current', 'Get current date and time', {
		year: {
			alias: 'y',
			describe: 'Get current year',
			type: 'boolean',
		},
		month: {
			alias: 'm',
			describe: 'Get current month',
			type: 'boolean',
		},
		date: {
			alias: 'd',
			describe: 'Get date in calendar month',
			type: 'boolean',
		},
	})
	.command('add', 'Add time', {
		days: {
			alias: 'd',
			describe: 'Add days to current date',
			type: 'number',
		},
		months: {
			alias: 'm',
			describe: 'Add months to current date',
			type: 'number',
		},
	})
	.command('sub', 'Subtract time', {
		days: {
			alias: 'd',
			describe: 'Subtract days from current date',
			type: 'number',
		},
		months: {
			alias: 'm',
			describe: 'Subtract months from current date',
			type: 'number',
		},
	})
	.help().argv

const getDate = () => {
	const now = new Date()

	if (options.year) {
		console.log(now.getFullYear())
	} else if (options.month) {
		console.log(now.getMonth() + 1)
	} else if (options.date) {
		console.log(now.getDate())
	} else if (options._[0] === 'add') {
		const { days, months } = options
		if (days) {
			now.setDate(now.getDate() + days)
		} else if (months) {
			now.setMonth(now.getMonth() + months)
		}
		console.log(now.toISOString())
	} else if (options._[0] === 'sub') {
		const { days, months } = options
		if (days) {
			now.setDate(now.getDate() - days)
		} else if (months) {
			now.setMonth(now.getMonth() - months)
		}
		console.log(now.toISOString())
	} else {
		console.log(now.toISOString())
	}
}

getDate()

// Для получения других значений, использовать команды:
// - `node cmd.js current --year` для получения текущего года,
// - `node cmd.js current --month` для получения текущего месяца,
// - `node cmd.js current --date` для получения даты в текущем календарном месяце.

// Также использовать команды `add` и `sub` для добавления или вычитания времени:
// - `node cmd.js add -d 2` для получения даты и времени через
