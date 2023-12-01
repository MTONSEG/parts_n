export const getUnit = (category: string):string => {
	switch (category) {
		case 'capacity':
			return 'mAh'
		case 'voltage':
			return 'V'
		case 'amperage':
			return 'A'
		case 'size':
			return '"'
		case 'power':
			return 'W'
		case 'memory':
			return 'GB'
		case 'speed':
			return 'mHz'
		default:
			return ''
	}
}