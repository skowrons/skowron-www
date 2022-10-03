
.Phony: watch_tailwind
watch_tailwind:
	npm run watch
	
.Phony: watch_hugo
watch_hugo:
	hugo server --disableFastRender

.Phony: dev
dev:
	./watch.sh