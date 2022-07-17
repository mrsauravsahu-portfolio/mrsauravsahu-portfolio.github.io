subinclude("///pleasings//docker")
subinclude("//common/lint_eslint")

sh_cmd(
  name = "compose",
  cmd = "cat svc/docs/docker-compose.yml | sed 's/\\\${PROJECT}/${PROJECT}/g' | docker-compose --project-name \${PROJECT} -f - \\\$@",
)

docker_image(
  name = "docs",
  srcs = glob(["*"], ["node_modules", "dist"]),
  dockerfile = "Dockerfile",
  visibility = ["//svc/docs/..."]
)

gentest(
  name = "test",
  test_cmd = "echo todo",
  no_test_output = True
)

lint(package = "//svc/docs")
lint(name = "lint_fix", args = "--fix", package = "//svc/docs")
