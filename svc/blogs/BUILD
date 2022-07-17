subinclude("///pleasings//docker")
subinclude("//common/lint_dotnet")

sh_cmd(
  name = "compose",
  cmd = "cat svc/blogs/docker-compose.yml | sed 's/\\\${PROJECT}/${PROJECT}/g' | docker-compose --project-name \${PROJECT} -f - \\\$@",
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
