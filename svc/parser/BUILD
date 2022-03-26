subinclude("///pleasings//docker")
subinclude ("//common/lint_dotnet")

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
