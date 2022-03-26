subinclude("///pleasings//docker")
subinclude("//common/lint_dotnet")

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
lint(name = "lint_fix", args = "--fix", package = "//svc/blogs")
