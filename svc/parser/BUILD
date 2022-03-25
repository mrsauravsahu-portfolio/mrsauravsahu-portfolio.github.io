subinclude("///pleasings//docker")

docker_image(
    name="build",
    srcs = glob(["*"], ["bin", "obj", "dist"]),
    dockerfile = "Dockerfile",
    visibility = ["//svc/parser/..."]
)

gentest(
  name = "test",
  test_cmd = "echo todo",
  no_test_output = True
)
