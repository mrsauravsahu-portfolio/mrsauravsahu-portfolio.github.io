subinclude("///pleasings//docker")
subinclude("//common/lint_eslint")

sh_cmd(
  name = "compose",
  srcs = glob(["src/**/*", "package*"], ["node_modules"]),
  cmd = "docker-compose -f svc/store/docker-compose.yml --project-name $PROJECT \\\$@",
  deps = ["//common/docker/dotnet-dev:image"],
)

docker_image(
  name = "store",
  srcs = glob(["*"], ["node_modules", "dist"]),
  dockerfile = "Dockerfile"
)

sh_cmd(
  name = "dev",
  srcs = glob(["*"], ["node_modules"]),
  cmd = "npm --prefix svc/store ci && npm --prefix svc/store start"
)

gentest(
  name = "test",
  test_cmd = "echo todo",
  no_test_output = True
)

lint(package = "//svc/store")
lint(name = "lint_fix", args = "--fix", package = "//svc/store")
