subinclude("///pleasings//docker")
subinclude("//common/lint_eslint")

sh_cmd(
  name = "compose",
  srcs = glob(["src/**/*", "package*"], ["node_modules"]),
  cmd = "docker-compose -f svc/documentation/docker-compose.yml --project-name $PROJECT \\\$@",
  deps = ["//common/docker/dotnet-dev:image"],
)

docker_image(
  name = "documentation",
  srcs = glob(["*"], ["node_modules", "dist"]),
  dockerfile = "Dockerfile",
  visibility = ["//svc/documentation/..."]
)

gentest(
  name = "test",
  test_cmd = "echo todo",
  no_test_output = True
)

lint(package = "//svc/documentation")
lint(name = "lint_fix", args = "--fix", package = "//svc/documentation")
