send:
	git push origin master
deploy:
	make build && npm publish --access=public
beta:
	make build && npm publish --access=public --tag beta && make send
build: 
	make build
clone:
	cd sdk-test && cp ../db-sdk/tsconfig.json . &&  npm link ../db-sdk	

