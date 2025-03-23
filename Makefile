dev:
	uv sync
	uv run pre-commit run install

docs:
	uv run mkdocs build

docs-serve:
	uv run mkdocs serve