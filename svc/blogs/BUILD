subinclude("///pleasings//docker")
subinclude("//common/lint_dotnet")

sh_cmd(
  name = "compose",
  srcs = glob(["src/**/*", "package*"], ["node_modules"]),
  cmd = "docker-compose -f svc/blogs/docker-compose.yml --project-name $PROJECT \\\$@",
  deps = ["//common/docker/dotnet-dev:image"],
)

docker_image(
  name = "blogs",
  srcs = glob(["*"]),
  dockerfile = "Dockerfile",
  visibility = ["//svc/blogs/..."]
)

gentest(
  name = "test",
  test_cmd = "echo todo",
  no_test_output = True
)

lint(package = "//svc/blogs")
lint_fix(package = "//svc/blogs")
