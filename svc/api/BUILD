subinclude("///pleasings//docker")

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