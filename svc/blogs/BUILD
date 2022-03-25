subinclude("///pleasings//docker")

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