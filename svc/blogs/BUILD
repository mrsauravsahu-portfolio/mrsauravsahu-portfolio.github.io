subinclude("///pleasings//docker")
subinclude("//common/lint_dotnet")

sh_cmd(
  name = "compose",
  cmd = "docker-compose -f svc/blogs/docker-compose.yml --project-name $PROJECT \\\$@",
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
