subinclude("///pleasings//docker")
subinclude ("//common/lint_dotnet")

sh_cmd(
  name = "compose",
  srcs = glob(["src/**/*", "package*"], ["node_modules"]),
  cmd = "docker-compose -f svc/parser/docker-compose.yml --project-name $PROJECT \\\$@",
  deps = ["//common/docker/dotnet-dev:image"],
)

docker_image(
    name="parser",
    srcs = glob(["*"], ["bin", "obj", "dist"]),
    dockerfile = "Dockerfile",
    visibility = ["//svc/parser/..."]
)

gentest(
  name = "test",
  test_cmd = "echo todo",
  no_test_output = True
)

lint(package = "//svc/parser")
lint_fix(package = "//svc/parser")
