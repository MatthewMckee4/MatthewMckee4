dev:
	uv sync
	uv run pre-commit install

docs:
	uv run mkdocs build

docs-serve:
	uv run mkdocs serve

.PHONY: dev docs docs-serve
