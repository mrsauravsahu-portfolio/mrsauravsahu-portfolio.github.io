subinclude("///pleasings//docker")
subinclude("//common/lint_eslint")

sh_cmd(
  name = "compose",
  cmd = "cat svc/api/docker-compose.yml | sed 's/\\\${PROJECT}/${PROJECT}/g' | docker-compose --project-name \${PROJECT} -f - \\\$@",
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
