subinclude("///pleasings//docker")

docker_image(
  name = "build",
  srcs = glob(["*"]),
  dockerfile = "Dockerfile",
  visibility = ["//svc/blogs/..."]
)
