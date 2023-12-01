export const objectFilterToArray = (object: { [key: string]: string[] }): string[] => {
	let arrItems: string[] = []

	for (let key in object) {
		arrItems = [...arrItems, ...object[key]]
	}

	return arrItems
}
