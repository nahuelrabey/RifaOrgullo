import reader from 'g-sheets-api';
/** @type {import('./$types').PageLoad} */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function load() {
	return new Promise((res, rej) => {
        console.log("INSIDE")
		reader(
			{
				apiKey: 'AIzaSyAt8KIK8Xxih3P-IeDEE8Tvr_I2kb6DSfY',
				sheetId: '1r6Fa8cj3WV89hcd0mbdlaPEKC6rExOKgtGX-M0ljBnw',
				// sheetName: 'Sheet3'
			},
			(results: unknown) => {
				res({results});
			},
			(error: never) => {
                // console.log(error)
				rej(error);
			}
		);
	});
}
