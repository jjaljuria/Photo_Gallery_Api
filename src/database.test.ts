function hola(name: string) {
	return "hola " + name;
}

test('database connection', () => {
	expect(hola('jose')).toBe('hola jose');
})