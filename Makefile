build: components frontend.js
	@component build --out public/build -v -p /build

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
