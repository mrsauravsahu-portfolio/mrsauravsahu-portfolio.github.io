subinclude("///pleasings//docker")
subinclude("//common/lint_eslint")

sh_cmd(
  name = "compose",
  srcs = glob(["src/**/*", "package*"], ["node_modules"]),
  cmd = "docker-compose -f svc/api/docker-compose.yml --project-name $PROJECT \\\$@",
  deps = ["//common/docker/dotnet-dev:image"],
)

docker_image(
  name = "api",
  srcs = glob(["*"], ["node_modules", "dist"]),
  dockerfile = "Dockerfile",
  visibility = ["//svc/api/..."]
)

gentest(
  name = "test",
  data = glob(["*"], ["node_modules", "dist"]),
  test_cmd = "npm --prefix svc/api ci && npm --prefix svc/api t",
  no_test_output = True
)

lint(package = "//svc/api")
lint(name = "lint_fix", args = "--fix", package = "//svc/api")
