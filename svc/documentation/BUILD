subinclude("///pleasings//docker")

docker_image(
  name = "documentation",
  srcs = glob(["*"], ["node_modules", "dist"]),
  dockerfile = "Dockerfile",
  visibility = ["//svc/documentation/..."]
)

gentest(
  name = "test",
  test_cmd = "echo todo",
  no_test_output = True
)
